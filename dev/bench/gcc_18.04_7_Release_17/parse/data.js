window.BENCHMARK_DATA = {
  "lastUpdate": 1702396450997,
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387015017,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 705.1548763407694,
            "unit": "ns/iter",
            "extra": "iterations: 993173\ncpu: 705.1150202432004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6286.581241128954,
            "unit": "ns/iter",
            "extra": "iterations: 128931\ncpu: 6286.166243959947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12425.37628039484,
            "unit": "ns/iter",
            "extra": "iterations: 67362\ncpu: 12424.766188652353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18289.47625594673,
            "unit": "ns/iter",
            "extra": "iterations: 45822\ncpu: 18288.551350879487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24143.53705988771,
            "unit": "ns/iter",
            "extra": "iterations: 34849\ncpu: 24142.368504117767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30138.431301672,
            "unit": "ns/iter",
            "extra": "iterations: 27941\ncpu: 30135.10253748971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36458.297908303866,
            "unit": "ns/iter",
            "extra": "iterations: 23665\ncpu: 36456.10817663216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41410.659796907574,
            "unit": "ns/iter",
            "extra": "iterations: 19991\ncpu: 41406.13776199291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 47290.491372460216,
            "unit": "ns/iter",
            "extra": "iterations: 17618\ncpu: 47289.9364286525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 669.1952944389703,
            "unit": "ns/iter",
            "extra": "iterations: 1047229\ncpu: 669.1828625830639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 521.4896964920929,
            "unit": "ns/iter",
            "extra": "iterations: 1342601\ncpu: 521.4894819831053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 527.3775250241304,
            "unit": "ns/iter",
            "extra": "iterations: 1326720\ncpu: 527.3611613603471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 509.49552246258156,
            "unit": "ns/iter",
            "extra": "iterations: 1321932\ncpu: 509.4703055830397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 934.3603099371295,
            "unit": "ns/iter",
            "extra": "iterations: 748797\ncpu: 934.3430863104425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3061.29310397366,
            "unit": "ns/iter",
            "extra": "iterations: 262528\ncpu: 3061.219755607017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14628.722972251011,
            "unit": "ns/iter",
            "extra": "iterations: 56146\ncpu: 14628.703736686486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11678.777588846124,
            "unit": "ns/iter",
            "extra": "iterations: 70572\ncpu: 11678.34977044723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11755.53363783861,
            "unit": "ns/iter",
            "extra": "iterations: 70278\ncpu: 11755.520931159128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11389.953416675511,
            "unit": "ns/iter",
            "extra": "iterations: 70712\ncpu: 11389.331372327184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41302.0251329382,
            "unit": "ns/iter",
            "extra": "iterations: 19934\ncpu: 41300.2809270592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 269454.21073994134,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 269438.18295348156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219221.77253218737,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 219211.78995203276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216416.93179563593,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 216407.58928571417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212975.7792176071,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 212963.56968215134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 115108.7267572147,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 115103.92984307019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205458.85380255847,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 205447.47283892293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5360.450610000385,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5360.381000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28938.17044239978,
            "unit": "ns/iter",
            "extra": "iterations: 29001\ncpu: 28937.881452363705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22512.000193755328,
            "unit": "ns/iter",
            "extra": "iterations: 36128\ncpu: 22510.43235163859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22068.486675717955,
            "unit": "ns/iter",
            "extra": "iterations: 37563\ncpu: 22067.675638261022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21506.481908363472,
            "unit": "ns/iter",
            "extra": "iterations: 38609\ncpu: 21505.454686731053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54513.45638629129,
            "unit": "ns/iter",
            "extra": "iterations: 15408\ncpu: 54510.07917964703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 291790.32250502356,
            "unit": "ns/iter",
            "extra": "iterations: 2986\ncpu: 291782.9202947091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 231232.00000000343,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 231214.56310679618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 229503.27599790445,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 229493.82878151338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 227768.25117370565,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 227754.22535211366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 125068.60941075308,
            "unit": "ns/iter",
            "extra": "iterations: 6992\ncpu: 125059.95423341039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217630.37792305503,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 217618.22982147435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 883326.9576271217,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 883287.9472693001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 477775.449111475,
            "unit": "ns/iter",
            "extra": "iterations: 1857\ncpu: 477744.9649973098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 3025.8487029472426,
            "unit": "ns/iter",
            "extra": "iterations: 265101\ncpu: 3025.6853048460634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14409.993497485471,
            "unit": "ns/iter",
            "extra": "iterations: 57670\ncpu: 14409.375758626651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11072.176504614,
            "unit": "ns/iter",
            "extra": "iterations: 74338\ncpu: 11071.803115499444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10921.58833220427,
            "unit": "ns/iter",
            "extra": "iterations: 75267\ncpu: 10920.985292359164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10494.306303790725,
            "unit": "ns/iter",
            "extra": "iterations: 78778\ncpu: 10493.971667216792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39595.39217998241,
            "unit": "ns/iter",
            "extra": "iterations: 21202\ncpu: 39593.54306197533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 281252.880177055,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 281239.61429023056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 218018.5234753212,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 218005.9293320432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 211310.29760192116,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 211304.1726618699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 209678.2229997676,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 209673.2680195944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 108901.26575787734,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 108898.72436218114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 203227.63576008333,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 203224.45054945163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 241.6799067882278,
            "unit": "ns/iter",
            "extra": "iterations: 2942118\ncpu: 241.67229186592667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1651.4162582330196,
            "unit": "ns/iter",
            "extra": "iterations: 421325\ncpu: 1651.3750667536801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1368.4995075090687,
            "unit": "ns/iter",
            "extra": "iterations: 542142\ncpu: 1368.4839027413466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1323.160216037263,
            "unit": "ns/iter",
            "extra": "iterations: 518244\ncpu: 1323.1379427451195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 966.7372375281124,
            "unit": "ns/iter",
            "extra": "iterations: 722744\ncpu: 966.694846307967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10616.54350138242,
            "unit": "ns/iter",
            "extra": "iterations: 65814\ncpu: 10616.302002613476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13118.699847106398,
            "unit": "ns/iter",
            "extra": "iterations: 49708\ncpu: 13117.970950350065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3039.50800225877,
            "unit": "ns/iter",
            "extra": "iterations: 231997\ncpu: 3039.3453363621225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3042.7443768250296,
            "unit": "ns/iter",
            "extra": "iterations: 231853\ncpu: 3042.658494822151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3028.6537798978707,
            "unit": "ns/iter",
            "extra": "iterations: 231038\ncpu: 3028.4905513378776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5795.392223077264,
            "unit": "ns/iter",
            "extra": "iterations: 120819\ncpu: 5795.335170792691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5693.80427187613,
            "unit": "ns/iter",
            "extra": "iterations: 123365\ncpu: 5693.79888947433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1997.9513640454597,
            "unit": "ns/iter",
            "extra": "iterations: 355560\ncpu: 1997.9283383957838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10460.009322198346,
            "unit": "ns/iter",
            "extra": "iterations: 66937\ncpu: 10459.984761791102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8309.801554349193,
            "unit": "ns/iter",
            "extra": "iterations: 84537\ncpu: 8309.5070797402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8253.473663342893,
            "unit": "ns/iter",
            "extra": "iterations: 85755\ncpu: 8253.377645618404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8187.959104866982,
            "unit": "ns/iter",
            "extra": "iterations: 85976\ncpu: 8187.76635340088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18416.417249783583,
            "unit": "ns/iter",
            "extra": "iterations: 38157\ncpu: 18416.22769085623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59941.68059701776,
            "unit": "ns/iter",
            "extra": "iterations: 11725\ncpu: 59940.58848614137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48601.77603048042,
            "unit": "ns/iter",
            "extra": "iterations: 14435\ncpu: 48601.28853481192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48282.904541689255,
            "unit": "ns/iter",
            "extra": "iterations: 14488\ncpu: 48281.80563224798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48406.170114318134,
            "unit": "ns/iter",
            "extra": "iterations: 14696\ncpu: 48406.110506260455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27821.59030925473,
            "unit": "ns/iter",
            "extra": "iterations: 24931\ncpu: 27820.39629377068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47021.40180904373,
            "unit": "ns/iter",
            "extra": "iterations: 14925\ncpu: 47021.31993299815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2018.773845390261,
            "unit": "ns/iter",
            "extra": "iterations: 346524\ncpu: 2018.7262642702976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10753.52687578574,
            "unit": "ns/iter",
            "extra": "iterations: 65226\ncpu: 10753.414282648084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8551.888378113488,
            "unit": "ns/iter",
            "extra": "iterations: 82663\ncpu: 8551.556319030211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8607.820060917398,
            "unit": "ns/iter",
            "extra": "iterations: 81422\ncpu: 8607.71167497737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8578.90853710623,
            "unit": "ns/iter",
            "extra": "iterations: 81913\ncpu: 8578.893460134504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18049.86261174249,
            "unit": "ns/iter",
            "extra": "iterations: 38817\ncpu: 18049.493778499098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58265.56912729067,
            "unit": "ns/iter",
            "extra": "iterations: 12043\ncpu: 58265.515237066305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48333.805595654536,
            "unit": "ns/iter",
            "extra": "iterations: 14547\ncpu: 48332.61153502384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48066.04866529962,
            "unit": "ns/iter",
            "extra": "iterations: 14610\ncpu: 48065.9411362081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47511.50101763892,
            "unit": "ns/iter",
            "extra": "iterations: 14740\ncpu: 47510.95658073256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27451.108996881067,
            "unit": "ns/iter",
            "extra": "iterations: 25331\ncpu: 27450.01381706186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46931.77356503499,
            "unit": "ns/iter",
            "extra": "iterations: 15192\ncpu: 46931.21379673447 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388096006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 735.8255778218362,
            "unit": "ns/iter",
            "extra": "iterations: 1002212\ncpu: 735.7929260475828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6505.397583601836,
            "unit": "ns/iter",
            "extra": "iterations: 126552\ncpu: 6505.340887540298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12272.916793521004,
            "unit": "ns/iter",
            "extra": "iterations: 65692\ncpu: 12272.80490775132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18757.609511584193,
            "unit": "ns/iter",
            "extra": "iterations: 45187\ncpu: 18757.545311704693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24549.35876993077,
            "unit": "ns/iter",
            "extra": "iterations: 34242\ncpu: 24548.639098183514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30306.944659143548,
            "unit": "ns/iter",
            "extra": "iterations: 25876\ncpu: 30305.549543978985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 37781.83791328644,
            "unit": "ns/iter",
            "extra": "iterations: 22926\ncpu: 37780.67259879612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42035.2083922456,
            "unit": "ns/iter",
            "extra": "iterations: 19804\ncpu: 42034.04362754999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48091.250359299025,
            "unit": "ns/iter",
            "extra": "iterations: 17395\ncpu: 48088.306984765724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 698.1447038519025,
            "unit": "ns/iter",
            "extra": "iterations: 1005882\ncpu: 698.1164788712805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 529.8406141137256,
            "unit": "ns/iter",
            "extra": "iterations: 1321905\ncpu: 529.8272568754942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 543.2717293089606,
            "unit": "ns/iter",
            "extra": "iterations: 1299282\ncpu: 543.2540433870406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 546.7043114087925,
            "unit": "ns/iter",
            "extra": "iterations: 1279373\ncpu: 546.6852903727048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1004.3114980461988,
            "unit": "ns/iter",
            "extra": "iterations: 698136\ncpu: 1004.2633526991895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2997.3969844003327,
            "unit": "ns/iter",
            "extra": "iterations: 268338\ncpu: 2997.325388129892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14897.626828481416,
            "unit": "ns/iter",
            "extra": "iterations: 55784\ncpu: 14896.864692384906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11762.581565692637,
            "unit": "ns/iter",
            "extra": "iterations: 69490\ncpu: 11762.183047920555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11674.948217523408,
            "unit": "ns/iter",
            "extra": "iterations: 70043\ncpu: 11674.377168310906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11153.74008524098,
            "unit": "ns/iter",
            "extra": "iterations: 72266\ncpu: 11153.485733263213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41306.93439264553,
            "unit": "ns/iter",
            "extra": "iterations: 20013\ncpu: 41304.906810573164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 268438.67344386433,
            "unit": "ns/iter",
            "extra": "iterations: 3197\ncpu: 268428.5580231461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 218884.2178910498,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 218874.9125437285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 212307.13184328895,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 212299.67353088965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 206787.0802592179,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 206780.73280159515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 115305.90355867692,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 115301.5213652597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206847.2273584953,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 206838.37264150966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5426.655779999691,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5426.363999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28228.202102559786,
            "unit": "ns/iter",
            "extra": "iterations: 28822\ncpu: 28226.68794670744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22347.710033372045,
            "unit": "ns/iter",
            "extra": "iterations: 37156\ncpu: 22347.227903972424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21669.479477709774,
            "unit": "ns/iter",
            "extra": "iterations: 38446\ncpu: 21668.555896582267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21591.501774345306,
            "unit": "ns/iter",
            "extra": "iterations: 38324\ncpu: 21590.507253940094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54365.80710823706,
            "unit": "ns/iter",
            "extra": "iterations: 15475\ncpu: 54363.94830371549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 296866.9298603939,
            "unit": "ns/iter",
            "extra": "iterations: 2937\ncpu: 296855.02213142783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 229071.6371959114,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 229070.8867381633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230989.77262120383,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 230980.73632356807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226688.75801826635,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 226683.36375488894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 133741.9752655448,
            "unit": "ns/iter",
            "extra": "iterations: 6873\ncpu: 133738.323876036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217603.91855203736,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 217596.68174962368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 899734.3065278769,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 899694.1343424771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 502793.54597043875,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 502769.06923949876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 3102.7287428097557,
            "unit": "ns/iter",
            "extra": "iterations: 264240\ncpu: 3102.621858916154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14607.564677931496,
            "unit": "ns/iter",
            "extra": "iterations: 56820\ncpu: 14607.238648363164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11114.558746173016,
            "unit": "ns/iter",
            "extra": "iterations: 74141\ncpu: 11114.191877638572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 11086.080351320903,
            "unit": "ns/iter",
            "extra": "iterations: 75145\ncpu: 11085.720939516916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10598.24875621882,
            "unit": "ns/iter",
            "extra": "iterations: 77184\ncpu: 10597.794879767747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39548.24262791837,
            "unit": "ns/iter",
            "extra": "iterations: 21127\ncpu: 39547.01566715563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 284438.2159715391,
            "unit": "ns/iter",
            "extra": "iterations: 3093\ncpu: 284437.27772389277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 216775.03583698915,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 216769.9067255781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 215598.6163445265,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 215597.89576706706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 216236.52896601625,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 216226.69274016228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110970.37596849895,
            "unit": "ns/iter",
            "extra": "iterations: 7873\ncpu: 110970.0114314751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206455.39047173873,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 206448.69219990645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 243.8249778603902,
            "unit": "ns/iter",
            "extra": "iterations: 2877196\ncpu: 243.82416074539384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1650.8317677603125,
            "unit": "ns/iter",
            "extra": "iterations: 423700\ncpu: 1650.8026905829727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1285.3767365272079,
            "unit": "ns/iter",
            "extra": "iterations: 542318\ncpu: 1285.3726042653825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1283.4451655043601,
            "unit": "ns/iter",
            "extra": "iterations: 546572\ncpu: 1283.4287157044232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 976.0855297363004,
            "unit": "ns/iter",
            "extra": "iterations: 717423\ncpu: 976.0604273908102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11211.342420014802,
            "unit": "ns/iter",
            "extra": "iterations: 60198\ncpu: 11211.306023455949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14684.98534529856,
            "unit": "ns/iter",
            "extra": "iterations: 47698\ncpu: 14684.626189777224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3356.313302710643,
            "unit": "ns/iter",
            "extra": "iterations: 209213\ncpu: 3356.302906607156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3331.5238650367705,
            "unit": "ns/iter",
            "extra": "iterations: 210161\ncpu: 3331.4358991439963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3339.409146783057,
            "unit": "ns/iter",
            "extra": "iterations: 209888\ncpu: 3339.3981552065848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6131.885561207034,
            "unit": "ns/iter",
            "extra": "iterations: 114227\ncpu: 6131.725423936511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6250.454996973677,
            "unit": "ns/iter",
            "extra": "iterations: 112348\ncpu: 6250.435254744187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2012.039685131504,
            "unit": "ns/iter",
            "extra": "iterations: 349098\ncpu: 2011.9943396982874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10567.503341593612,
            "unit": "ns/iter",
            "extra": "iterations: 66585\ncpu: 10567.401066306142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8268.677343943273,
            "unit": "ns/iter",
            "extra": "iterations: 84697\ncpu: 8268.57385739757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8289.568699085212,
            "unit": "ns/iter",
            "extra": "iterations: 84579\ncpu: 8289.288121164833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8166.921359507731,
            "unit": "ns/iter",
            "extra": "iterations: 85325\ncpu: 8166.894813946736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18305.633740983434,
            "unit": "ns/iter",
            "extra": "iterations: 38268\ncpu: 18305.22629873523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60097.6062681996,
            "unit": "ns/iter",
            "extra": "iterations: 11678\ncpu: 60096.85733858542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 50085.426300006475,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50085.26999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49537.10910518496,
            "unit": "ns/iter",
            "extra": "iterations: 14014\ncpu: 49535.87840730718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49062.37215650502,
            "unit": "ns/iter",
            "extra": "iterations: 14287\ncpu: 49061.67144956961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28487.988636825827,
            "unit": "ns/iter",
            "extra": "iterations: 24553\ncpu: 28487.895572842048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48022.69005206462,
            "unit": "ns/iter",
            "extra": "iterations: 14596\ncpu: 48021.82789805346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2034.9028503465029,
            "unit": "ns/iter",
            "extra": "iterations: 346414\ncpu: 2034.8978390018965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10763.208856667045,
            "unit": "ns/iter",
            "extra": "iterations: 64968\ncpu: 10763.054118950939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8389.754586383722,
            "unit": "ns/iter",
            "extra": "iterations: 83072\ncpu: 8389.594568567058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8330.297559459712,
            "unit": "ns/iter",
            "extra": "iterations: 83711\ncpu: 8330.27081267685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8320.391955407962,
            "unit": "ns/iter",
            "extra": "iterations: 84678\ncpu: 8320.159899855855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18159.03328054579,
            "unit": "ns/iter",
            "extra": "iterations: 38521\ncpu: 18158.973027699365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59665.2754237227,
            "unit": "ns/iter",
            "extra": "iterations: 11564\ncpu: 59664.380837080025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49334.50565451478,
            "unit": "ns/iter",
            "extra": "iterations: 14148\ncpu: 49334.3440769008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48642.83314778964,
            "unit": "ns/iter",
            "extra": "iterations: 14372\ncpu: 48641.49039799655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48636.428287121744,
            "unit": "ns/iter",
            "extra": "iterations: 14572\ncpu: 48636.26818556115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 28077.743998091446,
            "unit": "ns/iter",
            "extra": "iterations: 25117\ncpu: 28077.031492614693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47816.141457811646,
            "unit": "ns/iter",
            "extra": "iterations: 14803\ncpu: 47815.55090184384 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390795334,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 694.5343242513578,
            "unit": "ns/iter",
            "extra": "iterations: 1011049\ncpu: 694.535774230527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6342.447959136171,
            "unit": "ns/iter",
            "extra": "iterations: 129014\ncpu: 6342.367495000542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12280.0406403757,
            "unit": "ns/iter",
            "extra": "iterations: 67273\ncpu: 12279.93251378711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18314.35198548131,
            "unit": "ns/iter",
            "extra": "iterations: 46286\ncpu: 18313.580780365563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24476.974550767292,
            "unit": "ns/iter",
            "extra": "iterations: 34225\ncpu: 24476.88531775017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30244.906758899408,
            "unit": "ns/iter",
            "extra": "iterations: 27756\ncpu: 30244.383196425984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 37052.20021047097,
            "unit": "ns/iter",
            "extra": "iterations: 22806\ncpu: 37051.63114969745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42319.83443943349,
            "unit": "ns/iter",
            "extra": "iterations: 19739\ncpu: 42319.028319570374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48207.929231655835,
            "unit": "ns/iter",
            "extra": "iterations: 17310\ncpu: 48207.08261120742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 687.0366061711378,
            "unit": "ns/iter",
            "extra": "iterations: 1019910\ncpu: 687.0288554872483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 533.0167939035476,
            "unit": "ns/iter",
            "extra": "iterations: 1315001\ncpu: 533.0099368745728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 539.5846168997928,
            "unit": "ns/iter",
            "extra": "iterations: 1238736\ncpu: 539.5638780175922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 529.9810210072354,
            "unit": "ns/iter",
            "extra": "iterations: 1312978\ncpu: 529.9707992060786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 957.7951927884437,
            "unit": "ns/iter",
            "extra": "iterations: 693999\ncpu: 957.7693915985462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3001.489279748167,
            "unit": "ns/iter",
            "extra": "iterations: 268184\ncpu: 3001.3964293171807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14973.486921384621,
            "unit": "ns/iter",
            "extra": "iterations: 55931\ncpu: 14973.306395380021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11747.662519908996,
            "unit": "ns/iter",
            "extra": "iterations: 69693\ncpu: 11747.481095662431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11634.085376695846,
            "unit": "ns/iter",
            "extra": "iterations: 69738\ncpu: 11634.132037052968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10989.49856837557,
            "unit": "ns/iter",
            "extra": "iterations: 74391\ncpu: 10989.024209917901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41086.74708325044,
            "unit": "ns/iter",
            "extra": "iterations: 20228\ncpu: 41085.98477358118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 268314.4222702073,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 268303.67057372065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219206.1475000031,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 219200.22500000068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 215790.61673681592,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 215783.85739044324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215773.68858469668,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 215763.2363725246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 116843.78473895809,
            "unit": "ns/iter",
            "extra": "iterations: 7470\ncpu: 116838.66131191405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 210542.46046287002,
            "unit": "ns/iter",
            "extra": "iterations: 4148\ncpu: 210539.12729026013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5469.344520000163,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5469.25899999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28466.412346013065,
            "unit": "ns/iter",
            "extra": "iterations: 29548\ncpu: 28466.082306755136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22621.427156772774,
            "unit": "ns/iter",
            "extra": "iterations: 37162\ncpu: 22620.56401700663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21849.132228361228,
            "unit": "ns/iter",
            "extra": "iterations: 38010\ncpu: 21848.687187582207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21731.91204468564,
            "unit": "ns/iter",
            "extra": "iterations: 38133\ncpu: 21731.287860907873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 54401.98573382788,
            "unit": "ns/iter",
            "extra": "iterations: 15351\ncpu: 54399.902286495955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 294742.12880323915,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 294729.682217715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 232715.03437250975,
            "unit": "ns/iter",
            "extra": "iterations: 3753\ncpu: 232704.316546762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 228090.8062581495,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 228080.3389830509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 226272.20675215276,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 226261.63308034564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 124203.66979388402,
            "unit": "ns/iter",
            "extra": "iterations: 7035\ncpu: 124200.68230277198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 217940.1506918163,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 217930.69182390012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 886234.831999965,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 886196.4571428546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 482244.3400216911,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 482234.00216919475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 3146.11176579824,
            "unit": "ns/iter",
            "extra": "iterations: 258478\ncpu: 3146.042990119086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14897.95403942099,
            "unit": "ns/iter",
            "extra": "iterations: 55961\ncpu: 14897.521488179329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11609.00953946422,
            "unit": "ns/iter",
            "extra": "iterations: 71178\ncpu: 11608.70212706168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 11570.327099412985,
            "unit": "ns/iter",
            "extra": "iterations: 71651\ncpu: 11570.167897168147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10725.936517823255,
            "unit": "ns/iter",
            "extra": "iterations: 77061\ncpu: 10725.974228208888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39780.71691433376,
            "unit": "ns/iter",
            "extra": "iterations: 21467\ncpu: 39779.16802534129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 285018.5631288642,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 285011.7169750062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 219165.8061783656,
            "unit": "ns/iter",
            "extra": "iterations: 4014\ncpu: 219159.8903836568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 216628.56214619745,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 216625.86758552713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 214018.0833533506,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 214014.31659860627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 110704.2813906926,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 110699.2246123062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 204270.9295480762,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 204267.2537659338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 241.46854337914687,
            "unit": "ns/iter",
            "extra": "iterations: 2900391\ncpu: 241.45830682828736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1648.0460310872747,
            "unit": "ns/iter",
            "extra": "iterations: 421715\ncpu: 1647.9937872733994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1291.6097302955857,
            "unit": "ns/iter",
            "extra": "iterations: 542594\ncpu: 1291.5612778615223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1272.0215522714623,
            "unit": "ns/iter",
            "extra": "iterations: 551218\ncpu: 1272.0088966615838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 956.8152775345643,
            "unit": "ns/iter",
            "extra": "iterations: 730864\ncpu: 956.8191893430228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10889.839954912613,
            "unit": "ns/iter",
            "extra": "iterations: 64763\ncpu: 10889.55730895729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14599.357257643742,
            "unit": "ns/iter",
            "extra": "iterations: 47915\ncpu: 14598.850046958227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3321.8165403815556,
            "unit": "ns/iter",
            "extra": "iterations: 211954\ncpu: 3321.6914990988753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3296.884911832226,
            "unit": "ns/iter",
            "extra": "iterations: 212776\ncpu: 3296.733184193706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3266.2829825953622,
            "unit": "ns/iter",
            "extra": "iterations: 214310\ncpu: 3266.1984975036116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 6063.9526046375995,
            "unit": "ns/iter",
            "extra": "iterations: 116235\ncpu: 6063.629715662218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6223.437567438267,
            "unit": "ns/iter",
            "extra": "iterations: 113066\ncpu: 6223.073249252638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2025.462982456645,
            "unit": "ns/iter",
            "extra": "iterations: 346741\ncpu: 2025.405994676138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10561.36912015648,
            "unit": "ns/iter",
            "extra": "iterations: 65648\ncpu: 10561.3910553253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8390.654710188974,
            "unit": "ns/iter",
            "extra": "iterations: 83330\ncpu: 8390.58322332883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8442.311127423167,
            "unit": "ns/iter",
            "extra": "iterations: 83101\ncpu: 8442.016341560202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8285.405509531296,
            "unit": "ns/iter",
            "extra": "iterations: 84617\ncpu: 8285.121193140874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18610.595181043613,
            "unit": "ns/iter",
            "extra": "iterations: 37560\ncpu: 18609.882854099855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59479.94744897891,
            "unit": "ns/iter",
            "extra": "iterations: 11760\ncpu: 59478.299319727994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48347.20235865375,
            "unit": "ns/iter",
            "extra": "iterations: 14415\ncpu: 48345.41796739537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 48311.98530119158,
            "unit": "ns/iter",
            "extra": "iterations: 14559\ncpu: 48310.04189848121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 48000.568007661335,
            "unit": "ns/iter",
            "extra": "iterations: 14616\ncpu: 48000.80049261059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27883.26333187226,
            "unit": "ns/iter",
            "extra": "iterations: 25109\ncpu: 27883.3924090962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 47736.44276196119,
            "unit": "ns/iter",
            "extra": "iterations: 14859\ncpu: 47736.6175381924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2034.8646179911625,
            "unit": "ns/iter",
            "extra": "iterations: 342335\ncpu: 2034.8258285013326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10616.308941609019,
            "unit": "ns/iter",
            "extra": "iterations: 65883\ncpu: 10616.33198245358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8532.02000242865,
            "unit": "ns/iter",
            "extra": "iterations: 82340\ncpu: 8531.825358270444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8581.502904808005,
            "unit": "ns/iter",
            "extra": "iterations: 81761\ncpu: 8581.00683700046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8490.971814643655,
            "unit": "ns/iter",
            "extra": "iterations: 82738\ncpu: 8490.715269888078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18329.262091589466,
            "unit": "ns/iter",
            "extra": "iterations: 38105\ncpu: 18328.86235402159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59199.84213630101,
            "unit": "ns/iter",
            "extra": "iterations: 11871\ncpu: 59199.98315222007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48760.73933946365,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 48747.317447046145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48653.16072540902,
            "unit": "ns/iter",
            "extra": "iterations: 14447\ncpu: 48650.54336540505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48913.989740409714,
            "unit": "ns/iter",
            "extra": "iterations: 14523\ncpu: 48913.22729463629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27954.037790467388,
            "unit": "ns/iter",
            "extra": "iterations: 25218\ncpu: 27953.652153223655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47470.82545308663,
            "unit": "ns/iter",
            "extra": "iterations: 14953\ncpu: 47470.24008560164 ns\nthreads: 1"
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
        "date": 1702391760845,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 714.3542774529237,
            "unit": "ns/iter",
            "extra": "iterations: 978047\ncpu: 714.3354051492414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6360.229721072034,
            "unit": "ns/iter",
            "extra": "iterations: 127990\ncpu: 6360.0968825689515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12350.54508469502,
            "unit": "ns/iter",
            "extra": "iterations: 67595\ncpu: 12350.32472816037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18487.975856423163,
            "unit": "ns/iter",
            "extra": "iterations: 45188\ncpu: 18487.777728600515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24533.391553117628,
            "unit": "ns/iter",
            "extra": "iterations: 33906\ncpu: 24531.09774081282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29997.245946817482,
            "unit": "ns/iter",
            "extra": "iterations: 27941\ncpu: 29995.214917146848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36115.58126294002,
            "unit": "ns/iter",
            "extra": "iterations: 23184\ncpu: 36113.27639751552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41636.677812765374,
            "unit": "ns/iter",
            "extra": "iterations: 20007\ncpu: 41634.00809716601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 47624.655372370544,
            "unit": "ns/iter",
            "extra": "iterations: 17590\ncpu: 47623.507674815184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 677.7749213403496,
            "unit": "ns/iter",
            "extra": "iterations: 1030071\ncpu: 677.7466795978141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 527.0382195401471,
            "unit": "ns/iter",
            "extra": "iterations: 1325343\ncpu: 526.9951250355568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 533.4983780248716,
            "unit": "ns/iter",
            "extra": "iterations: 1308898\ncpu: 533.4620421148169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 517.7621796643743,
            "unit": "ns/iter",
            "extra": "iterations: 1313193\ncpu: 517.7355499153582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 997.4453430286596,
            "unit": "ns/iter",
            "extra": "iterations: 695044\ncpu: 997.4433273289154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3004.6338830326704,
            "unit": "ns/iter",
            "extra": "iterations: 267237\ncpu: 3004.47917017479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 15175.983219367672,
            "unit": "ns/iter",
            "extra": "iterations: 54110\ncpu: 15175.218998336732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11584.295389110299,
            "unit": "ns/iter",
            "extra": "iterations: 69813\ncpu: 11583.633420709593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11629.288244397158,
            "unit": "ns/iter",
            "extra": "iterations: 69788\ncpu: 11628.651057488403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11153.392266415603,
            "unit": "ns/iter",
            "extra": "iterations: 72308\ncpu: 11152.866902694006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41297.31528123383,
            "unit": "ns/iter",
            "extra": "iterations: 20090\ncpu: 41295.95818815323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 267982.1957516379,
            "unit": "ns/iter",
            "extra": "iterations: 3060\ncpu: 267978.0392156865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219698.67570962428,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 219688.09344385823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 221943.13153885523,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 221942.71203656666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 218541.02198350898,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 218528.22882837916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 117424.83583502461,
            "unit": "ns/iter",
            "extra": "iterations: 7395\ncpu: 117419.13455037192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 210041.124909225,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 210028.24981844562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5433.485440000254,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5433.477999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28620.67080068847,
            "unit": "ns/iter",
            "extra": "iterations: 28463\ncpu: 28618.863085409073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22500.12775628235,
            "unit": "ns/iter",
            "extra": "iterations: 36961\ncpu: 22498.42807283356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21422.55310183287,
            "unit": "ns/iter",
            "extra": "iterations: 38445\ncpu: 21421.610092339684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21221.50706337364,
            "unit": "ns/iter",
            "extra": "iterations: 38013\ncpu: 21220.650829979237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 55367.1650934152,
            "unit": "ns/iter",
            "extra": "iterations: 15361\ncpu: 55363.62867000846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 298153.7287671207,
            "unit": "ns/iter",
            "extra": "iterations: 2920\ncpu: 298123.1164383563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 230440.28935492205,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 230426.36049907046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 227850.78872870523,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 227825.79292267282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 225322.43158979432,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 225308.03916516347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 126977.66988334112,
            "unit": "ns/iter",
            "extra": "iterations: 6943\ncpu: 126966.5994526864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 216939.22639133566,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 216921.00226643242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 893150.9424326894,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 893096.8430826365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 504372.72120868054,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 504340.5929304442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 3114.802012429822,
            "unit": "ns/iter",
            "extra": "iterations: 260183\ncpu: 3114.732323018794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 14169.604392947542,
            "unit": "ns/iter",
            "extra": "iterations: 57911\ncpu: 14169.544646094946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 10940.944129522562,
            "unit": "ns/iter",
            "extra": "iterations: 76033\ncpu: 10940.796759301833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 11047.248184559852,
            "unit": "ns/iter",
            "extra": "iterations: 73949\ncpu: 11046.609149549016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10878.71212221324,
            "unit": "ns/iter",
            "extra": "iterations: 75671\ncpu: 10878.09068203139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39402.07086909789,
            "unit": "ns/iter",
            "extra": "iterations: 21321\ncpu: 39401.97457905341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 286528.84018114407,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 286508.7026852149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 218207.38455846018,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 218185.7918105572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 219239.17559669694,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 219225.4992693617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213520.483061195,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 213513.77041189367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 112521.26657282314,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 112520.07934476588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 207294.03075467015,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 207290.41873669255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 246.05947186558393,
            "unit": "ns/iter",
            "extra": "iterations: 2841663\ncpu: 246.05665766841526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1626.518909339181,
            "unit": "ns/iter",
            "extra": "iterations: 430528\ncpu: 1626.4716812843888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1349.3972070138257,
            "unit": "ns/iter",
            "extra": "iterations: 571503\ncpu: 1349.35634633588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1385.5499469914987,
            "unit": "ns/iter",
            "extra": "iterations: 525387\ncpu: 1385.5201974925174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 932.5988816742687,
            "unit": "ns/iter",
            "extra": "iterations: 749871\ncpu: 932.5873383555243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11431.94329156935,
            "unit": "ns/iter",
            "extra": "iterations: 61296\ncpu: 11431.92541111983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 14310.843626072432,
            "unit": "ns/iter",
            "extra": "iterations: 46651\ncpu: 14309.905468264344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3173.8671945078263,
            "unit": "ns/iter",
            "extra": "iterations: 218500\ncpu: 3173.862700228831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3132.1903107993576,
            "unit": "ns/iter",
            "extra": "iterations: 223424\ncpu: 3132.1156187338775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3103.57080740941,
            "unit": "ns/iter",
            "extra": "iterations: 226304\ncpu: 3103.567767251133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5870.711057925512,
            "unit": "ns/iter",
            "extra": "iterations: 119498\ncpu: 5870.5467873939315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5749.106300826462,
            "unit": "ns/iter",
            "extra": "iterations: 121984\ncpu: 5749.017903987412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1987.2116971817868,
            "unit": "ns/iter",
            "extra": "iterations: 351247\ncpu: 1987.134409688907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10450.389783544148,
            "unit": "ns/iter",
            "extra": "iterations: 67127\ncpu: 10450.23909902128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8310.30509356035,
            "unit": "ns/iter",
            "extra": "iterations: 84597\ncpu: 8310.29469130104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8336.091217544821,
            "unit": "ns/iter",
            "extra": "iterations: 83997\ncpu: 8335.904853744652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8207.80688296119,
            "unit": "ns/iter",
            "extra": "iterations: 85254\ncpu: 8207.689961761338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18356.50956755191,
            "unit": "ns/iter",
            "extra": "iterations: 37993\ncpu: 18355.73658305477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 59309.454193211095,
            "unit": "ns/iter",
            "extra": "iterations: 11614\ncpu: 59308.68779059714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 48679.9542529347,
            "unit": "ns/iter",
            "extra": "iterations: 14296\ncpu: 48679.22495802981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49154.927679062,
            "unit": "ns/iter",
            "extra": "iterations: 14408\ncpu: 49154.24069961095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49481.88175510263,
            "unit": "ns/iter",
            "extra": "iterations: 14267\ncpu: 49480.353262773984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28885.453050977874,
            "unit": "ns/iter",
            "extra": "iterations: 24697\ncpu: 28885.390938170407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48269.805581967594,
            "unit": "ns/iter",
            "extra": "iterations: 14726\ncpu: 48268.48431345951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2057.9623303006624,
            "unit": "ns/iter",
            "extra": "iterations: 341707\ncpu: 2057.9358924458797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10685.762481852107,
            "unit": "ns/iter",
            "extra": "iterations: 65435\ncpu: 10685.092076106072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8557.08936820261,
            "unit": "ns/iter",
            "extra": "iterations: 82479\ncpu: 8556.48225608956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8343.094494855457,
            "unit": "ns/iter",
            "extra": "iterations: 83867\ncpu: 8342.51731908867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8341.479894294092,
            "unit": "ns/iter",
            "extra": "iterations: 84006\ncpu: 8341.214913220532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18219.72149430577,
            "unit": "ns/iter",
            "extra": "iterations: 38466\ncpu: 18219.276763895476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 59077.39861322518,
            "unit": "ns/iter",
            "extra": "iterations: 11826\ncpu: 59073.549805513336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 49077.08447457177,
            "unit": "ns/iter",
            "extra": "iterations: 14312\ncpu: 49076.99832308511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48825.90527636218,
            "unit": "ns/iter",
            "extra": "iterations: 14347\ncpu: 48822.56917822476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 47849.03603233711,
            "unit": "ns/iter",
            "extra": "iterations: 14598\ncpu: 47844.04027949074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27712.18626558123,
            "unit": "ns/iter",
            "extra": "iterations: 25265\ncpu: 27710.453196120678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46496.06730449676,
            "unit": "ns/iter",
            "extra": "iterations: 15051\ncpu: 46492.811108896465 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396441855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 701.5790662327711,
            "unit": "ns/iter",
            "extra": "iterations: 1002027\ncpu: 701.5654268797149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6387.460574400681,
            "unit": "ns/iter",
            "extra": "iterations: 128064\ncpu: 6386.917478760621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12349.89385805351,
            "unit": "ns/iter",
            "extra": "iterations: 67617\ncpu: 12349.227265332687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18565.033323895317,
            "unit": "ns/iter",
            "extra": "iterations: 45913\ncpu: 18563.727048983947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24540.980013364282,
            "unit": "ns/iter",
            "extra": "iterations: 34423\ncpu: 24539.55204369173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30439.98485126302,
            "unit": "ns/iter",
            "extra": "iterations: 27263\ncpu: 30437.101566225312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36164.56264385199,
            "unit": "ns/iter",
            "extra": "iterations: 23027\ncpu: 36163.27789117125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42023.86489746598,
            "unit": "ns/iter",
            "extra": "iterations: 19896\ncpu: 42020.63228789704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48024.205323624265,
            "unit": "ns/iter",
            "extra": "iterations: 17582\ncpu: 48020.765555682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 693.3607157932238,
            "unit": "ns/iter",
            "extra": "iterations: 1018730\ncpu: 693.3190344841119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 532.8821829428975,
            "unit": "ns/iter",
            "extra": "iterations: 1315930\ncpu: 532.8624622890273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 539.551295517974,
            "unit": "ns/iter",
            "extra": "iterations: 1298554\ncpu: 539.5329728297788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 501.39092930265934,
            "unit": "ns/iter",
            "extra": "iterations: 1298974\ncpu: 501.37300669605315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 936.5299667103495,
            "unit": "ns/iter",
            "extra": "iterations: 748881\ncpu: 936.4650725549182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2992.998406855106,
            "unit": "ns/iter",
            "extra": "iterations: 268651\ncpu: 2992.866581550047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14689.43294552098,
            "unit": "ns/iter",
            "extra": "iterations: 55783\ncpu: 14688.474983417891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11585.275052243951,
            "unit": "ns/iter",
            "extra": "iterations: 70343\ncpu: 11584.847106321899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11447.957774612116,
            "unit": "ns/iter",
            "extra": "iterations: 71592\ncpu: 11447.165884456379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11126.269794642296,
            "unit": "ns/iter",
            "extra": "iterations: 73871\ncpu: 11125.769246388962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 41065.52000196102,
            "unit": "ns/iter",
            "extra": "iterations: 20398\ncpu: 41063.16305520159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 270863.84446535556,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 270852.1480087809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221818.23780487527,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 221805.43699187037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 221214.37404190082,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 221204.44557996932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 218243.8429503325,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 218232.26292022094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 116019.99263721435,
            "unit": "ns/iter",
            "extra": "iterations: 7470\ncpu: 116015.79651941122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206781.7749464083,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 206769.51655156017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5383.648110000081,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5383.320000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 28347.842164871316,
            "unit": "ns/iter",
            "extra": "iterations: 29138\ncpu: 28346.094447113825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22290.67306567394,
            "unit": "ns/iter",
            "extra": "iterations: 37610\ncpu: 22289.526721616592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21942.553085180025,
            "unit": "ns/iter",
            "extra": "iterations: 37826\ncpu: 21941.199175170503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21533.76673973247,
            "unit": "ns/iter",
            "extra": "iterations: 38322\ncpu: 21532.68879494814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 55206.93805603624,
            "unit": "ns/iter",
            "extra": "iterations: 15062\ncpu: 55204.18271145942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 290786.0592792198,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 290778.2755136395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 229939.19420289452,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 229924.8484848483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 230480.10146827722,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 230473.12532773986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 224121.88294573533,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 224108.37209302332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 124642.33826037028,
            "unit": "ns/iter",
            "extra": "iterations: 7036\ncpu: 124633.85446276295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 218702.50012483614,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 218687.86516854036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 900076.9079812167,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 900022.7230046943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 499176.83040271886,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 499150.5955757251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2982.555034408367,
            "unit": "ns/iter",
            "extra": "iterations: 263308\ncpu: 2976.5909125434973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 13873.914655187322,
            "unit": "ns/iter",
            "extra": "iterations: 59699\ncpu: 13873.272584130395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 11071.634747106227,
            "unit": "ns/iter",
            "extra": "iterations: 74458\ncpu: 11071.045421579953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 10890.854077365755,
            "unit": "ns/iter",
            "extra": "iterations: 76054\ncpu: 10890.313461487864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 10441.785727813065,
            "unit": "ns/iter",
            "extra": "iterations: 79203\ncpu: 10441.196671843252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 39883.85548719395,
            "unit": "ns/iter",
            "extra": "iterations: 20967\ncpu: 39881.69504459419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 284653.2646103866,
            "unit": "ns/iter",
            "extra": "iterations: 3080\ncpu: 284632.56493506447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 218264.51576072891,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 218255.44800198614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 216707.49292337292,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 216690.72718399295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 213767.29505813462,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 213761.94282945714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 111701.40371171306,
            "unit": "ns/iter",
            "extra": "iterations: 7867\ncpu: 111696.55523071048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 206706.29464495834,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 206700.94361877855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 243.22155725772336,
            "unit": "ns/iter",
            "extra": "iterations: 2885200\ncpu: 243.20892832385937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1658.549297643316,
            "unit": "ns/iter",
            "extra": "iterations: 422079\ncpu: 1658.5042136661614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1205.4123033775472,
            "unit": "ns/iter",
            "extra": "iterations: 578329\ncpu: 1205.3464377542903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1247.5404646562693,
            "unit": "ns/iter",
            "extra": "iterations: 578406\ncpu: 1247.4732281477086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 963.5019783389462,
            "unit": "ns/iter",
            "extra": "iterations: 725356\ncpu: 963.4334037355426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 11119.168735134159,
            "unit": "ns/iter",
            "extra": "iterations: 61801\ncpu: 11118.680927493098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 15013.886894037423,
            "unit": "ns/iter",
            "extra": "iterations: 46620\ncpu: 15013.481338481308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 3427.6891716638597,
            "unit": "ns/iter",
            "extra": "iterations: 205110\ncpu: 3427.5062161766646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 3436.17793716512,
            "unit": "ns/iter",
            "extra": "iterations: 203836\ncpu: 3436.0495692615914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 3426.8288516417356,
            "unit": "ns/iter",
            "extra": "iterations: 205354\ncpu: 3426.722635059431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5908.680204327401,
            "unit": "ns/iter",
            "extra": "iterations: 118829\ncpu: 5908.472679228121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 6409.877580849922,
            "unit": "ns/iter",
            "extra": "iterations: 108782\ncpu: 6409.619238476923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2010.4467335773936,
            "unit": "ns/iter",
            "extra": "iterations: 347827\ncpu: 2010.3686602822702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10634.102302767364,
            "unit": "ns/iter",
            "extra": "iterations: 65443\ncpu: 10633.50549333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8558.2070051548,
            "unit": "ns/iter",
            "extra": "iterations: 81283\ncpu: 8557.619674470654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8460.919151306161,
            "unit": "ns/iter",
            "extra": "iterations: 82574\ncpu: 8460.540848208786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8342.237280644129,
            "unit": "ns/iter",
            "extra": "iterations: 83711\ncpu: 8341.72211537308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18517.34561808577,
            "unit": "ns/iter",
            "extra": "iterations: 37689\ncpu: 18517.01026824807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 60830.66948790762,
            "unit": "ns/iter",
            "extra": "iterations: 11697\ncpu: 60826.81884243752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 50275.95968322517,
            "unit": "ns/iter",
            "extra": "iterations: 13890\ncpu: 50273.095752340036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 49940.464618448736,
            "unit": "ns/iter",
            "extra": "iterations: 14061\ncpu: 49937.764028163205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 49539.32459338247,
            "unit": "ns/iter",
            "extra": "iterations: 14264\ncpu: 49538.59366236712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 28350.05469066768,
            "unit": "ns/iter",
            "extra": "iterations: 24666\ncpu: 28348.04183896822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 48540.53146182828,
            "unit": "ns/iter",
            "extra": "iterations: 14605\ncpu: 48538.24032865536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2065.150388815635,
            "unit": "ns/iter",
            "extra": "iterations: 342193\ncpu: 2065.045749036361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11096.370014446798,
            "unit": "ns/iter",
            "extra": "iterations: 63684\ncpu: 11096.05395389735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8596.99944509576,
            "unit": "ns/iter",
            "extra": "iterations: 81095\ncpu: 8596.31666563906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8528.823079811751,
            "unit": "ns/iter",
            "extra": "iterations: 82557\ncpu: 8528.444589798673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8444.177707320827,
            "unit": "ns/iter",
            "extra": "iterations: 82951\ncpu: 8443.595616689285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18349.346409347454,
            "unit": "ns/iter",
            "extra": "iterations: 38085\ncpu: 18348.457397925402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 60810.8717597752,
            "unit": "ns/iter",
            "extra": "iterations: 11689\ncpu: 60809.222345795926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48850.00904121354,
            "unit": "ns/iter",
            "extra": "iterations: 14268\ncpu: 48845.79478553317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 48342.0093219159,
            "unit": "ns/iter",
            "extra": "iterations: 14482\ncpu: 48337.68125949389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 48495.524149400124,
            "unit": "ns/iter",
            "extra": "iterations: 14431\ncpu: 48494.12376134672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27861.893680681307,
            "unit": "ns/iter",
            "extra": "iterations: 25066\ncpu: 27859.92579589887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47186.892909995775,
            "unit": "ns/iter",
            "extra": "iterations: 14866\ncpu: 47185.32893851735 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}