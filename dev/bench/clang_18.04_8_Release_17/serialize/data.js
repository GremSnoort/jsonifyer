window.BENCHMARK_DATA = {
  "lastUpdate": 1705959958559,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-8 18.04 Release c++-17": [
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
        "date": 1702490309081,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 696.7708094518679,
            "unit": "ns/iter",
            "extra": "iterations: 1002345\ncpu: 696.7649861075778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10701.487435171059,
            "unit": "ns/iter",
            "extra": "iterations: 77319\ncpu: 10701.275236358462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23627.615491953744,
            "unit": "ns/iter",
            "extra": "iterations: 35115\ncpu: 23627.56371920831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38077.5002862815,
            "unit": "ns/iter",
            "extra": "iterations: 22705\ncpu: 38076.60867650299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47319.513354182876,
            "unit": "ns/iter",
            "extra": "iterations: 16624\ncpu: 47319.79667949956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58986.72626900462,
            "unit": "ns/iter",
            "extra": "iterations: 14401\ncpu: 58986.44538573714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59302.82030000172,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59302.19000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68286.75866709642,
            "unit": "ns/iter",
            "extra": "iterations: 12634\ncpu: 68284.02722811465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78383.16582689037,
            "unit": "ns/iter",
            "extra": "iterations: 11114\ncpu: 78381.46481914702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 575.3533808819639,
            "unit": "ns/iter",
            "extra": "iterations: 1213914\ncpu: 575.334249378457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 478.49224009769205,
            "unit": "ns/iter",
            "extra": "iterations: 1460972\ncpu: 478.4944543769486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 472.76674486895877,
            "unit": "ns/iter",
            "extra": "iterations: 1480349\ncpu: 472.7575051558777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 480.75244203556315,
            "unit": "ns/iter",
            "extra": "iterations: 1464045\ncpu: 480.7551680446982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 928.9909861741709,
            "unit": "ns/iter",
            "extra": "iterations: 753731\ncpu: 928.9877953805818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3315.6755877454234,
            "unit": "ns/iter",
            "extra": "iterations: 239134\ncpu: 3315.5155686769776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14582.00557677481,
            "unit": "ns/iter",
            "extra": "iterations: 55767\ncpu: 14581.142969856752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11551.858049527456,
            "unit": "ns/iter",
            "extra": "iterations: 70588\ncpu: 11551.765172550562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11328.857333667209,
            "unit": "ns/iter",
            "extra": "iterations: 71874\ncpu: 11328.736399810767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11744.239640475282,
            "unit": "ns/iter",
            "extra": "iterations: 69091\ncpu: 11743.918889580396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42148.35048602209,
            "unit": "ns/iter",
            "extra": "iterations: 19958\ncpu: 42146.63793967335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 445307.4373737658,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 445265.85858585767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359569.11589403864,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 359568.12913907244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 363422.50664454076,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 363411.08803986694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 364124.9520033376,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 364113.98163606005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 220139.16540018228,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 220137.94326241134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 357989.9172498751,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 357977.4392754221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1845353.257999932,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1845223.599999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 733124.8871349732,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 733094.2383583287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2496478.6422765492,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2496420.0542005477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3310.5761857551765,
            "unit": "ns/iter",
            "extra": "iterations: 239067\ncpu: 3310.4962207247318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15016.151557365218,
            "unit": "ns/iter",
            "extra": "iterations: 53841\ncpu: 15016.231124979047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11771.690951972963,
            "unit": "ns/iter",
            "extra": "iterations: 69960\ncpu: 11771.752429959935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11588.133079902098,
            "unit": "ns/iter",
            "extra": "iterations: 69710\ncpu: 11588.04619136417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11663.095558900617,
            "unit": "ns/iter",
            "extra": "iterations: 68429\ncpu: 11662.645954200725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41625.23238982914,
            "unit": "ns/iter",
            "extra": "iterations: 20173\ncpu: 41622.83745600562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 441917.02991886344,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 441899.59432048665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 364540.0319596388,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 364521.4886459224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 369055.2725340118,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 369047.2363945573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 367711.54472910264,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 367710.0797984024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 218427.35280900134,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 218422.79650436883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 367819.9113817847,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 367814.53170936723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1856980.4847249058,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1856740.122199588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 750457.7637540996,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 750446.5210356023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3681.6012688843066,
            "unit": "ns/iter",
            "extra": "iterations: 214992\ncpu: 3681.565360571575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16467.614832204974,
            "unit": "ns/iter",
            "extra": "iterations: 50687\ncpu: 16466.997454968783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13071.40103526978,
            "unit": "ns/iter",
            "extra": "iterations: 64331\ncpu: 13071.329530086587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12791.694705295018,
            "unit": "ns/iter",
            "extra": "iterations: 65065\ncpu: 12791.614539306862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13181.210664827453,
            "unit": "ns/iter",
            "extra": "iterations: 63836\ncpu: 13181.13916912091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41556.69793267585,
            "unit": "ns/iter",
            "extra": "iterations: 20171\ncpu: 41555.113777204744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 447306.56398349244,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 447305.15995872027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 363467.37024656206,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 363455.4116172184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 363075.9130977096,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 363067.11018711247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 363282.2981210861,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 363280.75156576216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221906.42770931995,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 221900.65375911354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 361364.8444070789,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 361362.3212783848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 294.4240654205627,
            "unit": "ns/iter",
            "extra": "iterations: 2377112\ncpu: 294.41103322014396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1475.8620644454234,
            "unit": "ns/iter",
            "extra": "iterations: 472989\ncpu: 1475.8560981333576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1058.6121386391578,
            "unit": "ns/iter",
            "extra": "iterations: 661458\ncpu: 1058.5957082686994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1142.843085002164,
            "unit": "ns/iter",
            "extra": "iterations: 663818\ncpu: 1142.814144840906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 968.347077785854,
            "unit": "ns/iter",
            "extra": "iterations: 724656\ncpu: 968.3444282528503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7493.984959096236,
            "unit": "ns/iter",
            "extra": "iterations: 93146\ncpu: 7493.721684237712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18790.355867688417,
            "unit": "ns/iter",
            "extra": "iterations: 37306\ncpu: 18790.296467056225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4406.5622422121505,
            "unit": "ns/iter",
            "extra": "iterations: 158076\ncpu: 4406.442470710331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4422.626886395937,
            "unit": "ns/iter",
            "extra": "iterations: 158437\ncpu: 4422.600150217456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4430.347501642435,
            "unit": "ns/iter",
            "extra": "iterations: 158264\ncpu: 4430.325279280184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9295.077348066336,
            "unit": "ns/iter",
            "extra": "iterations: 75115\ncpu: 9295.13013379495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8370.273551461509,
            "unit": "ns/iter",
            "extra": "iterations: 83498\ncpu: 8370.05796546029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3247.576338787776,
            "unit": "ns/iter",
            "extra": "iterations: 215120\ncpu: 3247.5474153960663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16064.986516906562,
            "unit": "ns/iter",
            "extra": "iterations: 42201\ncpu: 16064.462927418615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12878.057317118195,
            "unit": "ns/iter",
            "extra": "iterations: 54434\ncpu: 12874.932946320474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12755.288353458394,
            "unit": "ns/iter",
            "extra": "iterations: 53913\ncpu: 12755.064641181083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13381.685956567535,
            "unit": "ns/iter",
            "extra": "iterations: 52359\ncpu: 13381.603926736725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28272.26330034527,
            "unit": "ns/iter",
            "extra": "iterations: 24755\ncpu: 28271.371440113257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99866.68554769564,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 99864.01499375189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84802.81107886048,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 84803.30188679318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84703.811807236,
            "unit": "ns/iter",
            "extra": "iterations: 8300\ncpu: 84702.26506024078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85261.25603511637,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 85257.27871250964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55169.456946854196,
            "unit": "ns/iter",
            "extra": "iterations: 12682\ncpu: 55166.235609525575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85124.5968954611,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 85119.23356779054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3111.8185630159505,
            "unit": "ns/iter",
            "extra": "iterations: 224651\ncpu: 3111.6807848618246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15408.977002414376,
            "unit": "ns/iter",
            "extra": "iterations: 45570\ncpu: 15408.255431204638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12394.829764661961,
            "unit": "ns/iter",
            "extra": "iterations: 56557\ncpu: 12394.42862952425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12416.74713849011,
            "unit": "ns/iter",
            "extra": "iterations: 56264\ncpu: 12416.467012654506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12895.534411910667,
            "unit": "ns/iter",
            "extra": "iterations: 54269\ncpu: 12895.00082920261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27684.67393199577,
            "unit": "ns/iter",
            "extra": "iterations: 25234\ncpu: 27683.637156217723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97293.79877624256,
            "unit": "ns/iter",
            "extra": "iterations: 7191\ncpu: 97289.30607704144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83817.27416080296,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 83812.44773623224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82879.61136095243,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 82874.99408283892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82627.48505338101,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 82625.82443653599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54924.28167030994,
            "unit": "ns/iter",
            "extra": "iterations: 12788\ncpu: 54922.263059117715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83041.79391211584,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 83036.87078052836 ns\nthreads: 1"
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
        "date": 1702492923337,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 727.7801438866762,
            "unit": "ns/iter",
            "extra": "iterations: 961729\ncpu: 727.7627065420717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10790.173648310732,
            "unit": "ns/iter",
            "extra": "iterations: 77847\ncpu: 10789.401004534537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24050.91321874012,
            "unit": "ns/iter",
            "extra": "iterations: 34731\ncpu: 24049.88338947914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37851.8893651241,
            "unit": "ns/iter",
            "extra": "iterations: 22398\ncpu: 37850.504509331186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46223.61318629665,
            "unit": "ns/iter",
            "extra": "iterations: 16866\ncpu: 46219.84465789163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58402.249345462784,
            "unit": "ns/iter",
            "extra": "iterations: 14514\ncpu: 58399.03541408297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58852.10090000328,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58848.85999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67665.09504164806,
            "unit": "ns/iter",
            "extra": "iterations: 12847\ncpu: 67661.58636257492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77425.47466500686,
            "unit": "ns/iter",
            "extra": "iterations: 11269\ncpu: 77425.17525956157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 563.5398369604751,
            "unit": "ns/iter",
            "extra": "iterations: 1243870\ncpu: 563.5270566859884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 467.819388517309,
            "unit": "ns/iter",
            "extra": "iterations: 1494008\ncpu: 467.8167720654773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 461.41736844601513,
            "unit": "ns/iter",
            "extra": "iterations: 1517096\ncpu: 461.40718847060435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 461.97189377468123,
            "unit": "ns/iter",
            "extra": "iterations: 1502692\ncpu: 461.9525491584433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 915.9540103836271,
            "unit": "ns/iter",
            "extra": "iterations: 762346\ncpu: 915.949844296422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3343.946931427954,
            "unit": "ns/iter",
            "extra": "iterations: 237749\ncpu: 3343.848764873874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14429.953852667046,
            "unit": "ns/iter",
            "extra": "iterations: 56688\ncpu: 14430.045159469351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11761.030362826026,
            "unit": "ns/iter",
            "extra": "iterations: 69427\ncpu: 11760.570095207917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11491.8865218062,
            "unit": "ns/iter",
            "extra": "iterations: 70551\ncpu: 11491.849867471781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11424.970394596867,
            "unit": "ns/iter",
            "extra": "iterations: 70629\ncpu: 11424.67400076453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41870.30937818853,
            "unit": "ns/iter",
            "extra": "iterations: 19620\ncpu: 41869.933741080524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 443991.3772151883,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 443973.6708860754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359254.0430820296,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 359231.7315658659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 361301.9127377595,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 361288.9164598838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 362447.4814969119,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 362438.3367983374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 220203.1834885444,
            "unit": "ns/iter",
            "extra": "iterations: 3973\ncpu: 220201.53536370484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 358980.0418739593,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 358958.58208955324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1857529.2008032342,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1857539.5582329256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 722526.4123475691,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 722485.1371951215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2499813.0733697335,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2499683.69565218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3294.5126993774425,
            "unit": "ns/iter",
            "extra": "iterations: 236862\ncpu: 3294.4051810759147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14468.303950191743,
            "unit": "ns/iter",
            "extra": "iterations: 56858\ncpu: 14468.206760702156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11758.158755923003,
            "unit": "ns/iter",
            "extra": "iterations: 68999\ncpu: 11757.950115219131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11599.571837370113,
            "unit": "ns/iter",
            "extra": "iterations: 70590\ncpu: 11599.37243235585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11485.185327626315,
            "unit": "ns/iter",
            "extra": "iterations: 69164\ncpu: 11484.783991671991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41490.15514224097,
            "unit": "ns/iter",
            "extra": "iterations: 20001\ncpu: 41489.94550272461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 460251.6522655357,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 460229.08324552287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 377466.6885813395,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 377449.13494809816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376294.0771632643,
            "unit": "ns/iter",
            "extra": "iterations: 2242\ncpu: 376296.8331846561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372641.93130101974,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 372627.2649205661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 218935.2769423544,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 218928.67167919758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372998.73063830094,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 372990.0851063827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1864374.1656442885,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1864326.3803681044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 737060.3927125809,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 737027.5303643733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3705.409754789114,
            "unit": "ns/iter",
            "extra": "iterations: 216222\ncpu: 3705.2977957839553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15198.688190478439,
            "unit": "ns/iter",
            "extra": "iterations: 51323\ncpu: 15198.00284472846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11828.438779429252,
            "unit": "ns/iter",
            "extra": "iterations: 70295\ncpu: 11828.188349100128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11606.086727989667,
            "unit": "ns/iter",
            "extra": "iterations: 71534\ncpu: 11605.5106662566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11909.74297789091,
            "unit": "ns/iter",
            "extra": "iterations: 69566\ncpu: 11909.069085472822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41882.431685828924,
            "unit": "ns/iter",
            "extra": "iterations: 20091\ncpu: 41880.18515753336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441026.6821705074,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 441029.0439276508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 365335.50466494675,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 365304.49533502886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367940.0343347657,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 367925.0214592282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366619.01107796474,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 366611.84490839456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222818.54984740698,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 222807.32451678647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364275.35264271195,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 364258.98520084476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 287.7045727589131,
            "unit": "ns/iter",
            "extra": "iterations: 2437172\ncpu: 287.6990626841277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1482.9422808727888,
            "unit": "ns/iter",
            "extra": "iterations: 457474\ncpu: 1482.900886170576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1146.2505560377235,
            "unit": "ns/iter",
            "extra": "iterations: 610570\ncpu: 1146.1642399724808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1163.0756682957913,
            "unit": "ns/iter",
            "extra": "iterations: 602802\ncpu: 1163.0075878978525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 967.5612084123334,
            "unit": "ns/iter",
            "extra": "iterations: 722270\ncpu: 967.5225331247253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7356.507844661439,
            "unit": "ns/iter",
            "extra": "iterations: 95224\ncpu: 7356.261026631909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18697.202870222514,
            "unit": "ns/iter",
            "extra": "iterations: 37349\ncpu: 18697.14584058473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4415.68104516529,
            "unit": "ns/iter",
            "extra": "iterations: 158176\ncpu: 4415.41510722237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4444.159915903769,
            "unit": "ns/iter",
            "extra": "iterations: 157439\ncpu: 4443.9611532085155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4453.117590901039,
            "unit": "ns/iter",
            "extra": "iterations: 157121\ncpu: 4453.003099522056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9297.82600000006,
            "unit": "ns/iter",
            "extra": "iterations: 75500\ncpu: 9297.435761589408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8411.329703233778,
            "unit": "ns/iter",
            "extra": "iterations: 82826\ncpu: 8410.880641344474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3274.333859484765,
            "unit": "ns/iter",
            "extra": "iterations: 212233\ncpu: 3274.2514123628102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16238.445193576388,
            "unit": "ns/iter",
            "extra": "iterations: 43161\ncpu: 16238.166400222492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13038.951670855276,
            "unit": "ns/iter",
            "extra": "iterations: 53715\ncpu: 13039.046821185857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13012.717595002552,
            "unit": "ns/iter",
            "extra": "iterations: 53788\ncpu: 13011.833494459845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13460.272082291933,
            "unit": "ns/iter",
            "extra": "iterations: 52010\ncpu: 13459.378965583554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28061.239680000654,
            "unit": "ns/iter",
            "extra": "iterations: 25000\ncpu: 28058.527999999682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99257.21638089609,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 99254.35737565413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85541.03501469297,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 85538.74877570945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85030.80356493573,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 85027.84042682228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85636.77580114515,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 85631.81430486178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 58102.51328205156,
            "unit": "ns/iter",
            "extra": "iterations: 12611\ncpu: 58098.69954801348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84846.9271627357,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 84844.54930429532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3158.1159209382427,
            "unit": "ns/iter",
            "extra": "iterations: 221953\ncpu: 3157.9789414875886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15702.30081609133,
            "unit": "ns/iter",
            "extra": "iterations: 44848\ncpu: 15701.534070638456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12571.758171580015,
            "unit": "ns/iter",
            "extra": "iterations: 55589\ncpu: 12571.27669143181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12599.511645864777,
            "unit": "ns/iter",
            "extra": "iterations: 55685\ncpu: 12599.023076232555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13015.289443326486,
            "unit": "ns/iter",
            "extra": "iterations: 53748\ncpu: 13015.23963682369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27312.638420761665,
            "unit": "ns/iter",
            "extra": "iterations: 25278\ncpu: 27311.223198037904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98206.3077246604,
            "unit": "ns/iter",
            "extra": "iterations: 7133\ncpu: 98200.98135426834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84220.46987371723,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 84216.96933253137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83185.0703115604,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 83180.97170824959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82678.04038811459,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 82678.66585809513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55241.05240726185,
            "unit": "ns/iter",
            "extra": "iterations: 12670\ncpu: 55235.50907655892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83769.89080939764,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 83763.70246751669 ns\nthreads: 1"
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
        "date": 1702503990415,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 698.8343474514571,
            "unit": "ns/iter",
            "extra": "iterations: 998240\ncpu: 698.75 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10523.30608947422,
            "unit": "ns/iter",
            "extra": "iterations: 77363\ncpu: 10522.788671587194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23287.97626005606,
            "unit": "ns/iter",
            "extra": "iterations: 35931\ncpu: 23287.12810664886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36799.911800698996,
            "unit": "ns/iter",
            "extra": "iterations: 22880\ncpu: 36798.780594405594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48342.156403867346,
            "unit": "ns/iter",
            "extra": "iterations: 17263\ncpu: 48341.203730521935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57824.773689304435,
            "unit": "ns/iter",
            "extra": "iterations: 14458\ncpu: 57822.3474892793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57664.32210000403,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57663.20999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66468.10695353751,
            "unit": "ns/iter",
            "extra": "iterations: 12828\ncpu: 66463.82132834433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76278.08350056276,
            "unit": "ns/iter",
            "extra": "iterations: 11461\ncpu: 76275.72637640701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 562.2277089422573,
            "unit": "ns/iter",
            "extra": "iterations: 1237088\ncpu: 562.1983238055818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 466.00146203566686,
            "unit": "ns/iter",
            "extra": "iterations: 1419938\ncpu: 465.9750636999636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 455.59652107332926,
            "unit": "ns/iter",
            "extra": "iterations: 1535991\ncpu: 455.578711073176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 461.6187771312424,
            "unit": "ns/iter",
            "extra": "iterations: 1518773\ncpu: 461.6024251155376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 920.9490961340184,
            "unit": "ns/iter",
            "extra": "iterations: 761396\ncpu: 920.9001623333974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3407.5660579467963,
            "unit": "ns/iter",
            "extra": "iterations: 233386\ncpu: 3407.4970221007275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 13981.781448778742,
            "unit": "ns/iter",
            "extra": "iterations: 58325\ncpu: 13980.877839691399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11104.889147704087,
            "unit": "ns/iter",
            "extra": "iterations: 74270\ncpu: 11104.27224989897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11615.242208207563,
            "unit": "ns/iter",
            "extra": "iterations: 70555\ncpu: 11614.522004110238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11492.791814097984,
            "unit": "ns/iter",
            "extra": "iterations: 71220\ncpu: 11492.266217354707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42193.72161246447,
            "unit": "ns/iter",
            "extra": "iterations: 19771\ncpu: 42191.290273632985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 425768.44928954885,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 425744.87996080355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 349563.77272729576,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 349539.553429028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 352807.0647249459,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 352793.1229773463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 351757.6722312581,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 351732.24755700224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 218138.99253173877,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 218129.49962658735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 352807.71213354816,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 352791.734527688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1823903.1163708095,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1823770.8086785001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 721579.339506189,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 721530.6327160514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2469617.3829785823,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2469457.7127659563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3336.270902173185,
            "unit": "ns/iter",
            "extra": "iterations: 239688\ncpu: 3336.1236273822665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15217.338604082981,
            "unit": "ns/iter",
            "extra": "iterations: 54072\ncpu: 15216.613034472504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12061.378049874633,
            "unit": "ns/iter",
            "extra": "iterations: 66888\ncpu: 12061.033369214214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11555.088443812047,
            "unit": "ns/iter",
            "extra": "iterations: 70949\ncpu: 11554.543404417322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11779.738624646403,
            "unit": "ns/iter",
            "extra": "iterations: 68855\ncpu: 11779.387117856326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41865.28065967063,
            "unit": "ns/iter",
            "extra": "iterations: 20010\ncpu: 41863.35832083936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 453113.9767318903,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 453095.2406134323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 372259.00042957754,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 372251.8900343664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372617.5853554688,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 372599.27628778096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 369114.9054053985,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 369104.22297297337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 216464.11601796804,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 216453.54291417217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 367174.39720811584,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 367152.8764805417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1862151.227822639,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1862031.4516129142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 734961.3256184425,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 734928.1723862779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3690.642231594334,
            "unit": "ns/iter",
            "extra": "iterations: 216724\ncpu: 3690.4897473284245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16628.7372595707,
            "unit": "ns/iter",
            "extra": "iterations: 49547\ncpu: 16628.205542212385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13195.776225687227,
            "unit": "ns/iter",
            "extra": "iterations: 62210\ncpu: 13195.262819482388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12970.165076259438,
            "unit": "ns/iter",
            "extra": "iterations: 63401\ncpu: 12969.688175265297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13241.015703547664,
            "unit": "ns/iter",
            "extra": "iterations: 61069\ncpu: 13240.432952889341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41628.984442141016,
            "unit": "ns/iter",
            "extra": "iterations: 20247\ncpu: 41627.66829653768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 439955.9110191634,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 439942.83497154573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 362883.75850623363,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 362865.7261410794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364368.1842105144,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 364360.4845446946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 364993.54710604664,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 364980.1013941672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 220797.92904541874,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 220786.72792240942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 359473.7064488881,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 359451.2981574528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 287.0436120328319,
            "unit": "ns/iter",
            "extra": "iterations: 2439258\ncpu: 287.0310971615122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1509.47921485491,
            "unit": "ns/iter",
            "extra": "iterations: 465188\ncpu: 1509.3757792548504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1140.2531661858325,
            "unit": "ns/iter",
            "extra": "iterations: 613909\ncpu: 1140.2110084719402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1167.0611693420253,
            "unit": "ns/iter",
            "extra": "iterations: 613935\ncpu: 1166.9637665225105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 965.0536386440598,
            "unit": "ns/iter",
            "extra": "iterations: 726342\ncpu: 965.0259794972575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7398.872249666329,
            "unit": "ns/iter",
            "extra": "iterations: 94943\ncpu: 7398.651822672564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17574.645206682955,
            "unit": "ns/iter",
            "extra": "iterations: 39795\ncpu: 17573.572056791127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4323.020892112804,
            "unit": "ns/iter",
            "extra": "iterations: 161975\ncpu: 4322.879456706225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4338.154640577889,
            "unit": "ns/iter",
            "extra": "iterations: 161704\ncpu: 4337.955771038419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4348.332374315051,
            "unit": "ns/iter",
            "extra": "iterations: 161276\ncpu: 4348.075349091005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9217.044243827017,
            "unit": "ns/iter",
            "extra": "iterations: 75988\ncpu: 9216.449965784157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7465.5978528549595,
            "unit": "ns/iter",
            "extra": "iterations: 93799\ncpu: 7465.352509088537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3197.8684332169687,
            "unit": "ns/iter",
            "extra": "iterations: 218505\ncpu: 3197.7373515480144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16069.996399330124,
            "unit": "ns/iter",
            "extra": "iterations: 43603\ncpu: 16069.341559067005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12820.562854052308,
            "unit": "ns/iter",
            "extra": "iterations: 54547\ncpu: 12819.469448365793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12810.870585206667,
            "unit": "ns/iter",
            "extra": "iterations: 54391\ncpu: 12810.051295250882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13236.094214688444,
            "unit": "ns/iter",
            "extra": "iterations: 52858\ncpu: 13234.99564871922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28091.26876756281,
            "unit": "ns/iter",
            "extra": "iterations: 24910\ncpu: 28090.325170614306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98667.49922480667,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 98662.17054263638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85163.64229924705,
            "unit": "ns/iter",
            "extra": "iterations: 8194\ncpu: 85160.2391994134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84317.48921036953,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 84313.59855334526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85192.1760453054,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 85186.745391012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54975.13944536248,
            "unit": "ns/iter",
            "extra": "iterations: 12729\ncpu: 54972.93581585304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84379.7722081947,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 84375.46580117662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3074.3275152800843,
            "unit": "ns/iter",
            "extra": "iterations: 230203\ncpu: 3074.217104034281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15243.94641646332,
            "unit": "ns/iter",
            "extra": "iterations: 45723\ncpu: 15242.95212475136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12070.297684943687,
            "unit": "ns/iter",
            "extra": "iterations: 57450\ncpu: 12069.112271540476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12201.926450963934,
            "unit": "ns/iter",
            "extra": "iterations: 57703\ncpu: 12200.982617888258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12650.760457932167,
            "unit": "ns/iter",
            "extra": "iterations: 55030\ncpu: 12649.961838997071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27377.22905815678,
            "unit": "ns/iter",
            "extra": "iterations: 25535\ncpu: 27375.978069316825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96708.47829093432,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 96703.27710176959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82770.78486998887,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82767.74231678585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82118.26255868151,
            "unit": "ns/iter",
            "extra": "iterations: 8520\ncpu: 82113.99061032778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81929.7006690868,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 81924.87381147871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54620.723482479814,
            "unit": "ns/iter",
            "extra": "iterations: 12784\ncpu: 54617.78785982566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82536.21696670186,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 82533.76867866772 ns\nthreads: 1"
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
        "date": 1705575636122,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 699.8350858666294,
            "unit": "ns/iter",
            "extra": "iterations: 999981\ncpu: 699.8380969238416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10857.564413513315,
            "unit": "ns/iter",
            "extra": "iterations: 77018\ncpu: 10857.28011633644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23196.612741292338,
            "unit": "ns/iter",
            "extra": "iterations: 36056\ncpu: 23194.869092522746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37973.0829326373,
            "unit": "ns/iter",
            "extra": "iterations: 21837\ncpu: 37972.409213719846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46593.916929611434,
            "unit": "ns/iter",
            "extra": "iterations: 17431\ncpu: 46591.52085365156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58369.09082770623,
            "unit": "ns/iter",
            "extra": "iterations: 14522\ncpu: 58363.14557223521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58414.85810000222,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58413.10000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67679.68612627038,
            "unit": "ns/iter",
            "extra": "iterations: 12830\ncpu: 67677.5448168356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77965.41433909051,
            "unit": "ns/iter",
            "extra": "iterations: 11242\ncpu: 77963.72531578007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 563.204051821193,
            "unit": "ns/iter",
            "extra": "iterations: 1242503\ncpu: 563.201054645342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 502.8604835442182,
            "unit": "ns/iter",
            "extra": "iterations: 1394495\ncpu: 502.83708439255787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 487.8465754338775,
            "unit": "ns/iter",
            "extra": "iterations: 1437788\ncpu: 487.8336027286363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 491.3612399850921,
            "unit": "ns/iter",
            "extra": "iterations: 1421501\ncpu: 491.3480890973702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 925.7291879110975,
            "unit": "ns/iter",
            "extra": "iterations: 757060\ncpu: 925.7206826407424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3345.974595891309,
            "unit": "ns/iter",
            "extra": "iterations: 239292\ncpu: 3345.887033415242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14474.991640506052,
            "unit": "ns/iter",
            "extra": "iterations: 56702\ncpu: 14474.323657013869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11859.919987919218,
            "unit": "ns/iter",
            "extra": "iterations: 69527\ncpu: 11859.30933306485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11631.93757943908,
            "unit": "ns/iter",
            "extra": "iterations: 70810\ncpu: 11631.82883773476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11900.024095510507,
            "unit": "ns/iter",
            "extra": "iterations: 68768\ncpu: 11899.56811307582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42139.430171280226,
            "unit": "ns/iter",
            "extra": "iterations: 19734\ncpu: 42137.50380054728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 448218.252252282,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 448191.4914914905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 360694.3215473918,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 360661.5640599005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360633.0170478523,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 360605.8212058206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 364461.9290512111,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 364440.63811922696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219682.45399698094,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 219670.66365007625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 359911.2031574731,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 359892.14790195326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1841222.0930693115,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1841071.2871287127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 724626.0986791499,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 724587.6456876457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2484507.4247310865,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2484406.451612904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3443.41615538078,
            "unit": "ns/iter",
            "extra": "iterations: 239103\ncpu: 3443.331953174993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14854.239770215156,
            "unit": "ns/iter",
            "extra": "iterations: 55182\ncpu: 14853.734913558754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12063.54173505475,
            "unit": "ns/iter",
            "extra": "iterations: 67629\ncpu: 12063.230271037595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11858.808888048692,
            "unit": "ns/iter",
            "extra": "iterations: 68834\ncpu: 11858.471104396065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12223.671579895976,
            "unit": "ns/iter",
            "extra": "iterations: 66555\ncpu: 12223.276988956492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43500.29777177513,
            "unit": "ns/iter",
            "extra": "iterations: 19253\ncpu: 43498.841738949835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458543.9501854596,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 458498.8871224184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 378126.262630657,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 378114.11149825784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 374159.9129310594,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374154.1379310349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373392.5831911189,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 373394.5392491481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 217605.23854581776,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 217606.22509960108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 370045.2031449394,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 370035.4016149593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1866657.2571428518,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1866640.0000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 732801.1866452115,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 732798.230088498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3689.3805412108804,
            "unit": "ns/iter",
            "extra": "iterations: 216108\ncpu: 3689.3687415551303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16301.159850858292,
            "unit": "ns/iter",
            "extra": "iterations: 50422\ncpu: 16300.942049105528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13193.953375456802,
            "unit": "ns/iter",
            "extra": "iterations: 62199\ncpu: 13194.032058393253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12966.58864283415,
            "unit": "ns/iter",
            "extra": "iterations: 63220\ncpu: 12966.665612148072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13273.460784789633,
            "unit": "ns/iter",
            "extra": "iterations: 61851\ncpu: 13273.53478520963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41571.738637503164,
            "unit": "ns/iter",
            "extra": "iterations: 19934\ncpu: 41571.08959566558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 447555.76926976553,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 447558.41784989554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372895.20648463594,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 372897.3549488048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372261.3226486757,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 372256.1788274972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371785.0526092911,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 371786.97496818047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224555.67019081998,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 224554.38370293856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369692.76154495653,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 369694.58438287367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 287.7326728157262,
            "unit": "ns/iter",
            "extra": "iterations: 2433647\ncpu: 287.7278011149528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1465.2915249202345,
            "unit": "ns/iter",
            "extra": "iterations: 477966\ncpu: 1465.3004607022217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1159.9226302950813,
            "unit": "ns/iter",
            "extra": "iterations: 603841\ncpu: 1159.9288554437344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1207.987547615961,
            "unit": "ns/iter",
            "extra": "iterations: 581736\ncpu: 1207.9936603545366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 985.5161459556962,
            "unit": "ns/iter",
            "extra": "iterations: 710983\ncpu: 985.5123118274265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7690.151296346922,
            "unit": "ns/iter",
            "extra": "iterations: 92375\ncpu: 7690.119621109573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18922.79544534819,
            "unit": "ns/iter",
            "extra": "iterations: 37061\ncpu: 18922.937859204983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4420.090766210237,
            "unit": "ns/iter",
            "extra": "iterations: 158429\ncpu: 4420.12384096346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4424.469888640367,
            "unit": "ns/iter",
            "extra": "iterations: 158495\ncpu: 4424.392567588862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4455.503014817657,
            "unit": "ns/iter",
            "extra": "iterations: 157721\ncpu: 4455.532237305115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9196.736367703608,
            "unit": "ns/iter",
            "extra": "iterations: 75996\ncpu: 9196.784041265348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8385.913320478567,
            "unit": "ns/iter",
            "extra": "iterations: 83503\ncpu: 8385.956193190723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3257.733786253439,
            "unit": "ns/iter",
            "extra": "iterations: 215049\ncpu: 3257.712893340568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16319.299457429372,
            "unit": "ns/iter",
            "extra": "iterations: 43128\ncpu: 16319.196345761566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13017.668009698871,
            "unit": "ns/iter",
            "extra": "iterations: 53610\ncpu: 13017.748554374073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13104.975514786849,
            "unit": "ns/iter",
            "extra": "iterations: 53420\ncpu: 13105.052414825861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13334.608626988498,
            "unit": "ns/iter",
            "extra": "iterations: 52556\ncpu: 13334.53839713837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28066.266327227004,
            "unit": "ns/iter",
            "extra": "iterations: 24943\ncpu: 28065.80603776584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99567.01799229169,
            "unit": "ns/iter",
            "extra": "iterations: 7003\ncpu: 99566.58574896463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85761.69796518242,
            "unit": "ns/iter",
            "extra": "iterations: 8158\ncpu: 85761.25275802877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84729.13721690545,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 84728.77558435316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84771.00314922362,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 84771.5237403098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54855.098677516755,
            "unit": "ns/iter",
            "extra": "iterations: 12779\ncpu: 54853.36880820079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84701.10845121751,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 84700.66497400565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3084.974337292374,
            "unit": "ns/iter",
            "extra": "iterations: 227061\ncpu: 3084.9899366249697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16057.518102917424,
            "unit": "ns/iter",
            "extra": "iterations: 45628\ncpu: 16056.23301481537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12092.31527751274,
            "unit": "ns/iter",
            "extra": "iterations: 57673\ncpu: 12091.904357325096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12200.115175164716,
            "unit": "ns/iter",
            "extra": "iterations: 57660\ncpu: 12199.859521331882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12666.00034311562,
            "unit": "ns/iter",
            "extra": "iterations: 55375\ncpu: 12665.814898419836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27329.176192153423,
            "unit": "ns/iter",
            "extra": "iterations: 25563\ncpu: 27329.35101513881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96090.37112538933,
            "unit": "ns/iter",
            "extra": "iterations: 7162\ncpu: 96080.82937726755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82739.94659105288,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 82732.91976840269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81180.44233000904,
            "unit": "ns/iter",
            "extra": "iterations: 8618\ncpu: 81175.13344163359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81344.48087178812,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 81339.50846278758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54353.28056828046,
            "unit": "ns/iter",
            "extra": "iterations: 12881\ncpu: 54351.183914291774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83311.74801215799,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 83304.37324602397 ns\nthreads: 1"
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
        "date": 1705774878395,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 755.296757910632,
            "unit": "ns/iter",
            "extra": "iterations: 924774\ncpu: 755.2404154961106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10838.123970346363,
            "unit": "ns/iter",
            "extra": "iterations: 77696\ncpu: 10837.487129324545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24371.575377832334,
            "unit": "ns/iter",
            "extra": "iterations: 34473\ncpu: 24369.558785136185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37537.18209780192,
            "unit": "ns/iter",
            "extra": "iterations: 22433\ncpu: 37536.56666518076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47465.343942199404,
            "unit": "ns/iter",
            "extra": "iterations: 16747\ncpu: 47463.05606974383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58471.82123711578,
            "unit": "ns/iter",
            "extra": "iterations: 14550\ncpu: 58468.51546391753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58520.48099999365,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58515.91999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67497.68651720256,
            "unit": "ns/iter",
            "extra": "iterations: 12846\ncpu: 67496.15444496338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77370.84784355413,
            "unit": "ns/iter",
            "extra": "iterations: 11199\ncpu: 77366.0326814893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 562.0346715240324,
            "unit": "ns/iter",
            "extra": "iterations: 1246758\ncpu: 562.0079438030476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 469.5408645372015,
            "unit": "ns/iter",
            "extra": "iterations: 1480746\ncpu: 469.51232689468617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 456.8447971989715,
            "unit": "ns/iter",
            "extra": "iterations: 1527975\ncpu: 456.8234427919312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 464.12787293669754,
            "unit": "ns/iter",
            "extra": "iterations: 1504384\ncpu: 464.1025163787965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 915.4434209442793,
            "unit": "ns/iter",
            "extra": "iterations: 765239\ncpu: 915.3694466696041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3343.1498300722333,
            "unit": "ns/iter",
            "extra": "iterations: 234806\ncpu: 3342.918835123458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14501.043079134783,
            "unit": "ns/iter",
            "extra": "iterations: 55665\ncpu: 14500.449115242976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11836.033728783488,
            "unit": "ns/iter",
            "extra": "iterations: 69288\ncpu: 11835.169149058993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11631.5556904007,
            "unit": "ns/iter",
            "extra": "iterations: 70039\ncpu: 11631.164065734809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11896.7020753481,
            "unit": "ns/iter",
            "extra": "iterations: 69145\ncpu: 11895.970786029344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43636.686083286586,
            "unit": "ns/iter",
            "extra": "iterations: 18970\ncpu: 43635.17132314176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 440137.3198789205,
            "unit": "ns/iter",
            "extra": "iterations: 1982\ncpu: 440111.35216952587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 360145.5349794303,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 360125.7201646091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 361651.9358065781,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 361644.3101292213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 362726.0258656534,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 362708.9278264504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219984.07264416877,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 219975.36195072334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 369089.6503322537,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 369051.4950166114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1850194.4658632544,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1850095.783132534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 724919.3990683387,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 724860.4813664606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2581016.834733928,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2580472.5490196086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3244.5255963688096,
            "unit": "ns/iter",
            "extra": "iterations: 231107\ncpu: 3244.353481287895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14612.833401797294,
            "unit": "ns/iter",
            "extra": "iterations: 55991\ncpu: 14612.210891036018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11819.743226295877,
            "unit": "ns/iter",
            "extra": "iterations: 68574\ncpu: 11818.950331029228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11682.116908699942,
            "unit": "ns/iter",
            "extra": "iterations: 69550\ncpu: 11681.327102803762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12037.51579793042,
            "unit": "ns/iter",
            "extra": "iterations: 65958\ncpu: 12036.600563995238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42336.74411396794,
            "unit": "ns/iter",
            "extra": "iterations: 20005\ncpu: 42334.501374656524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 452781.56984125864,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 452750.68783068727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 373447.9038050575,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 373428.38820008584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 373921.25499363855,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 373902.5074373118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374782.57386848115,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 374751.79333902686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 219619.96272976423,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 219604.68395870156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 369267.71367523883,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 369248.5470085471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1851163.5274947973,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1851048.2688391085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 722967.9922239919,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 722945.0233281469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3705.8029632070047,
            "unit": "ns/iter",
            "extra": "iterations: 212270\ncpu: 3705.646111084935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16268.355294538305,
            "unit": "ns/iter",
            "extra": "iterations: 50316\ncpu: 16268.020112886645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13179.695026663197,
            "unit": "ns/iter",
            "extra": "iterations: 62071\ncpu: 13179.325288782125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12982.740153076924,
            "unit": "ns/iter",
            "extra": "iterations: 62583\ncpu: 12982.199638879618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13263.64017109245,
            "unit": "ns/iter",
            "extra": "iterations: 61721\ncpu: 13262.944540755996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41207.40675979328,
            "unit": "ns/iter",
            "extra": "iterations: 20474\ncpu: 41205.6657223796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 443419.7373056843,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 443388.1865284948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 365404.69709718705,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 365388.0521665986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365639.96089152526,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 365615.09671993455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366886.5943316423,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 366873.68866328435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221722.50214916098,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 221715.12010113674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 363986.6143460222,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 363962.44725738175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 288.10373470583676,
            "unit": "ns/iter",
            "extra": "iterations: 2433525\ncpu: 288.0915955250086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1478.7582008022187,
            "unit": "ns/iter",
            "extra": "iterations: 473033\ncpu: 1478.6194620671356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1137.5145877059213,
            "unit": "ns/iter",
            "extra": "iterations: 609383\ncpu: 1137.4825027938089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1109.2914095599483,
            "unit": "ns/iter",
            "extra": "iterations: 628792\ncpu: 1109.2523441774026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 960.24482303099,
            "unit": "ns/iter",
            "extra": "iterations: 730495\ncpu: 960.1891867843036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7624.219003451282,
            "unit": "ns/iter",
            "extra": "iterations: 94446\ncpu: 7624.150308112631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18635.1859216313,
            "unit": "ns/iter",
            "extra": "iterations: 37618\ncpu: 18634.08208836197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4354.354545962774,
            "unit": "ns/iter",
            "extra": "iterations: 160989\ncpu: 4354.139723832038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4389.094667093648,
            "unit": "ns/iter",
            "extra": "iterations: 159369\ncpu: 4388.753772691053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4372.287729750967,
            "unit": "ns/iter",
            "extra": "iterations: 160119\ncpu: 4372.228155309431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9238.296118500875,
            "unit": "ns/iter",
            "extra": "iterations: 75409\ncpu: 9237.557851184898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8340.23241270364,
            "unit": "ns/iter",
            "extra": "iterations: 84109\ncpu: 8339.787656493287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3303.07604176964,
            "unit": "ns/iter",
            "extra": "iterations: 211923\ncpu: 3302.886897599661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16463.00788161168,
            "unit": "ns/iter",
            "extra": "iterations: 42504\ncpu: 16462.798795407198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13062.344849468302,
            "unit": "ns/iter",
            "extra": "iterations: 53577\ncpu: 13061.610392519124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13123.416078432532,
            "unit": "ns/iter",
            "extra": "iterations: 53550\ncpu: 13123.075630251962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13563.661911637657,
            "unit": "ns/iter",
            "extra": "iterations: 51945\ncpu: 13563.315044758843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27967.8604604698,
            "unit": "ns/iter",
            "extra": "iterations: 25018\ncpu: 27966.556079622733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102341.00204260452,
            "unit": "ns/iter",
            "extra": "iterations: 6854\ncpu: 102339.67026553766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87852.75156759814,
            "unit": "ns/iter",
            "extra": "iterations: 7974\ncpu: 87844.53222974684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87761.98796992599,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 87757.96992481199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87825.37192674018,
            "unit": "ns/iter",
            "extra": "iterations: 7972\ncpu: 87818.90366281917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 57116.18220304172,
            "unit": "ns/iter",
            "extra": "iterations: 12283\ncpu: 57112.9935683462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87006.6068545966,
            "unit": "ns/iter",
            "extra": "iterations: 8053\ncpu: 87005.48863777473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3235.2768701395003,
            "unit": "ns/iter",
            "extra": "iterations: 216802\ncpu: 3235.0315033994243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16111.362781476386,
            "unit": "ns/iter",
            "extra": "iterations: 43387\ncpu: 16110.408647751894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12902.579212130659,
            "unit": "ns/iter",
            "extra": "iterations: 54070\ncpu: 12901.599778065329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12932.90503793544,
            "unit": "ns/iter",
            "extra": "iterations: 54169\ncpu: 12932.734589894771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13314.036057738162,
            "unit": "ns/iter",
            "extra": "iterations: 52721\ncpu: 13313.349519167059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27366.457156254157,
            "unit": "ns/iter",
            "extra": "iterations: 25593\ncpu: 27365.3147344978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 101121.83523301173,
            "unit": "ns/iter",
            "extra": "iterations: 6931\ncpu: 101117.70307315075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 87312.63878848447,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 87306.76804187833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85332.37245333217,
            "unit": "ns/iter",
            "extra": "iterations: 8197\ncpu: 85331.42613151159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85240.65418287588,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 85232.74562256686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 57378.028255527955,
            "unit": "ns/iter",
            "extra": "iterations: 12210\ncpu: 57375.34807534802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85753.26683873979,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 85746.36184857291 ns\nthreads: 1"
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
        "date": 1705778435614,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 704.0320312137345,
            "unit": "ns/iter",
            "extra": "iterations: 990846\ncpu: 704.0253480359208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10840.730023961769,
            "unit": "ns/iter",
            "extra": "iterations: 76792\ncpu: 10840.68132097093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24137.60905682132,
            "unit": "ns/iter",
            "extra": "iterations: 34670\ncpu: 24137.522353619843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37856.82372033858,
            "unit": "ns/iter",
            "extra": "iterations: 22799\ncpu: 37856.21737795517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48435.541360397685,
            "unit": "ns/iter",
            "extra": "iterations: 17142\ncpu: 48434.59922996147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58153.957378400126,
            "unit": "ns/iter",
            "extra": "iterations: 14617\ncpu: 58152.02161866315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58061.677599994255,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58060.210000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66590.1128882666,
            "unit": "ns/iter",
            "extra": "iterations: 12942\ncpu: 66588.6261783341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76352.15258808482,
            "unit": "ns/iter",
            "extra": "iterations: 11495\ncpu: 76348.84732492387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 570.7839398871893,
            "unit": "ns/iter",
            "extra": "iterations: 1229954\ncpu: 570.776549366887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 479.29968575727975,
            "unit": "ns/iter",
            "extra": "iterations: 1464791\ncpu: 479.29335994008693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 474.7647913981063,
            "unit": "ns/iter",
            "extra": "iterations: 1472038\ncpu: 474.74997248712344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.05098674959896,
            "unit": "ns/iter",
            "extra": "iterations: 1457614\ncpu: 479.0368369129265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 925.4827208791154,
            "unit": "ns/iter",
            "extra": "iterations: 755594\ncpu: 925.4484551227248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3376.9641441190056,
            "unit": "ns/iter",
            "extra": "iterations: 235833\ncpu: 3376.904419652888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 13767.409034001847,
            "unit": "ns/iter",
            "extra": "iterations: 59907\ncpu: 13766.975478658567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11220.202331546563,
            "unit": "ns/iter",
            "extra": "iterations: 74457\ncpu: 11219.994090548924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11727.94836217951,
            "unit": "ns/iter",
            "extra": "iterations: 69910\ncpu: 11727.608353597474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11553.781899848078,
            "unit": "ns/iter",
            "extra": "iterations: 70353\ncpu: 11553.675038733258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42181.78339989032,
            "unit": "ns/iter",
            "extra": "iterations: 19783\ncpu: 42180.346762371664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 446934.1747230458,
            "unit": "ns/iter",
            "extra": "iterations: 1986\ncpu: 446909.8187311173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 361166.16901995294,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 361163.2475083046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359615.2673885837,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 359605.99750104075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 361481.4032594931,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 361477.1416631846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224825.20158407732,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 224825.54931016848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 357795.30296782666,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 357787.71640560677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1871049.6484848617,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1871021.6161616212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 741558.0007993963,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 741542.9256594735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2539169.324175863,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2539087.087912096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3347.857991344683,
            "unit": "ns/iter",
            "extra": "iterations: 234535\ncpu: 3347.863645084955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14790.609064543687,
            "unit": "ns/iter",
            "extra": "iterations: 55513\ncpu: 14790.337398447187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12080.878887046489,
            "unit": "ns/iter",
            "extra": "iterations: 68143\ncpu: 12080.725826570571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11926.869692027081,
            "unit": "ns/iter",
            "extra": "iterations: 69259\ncpu: 11926.819619110895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12232.18139163135,
            "unit": "ns/iter",
            "extra": "iterations: 67561\ncpu: 12232.102840396032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41645.021315895254,
            "unit": "ns/iter",
            "extra": "iterations: 20032\ncpu: 41644.748402556186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 459842.3601895954,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 459837.8093733515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376350.44641317875,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376348.05531547265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375027.6185522472,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 375025.1408755968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 371870.4364261289,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 371863.48797250737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220323.48770695954,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 220321.39989964836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 368551.9906621409,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 368552.674023767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1853001.4105690923,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1852926.8292683042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 716927.0538047731,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 716923.8278247503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3737.9731096821743,
            "unit": "ns/iter",
            "extra": "iterations: 214501\ncpu: 3737.9121775655994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16272.077607503297,
            "unit": "ns/iter",
            "extra": "iterations: 49789\ncpu: 16272.110305489217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11827.76871716476,
            "unit": "ns/iter",
            "extra": "iterations: 68146\ncpu: 11827.579021512556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11674.460690011832,
            "unit": "ns/iter",
            "extra": "iterations: 69448\ncpu: 11674.405310448106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11883.449827507733,
            "unit": "ns/iter",
            "extra": "iterations: 66670\ncpu: 11883.395830208565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41474.55966748111,
            "unit": "ns/iter",
            "extra": "iterations: 19969\ncpu: 41473.27357403981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 450236.16555616393,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 450230.6509482312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 371850.36402023974,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 371835.43074324337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369350.6019295537,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 369345.7214765098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 369546.80083682475,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 369541.7154811717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222494.98193382085,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 222492.44274809063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366660.238516635,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 366655.3308048879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 290.02296546529794,
            "unit": "ns/iter",
            "extra": "iterations: 2404567\ncpu: 290.0201990628662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1472.241292408748,
            "unit": "ns/iter",
            "extra": "iterations: 473782\ncpu: 1472.2190796611198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1174.295089938475,
            "unit": "ns/iter",
            "extra": "iterations: 594351\ncpu: 1174.2793399859638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1141.9126699288754,
            "unit": "ns/iter",
            "extra": "iterations: 611874\ncpu: 1141.898658874215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 977.6002865664832,
            "unit": "ns/iter",
            "extra": "iterations: 725835\ncpu: 977.5819573319076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7423.315321874073,
            "unit": "ns/iter",
            "extra": "iterations: 94773\ncpu: 7423.327318962131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18713.37394228965,
            "unit": "ns/iter",
            "extra": "iterations: 37463\ncpu: 18713.223714064556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4372.029358964968,
            "unit": "ns/iter",
            "extra": "iterations: 160428\ncpu: 4371.964993641975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4392.487022337187,
            "unit": "ns/iter",
            "extra": "iterations: 159736\ncpu: 4392.398081835051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4383.228998301088,
            "unit": "ns/iter",
            "extra": "iterations: 159499\ncpu: 4383.154126358137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9263.091809933883,
            "unit": "ns/iter",
            "extra": "iterations: 75384\ncpu: 9262.909901305286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8357.207915453533,
            "unit": "ns/iter",
            "extra": "iterations: 83457\ncpu: 8357.168362150556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3207.323481944684,
            "unit": "ns/iter",
            "extra": "iterations: 218108\ncpu: 3207.2720853888636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16091.830915319273,
            "unit": "ns/iter",
            "extra": "iterations: 43493\ncpu: 16091.605545719707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12976.595930984446,
            "unit": "ns/iter",
            "extra": "iterations: 54018\ncpu: 12976.48931837534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12929.747192570023,
            "unit": "ns/iter",
            "extra": "iterations: 54053\ncpu: 12929.578376778541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13420.922186481826,
            "unit": "ns/iter",
            "extra": "iterations: 51919\ncpu: 13420.836302702222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28066.147854310508,
            "unit": "ns/iter",
            "extra": "iterations: 24957\ncpu: 28065.989501943295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99440.92402701128,
            "unit": "ns/iter",
            "extra": "iterations: 6963\ncpu: 99439.17851500858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87834.16827637,
            "unit": "ns/iter",
            "extra": "iterations: 8076\ncpu: 87832.82565626476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86299.78976436067,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 86298.56406480093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86919.61548096006,
            "unit": "ns/iter",
            "extra": "iterations: 7984\ncpu: 86917.69789579214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56611.0496384738,
            "unit": "ns/iter",
            "extra": "iterations: 12309\ncpu: 56610.699488178885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86237.42143034679,
            "unit": "ns/iter",
            "extra": "iterations: 8082\ncpu: 86235.86983420016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3111.7915343356203,
            "unit": "ns/iter",
            "extra": "iterations: 225759\ncpu: 3111.7465970348903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15576.1406614393,
            "unit": "ns/iter",
            "extra": "iterations: 45023\ncpu: 15575.96117539937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12454.02878979524,
            "unit": "ns/iter",
            "extra": "iterations: 56131\ncpu: 12453.913167411813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12560.904105657226,
            "unit": "ns/iter",
            "extra": "iterations: 55728\ncpu: 12560.926284811901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12983.33603800209,
            "unit": "ns/iter",
            "extra": "iterations: 54104\ncpu: 12983.07888510998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27702.069918699603,
            "unit": "ns/iter",
            "extra": "iterations: 25215\ncpu: 27701.629982153423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99132.82812499863,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 99132.28693181947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84938.34134790278,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 84936.96417729251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83676.38692325888,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 83675.00597657243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84075.17373034295,
            "unit": "ns/iter",
            "extra": "iterations: 8329\ncpu: 84074.45071437028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56193.71353280386,
            "unit": "ns/iter",
            "extra": "iterations: 12333\ncpu: 56192.94575529016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84494.50320861927,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 84492.43249788106 ns\nthreads: 1"
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
        "date": 1705953597010,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 694.527746532575,
            "unit": "ns/iter",
            "extra": "iterations: 1009045\ncpu: 694.5029210788418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10537.246859963678,
            "unit": "ns/iter",
            "extra": "iterations: 78980\ncpu: 10536.825778678147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23599.382074131747,
            "unit": "ns/iter",
            "extra": "iterations: 35234\ncpu: 23598.70295737071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36782.269442878336,
            "unit": "ns/iter",
            "extra": "iterations: 23029\ncpu: 36780.70693473447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46707.168790925374,
            "unit": "ns/iter",
            "extra": "iterations: 17104\ncpu: 46705.16253507954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58410.37389030672,
            "unit": "ns/iter",
            "extra": "iterations: 14531\ncpu: 58409.30424609456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58433.36670000099,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58430.99999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67161.72666769942,
            "unit": "ns/iter",
            "extra": "iterations: 12922\ncpu: 67159.88237114999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77350.26292114521,
            "unit": "ns/iter",
            "extra": "iterations: 11338\ncpu: 77345.4136532016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 580.6567350549116,
            "unit": "ns/iter",
            "extra": "iterations: 1205276\ncpu: 580.6370491074249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 482.2120078004543,
            "unit": "ns/iter",
            "extra": "iterations: 1401972\ncpu: 482.2104150439516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 482.7436421801548,
            "unit": "ns/iter",
            "extra": "iterations: 1444481\ncpu: 482.7274294365939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 483.32180858038623,
            "unit": "ns/iter",
            "extra": "iterations: 1449402\ncpu: 483.30366592567077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 922.1755987543398,
            "unit": "ns/iter",
            "extra": "iterations: 762625\ncpu: 922.130011473528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3128.8181697188807,
            "unit": "ns/iter",
            "extra": "iterations: 255469\ncpu: 3128.717378625192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14741.572611026379,
            "unit": "ns/iter",
            "extra": "iterations: 55212\ncpu: 14741.074404115021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11774.520409190978,
            "unit": "ns/iter",
            "extra": "iterations: 69503\ncpu: 11774.205429981457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11584.967077141335,
            "unit": "ns/iter",
            "extra": "iterations: 70650\ncpu: 11584.682236376517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11757.688078035448,
            "unit": "ns/iter",
            "extra": "iterations: 69200\ncpu: 11757.31647398844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42301.59118185805,
            "unit": "ns/iter",
            "extra": "iterations: 19664\ncpu: 42300.239015459854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 432809.6806045578,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 432794.86146095756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 355158.147249193,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 355141.747572816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 356922.98216454894,
            "unit": "ns/iter",
            "extra": "iterations: 2467\ncpu: 356913.0117551695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 357579.64086813363,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 357575.30712530797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219775.54552388925,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 219772.99084435316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 354956.20221039566,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 354944.12607449846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1854504.584830402,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1854363.672654695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 725054.1706749153,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 725034.057408843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2491573.494594561,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2491475.6756756813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3640.247870492748,
            "unit": "ns/iter",
            "extra": "iterations: 215895\ncpu: 3640.1037541397495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16279.674903444497,
            "unit": "ns/iter",
            "extra": "iterations: 50748\ncpu: 16279.372586111844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13180.512964474527,
            "unit": "ns/iter",
            "extra": "iterations: 62517\ncpu: 13180.024633299698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12996.053591968646,
            "unit": "ns/iter",
            "extra": "iterations: 63461\ncpu: 12995.838388931845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13351.049656312849,
            "unit": "ns/iter",
            "extra": "iterations: 61684\ncpu: 13350.698722521316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41381.21184589589,
            "unit": "ns/iter",
            "extra": "iterations: 20142\ncpu: 41380.28001191535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 456339.3878087082,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 456325.11823436787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374627.593763541,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 374610.5673451726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372173.68111588206,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 372166.3519313286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374293.48500431504,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 374279.94858611864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220262.37720181013,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 220257.07096124816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 369736.91250532796,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 369718.9073836974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1857686.8620689872,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1857624.1379310335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 733112.949206312,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 733083.4920634874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3751.0992161447466,
            "unit": "ns/iter",
            "extra": "iterations: 212284\ncpu: 3751.055661283953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15443.449177701355,
            "unit": "ns/iter",
            "extra": "iterations: 51198\ncpu: 15443.015352162107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11782.153002343866,
            "unit": "ns/iter",
            "extra": "iterations: 70012\ncpu: 11782.013083471385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11589.618038622264,
            "unit": "ns/iter",
            "extra": "iterations: 71358\ncpu: 11589.029961602102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11968.104442466132,
            "unit": "ns/iter",
            "extra": "iterations: 69646\ncpu: 11967.718174769569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41310.560781796186,
            "unit": "ns/iter",
            "extra": "iterations: 20261\ncpu: 41309.06667982845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 439125.87782342994,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 439108.77823408606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 362505.14196503017,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362491.21565362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 362217.847245399,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 362205.3839732885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 361345.7763377801,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 361337.0401337791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224558.39607243624,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 224548.6355521551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364148.66512991936,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 364145.0544844912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 286.94854582461335,
            "unit": "ns/iter",
            "extra": "iterations: 2438014\ncpu: 286.9439223892879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1484.156921357605,
            "unit": "ns/iter",
            "extra": "iterations: 470688\ncpu: 1484.1383251750644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1139.63473750756,
            "unit": "ns/iter",
            "extra": "iterations: 615237\ncpu: 1139.5694667258338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1086.364161409965,
            "unit": "ns/iter",
            "extra": "iterations: 644099\ncpu: 1086.3375040172355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 967.8284085854809,
            "unit": "ns/iter",
            "extra": "iterations: 724098\ncpu: 967.798281448087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7517.194415077403,
            "unit": "ns/iter",
            "extra": "iterations: 93645\ncpu: 7516.998238026651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18612.151655203408,
            "unit": "ns/iter",
            "extra": "iterations: 37216\ncpu: 18611.610597592542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4412.267077652591,
            "unit": "ns/iter",
            "extra": "iterations: 158643\ncpu: 4412.10768833167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4429.228797544309,
            "unit": "ns/iter",
            "extra": "iterations: 157694\ncpu: 4429.013152053901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4482.3765273582,
            "unit": "ns/iter",
            "extra": "iterations: 157707\ncpu: 4482.271554211334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9190.314462997107,
            "unit": "ns/iter",
            "extra": "iterations: 75586\ncpu: 9189.703119625457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8386.530108658117,
            "unit": "ns/iter",
            "extra": "iterations: 83564\ncpu: 8386.16150495422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3280.2179938562294,
            "unit": "ns/iter",
            "extra": "iterations: 213873\ncpu: 3278.6130086546423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16057.10274529809,
            "unit": "ns/iter",
            "extra": "iterations: 43019\ncpu: 16056.389037402072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12964.539246945174,
            "unit": "ns/iter",
            "extra": "iterations: 54259\ncpu: 12964.37088777897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12939.238386170478,
            "unit": "ns/iter",
            "extra": "iterations: 53686\ncpu: 12938.406660954539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13450.344634708526,
            "unit": "ns/iter",
            "extra": "iterations: 52383\ncpu: 13449.821506977523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28009.06397441013,
            "unit": "ns/iter",
            "extra": "iterations: 25010\ncpu: 28008.088764493812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99341.09911304577,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 99337.53343657462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85347.46781116216,
            "unit": "ns/iter",
            "extra": "iterations: 8155\ncpu: 85342.82035561051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84746.36181026,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 84740.67037754088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85242.82145033224,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85241.64533820777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55501.91130366522,
            "unit": "ns/iter",
            "extra": "iterations: 12695\ncpu: 55499.11776289836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85267.2194884333,
            "unit": "ns/iter",
            "extra": "iterations: 8210\ncpu: 85264.90864799057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3125.7230922861963,
            "unit": "ns/iter",
            "extra": "iterations: 224313\ncpu: 3125.5843397395815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15472.573385736268,
            "unit": "ns/iter",
            "extra": "iterations: 45036\ncpu: 15471.915800692821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12412.385964294388,
            "unit": "ns/iter",
            "extra": "iterations: 56741\ncpu: 12411.755168220403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12353.885378760097,
            "unit": "ns/iter",
            "extra": "iterations: 56883\ncpu: 12353.550269852218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12853.226060286233,
            "unit": "ns/iter",
            "extra": "iterations: 54773\ncpu: 12853.06081463485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27541.682748594732,
            "unit": "ns/iter",
            "extra": "iterations: 25453\ncpu: 27540.863552429724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98443.67008715359,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 98441.70649423504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84215.57201398868,
            "unit": "ns/iter",
            "extra": "iterations: 8297\ncpu: 84211.73918283565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83552.0752381009,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83548.19047619107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82967.830785638,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 82966.80886361064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55248.67060305482,
            "unit": "ns/iter",
            "extra": "iterations: 12702\ncpu: 55246.05573925398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83266.53524648456,
            "unit": "ns/iter",
            "extra": "iterations: 8398\ncpu: 83262.64586806294 ns\nthreads: 1"
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
        "date": 1705955035176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 690.3813797225982,
            "unit": "ns/iter",
            "extra": "iterations: 1013798\ncpu: 690.3424548085516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10562.702193723639,
            "unit": "ns/iter",
            "extra": "iterations: 79226\ncpu: 10562.119758665085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23298.271281674308,
            "unit": "ns/iter",
            "extra": "iterations: 35594\ncpu: 23297.241108051912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37956.15723986906,
            "unit": "ns/iter",
            "extra": "iterations: 23709\ncpu: 37954.65856847611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48527.493681889915,
            "unit": "ns/iter",
            "extra": "iterations: 17252\ncpu: 48526.00278228613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58360.849353684556,
            "unit": "ns/iter",
            "extra": "iterations: 14544\ncpu: 58358.37458745873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58590.94889999597,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58590.43999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67289.17131225028,
            "unit": "ns/iter",
            "extra": "iterations: 12772\ncpu: 67285.30378953966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76212.73996463488,
            "unit": "ns/iter",
            "extra": "iterations: 11310\ncpu: 76207.90450928385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 561.0031425156105,
            "unit": "ns/iter",
            "extra": "iterations: 1238180\ncpu: 560.983055775413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 466.2433699871913,
            "unit": "ns/iter",
            "extra": "iterations: 1495887\ncpu: 466.23434791531713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 464.3103260631722,
            "unit": "ns/iter",
            "extra": "iterations: 1510566\ncpu: 464.2892796474957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 466.7400306180084,
            "unit": "ns/iter",
            "extra": "iterations: 1497811\ncpu: 466.71449201534716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 919.0742774352987,
            "unit": "ns/iter",
            "extra": "iterations: 762008\ncpu: 919.048750144356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3397.1729341316495,
            "unit": "ns/iter",
            "extra": "iterations: 237975\ncpu: 3397.097594285116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14720.079633048876,
            "unit": "ns/iter",
            "extra": "iterations: 55266\ncpu: 14719.194441428692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11808.40361384945,
            "unit": "ns/iter",
            "extra": "iterations: 69289\ncpu: 11807.973848662825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11601.694207837238,
            "unit": "ns/iter",
            "extra": "iterations: 70440\ncpu: 11601.448040885893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11965.726335315034,
            "unit": "ns/iter",
            "extra": "iterations: 68467\ncpu: 11965.600946441358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42085.31078693929,
            "unit": "ns/iter",
            "extra": "iterations: 19811\ncpu: 42082.73181565804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 443843.51727591077,
            "unit": "ns/iter",
            "extra": "iterations: 1997\ncpu: 443804.9073610407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 354754.0948905249,
            "unit": "ns/iter",
            "extra": "iterations: 2466\ncpu: 354741.11922141194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 356915.3865683868,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 356900.2047502058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 358102.83554268104,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 358095.691797845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 220170.76361767572,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 220166.1613566291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 351985.40653060004,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 351972.8163265309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1843783.5976097193,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1843652.9880478107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 728794.4922600514,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 728753.7151702791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2488012.7162163802,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2487839.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3336.13324529212,
            "unit": "ns/iter",
            "extra": "iterations: 233224\ncpu: 3335.915257434907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15081.1596041894,
            "unit": "ns/iter",
            "extra": "iterations: 55481\ncpu: 15080.198626556863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12179.062500947743,
            "unit": "ns/iter",
            "extra": "iterations: 65887\ncpu: 12178.161093994266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11949.745072140426,
            "unit": "ns/iter",
            "extra": "iterations: 68894\ncpu: 11949.095712253662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12307.027172758078,
            "unit": "ns/iter",
            "extra": "iterations: 65838\ncpu: 12306.570673471251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41844.20715959543,
            "unit": "ns/iter",
            "extra": "iterations: 20057\ncpu: 41841.98534177607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 454164.2620179541,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 454143.3174854747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 371639.54858124506,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 371630.3525365451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 370631.2137960275,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 370612.6820908334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 369324.09745765064,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 369301.5677966092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 217406.60542018854,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 217389.48284435662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 362407.6669481034,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 362392.4862811305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1851116.6686747049,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1851001.204819282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 707889.4977029106,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 707849.8468606386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3691.9132184182595,
            "unit": "ns/iter",
            "extra": "iterations: 211750\ncpu: 3691.672727272739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16214.699649259488,
            "unit": "ns/iter",
            "extra": "iterations: 51320\ncpu: 16214.01402961806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13177.734379221669,
            "unit": "ns/iter",
            "extra": "iterations: 62913\ncpu: 13177.049258499805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13009.27243961403,
            "unit": "ns/iter",
            "extra": "iterations: 63838\ncpu: 13008.697014317553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13349.772364498549,
            "unit": "ns/iter",
            "extra": "iterations: 62398\ncpu: 13349.073688259192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41438.87997442399,
            "unit": "ns/iter",
            "extra": "iterations: 20329\ncpu: 41437.060357125265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 440012.8897959594,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 439999.0306122449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 364182.98823032907,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 364173.6023539297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 363618.6465408638,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 363607.4213836467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366050.5820394486,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 366034.11665967404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221266.77692896136,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 221259.76572447212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 361206.50795645505,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 361187.185929646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 288.42954000691725,
            "unit": "ns/iter",
            "extra": "iterations: 2424319\ncpu: 288.4236356684068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1474.2224100212368,
            "unit": "ns/iter",
            "extra": "iterations: 470361\ncpu: 1474.1451778527608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1198.7759929117185,
            "unit": "ns/iter",
            "extra": "iterations: 589151\ncpu: 1198.7359777035138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1185.4404024187145,
            "unit": "ns/iter",
            "extra": "iterations: 588044\ncpu: 1185.3963308867997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 974.9339415303702,
            "unit": "ns/iter",
            "extra": "iterations: 720271\ncpu: 974.9147195985884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7510.138693179378,
            "unit": "ns/iter",
            "extra": "iterations: 94244\ncpu: 7509.9963923433515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18461.724218731357,
            "unit": "ns/iter",
            "extra": "iterations: 37983\ncpu: 18461.10101887708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4365.52902687081,
            "unit": "ns/iter",
            "extra": "iterations: 160472\ncpu: 4365.3933396480925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4364.575526862671,
            "unit": "ns/iter",
            "extra": "iterations: 160241\ncpu: 4364.445429072456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4369.780808566612,
            "unit": "ns/iter",
            "extra": "iterations: 160061\ncpu: 4369.563478923623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9138.07276697647,
            "unit": "ns/iter",
            "extra": "iterations: 76477\ncpu: 9137.61784588828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8283.59275055809,
            "unit": "ns/iter",
            "extra": "iterations: 84641\ncpu: 8283.401661133566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3176.4026626291025,
            "unit": "ns/iter",
            "extra": "iterations: 220609\ncpu: 3176.2720469246824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15863.061760186123,
            "unit": "ns/iter",
            "extra": "iterations: 44268\ncpu: 15862.754133911802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12728.265803672752,
            "unit": "ns/iter",
            "extra": "iterations: 54307\ncpu: 12727.891432043969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12882.84790289959,
            "unit": "ns/iter",
            "extra": "iterations: 54623\ncpu: 12882.315141973228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13161.242386576067,
            "unit": "ns/iter",
            "extra": "iterations: 53097\ncpu: 13160.722828031638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27824.97555943457,
            "unit": "ns/iter",
            "extra": "iterations: 25204\ncpu: 27824.18663704143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98713.9304850617,
            "unit": "ns/iter",
            "extra": "iterations: 7092\ncpu: 98706.23237450734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84989.59507341348,
            "unit": "ns/iter",
            "extra": "iterations: 8241\ncpu: 84986.3366096355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84323.23944677558,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 84322.47745039055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84407.31675138355,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 84402.3359961282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54943.30707985778,
            "unit": "ns/iter",
            "extra": "iterations: 12811\ncpu: 54938.70892202054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83958.2067105987,
            "unit": "ns/iter",
            "extra": "iterations: 8345\ncpu: 83952.67825045082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3027.564791404512,
            "unit": "ns/iter",
            "extra": "iterations: 231381\ncpu: 3027.452988793427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15043.820482547875,
            "unit": "ns/iter",
            "extra": "iterations: 46586\ncpu: 15043.09663847498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12121.057519997128,
            "unit": "ns/iter",
            "extra": "iterations: 58258\ncpu: 12120.944762951009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12095.814529072088,
            "unit": "ns/iter",
            "extra": "iterations: 57939\ncpu: 12095.605723260565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12581.643130353475,
            "unit": "ns/iter",
            "extra": "iterations: 55687\ncpu: 12580.930917449165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27323.12005446377,
            "unit": "ns/iter",
            "extra": "iterations: 25705\ncpu: 27321.7895351099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97480.50635565174,
            "unit": "ns/iter",
            "extra": "iterations: 7159\ncpu: 97474.43777063755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83375.67277487957,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 83372.31080437917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82172.99976571553,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 82168.70094881186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82485.5149517268,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 82482.6348010348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54384.08678102692,
            "unit": "ns/iter",
            "extra": "iterations: 12883\ncpu: 54381.36303655989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82263.6733757041,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 82258.87476459528 ns\nthreads: 1"
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
        "date": 1705957043618,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 682.6132101168129,
            "unit": "ns/iter",
            "extra": "iterations: 1020642\ncpu: 682.6059480209515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10529.954509804133,
            "unit": "ns/iter",
            "extra": "iterations: 79050\ncpu: 10529.659709044907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23818.670448031982,
            "unit": "ns/iter",
            "extra": "iterations: 34908\ncpu: 23818.474275237768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37027.80767212236,
            "unit": "ns/iter",
            "extra": "iterations: 22862\ncpu: 37025.75890123348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47602.70259280898,
            "unit": "ns/iter",
            "extra": "iterations: 16970\ncpu: 47601.685327047686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58245.60928512582,
            "unit": "ns/iter",
            "extra": "iterations: 14604\ncpu: 58242.81018898935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58151.14399999857,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58151.24000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67389.94633539104,
            "unit": "ns/iter",
            "extra": "iterations: 12839\ncpu: 67386.56437417246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77408.60640184068,
            "unit": "ns/iter",
            "extra": "iterations: 11278\ncpu: 77405.20482355029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 564.0650610735585,
            "unit": "ns/iter",
            "extra": "iterations: 1244400\ncpu: 564.0388138862097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 471.16541303270657,
            "unit": "ns/iter",
            "extra": "iterations: 1485282\ncpu: 471.13908335252216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 465.94889725226324,
            "unit": "ns/iter",
            "extra": "iterations: 1501250\ncpu: 465.93938384679353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 469.56012421230594,
            "unit": "ns/iter",
            "extra": "iterations: 1486165\ncpu: 469.54160540720545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 911.850328215121,
            "unit": "ns/iter",
            "extra": "iterations: 768094\ncpu: 911.835270162248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3324.586408812444,
            "unit": "ns/iter",
            "extra": "iterations: 235844\ncpu: 3324.522141754724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14597.857130036933,
            "unit": "ns/iter",
            "extra": "iterations: 55715\ncpu: 14597.526698375657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11541.152386048661,
            "unit": "ns/iter",
            "extra": "iterations: 71017\ncpu: 11541.094385851278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11329.841978036902,
            "unit": "ns/iter",
            "extra": "iterations: 72395\ncpu: 11329.521375785633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11635.521953071715,
            "unit": "ns/iter",
            "extra": "iterations: 71129\ncpu: 11634.890129201876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41530.46964467053,
            "unit": "ns/iter",
            "extra": "iterations: 19700\ncpu: 41529.50761421307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 438122.22651093284,
            "unit": "ns/iter",
            "extra": "iterations: 1969\ncpu: 438094.10868461174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 355389.2970865507,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 355363.8079606072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 357784.4753161737,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 357765.8914728693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 356472.42178542126,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 356454.70925470965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219875.51203444903,
            "unit": "ns/iter",
            "extra": "iterations: 3947\ncpu: 219869.21712693185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 355189.6856324239,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 355188.5796152262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1839767.8782436512,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1839701.3972055875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 749596.2811501889,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 749582.6677316304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2494852.436314439,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2494694.579945802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3611.52974479622,
            "unit": "ns/iter",
            "extra": "iterations: 218139\ncpu: 3611.28133896277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16273.800474075948,
            "unit": "ns/iter",
            "extra": "iterations: 50625\ncpu: 16272.764444444458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12826.288827784161,
            "unit": "ns/iter",
            "extra": "iterations: 64007\ncpu: 12825.734685268773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12644.392839627153,
            "unit": "ns/iter",
            "extra": "iterations: 65248\ncpu: 12643.71781510545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13017.81320854136,
            "unit": "ns/iter",
            "extra": "iterations: 62717\ncpu: 13017.097437696228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41548.76413467048,
            "unit": "ns/iter",
            "extra": "iterations: 20287\ncpu: 41546.45832306394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 459583.12202853773,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 459567.98732171336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376986.09031980904,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376958.9887640437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372512.84664946754,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 372507.0017182145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 371581.0639210463,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 371557.2286572294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 219896.18544721857,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 219884.20919656544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 370270.7422504963,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 370253.2484076428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1872286.2662602486,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1872105.894308944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 743022.0313504699,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 742991.8810289421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3678.0071546834047,
            "unit": "ns/iter",
            "extra": "iterations: 218039\ncpu: 3677.785625507351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16336.058271119598,
            "unit": "ns/iter",
            "extra": "iterations: 50900\ncpu: 16335.322200392922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12868.445297833321,
            "unit": "ns/iter",
            "extra": "iterations: 64449\ncpu: 12867.518503002413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12658.623028657354,
            "unit": "ns/iter",
            "extra": "iterations: 65501\ncpu: 12658.257125845344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12188.274550883309,
            "unit": "ns/iter",
            "extra": "iterations: 63959\ncpu: 12187.315311371338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41300.29581598807,
            "unit": "ns/iter",
            "extra": "iterations: 18738\ncpu: 41299.364926886614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 437135.2035443262,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 437129.62025316217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 365825.17987419723,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 365825.7861635228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365516.522306358,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 365504.84006734047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366106.8604553341,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 366101.4755480582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222721.50931361518,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 222718.29548354173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 362747.06871838425,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 362738.1956155157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 288.50107142796804,
            "unit": "ns/iter",
            "extra": "iterations: 2426668\ncpu: 288.4956244529538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1483.7746471423338,
            "unit": "ns/iter",
            "extra": "iterations: 472499\ncpu: 1483.763140239451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1097.7995968609346,
            "unit": "ns/iter",
            "extra": "iterations: 599297\ncpu: 1097.7819011274928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1090.5578283870798,
            "unit": "ns/iter",
            "extra": "iterations: 641735\ncpu: 1090.5593430310005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 971.5631256304474,
            "unit": "ns/iter",
            "extra": "iterations: 721672\ncpu: 971.5394251127984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7547.033102022262,
            "unit": "ns/iter",
            "extra": "iterations: 92804\ncpu: 7546.877289772072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18738.127602702716,
            "unit": "ns/iter",
            "extra": "iterations: 37413\ncpu: 18737.631304626742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4367.803137911125,
            "unit": "ns/iter",
            "extra": "iterations: 160234\ncpu: 4367.808330316862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4383.041148864535,
            "unit": "ns/iter",
            "extra": "iterations: 159810\ncpu: 4382.971653838911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4398.469194223266,
            "unit": "ns/iter",
            "extra": "iterations: 158915\ncpu: 4398.355724758549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9205.060889930646,
            "unit": "ns/iter",
            "extra": "iterations: 76006\ncpu: 9204.850932821171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8301.973838908369,
            "unit": "ns/iter",
            "extra": "iterations: 83865\ncpu: 8301.9912955345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3410.557529256054,
            "unit": "ns/iter",
            "extra": "iterations: 209702\ncpu: 3410.4557896444044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16007.329074939995,
            "unit": "ns/iter",
            "extra": "iterations: 43835\ncpu: 16006.9442226531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12834.417746814199,
            "unit": "ns/iter",
            "extra": "iterations: 54545\ncpu: 12833.959116325963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12831.47495739135,
            "unit": "ns/iter",
            "extra": "iterations: 54567\ncpu: 12831.198343321255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13258.023346304484,
            "unit": "ns/iter",
            "extra": "iterations: 52685\ncpu: 13257.834298187516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28234.542313287184,
            "unit": "ns/iter",
            "extra": "iterations: 24744\ncpu: 28233.292919496045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98339.19659681633,
            "unit": "ns/iter",
            "extra": "iterations: 7111\ncpu: 98338.29278582493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84543.45687673711,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84540.92173702581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83954.48400674308,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 83954.64165464112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84867.545542759,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 84866.02789569483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54586.39319294564,
            "unit": "ns/iter",
            "extra": "iterations: 12869\ncpu: 54584.9017017639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83438.67224680168,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 83438.0365897409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3010.9326102265527,
            "unit": "ns/iter",
            "extra": "iterations: 232884\ncpu: 3010.873224437918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15018.688705175748,
            "unit": "ns/iter",
            "extra": "iterations: 46570\ncpu: 15018.698733089941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12020.789967576555,
            "unit": "ns/iter",
            "extra": "iterations: 58291\ncpu: 12020.455988059908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11962.419839490134,
            "unit": "ns/iter",
            "extra": "iterations: 58439\ncpu: 11962.191344820967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12514.920716112854,
            "unit": "ns/iter",
            "extra": "iterations: 55913\ncpu: 12514.619140450239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27255.580031144535,
            "unit": "ns/iter",
            "extra": "iterations: 25690\ncpu: 27254.943557804763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96631.6467579123,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96630.42997373166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82907.45490336837,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 82905.76234788838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81560.34564736024,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81559.41032513633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82507.60548202749,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 82505.35316856019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54697.314323708895,
            "unit": "ns/iter",
            "extra": "iterations: 12783\ncpu: 54696.284127356674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82812.96149289334,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 82813.08056871954 ns\nthreads: 1"
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
        "date": 1705958496878,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 723.730946122215,
            "unit": "ns/iter",
            "extra": "iterations: 963216\ncpu: 723.6662389329081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10715.541702672934,
            "unit": "ns/iter",
            "extra": "iterations: 76374\ncpu: 10715.483017780922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23792.964764037704,
            "unit": "ns/iter",
            "extra": "iterations: 34794\ncpu: 23792.28027820889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37685.57252406979,
            "unit": "ns/iter",
            "extra": "iterations: 22951\ncpu: 37683.739270620004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48081.60914637514,
            "unit": "ns/iter",
            "extra": "iterations: 16881\ncpu: 48077.9041525976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58013.09684700467,
            "unit": "ns/iter",
            "extra": "iterations: 14621\ncpu: 58012.31105943506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58152.134700003444,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58151.59999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68978.23932610085,
            "unit": "ns/iter",
            "extra": "iterations: 12999\ncpu: 68977.09054542657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77715.32712105155,
            "unit": "ns/iter",
            "extra": "iterations: 11268\ncpu: 77713.14341498047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 563.2435268088427,
            "unit": "ns/iter",
            "extra": "iterations: 1235712\ncpu: 563.1805792935581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 467.7414720144961,
            "unit": "ns/iter",
            "extra": "iterations: 1490094\ncpu: 467.70854724601156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 460.6635649026237,
            "unit": "ns/iter",
            "extra": "iterations: 1520855\ncpu: 460.62958007173495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 467.8404337132426,
            "unit": "ns/iter",
            "extra": "iterations: 1496657\ncpu: 467.8293022382547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 910.4904895034089,
            "unit": "ns/iter",
            "extra": "iterations: 768677\ncpu: 910.4363731450272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3329.3287898046638,
            "unit": "ns/iter",
            "extra": "iterations: 239168\ncpu: 3329.164018597809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14569.858543392174,
            "unit": "ns/iter",
            "extra": "iterations: 55897\ncpu: 14568.527827969303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11531.037414629978,
            "unit": "ns/iter",
            "extra": "iterations: 71015\ncpu: 11530.347109765575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11301.724506625329,
            "unit": "ns/iter",
            "extra": "iterations: 71548\ncpu: 11300.870744115866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11529.397298421713,
            "unit": "ns/iter",
            "extra": "iterations: 69663\ncpu: 11528.854628712514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42140.63890292259,
            "unit": "ns/iter",
            "extra": "iterations: 19798\ncpu: 42137.023941812215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 435703.0697441198,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 435677.5715002512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 360511.6349009896,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 360513.82013201324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 362484.93502708134,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 362483.7567680139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 363371.17858635844,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 363373.77666248416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221162.9133316256,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 221157.91486107488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363749.1472187627,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 363746.8005018816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1852774.2132795232,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1852708.0482897346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 734014.6587677763,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 733963.2701421807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2504409.5054349955,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2503914.130434787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3302.9940261604406,
            "unit": "ns/iter",
            "extra": "iterations: 241051\ncpu: 3302.9719851815644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14866.822781364413,
            "unit": "ns/iter",
            "extra": "iterations: 55124\ncpu: 14866.75858065455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11500.063523960534,
            "unit": "ns/iter",
            "extra": "iterations: 71658\ncpu: 11500.132574171716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11306.020889422804,
            "unit": "ns/iter",
            "extra": "iterations: 72429\ncpu: 11306.097005343094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11805.241554224289,
            "unit": "ns/iter",
            "extra": "iterations: 68999\ncpu: 11805.30732329452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41565.49369548732,
            "unit": "ns/iter",
            "extra": "iterations: 20065\ncpu: 41564.6299526539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 460847.4338624546,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 460839.100529101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 377306.33434782014,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 377308.9130434771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 376675.9835782128,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376658.90233362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373381.0885259824,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 373377.7395788577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223266.47941704016,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 223254.1549475827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 370652.5055413791,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 370635.80562659964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1871060.168377787,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1871069.6098562635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 748015.5727923926,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 747989.8170246605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3680.8666486049706,
            "unit": "ns/iter",
            "extra": "iterations: 214081\ncpu: 3680.7811062168175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16292.10800086687,
            "unit": "ns/iter",
            "extra": "iterations: 50657\ncpu: 16292.032690447499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12352.077226272655,
            "unit": "ns/iter",
            "extra": "iterations: 64188\ncpu: 12351.036019193587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11287.236621032043,
            "unit": "ns/iter",
            "extra": "iterations: 72969\ncpu: 11286.450410448244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11529.233301324415,
            "unit": "ns/iter",
            "extra": "iterations: 70814\ncpu: 11528.980145169027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41674.25456344171,
            "unit": "ns/iter",
            "extra": "iterations: 20215\ncpu: 41672.599554785964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 445147.7009880296,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 445150.54602183914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368538.1717817528,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 368540.8354646211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364116.103346045,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 364118.3396865741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 364900.73505726486,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 364893.9381093674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224808.9270594383,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 224804.9732211172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 365177.3408510633,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 365180.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 287.84577628284393,
            "unit": "ns/iter",
            "extra": "iterations: 2430158\ncpu: 287.8378278284784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1491.3160182838394,
            "unit": "ns/iter",
            "extra": "iterations: 469707\ncpu: 1491.2824377750305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1175.8799591904678,
            "unit": "ns/iter",
            "extra": "iterations: 595939\ncpu: 1175.8760544283962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1138.1290781777798,
            "unit": "ns/iter",
            "extra": "iterations: 615379\ncpu: 1138.1364979955451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 965.604790015159,
            "unit": "ns/iter",
            "extra": "iterations: 726219\ncpu: 965.6105114297528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7428.022430439912,
            "unit": "ns/iter",
            "extra": "iterations: 94559\ncpu: 7427.970896477345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18639.23926887268,
            "unit": "ns/iter",
            "extra": "iterations: 37531\ncpu: 18638.93847752535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4364.405570283056,
            "unit": "ns/iter",
            "extra": "iterations: 160315\ncpu: 4364.385116801305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4383.864689695967,
            "unit": "ns/iter",
            "extra": "iterations: 159537\ncpu: 4383.892137873977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4421.4284190916305,
            "unit": "ns/iter",
            "extra": "iterations: 159421\ncpu: 4421.4595316803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9303.191531533748,
            "unit": "ns/iter",
            "extra": "iterations: 75173\ncpu: 9303.01438016314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8389.304976544743,
            "unit": "ns/iter",
            "extra": "iterations: 82708\ncpu: 8389.04096338932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3239.2488930792715,
            "unit": "ns/iter",
            "extra": "iterations: 216366\ncpu: 3239.2242773818284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16200.234749821067,
            "unit": "ns/iter",
            "extra": "iterations: 43229\ncpu: 16200.115663096227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13023.726014178086,
            "unit": "ns/iter",
            "extra": "iterations: 53886\ncpu: 13023.206398693539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13026.501946983763,
            "unit": "ns/iter",
            "extra": "iterations: 53416\ncpu: 13026.224352253907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13475.85337789874,
            "unit": "ns/iter",
            "extra": "iterations: 52059\ncpu: 13475.756353368291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27818.911152590314,
            "unit": "ns/iter",
            "extra": "iterations: 25178\ncpu: 27819.084121057727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98470.12762361192,
            "unit": "ns/iter",
            "extra": "iterations: 7099\ncpu: 98469.16467108177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85079.4808882403,
            "unit": "ns/iter",
            "extra": "iterations: 8241\ncpu: 85078.43708287759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84129.139652676,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84128.23203087303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84590.92782881798,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 84590.14748549394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54939.062646648825,
            "unit": "ns/iter",
            "extra": "iterations: 12786\ncpu: 54938.3622712339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84148.90934230846,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 84146.6754839496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3223.702047863209,
            "unit": "ns/iter",
            "extra": "iterations: 225308\ncpu: 3223.6738153993756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15463.914499535238,
            "unit": "ns/iter",
            "extra": "iterations: 45298\ncpu: 15463.832840302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12467.8894140727,
            "unit": "ns/iter",
            "extra": "iterations: 56065\ncpu: 12467.812360652777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12431.791107084096,
            "unit": "ns/iter",
            "extra": "iterations: 56292\ncpu: 12431.729197754543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12843.07267971872,
            "unit": "ns/iter",
            "extra": "iterations: 54293\ncpu: 12842.966864973405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27289.121345944695,
            "unit": "ns/iter",
            "extra": "iterations: 25588\ncpu: 27288.381272471364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98380.44216444509,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98379.50808151731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84344.61585438924,
            "unit": "ns/iter",
            "extra": "iterations: 8351\ncpu: 84345.15626871008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82100.95028726361,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 82100.1993199663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82128.26752638746,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 82127.52637749234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54940.62169481341,
            "unit": "ns/iter",
            "extra": "iterations: 12556\ncpu: 54938.86588085442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83130.36738075134,
            "unit": "ns/iter",
            "extra": "iterations: 8449\ncpu: 83128.45307136953 ns\nthreads: 1"
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
        "date": 1705959958000,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.6074585711123,
            "unit": "ns/iter",
            "extra": "iterations: 982467\ncpu: 712.5722288891128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10702.881115182388,
            "unit": "ns/iter",
            "extra": "iterations: 77512\ncpu: 10702.630560429352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23490.456333595954,
            "unit": "ns/iter",
            "extra": "iterations: 35588\ncpu: 23489.822412049012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37289.57537313343,
            "unit": "ns/iter",
            "extra": "iterations: 21440\ncpu: 37289.46361940297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46697.358615742436,
            "unit": "ns/iter",
            "extra": "iterations: 16731\ncpu: 46697.32831271297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58326.354501493435,
            "unit": "ns/iter",
            "extra": "iterations: 14062\ncpu: 58324.29241928605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58271.79139999999,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58270.91000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67384.362285181,
            "unit": "ns/iter",
            "extra": "iterations: 12918\ncpu: 67383.2249574237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77077.2466921214,
            "unit": "ns/iter",
            "extra": "iterations: 11261\ncpu: 77074.30956398183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 574.0524332349158,
            "unit": "ns/iter",
            "extra": "iterations: 1219837\ncpu: 574.3268977740461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 476.65775361505035,
            "unit": "ns/iter",
            "extra": "iterations: 1446119\ncpu: 476.7948557483861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 470.7896420208717,
            "unit": "ns/iter",
            "extra": "iterations: 1475114\ncpu: 470.76280206140046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 472.71552426044053,
            "unit": "ns/iter",
            "extra": "iterations: 1479961\ncpu: 472.7131323055127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 948.772318915549,
            "unit": "ns/iter",
            "extra": "iterations: 737211\ncpu: 948.7556479759529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3309.75325200682,
            "unit": "ns/iter",
            "extra": "iterations: 237315\ncpu: 3309.7279986515814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14636.925081838277,
            "unit": "ns/iter",
            "extra": "iterations: 56208\ncpu: 14636.380942214637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11556.415311491048,
            "unit": "ns/iter",
            "extra": "iterations: 70901\ncpu: 11556.244622783917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11371.345986407034,
            "unit": "ns/iter",
            "extra": "iterations: 71208\ncpu: 11373.781035838647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11625.400464588294,
            "unit": "ns/iter",
            "extra": "iterations: 69739\ncpu: 11626.477293910164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41700.00650103094,
            "unit": "ns/iter",
            "extra": "iterations: 19843\ncpu: 41698.68971425698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 439183.9447570445,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 439164.9616368302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 361020.3334722982,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 361002.5844101717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 361482.5314190854,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 361473.4498543492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 366560.42923140427,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 366550.6929861398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 223220.8052377111,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 223218.23035850495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 365867.54364089645,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 365861.5128844558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1849141.6506026052,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1849116.666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 747760.8530350768,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 747734.9840255565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2492622.9621621897,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2492594.5945945983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3297.3991666494294,
            "unit": "ns/iter",
            "extra": "iterations: 237595\ncpu: 3297.390517477207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14951.69507575754,
            "unit": "ns/iter",
            "extra": "iterations: 54912\ncpu: 14951.710008741291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11735.298462735407,
            "unit": "ns/iter",
            "extra": "iterations: 69409\ncpu: 11735.515567145496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11614.018267113113,
            "unit": "ns/iter",
            "extra": "iterations: 70345\ncpu: 11613.94697562008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11859.792963736652,
            "unit": "ns/iter",
            "extra": "iterations: 69355\ncpu: 11859.863023574344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41508.23658720621,
            "unit": "ns/iter",
            "extra": "iterations: 19925\ncpu: 41507.60351317436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 451447.330385016,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 451454.474505725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 372224.95765610563,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 372226.00513259345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385244.3343612622,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 385249.4273127763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 371431.78565398784,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 371438.73417721485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 218522.47378980895,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 218518.13393529068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 366783.93893768324,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 366782.0577164387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1855189.2738337552,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1855130.4259634884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 722458.5388802154,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 722466.5629860065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3681.937233007699,
            "unit": "ns/iter",
            "extra": "iterations: 218873\ncpu: 3681.9479789649586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16323.399736613246,
            "unit": "ns/iter",
            "extra": "iterations: 50876\ncpu: 16323.69486594848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12848.405312567595,
            "unit": "ns/iter",
            "extra": "iterations: 64338\ncpu: 12848.243650719605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12620.328112584517,
            "unit": "ns/iter",
            "extra": "iterations: 65444\ncpu: 12620.470936984257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12961.331673681198,
            "unit": "ns/iter",
            "extra": "iterations: 63668\ncpu: 12961.095055600914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42925.91718278435,
            "unit": "ns/iter",
            "extra": "iterations: 19537\ncpu: 42925.106208732024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 440082.31107740686,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 440068.74051593605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 365126.24481153744,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 365118.975010591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364854.3021401937,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 364840.83088543755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 363567.4337860841,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 363558.1069609511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 221938.81618757237,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 221940.418557741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366892.69149388286,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 366885.7384680492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.25871534194584,
            "unit": "ns/iter",
            "extra": "iterations: 2438143\ncpu: 295.2479407483487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1479.524598083178,
            "unit": "ns/iter",
            "extra": "iterations: 474041\ncpu: 1479.5511358722158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1170.9151705821027,
            "unit": "ns/iter",
            "extra": "iterations: 597894\ncpu: 1170.8824641157128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1131.584674563198,
            "unit": "ns/iter",
            "extra": "iterations: 619767\ncpu: 1131.5416922811273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 968.5391204278073,
            "unit": "ns/iter",
            "extra": "iterations: 725580\ncpu: 968.4932054356589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7344.291535888025,
            "unit": "ns/iter",
            "extra": "iterations: 96218\ncpu: 7344.074913217842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18671.89948336165,
            "unit": "ns/iter",
            "extra": "iterations: 37357\ncpu: 18671.491286773497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4382.70234155903,
            "unit": "ns/iter",
            "extra": "iterations: 158655\ncpu: 4382.4808546846725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4381.610846854819,
            "unit": "ns/iter",
            "extra": "iterations: 159567\ncpu: 4381.404049709457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4403.69679192109,
            "unit": "ns/iter",
            "extra": "iterations: 159036\ncpu: 4403.735632183959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9167.987281876625,
            "unit": "ns/iter",
            "extra": "iterations: 76505\ncpu: 9167.494934971555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8361.96501267001,
            "unit": "ns/iter",
            "extra": "iterations: 84059\ncpu: 8361.666210637854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3241.27820569845,
            "unit": "ns/iter",
            "extra": "iterations: 215772\ncpu: 3241.187457130632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15866.603321673618,
            "unit": "ns/iter",
            "extra": "iterations: 43171\ncpu: 15866.167102916103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12674.421228221674,
            "unit": "ns/iter",
            "extra": "iterations: 55153\ncpu: 12674.035863869727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12688.482784863465,
            "unit": "ns/iter",
            "extra": "iterations: 55184\ncpu: 12688.453174833372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13161.322329293236,
            "unit": "ns/iter",
            "extra": "iterations: 53132\ncpu: 13161.422494918332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27972.5646144663,
            "unit": "ns/iter",
            "extra": "iterations: 25095\ncpu: 27971.894799760976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98973.2394406007,
            "unit": "ns/iter",
            "extra": "iterations: 7079\ncpu: 98967.65079813538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85399.72236440645,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85396.0877513706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84213.9408621741,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 84209.59319975723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84763.66214251582,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 84765.65681046963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55252.97611728604,
            "unit": "ns/iter",
            "extra": "iterations: 12687\ncpu: 55252.9912508875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84158.872985329,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 84155.07577580065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3110.8459943065527,
            "unit": "ns/iter",
            "extra": "iterations: 225167\ncpu: 3110.7147139678264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15541.180624666918,
            "unit": "ns/iter",
            "extra": "iterations: 45016\ncpu: 15540.18349031434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12431.16391835231,
            "unit": "ns/iter",
            "extra": "iterations: 56095\ncpu: 12430.644442463787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12537.777021948861,
            "unit": "ns/iter",
            "extra": "iterations: 55862\ncpu: 12537.218502738864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12947.42583874037,
            "unit": "ns/iter",
            "extra": "iterations: 53950\ncpu: 12947.421686747175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27613.418346456318,
            "unit": "ns/iter",
            "extra": "iterations: 25400\ncpu: 27613.732283464713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97911.98344787619,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 97912.8208724924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83777.15067510647,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 83773.92758991526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82463.93889346626,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 82460.19818332088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82420.31531106262,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 82418.74631094266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54989.15397286596,
            "unit": "ns/iter",
            "extra": "iterations: 12749\ncpu: 54988.95599654887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83180.0997866842,
            "unit": "ns/iter",
            "extra": "iterations: 8438\ncpu: 83179.03531642587 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}