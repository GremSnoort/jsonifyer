window.BENCHMARK_DATA = {
  "lastUpdate": 1702490309488,
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
      }
    ]
  }
}