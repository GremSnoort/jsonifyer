window.BENCHMARK_DATA = {
  "lastUpdate": 1705773735708,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-15 20.04 Release c++-17": [
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
        "date": 1702490380311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 545.8609340862971,
            "unit": "ns/iter",
            "extra": "iterations: 1279796\ncpu: 545.81761468234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5069.45926999947,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5069.321999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9929.663208176256,
            "unit": "ns/iter",
            "extra": "iterations: 83948\ncpu: 9929.297898699195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14891.991101972262,
            "unit": "ns/iter",
            "extra": "iterations: 56417\ncpu: 14891.477746069442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19479.53869744442,
            "unit": "ns/iter",
            "extra": "iterations: 42716\ncpu: 19479.117894933992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24492.506988159363,
            "unit": "ns/iter",
            "extra": "iterations: 34630\ncpu: 24490.366734045627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28911.587651906266,
            "unit": "ns/iter",
            "extra": "iterations: 28636\ncpu: 28908.9677329236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33185.16731179442,
            "unit": "ns/iter",
            "extra": "iterations: 25318\ncpu: 33184.0350738605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38196.66702212398,
            "unit": "ns/iter",
            "extra": "iterations: 22506\ncpu: 38193.668355105285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 514.8045594969914,
            "unit": "ns/iter",
            "extra": "iterations: 1356597\ncpu: 514.7711516389911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 398.6329123983307,
            "unit": "ns/iter",
            "extra": "iterations: 1774304\ncpu: 398.61658430573334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 400.9425246701641,
            "unit": "ns/iter",
            "extra": "iterations: 1724653\ncpu: 400.92488170084096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 399.08776243145405,
            "unit": "ns/iter",
            "extra": "iterations: 1761984\ncpu: 399.0830223202935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 852.3481770675039,
            "unit": "ns/iter",
            "extra": "iterations: 779431\ncpu: 852.3408743044595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1987.167013339644,
            "unit": "ns/iter",
            "extra": "iterations: 401435\ncpu: 1987.1807390984827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 11048.45139480462,
            "unit": "ns/iter",
            "extra": "iterations: 73953\ncpu: 11048.11163847308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7944.360668039366,
            "unit": "ns/iter",
            "extra": "iterations: 103946\ncpu: 7944.139264618172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8225.83550859794,
            "unit": "ns/iter",
            "extra": "iterations: 101367\ncpu: 8225.700671816274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7693.274053356458,
            "unit": "ns/iter",
            "extra": "iterations: 106191\ncpu: 7693.238598374643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30184.353413360597,
            "unit": "ns/iter",
            "extra": "iterations: 27407\ncpu: 30182.778122377516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239169.43041803935,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 239154.53795379476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183296.31308609294,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 183286.89258312018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186853.800427815,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 186844.47058823536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184767.29297873966,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 184755.553191489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99263.2681053016,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99256.41170489234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183665.30339908885,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 183652.6017624845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5041.170730000886,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5040.3479999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27687.834642274684,
            "unit": "ns/iter",
            "extra": "iterations: 30177\ncpu: 27685.797130264695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21546.496607868976,
            "unit": "ns/iter",
            "extra": "iterations: 38324\ncpu: 21545.9998956268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21634.324850263296,
            "unit": "ns/iter",
            "extra": "iterations: 38901\ncpu: 21633.40274028951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21052.130964314616,
            "unit": "ns/iter",
            "extra": "iterations: 39904\ncpu: 21051.453488372033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46383.87822445526,
            "unit": "ns/iter",
            "extra": "iterations: 17910\ncpu: 46380.999441652595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 263936.20247806155,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 263917.0444242985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200697.69943817818,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 200680.82865168588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199207.2392497621,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 199197.30100640337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197070.24382505327,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 197056.65080444122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111161.434252329,
            "unit": "ns/iter",
            "extra": "iterations: 7871\ncpu: 111150.89569305048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192577.64064218357,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192565.29579942758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 811144.7074830206,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 811103.4013605436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 451392.5335025163,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 451376.497461931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2170.2135267898598,
            "unit": "ns/iter",
            "extra": "iterations: 369696\ncpu: 2170.1506102311237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10859.94895053854,
            "unit": "ns/iter",
            "extra": "iterations: 75515\ncpu: 10859.4570615109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8292.084410574038,
            "unit": "ns/iter",
            "extra": "iterations: 94609\ncpu: 8291.661469839017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8270.422750729473,
            "unit": "ns/iter",
            "extra": "iterations: 99988\ncpu: 8269.900388046577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7873.904661602198,
            "unit": "ns/iter",
            "extra": "iterations: 104921\ncpu: 7873.365675126997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29145.704981511095,
            "unit": "ns/iter",
            "extra": "iterations: 28666\ncpu: 29144.111490964948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 251359.88423155708,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 251342.771599656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189323.56707447555,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 189311.78364455837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189873.2266465818,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 189856.5002152378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 187492.98707900953,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 187092.14149544478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98832.02914266566,
            "unit": "ns/iter",
            "extra": "iterations: 8853\ncpu: 98829.87687789433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181001.9317902449,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 180992.78984022848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.10276888648056,
            "unit": "ns/iter",
            "extra": "iterations: 3592780\ncpu: 195.0909880371186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1482.2882488853718,
            "unit": "ns/iter",
            "extra": "iterations: 473053\ncpu: 1482.1964980668142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1097.063311906839,
            "unit": "ns/iter",
            "extra": "iterations: 638774\ncpu: 1096.9926765961118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1088.7485661253181,
            "unit": "ns/iter",
            "extra": "iterations: 646500\ncpu: 1088.6852281515824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 840.0272016871385,
            "unit": "ns/iter",
            "extra": "iterations: 833588\ncpu: 840.0130520113064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9386.241376564349,
            "unit": "ns/iter",
            "extra": "iterations: 75347\ncpu: 9385.726040851043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11773.493440577979,
            "unit": "ns/iter",
            "extra": "iterations: 59304\ncpu: 11772.952920544913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2688.0479009687715,
            "unit": "ns/iter",
            "extra": "iterations: 260120\ncpu: 2687.9863140089196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2653.696952125331,
            "unit": "ns/iter",
            "extra": "iterations: 263856\ncpu: 2653.586804923883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2609.3896569398603,
            "unit": "ns/iter",
            "extra": "iterations: 269224\ncpu: 2609.2625471726083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5086.258560783655,
            "unit": "ns/iter",
            "extra": "iterations: 137283\ncpu: 5085.963302084006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5129.919457086259,
            "unit": "ns/iter",
            "extra": "iterations: 136449\ncpu: 5129.63744695824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1944.886743204983,
            "unit": "ns/iter",
            "extra": "iterations: 360517\ncpu: 1944.8200778326773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10088.476607383049,
            "unit": "ns/iter",
            "extra": "iterations: 69103\ncpu: 10088.111948829881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8035.337931271369,
            "unit": "ns/iter",
            "extra": "iterations: 87213\ncpu: 8034.948918165805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7811.13168489541,
            "unit": "ns/iter",
            "extra": "iterations: 89418\ncpu: 7810.703661455244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7860.847925338672,
            "unit": "ns/iter",
            "extra": "iterations: 89364\ncpu: 7860.206570878549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18583.789953206753,
            "unit": "ns/iter",
            "extra": "iterations: 36330\ncpu: 18583.107624552522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53071.20622716109,
            "unit": "ns/iter",
            "extra": "iterations: 13136\ncpu: 53068.91747868439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42490.3642424259,
            "unit": "ns/iter",
            "extra": "iterations: 16500\ncpu: 42487.76363636414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42275.94602863544,
            "unit": "ns/iter",
            "extra": "iterations: 16342\ncpu: 42272.977603720705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41902.330620546105,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 41899.66489138897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25305.427297516853,
            "unit": "ns/iter",
            "extra": "iterations: 27138\ncpu: 25302.92947159002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41523.87329051857,
            "unit": "ns/iter",
            "extra": "iterations: 16818\ncpu: 41520.406707099675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1902.2294020854022,
            "unit": "ns/iter",
            "extra": "iterations: 366457\ncpu: 1902.1342203860067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11394.811387609288,
            "unit": "ns/iter",
            "extra": "iterations: 61242\ncpu: 11394.064530877664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9344.750386035324,
            "unit": "ns/iter",
            "extra": "iterations: 74475\ncpu: 9344.418932527631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8362.550044923566,
            "unit": "ns/iter",
            "extra": "iterations: 83475\ncpu: 8362.400718778043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8704.471961977786,
            "unit": "ns/iter",
            "extra": "iterations: 80373\ncpu: 8704.098391250758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19616.832017292116,
            "unit": "ns/iter",
            "extra": "iterations: 34700\ncpu: 19616.302593659882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51831.94107465322,
            "unit": "ns/iter",
            "extra": "iterations: 13288\ncpu: 51828.31878386508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42235.16071860434,
            "unit": "ns/iter",
            "extra": "iterations: 16532\ncpu: 42232.355431889155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41224.154442877516,
            "unit": "ns/iter",
            "extra": "iterations: 17016\ncpu: 41222.23201692509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41510.42372382867,
            "unit": "ns/iter",
            "extra": "iterations: 17004\ncpu: 41509.45071747757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26536.330426057113,
            "unit": "ns/iter",
            "extra": "iterations: 25912\ncpu: 26535.377431306042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42689.94351997741,
            "unit": "ns/iter",
            "extra": "iterations: 16466\ncpu: 42688.55216810436 ns\nthreads: 1"
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
        "date": 1702490380311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 545.8609340862971,
            "unit": "ns/iter",
            "extra": "iterations: 1279796\ncpu: 545.81761468234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5069.45926999947,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5069.321999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9929.663208176256,
            "unit": "ns/iter",
            "extra": "iterations: 83948\ncpu: 9929.297898699195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14891.991101972262,
            "unit": "ns/iter",
            "extra": "iterations: 56417\ncpu: 14891.477746069442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19479.53869744442,
            "unit": "ns/iter",
            "extra": "iterations: 42716\ncpu: 19479.117894933992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24492.506988159363,
            "unit": "ns/iter",
            "extra": "iterations: 34630\ncpu: 24490.366734045627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28911.587651906266,
            "unit": "ns/iter",
            "extra": "iterations: 28636\ncpu: 28908.9677329236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33185.16731179442,
            "unit": "ns/iter",
            "extra": "iterations: 25318\ncpu: 33184.0350738605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38196.66702212398,
            "unit": "ns/iter",
            "extra": "iterations: 22506\ncpu: 38193.668355105285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 514.8045594969914,
            "unit": "ns/iter",
            "extra": "iterations: 1356597\ncpu: 514.7711516389911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 398.6329123983307,
            "unit": "ns/iter",
            "extra": "iterations: 1774304\ncpu: 398.61658430573334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 400.9425246701641,
            "unit": "ns/iter",
            "extra": "iterations: 1724653\ncpu: 400.92488170084096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 399.08776243145405,
            "unit": "ns/iter",
            "extra": "iterations: 1761984\ncpu: 399.0830223202935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 852.3481770675039,
            "unit": "ns/iter",
            "extra": "iterations: 779431\ncpu: 852.3408743044595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1987.167013339644,
            "unit": "ns/iter",
            "extra": "iterations: 401435\ncpu: 1987.1807390984827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 11048.45139480462,
            "unit": "ns/iter",
            "extra": "iterations: 73953\ncpu: 11048.11163847308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7944.360668039366,
            "unit": "ns/iter",
            "extra": "iterations: 103946\ncpu: 7944.139264618172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8225.83550859794,
            "unit": "ns/iter",
            "extra": "iterations: 101367\ncpu: 8225.700671816274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7693.274053356458,
            "unit": "ns/iter",
            "extra": "iterations: 106191\ncpu: 7693.238598374643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30184.353413360597,
            "unit": "ns/iter",
            "extra": "iterations: 27407\ncpu: 30182.778122377516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239169.43041803935,
            "unit": "ns/iter",
            "extra": "iterations: 3636\ncpu: 239154.53795379476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183296.31308609294,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 183286.89258312018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186853.800427815,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 186844.47058823536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184767.29297873966,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 184755.553191489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99263.2681053016,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 99256.41170489234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 183665.30339908885,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 183652.6017624845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5041.170730000886,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5040.3479999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27687.834642274684,
            "unit": "ns/iter",
            "extra": "iterations: 30177\ncpu: 27685.797130264695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21546.496607868976,
            "unit": "ns/iter",
            "extra": "iterations: 38324\ncpu: 21545.9998956268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21634.324850263296,
            "unit": "ns/iter",
            "extra": "iterations: 38901\ncpu: 21633.40274028951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21052.130964314616,
            "unit": "ns/iter",
            "extra": "iterations: 39904\ncpu: 21051.453488372033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46383.87822445526,
            "unit": "ns/iter",
            "extra": "iterations: 17910\ncpu: 46380.999441652595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 263936.20247806155,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 263917.0444242985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200697.69943817818,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 200680.82865168588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199207.2392497621,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 199197.30100640337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197070.24382505327,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 197056.65080444122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111161.434252329,
            "unit": "ns/iter",
            "extra": "iterations: 7871\ncpu: 111150.89569305048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192577.64064218357,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 192565.29579942758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 811144.7074830206,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 811103.4013605436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 451392.5335025163,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 451376.497461931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2170.2135267898598,
            "unit": "ns/iter",
            "extra": "iterations: 369696\ncpu: 2170.1506102311237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10859.94895053854,
            "unit": "ns/iter",
            "extra": "iterations: 75515\ncpu: 10859.4570615109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8292.084410574038,
            "unit": "ns/iter",
            "extra": "iterations: 94609\ncpu: 8291.661469839017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8270.422750729473,
            "unit": "ns/iter",
            "extra": "iterations: 99988\ncpu: 8269.900388046577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7873.904661602198,
            "unit": "ns/iter",
            "extra": "iterations: 104921\ncpu: 7873.365675126997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29145.704981511095,
            "unit": "ns/iter",
            "extra": "iterations: 28666\ncpu: 29144.111490964948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 251359.88423155708,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 251342.771599656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189323.56707447555,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 189311.78364455837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189873.2266465818,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 189856.5002152378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 187492.98707900953,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 187092.14149544478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98832.02914266566,
            "unit": "ns/iter",
            "extra": "iterations: 8853\ncpu: 98829.87687789433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181001.9317902449,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 180992.78984022848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.10276888648056,
            "unit": "ns/iter",
            "extra": "iterations: 3592780\ncpu: 195.0909880371186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1482.2882488853718,
            "unit": "ns/iter",
            "extra": "iterations: 473053\ncpu: 1482.1964980668142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1097.063311906839,
            "unit": "ns/iter",
            "extra": "iterations: 638774\ncpu: 1096.9926765961118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1088.7485661253181,
            "unit": "ns/iter",
            "extra": "iterations: 646500\ncpu: 1088.6852281515824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 840.0272016871385,
            "unit": "ns/iter",
            "extra": "iterations: 833588\ncpu: 840.0130520113064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9386.241376564349,
            "unit": "ns/iter",
            "extra": "iterations: 75347\ncpu: 9385.726040851043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11773.493440577979,
            "unit": "ns/iter",
            "extra": "iterations: 59304\ncpu: 11772.952920544913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2688.0479009687715,
            "unit": "ns/iter",
            "extra": "iterations: 260120\ncpu: 2687.9863140089196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2653.696952125331,
            "unit": "ns/iter",
            "extra": "iterations: 263856\ncpu: 2653.586804923883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2609.3896569398603,
            "unit": "ns/iter",
            "extra": "iterations: 269224\ncpu: 2609.2625471726083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5086.258560783655,
            "unit": "ns/iter",
            "extra": "iterations: 137283\ncpu: 5085.963302084006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5129.919457086259,
            "unit": "ns/iter",
            "extra": "iterations: 136449\ncpu: 5129.63744695824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1944.886743204983,
            "unit": "ns/iter",
            "extra": "iterations: 360517\ncpu: 1944.8200778326773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10088.476607383049,
            "unit": "ns/iter",
            "extra": "iterations: 69103\ncpu: 10088.111948829881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8035.337931271369,
            "unit": "ns/iter",
            "extra": "iterations: 87213\ncpu: 8034.948918165805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7811.13168489541,
            "unit": "ns/iter",
            "extra": "iterations: 89418\ncpu: 7810.703661455244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7860.847925338672,
            "unit": "ns/iter",
            "extra": "iterations: 89364\ncpu: 7860.206570878549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18583.789953206753,
            "unit": "ns/iter",
            "extra": "iterations: 36330\ncpu: 18583.107624552522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53071.20622716109,
            "unit": "ns/iter",
            "extra": "iterations: 13136\ncpu: 53068.91747868439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42490.3642424259,
            "unit": "ns/iter",
            "extra": "iterations: 16500\ncpu: 42487.76363636414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42275.94602863544,
            "unit": "ns/iter",
            "extra": "iterations: 16342\ncpu: 42272.977603720705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41902.330620546105,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 41899.66489138897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25305.427297516853,
            "unit": "ns/iter",
            "extra": "iterations: 27138\ncpu: 25302.92947159002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41523.87329051857,
            "unit": "ns/iter",
            "extra": "iterations: 16818\ncpu: 41520.406707099675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1902.2294020854022,
            "unit": "ns/iter",
            "extra": "iterations: 366457\ncpu: 1902.1342203860067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11394.811387609288,
            "unit": "ns/iter",
            "extra": "iterations: 61242\ncpu: 11394.064530877664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9344.750386035324,
            "unit": "ns/iter",
            "extra": "iterations: 74475\ncpu: 9344.418932527631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8362.550044923566,
            "unit": "ns/iter",
            "extra": "iterations: 83475\ncpu: 8362.400718778043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8704.471961977786,
            "unit": "ns/iter",
            "extra": "iterations: 80373\ncpu: 8704.098391250758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19616.832017292116,
            "unit": "ns/iter",
            "extra": "iterations: 34700\ncpu: 19616.302593659882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51831.94107465322,
            "unit": "ns/iter",
            "extra": "iterations: 13288\ncpu: 51828.31878386508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42235.16071860434,
            "unit": "ns/iter",
            "extra": "iterations: 16532\ncpu: 42232.355431889155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41224.154442877516,
            "unit": "ns/iter",
            "extra": "iterations: 17016\ncpu: 41222.23201692509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41510.42372382867,
            "unit": "ns/iter",
            "extra": "iterations: 17004\ncpu: 41509.45071747757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26536.330426057113,
            "unit": "ns/iter",
            "extra": "iterations: 25912\ncpu: 26535.377431306042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42689.94351997741,
            "unit": "ns/iter",
            "extra": "iterations: 16466\ncpu: 42688.55216810436 ns\nthreads: 1"
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
        "date": 1702493017099,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 548.5841597387625,
            "unit": "ns/iter",
            "extra": "iterations: 1294764\ncpu: 548.5508555999395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5170.378149999806,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5170.388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9866.006847333208,
            "unit": "ns/iter",
            "extra": "iterations: 82952\ncpu: 9865.804320570935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14692.99994771305,
            "unit": "ns/iter",
            "extra": "iterations: 57375\ncpu: 14691.85185185185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19318.79361923308,
            "unit": "ns/iter",
            "extra": "iterations: 43255\ncpu: 19318.746965668703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24189.975652778456,
            "unit": "ns/iter",
            "extra": "iterations: 34583\ncpu: 24189.549778793047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28880.242425290235,
            "unit": "ns/iter",
            "extra": "iterations: 29011\ncpu: 28879.045879149293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33246.68816169396,
            "unit": "ns/iter",
            "extra": "iterations: 24936\ncpu: 33244.68238691046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38384.699635036835,
            "unit": "ns/iter",
            "extra": "iterations: 21920\ncpu: 38382.45437956206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 516.8600141389368,
            "unit": "ns/iter",
            "extra": "iterations: 1356537\ncpu: 516.8136217441906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.5676212229595,
            "unit": "ns/iter",
            "extra": "iterations: 1723209\ncpu: 404.54750410426163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.31133376007455,
            "unit": "ns/iter",
            "extra": "iterations: 1709018\ncpu: 410.2857313381134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.00739726711555,
            "unit": "ns/iter",
            "extra": "iterations: 1721041\ncpu: 406.9793805028464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 872.0047394720174,
            "unit": "ns/iter",
            "extra": "iterations: 804309\ncpu: 871.9623925630569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2111.7869276304805,
            "unit": "ns/iter",
            "extra": "iterations: 377881\ncpu: 2111.6555211825976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10764.105464444487,
            "unit": "ns/iter",
            "extra": "iterations: 75305\ncpu: 10763.410132129353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8360.485138756954,
            "unit": "ns/iter",
            "extra": "iterations: 97401\ncpu: 8360.141066313492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8289.022704102923,
            "unit": "ns/iter",
            "extra": "iterations: 98088\ncpu: 8288.49502487562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7811.326302088408,
            "unit": "ns/iter",
            "extra": "iterations: 104486\ncpu: 7811.324005129875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29794.193007747817,
            "unit": "ns/iter",
            "extra": "iterations: 27745\ncpu: 29791.202018381686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240192.16496267144,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 240176.62337662256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184471.5345345257,
            "unit": "ns/iter",
            "extra": "iterations: 4662\ncpu: 184457.80780780784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 182827.19880418933,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 182817.809096733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 183494.7160204611,
            "unit": "ns/iter",
            "extra": "iterations: 4694\ncpu: 183480.059650618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98428.74907125774,
            "unit": "ns/iter",
            "extra": "iterations: 8883\ncpu: 98423.68569177102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 182051.8365325046,
            "unit": "ns/iter",
            "extra": "iterations: 4845\ncpu: 182041.85758513914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5837.543040676099,
            "unit": "ns/iter",
            "extra": "iterations: 141041\ncpu: 5837.196985273777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27779.095044332367,
            "unit": "ns/iter",
            "extra": "iterations: 30228\ncpu: 27777.894667195993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21775.6787707322,
            "unit": "ns/iter",
            "extra": "iterations: 38527\ncpu: 21774.420536247293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21548.123209618374,
            "unit": "ns/iter",
            "extra": "iterations: 38260\ncpu: 21546.99947726088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21444.083866852994,
            "unit": "ns/iter",
            "extra": "iterations: 39205\ncpu: 21442.31603111847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47506.92957504543,
            "unit": "ns/iter",
            "extra": "iterations: 17437\ncpu: 47506.19946091632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259119.43559371916,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 259098.0456026067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200685.76804243514,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 200676.38920913095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202235.74564462196,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 202222.9732868756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 198571.332728518,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 198562.19097300927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111982.95263627444,
            "unit": "ns/iter",
            "extra": "iterations: 7833\ncpu: 111976.08834418496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194040.6850692909,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 194032.81180152047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 809333.5791702027,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 809297.7138018605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 446836.81511334394,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 446828.1612090689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2184.3889617894843,
            "unit": "ns/iter",
            "extra": "iterations: 371129\ncpu: 2184.3297074602115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11086.393247695802,
            "unit": "ns/iter",
            "extra": "iterations: 74345\ncpu: 11086.155087766492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8559.715927236002,
            "unit": "ns/iter",
            "extra": "iterations: 95817\ncpu: 8559.639729901759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8747.059264999518,
            "unit": "ns/iter",
            "extra": "iterations: 94204\ncpu: 8746.977835336096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8273.990194108954,
            "unit": "ns/iter",
            "extra": "iterations: 99532\ncpu: 8273.789334083482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29368.860226754638,
            "unit": "ns/iter",
            "extra": "iterations: 28489\ncpu: 29367.576959528138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 243431.06064803354,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 243417.36361118796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 182889.2096944341,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 182879.74710221257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 183416.04845164655,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 183403.9182641664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 180597.01353038367,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 180586.11573688546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98341.90095132601,
            "unit": "ns/iter",
            "extra": "iterations: 8935\ncpu: 98335.97090095154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178842.69832172748,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 178833.40155546533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 198.64631075397477,
            "unit": "ns/iter",
            "extra": "iterations: 3507302\ncpu: 198.63641625386254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1431.7394780971545,
            "unit": "ns/iter",
            "extra": "iterations: 481852\ncpu: 1431.685247752423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1155.4539084908033,
            "unit": "ns/iter",
            "extra": "iterations: 606999\ncpu: 1155.375709020938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1132.0221175430254,
            "unit": "ns/iter",
            "extra": "iterations: 624979\ncpu: 1132.0092355103113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 849.3947727367279,
            "unit": "ns/iter",
            "extra": "iterations: 816718\ncpu: 849.3694273910967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9398.729946776606,
            "unit": "ns/iter",
            "extra": "iterations: 74215\ncpu: 9398.206562015748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11534.0110106828,
            "unit": "ns/iter",
            "extra": "iterations: 60850\ncpu: 11533.364009860356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2598.7587790181115,
            "unit": "ns/iter",
            "extra": "iterations: 268538\ncpu: 2598.5707795544713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2531.8288540831377,
            "unit": "ns/iter",
            "extra": "iterations: 275753\ncpu: 2531.8020112201875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2564.611868264723,
            "unit": "ns/iter",
            "extra": "iterations: 274126\ncpu: 2564.542217812249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5018.787418732225,
            "unit": "ns/iter",
            "extra": "iterations: 139970\ncpu: 5018.590412231208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4961.396379783029,
            "unit": "ns/iter",
            "extra": "iterations: 140986\ncpu: 4961.079114238285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1931.7076737264133,
            "unit": "ns/iter",
            "extra": "iterations: 363474\ncpu: 1931.6187677798337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10199.957921043335,
            "unit": "ns/iter",
            "extra": "iterations: 68823\ncpu: 10199.196489545533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8086.462064706043,
            "unit": "ns/iter",
            "extra": "iterations: 87412\ncpu: 8086.456092985013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8006.361476540954,
            "unit": "ns/iter",
            "extra": "iterations: 86960\ncpu: 8005.816467341248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8027.8728921398215,
            "unit": "ns/iter",
            "extra": "iterations: 87233\ncpu: 8027.480425985577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19015.744180333335,
            "unit": "ns/iter",
            "extra": "iterations: 36643\ncpu: 19014.477526403425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52999.28454421643,
            "unit": "ns/iter",
            "extra": "iterations: 13186\ncpu: 52998.581829213035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42522.441242487876,
            "unit": "ns/iter",
            "extra": "iterations: 16483\ncpu: 42520.38463871936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42307.25948526423,
            "unit": "ns/iter",
            "extra": "iterations: 16552\ncpu: 42306.3194780089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42048.116281865274,
            "unit": "ns/iter",
            "extra": "iterations: 16632\ncpu: 42047.10798460771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25286.098228778697,
            "unit": "ns/iter",
            "extra": "iterations: 27721\ncpu: 25285.455070163483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41914.43527737728,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 41913.16974869632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1919.9704081632256,
            "unit": "ns/iter",
            "extra": "iterations: 360640\ncpu: 1919.919864684999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10596.55277748585,
            "unit": "ns/iter",
            "extra": "iterations: 66553\ncpu: 10596.342764413426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8900.851239456393,
            "unit": "ns/iter",
            "extra": "iterations: 77776\ncpu: 8900.76887471703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8383.893345782284,
            "unit": "ns/iter",
            "extra": "iterations: 83541\ncpu: 8383.789995331646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9620.986141432038,
            "unit": "ns/iter",
            "extra": "iterations: 72374\ncpu: 9620.682841904476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18689.757585468087,
            "unit": "ns/iter",
            "extra": "iterations: 37440\ncpu: 18689.198717948682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53428.71608905303,
            "unit": "ns/iter",
            "extra": "iterations: 13071\ncpu: 53427.6413434321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42567.25949679489,
            "unit": "ns/iter",
            "extra": "iterations: 16216\ncpu: 42566.57622101568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41203.994174754946,
            "unit": "ns/iter",
            "extra": "iterations: 16995\ncpu: 41202.41247425667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42666.31807126375,
            "unit": "ns/iter",
            "extra": "iterations: 16446\ncpu: 42664.34999391954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25978.119874627286,
            "unit": "ns/iter",
            "extra": "iterations: 27120\ncpu: 25976.135693215518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42138.54214570637,
            "unit": "ns/iter",
            "extra": "iterations: 16787\ncpu: 42136.86185738973 ns\nthreads: 1"
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
        "date": 1702504027862,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 541.3642631695966,
            "unit": "ns/iter",
            "extra": "iterations: 1284434\ncpu: 541.3484071583282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5191.3646200000585,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5191.181999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10135.215185580751,
            "unit": "ns/iter",
            "extra": "iterations: 82552\ncpu: 10135.107568562842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15049.960443973561,
            "unit": "ns/iter",
            "extra": "iterations: 55769\ncpu: 15049.717585038283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19639.63482631646,
            "unit": "ns/iter",
            "extra": "iterations: 42577\ncpu: 19639.49315358058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24436.425497120996,
            "unit": "ns/iter",
            "extra": "iterations: 34247\ncpu: 24435.410400911027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29410.171408500708,
            "unit": "ns/iter",
            "extra": "iterations: 28470\ncpu: 29408.363189322074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34154.881606335024,
            "unit": "ns/iter",
            "extra": "iterations: 24503\ncpu: 34154.28723013507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39146.787002786965,
            "unit": "ns/iter",
            "extra": "iterations: 21897\ncpu: 39145.549618669196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 531.9526220708225,
            "unit": "ns/iter",
            "extra": "iterations: 1319644\ncpu: 531.9380833012546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 411.64920822003677,
            "unit": "ns/iter",
            "extra": "iterations: 1714681\ncpu: 411.6201205938593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 420.3084128718414,
            "unit": "ns/iter",
            "extra": "iterations: 1669632\ncpu: 420.30483363998803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 417.97131013622777,
            "unit": "ns/iter",
            "extra": "iterations: 1673971\ncpu: 417.9624975582012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 876.3604766682215,
            "unit": "ns/iter",
            "extra": "iterations: 799214\ncpu: 876.33449864492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2097.2534134437774,
            "unit": "ns/iter",
            "extra": "iterations: 381140\ncpu: 2097.197092931733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10358.77165646555,
            "unit": "ns/iter",
            "extra": "iterations: 75474\ncpu: 10358.775207356175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8471.596886517642,
            "unit": "ns/iter",
            "extra": "iterations: 93336\ncpu: 8471.41938801749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8263.817405184242,
            "unit": "ns/iter",
            "extra": "iterations: 99614\ncpu: 8263.684823418393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8069.66052814072,
            "unit": "ns/iter",
            "extra": "iterations: 102359\ncpu: 8069.282622925185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29959.011553182423,
            "unit": "ns/iter",
            "extra": "iterations: 27698\ncpu: 29957.459022312036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 250943.8499298951,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 250923.61851332366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 190832.8547046123,
            "unit": "ns/iter",
            "extra": "iterations: 4570\ncpu: 190818.03063457352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188675.9187418222,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 188662.25425950243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 191530.39127603773,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 191521.6796875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98236.83290373211,
            "unit": "ns/iter",
            "extra": "iterations: 8923\ncpu: 98230.79681721398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179901.62361169475,
            "unit": "ns/iter",
            "extra": "iterations: 4862\ncpu: 179886.56931304006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5056.821289999789,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5056.607999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27708.087001570497,
            "unit": "ns/iter",
            "extra": "iterations: 29919\ncpu: 27707.206123199274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21703.632966065237,
            "unit": "ns/iter",
            "extra": "iterations: 38664\ncpu: 21703.08814400996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21731.626563106474,
            "unit": "ns/iter",
            "extra": "iterations: 38625\ncpu: 21730.964401294485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21219.826419717145,
            "unit": "ns/iter",
            "extra": "iterations: 39198\ncpu: 21219.04433899693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47278.880700969195,
            "unit": "ns/iter",
            "extra": "iterations: 17804\ncpu: 47276.3648618287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 261083.28715812854,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 261064.5065398335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204423.6428404268,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 204410.85071478726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199409.4408577194,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 199403.0435785112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 198473.85490462586,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 198473.91008174454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111391.0423374267,
            "unit": "ns/iter",
            "extra": "iterations: 7889\ncpu: 111386.71568006111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 190898.05015329178,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 190892.40035041657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 813608.5425170287,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 813579.2517006834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 451635.9691991769,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 451632.135523616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2146.025050244434,
            "unit": "ns/iter",
            "extra": "iterations: 375166\ncpu: 2145.9375316526575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10742.326789761637,
            "unit": "ns/iter",
            "extra": "iterations: 76309\ncpu: 10742.013392915633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8365.371840132802,
            "unit": "ns/iter",
            "extra": "iterations: 98857\ncpu: 8365.240701214903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8492.75449039734,
            "unit": "ns/iter",
            "extra": "iterations: 96428\ncpu: 8492.757290413576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8023.1882358694875,
            "unit": "ns/iter",
            "extra": "iterations: 102260\ncpu: 8023.0363778603305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29463.508219855914,
            "unit": "ns/iter",
            "extra": "iterations: 28346\ncpu: 29462.54850772602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246305.262922579,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 246297.54121262836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186168.62848032973,
            "unit": "ns/iter",
            "extra": "iterations: 4705\ncpu: 186166.37619553704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198731.47807576967,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 198728.2460621532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 186117.5362349846,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 186111.8782161246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98576.27601962093,
            "unit": "ns/iter",
            "extra": "iterations: 8974\ncpu: 98573.47893915774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180847.6694095978,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 180843.0158403618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 194.26822546042195,
            "unit": "ns/iter",
            "extra": "iterations: 3599621\ncpu: 194.26453507188694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1433.4504286601268,
            "unit": "ns/iter",
            "extra": "iterations: 487449\ncpu: 1433.4219579894568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1044.1400291738146,
            "unit": "ns/iter",
            "extra": "iterations: 671153\ncpu: 1044.1291329994742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1122.5660749379153,
            "unit": "ns/iter",
            "extra": "iterations: 618245\ncpu: 1122.5667817774438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 871.8831109002521,
            "unit": "ns/iter",
            "extra": "iterations: 803163\ncpu: 871.8724592641838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9436.778084590076,
            "unit": "ns/iter",
            "extra": "iterations: 74240\ncpu: 9436.50862068965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11725.882639683132,
            "unit": "ns/iter",
            "extra": "iterations: 59492\ncpu: 11725.632017750338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2612.8427861662394,
            "unit": "ns/iter",
            "extra": "iterations: 267292\ncpu: 2612.797614593774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2594.1314912480025,
            "unit": "ns/iter",
            "extra": "iterations: 268862\ncpu: 2594.13156191651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2633.314756998313,
            "unit": "ns/iter",
            "extra": "iterations: 266809\ncpu: 2633.2541256104532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5025.495135010075,
            "unit": "ns/iter",
            "extra": "iterations: 138952\ncpu: 5025.063331222244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4935.504324225386,
            "unit": "ns/iter",
            "extra": "iterations: 142222\ncpu: 4935.230133172107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1895.1853735004004,
            "unit": "ns/iter",
            "extra": "iterations: 369357\ncpu: 1895.1079849576304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9899.597448587785,
            "unit": "ns/iter",
            "extra": "iterations: 70314\ncpu: 9898.919134169717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7896.200736066555,
            "unit": "ns/iter",
            "extra": "iterations: 88579\ncpu: 7895.682949683409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7810.761064015473,
            "unit": "ns/iter",
            "extra": "iterations: 89886\ncpu: 7810.428765324889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7784.99978685611,
            "unit": "ns/iter",
            "extra": "iterations: 89142\ncpu: 7784.872450696649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18555.669674611003,
            "unit": "ns/iter",
            "extra": "iterations: 37678\ncpu: 18554.886140453367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52588.93030510913,
            "unit": "ns/iter",
            "extra": "iterations: 13143\ncpu: 52585.55124400837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42216.84682290481,
            "unit": "ns/iter",
            "extra": "iterations: 16556\ncpu: 42214.32109205154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42199.99304181256,
            "unit": "ns/iter",
            "extra": "iterations: 16671\ncpu: 42199.13622458149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42056.61368509006,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 42054.085278704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25269.291341398555,
            "unit": "ns/iter",
            "extra": "iterations: 27926\ncpu: 25268.70300078806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41325.999173697965,
            "unit": "ns/iter",
            "extra": "iterations: 16943\ncpu: 41323.20722422162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2109.0274676587173,
            "unit": "ns/iter",
            "extra": "iterations: 309200\ncpu: 2108.982212160441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10002.602510160157,
            "unit": "ns/iter",
            "extra": "iterations: 69876\ncpu: 10002.604613887288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8928.29527923431,
            "unit": "ns/iter",
            "extra": "iterations: 77784\ncpu: 8927.753779697634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9322.155165246539,
            "unit": "ns/iter",
            "extra": "iterations: 74585\ncpu: 9321.572702285828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9218.899394498156,
            "unit": "ns/iter",
            "extra": "iterations: 75970\ncpu: 9213.272344346457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18381.197501361876,
            "unit": "ns/iter",
            "extra": "iterations: 38501\ncpu: 18380.112204877718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52911.1239990905,
            "unit": "ns/iter",
            "extra": "iterations: 13113\ncpu: 52910.104476472756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42563.20987352591,
            "unit": "ns/iter",
            "extra": "iterations: 16367\ncpu: 42562.179996334744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41211.73379973139,
            "unit": "ns/iter",
            "extra": "iterations: 16867\ncpu: 41207.93857828869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40688.69712657397,
            "unit": "ns/iter",
            "extra": "iterations: 17192\ncpu: 40687.08701721796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24819.83492637014,
            "unit": "ns/iter",
            "extra": "iterations: 28248\ncpu: 24817.85967148126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42637.26539969589,
            "unit": "ns/iter",
            "extra": "iterations: 16575\ncpu: 42634.64856711925 ns\nthreads: 1"
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
        "date": 1705575710443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 535.8741227670996,
            "unit": "ns/iter",
            "extra": "iterations: 1307663\ncpu: 535.8624507996326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5127.52164999938,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5127.249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9958.057881303856,
            "unit": "ns/iter",
            "extra": "iterations: 83844\ncpu: 9957.632030914554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14818.309370897301,
            "unit": "ns/iter",
            "extra": "iterations: 56366\ncpu: 14817.735869140972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19534.77052775694,
            "unit": "ns/iter",
            "extra": "iterations: 42406\ncpu: 19533.709852379376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24374.252696997504,
            "unit": "ns/iter",
            "extra": "iterations: 34112\ncpu: 24373.23229362103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29162.84234187123,
            "unit": "ns/iter",
            "extra": "iterations: 28695\ncpu: 29161.707614567003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34020.66620890558,
            "unit": "ns/iter",
            "extra": "iterations: 24758\ncpu: 34018.24056870505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38350.02471654984,
            "unit": "ns/iter",
            "extra": "iterations: 22050\ncpu: 38347.718820861664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 524.6982635751559,
            "unit": "ns/iter",
            "extra": "iterations: 1337979\ncpu: 524.6723603285252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 391.5795766419806,
            "unit": "ns/iter",
            "extra": "iterations: 1714341\ncpu: 391.55255576340954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 394.3346376744463,
            "unit": "ns/iter",
            "extra": "iterations: 1786087\ncpu: 394.30106148244784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 398.4670327289006,
            "unit": "ns/iter",
            "extra": "iterations: 1753800\ncpu: 398.443094993728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 866.3323902296125,
            "unit": "ns/iter",
            "extra": "iterations: 807617\ncpu: 866.2992482822925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2097.983861237461,
            "unit": "ns/iter",
            "extra": "iterations: 381256\ncpu: 2097.8764924355282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10974.584962686842,
            "unit": "ns/iter",
            "extra": "iterations: 74774\ncpu: 10974.000320967189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8157.06630468433,
            "unit": "ns/iter",
            "extra": "iterations: 100189\ncpu: 8156.554112726947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8349.72601024799,
            "unit": "ns/iter",
            "extra": "iterations: 103044\ncpu: 8349.381817476038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7866.542345088278,
            "unit": "ns/iter",
            "extra": "iterations: 103672\ncpu: 7866.39690562542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29987.645223391744,
            "unit": "ns/iter",
            "extra": "iterations: 27530\ncpu: 29985.670177987595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243988.28571430864,
            "unit": "ns/iter",
            "extra": "iterations: 3605\ncpu: 243968.90429958396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184468.75783288394,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 184455.1566579633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 190075.45187742985,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 190062.27880880458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 194304.372401979,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 194292.5648167986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99873.52382040705,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 99867.23409116844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184321.21140732037,
            "unit": "ns/iter",
            "extra": "iterations: 4839\ncpu: 184312.9158917129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5817.276906447293,
            "unit": "ns/iter",
            "extra": "iterations: 141546\ncpu: 5816.959857572819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27705.07181917629,
            "unit": "ns/iter",
            "extra": "iterations: 30173\ncpu: 27703.453418619232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21759.56933465831,
            "unit": "ns/iter",
            "extra": "iterations: 38206\ncpu: 21758.380882583886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21560.9795093897,
            "unit": "ns/iter",
            "extra": "iterations: 37871\ncpu: 21559.813577671575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20833.900836977824,
            "unit": "ns/iter",
            "extra": "iterations: 40025\ncpu: 20832.77701436602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46283.148135872456,
            "unit": "ns/iter",
            "extra": "iterations: 18105\ncpu: 46280.23750345218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 260553.49679390513,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 260547.2366412209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200740.91040995088,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 200732.47351450924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200080.02152013785,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 200073.19139194183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197715.54716553076,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 197709.25170068172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113166.81327854072,
            "unit": "ns/iter",
            "extra": "iterations: 7787\ncpu: 113164.56915371731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191027.52917772514,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 191020.55702917726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 808983.6966865589,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 808959.6431605781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 446325.9443601708,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 446312.0384420839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2171.2028396146843,
            "unit": "ns/iter",
            "extra": "iterations: 371811\ncpu: 2171.124307780028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11132.30707021821,
            "unit": "ns/iter",
            "extra": "iterations: 74439\ncpu: 11131.856956702812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8720.319512893031,
            "unit": "ns/iter",
            "extra": "iterations: 94353\ncpu: 8719.826608586856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8797.256370689594,
            "unit": "ns/iter",
            "extra": "iterations: 93318\ncpu: 8796.980218178667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8483.81653598789,
            "unit": "ns/iter",
            "extra": "iterations: 97823\ncpu: 8483.66641791804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29670.563747541644,
            "unit": "ns/iter",
            "extra": "iterations: 28456\ncpu: 29669.616249648672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 253085.50528071448,
            "unit": "ns/iter",
            "extra": "iterations: 3598\ncpu: 253070.1222901612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 190192.8091330013,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 190187.64730639732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 187294.89233039037,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 187286.49388959116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184701.0500730352,
            "unit": "ns/iter",
            "extra": "iterations: 4793\ncpu: 184696.78698101352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99430.84953186757,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 99424.35354435982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184690.05333333433,
            "unit": "ns/iter",
            "extra": "iterations: 4950\ncpu: 184685.6767676774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 197.64527339403253,
            "unit": "ns/iter",
            "extra": "iterations: 3533307\ncpu: 197.63620879815974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1485.5933114430593,
            "unit": "ns/iter",
            "extra": "iterations: 472359\ncpu: 1485.5069978554473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1085.4515622659994,
            "unit": "ns/iter",
            "extra": "iterations: 640864\ncpu: 1085.3841064562937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1176.059047082935,
            "unit": "ns/iter",
            "extra": "iterations: 621775\ncpu: 1176.0004824896446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 824.0492850416229,
            "unit": "ns/iter",
            "extra": "iterations: 848371\ncpu: 824.0190907044229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9397.156028275243,
            "unit": "ns/iter",
            "extra": "iterations: 74980\ncpu: 9396.768471592335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11585.464549898594,
            "unit": "ns/iter",
            "extra": "iterations: 60564\ncpu: 11585.131431213236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2610.972351829578,
            "unit": "ns/iter",
            "extra": "iterations: 270904\ncpu: 2610.796444496936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2597.7745747200506,
            "unit": "ns/iter",
            "extra": "iterations: 269881\ncpu: 2597.714548263876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2543.669687232336,
            "unit": "ns/iter",
            "extra": "iterations: 259554\ncpu: 2543.6117339744337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5032.04232639776,
            "unit": "ns/iter",
            "extra": "iterations: 138377\ncpu: 5031.730706692602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4997.259736075524,
            "unit": "ns/iter",
            "extra": "iterations: 139661\ncpu: 4997.099404987763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1915.7522447729434,
            "unit": "ns/iter",
            "extra": "iterations: 366184\ncpu: 1915.642136193834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10003.478460457043,
            "unit": "ns/iter",
            "extra": "iterations: 69709\ncpu: 10003.200447574953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7927.265865177806,
            "unit": "ns/iter",
            "extra": "iterations: 88086\ncpu: 7926.99975024407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7915.27210165886,
            "unit": "ns/iter",
            "extra": "iterations: 88059\ncpu: 7915.025153590257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7912.441265811173,
            "unit": "ns/iter",
            "extra": "iterations: 88228\ncpu: 7911.861313868653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18580.854166666315,
            "unit": "ns/iter",
            "extra": "iterations: 37440\ncpu: 18579.155982905937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53096.55401809235,
            "unit": "ns/iter",
            "extra": "iterations: 13153\ncpu: 53095.020147495496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42520.715272314694,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 42518.84654994816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42383.49627656344,
            "unit": "ns/iter",
            "extra": "iterations: 16517\ncpu: 42379.66337712597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42358.54308963775,
            "unit": "ns/iter",
            "extra": "iterations: 15607\ncpu: 42356.02614211583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25517.672056945245,
            "unit": "ns/iter",
            "extra": "iterations: 27395\ncpu: 25515.85325789401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41953.130740980334,
            "unit": "ns/iter",
            "extra": "iterations: 16613\ncpu: 41949.85854451303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1881.2991909208322,
            "unit": "ns/iter",
            "extra": "iterations: 368320\ncpu: 1881.11696350999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10897.230272408335,
            "unit": "ns/iter",
            "extra": "iterations: 64719\ncpu: 10896.274664318065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9093.230390373928,
            "unit": "ns/iter",
            "extra": "iterations: 76952\ncpu: 9093.02422289223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9164.791698713303,
            "unit": "ns/iter",
            "extra": "iterations: 78012\ncpu: 9164.400348664365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9341.375700482915,
            "unit": "ns/iter",
            "extra": "iterations: 74413\ncpu: 9340.804698103939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19519.00246298346,
            "unit": "ns/iter",
            "extra": "iterations: 35729\ncpu: 19516.840661647413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53353.43082338639,
            "unit": "ns/iter",
            "extra": "iterations: 13068\ncpu: 53346.94674012866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41380.436177194926,
            "unit": "ns/iter",
            "extra": "iterations: 16773\ncpu: 41376.68872592891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43574.308144206036,
            "unit": "ns/iter",
            "extra": "iterations: 16171\ncpu: 43571.97452229292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42162.27396850419,
            "unit": "ns/iter",
            "extra": "iterations: 16699\ncpu: 42159.94969758616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26499.805235957207,
            "unit": "ns/iter",
            "extra": "iterations: 26509\ncpu: 26499.219133124367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43226.263378999196,
            "unit": "ns/iter",
            "extra": "iterations: 16425\ncpu: 43224.286149162224 ns\nthreads: 1"
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
        "date": 1705773735190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 529.9148882831405,
            "unit": "ns/iter",
            "extra": "iterations: 1316364\ncpu: 529.8880096994449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5210.457179999821,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5210.161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9812.913977356962,
            "unit": "ns/iter",
            "extra": "iterations: 85059\ncpu: 9812.55363923865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14788.79298626784,
            "unit": "ns/iter",
            "extra": "iterations: 57088\ncpu: 14788.176149103138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19134.475470476,
            "unit": "ns/iter",
            "extra": "iterations: 43254\ncpu: 19133.84195681323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24127.919578,
            "unit": "ns/iter",
            "extra": "iterations: 34692\ncpu: 24126.608439986154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28772.633876044678,
            "unit": "ns/iter",
            "extra": "iterations: 29236\ncpu: 28771.757422355982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33826.26327575082,
            "unit": "ns/iter",
            "extra": "iterations: 25008\ncpu: 33824.56413947537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37859.48254556334,
            "unit": "ns/iter",
            "extra": "iterations: 22659\ncpu: 37857.46943819234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 500.2871163570256,
            "unit": "ns/iter",
            "extra": "iterations: 1390290\ncpu: 500.25124254651905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 381.15091619311374,
            "unit": "ns/iter",
            "extra": "iterations: 1837331\ncpu: 381.1303461379579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 396.37648041554183,
            "unit": "ns/iter",
            "extra": "iterations: 1787336\ncpu: 396.3642538392334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 386.78807469681794,
            "unit": "ns/iter",
            "extra": "iterations: 1813304\ncpu: 386.778885393735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 858.199047137646,
            "unit": "ns/iter",
            "extra": "iterations: 815018\ncpu: 858.1985919329401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1987.9234938140264,
            "unit": "ns/iter",
            "extra": "iterations: 401876\ncpu: 1987.8509789089167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10933.544255544926,
            "unit": "ns/iter",
            "extra": "iterations: 75290\ncpu: 10933.418780714579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8329.35969354155,
            "unit": "ns/iter",
            "extra": "iterations: 98545\ncpu: 8329.185651225318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8171.811720585846,
            "unit": "ns/iter",
            "extra": "iterations: 99995\ncpu: 8171.762588129422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7558.871555300983,
            "unit": "ns/iter",
            "extra": "iterations: 107992\ncpu: 7558.733054300305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30282.470468058316,
            "unit": "ns/iter",
            "extra": "iterations: 27411\ncpu: 30282.193280070045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 235930.2745044826,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 235921.8571816451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181195.1957863467,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 181191.48755054292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188083.76834961088,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 188078.25625795455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187289.66545220074,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 187287.05529361303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99540.61191315753,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 99537.62646356692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 178099.34169408702,
            "unit": "ns/iter",
            "extra": "iterations: 4864\ncpu: 178095.64144736837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5043.023209999546,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5043.024000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27878.953095746103,
            "unit": "ns/iter",
            "extra": "iterations: 29912\ncpu: 27878.664081305124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21311.495477257304,
            "unit": "ns/iter",
            "extra": "iterations: 39025\ncpu: 21311.344010249824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21520.870634531653,
            "unit": "ns/iter",
            "extra": "iterations: 38627\ncpu: 21520.36399409743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20788.884856129862,
            "unit": "ns/iter",
            "extra": "iterations: 40419\ncpu: 20788.61426556815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47537.42502132986,
            "unit": "ns/iter",
            "extra": "iterations: 17585\ncpu: 47537.0827409724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 256207.47860492152,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 256198.44665885123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 197692.19475486787,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 197688.27822120942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199473.59761959157,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 199467.81872281883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 196659.97411077714,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 196657.33903647063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111102.15296512729,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 111098.89284805338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191376.51034786095,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 191372.96345222247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 803965.8834459406,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 803936.6554054063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 447280.35007608327,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 447270.87772704207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2171.02729396935,
            "unit": "ns/iter",
            "extra": "iterations: 371474\ncpu: 2170.9460150643254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11373.938736368784,
            "unit": "ns/iter",
            "extra": "iterations: 72996\ncpu: 11373.864321332709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8684.689790341348,
            "unit": "ns/iter",
            "extra": "iterations: 95155\ncpu: 8684.476906100565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8669.270575124909,
            "unit": "ns/iter",
            "extra": "iterations: 95127\ncpu: 8669.208531752303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7885.814165950852,
            "unit": "ns/iter",
            "extra": "iterations: 103657\ncpu: 7885.628563435168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29393.412789470545,
            "unit": "ns/iter",
            "extra": "iterations: 28414\ncpu: 29393.235728866093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 241355.44256479287,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 241349.79536152736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 183423.77803108064,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 183420.24870466345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184225.46115287536,
            "unit": "ns/iter",
            "extra": "iterations: 4788\ncpu: 184220.25898078582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 181553.53501746705,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 181551.57116451056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97566.61841665654,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 97564.38035853459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177269.93786212956,
            "unit": "ns/iter",
            "extra": "iterations: 5005\ncpu: 177268.73126873173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 193.89940433241168,
            "unit": "ns/iter",
            "extra": "iterations: 3610235\ncpu: 193.89427558040012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1534.6805862728818,
            "unit": "ns/iter",
            "extra": "iterations: 457125\ncpu: 1534.6710418375633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1189.9360407092363,
            "unit": "ns/iter",
            "extra": "iterations: 588171\ncpu: 1189.9032764281135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1055.7684867695166,
            "unit": "ns/iter",
            "extra": "iterations: 663772\ncpu: 1055.7679444146418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 811.5819111277997,
            "unit": "ns/iter",
            "extra": "iterations: 859346\ncpu: 811.5815980990163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9534.228647735708,
            "unit": "ns/iter",
            "extra": "iterations: 74512\ncpu: 9533.947552072179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10665.741018832256,
            "unit": "ns/iter",
            "extra": "iterations: 65526\ncpu: 10665.567866190544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2591.765215058998,
            "unit": "ns/iter",
            "extra": "iterations: 272181\ncpu: 2591.6595941671285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2567.149695798184,
            "unit": "ns/iter",
            "extra": "iterations: 273174\ncpu: 2567.1312057516425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2580.8826402470654,
            "unit": "ns/iter",
            "extra": "iterations: 273535\ncpu: 2580.8090372347333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5006.468774568198,
            "unit": "ns/iter",
            "extra": "iterations: 139918\ncpu: 5006.3801655255365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4988.352468691415,
            "unit": "ns/iter",
            "extra": "iterations: 147406\ncpu: 4988.2216463373325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1879.5270791413109,
            "unit": "ns/iter",
            "extra": "iterations: 368734\ncpu: 1879.5131449771407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9828.061734874706,
            "unit": "ns/iter",
            "extra": "iterations: 70495\ncpu: 9827.782112206578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7859.356435756677,
            "unit": "ns/iter",
            "extra": "iterations: 88187\ncpu: 7859.277444521325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7879.744245205735,
            "unit": "ns/iter",
            "extra": "iterations: 88448\ncpu: 7879.688630607907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7890.728791397581,
            "unit": "ns/iter",
            "extra": "iterations: 88714\ncpu: 7890.383704939535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18827.635338245353,
            "unit": "ns/iter",
            "extra": "iterations: 37059\ncpu: 18826.390350522255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51741.04803428643,
            "unit": "ns/iter",
            "extra": "iterations: 13532\ncpu: 51739.30682825871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41421.62971502607,
            "unit": "ns/iter",
            "extra": "iterations: 16914\ncpu: 41419.4868156559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42111.95387002079,
            "unit": "ns/iter",
            "extra": "iterations: 16757\ncpu: 42110.99838873365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41164.892762804295,
            "unit": "ns/iter",
            "extra": "iterations: 17037\ncpu: 41164.23079180571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24914.786414016722,
            "unit": "ns/iter",
            "extra": "iterations: 27970\ncpu: 24914.068644976487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40772.89145980351,
            "unit": "ns/iter",
            "extra": "iterations: 17201\ncpu: 40771.89698273319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1924.3896950428923,
            "unit": "ns/iter",
            "extra": "iterations: 363592\ncpu: 1924.3511958459121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11330.345774602336,
            "unit": "ns/iter",
            "extra": "iterations: 61864\ncpu: 11330.13222552702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8616.090646166016,
            "unit": "ns/iter",
            "extra": "iterations: 80908\ncpu: 8615.751223612111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9646.570740320967,
            "unit": "ns/iter",
            "extra": "iterations: 73063\ncpu: 9645.980865828034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9614.82850406125,
            "unit": "ns/iter",
            "extra": "iterations: 73372\ncpu: 9614.54778389587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19391.408093597056,
            "unit": "ns/iter",
            "extra": "iterations: 36325\ncpu: 19390.21885753598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52209.47871785429,
            "unit": "ns/iter",
            "extra": "iterations: 13415\ncpu: 52208.661945583335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40966.875970776135,
            "unit": "ns/iter",
            "extra": "iterations: 17383\ncpu: 40964.49979865334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42123.38091792101,
            "unit": "ns/iter",
            "extra": "iterations: 16581\ncpu: 42122.254387551926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41657.211608150654,
            "unit": "ns/iter",
            "extra": "iterations: 16833\ncpu: 41654.30998633625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25544.705473129252,
            "unit": "ns/iter",
            "extra": "iterations: 28174\ncpu: 25544.076098530957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41813.37085663958,
            "unit": "ns/iter",
            "extra": "iterations: 16985\ncpu: 41811.003826906555 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}