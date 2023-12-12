window.BENCHMARK_DATA = {
  "lastUpdate": 1702394210436,
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
        "date": 1702394209646,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8564.415930394553,
            "unit": "ns/iter",
            "extra": "iterations: 81718\ncpu: 8564.23064685871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62240.8419345384,
            "unit": "ns/iter",
            "extra": "iterations: 13564\ncpu: 62240.990858153935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114704.9029761057,
            "unit": "ns/iter",
            "extra": "iterations: 7493\ncpu: 114706.23248365139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 166081.8928502506,
            "unit": "ns/iter",
            "extra": "iterations: 5189\ncpu: 166082.52071690117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 217876.33955601748,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 217873.41069626648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 269034.42259675544,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 269029.5255930088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 319556.60861559736,
            "unit": "ns/iter",
            "extra": "iterations: 2716\ncpu: 319552.39322533144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 372211.3808710427,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372203.9709649876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 423486.9365854049,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 423470.9756097561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7045.386531764202,
            "unit": "ns/iter",
            "extra": "iterations: 99627\ncpu: 7045.395324560618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5774.2665555402655,
            "unit": "ns/iter",
            "extra": "iterations: 121183\ncpu: 5774.163042671002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5852.157090301324,
            "unit": "ns/iter",
            "extra": "iterations: 119600\ncpu: 5852.121237458192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5837.196049378299,
            "unit": "ns/iter",
            "extra": "iterations: 120133\ncpu: 5837.169636985666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10057.692237877489,
            "unit": "ns/iter",
            "extra": "iterations: 69414\ncpu: 10057.420693231908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31554.78270458612,
            "unit": "ns/iter",
            "extra": "iterations: 25845\ncpu: 31554.915844457282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 169767.7094033924,
            "unit": "ns/iter",
            "extra": "iterations: 5062\ncpu: 169763.53220071134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 126991.25275518931,
            "unit": "ns/iter",
            "extra": "iterations: 5535\ncpu: 126988.40108401066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 126745.10438163638,
            "unit": "ns/iter",
            "extra": "iterations: 6687\ncpu: 126669.19395842665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114856.23464290034,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 114855.23153773433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 375034.814639925,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 375011.29476584034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2050832.2828947566,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2050918.4210526266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1558798.1165540856,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1558847.8040540558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1618333.8027921997,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1618314.4851657916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1543849.1349999595,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1543810.833333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 872686.7029328388,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 872678.9025543991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1530364.9455444934,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1530361.8811881149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39515.67518055726,
            "unit": "ns/iter",
            "extra": "iterations: 20907\ncpu: 39514.06227579288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 206613.79007908248,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 206606.54205607457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 156910.29781818212,
            "unit": "ns/iter",
            "extra": "iterations: 5500\ncpu: 156908.79999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 152171.0956691464,
            "unit": "ns/iter",
            "extra": "iterations: 5634\ncpu: 152168.31735889195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145601.9962673933,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 145596.572785884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 339522.72419166524,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 339506.23295675806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2058188.4194258584,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2058107.28476821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1603085.3889844723,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1603062.1342512926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1658873.4875444986,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1658827.4021352385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1589338.2606474073,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1589295.5706984624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 895030.3756004347,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 895013.6407300675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1569734.848229242,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1569723.6087689775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5532801.739999514,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5532287.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3447178.5296297506,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3447049.6296296245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29138.858732879416,
            "unit": "ns/iter",
            "extra": "iterations: 28032\ncpu: 29137.703339040974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 155521.82240635334,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 155519.47046109554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 115955.28095044826,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 115951.12731200269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 121435.23717315649,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 121432.6219081268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 114796.43678006757,
            "unit": "ns/iter",
            "extra": "iterations: 7466\ncpu: 114793.42351995653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 280412.1881824157,
            "unit": "ns/iter",
            "extra": "iterations: 3114\ncpu: 280406.55105972925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2015060.5075921647,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2014998.9154012965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1557154.5000000242,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1557110.1666666584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1612479.4298093547,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1612465.857885615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1531248.3612479346,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1531229.0640394096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 858944.0036900721,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 858918.6346863478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1521039.2022839321,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1520994.127243065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3196.2597982069196,
            "unit": "ns/iter",
            "extra": "iterations: 218739\ncpu: 3196.2242672774137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20970.93510651007,
            "unit": "ns/iter",
            "extra": "iterations: 33424\ncpu: 20970.434418381916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16900.902190358527,
            "unit": "ns/iter",
            "extra": "iterations: 42961\ncpu: 16901.035823188526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 17102.767952687835,
            "unit": "ns/iter",
            "extra": "iterations: 42612\ncpu: 17102.82080165211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12317.22837327431,
            "unit": "ns/iter",
            "extra": "iterations: 56666\ncpu: 12317.161966611415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 99909.2024557496,
            "unit": "ns/iter",
            "extra": "iterations: 7004\ncpu: 99907.15305539664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 140112.57696922246,
            "unit": "ns/iter",
            "extra": "iterations: 5002\ncpu: 140107.27708916354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34272.7006447161,
            "unit": "ns/iter",
            "extra": "iterations: 20474\ncpu: 34272.472404024775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34511.351227220846,
            "unit": "ns/iter",
            "extra": "iterations: 20249\ncpu: 34509.56590448905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33982.59152542842,
            "unit": "ns/iter",
            "extra": "iterations: 20650\ncpu: 33981.90799031469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68930.73154361932,
            "unit": "ns/iter",
            "extra": "iterations: 10281\ncpu: 68928.20737282385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63301.83535481207,
            "unit": "ns/iter",
            "extra": "iterations: 11048\ncpu: 63300.76031860977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24576.872345653857,
            "unit": "ns/iter",
            "extra": "iterations: 28491\ncpu: 24575.94679021478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 121128.00554304126,
            "unit": "ns/iter",
            "extra": "iterations: 5773\ncpu: 121127.99237831273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 98217.49375438677,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 98219.14385964934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 98395.08561403738,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 98391.53684210463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96964.37373736259,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 96961.21488861246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 174297.6110004872,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174290.29367844554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 595781.5863829385,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 595765.191489368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 491867.9571629829,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 491842.8370786531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 495564.238162569,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 495548.1272084755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 482664.0000000037,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 482667.93103448825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304754.2987352596,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 304759.6162232867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 478526.4251538442,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478510.32125769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24524.98127968709,
            "unit": "ns/iter",
            "extra": "iterations: 28632\ncpu: 24524.531992176664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121286.20183803476,
            "unit": "ns/iter",
            "extra": "iterations: 5767\ncpu: 121289.35321657843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97722.82737429964,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 97725.34916201138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98149.07112436004,
            "unit": "ns/iter",
            "extra": "iterations: 7044\ncpu: 98143.56899489035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97076.15248128201,
            "unit": "ns/iter",
            "extra": "iterations: 7214\ncpu: 97074.35542001721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 172133.59462788148,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 172128.6347954659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 589943.233755245,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 589936.6244725853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 486757.0319666622,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486753.6483669244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 497139.04539006477,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 497124.6808510635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 478202.1025991485,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478200.6155950722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 301635.28528270125,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 301640.4402244274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 475506.0748299515,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475495.510204073 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}