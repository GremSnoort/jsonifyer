window.BENCHMARK_DATA = {
  "lastUpdate": 1705575636563,
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
      }
    ]
  }
}