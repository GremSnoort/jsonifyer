window.BENCHMARK_DATA = {
  "lastUpdate": 1705779067655,
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
        "date": 1702504635529,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1502.5158560350499,
            "unit": "ns/iter",
            "extra": "iterations: 460834\ncpu: 1499.0356614312311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16821.856639181282,
            "unit": "ns/iter",
            "extra": "iterations: 36872\ncpu: 16821.49598611413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35489.78678717423,
            "unit": "ns/iter",
            "extra": "iterations: 23235\ncpu: 35488.59048848719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53868.17881382257,
            "unit": "ns/iter",
            "extra": "iterations: 15765\ncpu: 53867.656200444006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59843.206800007916,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59841.889999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 75486.8815283371,
            "unit": "ns/iter",
            "extra": "iterations: 11699\ncpu: 75486.69971792464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 89993.20583047172,
            "unit": "ns/iter",
            "extra": "iterations: 9639\ncpu: 89987.38458346303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103756.59509201757,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 103753.80728978707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 122405.05978109095,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 122402.70839180466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1358.70701303534,
            "unit": "ns/iter",
            "extra": "iterations: 515982\ncpu: 1358.7144512793056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1080.6045983295533,
            "unit": "ns/iter",
            "extra": "iterations: 647496\ncpu: 1080.5742429296838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1082.5043855179363,
            "unit": "ns/iter",
            "extra": "iterations: 647586\ncpu: 1082.4945258235969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1058.324345802959,
            "unit": "ns/iter",
            "extra": "iterations: 643002\ncpu: 1058.3248574654513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2064.360327532994,
            "unit": "ns/iter",
            "extra": "iterations: 338653\ncpu: 2064.331631493002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5931.661403055891,
            "unit": "ns/iter",
            "extra": "iterations: 139638\ncpu: 5931.559460891736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30872.317767265722,
            "unit": "ns/iter",
            "extra": "iterations: 26425\ncpu: 30871.504257332057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24538.142338613146,
            "unit": "ns/iter",
            "extra": "iterations: 33336\ncpu: 24538.62790976724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24260.066597785783,
            "unit": "ns/iter",
            "extra": "iterations: 33875\ncpu: 24260.360147601445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23902.749506731387,
            "unit": "ns/iter",
            "extra": "iterations: 33957\ncpu: 23901.584356686442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65560.55315712559,
            "unit": "ns/iter",
            "extra": "iterations: 13620\ncpu: 65558.20851688705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 601261.0569999878,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601223.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 605106.797902122,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 605091.8881118885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 602597.698033707,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 602574.7191011225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 607139.7291960467,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 607132.6516220045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 357781.77360033034,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 357775.64364528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 613567.6802529712,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 613535.5586788482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2561563.082872956,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2561482.3204419883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1147477.4236452552,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 1147433.6206896543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3437705.8814816,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3437655.1851851884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8916.461404685102,
            "unit": "ns/iter",
            "extra": "iterations: 95452\ncpu: 8916.14528768386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49131.22875661251,
            "unit": "ns/iter",
            "extra": "iterations: 16817\ncpu: 49129.92210263422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38778.74527730054,
            "unit": "ns/iter",
            "extra": "iterations: 21439\ncpu: 38777.904753020426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38508.83910845707,
            "unit": "ns/iter",
            "extra": "iterations: 21760\ncpu: 38507.04503676456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38556.79329582581,
            "unit": "ns/iter",
            "extra": "iterations: 21509\ncpu: 38555.80919615058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79018.754419368,
            "unit": "ns/iter",
            "extra": "iterations: 11031\ncpu: 79014.33233614346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 647416.8549999604,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647393.2000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 514773.3039999594,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514756.09999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 514981.1899999577,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514942.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 510315.01499994646,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510308.6000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 372561.0633503491,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 372555.3571428576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 500167.3070000834,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500141.80000000156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2735042.1828909568,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2734838.9380531083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1187314.8540609626,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 1187221.8274111704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5648.322420000795,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5647.970999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30341.846714782125,
            "unit": "ns/iter",
            "extra": "iterations: 26878\ncpu: 30340.680110127174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23966.8787326589,
            "unit": "ns/iter",
            "extra": "iterations: 34024\ncpu: 23966.579473313064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24018.831983331223,
            "unit": "ns/iter",
            "extra": "iterations: 34074\ncpu: 24018.33069202336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23691.1624407319,
            "unit": "ns/iter",
            "extra": "iterations: 33957\ncpu: 23691.2536443149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64222.76293481676,
            "unit": "ns/iter",
            "extra": "iterations: 13684\ncpu: 64219.372990353906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 624532.6539999496,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624541.0999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 621703.6678495146,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 621663.6621717523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 622927.3253521267,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 622925.5633802852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 618254.0633803237,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 618254.8591549324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 354501.2027518996,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 354482.35532173153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 611748.1792911415,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 611745.3092425307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 599.8777686031473,
            "unit": "ns/iter",
            "extra": "iterations: 1168685\ncpu: 599.8527404732673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3439.542621758556,
            "unit": "ns/iter",
            "extra": "iterations: 203558\ncpu: 3439.531730514138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2725.851576149387,
            "unit": "ns/iter",
            "extra": "iterations: 256987\ncpu: 2725.8176483635425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2681.316859306583,
            "unit": "ns/iter",
            "extra": "iterations: 260936\ncpu: 2681.243676610351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2172.7294284195395,
            "unit": "ns/iter",
            "extra": "iterations: 322107\ncpu: 2172.634559323448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17579.125103520477,
            "unit": "ns/iter",
            "extra": "iterations: 39847\ncpu: 17578.512811504028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33379.95340979203,
            "unit": "ns/iter",
            "extra": "iterations: 21013\ncpu: 33377.71379622134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7968.183797382012,
            "unit": "ns/iter",
            "extra": "iterations: 87455\ncpu: 7967.917214567549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7930.558771880127,
            "unit": "ns/iter",
            "extra": "iterations: 88265\ncpu: 7930.301931683076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7930.637795723135,
            "unit": "ns/iter",
            "extra": "iterations: 88047\ncpu: 7930.4644110532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15730.442892285124,
            "unit": "ns/iter",
            "extra": "iterations: 44311\ncpu: 15730.401029089746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14953.510698727492,
            "unit": "ns/iter",
            "extra": "iterations: 46828\ncpu: 14952.643717434208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4552.645611428824,
            "unit": "ns/iter",
            "extra": "iterations: 153501\ncpu: 4552.655031563349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22818.892976913237,
            "unit": "ns/iter",
            "extra": "iterations: 30713\ncpu: 22817.865399016595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18390.23816276805,
            "unit": "ns/iter",
            "extra": "iterations: 38079\ncpu: 18389.613697838682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18351.784446831665,
            "unit": "ns/iter",
            "extra": "iterations: 38153\ncpu: 18351.440253715427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18880.54276697529,
            "unit": "ns/iter",
            "extra": "iterations: 37073\ncpu: 18880.568068405668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46548.857645578435,
            "unit": "ns/iter",
            "extra": "iterations: 15061\ncpu: 46548.3234844963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161141.98649267852,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 161141.23168498153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134083.26366436653,
            "unit": "ns/iter",
            "extra": "iterations: 5196\ncpu: 134078.40646651262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134931.05726956838,
            "unit": "ns/iter",
            "extra": "iterations: 5186\ncpu: 134931.00655611377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134159.4606827888,
            "unit": "ns/iter",
            "extra": "iterations: 5214\ncpu: 134157.9209819731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84330.1403320246,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 84331.30299773146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134797.45057915946,
            "unit": "ns/iter",
            "extra": "iterations: 5180\ncpu: 134792.97297297211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4512.14338601708,
            "unit": "ns/iter",
            "extra": "iterations: 154506\ncpu: 4512.204704024392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22567.47800832337,
            "unit": "ns/iter",
            "extra": "iterations: 30989\ncpu: 22567.201264965144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17993.870855236844,
            "unit": "ns/iter",
            "extra": "iterations: 38422\ncpu: 17993.626047577054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17795.529190061654,
            "unit": "ns/iter",
            "extra": "iterations: 39534\ncpu: 17795.070066272194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18394.77135882681,
            "unit": "ns/iter",
            "extra": "iterations: 38099\ncpu: 18394.411926822122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44635.07507966636,
            "unit": "ns/iter",
            "extra": "iterations: 15690\ncpu: 44634.83110261337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157526.34846431605,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 157524.29990966522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 132703.1918637741,
            "unit": "ns/iter",
            "extra": "iterations: 5285\ncpu: 132702.59224219364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 132330.31473801789,
            "unit": "ns/iter",
            "extra": "iterations: 5306\ncpu: 132324.29325292134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 132164.874811744,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 132163.704819277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82149.96822408107,
            "unit": "ns/iter",
            "extra": "iterations: 8497\ncpu: 82148.92314934763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 132785.47328533544,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 132785.37324744478 ns\nthreads: 1"
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
        "date": 1705576291527,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1425.3400641337753,
            "unit": "ns/iter",
            "extra": "iterations: 494592\ncpu: 1425.269312888199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16988.560183932186,
            "unit": "ns/iter",
            "extra": "iterations: 48061\ncpu: 16988.185847152577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35943.87820345869,
            "unit": "ns/iter",
            "extra": "iterations: 23022\ncpu: 35942.1336113283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53617.30188083561,
            "unit": "ns/iter",
            "extra": "iterations: 15844\ncpu: 53616.78237818732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59653.65969999538,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59650.760000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74657.14463967324,
            "unit": "ns/iter",
            "extra": "iterations: 11781\ncpu: 74651.93107546051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87637.31818182401,
            "unit": "ns/iter",
            "extra": "iterations: 9922\ncpu: 87628.91554122158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102839.0020004684,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 102834.0668392563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120145.42065909927,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 120138.7704237053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1266.7962853746933,
            "unit": "ns/iter",
            "extra": "iterations: 551065\ncpu: 1266.7727037645311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1062.9504687353187,
            "unit": "ns/iter",
            "extra": "iterations: 653567\ncpu: 1062.8881201162237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1049.7434389622395,
            "unit": "ns/iter",
            "extra": "iterations: 667463\ncpu: 1049.7074744218028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1029.0806846037508,
            "unit": "ns/iter",
            "extra": "iterations: 672681\ncpu: 1029.0697968279187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2005.0392267600785,
            "unit": "ns/iter",
            "extra": "iterations: 348818\ncpu: 2005.0008887156025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5942.793274772228,
            "unit": "ns/iter",
            "extra": "iterations: 137066\ncpu: 5942.748019202425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32048.396964521347,
            "unit": "ns/iter",
            "extra": "iterations: 26355\ncpu: 32048.040220072133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24940.004727492593,
            "unit": "ns/iter",
            "extra": "iterations: 33210\ncpu: 24939.602529358584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24313.909873657907,
            "unit": "ns/iter",
            "extra": "iterations: 33797\ncpu: 24313.326626623617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23947.083092015695,
            "unit": "ns/iter",
            "extra": "iterations: 33842\ncpu: 23946.421606288073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65118.26377344288,
            "unit": "ns/iter",
            "extra": "iterations: 13595\ncpu: 65116.92534019855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 611897.386999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611868.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 614915.1900420613,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 614860.3085554012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 605201.4808362784,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 605156.6550522664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 611921.2542134789,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 611872.3314606737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 355776.20382427576,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 355756.42799023533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 607405.5668299692,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 607358.5024492652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2554691.361644024,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2554592.876712321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1140212.5735476227,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1140127.1940667485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3384328.1318679694,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3384229.670329677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9022.52759857377,
            "unit": "ns/iter",
            "extra": "iterations: 92849\ncpu: 9022.272722377196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49301.23957212552,
            "unit": "ns/iter",
            "extra": "iterations: 16734\ncpu: 49300.49002031779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38722.871656497,
            "unit": "ns/iter",
            "extra": "iterations: 21310\ncpu: 38721.478179258505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38363.788874488826,
            "unit": "ns/iter",
            "extra": "iterations: 21608\ncpu: 38363.51351351362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38596.45557875377,
            "unit": "ns/iter",
            "extra": "iterations: 21555\ncpu: 38595.8246346555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79053.45334538685,
            "unit": "ns/iter",
            "extra": "iterations: 11060\ncpu: 79052.55877034343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 644547.598000031,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644520.5000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 513526.46400005143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513527.7000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 514609.33400005614,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514599.59999999683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 510472.4669999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510459.50000000314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 368378.5324347226,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 368371.7775905635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 501922.15699996724,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501908.4000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2691062.505813888,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2690981.9767441913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1169450.169576172,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 1169403.86533666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5624.368759999925,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5624.210000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30436.958909710844,
            "unit": "ns/iter",
            "extra": "iterations: 26892\ncpu: 30436.698646437635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24074.765817584972,
            "unit": "ns/iter",
            "extra": "iterations: 34076\ncpu: 24074.465899753406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23703.19422902567,
            "unit": "ns/iter",
            "extra": "iterations: 34171\ncpu: 23702.979134353584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23537.388772604143,
            "unit": "ns/iter",
            "extra": "iterations: 34398\ncpu: 23537.414965986238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64386.97536872802,
            "unit": "ns/iter",
            "extra": "iterations: 13560\ncpu: 64384.92625368715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 612154.5800000377,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612096.0999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 650769.6155988767,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 650724.4428969349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 500170.79500003095,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500163.6000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 614927.3231198086,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 614907.5905292499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 349587.3675417441,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 349567.7804295937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 606993.3634483371,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 606966.137931036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 607.95987491674,
            "unit": "ns/iter",
            "extra": "iterations: 1149954\ncpu: 607.954666012727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3495.6626773074054,
            "unit": "ns/iter",
            "extra": "iterations: 199865\ncpu: 3495.613539138933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2823.481904335027,
            "unit": "ns/iter",
            "extra": "iterations: 249977\ncpu: 2823.4481572304576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2576.0691628722266,
            "unit": "ns/iter",
            "extra": "iterations: 270998\ncpu: 2575.795762330361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2175.4087082528076,
            "unit": "ns/iter",
            "extra": "iterations: 322269\ncpu: 2175.2864842724366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17967.811482786114,
            "unit": "ns/iter",
            "extra": "iterations: 38893\ncpu: 17965.777903478785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32537.850980754883,
            "unit": "ns/iter",
            "extra": "iterations: 21514\ncpu: 32535.01440922184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7767.713385476773,
            "unit": "ns/iter",
            "extra": "iterations: 90135\ncpu: 7767.135962722562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7775.5851259434185,
            "unit": "ns/iter",
            "extra": "iterations: 90278\ncpu: 7775.503444914587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7716.4179020645215,
            "unit": "ns/iter",
            "extra": "iterations: 90794\ncpu: 7715.883208141482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15583.392693455999,
            "unit": "ns/iter",
            "extra": "iterations: 44946\ncpu: 15581.49112268072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14785.464613038941,
            "unit": "ns/iter",
            "extra": "iterations: 45935\ncpu: 14785.181234352889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4633.193285133687,
            "unit": "ns/iter",
            "extra": "iterations: 151455\ncpu: 4632.797200488596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22969.700285443512,
            "unit": "ns/iter",
            "extra": "iterations: 30479\ncpu: 22968.44384658317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18636.26564373176,
            "unit": "ns/iter",
            "extra": "iterations: 37539\ncpu: 18635.640267455023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18324.722106648875,
            "unit": "ns/iter",
            "extra": "iterations: 37975\ncpu: 18324.31073074388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18743.221710188,
            "unit": "ns/iter",
            "extra": "iterations: 37107\ncpu: 18742.619990837393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 47429.83903230511,
            "unit": "ns/iter",
            "extra": "iterations: 14798\ncpu: 47426.88876875244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159488.27274795703,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 159472.11101000887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133544.56102744053,
            "unit": "ns/iter",
            "extra": "iterations: 5178\ncpu: 133538.5863267664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132572.86845102647,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 132561.9400151876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131531.0476369141,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131529.83870967687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82242.6642378603,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 82237.48971677023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132585.23101625036,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132570.58934643128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4457.3863440368805,
            "unit": "ns/iter",
            "extra": "iterations: 157704\ncpu: 4457.333358697288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22244.85538227066,
            "unit": "ns/iter",
            "extra": "iterations: 31483\ncpu: 22243.19791633607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17955.58099756238,
            "unit": "ns/iter",
            "extra": "iterations: 38995\ncpu: 17954.542890114186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17786.860840188507,
            "unit": "ns/iter",
            "extra": "iterations: 39372\ncpu: 17786.040841206905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18298.144961218914,
            "unit": "ns/iter",
            "extra": "iterations: 38293\ncpu: 18297.6653696497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44255.595335904894,
            "unit": "ns/iter",
            "extra": "iterations: 15823\ncpu: 44252.61960437359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155898.6829105613,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 155896.99599465958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130266.12858740536,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 130261.44241520765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130212.39007618248,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 130210.92733692635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130582.25733635841,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 130580.02257336224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80816.74919018704,
            "unit": "ns/iter",
            "extra": "iterations: 8644\ncpu: 80814.57658491444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130473.88360475686,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 130472.33530717986 ns\nthreads: 1"
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
        "date": 1705774129140,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1538.8700703005518,
            "unit": "ns/iter",
            "extra": "iterations: 427308\ncpu: 1538.7535454519927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18143.38099001345,
            "unit": "ns/iter",
            "extra": "iterations: 45555\ncpu: 18142.526616178253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37889.800887001154,
            "unit": "ns/iter",
            "extra": "iterations: 21646\ncpu: 37888.20567310356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56618.35630794339,
            "unit": "ns/iter",
            "extra": "iterations: 14886\ncpu: 56616.552465403765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62853.47988547189,
            "unit": "ns/iter",
            "extra": "iterations: 13970\ncpu: 62853.18539727985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 80277.1760988498,
            "unit": "ns/iter",
            "extra": "iterations: 10602\ncpu: 80271.75061309185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 95221.63610283134,
            "unit": "ns/iter",
            "extra": "iterations: 9063\ncpu: 95217.0694030674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 110299.60717547066,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 110293.39856490542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 128144.83081524978,
            "unit": "ns/iter",
            "extra": "iterations: 6685\ncpu: 128140.02991772626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1345.967196923961,
            "unit": "ns/iter",
            "extra": "iterations: 530560\ncpu: 1345.8979191797375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1097.7781328815954,
            "unit": "ns/iter",
            "extra": "iterations: 635182\ncpu: 1097.7256912192097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1083.9178757516513,
            "unit": "ns/iter",
            "extra": "iterations: 637948\ncpu: 1083.846959313298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1074.2286693456563,
            "unit": "ns/iter",
            "extra": "iterations: 634064\ncpu: 1074.1595485629227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2128.459303709032,
            "unit": "ns/iter",
            "extra": "iterations: 327794\ncpu: 2128.4047297998127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5819.639690000713,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5819.507999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31468.40964497773,
            "unit": "ns/iter",
            "extra": "iterations: 26252\ncpu: 31468.09385951545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25181.880757746458,
            "unit": "ns/iter",
            "extra": "iterations: 33151\ncpu: 25180.63708485417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23660.22311774434,
            "unit": "ns/iter",
            "extra": "iterations: 35237\ncpu: 23660.104435678364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24164.184012675752,
            "unit": "ns/iter",
            "extra": "iterations: 34715\ncpu: 24163.102405300346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 70394.50695302893,
            "unit": "ns/iter",
            "extra": "iterations: 12944\ncpu: 70391.25463535212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 648117.2049999486,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648067.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 511707.47000003303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511693.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 522601.44899992156,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522577.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 519249.2169999241,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519252.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 373561.31373391196,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 373555.36480686604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 632789.7622776006,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 632734.3772241989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2677062.864788727,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2676978.591549293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1205204.6803714212,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1205116.7108753351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3516253.1007752605,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3515998.8372093034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9423.01097816279,
            "unit": "ns/iter",
            "extra": "iterations: 84076\ncpu: 9422.503449260208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51769.898588338925,
            "unit": "ns/iter",
            "extra": "iterations: 15797\ncpu: 51769.58916249929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 41543.81815068578,
            "unit": "ns/iter",
            "extra": "iterations: 20440\ncpu: 41543.2583170255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 41066.525832149026,
            "unit": "ns/iter",
            "extra": "iterations: 20459\ncpu: 41064.40686250543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 41699.15057819088,
            "unit": "ns/iter",
            "extra": "iterations: 20149\ncpu: 41698.10908729984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84454.04085222764,
            "unit": "ns/iter",
            "extra": "iterations: 10232\ncpu: 84450.72322126712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 669535.245241532,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 669509.4436310375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 546194.1410000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546161.099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 530673.4659999392,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530655.1999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 544611.8389999128,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544582.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 399005.8502887554,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 398992.0035539757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 539160.8090000091,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539163.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2843042.981927702,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2842859.939759035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1218871.6349008996,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1218866.4603960442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 6080.694059999132,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 6080.602999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32937.69226176345,
            "unit": "ns/iter",
            "extra": "iterations: 25122\ncpu: 32936.58546294105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 26415.30952601968,
            "unit": "ns/iter",
            "extra": "iterations: 32343\ncpu: 26414.188541569933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 26062.588148551313,
            "unit": "ns/iter",
            "extra": "iterations: 33228\ncpu: 26062.3450102324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 26213.31079550871,
            "unit": "ns/iter",
            "extra": "iterations: 32671\ncpu: 26212.356524134688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68936.0589225581,
            "unit": "ns/iter",
            "extra": "iterations: 13068\ncpu: 68933.12672176326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 652342.822000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652296.800000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 517819.87300000765,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517797.6999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 532495.3150000056,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532479.1000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 521297.6550000121,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521277.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 377493.7296827538,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 377481.6166883987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 513533.2619998962,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513495.600000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 643.0138029980768,
            "unit": "ns/iter",
            "extra": "iterations: 1091502\ncpu: 642.9826972373822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3612.3512446022455,
            "unit": "ns/iter",
            "extra": "iterations: 195203\ncpu: 3612.312823061144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2943.216829838138,
            "unit": "ns/iter",
            "extra": "iterations: 240442\ncpu: 2943.183387261812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2690.911264145785,
            "unit": "ns/iter",
            "extra": "iterations: 258475\ncpu: 2690.7561659735034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2272.07516817138,
            "unit": "ns/iter",
            "extra": "iterations: 309506\ncpu: 2272.0467454588984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18981.009295616594,
            "unit": "ns/iter",
            "extra": "iterations: 37437\ncpu: 18979.808745358852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35336.165246670666,
            "unit": "ns/iter",
            "extra": "iterations: 19601\ncpu: 35336.68690372918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8478.239120807326,
            "unit": "ns/iter",
            "extra": "iterations: 85806\ncpu: 8477.770785259781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8291.626855114935,
            "unit": "ns/iter",
            "extra": "iterations: 86248\ncpu: 8291.27516000368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8217.95601523257,
            "unit": "ns/iter",
            "extra": "iterations: 84552\ncpu: 8217.589175891715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16496.849024922114,
            "unit": "ns/iter",
            "extra": "iterations: 41689\ncpu: 16496.56024370924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15448.196332423464,
            "unit": "ns/iter",
            "extra": "iterations: 44389\ncpu: 15447.113023496782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4900.978685575268,
            "unit": "ns/iter",
            "extra": "iterations: 142298\ncpu: 4900.77513387402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 24407.325651867828,
            "unit": "ns/iter",
            "extra": "iterations: 28380\ncpu: 24407.047216349605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 19833.95065734159,
            "unit": "ns/iter",
            "extra": "iterations: 35750\ncpu: 19833.83216783203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 19855.42598196047,
            "unit": "ns/iter",
            "extra": "iterations: 35032\ncpu: 19854.7328157112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20105.805638784972,
            "unit": "ns/iter",
            "extra": "iterations: 35043\ncpu: 20104.33467454272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50574.38789932733,
            "unit": "ns/iter",
            "extra": "iterations: 13867\ncpu: 50571.37809187257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 173375.1243484768,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 173368.1310498878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 146033.03586497478,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 146028.98734177335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 146022.90092880308,
            "unit": "ns/iter",
            "extra": "iterations: 4845\ncpu: 146022.18782249658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 142978.85611510172,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 142967.15313463702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 89601.19461963366,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 89594.889947226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 144060.54778796775,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 144056.61519198638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4827.6847740325475,
            "unit": "ns/iter",
            "extra": "iterations: 144490\ncpu: 4827.437192885306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 24111.194120661443,
            "unit": "ns/iter",
            "extra": "iterations: 29255\ncpu: 24109.970945137666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 19580.485862925092,
            "unit": "ns/iter",
            "extra": "iterations: 35368\ncpu: 19580.1430671793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19202.96239823819,
            "unit": "ns/iter",
            "extra": "iterations: 36727\ncpu: 19201.908677539795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 19759.64692706144,
            "unit": "ns/iter",
            "extra": "iterations: 35715\ncpu: 19758.63922721542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48096.17891352344,
            "unit": "ns/iter",
            "extra": "iterations: 14616\ncpu: 48094.51286261592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 167752.26500733205,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 167743.28940946676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 142723.9878725622,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 142721.1716341214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 141347.86665336488,
            "unit": "ns/iter",
            "extra": "iterations: 5017\ncpu: 141341.9174805651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 140111.60778441923,
            "unit": "ns/iter",
            "extra": "iterations: 5010\ncpu: 140100.37924151562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89321.0029258368,
            "unit": "ns/iter",
            "extra": "iterations: 7861\ncpu: 89316.94440910728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 140405.31996709786,
            "unit": "ns/iter",
            "extra": "iterations: 4863\ncpu: 140399.87661937342 ns\nthreads: 1"
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
        "date": 1705775542827,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1462.3807413229256,
            "unit": "ns/iter",
            "extra": "iterations: 491176\ncpu: 1462.1895206606189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16871.16800809045,
            "unit": "ns/iter",
            "extra": "iterations: 48456\ncpu: 16871.021132573886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35453.83424330315,
            "unit": "ns/iter",
            "extra": "iterations: 23444\ncpu: 35451.659273161575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52965.13047048307,
            "unit": "ns/iter",
            "extra": "iterations: 15835\ncpu: 52964.09851594567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59503.16419999808,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59498.97000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 75002.34019657115,
            "unit": "ns/iter",
            "extra": "iterations: 11802\ncpu: 75000.63548551092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88447.86315464234,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 88442.79246836095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103016.62084520863,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 103014.63675213675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120451.06667597959,
            "unit": "ns/iter",
            "extra": "iterations: 7154\ncpu: 120446.65921162975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1272.2604451683799,
            "unit": "ns/iter",
            "extra": "iterations: 550039\ncpu: 1272.2534220300759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1061.1907405299248,
            "unit": "ns/iter",
            "extra": "iterations: 658785\ncpu: 1061.1697291225514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1048.6150935352273,
            "unit": "ns/iter",
            "extra": "iterations: 666219\ncpu: 1048.5696144961346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1059.9492157062289,
            "unit": "ns/iter",
            "extra": "iterations: 660913\ncpu: 1059.9044049670688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2035.4614742754707,
            "unit": "ns/iter",
            "extra": "iterations: 343952\ncpu: 2035.3505721728582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5845.4778800000895,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5845.493000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31192.766087845594,
            "unit": "ns/iter",
            "extra": "iterations: 26433\ncpu: 31191.86244467144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24759.6039583089,
            "unit": "ns/iter",
            "extra": "iterations: 33196\ncpu: 24758.687793710083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24341.59142292136,
            "unit": "ns/iter",
            "extra": "iterations: 33881\ncpu: 24340.243794457096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24468.82707959222,
            "unit": "ns/iter",
            "extra": "iterations: 33420\ncpu: 24468.488928785155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66046.84986810999,
            "unit": "ns/iter",
            "extra": "iterations: 13648\ncpu: 66043.06858147722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 598423.9259998958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598418.4999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 607483.0324809467,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 607446.6482377335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 610334.6717984612,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 610319.8740377907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 603327.8825573096,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 603315.913829048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 352658.093749994,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 352639.813311688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 598555.0110497355,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 598537.2237569059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2540797.117486274,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2540679.5081967195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1169378.0276729178,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1169330.8176100648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3412947.878676592,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3412773.5294117625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8979.360926797086,
            "unit": "ns/iter",
            "extra": "iterations: 93138\ncpu: 8978.652107625248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49300.583443069416,
            "unit": "ns/iter",
            "extra": "iterations: 16706\ncpu: 49300.664431940684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38835.57810457716,
            "unit": "ns/iter",
            "extra": "iterations: 21420\ncpu: 38833.314659197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38485.04482410345,
            "unit": "ns/iter",
            "extra": "iterations: 21774\ncpu: 38483.49407550283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38757.34355026885,
            "unit": "ns/iter",
            "extra": "iterations: 21435\ncpu: 38755.3580592488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79199.9786208164,
            "unit": "ns/iter",
            "extra": "iterations: 10992\ncpu: 79195.31477438168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 639950.7009999752,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639900.0000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 512358.8440000049,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512359.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 511587.423999913,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511567.9999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 512329.9299999644,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512317.2999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 369786.1720067566,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 369773.6087689706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 503017.8130000422,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503009.20000000106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2704131.376093273,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2704019.241982488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1168936.5181475868,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 1168897.4968710882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5918.083952551183,
            "unit": "ns/iter",
            "extra": "iterations: 104702\ncpu: 5917.76088326871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32288.112850669157,
            "unit": "ns/iter",
            "extra": "iterations: 26699\ncpu: 32226.25566500625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24867.96078960259,
            "unit": "ns/iter",
            "extra": "iterations: 33384\ncpu: 24867.038102085022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24503.398183947396,
            "unit": "ns/iter",
            "extra": "iterations: 34140\ncpu: 24502.053309900264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24438.250954313222,
            "unit": "ns/iter",
            "extra": "iterations: 33532\ncpu: 24437.072050578456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62921.418616402676,
            "unit": "ns/iter",
            "extra": "iterations: 13848\ncpu: 62918.10369728486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 616891.398000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616849.2000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 617118.9076277213,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 617085.5143456951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 622535.2478991965,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 622513.8655462178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 616312.0280898977,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 616289.8876404489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 350760.32892629626,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 350738.58173076756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 607592.0770288663,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 607569.0508940859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 593.9234040568863,
            "unit": "ns/iter",
            "extra": "iterations: 1179710\ncpu: 593.8709513354964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3495.792958759743,
            "unit": "ns/iter",
            "extra": "iterations: 200192\ncpu: 3495.749080882353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2788.1886702945244,
            "unit": "ns/iter",
            "extra": "iterations: 250845\ncpu: 2788.126532320733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2779.6757110619897,
            "unit": "ns/iter",
            "extra": "iterations: 259682\ncpu: 2779.4818277739605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2162.908449047583,
            "unit": "ns/iter",
            "extra": "iterations: 323066\ncpu: 2162.869197006201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17672.55319635787,
            "unit": "ns/iter",
            "extra": "iterations: 39326\ncpu: 17672.600823882425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33380.811179473574,
            "unit": "ns/iter",
            "extra": "iterations: 20967\ncpu: 33379.99236896083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7915.062761364264,
            "unit": "ns/iter",
            "extra": "iterations: 88717\ncpu: 7914.61050306035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7826.324132147695,
            "unit": "ns/iter",
            "extra": "iterations: 89445\ncpu: 7825.770026273202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7886.148139824351,
            "unit": "ns/iter",
            "extra": "iterations: 88997\ncpu: 7885.5804128230075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15181.264574564622,
            "unit": "ns/iter",
            "extra": "iterations: 46811\ncpu: 15180.592168507354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14915.077205805763,
            "unit": "ns/iter",
            "extra": "iterations: 47069\ncpu: 14913.422847309388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4586.045470970791,
            "unit": "ns/iter",
            "extra": "iterations: 152207\ncpu: 4585.851504858511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22594.16681815399,
            "unit": "ns/iter",
            "extra": "iterations: 30806\ncpu: 22591.823021489094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18085.608398109038,
            "unit": "ns/iter",
            "extra": "iterations: 38723\ncpu: 18084.600883195915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17988.771333263197,
            "unit": "ns/iter",
            "extra": "iterations: 38672\ncpu: 17987.962867190916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18612.288152287812,
            "unit": "ns/iter",
            "extra": "iterations: 37560\ncpu: 18612.084664536684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46590.996734205524,
            "unit": "ns/iter",
            "extra": "iterations: 15004\ncpu: 46587.41002399389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159975.17108876753,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 159975.73193046573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133374.32591597145,
            "unit": "ns/iter",
            "extra": "iterations: 5213\ncpu: 133373.16324573342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134603.27864131844,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 134595.70140088152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133514.9205411581,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 133501.0289634136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83058.95685670758,
            "unit": "ns/iter",
            "extra": "iterations: 8437\ncpu: 83050.00592627794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134461.20644047952,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 134455.51082997947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4454.475517370455,
            "unit": "ns/iter",
            "extra": "iterations: 157479\ncpu: 4454.176112370512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22137.50841676451,
            "unit": "ns/iter",
            "extra": "iterations: 31663\ncpu: 22135.44831506806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17811.34081471519,
            "unit": "ns/iter",
            "extra": "iterations: 39253\ncpu: 17810.287111813115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17571.851238008727,
            "unit": "ns/iter",
            "extra": "iterations: 39822\ncpu: 17571.65637085016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17999.38899919883,
            "unit": "ns/iter",
            "extra": "iterations: 38779\ncpu: 17998.530132288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44366.912528497494,
            "unit": "ns/iter",
            "extra": "iterations: 15788\ncpu: 44364.289333671484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156252.44481456198,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 156243.59316011626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131416.96688371454,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 131417.22790697543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131921.7713426018,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 131920.0827378731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131291.90290533126,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 131282.13683224012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81721.33259294798,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 81718.69300911888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130889.0599475459,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 130879.9925065586 ns\nthreads: 1"
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
        "date": 1705779063032,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1466.3965335728674,
            "unit": "ns/iter",
            "extra": "iterations: 479687\ncpu: 1466.2619583186536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17116.549042305705,
            "unit": "ns/iter",
            "extra": "iterations: 47510\ncpu: 17115.571458640283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36153.55341453015,
            "unit": "ns/iter",
            "extra": "iterations: 22990\ncpu: 36150.95693779904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 54499.282115067996,
            "unit": "ns/iter",
            "extra": "iterations: 15678\ncpu: 54497.27643832123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 60644.11160000419,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60640.99 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76044.27462712831,
            "unit": "ns/iter",
            "extra": "iterations: 11532\ncpu: 76040.1144640999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 89376.54789391799,
            "unit": "ns/iter",
            "extra": "iterations: 9615\ncpu: 89368.12272490897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104164.22350012034,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 104155.45411429935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120903.03493390132,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 120896.01948503821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1261.2036400606803,
            "unit": "ns/iter",
            "extra": "iterations: 550815\ncpu: 1261.1256047856364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1041.6852787447308,
            "unit": "ns/iter",
            "extra": "iterations: 664461\ncpu: 1041.6043981512812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1044.4136330435974,
            "unit": "ns/iter",
            "extra": "iterations: 670870\ncpu: 1044.4023432259594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1044.0123840256808,
            "unit": "ns/iter",
            "extra": "iterations: 669976\ncpu: 1043.9467980942584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2011.6795316967905,
            "unit": "ns/iter",
            "extra": "iterations: 345588\ncpu: 2011.5539312707583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5652.47869000018,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5652.194999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31479.413941445877,
            "unit": "ns/iter",
            "extra": "iterations: 26267\ncpu: 31477.663989035726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24928.124399167795,
            "unit": "ns/iter",
            "extra": "iterations: 33079\ncpu: 24926.451827443405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24460.209664984475,
            "unit": "ns/iter",
            "extra": "iterations: 33730\ncpu: 24458.381262970644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24625.29937125866,
            "unit": "ns/iter",
            "extra": "iterations: 33400\ncpu: 24623.655688622704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65338.918036414034,
            "unit": "ns/iter",
            "extra": "iterations: 13567\ncpu: 65334.5102085945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 609942.5449999671,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609889.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 611718.0984528378,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 611694.0928270062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 609020.0224877023,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 609019.747013352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 603928.8754398149,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 603889.3033075297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 348169.7942603093,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 348158.8924818113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 609492.7296167376,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 609492.473867595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2618596.491758111,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2618508.7912087925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1167238.6553459116,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1167188.1761006305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3370769.952727063,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3370687.6363636306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8897.089856060542,
            "unit": "ns/iter",
            "extra": "iterations: 93928\ncpu: 8896.182182096956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49802.31146956131,
            "unit": "ns/iter",
            "extra": "iterations: 16801\ncpu: 49799.363133146704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38909.2145828496,
            "unit": "ns/iter",
            "extra": "iterations: 21395\ncpu: 38906.86141621881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38548.43786504747,
            "unit": "ns/iter",
            "extra": "iterations: 21059\ncpu: 38547.993731896255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38366.28435997015,
            "unit": "ns/iter",
            "extra": "iterations: 21624\ncpu: 38363.706992230764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78796.14917176739,
            "unit": "ns/iter",
            "extra": "iterations: 11108\ncpu: 78792.59992798005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 633949.2319999635,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633919.9000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 507783.91900007596,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507744.90000000584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 506981.55199995654,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506974.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 502546.33399993053,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502489.79999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 364016.2147595351,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 363987.852404644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 500562.62900000095,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500514.50000000134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2684941.7449274487,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2684815.0724637858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1168038.92183623,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1167948.2630272936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5715.18079999919,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5715.1079999999865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30154.354515542702,
            "unit": "ns/iter",
            "extra": "iterations: 27051\ncpu: 30153.61724150681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23918.93869539358,
            "unit": "ns/iter",
            "extra": "iterations: 33880\ncpu: 23918.355962219466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23729.96911196904,
            "unit": "ns/iter",
            "extra": "iterations: 34188\ncpu: 23729.343629343763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23695.973923608013,
            "unit": "ns/iter",
            "extra": "iterations: 33747\ncpu: 23695.12845586268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64457.42206076047,
            "unit": "ns/iter",
            "extra": "iterations: 13626\ncpu: 64456.87655951856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 613069.1929998875,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613050.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 617624.2837078645,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 617610.6741573043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 609536.5376495785,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 609502.9556650221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 614903.0631206239,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 614886.6666666642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 347792.57917482516,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 347787.8978389009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 597018.2394843613,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 596996.675712348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 602.052988016947,
            "unit": "ns/iter",
            "extra": "iterations: 1159130\ncpu: 602.0344568771446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3483.7052915833815,
            "unit": "ns/iter",
            "extra": "iterations: 200337\ncpu: 3483.611614429668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2685.4749110765115,
            "unit": "ns/iter",
            "extra": "iterations: 260055\ncpu: 2685.422699044438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2641.8914390789346,
            "unit": "ns/iter",
            "extra": "iterations: 264294\ncpu: 2641.7383671214834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2153.2258835203743,
            "unit": "ns/iter",
            "extra": "iterations: 316433\ncpu: 2153.090543653806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17542.086557097035,
            "unit": "ns/iter",
            "extra": "iterations: 39731\ncpu: 17540.88998515014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33414.56633137174,
            "unit": "ns/iter",
            "extra": "iterations: 21076\ncpu: 33412.293604099425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8009.943537103349,
            "unit": "ns/iter",
            "extra": "iterations: 87190\ncpu: 8009.947241656156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7966.676893522057,
            "unit": "ns/iter",
            "extra": "iterations: 87971\ncpu: 7966.524195473437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7996.37147442569,
            "unit": "ns/iter",
            "extra": "iterations: 87858\ncpu: 7995.714675954423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15801.674495279356,
            "unit": "ns/iter",
            "extra": "iterations: 44282\ncpu: 15800.991373470222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14970.531556377922,
            "unit": "ns/iter",
            "extra": "iterations: 46409\ncpu: 14968.868107479386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4628.811997294262,
            "unit": "ns/iter",
            "extra": "iterations: 152301\ncpu: 4628.577619319643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22781.104872571887,
            "unit": "ns/iter",
            "extra": "iterations: 30723\ncpu: 22780.21677570537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18226.921183548915,
            "unit": "ns/iter",
            "extra": "iterations: 38393\ncpu: 18226.47097127068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18226.609751653406,
            "unit": "ns/iter",
            "extra": "iterations: 38414\ncpu: 18226.02436611663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18676.79224880953,
            "unit": "ns/iter",
            "extra": "iterations: 37362\ncpu: 18676.090680370395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46570.733084708925,
            "unit": "ns/iter",
            "extra": "iterations: 15016\ncpu: 46569.40596696877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160480.7146782707,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 160475.9560338884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134690.01416649544,
            "unit": "ns/iter",
            "extra": "iterations: 5153\ncpu: 134687.3471764015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134884.5279060958,
            "unit": "ns/iter",
            "extra": "iterations: 5196\ncpu: 134881.2740569669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132918.7711735738,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 132914.71705279214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83040.68880747727,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 83036.91053067091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133948.5967156735,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133945.77047928292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4501.061489793829,
            "unit": "ns/iter",
            "extra": "iterations: 155847\ncpu: 4500.84056799296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22296.731730643256,
            "unit": "ns/iter",
            "extra": "iterations: 31364\ncpu: 22295.960336691864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17863.083229405413,
            "unit": "ns/iter",
            "extra": "iterations: 39289\ncpu: 17862.175163531676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17621.758884335482,
            "unit": "ns/iter",
            "extra": "iterations: 39761\ncpu: 17621.385277030327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18221.14062134907,
            "unit": "ns/iter",
            "extra": "iterations: 38529\ncpu: 18220.444340626214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44489.30324265729,
            "unit": "ns/iter",
            "extra": "iterations: 15697\ncpu: 44486.88284385547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157429.73672367595,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157423.08730873268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131656.7021837182,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 131650.62123494022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131583.59462507855,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131574.666416089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130072.16926253759,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 130069.16869956793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81670.97432620524,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 81663.45260222963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131231.28364932528,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 131219.48563919644 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}