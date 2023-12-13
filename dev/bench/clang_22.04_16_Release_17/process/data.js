window.BENCHMARK_DATA = {
  "lastUpdate": 1702493668602,
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
      }
    ]
  }
}