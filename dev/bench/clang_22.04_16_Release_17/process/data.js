window.BENCHMARK_DATA = {
  "lastUpdate": 1705957587906,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-16 22.04 Release c++-17": [
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
        "date": 1702491021015,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1454.756399104993,
            "unit": "ns/iter",
            "extra": "iterations: 484013\ncpu: 1454.7144394881955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17448.502942546067,
            "unit": "ns/iter",
            "extra": "iterations: 47238\ncpu: 17447.36441000889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35840.74528301882,
            "unit": "ns/iter",
            "extra": "iterations: 23002\ncpu: 35840.43996174246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52704.227722770556,
            "unit": "ns/iter",
            "extra": "iterations: 15857\ncpu: 52704.28832692189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59147.95350000759,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59145.62000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73902.86719945648,
            "unit": "ns/iter",
            "extra": "iterations: 11762\ncpu: 73901.58136371367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88028.32122138533,
            "unit": "ns/iter",
            "extra": "iterations: 9825\ncpu: 88027.40966921125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102325.73813002312,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 102322.60774287798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120666.7667314681,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 120662.05220772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1207.6317878801574,
            "unit": "ns/iter",
            "extra": "iterations: 578126\ncpu: 1207.5756841934092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1009.183921024039,
            "unit": "ns/iter",
            "extra": "iterations: 693477\ncpu: 1009.132098108517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 983.9230949145699,
            "unit": "ns/iter",
            "extra": "iterations: 722566\ncpu: 983.8904681371667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 983.216965975947,
            "unit": "ns/iter",
            "extra": "iterations: 705235\ncpu: 983.2064489141917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1953.0535196788296,
            "unit": "ns/iter",
            "extra": "iterations: 359905\ncpu: 1953.0339950820348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5672.986790000323,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5672.755999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30037.987538485155,
            "unit": "ns/iter",
            "extra": "iterations: 27284\ncpu: 30036.570884034594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24078.742866076154,
            "unit": "ns/iter",
            "extra": "iterations: 35184\ncpu: 24077.509663483357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23147.755634771456,
            "unit": "ns/iter",
            "extra": "iterations: 35627\ncpu: 23147.16647486456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22625.446098519646,
            "unit": "ns/iter",
            "extra": "iterations: 35871\ncpu: 22625.02021131273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66006.9063040082,
            "unit": "ns/iter",
            "extra": "iterations: 13309\ncpu: 66007.15305432418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 592729.052999971,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592715.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 593740.4022758049,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 593714.4578313254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 595593.9815573745,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 595574.7267759574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 601883.4481558218,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 601859.7077244255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 353705.98947796907,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 353684.82395791076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 597915.085106405,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 597910.6382978726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2550684.55737697,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2550577.868852463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1173120.9013907122,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1173071.9342604296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3369324.670289607,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3369158.695652172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8799.172047341868,
            "unit": "ns/iter",
            "extra": "iterations: 96828\ncpu: 8798.839178749933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48057.053466269164,
            "unit": "ns/iter",
            "extra": "iterations: 17151\ncpu: 48055.53612034283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37829.49015623632,
            "unit": "ns/iter",
            "extra": "iterations: 22146\ncpu: 37828.190192359994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37186.4322285808,
            "unit": "ns/iter",
            "extra": "iterations: 22539\ncpu: 37185.864501530545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37473.43040656054,
            "unit": "ns/iter",
            "extra": "iterations: 22186\ncpu: 37471.86063283126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79137.49347708069,
            "unit": "ns/iter",
            "extra": "iterations: 11038\ncpu: 79134.94292444285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 661990.2520000096,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661982.100000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 507926.8999999158,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507897.50000000565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 507112.5289999827,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507113.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 509253.7499999707,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509234.2000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 374606.02161931206,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 374592.4120389984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 501699.19299992215,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501678.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2719305.026315737,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2719151.7543859766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1168588.3881335354,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1168562.2991347294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5395.8959999999925,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5395.84099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29695.302312159107,
            "unit": "ns/iter",
            "extra": "iterations: 27723\ncpu: 29694.340439346553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23666.42130090145,
            "unit": "ns/iter",
            "extra": "iterations: 35191\ncpu: 23665.215538063734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22700.950245600492,
            "unit": "ns/iter",
            "extra": "iterations: 36238\ncpu: 22700.41944919687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22834.816958500593,
            "unit": "ns/iter",
            "extra": "iterations: 36265\ncpu: 22834.09072108097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64583.95498583636,
            "unit": "ns/iter",
            "extra": "iterations: 13418\ncpu: 64581.957072589124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 614111.2640000301,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614103.2000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 611632.9834139582,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 611633.7249481718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 606320.1232687231,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 606298.8919667595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 613362.2608089161,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 613349.372384936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 355101.72012830334,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 355097.273456293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 600407.6351813534,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 600397.7412731017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 565.6739423643324,
            "unit": "ns/iter",
            "extra": "iterations: 1235208\ncpu: 565.6577677605688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3349.030868038576,
            "unit": "ns/iter",
            "extra": "iterations: 210509\ncpu: 3348.9632272254466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2632.5510357845487,
            "unit": "ns/iter",
            "extra": "iterations: 265451\ncpu: 2632.557421143651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2554.895264526026,
            "unit": "ns/iter",
            "extra": "iterations: 273489\ncpu: 2554.8080544372874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2046.1123712149406,
            "unit": "ns/iter",
            "extra": "iterations: 342917\ncpu: 2046.034754765729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17755.124415056354,
            "unit": "ns/iter",
            "extra": "iterations: 39320\ncpu: 17754.941505595027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32087.815799173957,
            "unit": "ns/iter",
            "extra": "iterations: 21710\ncpu: 32087.867342238573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7651.598656939348,
            "unit": "ns/iter",
            "extra": "iterations: 91433\ncpu: 7651.504380256545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7558.914326767948,
            "unit": "ns/iter",
            "extra": "iterations: 92561\ncpu: 7558.693186115075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7565.975266616653,
            "unit": "ns/iter",
            "extra": "iterations: 92830\ncpu: 7565.769686523688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15379.136968955685,
            "unit": "ns/iter",
            "extra": "iterations: 45806\ncpu: 15379.037680653004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14781.075760764668,
            "unit": "ns/iter",
            "extra": "iterations: 47518\ncpu: 14780.83463108713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4482.664012687921,
            "unit": "ns/iter",
            "extra": "iterations: 155741\ncpu: 4482.595462980196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22875.73798983517,
            "unit": "ns/iter",
            "extra": "iterations: 30495\ncpu: 22875.156583046362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18316.515016072575,
            "unit": "ns/iter",
            "extra": "iterations: 38259\ncpu: 18316.05373898939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18292.59850361022,
            "unit": "ns/iter",
            "extra": "iterations: 38359\ncpu: 18292.64579368596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18875.851405185018,
            "unit": "ns/iter",
            "extra": "iterations: 36899\ncpu: 18875.492560773684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46374.95215660468,
            "unit": "ns/iter",
            "extra": "iterations: 15070\ncpu: 46373.97478433907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161328.18636149232,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 161323.09668379027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134416.86973035336,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 134415.76148879575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132720.73700190752,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 132715.10436432605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 136261.55003776596,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 136258.855740182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81033.3404427054,
            "unit": "ns/iter",
            "extra": "iterations: 8674\ncpu: 81030.25132580144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133594.59343387443,
            "unit": "ns/iter",
            "extra": "iterations: 5239\ncpu: 133593.6438251577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4438.04681642001,
            "unit": "ns/iter",
            "extra": "iterations: 157103\ncpu: 4437.969994207603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22288.63883389767,
            "unit": "ns/iter",
            "extra": "iterations: 31318\ncpu: 22288.46031036428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17972.87977651873,
            "unit": "ns/iter",
            "extra": "iterations: 39019\ncpu: 17972.169968477127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17707.23154362314,
            "unit": "ns/iter",
            "extra": "iterations: 39634\ncpu: 17707.13024171167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18421.203951809253,
            "unit": "ns/iter",
            "extra": "iterations: 38514\ncpu: 18421.07285662359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 45396.67086400551,
            "unit": "ns/iter",
            "extra": "iterations: 15486\ncpu: 45395.89952214945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156684.7580935181,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 156677.2706834528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129978.99963030482,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129975.2865064681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129108.96466668317,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 129109.17777777955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129226.41799439542,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 129222.66166822956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80163.85041456202,
            "unit": "ns/iter",
            "extra": "iterations: 8684\ncpu: 80161.79180101442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128384.47822108078,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 128381.71669106846 ns\nthreads: 1"
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
        "date": 1702493666708,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1382.8677643940864,
            "unit": "ns/iter",
            "extra": "iterations: 511481\ncpu: 1382.828687673638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16888.343313331367,
            "unit": "ns/iter",
            "extra": "iterations: 47161\ncpu: 16888.06429040945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35847.04788793182,
            "unit": "ns/iter",
            "extra": "iterations: 23200\ncpu: 35846.46120689655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53464.234806279695,
            "unit": "ns/iter",
            "extra": "iterations: 15796\ncpu: 53463.25652063812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59671.58809999091,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59670.03000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74659.83610451494,
            "unit": "ns/iter",
            "extra": "iterations: 11788\ncpu: 74659.3145571768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88748.26077651896,
            "unit": "ns/iter",
            "extra": "iterations: 9813\ncpu: 88745.6741057781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104224.99077182163,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 104222.59108341327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 121122.81473683222,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 121120.39298245603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1203.1451698971002,
            "unit": "ns/iter",
            "extra": "iterations: 580940\ncpu: 1203.1493785933144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 980.1110630924154,
            "unit": "ns/iter",
            "extra": "iterations: 714999\ncpu: 980.0966155197411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 970.9618554901078,
            "unit": "ns/iter",
            "extra": "iterations: 721362\ncpu: 970.9512006454436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 980.6307282534577,
            "unit": "ns/iter",
            "extra": "iterations: 714092\ncpu: 980.6232250186263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1953.8736577810987,
            "unit": "ns/iter",
            "extra": "iterations: 358455\ncpu: 1953.8564115439876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5604.292740000574,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5604.317000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29611.686572015242,
            "unit": "ns/iter",
            "extra": "iterations: 27681\ncpu: 29610.95336151155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23756.07903740616,
            "unit": "ns/iter",
            "extra": "iterations: 34781\ncpu: 23755.5331934102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22804.5947368443,
            "unit": "ns/iter",
            "extra": "iterations: 35530\ncpu: 22804.204897269898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23051.031301347102,
            "unit": "ns/iter",
            "extra": "iterations: 35909\ncpu: 23050.6613940795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65345.78499814391,
            "unit": "ns/iter",
            "extra": "iterations: 13465\ncpu: 65342.88154474581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 598710.5130000146,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598666.3999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 595730.1152011125,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 595689.8432174508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 602109.2137457049,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 600821.0309278345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 602295.5826936098,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 602268.4577808809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 356663.4448529141,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 356636.96895424824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 597435.6122590115,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 597419.8347107421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2523737.7391305147,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2523670.652173916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1162437.7243107806,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1162421.553884713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3348841.8122740746,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3348791.3357400787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8857.638114134297,
            "unit": "ns/iter",
            "extra": "iterations: 95765\ncpu: 8857.38004490156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48033.109563019236,
            "unit": "ns/iter",
            "extra": "iterations: 17369\ncpu: 48033.31222292606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38199.74436466538,
            "unit": "ns/iter",
            "extra": "iterations: 22004\ncpu: 38198.26849663698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37311.63192283731,
            "unit": "ns/iter",
            "extra": "iterations: 22498\ncpu: 37311.472130856004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37390.72307417959,
            "unit": "ns/iter",
            "extra": "iterations: 22432\ncpu: 37390.419935806094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79310.85487239409,
            "unit": "ns/iter",
            "extra": "iterations: 11011\ncpu: 79309.58132776285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 635854.0820000371,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 635815.3999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 506827.08900001214,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506829.10000000446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 501198.90299993136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501201.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 505624.76699997205,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505621.4000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 369692.0329530926,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 369673.8910012667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 616762.9730687308,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 616723.8837703771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2699985.88921296,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2699856.2682215674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1170641.5478589023,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1170559.9496221629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5344.3080900001405,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5344.219000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29783.851934127564,
            "unit": "ns/iter",
            "extra": "iterations: 28359\ncpu: 29782.725060827153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23415.258115111905,
            "unit": "ns/iter",
            "extra": "iterations: 35705\ncpu: 23414.513373477064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22577.8323823487,
            "unit": "ns/iter",
            "extra": "iterations: 36804\ncpu: 22576.160199978156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22381.299425068377,
            "unit": "ns/iter",
            "extra": "iterations: 36874\ncpu: 22379.98047404678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64301.525730386325,
            "unit": "ns/iter",
            "extra": "iterations: 13486\ncpu: 64298.34643333845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 609225.2409999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609218.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 605839.7619708583,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 605795.1422623165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 607395.3725626369,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 607362.5348189408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 612926.7652846185,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 612904.9894588916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 351796.5643086712,
            "unit": "ns/iter",
            "extra": "iterations: 2488\ncpu: 351767.04180064314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 599294.4311172428,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 599251.8848526422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.4373194211313,
            "unit": "ns/iter",
            "extra": "iterations: 1293064\ncpu: 540.4072033557488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3294.768375829151,
            "unit": "ns/iter",
            "extra": "iterations: 218099\ncpu: 3294.608411776316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2667.6229087607276,
            "unit": "ns/iter",
            "extra": "iterations: 270892\ncpu: 2667.434623392351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2654.07805998307,
            "unit": "ns/iter",
            "extra": "iterations: 263874\ncpu: 2653.9173999711843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2065.937609174333,
            "unit": "ns/iter",
            "extra": "iterations: 338335\ncpu: 2065.81406002927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17584.275462553065,
            "unit": "ns/iter",
            "extra": "iterations: 39617\ncpu: 17583.582805361333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32518.525907341962,
            "unit": "ns/iter",
            "extra": "iterations: 21519\ncpu: 32516.17640224906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7681.559077746962,
            "unit": "ns/iter",
            "extra": "iterations: 91168\ncpu: 7681.207221832175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7570.63259352145,
            "unit": "ns/iter",
            "extra": "iterations: 92546\ncpu: 7570.403907246022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7652.372393898086,
            "unit": "ns/iter",
            "extra": "iterations: 91516\ncpu: 7651.964683771167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15339.39065747783,
            "unit": "ns/iter",
            "extra": "iterations: 45705\ncpu: 15338.455311234879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14659.272755912374,
            "unit": "ns/iter",
            "extra": "iterations: 47614\ncpu: 14658.365186709787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4450.710966223481,
            "unit": "ns/iter",
            "extra": "iterations: 157210\ncpu: 4450.349214426623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22779.91341395572,
            "unit": "ns/iter",
            "extra": "iterations: 30513\ncpu: 22777.897945137956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18250.129341568874,
            "unit": "ns/iter",
            "extra": "iterations: 38379\ncpu: 18249.081528961306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18153.759320004134,
            "unit": "ns/iter",
            "extra": "iterations: 38412\ncpu: 18152.421118400456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18703.059556455122,
            "unit": "ns/iter",
            "extra": "iterations: 37561\ncpu: 18702.188440137095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 47134.077042328194,
            "unit": "ns/iter",
            "extra": "iterations: 14836\ncpu: 47129.69129145329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159579.73167390004,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 159571.06645352626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133901.12643679403,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 133887.95019157114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132270.78046019262,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 132264.07016220083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132703.25345970743,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 132697.80094786728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82001.32879924828,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 81997.00984990587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132669.86940014377,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 132663.26879270945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4417.471440858186,
            "unit": "ns/iter",
            "extra": "iterations: 158128\ncpu: 4417.206946271296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22248.37245547277,
            "unit": "ns/iter",
            "extra": "iterations: 31440\ncpu: 22246.978371501184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17926.767277461353,
            "unit": "ns/iter",
            "extra": "iterations: 39184\ncpu: 17925.367496937746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17588.789509449263,
            "unit": "ns/iter",
            "extra": "iterations: 39731\ncpu: 17587.89106742851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17949.332485111772,
            "unit": "ns/iter",
            "extra": "iterations: 38119\ncpu: 17948.962459665752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 45087.70265737668,
            "unit": "ns/iter",
            "extra": "iterations: 15504\ncpu: 45087.86764705896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155697.0406794835,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 155693.54045596614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129124.79035524935,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 129125.43714338267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127218.46827133046,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 127215.70021881825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128501.45171339114,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 128501.92413413907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80542.76895680063,
            "unit": "ns/iter",
            "extra": "iterations: 8704\ncpu: 80538.7408088237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127874.5372887518,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 127865.35635561896 ns\nthreads: 1"
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
        "date": 1702504687704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1367.9804052177328,
            "unit": "ns/iter",
            "extra": "iterations: 507431\ncpu: 1367.9304181258144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16799.773610970195,
            "unit": "ns/iter",
            "extra": "iterations: 49225\ncpu: 16799.620111731845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35733.55228226724,
            "unit": "ns/iter",
            "extra": "iterations: 23354\ncpu: 35732.64965316433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52846.14999686606,
            "unit": "ns/iter",
            "extra": "iterations: 15967\ncpu: 52845.48130519194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59300.71550000093,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59297.86000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73862.74335387422,
            "unit": "ns/iter",
            "extra": "iterations: 11849\ncpu: 73861.3807072327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87515.69571819919,
            "unit": "ns/iter",
            "extra": "iterations: 9879\ncpu: 87513.13898167832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102263.26778194458,
            "unit": "ns/iter",
            "extra": "iterations: 8548\ncpu: 102262.07299953213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119339.62303954193,
            "unit": "ns/iter",
            "extra": "iterations: 7205\ncpu: 119333.89312977112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1194.1897561566682,
            "unit": "ns/iter",
            "extra": "iterations: 584761\ncpu: 1194.180528455215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 988.9844092235571,
            "unit": "ns/iter",
            "extra": "iterations: 707662\ncpu: 988.9681797242187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 934.221004834212,
            "unit": "ns/iter",
            "extra": "iterations: 637339\ncpu: 934.1744346415342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 936.2342739093235,
            "unit": "ns/iter",
            "extra": "iterations: 749328\ncpu: 936.2027042897085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1929.4386060002528,
            "unit": "ns/iter",
            "extra": "iterations: 367145\ncpu: 1929.3350038813019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5241.9287899999745,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5241.940000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 26863.71645711006,
            "unit": "ns/iter",
            "extra": "iterations: 30461\ncpu: 26861.80690062704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 21519.293228106297,
            "unit": "ns/iter",
            "extra": "iterations: 39280\ncpu: 21518.6456211813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21529.720184796675,
            "unit": "ns/iter",
            "extra": "iterations: 38529\ncpu: 21529.19359443534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21448.613861642552,
            "unit": "ns/iter",
            "extra": "iterations: 38538\ncpu: 21448.482017748738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65243.62568105427,
            "unit": "ns/iter",
            "extra": "iterations: 13582\ncpu: 65238.88970696514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 603028.8629999631,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602990.9999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 598164.446808546,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 598131.9835277967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 599662.600552871,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 599628.3344851427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 599874.7486263877,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 599849.3818681308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 351829.4991981029,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 351812.75060144416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 483356.4834275888,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 483341.7138237674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2530678.5722073237,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2530556.948228884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1145090.9128833886,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 1145052.269938649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3366896.3963633687,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3366672.363636357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8834.458262813298,
            "unit": "ns/iter",
            "extra": "iterations: 95718\ncpu: 8834.36762155497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47956.43150567424,
            "unit": "ns/iter",
            "extra": "iterations: 17527\ncpu: 47955.71974667658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37826.51186255377,
            "unit": "ns/iter",
            "extra": "iterations: 22002\ncpu: 37826.33851468054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37391.47863247653,
            "unit": "ns/iter",
            "extra": "iterations: 22347\ncpu: 37390.88915738114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37599.91168970611,
            "unit": "ns/iter",
            "extra": "iterations: 22353\ncpu: 37598.73395069998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79002.04097693243,
            "unit": "ns/iter",
            "extra": "iterations: 11055\ncpu: 79001.21212121219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 632955.005000099,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632952.699999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 505934.08200006705,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505930.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 503132.72300002153,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503136.099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 504595.98300005833,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504591.59999999765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 371865.35128310113,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 371856.2473706364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 619031.2110481665,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 619032.5779036828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2705563.088967919,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 2705541.9928825595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1165409.0762500856,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 1165370.6249999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5336.114809999799,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5335.863000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28953.19541403924,
            "unit": "ns/iter",
            "extra": "iterations: 28391\ncpu: 28952.74911063372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23030.657433421628,
            "unit": "ns/iter",
            "extra": "iterations: 35596\ncpu: 23029.624115069197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22541.86965299202,
            "unit": "ns/iter",
            "extra": "iterations: 36656\ncpu: 22541.294740288125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22651.996935010804,
            "unit": "ns/iter",
            "extra": "iterations: 36868\ncpu: 22651.44298578706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63732.88523144626,
            "unit": "ns/iter",
            "extra": "iterations: 13610\ncpu: 63733.05657604695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 614867.5430000593,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614847.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 608531.815513664,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 608511.5303983203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 602531.0588234587,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 602532.9411764671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 605061.8975777854,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 605045.4671280249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 352598.26916934195,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 352589.97603834077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 594901.1083505698,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 594896.6873706003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.4244106202776,
            "unit": "ns/iter",
            "extra": "iterations: 1293224\ncpu: 540.4262525285611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3324.988852272725,
            "unit": "ns/iter",
            "extra": "iterations: 210895\ncpu: 3324.968349178521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2588.316491209836,
            "unit": "ns/iter",
            "extra": "iterations: 270532\ncpu: 2588.2679313353115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2679.0702300945186,
            "unit": "ns/iter",
            "extra": "iterations: 261284\ncpu: 2679.043110178956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2068.5466421781357,
            "unit": "ns/iter",
            "extra": "iterations: 337570\ncpu: 2068.437361139927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17908.545989813258,
            "unit": "ns/iter",
            "extra": "iterations: 39063\ncpu: 17907.646622123324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31853.925876627076,
            "unit": "ns/iter",
            "extra": "iterations: 21788\ncpu: 31852.203047548934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7582.6651708777745,
            "unit": "ns/iter",
            "extra": "iterations: 92259\ncpu: 7582.322591833916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7527.826858471383,
            "unit": "ns/iter",
            "extra": "iterations: 92872\ncpu: 7527.836161598732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7558.085192653888,
            "unit": "ns/iter",
            "extra": "iterations: 92731\ncpu: 7558.023746104317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15301.58554285251,
            "unit": "ns/iter",
            "extra": "iterations: 45749\ncpu: 15301.200026230146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13602.53320186748,
            "unit": "ns/iter",
            "extra": "iterations: 51217\ncpu: 13601.888044985106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4494.26761324842,
            "unit": "ns/iter",
            "extra": "iterations: 155366\ncpu: 4494.157022772057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22544.732099682406,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22543.786066604476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18013.06841834189,
            "unit": "ns/iter",
            "extra": "iterations: 38820\ncpu: 18012.341576506948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17897.953094295357,
            "unit": "ns/iter",
            "extra": "iterations: 39185\ncpu: 17896.863595763636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18445.68357125992,
            "unit": "ns/iter",
            "extra": "iterations: 38037\ncpu: 18444.832662933462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46583.14133032397,
            "unit": "ns/iter",
            "extra": "iterations: 15064\ncpu: 46581.99017525207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157614.78996366635,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 157609.5367847399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132172.28579511965,
            "unit": "ns/iter",
            "extra": "iterations: 5301\ncpu: 132163.36540275408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131307.75276269985,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 131300.412062183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130069.29421737563,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 130067.26313806688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 80409.435812358,
            "unit": "ns/iter",
            "extra": "iterations: 8740\ncpu: 80406.39588100636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131457.9352599004,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 131451.1915931699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4419.287418497927,
            "unit": "ns/iter",
            "extra": "iterations: 158431\ncpu: 4419.173646571691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22284.962103270842,
            "unit": "ns/iter",
            "extra": "iterations: 31665\ncpu: 22284.41812726962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17532.71080357464,
            "unit": "ns/iter",
            "extra": "iterations: 39959\ncpu: 17531.74754122972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17324.416003558574,
            "unit": "ns/iter",
            "extra": "iterations: 40466\ncpu: 17323.585232046607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17947.60630829019,
            "unit": "ns/iter",
            "extra": "iterations: 39028\ncpu: 17946.712616582827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 45019.85802429311,
            "unit": "ns/iter",
            "extra": "iterations: 15559\ncpu: 45018.16954817115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154596.32039911975,
            "unit": "ns/iter",
            "extra": "iterations: 4510\ncpu: 154593.30376940026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128431.61218124766,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 128427.92148229691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127930.66105727051,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 127930.96762392705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128289.40448398275,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 128286.1219195842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80048.08001365779,
            "unit": "ns/iter",
            "extra": "iterations: 8786\ncpu: 80048.29273844743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129197.9208632993,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 129198.19221545703 ns\nthreads: 1"
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
        "date": 1705576337465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1397.73611193894,
            "unit": "ns/iter",
            "extra": "iterations: 486551\ncpu: 1397.641768283284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16900.309732888978,
            "unit": "ns/iter",
            "extra": "iterations: 49081\ncpu: 16899.616959719646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34857.76287198724,
            "unit": "ns/iter",
            "extra": "iterations: 23287\ncpu: 34857.56430626531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 54669.22007315017,
            "unit": "ns/iter",
            "extra": "iterations: 16131\ncpu: 54668.99138305127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58588.196799996695,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58588.54999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73189.80980571441,
            "unit": "ns/iter",
            "extra": "iterations: 11993\ncpu: 73189.26040190108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86893.42626425749,
            "unit": "ns/iter",
            "extra": "iterations: 9907\ncpu: 86893.4087009185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 101926.923895252,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 101922.92494739304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118148.12358932775,
            "unit": "ns/iter",
            "extra": "iterations: 7266\ncpu: 118148.00440407374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1184.936847544423,
            "unit": "ns/iter",
            "extra": "iterations: 590270\ncpu: 1184.9348603181613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 977.8522511122243,
            "unit": "ns/iter",
            "extra": "iterations: 719200\ncpu: 977.8583147942168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 968.1617945477642,
            "unit": "ns/iter",
            "extra": "iterations: 721452\ncpu: 968.1429949601653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 992.0628011045204,
            "unit": "ns/iter",
            "extra": "iterations: 706150\ncpu: 992.0341287261906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1944.7613032489205,
            "unit": "ns/iter",
            "extra": "iterations: 358857\ncpu: 1944.7403840527013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5412.1542200005015,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5412.187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30047.25777296072,
            "unit": "ns/iter",
            "extra": "iterations: 27660\ncpu: 30047.024584237177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23705.468514143548,
            "unit": "ns/iter",
            "extra": "iterations: 34714\ncpu: 23703.765051564205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22703.06682894206,
            "unit": "ns/iter",
            "extra": "iterations: 36152\ncpu: 22702.771630891748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22843.731029733954,
            "unit": "ns/iter",
            "extra": "iterations: 36320\ncpu: 22843.386563876647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65261.2533047785,
            "unit": "ns/iter",
            "extra": "iterations: 13541\ncpu: 65260.00295399139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 605739.7820000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605609.600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 593506.790964267,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 593498.0445043809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 589206.17623233,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 589205.536799459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 592587.2273972919,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 592573.9726027404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 351694.77170420636,
            "unit": "ns/iter",
            "extra": "iterations: 2488\ncpu: 351677.65273311967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 589788.16723783,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 589773.6120630562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2530583.530054613,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2530479.234972675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1169313.1345911592,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1169255.0943396243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3362594.0253622555,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3362517.753623186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9075.69934950195,
            "unit": "ns/iter",
            "extra": "iterations: 95004\ncpu: 9075.301039956219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48615.796757517084,
            "unit": "ns/iter",
            "extra": "iterations: 17024\ncpu: 48613.122650376055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37938.05407760695,
            "unit": "ns/iter",
            "extra": "iterations: 21802\ncpu: 37935.75818732251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37069.79208893622,
            "unit": "ns/iter",
            "extra": "iterations: 22399\ncpu: 37068.98075806971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36748.5017130162,
            "unit": "ns/iter",
            "extra": "iterations: 22475\ncpu: 36747.937708565034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80922.91589038343,
            "unit": "ns/iter",
            "extra": "iterations: 11057\ncpu: 80920.1772632719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 628235.0279999491,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628195.9000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 506120.7400000285,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506092.79999999754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 505206.6630000809,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505212.3000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 501913.23599995027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501893.7000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 366524.2810157837,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 366520.3164029984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 617065.1616090073,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 617054.410726885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2703453.017543936,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2703408.187134506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1184237.2681066436,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1184186.912325281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5399.860649999937,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5399.572000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29449.485480850984,
            "unit": "ns/iter",
            "extra": "iterations: 28273\ncpu: 29448.268666218635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23043.70969920575,
            "unit": "ns/iter",
            "extra": "iterations: 35539\ncpu: 23042.913419060802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22723.962895707282,
            "unit": "ns/iter",
            "extra": "iterations: 36896\ncpu: 22723.06212055502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22598.507134265317,
            "unit": "ns/iter",
            "extra": "iterations: 36584\ncpu: 22597.79411764695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64206.78958640788,
            "unit": "ns/iter",
            "extra": "iterations: 13540\ncpu: 64202.725258493054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 613199.915999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613174.3999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 611747.4083045154,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 611718.4083044983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 607274.1911357373,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 607245.221606646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 613187.0685595797,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 613171.0526315782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 350847.52286281,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 350833.04174950096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 596167.0389344593,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 596146.243169398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 545.8520548071817,
            "unit": "ns/iter",
            "extra": "iterations: 1304794\ncpu: 545.8490765592132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3310.044007159157,
            "unit": "ns/iter",
            "extra": "iterations: 211761\ncpu: 3310.06889842795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2489.9357092518385,
            "unit": "ns/iter",
            "extra": "iterations: 280958\ncpu: 2489.870372084075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2670.8193083013903,
            "unit": "ns/iter",
            "extra": "iterations: 261877\ncpu: 2670.816833857131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2048.0066027739126,
            "unit": "ns/iter",
            "extra": "iterations: 338797\ncpu: 2047.9859620952989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17663.989713186056,
            "unit": "ns/iter",
            "extra": "iterations: 39468\ncpu: 17663.927738927807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32169.258602325594,
            "unit": "ns/iter",
            "extra": "iterations: 21593\ncpu: 32169.161302274006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7611.222228303302,
            "unit": "ns/iter",
            "extra": "iterations: 91343\ncpu: 7611.121815574287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7553.797307235368,
            "unit": "ns/iter",
            "extra": "iterations: 92470\ncpu: 7553.765545582349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7562.293702666878,
            "unit": "ns/iter",
            "extra": "iterations: 92563\ncpu: 7562.338083251514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15308.552817671793,
            "unit": "ns/iter",
            "extra": "iterations: 45818\ncpu: 15308.280588415093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14427.966628452372,
            "unit": "ns/iter",
            "extra": "iterations: 47975\ncpu: 14427.831162063749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4457.007847962362,
            "unit": "ns/iter",
            "extra": "iterations: 156856\ncpu: 4456.9815627072085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22798.009196968906,
            "unit": "ns/iter",
            "extra": "iterations: 30771\ncpu: 22797.809625946542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18334.632836055254,
            "unit": "ns/iter",
            "extra": "iterations: 38476\ncpu: 18334.74893440071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17978.2519184559,
            "unit": "ns/iter",
            "extra": "iterations: 38703\ncpu: 17977.996537736224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18638.06361152776,
            "unit": "ns/iter",
            "extra": "iterations: 37336\ncpu: 18637.48392971941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46332.01743337888,
            "unit": "ns/iter",
            "extra": "iterations: 15086\ncpu: 46331.95678112221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158422.6637970123,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 158422.4286361555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129784.5711382119,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129784.09090909174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129357.54332595426,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 129355.89970501383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132016.76800907034,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132016.69502741363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81266.58186455732,
            "unit": "ns/iter",
            "extra": "iterations: 8624\ncpu: 81267.26576994399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131930.73935870736,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 131930.54565910308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4378.058112259319,
            "unit": "ns/iter",
            "extra": "iterations: 159863\ncpu: 4378.006793316786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22861.143286827828,
            "unit": "ns/iter",
            "extra": "iterations: 31252\ncpu: 22861.077691027578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17662.12136635389,
            "unit": "ns/iter",
            "extra": "iterations: 39492\ncpu: 17661.812518991228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17491.82667364955,
            "unit": "ns/iter",
            "extra": "iterations: 40092\ncpu: 17491.816322458293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18289.755547968234,
            "unit": "ns/iter",
            "extra": "iterations: 38077\ncpu: 18289.718202589585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44834.19899986936,
            "unit": "ns/iter",
            "extra": "iterations: 15598\ncpu: 44834.10052570788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154047.88658884898,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 154048.90993173377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127759.3084439554,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 127758.64675516183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127305.57473148951,
            "unit": "ns/iter",
            "extra": "iterations: 5493\ncpu: 127303.40433278756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128440.19941455634,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 128437.33991950247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80490.13074977293,
            "unit": "ns/iter",
            "extra": "iterations: 8696\ncpu: 80489.43192272334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129202.91511693492,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 129203.75621432457 ns\nthreads: 1"
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
        "date": 1705774150476,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1383.8524992346217,
            "unit": "ns/iter",
            "extra": "iterations: 499733\ncpu: 1383.833967338559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16953.897673462092,
            "unit": "ns/iter",
            "extra": "iterations: 48570\ncpu: 16953.831583281863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35876.89158185368,
            "unit": "ns/iter",
            "extra": "iterations: 23188\ncpu: 35876.51802656546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53312.08722109206,
            "unit": "ns/iter",
            "extra": "iterations: 15776\ncpu: 53310.94700811362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59170.61589999548,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59169.210000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74731.99441671642,
            "unit": "ns/iter",
            "extra": "iterations: 11821\ncpu: 74730.8349547416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88390.56472757537,
            "unit": "ns/iter",
            "extra": "iterations: 9764\ncpu: 88388.73412535842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104563.0064402809,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 104559.84777517561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119021.15337930997,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 119019.2413793104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1226.5974504387068,
            "unit": "ns/iter",
            "extra": "iterations: 577668\ncpu: 1226.5841279073784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 992.8437170203507,
            "unit": "ns/iter",
            "extra": "iterations: 709719\ncpu: 992.7822138057453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 962.0892368003475,
            "unit": "ns/iter",
            "extra": "iterations: 726494\ncpu: 962.0491015755136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 994.8735515183661,
            "unit": "ns/iter",
            "extra": "iterations: 703409\ncpu: 994.8263385882187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1916.2410787026568,
            "unit": "ns/iter",
            "extra": "iterations: 364549\ncpu: 1916.1725858526554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5401.69907999939,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5401.676000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29366.096984923777,
            "unit": "ns/iter",
            "extra": "iterations: 27860\ncpu: 29364.572864321603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23675.257725144056,
            "unit": "ns/iter",
            "extra": "iterations: 34789\ncpu: 23674.512058409284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22957.380713183265,
            "unit": "ns/iter",
            "extra": "iterations: 36232\ncpu: 22956.662618679653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22792.24250213999,
            "unit": "ns/iter",
            "extra": "iterations: 36177\ncpu: 22791.859468723254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65284.40013256506,
            "unit": "ns/iter",
            "extra": "iterations: 13578\ncpu: 65281.749889527186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 611282.3089999893,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611228.2000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 602015.1988912035,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 601990.7137907138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 595777.3209109586,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 595735.2657004851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 603797.7223776885,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 603769.3706293715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 354409.1835160028,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 354395.77750710526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 599367.6908213188,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 599323.8095238114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2529263.163043476,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2529186.684782612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1139403.9375765198,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1139384.944920442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3345636.599277771,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3345619.4945848305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8781.19874896592,
            "unit": "ns/iter",
            "extra": "iterations: 96720\ncpu: 8781.010132340762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48020.49084858229,
            "unit": "ns/iter",
            "extra": "iterations: 17429\ncpu: 48019.9667221299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38233.117141811774,
            "unit": "ns/iter",
            "extra": "iterations: 21888\ncpu: 38232.20942982465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37187.22022612584,
            "unit": "ns/iter",
            "extra": "iterations: 22377\ncpu: 37186.24033605957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36983.16840008879,
            "unit": "ns/iter",
            "extra": "iterations: 22595\ncpu: 36982.09780924989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78979.64195511407,
            "unit": "ns/iter",
            "extra": "iterations: 11007\ncpu: 78978.66812028729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 634775.2249999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 634754.1000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 507152.0789999795,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507144.50000000256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 500578.2560000398,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500563.2999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 503452.0749999274,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503442.899999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 368129.693851966,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 368125.5123379361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 610080.7345070491,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 610061.4788732368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2697670.8876080886,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2697502.5936599406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1172244.5698393688,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1172199.8763906092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5313.32930000076,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5313.074000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29356.51935737813,
            "unit": "ns/iter",
            "extra": "iterations: 27948\ncpu: 29355.302705023638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23102.97548607608,
            "unit": "ns/iter",
            "extra": "iterations: 35694\ncpu: 23102.59707513871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22404.32592694057,
            "unit": "ns/iter",
            "extra": "iterations: 36545\ncpu: 22404.07990149129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22597.450091989132,
            "unit": "ns/iter",
            "extra": "iterations: 36417\ncpu: 22597.193618365003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63925.65265796508,
            "unit": "ns/iter",
            "extra": "iterations: 13563\ncpu: 63923.80741723824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 614304.6949999871,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614296.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 604833.9613792858,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 604827.1034482768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 603328.7542779411,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 603312.3887748104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 608622.1095700336,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 608610.887656033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 346421.1049309593,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 346417.04142011836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 594353.8785617898,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 594339.6200814148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 542.8628213425518,
            "unit": "ns/iter",
            "extra": "iterations: 1291768\ncpu: 542.8470901895666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3234.554522221053,
            "unit": "ns/iter",
            "extra": "iterations: 216774\ncpu: 3234.455239096935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2728.192975251591,
            "unit": "ns/iter",
            "extra": "iterations: 258116\ncpu: 2728.115653427146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2634.476520527864,
            "unit": "ns/iter",
            "extra": "iterations: 265615\ncpu: 2634.3892475951975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2045.4007522416077,
            "unit": "ns/iter",
            "extra": "iterations: 342975\ncpu: 2045.3581164808018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17667.37356569236,
            "unit": "ns/iter",
            "extra": "iterations: 39479\ncpu: 17666.812735884767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32658.71766458754,
            "unit": "ns/iter",
            "extra": "iterations: 21478\ncpu: 32658.56224974383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7654.756562280485,
            "unit": "ns/iter",
            "extra": "iterations: 91584\ncpu: 7654.583770090891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7609.143771358992,
            "unit": "ns/iter",
            "extra": "iterations: 91882\ncpu: 7608.994144663875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7626.330546162514,
            "unit": "ns/iter",
            "extra": "iterations: 91969\ncpu: 7626.24580021522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15324.514398195806,
            "unit": "ns/iter",
            "extra": "iterations: 45214\ncpu: 15324.019109125455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14716.767199780561,
            "unit": "ns/iter",
            "extra": "iterations: 47457\ncpu: 14716.084033967592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4440.656102451672,
            "unit": "ns/iter",
            "extra": "iterations: 157576\ncpu: 4440.516322282578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22610.176934004645,
            "unit": "ns/iter",
            "extra": "iterations: 30972\ncpu: 22609.699083042866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18224.94100279533,
            "unit": "ns/iter",
            "extra": "iterations: 38273\ncpu: 18224.568233480586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17970.056897835846,
            "unit": "ns/iter",
            "extra": "iterations: 38947\ncpu: 17969.697280920165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18640.447715819548,
            "unit": "ns/iter",
            "extra": "iterations: 37497\ncpu: 18639.74984665427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46657.632369639214,
            "unit": "ns/iter",
            "extra": "iterations: 14977\ncpu: 46655.94578353477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157850.99279280283,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 157844.39189189347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132838.20000001008,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 132833.66317792758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132423.6290840273,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 132421.9641170899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132175.58521327627,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 132172.39810426376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 80808.64242495071,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 80806.42308587479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132684.5410984759,
            "unit": "ns/iter",
            "extra": "iterations: 5280\ncpu: 132678.93939393727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4398.523167019118,
            "unit": "ns/iter",
            "extra": "iterations: 158976\ncpu: 4398.397871376855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22270.599974499644,
            "unit": "ns/iter",
            "extra": "iterations: 31373\ncpu: 22269.502438402298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17907.882443138686,
            "unit": "ns/iter",
            "extra": "iterations: 39130\ncpu: 17907.147968310703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17617.276894036546,
            "unit": "ns/iter",
            "extra": "iterations: 39730\ncpu: 17616.652403725093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18073.92719148727,
            "unit": "ns/iter",
            "extra": "iterations: 38718\ncpu: 18073.573015135153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44827.09335554879,
            "unit": "ns/iter",
            "extra": "iterations: 15607\ncpu: 44824.841417313095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156090.27943799715,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 156083.0508474562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129569.71692875783,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 129566.27197039803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128229.24514473563,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 128225.15573470066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129695.1038383105,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 129693.491563138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 79877.54844982913,
            "unit": "ns/iter",
            "extra": "iterations: 8741\ncpu: 79873.58425809312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129248.89751610148,
            "unit": "ns/iter",
            "extra": "iterations: 5435\ncpu: 129245.18859245616 ns\nthreads: 1"
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
        "date": 1705775574422,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1413.587840851033,
            "unit": "ns/iter",
            "extra": "iterations: 493324\ncpu: 1413.5318776301176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16787.98477784892,
            "unit": "ns/iter",
            "extra": "iterations: 49336\ncpu: 16787.767553105237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35601.49186295479,
            "unit": "ns/iter",
            "extra": "iterations: 23350\ncpu: 35599.837259100634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52856.18702505783,
            "unit": "ns/iter",
            "extra": "iterations: 15923\ncpu: 52855.353890598475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59326.32379999632,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59324.25000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74026.6141970084,
            "unit": "ns/iter",
            "extra": "iterations: 11918\ncpu: 74026.49773451922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87674.43280251697,
            "unit": "ns/iter",
            "extra": "iterations: 9859\ncpu: 87672.3501369307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103343.67276350285,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 103342.30273185599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119509.36581057833,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 119505.7072971872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1201.7478583298291,
            "unit": "ns/iter",
            "extra": "iterations: 556108\ncpu: 1201.7475022837305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 978.6447774683108,
            "unit": "ns/iter",
            "extra": "iterations: 714797\ncpu: 978.6217625423718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 969.4204409600666,
            "unit": "ns/iter",
            "extra": "iterations: 726052\ncpu: 969.3999878796549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 992.7695610972904,
            "unit": "ns/iter",
            "extra": "iterations: 700702\ncpu: 992.7509840131755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1953.921570109153,
            "unit": "ns/iter",
            "extra": "iterations: 357351\ncpu: 1953.8229919602852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5571.132090000219,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5571.126999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29261.298458189503,
            "unit": "ns/iter",
            "extra": "iterations: 27565\ncpu: 29259.71340467987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23373.14550061457,
            "unit": "ns/iter",
            "extra": "iterations: 35127\ncpu: 23372.89834030803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22651.79330789563,
            "unit": "ns/iter",
            "extra": "iterations: 36431\ncpu: 22650.904449507245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22758.535719207357,
            "unit": "ns/iter",
            "extra": "iterations: 36297\ncpu: 22757.933162520236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65274.578014184306,
            "unit": "ns/iter",
            "extra": "iterations: 13536\ncpu: 65271.23965721046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 607450.1939999664,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607432.5000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 604271.2015182584,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 604249.6894409958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 593688.8774238739,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 593624.2382271467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 603067.1899791266,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 603024.3562978449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 353032.26639998687,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 353013.7999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 595467.866666624,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 595419.863945578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2549106.5628413283,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2548933.8797814236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1145103.019851102,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1145078.5359801494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3344619.6557971574,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3344551.086956517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8612.249689618042,
            "unit": "ns/iter",
            "extra": "iterations: 98266\ncpu: 8612.069281338408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48018.75285149099,
            "unit": "ns/iter",
            "extra": "iterations: 17447\ncpu: 48018.63357597279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37603.080876043896,
            "unit": "ns/iter",
            "extra": "iterations: 22145\ncpu: 37601.83337096417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36964.60619331751,
            "unit": "ns/iter",
            "extra": "iterations: 22605\ncpu: 36962.96836982976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36986.41916837989,
            "unit": "ns/iter",
            "extra": "iterations: 22318\ncpu: 36985.02105923482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78799.31683979688,
            "unit": "ns/iter",
            "extra": "iterations: 10974\ncpu: 78794.45963185717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 633710.5910000673,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633677.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 507378.86299998534,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507372.00000000367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 622707.571529734,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 622664.3059490081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 502302.64699996496,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502292.0999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 366674.05648533005,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 366650.2092050215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 619074.8924274553,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 619028.3793347457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2706755.8746352587,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2706534.1107871677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1154120.7001238242,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1154006.6914498117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5351.448370000753,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5351.375000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29090.666629360545,
            "unit": "ns/iter",
            "extra": "iterations: 26805\ncpu: 29090.2630106323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23044.687931421344,
            "unit": "ns/iter",
            "extra": "iterations: 35928\ncpu: 23044.257960365183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22479.51427721821,
            "unit": "ns/iter",
            "extra": "iterations: 36982\ncpu: 22478.543615812963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22504.705599694702,
            "unit": "ns/iter",
            "extra": "iterations: 36627\ncpu: 22504.392934174273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64321.304430605116,
            "unit": "ns/iter",
            "extra": "iterations: 13655\ncpu: 64319.32625411946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 628178.7129998974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628145.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 605481.9171886209,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 605465.9011830166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 605887.3040446388,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 605871.1297071159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 609162.904628297,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 609143.8990182356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 353809.5686195812,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 353804.4141252018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 603030.2449687537,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 603022.9701596103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 556.8760282860052,
            "unit": "ns/iter",
            "extra": "iterations: 1260836\ncpu: 556.8484719662155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3273.426061493581,
            "unit": "ns/iter",
            "extra": "iterations: 213779\ncpu: 3273.3706304173975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2668.6696118017558,
            "unit": "ns/iter",
            "extra": "iterations: 289517\ncpu: 2668.604606983358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2604.587809767047,
            "unit": "ns/iter",
            "extra": "iterations: 267903\ncpu: 2604.5064818236524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2091.31563166233,
            "unit": "ns/iter",
            "extra": "iterations: 335844\ncpu: 2091.225985874403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17777.543588829558,
            "unit": "ns/iter",
            "extra": "iterations: 39322\ncpu: 17777.264635572883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33097.95578263394,
            "unit": "ns/iter",
            "extra": "iterations: 21236\ncpu: 33096.68958372555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7787.530096655759,
            "unit": "ns/iter",
            "extra": "iterations: 90010\ncpu: 7787.372514165147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7689.57631768805,
            "unit": "ns/iter",
            "extra": "iterations: 91486\ncpu: 7689.472706206521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7647.972945563124,
            "unit": "ns/iter",
            "extra": "iterations: 91704\ncpu: 7647.683852394711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15441.159619005319,
            "unit": "ns/iter",
            "extra": "iterations: 45145\ncpu: 15440.505039317706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14660.96716530717,
            "unit": "ns/iter",
            "extra": "iterations: 47663\ncpu: 14659.50947275679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4497.616805785575,
            "unit": "ns/iter",
            "extra": "iterations: 156101\ncpu: 4497.346589707901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22782.718562874015,
            "unit": "ns/iter",
            "extra": "iterations: 30728\ncpu: 22780.63329861988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18335.592079053076,
            "unit": "ns/iter",
            "extra": "iterations: 38152\ncpu: 18334.517194380485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18152.410103052265,
            "unit": "ns/iter",
            "extra": "iterations: 38622\ncpu: 18151.2402257781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18719.423488115717,
            "unit": "ns/iter",
            "extra": "iterations: 37321\ncpu: 18718.217625465793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45858.819083919756,
            "unit": "ns/iter",
            "extra": "iterations: 15217\ncpu: 45854.22225142905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160290.98967889982,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 160282.4541284397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133075.23763318118,
            "unit": "ns/iter",
            "extra": "iterations: 5256\ncpu: 133069.14003044186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132052.12995097763,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 132040.32440588504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133142.33250998182,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 133142.06726201865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81560.68926158764,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81553.83181924079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133508.00838095113,
            "unit": "ns/iter",
            "extra": "iterations: 5250\ncpu: 133498.91428571308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4398.004849009645,
            "unit": "ns/iter",
            "extra": "iterations: 159414\ncpu: 4397.867815875664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22191.493834205572,
            "unit": "ns/iter",
            "extra": "iterations: 31545\ncpu: 22190.702171501205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17607.597607437958,
            "unit": "ns/iter",
            "extra": "iterations: 39372\ncpu: 17604.327948795937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17616.964618297454,
            "unit": "ns/iter",
            "extra": "iterations: 40162\ncpu: 17616.199392460254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17845.848201476132,
            "unit": "ns/iter",
            "extra": "iterations: 39032\ncpu: 17844.83244517303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 45057.84232204816,
            "unit": "ns/iter",
            "extra": "iterations: 15538\ncpu: 45056.551679752534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153644.8502212356,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 153638.93805309606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129113.59749586196,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 129109.46418707463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128183.60122245282,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 128180.62604185783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129341.9957658305,
            "unit": "ns/iter",
            "extra": "iterations: 5432\ncpu: 129337.94182621482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 79455.59197096938,
            "unit": "ns/iter",
            "extra": "iterations: 8818\ncpu: 79453.83306872429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128610.04023516651,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 128604.13374977131 ns\nthreads: 1"
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
        "date": 1705779143926,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1338.5378775394313,
            "unit": "ns/iter",
            "extra": "iterations: 521866\ncpu: 1338.4684957441182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16810.321098702843,
            "unit": "ns/iter",
            "extra": "iterations: 49695\ncpu: 16809.453667370963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35542.287393803614,
            "unit": "ns/iter",
            "extra": "iterations: 23306\ncpu: 35541.294087359485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53027.10226063328,
            "unit": "ns/iter",
            "extra": "iterations: 15969\ncpu: 53024.591395829404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59036.5127000041,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59034.28000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73968.44971665616,
            "unit": "ns/iter",
            "extra": "iterations: 11823\ncpu: 73964.84817728151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88052.50355908246,
            "unit": "ns/iter",
            "extra": "iterations: 9834\ncpu: 88049.13565182018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102728.21290775994,
            "unit": "ns/iter",
            "extra": "iterations: 8553\ncpu: 102723.67590319194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119954.72707121268,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 119951.44084233862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1177.7364414190115,
            "unit": "ns/iter",
            "extra": "iterations: 597002\ncpu: 1177.6736091336354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 941.4790618425006,
            "unit": "ns/iter",
            "extra": "iterations: 737147\ncpu: 941.4443794792626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 935.4259618659776,
            "unit": "ns/iter",
            "extra": "iterations: 748675\ncpu: 935.4179049654391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 951.472073521401,
            "unit": "ns/iter",
            "extra": "iterations: 734697\ncpu: 951.4625757284985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1902.5315341678572,
            "unit": "ns/iter",
            "extra": "iterations: 369060\ncpu: 1902.5242507993319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5533.9895999998125,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5534.011999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29411.31905486201,
            "unit": "ns/iter",
            "extra": "iterations: 28271\ncpu: 29410.615117965423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23263.345624856072,
            "unit": "ns/iter",
            "extra": "iterations: 35336\ncpu: 23263.162214172506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23007.02082107352,
            "unit": "ns/iter",
            "extra": "iterations: 35685\ncpu: 23006.672271262407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22352.535426306218,
            "unit": "ns/iter",
            "extra": "iterations: 36089\ncpu: 22352.473052730726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65319.22472245054,
            "unit": "ns/iter",
            "extra": "iterations: 13421\ncpu: 65317.68869681851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 597474.0580001025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597476.4000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 589803.7277701425,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 589791.8604651173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 592593.5385140331,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 592578.9366053182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 595013.0368852174,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 595005.5327868839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 346615.5685339756,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 346604.13190305955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 582954.7264150982,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 582927.6954177907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2516629.0790189286,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2516589.3732969994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1121152.6493976163,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1121139.8795180733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3337063.6281590667,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3337036.4620938636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8357.097163980481,
            "unit": "ns/iter",
            "extra": "iterations: 100634\ncpu: 8356.816781604633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46142.599314685285,
            "unit": "ns/iter",
            "extra": "iterations: 17802\ncpu: 46142.832266037585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36148.21344457425,
            "unit": "ns/iter",
            "extra": "iterations: 23013\ncpu: 36147.26024420972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35491.70972104796,
            "unit": "ns/iter",
            "extra": "iterations: 23660\ncpu: 35490.76923076928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35067.48395823602,
            "unit": "ns/iter",
            "extra": "iterations: 23657\ncpu: 35067.04992179904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78714.67803338052,
            "unit": "ns/iter",
            "extra": "iterations: 11085\ncpu: 78713.73928732525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 624080.4610000623,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624069.200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 503408.5760000835,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503412.0000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 620596.3930099899,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 620561.9828816004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 622770.3704496475,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 622757.9586009985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 368171.6300505161,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 368167.00336700387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 612686.4602392141,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 612666.0098522159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2705784.4767441987,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2705700.872093017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1165476.0877862568,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1165433.460559797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5282.7150600001005,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5282.755999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29223.220758295738,
            "unit": "ns/iter",
            "extra": "iterations: 27931\ncpu: 29222.831262754633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23290.96776299105,
            "unit": "ns/iter",
            "extra": "iterations: 35239\ncpu: 23290.768750532017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22454.276027399654,
            "unit": "ns/iter",
            "extra": "iterations: 36500\ncpu: 22453.854794520696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22027.09462121628,
            "unit": "ns/iter",
            "extra": "iterations: 37053\ncpu: 22026.993765687123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64367.50732748806,
            "unit": "ns/iter",
            "extra": "iterations: 13579\ncpu: 64365.512924368544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 610613.4369999835,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610575.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 607589.5456431299,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 607576.4177040092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 604884.256357423,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 604856.082474228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 606713.0847107292,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 606707.3691460049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 347534.3932363149,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 347530.63311049785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 595271.6061016363,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 595268.88135593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 537.774375816844,
            "unit": "ns/iter",
            "extra": "iterations: 1306828\ncpu: 537.7651075734548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3217.6708070827176,
            "unit": "ns/iter",
            "extra": "iterations: 217611\ncpu: 3217.648004926192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2473.416210935394,
            "unit": "ns/iter",
            "extra": "iterations: 272273\ncpu: 2473.303632750947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2633.5541869054687,
            "unit": "ns/iter",
            "extra": "iterations: 266199\ncpu: 2633.4742053877108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2053.908621040128,
            "unit": "ns/iter",
            "extra": "iterations: 339553\ncpu: 2053.8372507384756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17836.636553232736,
            "unit": "ns/iter",
            "extra": "iterations: 39318\ncpu: 17836.520168879462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31940.786286445265,
            "unit": "ns/iter",
            "extra": "iterations: 21847\ncpu: 31938.93898475789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7506.952651290803,
            "unit": "ns/iter",
            "extra": "iterations: 93181\ncpu: 7506.91557291724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7476.371968806385,
            "unit": "ns/iter",
            "extra": "iterations: 93610\ncpu: 7475.942741160079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7537.7189038078495,
            "unit": "ns/iter",
            "extra": "iterations: 92648\ncpu: 7537.446032294248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15310.681401406848,
            "unit": "ns/iter",
            "extra": "iterations: 45697\ncpu: 15310.215112589503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14483.550354198262,
            "unit": "ns/iter",
            "extra": "iterations: 48278\ncpu: 14483.176602178984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4701.81359970421,
            "unit": "ns/iter",
            "extra": "iterations: 156974\ncpu: 4701.647406576876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22494.662120433877,
            "unit": "ns/iter",
            "extra": "iterations: 31088\ncpu: 22493.476582604137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 17951.573332308548,
            "unit": "ns/iter",
            "extra": "iterations: 38946\ncpu: 17950.480152005195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18964.277632789523,
            "unit": "ns/iter",
            "extra": "iterations: 39084\ncpu: 18963.383993450032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18484.660089115812,
            "unit": "ns/iter",
            "extra": "iterations: 37704\ncpu: 18484.166136219028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51499.43669999857,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51496.4599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156885.6340263687,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156883.45629331647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131958.31955871085,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 131957.59162303686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130142.26437640174,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 130139.4884241971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131450.85026139586,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 131449.7199402534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81148.36918268222,
            "unit": "ns/iter",
            "extra": "iterations: 8638\ncpu: 81147.30261634596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132119.33987917,
            "unit": "ns/iter",
            "extra": "iterations: 5296\ncpu: 132117.54154078677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4365.859663397274,
            "unit": "ns/iter",
            "extra": "iterations: 159773\ncpu: 4365.782078323613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22127.800772056366,
            "unit": "ns/iter",
            "extra": "iterations: 31863\ncpu: 22127.577440918853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17614.01769510151,
            "unit": "ns/iter",
            "extra": "iterations: 39672\ncpu: 17613.079753982503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 16987.773934712615,
            "unit": "ns/iter",
            "extra": "iterations: 40130\ncpu: 16986.26962372316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17551.20383420535,
            "unit": "ns/iter",
            "extra": "iterations: 39591\ncpu: 17549.667853805113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44876.17588133234,
            "unit": "ns/iter",
            "extra": "iterations: 15573\ncpu: 44874.35304694037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153202.85380244395,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 153190.18793706183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127331.76277968918,
            "unit": "ns/iter",
            "extra": "iterations: 5497\ncpu: 127324.90449336021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126802.18915488357,
            "unit": "ns/iter",
            "extra": "iterations: 5514\ncpu: 126795.55676459736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127089.89945355174,
            "unit": "ns/iter",
            "extra": "iterations: 5490\ncpu: 127076.46630236677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 79882.34375355953,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 79881.4489446663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127784.36278814453,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 127770.63666300841 ns\nthreads: 1"
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
        "date": 1705954323321,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1411.4661763431664,
            "unit": "ns/iter",
            "extra": "iterations: 519385\ncpu: 1411.4040644223458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16717.598691296876,
            "unit": "ns/iter",
            "extra": "iterations: 49209\ncpu: 16716.822126033858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35289.85128771136,
            "unit": "ns/iter",
            "extra": "iterations: 23569\ncpu: 35288.930374644675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52274.97307502483,
            "unit": "ns/iter",
            "extra": "iterations: 16156\ncpu: 52271.762812577355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58689.12079999973,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58687.22999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73778.94972963416,
            "unit": "ns/iter",
            "extra": "iterations: 11836\ncpu: 73776.6137208517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87217.22100392813,
            "unit": "ns/iter",
            "extra": "iterations: 9941\ncpu: 87212.3227039533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102064.67836256143,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 102058.03508771933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 121124.50055126601,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 121115.51819184133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1219.9424840049385,
            "unit": "ns/iter",
            "extra": "iterations: 584081\ncpu: 1219.8806329943966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 949.3900278938514,
            "unit": "ns/iter",
            "extra": "iterations: 723097\ncpu: 949.3687568887697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 949.2871466743918,
            "unit": "ns/iter",
            "extra": "iterations: 743613\ncpu: 949.2328670961916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 949.3928544800725,
            "unit": "ns/iter",
            "extra": "iterations: 724258\ncpu: 949.3803313183989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1906.5605345015172,
            "unit": "ns/iter",
            "extra": "iterations: 367146\ncpu: 1906.5137574697803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5239.138150000144,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5238.829999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27599.529503000424,
            "unit": "ns/iter",
            "extra": "iterations: 30302\ncpu: 27598.709656128318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 21850.165597977477,
            "unit": "ns/iter",
            "extra": "iterations: 37585\ncpu: 21849.120659837718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21218.806597670504,
            "unit": "ns/iter",
            "extra": "iterations: 38650\ncpu: 21218.005174644266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21380.276728576984,
            "unit": "ns/iter",
            "extra": "iterations: 38442\ncpu: 21379.11398990685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64560.12731803313,
            "unit": "ns/iter",
            "extra": "iterations: 13643\ncpu: 64557.003591585344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 585913.1949999891,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585854.9999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 590348.5826558046,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 590312.3983739838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 596654.0589444229,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 596611.8574365992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 592126.9670781418,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 592079.9725651597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 349241.46866376646,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 349220.7725660233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 590385.9700476857,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 590348.1279782177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2529572.5230353866,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2529464.227642272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1136588.0292682904,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 1136552.804878048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3357668.31884061,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3357448.9130434785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8606.675526093004,
            "unit": "ns/iter",
            "extra": "iterations: 96846\ncpu: 8606.401916444656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47653.11734839708,
            "unit": "ns/iter",
            "extra": "iterations: 17529\ncpu: 47649.620628672536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37796.605682637535,
            "unit": "ns/iter",
            "extra": "iterations: 22208\ncpu: 37794.49297550438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37167.90346989338,
            "unit": "ns/iter",
            "extra": "iterations: 22335\ncpu: 37166.50548466535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36767.30851907541,
            "unit": "ns/iter",
            "extra": "iterations: 22702\ncpu: 36766.28490881842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78476.65063496507,
            "unit": "ns/iter",
            "extra": "iterations: 11103\ncpu: 78471.96253264902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 631301.8619999867,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631255.1999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 504181.3779999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504138.0999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 500721.26999998547,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500698.39999999746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 501883.3649999124,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501862.899999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 368281.90151519683,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 368260.4377104356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 611666.1576734686,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 611630.763840224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2674387.224137992,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2674258.333333347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1168511.5399002694,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 1168428.6783042387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5460.549580000134,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5460.18200000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29686.647646679947,
            "unit": "ns/iter",
            "extra": "iterations: 27918\ncpu: 29684.94161472895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23074.931738033058,
            "unit": "ns/iter",
            "extra": "iterations: 35730\ncpu: 23073.73635600337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 21313.64773438768,
            "unit": "ns/iter",
            "extra": "iterations: 36745\ncpu: 21312.956864879576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21058.12472965082,
            "unit": "ns/iter",
            "extra": "iterations: 39301\ncpu: 21058.02142439118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64096.30070964138,
            "unit": "ns/iter",
            "extra": "iterations: 13528\ncpu: 64093.37670017762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 608895.2769999879,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608870.6999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 601006.9096509211,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 600999.8631074607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 596299.1322426085,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 596283.9809134265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 596140.9999999547,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 596125.3741496606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 351708.482663485,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 351477.54137116025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 595052.0054053979,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 595031.0135135166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 554.374331959186,
            "unit": "ns/iter",
            "extra": "iterations: 1270132\ncpu: 554.3598618096405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3326.442359847741,
            "unit": "ns/iter",
            "extra": "iterations: 210539\ncpu: 3326.349512441877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2390.7006628750796,
            "unit": "ns/iter",
            "extra": "iterations: 293268\ncpu: 2390.5414160426653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2637.0567758256884,
            "unit": "ns/iter",
            "extra": "iterations: 265606\ncpu: 2636.9622674186508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2082.8411577873107,
            "unit": "ns/iter",
            "extra": "iterations: 336573\ncpu: 2082.7582723510077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17637.521280074157,
            "unit": "ns/iter",
            "extra": "iterations: 39779\ncpu: 17636.62233841976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31268.99202365743,
            "unit": "ns/iter",
            "extra": "iterations: 22316\ncpu: 31268.480014339617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7738.4472351273935,
            "unit": "ns/iter",
            "extra": "iterations: 90619\ncpu: 7737.990929054598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7657.651898872333,
            "unit": "ns/iter",
            "extra": "iterations: 91370\ncpu: 7657.038415234787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7643.236128933042,
            "unit": "ns/iter",
            "extra": "iterations: 91179\ncpu: 7642.736814398079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15425.544924794824,
            "unit": "ns/iter",
            "extra": "iterations: 45476\ncpu: 15425.208901398422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14725.257392910415,
            "unit": "ns/iter",
            "extra": "iterations: 47647\ncpu: 14724.84941339441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4470.410890962912,
            "unit": "ns/iter",
            "extra": "iterations: 156864\ncpu: 4470.382624439016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22896.162562861136,
            "unit": "ns/iter",
            "extra": "iterations: 30622\ncpu: 22895.42485794541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18292.590958104807,
            "unit": "ns/iter",
            "extra": "iterations: 38023\ncpu: 18292.157378428794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18188.5330405635,
            "unit": "ns/iter",
            "extra": "iterations: 38483\ncpu: 18188.301327859124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18824.034500363025,
            "unit": "ns/iter",
            "extra": "iterations: 37217\ncpu: 18823.892307278908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46026.88259695525,
            "unit": "ns/iter",
            "extra": "iterations: 15187\ncpu: 46025.61401198436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158715.98049888443,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 158714.64852607693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132002.94577742903,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 132001.37918004894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132351.41555009986,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 132347.80147197662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133642.40217390808,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 133635.67887108983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82052.10007005226,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 82048.20177487035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132771.96289284903,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 132770.88224157458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4343.108767648395,
            "unit": "ns/iter",
            "extra": "iterations: 160636\ncpu: 4342.903832266744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21914.357805934,
            "unit": "ns/iter",
            "extra": "iterations: 31886\ncpu: 21913.429091136797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17755.745061338464,
            "unit": "ns/iter",
            "extra": "iterations: 39535\ncpu: 17755.310484380876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17642.366250377483,
            "unit": "ns/iter",
            "extra": "iterations: 39716\ncpu: 17641.826971497365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17972.117595617605,
            "unit": "ns/iter",
            "extra": "iterations: 38879\ncpu: 17971.717379562077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 45003.87208561444,
            "unit": "ns/iter",
            "extra": "iterations: 15698\ncpu: 45002.93030959376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155324.4015975175,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 155319.12580430397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128876.3714338296,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 128868.04711945495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128372.55291102544,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128368.69278652436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 136493.93927050423,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 136483.50305498939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80279.09511716207,
            "unit": "ns/iter",
            "extra": "iterations: 8663\ncpu: 80271.4186771323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 135442.46314925893,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 135431.82098131953 ns\nthreads: 1"
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
        "date": 1705955744734,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1391.5518801287915,
            "unit": "ns/iter",
            "extra": "iterations: 514619\ncpu: 1391.4565921584706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16625.837741057945,
            "unit": "ns/iter",
            "extra": "iterations: 49988\ncpu: 16625.54012963111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35481.81976098622,
            "unit": "ns/iter",
            "extra": "iterations: 23430\ncpu: 35480.83226632522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52325.414096093715,
            "unit": "ns/iter",
            "extra": "iterations: 16047\ncpu: 52324.68374150929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58298.763600009814,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58298.110000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73356.06081194403,
            "unit": "ns/iter",
            "extra": "iterations: 11922\ncpu: 73354.4539506794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87441.95447186567,
            "unit": "ns/iter",
            "extra": "iterations: 9884\ncpu: 87438.24362606237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103585.47824012768,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 103583.77250506735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119728.25104999202,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 119724.23790814259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1211.1946983007772,
            "unit": "ns/iter",
            "extra": "iterations: 576004\ncpu: 1211.1511378393213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 992.4662725382102,
            "unit": "ns/iter",
            "extra": "iterations: 698926\ncpu: 992.4326752760649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 963.1493299792036,
            "unit": "ns/iter",
            "extra": "iterations: 735425\ncpu: 963.1413128463145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 979.1545535955015,
            "unit": "ns/iter",
            "extra": "iterations: 715797\ncpu: 979.1573588601237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1930.3952898403802,
            "unit": "ns/iter",
            "extra": "iterations: 363045\ncpu: 1930.3202082386488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5603.8059599995895,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5603.721999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29133.382163299135,
            "unit": "ns/iter",
            "extra": "iterations: 27606\ncpu: 29132.62696515251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23265.89828317908,
            "unit": "ns/iter",
            "extra": "iterations: 35589\ncpu: 23265.75065329176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22581.187725937172,
            "unit": "ns/iter",
            "extra": "iterations: 35408\ncpu: 22580.306710347926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22739.24250473269,
            "unit": "ns/iter",
            "extra": "iterations: 35389\ncpu: 22738.05419763198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64999.68939227395,
            "unit": "ns/iter",
            "extra": "iterations: 13641\ncpu: 64995.762773990195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 610529.3260000054,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610218.7999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 602077.1537931006,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 602037.1724137948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 596886.3193393053,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 596847.1438403311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 609038.9839720657,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 609025.7142857129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 350344.2662157068,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 350323.35853561544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 599847.0116838467,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 599803.9175257728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2541259.1557374494,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2541105.464480871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1146408.6912668755,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 1146327.060270602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3364768.9492751844,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3364572.1014492735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8699.261283103178,
            "unit": "ns/iter",
            "extra": "iterations: 96516\ncpu: 8698.855112105772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48385.05903062621,
            "unit": "ns/iter",
            "extra": "iterations: 17042\ncpu: 48382.79544654392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37895.078964197186,
            "unit": "ns/iter",
            "extra": "iterations: 21896\ncpu: 37892.32279868482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37531.55872887877,
            "unit": "ns/iter",
            "extra": "iterations: 22374\ncpu: 37454.66613032976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36937.18819237668,
            "unit": "ns/iter",
            "extra": "iterations: 22477\ncpu: 36935.03136539578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78966.4023114977,
            "unit": "ns/iter",
            "extra": "iterations: 10902\ncpu: 78962.89671619864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 636869.5139999544,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636811.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 510310.5839999671,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510304.5999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 502477.70599992236,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502417.49999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 502847.92900004046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502830.00000000297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 367624.14768459596,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 367608.0100125164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 618673.2162741387,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 618623.197715915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2690813.69452462,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2690614.69740634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1167484.5615577302,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 1167376.6331658338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5403.989769999952,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5403.586999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28908.71824756135,
            "unit": "ns/iter",
            "extra": "iterations: 28486\ncpu: 28906.778768517932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23011.440581489882,
            "unit": "ns/iter",
            "extra": "iterations: 35839\ncpu: 23009.514774407773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22498.513189711197,
            "unit": "ns/iter",
            "extra": "iterations: 36809\ncpu: 22496.672009562877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22410.2353150508,
            "unit": "ns/iter",
            "extra": "iterations: 36534\ncpu: 22409.144906114834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64107.99889649759,
            "unit": "ns/iter",
            "extra": "iterations: 13593\ncpu: 64103.39145148244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 609668.0269999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609608.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 603996.003494067,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 603949.3361285826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 599122.2720994684,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 599091.2983425413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 604280.5825784248,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 604243.5540069677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 353935.65824308456,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 353910.3489771349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 594974.489768113,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 594949.9999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 534.2291769178707,
            "unit": "ns/iter",
            "extra": "iterations: 1308788\ncpu: 534.1918630060811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3289.0846194757005,
            "unit": "ns/iter",
            "extra": "iterations: 212457\ncpu: 3288.825974197145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2602.422244946564,
            "unit": "ns/iter",
            "extra": "iterations: 267944\ncpu: 2602.2575612814844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2639.362538377873,
            "unit": "ns/iter",
            "extra": "iterations: 265776\ncpu: 2639.239058455221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2046.9848951730328,
            "unit": "ns/iter",
            "extra": "iterations: 327445\ncpu: 2046.8151903373105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17608.403895218988,
            "unit": "ns/iter",
            "extra": "iterations: 39587\ncpu: 17606.71432540994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32137.589934975153,
            "unit": "ns/iter",
            "extra": "iterations: 21838\ncpu: 32134.691821595625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7664.618901267418,
            "unit": "ns/iter",
            "extra": "iterations: 91105\ncpu: 7664.048076395402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7646.2533470194385,
            "unit": "ns/iter",
            "extra": "iterations: 91574\ncpu: 7645.722585013144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7661.085424382506,
            "unit": "ns/iter",
            "extra": "iterations: 91262\ncpu: 7661.0352611162825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15276.93920751483,
            "unit": "ns/iter",
            "extra": "iterations: 45351\ncpu: 15276.82741284657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14658.147355687715,
            "unit": "ns/iter",
            "extra": "iterations: 47952\ncpu: 14657.49708041361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4494.881307258071,
            "unit": "ns/iter",
            "extra": "iterations: 155654\ncpu: 4494.889305767905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 23005.13456863015,
            "unit": "ns/iter",
            "extra": "iterations: 30438\ncpu: 23004.921479729397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18424.373634184965,
            "unit": "ns/iter",
            "extra": "iterations: 37981\ncpu: 18423.922487559576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18138.820361145947,
            "unit": "ns/iter",
            "extra": "iterations: 38544\ncpu: 18138.073370693244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18741.470248287238,
            "unit": "ns/iter",
            "extra": "iterations: 37376\ncpu: 18741.52932363041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46381.8433487775,
            "unit": "ns/iter",
            "extra": "iterations: 15110\ncpu: 46381.15817339551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157779.22712860457,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 157776.4039855101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132988.83620201412,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132985.19008889713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131639.844015888,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 131636.77443751437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133459.144028996,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133454.06333460368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82208.02444182933,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 82206.39247943572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133405.57474765467,
            "unit": "ns/iter",
            "extra": "iterations: 5251\ncpu: 133403.4469624836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4415.41020165614,
            "unit": "ns/iter",
            "extra": "iterations: 157347\ncpu: 4415.383833183963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22109.81393362165,
            "unit": "ns/iter",
            "extra": "iterations: 31607\ncpu: 22109.861739488137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17984.96652859481,
            "unit": "ns/iter",
            "extra": "iterations: 38869\ncpu: 17984.715325838348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17785.353068336088,
            "unit": "ns/iter",
            "extra": "iterations: 39321\ncpu: 17785.053788052377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18161.173501657595,
            "unit": "ns/iter",
            "extra": "iterations: 38576\ncpu: 18160.446909996062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 45102.65207062238,
            "unit": "ns/iter",
            "extra": "iterations: 15575\ncpu: 45102.01605136423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153537.30704098937,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 153527.18360071356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127558.27890412373,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 127549.42465753411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128386.15897902426,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 128375.89790337323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127983.19145425179,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 127976.43498991433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 79329.23629941148,
            "unit": "ns/iter",
            "extra": "iterations: 8777\ncpu: 79328.40378261381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127439.44665329097,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 127433.19350720276 ns\nthreads: 1"
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
        "date": 1705957584706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1464.6484056461145,
            "unit": "ns/iter",
            "extra": "iterations: 466239\ncpu: 1464.566241777286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17071.584933018563,
            "unit": "ns/iter",
            "extra": "iterations: 48968\ncpu: 17071.309834994285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35200.95352708025,
            "unit": "ns/iter",
            "extra": "iterations: 23433\ncpu: 35200.815089830576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52813.73962167983,
            "unit": "ns/iter",
            "extra": "iterations: 15754\ncpu: 52813.5330709661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58848.12420000571,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58844.45000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74304.51283557437,
            "unit": "ns/iter",
            "extra": "iterations: 11920\ncpu: 74303.48993288593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88055.87593226932,
            "unit": "ns/iter",
            "extra": "iterations: 9922\ncpu: 88052.97319088895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102382.2185519325,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 102374.92686494396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120016.28212213871,
            "unit": "ns/iter",
            "extra": "iterations: 7238\ncpu: 120013.27714838351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1189.9935328037357,
            "unit": "ns/iter",
            "extra": "iterations: 587890\ncpu: 1189.9707428260397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 976.8053326666984,
            "unit": "ns/iter",
            "extra": "iterations: 711989\ncpu: 976.7900908581461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 983.0495849192488,
            "unit": "ns/iter",
            "extra": "iterations: 729617\ncpu: 983.0474070642554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 979.9336655780259,
            "unit": "ns/iter",
            "extra": "iterations: 713129\ncpu: 979.8873696063398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1915.5597837382895,
            "unit": "ns/iter",
            "extra": "iterations: 365668\ncpu: 1915.5542732752085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5664.297820000002,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5664.180999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29729.651079134546,
            "unit": "ns/iter",
            "extra": "iterations: 27522\ncpu: 29729.376498800946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23005.852520819353,
            "unit": "ns/iter",
            "extra": "iterations: 35544\ncpu: 23005.322979968492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22298.179551260317,
            "unit": "ns/iter",
            "extra": "iterations: 36814\ncpu: 22297.886673548088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21863.386005423996,
            "unit": "ns/iter",
            "extra": "iterations: 37243\ncpu: 21862.827913970465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64886.81628009499,
            "unit": "ns/iter",
            "extra": "iterations: 13624\ncpu: 64884.35114503811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 603726.7699999802,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603666.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 604066.1146408583,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 604033.6325966854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 592004.1139326642,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 591967.192862047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 599854.535934278,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 599796.3039014374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 350134.7511057447,
            "unit": "ns/iter",
            "extra": "iterations: 2487\ncpu: 350116.8073984721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 608245.3418332072,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 608108.063404547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2529669.961956331,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2529479.8913043505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1148665.533415902,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1148582.6732673289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3364469.2028986723,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3364193.4782608715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8624.77756025285,
            "unit": "ns/iter",
            "extra": "iterations: 98584\ncpu: 8624.306175444272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48216.12589696948,
            "unit": "ns/iter",
            "extra": "iterations: 17141\ncpu: 48212.77055014284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37628.59876824878,
            "unit": "ns/iter",
            "extra": "iterations: 21920\ncpu: 37628.21167883214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36984.51007545406,
            "unit": "ns/iter",
            "extra": "iterations: 22530\ncpu: 36982.467820683654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36723.578052411984,
            "unit": "ns/iter",
            "extra": "iterations: 22818\ncpu: 36720.43123849591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77981.42044533198,
            "unit": "ns/iter",
            "extra": "iterations: 11093\ncpu: 77976.8322365458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 637195.0049999668,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637183.9999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 508048.2150000307,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507994.89999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 503066.79000004806,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503055.6000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 502996.11200000526,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502983.8999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 367587.39028475055,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 367557.83082077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 616598.574964615,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 616566.1951909452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2689778.026087154,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2689596.8115942045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1178526.4638782388,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 1178438.2762991125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5429.011630000105,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5428.932999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29191.872742723586,
            "unit": "ns/iter",
            "extra": "iterations: 28242\ncpu: 29190.49996459186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23244.18348572169,
            "unit": "ns/iter",
            "extra": "iterations: 35436\ncpu: 23243.012755389933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22530.461850804404,
            "unit": "ns/iter",
            "extra": "iterations: 36449\ncpu: 22529.249087766468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22289.727901991348,
            "unit": "ns/iter",
            "extra": "iterations: 36406\ncpu: 22289.13365928685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64004.61762316519,
            "unit": "ns/iter",
            "extra": "iterations: 13539\ncpu: 64003.59701602766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 610697.383999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610682.0999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 613326.0443828314,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 613322.538141471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 613246.4112344133,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 613231.206657418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 616066.687893581,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 616056.6829951003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 352798.237734338,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 352796.37016354327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 602348.2443532039,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 602320.6707734416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.4464531871407,
            "unit": "ns/iter",
            "extra": "iterations: 1299984\ncpu: 540.4327284028096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3316.7858383892476,
            "unit": "ns/iter",
            "extra": "iterations: 210654\ncpu: 3316.66429310622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2645.899133646937,
            "unit": "ns/iter",
            "extra": "iterations: 264211\ncpu: 2645.631332533462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2548.556645744733,
            "unit": "ns/iter",
            "extra": "iterations: 274672\ncpu: 2548.4101036873176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2060.6269549867184,
            "unit": "ns/iter",
            "extra": "iterations: 339900\ncpu: 2060.486319505744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17504.221901801924,
            "unit": "ns/iter",
            "extra": "iterations: 39878\ncpu: 17503.39034053853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32562.343446010556,
            "unit": "ns/iter",
            "extra": "iterations: 22513\ncpu: 32559.743259449893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7721.340544651104,
            "unit": "ns/iter",
            "extra": "iterations: 90737\ncpu: 7720.7225277450625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7652.1150759810935,
            "unit": "ns/iter",
            "extra": "iterations: 91470\ncpu: 7651.790751065863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7651.3305286216,
            "unit": "ns/iter",
            "extra": "iterations: 91275\ncpu: 7650.563681183316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15354.425679962798,
            "unit": "ns/iter",
            "extra": "iterations: 45701\ncpu: 15353.011969103338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14599.082754157589,
            "unit": "ns/iter",
            "extra": "iterations: 47913\ncpu: 14597.242919458007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4490.0746913464045,
            "unit": "ns/iter",
            "extra": "iterations: 156243\ncpu: 4489.78386231703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22588.33990655546,
            "unit": "ns/iter",
            "extra": "iterations: 31035\ncpu: 22586.441114870322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18036.621747642694,
            "unit": "ns/iter",
            "extra": "iterations: 38818\ncpu: 18035.49384306283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17985.237007993645,
            "unit": "ns/iter",
            "extra": "iterations: 39024\ncpu: 17983.956027060547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18607.391965545357,
            "unit": "ns/iter",
            "extra": "iterations: 37613\ncpu: 18605.609762582186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46063.27089905774,
            "unit": "ns/iter",
            "extra": "iterations: 15216\ncpu: 46057.60383806506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160409.92734749857,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 160399.77153301434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134410.48808152252,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134400.98039215666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132873.58404559875,
            "unit": "ns/iter",
            "extra": "iterations: 5265\ncpu: 132866.47673314225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133980.54212944992,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 133976.1202604364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81591.99742839577,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 81591.7358270005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133375.7186130854,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 133373.44256048684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4376.461514835779,
            "unit": "ns/iter",
            "extra": "iterations: 159542\ncpu: 4376.384901781362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22022.998255075494,
            "unit": "ns/iter",
            "extra": "iterations: 31520\ncpu: 22021.849619289125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 18718.66600845506,
            "unit": "ns/iter",
            "extra": "iterations: 39501\ncpu: 18716.91349586096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17346.37442108288,
            "unit": "ns/iter",
            "extra": "iterations: 40377\ncpu: 17345.27577581303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17812.17929087407,
            "unit": "ns/iter",
            "extra": "iterations: 39316\ncpu: 17810.78186997668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44397.151859904276,
            "unit": "ns/iter",
            "extra": "iterations: 15646\ncpu: 44393.979291831674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155157.1986270921,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 155141.87333923866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128696.66918262723,
            "unit": "ns/iter",
            "extra": "iterations: 5432\ncpu: 128687.64727540266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128563.06815661816,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 128548.59623199164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129176.59904182357,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 129166.16915422895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80611.82513472985,
            "unit": "ns/iter",
            "extra": "iterations: 8721\ncpu: 80609.5172571946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129274.23505460037,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 129274.10697760603 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}