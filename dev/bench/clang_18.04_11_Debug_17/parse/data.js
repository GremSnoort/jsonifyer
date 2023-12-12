window.BENCHMARK_DATA = {
  "lastUpdate": 1702392428944,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-11 18.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392427672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8342.048613161476,
            "unit": "ns/iter",
            "extra": "iterations: 84689\ncpu: 8341.583912904864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61214.22874260319,
            "unit": "ns/iter",
            "extra": "iterations: 13854\ncpu: 61210.42298253212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112652.6036425568,
            "unit": "ns/iter",
            "extra": "iterations: 7632\ncpu: 112646.17400419286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164469.73422305007,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 164459.08484270732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216413.67231922076,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 216402.86783042393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 267694.43361450126,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 267680.7872539833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 317026.204454182,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 317020.591456736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 368827.92899660126,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 368818.112244898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 419863.85009672097,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 419846.08317214635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6900.200011856507,
            "unit": "ns/iter",
            "extra": "iterations: 101209\ncpu: 6899.943680897949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5746.310949599091,
            "unit": "ns/iter",
            "extra": "iterations: 121904\ncpu: 5746.24294526841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5628.04095243454,
            "unit": "ns/iter",
            "extra": "iterations: 124901\ncpu: 5627.747576080257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5703.10442849805,
            "unit": "ns/iter",
            "extra": "iterations: 122773\ncpu: 5703.104917204934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10072.0436195289,
            "unit": "ns/iter",
            "extra": "iterations: 69556\ncpu: 10071.77957329348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31185.51572519129,
            "unit": "ns/iter",
            "extra": "iterations: 26200\ncpu: 31185.145038167888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 165647.56139012394,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 165639.58373114397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 124836.9391418715,
            "unit": "ns/iter",
            "extra": "iterations: 6852\ncpu: 124835.610040864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 123746.92912128451,
            "unit": "ns/iter",
            "extra": "iterations: 6885\ncpu: 123740.85693536658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115026.17349560568,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 115023.90804597698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 384326.81568144425,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 384298.3579638752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981147.5867238685,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1981100.4282655262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1558144.7185929501,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1558094.304857625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1549601.1524287215,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1549589.9497487452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1531362.181818126,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1531272.231404959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 847911.0769230628,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 847898.9010989012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1504336.601941712,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1504256.148867313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38702.34301125595,
            "unit": "ns/iter",
            "extra": "iterations: 21320\ncpu: 38702.32645403381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 202878.06942809487,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 202869.96940456532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 149719.54919467223,
            "unit": "ns/iter",
            "extra": "iterations: 5712\ncpu: 149719.34523809573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 147055.07190664377,
            "unit": "ns/iter",
            "extra": "iterations: 5827\ncpu: 147045.03174875592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 143502.01005530168,
            "unit": "ns/iter",
            "extra": "iterations: 5967\ncpu: 143498.67605161754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 356448.22650796425,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 356436.15100533445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2017944.6594360394,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2017881.1279826458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1597976.0877798088,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1597944.4061962117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1599937.8399311416,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599843.2013769273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1565269.9899159677,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565244.2016806654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 886367.8863420283,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 886343.457497614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1548541.3239203896,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1548498.6710963573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5466927.4900004435,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5466768.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3380159.369565187,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3380031.521739128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28771.664730319684,
            "unit": "ns/iter",
            "extra": "iterations: 28404\ncpu: 28770.680185889538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 151068.856313748,
            "unit": "ns/iter",
            "extra": "iterations: 5686\ncpu: 151065.24797748798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 118367.57133048133,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 118361.12865577362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119336.07123020347,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 119334.76811996638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110918.45213664217,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 110915.61241719709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 298751.23366744333,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 298743.2768752168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1987097.012793148,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1986986.3539445514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1547526.572379451,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1547511.4808652299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1566332.0555556007,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1566267.1717171776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521188.0833333577,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1521164.3790849636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 834460.011711693,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 834405.6756756708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1500470.0403876477,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1500453.31179322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3167.343049307143,
            "unit": "ns/iter",
            "extra": "iterations: 220496\ncpu: 3167.2148247587315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21121.963245720683,
            "unit": "ns/iter",
            "extra": "iterations: 33139\ncpu: 21121.69347294731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15625.146931584311,
            "unit": "ns/iter",
            "extra": "iterations: 44844\ncpu: 15624.453661582345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15761.27596218685,
            "unit": "ns/iter",
            "extra": "iterations: 44430\ncpu: 15760.488408732781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12342.139648058632,
            "unit": "ns/iter",
            "extra": "iterations: 56714\ncpu: 12341.398949113021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105126.40297386528,
            "unit": "ns/iter",
            "extra": "iterations: 6658\ncpu: 105121.95854611018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138351.7510899731,
            "unit": "ns/iter",
            "extra": "iterations: 5046\ncpu: 138347.70114942477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33874.27184325587,
            "unit": "ns/iter",
            "extra": "iterations: 20670\ncpu: 33871.64489598455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33653.55476064697,
            "unit": "ns/iter",
            "extra": "iterations: 20827\ncpu: 33652.167859029265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33187.653659233896,
            "unit": "ns/iter",
            "extra": "iterations: 20988\ncpu: 33186.0253478177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66677.66942463235,
            "unit": "ns/iter",
            "extra": "iterations: 10515\ncpu: 66676.04374702822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59199.5105285405,
            "unit": "ns/iter",
            "extra": "iterations: 11825\ncpu: 59198.07188160657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23790.11779687123,
            "unit": "ns/iter",
            "extra": "iterations: 29449\ncpu: 23788.855309178125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119982.7171007499,
            "unit": "ns/iter",
            "extra": "iterations: 5836\ncpu: 119975.7539410567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96626.81382831663,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 96620.86668506685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96403.14760656144,
            "unit": "ns/iter",
            "extra": "iterations: 7249\ncpu: 96397.80659401254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95386.69546260254,
            "unit": "ns/iter",
            "extra": "iterations: 7339\ncpu: 95385.74737702646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 172333.94187191638,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 172331.77339901603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 595033.8584746,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 595000.1694915167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 489063.8162124286,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 489052.62054506777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 486091.52822300466,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 486064.1811846748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 476955.05381470284,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 476929.0871934621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302965.3732119699,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 302949.3714781106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 475419.82903658267,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475387.85617367877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23859.348097808732,
            "unit": "ns/iter",
            "extra": "iterations: 29282\ncpu: 23857.639505497984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120640.66872957697,
            "unit": "ns/iter",
            "extra": "iterations: 5817\ncpu: 120633.9865910278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96764.77826929528,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 96759.71799834145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97720.53462022524,
            "unit": "ns/iter",
            "extra": "iterations: 7149\ncpu: 97712.57518534163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97129.43670086635,
            "unit": "ns/iter",
            "extra": "iterations: 7117\ncpu: 97126.03625122839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171817.1768173115,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 171815.25049115854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590085.7664974971,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 590048.477157364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 483931.2696551666,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 483920.89655172004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 485576.7088255782,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 485571.3690062519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 476574.96180074423,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 476552.5238744914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 302021.3805615793,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 302008.76889848785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473695.855209712,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473656.4276048714 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392427672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8342.048613161476,
            "unit": "ns/iter",
            "extra": "iterations: 84689\ncpu: 8341.583912904864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61214.22874260319,
            "unit": "ns/iter",
            "extra": "iterations: 13854\ncpu: 61210.42298253212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112652.6036425568,
            "unit": "ns/iter",
            "extra": "iterations: 7632\ncpu: 112646.17400419286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164469.73422305007,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 164459.08484270732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216413.67231922076,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 216402.86783042393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 267694.43361450126,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 267680.7872539833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 317026.204454182,
            "unit": "ns/iter",
            "extra": "iterations: 2739\ncpu: 317020.591456736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 368827.92899660126,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 368818.112244898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 419863.85009672097,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 419846.08317214635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6900.200011856507,
            "unit": "ns/iter",
            "extra": "iterations: 101209\ncpu: 6899.943680897949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5746.310949599091,
            "unit": "ns/iter",
            "extra": "iterations: 121904\ncpu: 5746.24294526841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5628.04095243454,
            "unit": "ns/iter",
            "extra": "iterations: 124901\ncpu: 5627.747576080257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5703.10442849805,
            "unit": "ns/iter",
            "extra": "iterations: 122773\ncpu: 5703.104917204934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10072.0436195289,
            "unit": "ns/iter",
            "extra": "iterations: 69556\ncpu: 10071.77957329348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31185.51572519129,
            "unit": "ns/iter",
            "extra": "iterations: 26200\ncpu: 31185.145038167888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 165647.56139012394,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 165639.58373114397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 124836.9391418715,
            "unit": "ns/iter",
            "extra": "iterations: 6852\ncpu: 124835.610040864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 123746.92912128451,
            "unit": "ns/iter",
            "extra": "iterations: 6885\ncpu: 123740.85693536658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115026.17349560568,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 115023.90804597698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 384326.81568144425,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 384298.3579638752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1981147.5867238685,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1981100.4282655262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1558144.7185929501,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1558094.304857625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1549601.1524287215,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1549589.9497487452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1531362.181818126,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1531272.231404959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 847911.0769230628,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 847898.9010989012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1504336.601941712,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1504256.148867313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38702.34301125595,
            "unit": "ns/iter",
            "extra": "iterations: 21320\ncpu: 38702.32645403381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 202878.06942809487,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 202869.96940456532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 149719.54919467223,
            "unit": "ns/iter",
            "extra": "iterations: 5712\ncpu: 149719.34523809573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 147055.07190664377,
            "unit": "ns/iter",
            "extra": "iterations: 5827\ncpu: 147045.03174875592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 143502.01005530168,
            "unit": "ns/iter",
            "extra": "iterations: 5967\ncpu: 143498.67605161754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 356448.22650796425,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 356436.15100533445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2017944.6594360394,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2017881.1279826458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1597976.0877798088,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1597944.4061962117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1599937.8399311416,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1599843.2013769273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1565269.9899159677,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565244.2016806654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 886367.8863420283,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 886343.457497614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1548541.3239203896,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1548498.6710963573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5466927.4900004435,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5466768.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3380159.369565187,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3380031.521739128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28771.664730319684,
            "unit": "ns/iter",
            "extra": "iterations: 28404\ncpu: 28770.680185889538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 151068.856313748,
            "unit": "ns/iter",
            "extra": "iterations: 5686\ncpu: 151065.24797748798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 118367.57133048133,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 118361.12865577362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119336.07123020347,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 119334.76811996638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110918.45213664217,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 110915.61241719709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 298751.23366744333,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 298743.2768752168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1987097.012793148,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1986986.3539445514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1547526.572379451,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1547511.4808652299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1566332.0555556007,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1566267.1717171776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1521188.0833333577,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1521164.3790849636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 834460.011711693,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 834405.6756756708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1500470.0403876477,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1500453.31179322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3167.343049307143,
            "unit": "ns/iter",
            "extra": "iterations: 220496\ncpu: 3167.2148247587315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21121.963245720683,
            "unit": "ns/iter",
            "extra": "iterations: 33139\ncpu: 21121.69347294731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15625.146931584311,
            "unit": "ns/iter",
            "extra": "iterations: 44844\ncpu: 15624.453661582345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15761.27596218685,
            "unit": "ns/iter",
            "extra": "iterations: 44430\ncpu: 15760.488408732781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12342.139648058632,
            "unit": "ns/iter",
            "extra": "iterations: 56714\ncpu: 12341.398949113021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105126.40297386528,
            "unit": "ns/iter",
            "extra": "iterations: 6658\ncpu: 105121.95854611018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138351.7510899731,
            "unit": "ns/iter",
            "extra": "iterations: 5046\ncpu: 138347.70114942477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33874.27184325587,
            "unit": "ns/iter",
            "extra": "iterations: 20670\ncpu: 33871.64489598455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33653.55476064697,
            "unit": "ns/iter",
            "extra": "iterations: 20827\ncpu: 33652.167859029265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33187.653659233896,
            "unit": "ns/iter",
            "extra": "iterations: 20988\ncpu: 33186.0253478177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66677.66942463235,
            "unit": "ns/iter",
            "extra": "iterations: 10515\ncpu: 66676.04374702822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59199.5105285405,
            "unit": "ns/iter",
            "extra": "iterations: 11825\ncpu: 59198.07188160657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23790.11779687123,
            "unit": "ns/iter",
            "extra": "iterations: 29449\ncpu: 23788.855309178125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119982.7171007499,
            "unit": "ns/iter",
            "extra": "iterations: 5836\ncpu: 119975.7539410567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96626.81382831663,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 96620.86668506685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96403.14760656144,
            "unit": "ns/iter",
            "extra": "iterations: 7249\ncpu: 96397.80659401254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95386.69546260254,
            "unit": "ns/iter",
            "extra": "iterations: 7339\ncpu: 95385.74737702646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 172333.94187191638,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 172331.77339901603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 595033.8584746,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 595000.1694915167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 489063.8162124286,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 489052.62054506777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 486091.52822300466,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 486064.1811846748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 476955.05381470284,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 476929.0871934621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302965.3732119699,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 302949.3714781106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 475419.82903658267,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475387.85617367877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23859.348097808732,
            "unit": "ns/iter",
            "extra": "iterations: 29282\ncpu: 23857.639505497984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120640.66872957697,
            "unit": "ns/iter",
            "extra": "iterations: 5817\ncpu: 120633.9865910278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96764.77826929528,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 96759.71799834145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97720.53462022524,
            "unit": "ns/iter",
            "extra": "iterations: 7149\ncpu: 97712.57518534163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97129.43670086635,
            "unit": "ns/iter",
            "extra": "iterations: 7117\ncpu: 97126.03625122839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171817.1768173115,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 171815.25049115854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 590085.7664974971,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 590048.477157364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 483931.2696551666,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 483920.89655172004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 485576.7088255782,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 485571.3690062519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 476574.96180074423,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 476552.5238744914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 302021.3805615793,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 302008.76889848785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 473695.855209712,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473656.4276048714 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}