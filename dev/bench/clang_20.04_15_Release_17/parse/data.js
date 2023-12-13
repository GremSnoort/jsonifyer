window.BENCHMARK_DATA = {
  "lastUpdate": 1702493017882,
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
      }
    ]
  }
}