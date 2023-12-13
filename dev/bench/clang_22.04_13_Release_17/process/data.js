window.BENCHMARK_DATA = {
  "lastUpdate": 1702493552688,
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
        "date": 1702493550839,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1461.5860437012043,
            "unit": "ns/iter",
            "extra": "iterations: 483237\ncpu: 1461.5681332348308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16928.485354012504,
            "unit": "ns/iter",
            "extra": "iterations: 48614\ncpu: 16928.096844530384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35897.495716884805,
            "unit": "ns/iter",
            "extra": "iterations: 23114\ncpu: 35896.824435407114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53402.48156579572,
            "unit": "ns/iter",
            "extra": "iterations: 15813\ncpu: 53402.0742427117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59262.95120000304,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59262.940000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74572.54922412313,
            "unit": "ns/iter",
            "extra": "iterations: 11793\ncpu: 74569.59213092511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88393.21064528466,
            "unit": "ns/iter",
            "extra": "iterations: 9732\ncpu: 88387.4332100288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103191.12252870789,
            "unit": "ns/iter",
            "extra": "iterations: 8447\ncpu: 103186.70533917368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120773.02814153823,
            "unit": "ns/iter",
            "extra": "iterations: 7178\ncpu: 120768.91891891904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1255.7449594077839,
            "unit": "ns/iter",
            "extra": "iterations: 557127\ncpu: 1255.670251127658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1037.9515750238918,
            "unit": "ns/iter",
            "extra": "iterations: 672339\ncpu: 1037.8869885578576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1042.9319160886926,
            "unit": "ns/iter",
            "extra": "iterations: 669468\ncpu: 1042.900332801567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1033.1932121176183,
            "unit": "ns/iter",
            "extra": "iterations: 672080\ncpu: 1033.1665873110358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2047.069792018415,
            "unit": "ns/iter",
            "extra": "iterations: 340655\ncpu: 2046.953956348797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5856.548589999875,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5856.059000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30965.848923034446,
            "unit": "ns/iter",
            "extra": "iterations: 26556\ncpu: 30963.816086760078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24560.305300228592,
            "unit": "ns/iter",
            "extra": "iterations: 33508\ncpu: 24558.857586248065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23995.286144139063,
            "unit": "ns/iter",
            "extra": "iterations: 34231\ncpu: 23994.46116093601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24278.302447809972,
            "unit": "ns/iter",
            "extra": "iterations: 33867\ncpu: 24276.679363392017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64062.15760511132,
            "unit": "ns/iter",
            "extra": "iterations: 13629\ncpu: 64060.81150487911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 600855.933000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600832.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 611242.7452498362,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 611237.2976776933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 609261.2023893083,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 609241.3914265622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 603241.2496522274,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 603217.1070931854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 351764.91616283933,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 351761.910519951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 609009.0307907462,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 608985.5143456955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2546916.2286501573,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2546784.0220385706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1181656.2230672035,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 1181623.5741444854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3396441.422793828,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3396337.4999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9131.296432075887,
            "unit": "ns/iter",
            "extra": "iterations: 92743\ncpu: 9131.22823285853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48734.18882477189,
            "unit": "ns/iter",
            "extra": "iterations: 16984\ncpu: 48733.08407913333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38925.9391754032,
            "unit": "ns/iter",
            "extra": "iterations: 21077\ncpu: 38925.94297101111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38650.58149107139,
            "unit": "ns/iter",
            "extra": "iterations: 21622\ncpu: 38649.80112848037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38665.61680270175,
            "unit": "ns/iter",
            "extra": "iterations: 21318\ncpu: 38665.020170747666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78435.43712963478,
            "unit": "ns/iter",
            "extra": "iterations: 10800\ncpu: 78433.47222222236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 643156.5100000398,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643159.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 521870.2480000275,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521851.30000000156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 515655.8839998979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515642.39999999723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 511107.43799995363,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511094.3000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 368536.60503141704,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 368527.67295597645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 502248.26499993465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502249.3999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2695549.307246319,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2695473.0434782673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1213062.015544056,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 1213026.8134715036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5705.911740000147,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5705.853999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30826.399450904213,
            "unit": "ns/iter",
            "extra": "iterations: 26589\ncpu: 30825.93177629838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23984.448224678697,
            "unit": "ns/iter",
            "extra": "iterations: 34360\ncpu: 23984.21129220025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23766.490561143186,
            "unit": "ns/iter",
            "extra": "iterations: 34697\ncpu: 23765.76361068674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23861.674228119187,
            "unit": "ns/iter",
            "extra": "iterations: 34429\ncpu: 23861.253594353486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64360.06372621537,
            "unit": "ns/iter",
            "extra": "iterations: 13558\ncpu: 64359.14589172446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 624002.7189999182,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624003.3000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 502160.6799999745,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502118.29999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 497473.8716623642,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 497462.4461670957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 615354.1234832607,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 615344.6109921491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 353682.62918181357,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 353682.5473599364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 608593.9629888242,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 608577.3044692747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 609.193662373555,
            "unit": "ns/iter",
            "extra": "iterations: 1157184\ncpu: 609.1818587190954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3496.19369873055,
            "unit": "ns/iter",
            "extra": "iterations: 207482\ncpu: 3496.140870051362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2747.5880643006626,
            "unit": "ns/iter",
            "extra": "iterations: 251816\ncpu: 2747.5108809607186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2717.735643991919,
            "unit": "ns/iter",
            "extra": "iterations: 256983\ncpu: 2717.673931738685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2188.685759517404,
            "unit": "ns/iter",
            "extra": "iterations: 320888\ncpu: 2188.653050285451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17528.360098054585,
            "unit": "ns/iter",
            "extra": "iterations: 39978\ncpu: 17527.76276952317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33121.84036272752,
            "unit": "ns/iter",
            "extra": "iterations: 21173\ncpu: 33121.25348320958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8001.594575792356,
            "unit": "ns/iter",
            "extra": "iterations: 87681\ncpu: 8001.17585337754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7908.532558165635,
            "unit": "ns/iter",
            "extra": "iterations: 88411\ncpu: 7908.366605965371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7878.711243323683,
            "unit": "ns/iter",
            "extra": "iterations: 88746\ncpu: 7878.516214815311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15669.54914410163,
            "unit": "ns/iter",
            "extra": "iterations: 44573\ncpu: 15669.434410966176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13673.209722765041,
            "unit": "ns/iter",
            "extra": "iterations: 51220\ncpu: 13673.227254978667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4508.034362585679,
            "unit": "ns/iter",
            "extra": "iterations: 153801\ncpu: 4508.035058289626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22580.99645207162,
            "unit": "ns/iter",
            "extra": "iterations: 31004\ncpu: 22580.312217778344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18153.461836328428,
            "unit": "ns/iter",
            "extra": "iterations: 38479\ncpu: 18153.335585644098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18292.30805835908,
            "unit": "ns/iter",
            "extra": "iterations: 38246\ncpu: 18291.834440202947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18648.147403149185,
            "unit": "ns/iter",
            "extra": "iterations: 37584\ncpu: 18647.238186462382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45762.929933394254,
            "unit": "ns/iter",
            "extra": "iterations: 15314\ncpu: 45762.60284706856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161624.2453522898,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 161621.6433325702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135868.18543687506,
            "unit": "ns/iter",
            "extra": "iterations: 5150\ncpu: 135865.98058252304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134779.1183649747,
            "unit": "ns/iter",
            "extra": "iterations: 5162\ncpu: 134772.29755908484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135251.007910487,
            "unit": "ns/iter",
            "extra": "iterations: 5183\ncpu: 135246.82616245453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83400.34656179138,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83398.15278274378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135139.1502711024,
            "unit": "ns/iter",
            "extra": "iterations: 5164\ncpu: 135135.12780790124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4508.218455245643,
            "unit": "ns/iter",
            "extra": "iterations: 155002\ncpu: 4508.068282989913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22377.071177559974,
            "unit": "ns/iter",
            "extra": "iterations: 31302\ncpu: 22376.630886205363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17967.474623407987,
            "unit": "ns/iter",
            "extra": "iterations: 38835\ncpu: 17967.022016222432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17702.822750183015,
            "unit": "ns/iter",
            "extra": "iterations: 39481\ncpu: 17702.56579114003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18140.023942309388,
            "unit": "ns/iter",
            "extra": "iterations: 38551\ncpu: 18140.058623641362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44199.60968028508,
            "unit": "ns/iter",
            "extra": "iterations: 15764\ncpu: 44198.49657447355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157604.97338146556,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 157599.27814121314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131831.88704820187,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 131824.20933734925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131262.63680659968,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 131256.59670164908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130893.31200897333,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 130884.82977927547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81915.76653013639,
            "unit": "ns/iter",
            "extra": "iterations: 8545\ncpu: 81910.09947337606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131112.22074517654,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 131107.26455719973 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}