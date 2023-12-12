window.BENCHMARK_DATA = {
  "lastUpdate": 1702382301434,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-7 18.04 Release c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381127609,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 699.3273413781216,
            "unit": "ns/iter",
            "extra": "iterations: 1004291\ncpu: 699.305181466328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6447.945992863869,
            "unit": "ns/iter",
            "extra": "iterations: 125002\ncpu: 6447.668037311403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12319.147832759814,
            "unit": "ns/iter",
            "extra": "iterations: 66467\ncpu: 12318.386567770469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18683.428477459594,
            "unit": "ns/iter",
            "extra": "iterations: 45608\ncpu: 18683.134537800393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24283.061329985834,
            "unit": "ns/iter",
            "extra": "iterations: 34241\ncpu: 24282.071201191546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29990.10395951683,
            "unit": "ns/iter",
            "extra": "iterations: 28059\ncpu: 29988.98392672584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35765.0121546932,
            "unit": "ns/iter",
            "extra": "iterations: 23530\ncpu: 35764.033149171286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41786.31383588567,
            "unit": "ns/iter",
            "extra": "iterations: 20071\ncpu: 41785.6658861043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 47101.86889882183,
            "unit": "ns/iter",
            "extra": "iterations: 17681\ncpu: 47101.165092472154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 670.8070805768209,
            "unit": "ns/iter",
            "extra": "iterations: 1044011\ncpu: 670.7874725457868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 532.0435568685123,
            "unit": "ns/iter",
            "extra": "iterations: 1341832\ncpu: 532.028301605567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 528.0815830016982,
            "unit": "ns/iter",
            "extra": "iterations: 1328034\ncpu: 528.0792509830325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 537.5702003266516,
            "unit": "ns/iter",
            "extra": "iterations: 1302323\ncpu: 537.5520512192436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 983.5062753982595,
            "unit": "ns/iter",
            "extra": "iterations: 711907\ncpu: 983.4866070989609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3005.681751895625,
            "unit": "ns/iter",
            "extra": "iterations: 267436\ncpu: 3005.6424714698114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14655.262518694803,
            "unit": "ns/iter",
            "extra": "iterations: 55497\ncpu: 14654.774131935048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11303.99054259966,
            "unit": "ns/iter",
            "extra": "iterations: 72853\ncpu: 11303.51392530161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11882.655274029661,
            "unit": "ns/iter",
            "extra": "iterations: 70923\ncpu: 11882.372432074191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11214.944526778007,
            "unit": "ns/iter",
            "extra": "iterations: 73549\ncpu: 11214.466546112117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40923.02392344705,
            "unit": "ns/iter",
            "extra": "iterations: 20273\ncpu: 40920.63335470809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281853.4938070733,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 281836.0821382011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221095.6710492856,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 221081.99747155525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216860.69853488184,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 216843.95331512278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216317.18566132276,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 216307.07045735506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 115480.28199335765,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 115471.42857142857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208483.22216922982,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 208469.29678188296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5376.858950000951,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5376.276000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28568.861618347688,
            "unit": "ns/iter",
            "extra": "iterations: 29079\ncpu: 28567.093091234256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22178.84813028132,
            "unit": "ns/iter",
            "extra": "iterations: 37519\ncpu: 22177.811242303895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21734.051352132206,
            "unit": "ns/iter",
            "extra": "iterations: 38051\ncpu: 21733.21069091484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21578.515299098814,
            "unit": "ns/iter",
            "extra": "iterations: 37780\ncpu: 21577.390153520366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 53683.07185238266,
            "unit": "ns/iter",
            "extra": "iterations: 15337\ncpu: 53681.79565756018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 296505.2049541754,
            "unit": "ns/iter",
            "extra": "iterations: 2947\ncpu: 296495.2494061746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 234795.67025570854,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 234784.6567967699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 231910.29512130943,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 231896.00106638158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 227048.46173935704,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 227032.72394881173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 125067.01146623546,
            "unit": "ns/iter",
            "extra": "iterations: 6977\ncpu: 125059.23749462551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 219209.82692307341,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 219195.09109311725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 892841.5089369565,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 892788.240827849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 505933.31657999736,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 505902.0797227053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 3088.11310019398,
            "unit": "ns/iter",
            "extra": "iterations: 260645\ncpu: 3087.9548811601903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13888.382839683707,
            "unit": "ns/iter",
            "extra": "iterations: 56619\ncpu: 13887.292251717656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10377.848483332535,
            "unit": "ns/iter",
            "extra": "iterations: 79978\ncpu: 10377.201230338336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10693.423257676397,
            "unit": "ns/iter",
            "extra": "iterations: 77454\ncpu: 10692.911921914927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10214.959102052695,
            "unit": "ns/iter",
            "extra": "iterations: 80762\ncpu: 10214.438721180686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39619.16540112262,
            "unit": "ns/iter",
            "extra": "iterations: 21203\ncpu: 39616.464651228795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 282629.88085378904,
            "unit": "ns/iter",
            "extra": "iterations: 3139\ncpu: 282621.12137623446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 218517.2275106084,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 218511.31323199545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 218850.54748879053,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 218847.190452511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 217578.78519264844,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 217574.16267942626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 112061.69965120571,
            "unit": "ns/iter",
            "extra": "iterations: 7741\ncpu: 112059.86306678689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 205631.21966822573,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 205625.80568720406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 261.0372493185891,
            "unit": "ns/iter",
            "extra": "iterations: 2871623\ncpu: 261.02691753060964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1671.4902208929386,
            "unit": "ns/iter",
            "extra": "iterations: 417216\ncpu: 1671.4646609909566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1335.8938223454757,
            "unit": "ns/iter",
            "extra": "iterations: 520505\ncpu: 1335.8859184830185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1208.102374772162,
            "unit": "ns/iter",
            "extra": "iterations: 580182\ncpu: 1208.0807401815368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 980.3005654346063,
            "unit": "ns/iter",
            "extra": "iterations: 715202\ncpu: 980.2850103886684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11404.701625419357,
            "unit": "ns/iter",
            "extra": "iterations: 61215\ncpu: 11404.342073021337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 15114.502071912315,
            "unit": "ns/iter",
            "extra": "iterations: 46334\ncpu: 15114.177493849056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3401.2119813427653,
            "unit": "ns/iter",
            "extra": "iterations: 205820\ncpu: 3401.1952191234823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3414.1213193486205,
            "unit": "ns/iter",
            "extra": "iterations: 204889\ncpu: 3414.0490704722997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3383.6119991295836,
            "unit": "ns/iter",
            "extra": "iterations: 206765\ncpu: 3383.439653713171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5881.732974835323,
            "unit": "ns/iter",
            "extra": "iterations: 119015\ncpu: 5881.6124017981265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6372.090478054376,
            "unit": "ns/iter",
            "extra": "iterations: 109883\ncpu: 6372.05937224139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2030.8304511880242,
            "unit": "ns/iter",
            "extra": "iterations: 343205\ncpu: 2030.7944231581607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10706.478320609662,
            "unit": "ns/iter",
            "extra": "iterations: 65500\ncpu: 10706.419847328132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8562.022120705598,
            "unit": "ns/iter",
            "extra": "iterations: 81869\ncpu: 8561.842699922961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8373.073769799812,
            "unit": "ns/iter",
            "extra": "iterations: 82893\ncpu: 8372.416247451667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8298.40441299599,
            "unit": "ns/iter",
            "extra": "iterations: 83662\ncpu: 8298.363653749715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18450.31298863284,
            "unit": "ns/iter",
            "extra": "iterations: 37733\ncpu: 18449.67270028893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60986.85112115796,
            "unit": "ns/iter",
            "extra": "iterations: 11506\ncpu: 60982.51347123145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 49293.02921824771,
            "unit": "ns/iter",
            "extra": "iterations: 14135\ncpu: 49292.14715245803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48924.454341418925,
            "unit": "ns/iter",
            "extra": "iterations: 14258\ncpu: 48921.39149950884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48668.11274543644,
            "unit": "ns/iter",
            "extra": "iterations: 14413\ncpu: 48664.24061611053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28324.268459636245,
            "unit": "ns/iter",
            "extra": "iterations: 24689\ncpu: 28322.37028636193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48330.07912678233,
            "unit": "ns/iter",
            "extra": "iterations: 14521\ncpu: 48327.53942565936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2057.9815668340093,
            "unit": "ns/iter",
            "extra": "iterations: 338900\ncpu: 2057.851578636786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10902.854425581483,
            "unit": "ns/iter",
            "extra": "iterations: 64613\ncpu: 10902.149722192002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8714.267027826161,
            "unit": "ns/iter",
            "extra": "iterations: 81220\ncpu: 8713.677665599635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8617.418091438734,
            "unit": "ns/iter",
            "extra": "iterations: 81475\ncpu: 8617.275237802909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8485.76581910595,
            "unit": "ns/iter",
            "extra": "iterations: 82590\ncpu: 8485.73192880497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18200.969625987967,
            "unit": "ns/iter",
            "extra": "iterations: 38421\ncpu: 18199.9583561074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60217.59869940729,
            "unit": "ns/iter",
            "extra": "iterations: 11687\ncpu: 60213.6476426802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49579.62260685705,
            "unit": "ns/iter",
            "extra": "iterations: 14155\ncpu: 49576.54539032166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 49821.394696225754,
            "unit": "ns/iter",
            "extra": "iterations: 14254\ncpu: 49821.1168794725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 49167.044109480004,
            "unit": "ns/iter",
            "extra": "iterations: 14396\ncpu: 49164.031675465376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28491.342498936807,
            "unit": "ns/iter",
            "extra": "iterations: 23530\ncpu: 28489.1797705059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47725.534229745295,
            "unit": "ns/iter",
            "extra": "iterations: 14651\ncpu: 47722.428503174284 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382291037,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 686.2595788554931,
            "unit": "ns/iter",
            "extra": "iterations: 1024209\ncpu: 686.2200000195272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6314.838639162806,
            "unit": "ns/iter",
            "extra": "iterations: 129920\ncpu: 6314.160252463053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12182.903892979752,
            "unit": "ns/iter",
            "extra": "iterations: 68174\ncpu: 12182.309971543404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18864.460838492494,
            "unit": "ns/iter",
            "extra": "iterations: 45057\ncpu: 18863.6926559691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24574.093828826437,
            "unit": "ns/iter",
            "extra": "iterations: 34094\ncpu: 24574.027688156264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30151.36179653676,
            "unit": "ns/iter",
            "extra": "iterations: 27720\ncpu: 30150.52308802309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36314.69647485711,
            "unit": "ns/iter",
            "extra": "iterations: 23148\ncpu: 36314.31657162607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41399.65814455917,
            "unit": "ns/iter",
            "extra": "iterations: 19909\ncpu: 41396.57943643584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 47356.086285193,
            "unit": "ns/iter",
            "extra": "iterations: 17616\ncpu: 47336.14895549503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 671.4761398993613,
            "unit": "ns/iter",
            "extra": "iterations: 1041320\ncpu: 671.4835017093701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 515.3035314062378,
            "unit": "ns/iter",
            "extra": "iterations: 1338985\ncpu: 515.2962878598337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 495.5514225300663,
            "unit": "ns/iter",
            "extra": "iterations: 1413116\ncpu: 495.5472869884711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 503.5582229343449,
            "unit": "ns/iter",
            "extra": "iterations: 1386713\ncpu: 503.540386511124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 932.6534702311845,
            "unit": "ns/iter",
            "extra": "iterations: 751996\ncpu: 932.6152000808504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3033.3376331517484,
            "unit": "ns/iter",
            "extra": "iterations: 265205\ncpu: 3033.3183763503735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14697.546980778918,
            "unit": "ns/iter",
            "extra": "iterations: 55097\ncpu: 14696.391818066317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11728.290437087822,
            "unit": "ns/iter",
            "extra": "iterations: 70146\ncpu: 11727.770649787597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11402.32916447154,
            "unit": "ns/iter",
            "extra": "iterations: 72122\ncpu: 11401.462799145911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11009.536758240825,
            "unit": "ns/iter",
            "extra": "iterations: 73929\ncpu: 11008.973474549868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41429.657806476214,
            "unit": "ns/iter",
            "extra": "iterations: 19977\ncpu: 41424.77849526955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 291982.3865153543,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 291967.9238985317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 222459.76919140562,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 222437.53838280484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 224286.25624682434,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 224283.5543090259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 220818.35727063142,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 220798.08331203676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 120237.02093023606,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 120233.25581395358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 214020.41926893566,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 214011.83732752342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5397.362709999812,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5397.342999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28601.305744755166,
            "unit": "ns/iter",
            "extra": "iterations: 29070\ncpu: 28600.526315789535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22409.83603966992,
            "unit": "ns/iter",
            "extra": "iterations: 36704\ncpu: 22409.639276373186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22039.175471846796,
            "unit": "ns/iter",
            "extra": "iterations: 37989\ncpu: 22038.361104530177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21947.293642255056,
            "unit": "ns/iter",
            "extra": "iterations: 38111\ncpu: 21947.219962740382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 55211.18760270643,
            "unit": "ns/iter",
            "extra": "iterations: 15213\ncpu: 55210.95116019186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 299590.36122447916,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 299581.5646258514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 230636.33610738008,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 230635.24832214674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230586.7577754388,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 230568.58197153508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 228662.59947575117,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 228653.36828309324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 129755.54788021743,
            "unit": "ns/iter",
            "extra": "iterations: 6746\ncpu: 129746.57574859145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 220647.2732840045,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 220635.72339882597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 919417.7487922723,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 919346.4734299532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 514426.8530444695,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 514407.3185011688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 3040.152017370315,
            "unit": "ns/iter",
            "extra": "iterations: 263437\ncpu: 3039.9473118809988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14153.410221142864,
            "unit": "ns/iter",
            "extra": "iterations: 55982\ncpu: 14152.920581615532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10878.281074573548,
            "unit": "ns/iter",
            "extra": "iterations: 76421\ncpu: 10878.224571780065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10932.300493324117,
            "unit": "ns/iter",
            "extra": "iterations: 76015\ncpu: 10932.163388804865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10288.932743231084,
            "unit": "ns/iter",
            "extra": "iterations: 80438\ncpu: 10288.67947984782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39882.43649850278,
            "unit": "ns/iter",
            "extra": "iterations: 21031\ncpu: 39882.30231562925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 286649.92931593506,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 286647.231270358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 219638.6648841555,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 219634.93761140844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 219303.02290264895,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 219301.74259397612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213377.98227472906,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 213377.4495322496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 115550.68996730291,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 115548.67990947915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207909.78331757698,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 207905.97826086954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 242.0189957604151,
            "unit": "ns/iter",
            "extra": "iterations: 2898173\ncpu: 242.01446911554186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1723.4326100485237,
            "unit": "ns/iter",
            "extra": "iterations: 404912\ncpu: 1723.422373256406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1359.6491432969037,
            "unit": "ns/iter",
            "extra": "iterations: 514589\ncpu: 1359.6477965910642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1251.0482134058518,
            "unit": "ns/iter",
            "extra": "iterations: 558185\ncpu: 1251.0318263658144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 988.9788842176924,
            "unit": "ns/iter",
            "extra": "iterations: 710748\ncpu: 988.9385548745837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11790.27862725069,
            "unit": "ns/iter",
            "extra": "iterations: 58860\ncpu: 11790.056065239554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 15011.43427410604,
            "unit": "ns/iter",
            "extra": "iterations: 46770\ncpu: 15010.69061364122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3503.512091840864,
            "unit": "ns/iter",
            "extra": "iterations: 200259\ncpu: 3503.471005048445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3506.376986971471,
            "unit": "ns/iter",
            "extra": "iterations: 199487\ncpu: 3506.2700827622693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3445.879616438559,
            "unit": "ns/iter",
            "extra": "iterations: 203566\ncpu: 3445.8637493490974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6340.189184972945,
            "unit": "ns/iter",
            "extra": "iterations: 108978\ncpu: 6339.936500945161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6012.388374822859,
            "unit": "ns/iter",
            "extra": "iterations: 115852\ncpu: 6012.4538203915445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1996.1631002810093,
            "unit": "ns/iter",
            "extra": "iterations: 349607\ncpu: 1996.137377112029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 11538.735533929854,
            "unit": "ns/iter",
            "extra": "iterations: 60832\ncpu: 11538.575092056963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8946.728419122415,
            "unit": "ns/iter",
            "extra": "iterations: 78507\ncpu: 8946.630236794024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8969.031814064198,
            "unit": "ns/iter",
            "extra": "iterations: 78393\ncpu: 8968.776548926588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8782.534070650747,
            "unit": "ns/iter",
            "extra": "iterations: 79658\ncpu: 8782.40729116979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 20995.08955657597,
            "unit": "ns/iter",
            "extra": "iterations: 34414\ncpu: 20947.30051723132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 62532.946412759426,
            "unit": "ns/iter",
            "extra": "iterations: 11290\ncpu: 62532.71922054867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 51597.69605243893,
            "unit": "ns/iter",
            "extra": "iterations: 13578\ncpu: 51597.348652231965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 51446.88413061692,
            "unit": "ns/iter",
            "extra": "iterations: 13567\ncpu: 51444.4681948852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 50714.59216139981,
            "unit": "ns/iter",
            "extra": "iterations: 13829\ncpu: 50713.53677055476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 29072.62756574063,
            "unit": "ns/iter",
            "extra": "iterations: 24262\ncpu: 29071.877833649058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 49649.67968477682,
            "unit": "ns/iter",
            "extra": "iterations: 14339\ncpu: 49649.18753051188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2073.503636708287,
            "unit": "ns/iter",
            "extra": "iterations: 337668\ncpu: 2073.4292263406733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11629.86715104661,
            "unit": "ns/iter",
            "extra": "iterations: 60008\ncpu: 11629.616051193321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9068.165425800167,
            "unit": "ns/iter",
            "extra": "iterations: 77231\ncpu: 9068.064637257015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9011.371404129159,
            "unit": "ns/iter",
            "extra": "iterations: 78319\ncpu: 9011.349736334783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9135.269805896693,
            "unit": "ns/iter",
            "extra": "iterations: 75836\ncpu: 9135.12052323445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20437.924146022175,
            "unit": "ns/iter",
            "extra": "iterations: 34105\ncpu: 20435.434686996035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60322.32319587928,
            "unit": "ns/iter",
            "extra": "iterations: 11640\ncpu: 60319.25257731941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49652.30498133446,
            "unit": "ns/iter",
            "extra": "iterations: 13932\ncpu: 49651.60780935955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 49712.38728200638,
            "unit": "ns/iter",
            "extra": "iterations: 14106\ncpu: 49710.03828158236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48696.88176409163,
            "unit": "ns/iter",
            "extra": "iterations: 14285\ncpu: 48694.81974098699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28270.88036846656,
            "unit": "ns/iter",
            "extra": "iterations: 24751\ncpu: 28269.993131590767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47450.68161556131,
            "unit": "ns/iter",
            "extra": "iterations: 14806\ncpu: 47450.64838578973 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}