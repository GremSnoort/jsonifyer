window.BENCHMARK_DATA = {
  "lastUpdate": 1702491002517,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-13 22.04 Release c++-17": [
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
        "date": 1702491000434,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1428.3495778474207,
            "unit": "ns/iter",
            "extra": "iterations: 464998\ncpu: 1428.191088993931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16906.798708089267,
            "unit": "ns/iter",
            "extra": "iterations: 48765\ncpu: 16905.903824464265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35609.48501526059,
            "unit": "ns/iter",
            "extra": "iterations: 23257\ncpu: 35606.23898181193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52984.95117347812,
            "unit": "ns/iter",
            "extra": "iterations: 15893\ncpu: 52980.614106839465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58945.03490000033,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58941.429999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74798.88882303565,
            "unit": "ns/iter",
            "extra": "iterations: 11810\ncpu: 74793.76799322612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 89552.04815195194,
            "unit": "ns/iter",
            "extra": "iterations: 9740\ncpu: 89545.52361396307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103199.86966824616,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 103190.15402843607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120790.0118039147,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 120786.59908346065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1291.1087709815943,
            "unit": "ns/iter",
            "extra": "iterations: 540236\ncpu: 1291.003006093632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1042.9102520886538,
            "unit": "ns/iter",
            "extra": "iterations: 661553\ncpu: 1042.8880225771782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1037.4855996805736,
            "unit": "ns/iter",
            "extra": "iterations: 671374\ncpu: 1037.4266802110292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1036.2614435766889,
            "unit": "ns/iter",
            "extra": "iterations: 671097\ncpu: 1036.192234505594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2038.2807324720388,
            "unit": "ns/iter",
            "extra": "iterations: 343822\ncpu: 2038.2095968262622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5221.384510000462,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5221.253000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30294.377897880782,
            "unit": "ns/iter",
            "extra": "iterations: 28124\ncpu: 30293.14108946098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24176.909927658366,
            "unit": "ns/iter",
            "extra": "iterations: 34006\ncpu: 24175.31906134213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24264.15478014705,
            "unit": "ns/iter",
            "extra": "iterations: 33932\ncpu: 24263.426853707428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24329.34617439258,
            "unit": "ns/iter",
            "extra": "iterations: 33694\ncpu: 24327.0968124889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65468.37806231333,
            "unit": "ns/iter",
            "extra": "iterations: 13511\ncpu: 65464.917474650094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 605397.3749999386,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605387.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 601598.1916083343,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 601581.6083916101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 604795.5840395004,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 604739.1949152554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 600574.3709115763,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 600536.8128044532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 353024.70884022483,
            "unit": "ns/iter",
            "extra": "iterations: 2466\ncpu: 353010.462287105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 607480.3614794306,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 607413.3286810878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2553926.5698632197,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2553826.0273972554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1173859.8318584857,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1173771.0493046774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3406675.701107295,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3406643.54243542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8925.324714549424,
            "unit": "ns/iter",
            "extra": "iterations: 95025\ncpu: 8924.728229413333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49098.50470442033,
            "unit": "ns/iter",
            "extra": "iterations: 16899\ncpu: 49094.455293212624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39013.5160055971,
            "unit": "ns/iter",
            "extra": "iterations: 21430\ncpu: 39010.72328511448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38415.22837606707,
            "unit": "ns/iter",
            "extra": "iterations: 20475\ncpu: 38411.46764346767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38666.85720305395,
            "unit": "ns/iter",
            "extra": "iterations: 21359\ncpu: 38665.41036565375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79323.63768643426,
            "unit": "ns/iter",
            "extra": "iterations: 10996\ncpu: 79315.1236813388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 636129.707547188,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 636102.177068211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 511235.39399998204,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511161.7000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 513720.3819999741,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513719.6000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 510122.9869999315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510068.6000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 367184.52141061984,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 367142.149454238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 500955.05399997364,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500942.30000000546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2746334.1690960666,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2746021.282798821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1207130.8621133969,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1207049.8711340213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5768.534430000045,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5768.519000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30678.82756052278,
            "unit": "ns/iter",
            "extra": "iterations: 26850\ncpu: 30677.0800744881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24157.34524819401,
            "unit": "ns/iter",
            "extra": "iterations: 34187\ncpu: 24156.98657384395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23900.777809958177,
            "unit": "ns/iter",
            "extra": "iterations: 34529\ncpu: 23899.481595180816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23622.281902145925,
            "unit": "ns/iter",
            "extra": "iterations: 34214\ncpu: 23622.093295142397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64152.61283705153,
            "unit": "ns/iter",
            "extra": "iterations: 13648\ncpu: 64149.86811254394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 624653.1269999878,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624663.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 624640.2132195792,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 624628.5003553699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 615652.0126493701,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 615603.302881234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 616791.5595489953,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 616782.6638477799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 350315.9511128872,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 350308.3465818763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 606453.5418684604,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 606413.2871972325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 589.8733828928628,
            "unit": "ns/iter",
            "extra": "iterations: 1185914\ncpu: 589.8829088787271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3465.011592039401,
            "unit": "ns/iter",
            "extra": "iterations: 202294\ncpu: 3464.8832886788496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2781.7489336473673,
            "unit": "ns/iter",
            "extra": "iterations: 251324\ncpu: 2781.6933520077823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2664.9984621723893,
            "unit": "ns/iter",
            "extra": "iterations: 262058\ncpu: 2664.8383182349176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2138.9455841356335,
            "unit": "ns/iter",
            "extra": "iterations: 326063\ncpu: 2138.9513682938655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17496.922952128967,
            "unit": "ns/iter",
            "extra": "iterations: 40066\ncpu: 17496.872660110803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31571.355459227678,
            "unit": "ns/iter",
            "extra": "iterations: 22146\ncpu: 31569.83653932996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7981.6720239190945,
            "unit": "ns/iter",
            "extra": "iterations: 87296\ncpu: 7981.684155058621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7891.048302827856,
            "unit": "ns/iter",
            "extra": "iterations: 88235\ncpu: 7890.263500878447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7957.101503930157,
            "unit": "ns/iter",
            "extra": "iterations: 88036\ncpu: 7957.2470353037825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15508.785950338959,
            "unit": "ns/iter",
            "extra": "iterations: 44784\ncpu: 15507.978295820096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14801.222415587074,
            "unit": "ns/iter",
            "extra": "iterations: 47119\ncpu: 14800.547549820498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4539.295750329171,
            "unit": "ns/iter",
            "extra": "iterations: 154059\ncpu: 4538.839016221116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22513.677472420426,
            "unit": "ns/iter",
            "extra": "iterations: 31002\ncpu: 22512.973356557235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18298.114922316025,
            "unit": "ns/iter",
            "extra": "iterations: 38104\ncpu: 18296.745748477686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18109.626097314616,
            "unit": "ns/iter",
            "extra": "iterations: 38617\ncpu: 18109.75477121478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18794.01199731053,
            "unit": "ns/iter",
            "extra": "iterations: 37175\ncpu: 18794.009414929682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46681.846953739085,
            "unit": "ns/iter",
            "extra": "iterations: 15002\ncpu: 46681.64244767431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159331.65844274333,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 159314.14667270455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133736.9571894968,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 133733.42292186755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133392.21893605863,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 133390.7048204344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133332.32882196913,
            "unit": "ns/iter",
            "extra": "iterations: 5246\ncpu: 133324.22798322488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82384.03607519981,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 82383.04347826015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134354.15837016708,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 134338.7468768023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4462.239861186688,
            "unit": "ns/iter",
            "extra": "iterations: 157045\ncpu: 4462.094304180297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21958.526926970004,
            "unit": "ns/iter",
            "extra": "iterations: 31604\ncpu: 21956.533983040215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17794.716232961717,
            "unit": "ns/iter",
            "extra": "iterations: 39543\ncpu: 17794.246769339807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17662.182368520953,
            "unit": "ns/iter",
            "extra": "iterations: 39645\ncpu: 17660.411148946932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18196.488693305942,
            "unit": "ns/iter",
            "extra": "iterations: 38517\ncpu: 18194.797102578257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44228.33594342159,
            "unit": "ns/iter",
            "extra": "iterations: 15836\ncpu: 44222.051022985805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154082.72223479935,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 154075.02827414477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130310.52265132003,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 130302.87783141265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129322.64078388114,
            "unit": "ns/iter",
            "extra": "iterations: 5409\ncpu: 129314.60528748344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128969.48100331222,
            "unit": "ns/iter",
            "extra": "iterations: 5422\ncpu: 128966.37772039743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80805.00380359557,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 80797.94836330105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129794.04918336899,
            "unit": "ns/iter",
            "extra": "iterations: 5388\ncpu: 129787.65775798254 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}