window.BENCHMARK_DATA = {
  "lastUpdate": 1702387049055,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-8 20.04 Release c++-17": [
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
        "date": 1702381119249,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1013.1813292271347,
            "unit": "ns/iter",
            "extra": "iterations: 690341\ncpu: 1013.1737793351401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20618.61549344736,
            "unit": "ns/iter",
            "extra": "iterations: 40288\ncpu: 20618.682982525814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46623.31326749034,
            "unit": "ns/iter",
            "extra": "iterations: 19137\ncpu: 46623.357893086686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 58104.83789999807,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58105.53 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71619.46879173908,
            "unit": "ns/iter",
            "extra": "iterations: 11231\ncpu: 71618.92084409224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89181.38919084912,
            "unit": "ns/iter",
            "extra": "iterations: 9751\ncpu: 89179.37647420773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 106514.0932912784,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 106513.68433822636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124054.15181985467,
            "unit": "ns/iter",
            "extra": "iterations: 7061\ncpu: 124049.55388755127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152275.4214969973,
            "unit": "ns/iter",
            "extra": "iterations: 6159\ncpu: 152273.58337392428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 954.7069383341563,
            "unit": "ns/iter",
            "extra": "iterations: 728734\ncpu: 954.7170846975695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 707.7072591340369,
            "unit": "ns/iter",
            "extra": "iterations: 989264\ncpu: 707.7080536641381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 691.6683729465659,
            "unit": "ns/iter",
            "extra": "iterations: 1014097\ncpu: 691.6566166747365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 709.3859109234207,
            "unit": "ns/iter",
            "extra": "iterations: 988184\ncpu: 709.3887373201765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1443.4841442604932,
            "unit": "ns/iter",
            "extra": "iterations: 484651\ncpu: 1443.487788119698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6613.746191630164,
            "unit": "ns/iter",
            "extra": "iterations: 124594\ncpu: 6613.817679824071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 38407.13296282642,
            "unit": "ns/iter",
            "extra": "iterations: 21412\ncpu: 38406.56641135812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28251.071143685916,
            "unit": "ns/iter",
            "extra": "iterations: 29335\ncpu: 28249.991477756917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28053.64243999698,
            "unit": "ns/iter",
            "extra": "iterations: 29623\ncpu: 28053.70151571418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28457.603247047722,
            "unit": "ns/iter",
            "extra": "iterations: 28703\ncpu: 28457.69431766713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 62252.17917293788,
            "unit": "ns/iter",
            "extra": "iterations: 13953\ncpu: 62252.38300007163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 656663.1789999633,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656633.4999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 517825.25300001225,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517814.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 521042.537000028,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521041.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 527607.498000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527614.4999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374286.01282051153,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 374286.8803418795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 512713.32199996774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512704.99999999686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2890461.8902439815,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2890417.682926836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1245804.9544863862,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1245798.4395318597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3647659.8249025764,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3647663.813229575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6655.891761793464,
            "unit": "ns/iter",
            "extra": "iterations: 123607\ncpu: 6655.848778790862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 38257.732479381804,
            "unit": "ns/iter",
            "extra": "iterations: 21703\ncpu: 38257.13956595877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 28343.424144169556,
            "unit": "ns/iter",
            "extra": "iterations: 29299\ncpu: 28343.748933410614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 28354.40721631747,
            "unit": "ns/iter",
            "extra": "iterations: 29267\ncpu: 28354.467488980736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 29762.7267274715,
            "unit": "ns/iter",
            "extra": "iterations: 28177\ncpu: 29762.12513752354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 61870.96529999963,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61870.890000000145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 650161.1219999859,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650168.7000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 532406.213999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532412.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 529688.617999966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529680.8000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 528382.2220000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528389.0000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 376317.5053168994,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 376307.316035729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 518864.49099998805,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518871.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3009891.9871383263,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3009880.707395496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1251745.8039734801,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1251738.1456953594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6696.588895317423,
            "unit": "ns/iter",
            "extra": "iterations: 122723\ncpu: 6696.4847665067055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 38752.072446279475,
            "unit": "ns/iter",
            "extra": "iterations: 21547\ncpu: 38752.4945468047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 28697.523017725318,
            "unit": "ns/iter",
            "extra": "iterations: 29108\ncpu: 28697.870001374282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 28514.96094095261,
            "unit": "ns/iter",
            "extra": "iterations: 29417\ncpu: 28515.01512730733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 28967.791136371936,
            "unit": "ns/iter",
            "extra": "iterations: 28679\ncpu: 28967.491893022667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 60209.62200000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60210.37000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 642033.534999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642034.0999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 526099.0300000117,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526098.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 521774.57555337326,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 521781.328200188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 523126.04900004086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523116.0000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 375807.9502339442,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 375798.55380689265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 522201.0820000378,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522208.4000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 366.41731516592176,
            "unit": "ns/iter",
            "extra": "iterations: 1909794\ncpu: 366.41752984876854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3150.270655949219,
            "unit": "ns/iter",
            "extra": "iterations: 230902\ncpu: 3150.2412278802412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2376.859867327355,
            "unit": "ns/iter",
            "extra": "iterations: 297725\ncpu: 2376.828281131909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2475.126518922034,
            "unit": "ns/iter",
            "extra": "iterations: 283507\ncpu: 2475.1544053586017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1842.9235940775147,
            "unit": "ns/iter",
            "extra": "iterations: 380782\ncpu: 1842.9261362144343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13450.676901564126,
            "unit": "ns/iter",
            "extra": "iterations: 52207\ncpu: 13448.77698392944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 35513.25891724406,
            "unit": "ns/iter",
            "extra": "iterations: 19709\ncpu: 35513.18686894286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8224.227418653352,
            "unit": "ns/iter",
            "extra": "iterations: 85037\ncpu: 8224.318825922797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 8143.4487712311075,
            "unit": "ns/iter",
            "extra": "iterations: 85899\ncpu: 8143.547654803917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 8277.460595881854,
            "unit": "ns/iter",
            "extra": "iterations: 84547\ncpu: 8277.46223993758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17195.407907260855,
            "unit": "ns/iter",
            "extra": "iterations: 40975\ncpu: 17195.153142159827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 16307.230474909433,
            "unit": "ns/iter",
            "extra": "iterations: 43124\ncpu: 16307.0239309897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4458.078369210094,
            "unit": "ns/iter",
            "extra": "iterations: 157715\ncpu: 4458.134609897603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22701.70055087527,
            "unit": "ns/iter",
            "extra": "iterations: 30860\ncpu: 22701.616979909264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17860.79188941467,
            "unit": "ns/iter",
            "extra": "iterations: 39282\ncpu: 17860.424621964383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 18025.675452835054,
            "unit": "ns/iter",
            "extra": "iterations: 38811\ncpu: 18025.43866429627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19440.709357829517,
            "unit": "ns/iter",
            "extra": "iterations: 36034\ncpu: 19440.947438530173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38442.1746205668,
            "unit": "ns/iter",
            "extra": "iterations: 18251\ncpu: 38442.18946907007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 159391.14272727168,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 159391.02272727466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134957.34951083365,
            "unit": "ns/iter",
            "extra": "iterations: 5213\ncpu: 134954.51755227477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 136227.05516704984,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 136227.03962703852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 137350.76131687104,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 137350.95042131902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 82358.26416872849,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82358.23023447664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 135877.67090588983,
            "unit": "ns/iter",
            "extra": "iterations: 5111\ncpu: 135875.34729015862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4461.378045511974,
            "unit": "ns/iter",
            "extra": "iterations: 156706\ncpu: 4461.376718185624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22956.823903265173,
            "unit": "ns/iter",
            "extra": "iterations: 30682\ncpu: 22956.83136692492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 18186.311020154128,
            "unit": "ns/iter",
            "extra": "iterations: 38602\ncpu: 18186.00072535103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 18176.6939812768,
            "unit": "ns/iter",
            "extra": "iterations: 38563\ncpu: 18176.710836812374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18911.755123061714,
            "unit": "ns/iter",
            "extra": "iterations: 36892\ncpu: 18910.598503740475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 38654.135714678414,
            "unit": "ns/iter",
            "extra": "iterations: 18141\ncpu: 38654.58354004739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 156709.16741271006,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 156704.18531781426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 135791.3677693866,
            "unit": "ns/iter",
            "extra": "iterations: 5169\ncpu: 135784.32965757485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 135950.85683761022,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 135943.80341880358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 137377.919370693,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 137372.36971484718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79667.21219013052,
            "unit": "ns/iter",
            "extra": "iterations: 8794\ncpu: 79667.39822606172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 134356.95270917672,
            "unit": "ns/iter",
            "extra": "iterations: 5223\ncpu: 134356.53838789838 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381119249,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1013.1813292271347,
            "unit": "ns/iter",
            "extra": "iterations: 690341\ncpu: 1013.1737793351401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20618.61549344736,
            "unit": "ns/iter",
            "extra": "iterations: 40288\ncpu: 20618.682982525814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46623.31326749034,
            "unit": "ns/iter",
            "extra": "iterations: 19137\ncpu: 46623.357893086686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 58104.83789999807,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58105.53 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71619.46879173908,
            "unit": "ns/iter",
            "extra": "iterations: 11231\ncpu: 71618.92084409224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89181.38919084912,
            "unit": "ns/iter",
            "extra": "iterations: 9751\ncpu: 89179.37647420773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 106514.0932912784,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 106513.68433822636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124054.15181985467,
            "unit": "ns/iter",
            "extra": "iterations: 7061\ncpu: 124049.55388755127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152275.4214969973,
            "unit": "ns/iter",
            "extra": "iterations: 6159\ncpu: 152273.58337392428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 954.7069383341563,
            "unit": "ns/iter",
            "extra": "iterations: 728734\ncpu: 954.7170846975695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 707.7072591340369,
            "unit": "ns/iter",
            "extra": "iterations: 989264\ncpu: 707.7080536641381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 691.6683729465659,
            "unit": "ns/iter",
            "extra": "iterations: 1014097\ncpu: 691.6566166747365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 709.3859109234207,
            "unit": "ns/iter",
            "extra": "iterations: 988184\ncpu: 709.3887373201765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1443.4841442604932,
            "unit": "ns/iter",
            "extra": "iterations: 484651\ncpu: 1443.487788119698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6613.746191630164,
            "unit": "ns/iter",
            "extra": "iterations: 124594\ncpu: 6613.817679824071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 38407.13296282642,
            "unit": "ns/iter",
            "extra": "iterations: 21412\ncpu: 38406.56641135812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28251.071143685916,
            "unit": "ns/iter",
            "extra": "iterations: 29335\ncpu: 28249.991477756917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28053.64243999698,
            "unit": "ns/iter",
            "extra": "iterations: 29623\ncpu: 28053.70151571418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28457.603247047722,
            "unit": "ns/iter",
            "extra": "iterations: 28703\ncpu: 28457.69431766713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 62252.17917293788,
            "unit": "ns/iter",
            "extra": "iterations: 13953\ncpu: 62252.38300007163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 656663.1789999633,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656633.4999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 517825.25300001225,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517814.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 521042.537000028,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521041.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 527607.498000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527614.4999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374286.01282051153,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 374286.8803418795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 512713.32199996774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512704.99999999686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2890461.8902439815,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2890417.682926836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1245804.9544863862,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1245798.4395318597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3647659.8249025764,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3647663.813229575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6655.891761793464,
            "unit": "ns/iter",
            "extra": "iterations: 123607\ncpu: 6655.848778790862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 38257.732479381804,
            "unit": "ns/iter",
            "extra": "iterations: 21703\ncpu: 38257.13956595877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 28343.424144169556,
            "unit": "ns/iter",
            "extra": "iterations: 29299\ncpu: 28343.748933410614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 28354.40721631747,
            "unit": "ns/iter",
            "extra": "iterations: 29267\ncpu: 28354.467488980736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 29762.7267274715,
            "unit": "ns/iter",
            "extra": "iterations: 28177\ncpu: 29762.12513752354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 61870.96529999963,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61870.890000000145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 650161.1219999859,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650168.7000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 532406.213999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532412.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 529688.617999966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529680.8000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 528382.2220000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528389.0000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 376317.5053168994,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 376307.316035729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 518864.49099998805,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518871.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3009891.9871383263,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3009880.707395496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1251745.8039734801,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1251738.1456953594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6696.588895317423,
            "unit": "ns/iter",
            "extra": "iterations: 122723\ncpu: 6696.4847665067055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 38752.072446279475,
            "unit": "ns/iter",
            "extra": "iterations: 21547\ncpu: 38752.4945468047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 28697.523017725318,
            "unit": "ns/iter",
            "extra": "iterations: 29108\ncpu: 28697.870001374282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 28514.96094095261,
            "unit": "ns/iter",
            "extra": "iterations: 29417\ncpu: 28515.01512730733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 28967.791136371936,
            "unit": "ns/iter",
            "extra": "iterations: 28679\ncpu: 28967.491893022667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 60209.62200000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60210.37000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 642033.534999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642034.0999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 526099.0300000117,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526098.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 521774.57555337326,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 521781.328200188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 523126.04900004086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523116.0000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 375807.9502339442,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 375798.55380689265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 522201.0820000378,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522208.4000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 366.41731516592176,
            "unit": "ns/iter",
            "extra": "iterations: 1909794\ncpu: 366.41752984876854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3150.270655949219,
            "unit": "ns/iter",
            "extra": "iterations: 230902\ncpu: 3150.2412278802412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2376.859867327355,
            "unit": "ns/iter",
            "extra": "iterations: 297725\ncpu: 2376.828281131909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2475.126518922034,
            "unit": "ns/iter",
            "extra": "iterations: 283507\ncpu: 2475.1544053586017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1842.9235940775147,
            "unit": "ns/iter",
            "extra": "iterations: 380782\ncpu: 1842.9261362144343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13450.676901564126,
            "unit": "ns/iter",
            "extra": "iterations: 52207\ncpu: 13448.77698392944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 35513.25891724406,
            "unit": "ns/iter",
            "extra": "iterations: 19709\ncpu: 35513.18686894286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8224.227418653352,
            "unit": "ns/iter",
            "extra": "iterations: 85037\ncpu: 8224.318825922797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 8143.4487712311075,
            "unit": "ns/iter",
            "extra": "iterations: 85899\ncpu: 8143.547654803917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 8277.460595881854,
            "unit": "ns/iter",
            "extra": "iterations: 84547\ncpu: 8277.46223993758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17195.407907260855,
            "unit": "ns/iter",
            "extra": "iterations: 40975\ncpu: 17195.153142159827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 16307.230474909433,
            "unit": "ns/iter",
            "extra": "iterations: 43124\ncpu: 16307.0239309897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4458.078369210094,
            "unit": "ns/iter",
            "extra": "iterations: 157715\ncpu: 4458.134609897603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22701.70055087527,
            "unit": "ns/iter",
            "extra": "iterations: 30860\ncpu: 22701.616979909264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17860.79188941467,
            "unit": "ns/iter",
            "extra": "iterations: 39282\ncpu: 17860.424621964383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 18025.675452835054,
            "unit": "ns/iter",
            "extra": "iterations: 38811\ncpu: 18025.43866429627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19440.709357829517,
            "unit": "ns/iter",
            "extra": "iterations: 36034\ncpu: 19440.947438530173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38442.1746205668,
            "unit": "ns/iter",
            "extra": "iterations: 18251\ncpu: 38442.18946907007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 159391.14272727168,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 159391.02272727466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134957.34951083365,
            "unit": "ns/iter",
            "extra": "iterations: 5213\ncpu: 134954.51755227477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 136227.05516704984,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 136227.03962703852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 137350.76131687104,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 137350.95042131902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 82358.26416872849,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82358.23023447664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 135877.67090588983,
            "unit": "ns/iter",
            "extra": "iterations: 5111\ncpu: 135875.34729015862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4461.378045511974,
            "unit": "ns/iter",
            "extra": "iterations: 156706\ncpu: 4461.376718185624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22956.823903265173,
            "unit": "ns/iter",
            "extra": "iterations: 30682\ncpu: 22956.83136692492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 18186.311020154128,
            "unit": "ns/iter",
            "extra": "iterations: 38602\ncpu: 18186.00072535103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 18176.6939812768,
            "unit": "ns/iter",
            "extra": "iterations: 38563\ncpu: 18176.710836812374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18911.755123061714,
            "unit": "ns/iter",
            "extra": "iterations: 36892\ncpu: 18910.598503740475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 38654.135714678414,
            "unit": "ns/iter",
            "extra": "iterations: 18141\ncpu: 38654.58354004739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 156709.16741271006,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 156704.18531781426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 135791.3677693866,
            "unit": "ns/iter",
            "extra": "iterations: 5169\ncpu: 135784.32965757485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 135950.85683761022,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 135943.80341880358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 137377.919370693,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 137372.36971484718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79667.21219013052,
            "unit": "ns/iter",
            "extra": "iterations: 8794\ncpu: 79667.39822606172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 134356.95270917672,
            "unit": "ns/iter",
            "extra": "iterations: 5223\ncpu: 134356.53838789838 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381119249,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1013.1813292271347,
            "unit": "ns/iter",
            "extra": "iterations: 690341\ncpu: 1013.1737793351401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20618.61549344736,
            "unit": "ns/iter",
            "extra": "iterations: 40288\ncpu: 20618.682982525814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46623.31326749034,
            "unit": "ns/iter",
            "extra": "iterations: 19137\ncpu: 46623.357893086686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 58104.83789999807,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58105.53 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71619.46879173908,
            "unit": "ns/iter",
            "extra": "iterations: 11231\ncpu: 71618.92084409224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89181.38919084912,
            "unit": "ns/iter",
            "extra": "iterations: 9751\ncpu: 89179.37647420773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 106514.0932912784,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 106513.68433822636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124054.15181985467,
            "unit": "ns/iter",
            "extra": "iterations: 7061\ncpu: 124049.55388755127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152275.4214969973,
            "unit": "ns/iter",
            "extra": "iterations: 6159\ncpu: 152273.58337392428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 954.7069383341563,
            "unit": "ns/iter",
            "extra": "iterations: 728734\ncpu: 954.7170846975695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 707.7072591340369,
            "unit": "ns/iter",
            "extra": "iterations: 989264\ncpu: 707.7080536641381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 691.6683729465659,
            "unit": "ns/iter",
            "extra": "iterations: 1014097\ncpu: 691.6566166747365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 709.3859109234207,
            "unit": "ns/iter",
            "extra": "iterations: 988184\ncpu: 709.3887373201765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1443.4841442604932,
            "unit": "ns/iter",
            "extra": "iterations: 484651\ncpu: 1443.487788119698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6613.746191630164,
            "unit": "ns/iter",
            "extra": "iterations: 124594\ncpu: 6613.817679824071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 38407.13296282642,
            "unit": "ns/iter",
            "extra": "iterations: 21412\ncpu: 38406.56641135812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28251.071143685916,
            "unit": "ns/iter",
            "extra": "iterations: 29335\ncpu: 28249.991477756917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28053.64243999698,
            "unit": "ns/iter",
            "extra": "iterations: 29623\ncpu: 28053.70151571418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28457.603247047722,
            "unit": "ns/iter",
            "extra": "iterations: 28703\ncpu: 28457.69431766713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 62252.17917293788,
            "unit": "ns/iter",
            "extra": "iterations: 13953\ncpu: 62252.38300007163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 656663.1789999633,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656633.4999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 517825.25300001225,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517814.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 521042.537000028,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521041.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 527607.498000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527614.4999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374286.01282051153,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 374286.8803418795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 512713.32199996774,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512704.99999999686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2890461.8902439815,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2890417.682926836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1245804.9544863862,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1245798.4395318597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3647659.8249025764,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3647663.813229575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6655.891761793464,
            "unit": "ns/iter",
            "extra": "iterations: 123607\ncpu: 6655.848778790862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 38257.732479381804,
            "unit": "ns/iter",
            "extra": "iterations: 21703\ncpu: 38257.13956595877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 28343.424144169556,
            "unit": "ns/iter",
            "extra": "iterations: 29299\ncpu: 28343.748933410614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 28354.40721631747,
            "unit": "ns/iter",
            "extra": "iterations: 29267\ncpu: 28354.467488980736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 29762.7267274715,
            "unit": "ns/iter",
            "extra": "iterations: 28177\ncpu: 29762.12513752354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 61870.96529999963,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61870.890000000145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 650161.1219999859,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650168.7000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 532406.213999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532412.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 529688.617999966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529680.8000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 528382.2220000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528389.0000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 376317.5053168994,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 376307.316035729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 518864.49099998805,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518871.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3009891.9871383263,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3009880.707395496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1251745.8039734801,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1251738.1456953594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6696.588895317423,
            "unit": "ns/iter",
            "extra": "iterations: 122723\ncpu: 6696.4847665067055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 38752.072446279475,
            "unit": "ns/iter",
            "extra": "iterations: 21547\ncpu: 38752.4945468047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 28697.523017725318,
            "unit": "ns/iter",
            "extra": "iterations: 29108\ncpu: 28697.870001374282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 28514.96094095261,
            "unit": "ns/iter",
            "extra": "iterations: 29417\ncpu: 28515.01512730733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 28967.791136371936,
            "unit": "ns/iter",
            "extra": "iterations: 28679\ncpu: 28967.491893022667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 60209.62200000212,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60210.37000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 642033.534999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642034.0999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 526099.0300000117,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526098.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 521774.57555337326,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 521781.328200188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 523126.04900004086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523116.0000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 375807.9502339442,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 375798.55380689265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 522201.0820000378,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522208.4000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 366.41731516592176,
            "unit": "ns/iter",
            "extra": "iterations: 1909794\ncpu: 366.41752984876854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3150.270655949219,
            "unit": "ns/iter",
            "extra": "iterations: 230902\ncpu: 3150.2412278802412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2376.859867327355,
            "unit": "ns/iter",
            "extra": "iterations: 297725\ncpu: 2376.828281131909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2475.126518922034,
            "unit": "ns/iter",
            "extra": "iterations: 283507\ncpu: 2475.1544053586017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1842.9235940775147,
            "unit": "ns/iter",
            "extra": "iterations: 380782\ncpu: 1842.9261362144343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13450.676901564126,
            "unit": "ns/iter",
            "extra": "iterations: 52207\ncpu: 13448.77698392944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 35513.25891724406,
            "unit": "ns/iter",
            "extra": "iterations: 19709\ncpu: 35513.18686894286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8224.227418653352,
            "unit": "ns/iter",
            "extra": "iterations: 85037\ncpu: 8224.318825922797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 8143.4487712311075,
            "unit": "ns/iter",
            "extra": "iterations: 85899\ncpu: 8143.547654803917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 8277.460595881854,
            "unit": "ns/iter",
            "extra": "iterations: 84547\ncpu: 8277.46223993758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17195.407907260855,
            "unit": "ns/iter",
            "extra": "iterations: 40975\ncpu: 17195.153142159827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 16307.230474909433,
            "unit": "ns/iter",
            "extra": "iterations: 43124\ncpu: 16307.0239309897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4458.078369210094,
            "unit": "ns/iter",
            "extra": "iterations: 157715\ncpu: 4458.134609897603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22701.70055087527,
            "unit": "ns/iter",
            "extra": "iterations: 30860\ncpu: 22701.616979909264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17860.79188941467,
            "unit": "ns/iter",
            "extra": "iterations: 39282\ncpu: 17860.424621964383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 18025.675452835054,
            "unit": "ns/iter",
            "extra": "iterations: 38811\ncpu: 18025.43866429627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19440.709357829517,
            "unit": "ns/iter",
            "extra": "iterations: 36034\ncpu: 19440.947438530173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38442.1746205668,
            "unit": "ns/iter",
            "extra": "iterations: 18251\ncpu: 38442.18946907007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 159391.14272727168,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 159391.02272727466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134957.34951083365,
            "unit": "ns/iter",
            "extra": "iterations: 5213\ncpu: 134954.51755227477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 136227.05516704984,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 136227.03962703852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 137350.76131687104,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 137350.95042131902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 82358.26416872849,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82358.23023447664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 135877.67090588983,
            "unit": "ns/iter",
            "extra": "iterations: 5111\ncpu: 135875.34729015862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4461.378045511974,
            "unit": "ns/iter",
            "extra": "iterations: 156706\ncpu: 4461.376718185624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22956.823903265173,
            "unit": "ns/iter",
            "extra": "iterations: 30682\ncpu: 22956.83136692492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 18186.311020154128,
            "unit": "ns/iter",
            "extra": "iterations: 38602\ncpu: 18186.00072535103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 18176.6939812768,
            "unit": "ns/iter",
            "extra": "iterations: 38563\ncpu: 18176.710836812374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18911.755123061714,
            "unit": "ns/iter",
            "extra": "iterations: 36892\ncpu: 18910.598503740475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 38654.135714678414,
            "unit": "ns/iter",
            "extra": "iterations: 18141\ncpu: 38654.58354004739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 156709.16741271006,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 156704.18531781426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 135791.3677693866,
            "unit": "ns/iter",
            "extra": "iterations: 5169\ncpu: 135784.32965757485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 135950.85683761022,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 135943.80341880358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 137377.919370693,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 137372.36971484718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79667.21219013052,
            "unit": "ns/iter",
            "extra": "iterations: 8794\ncpu: 79667.39822606172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 134356.95270917672,
            "unit": "ns/iter",
            "extra": "iterations: 5223\ncpu: 134356.53838789838 ns\nthreads: 1"
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
        "date": 1702382314519,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1030.3066470424942,
            "unit": "ns/iter",
            "extra": "iterations: 678076\ncpu: 1030.2908523528336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20185.9351821907,
            "unit": "ns/iter",
            "extra": "iterations: 40205\ncpu: 20184.382539485137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45767.977762839146,
            "unit": "ns/iter",
            "extra": "iterations: 19337\ncpu: 45765.40311320267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56916.436000000205,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56912.500000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69893.82053532504,
            "unit": "ns/iter",
            "extra": "iterations: 11395\ncpu: 69892.68100043881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89760.52393324865,
            "unit": "ns/iter",
            "extra": "iterations: 10007\ncpu: 89746.59738183273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 104598.03418598666,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 104594.38202247187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 122264.13476863278,
            "unit": "ns/iter",
            "extra": "iterations: 7153\ncpu: 122261.63847336778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 151409.1385900129,
            "unit": "ns/iter",
            "extra": "iterations: 6227\ncpu: 151404.40019270903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 833.2509531023428,
            "unit": "ns/iter",
            "extra": "iterations: 846971\ncpu: 833.2177843161089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 693.1764292838826,
            "unit": "ns/iter",
            "extra": "iterations: 1012570\ncpu: 693.1388447218476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 676.3060720242103,
            "unit": "ns/iter",
            "extra": "iterations: 1036096\ncpu: 676.2675466366061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 685.5292465297315,
            "unit": "ns/iter",
            "extra": "iterations: 1018514\ncpu: 685.4773719359763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1303.166793731375,
            "unit": "ns/iter",
            "extra": "iterations: 537784\ncpu: 1303.1626080359406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6523.020164454117,
            "unit": "ns/iter",
            "extra": "iterations: 127452\ncpu: 6522.5614348931385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 38315.15952610598,
            "unit": "ns/iter",
            "extra": "iterations: 21777\ncpu: 38315.07094641133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27974.652128377584,
            "unit": "ns/iter",
            "extra": "iterations: 29600\ncpu: 27972.73648648646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27635.294170524045,
            "unit": "ns/iter",
            "extra": "iterations: 30037\ncpu: 27632.766254952257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28201.161661558825,
            "unit": "ns/iter",
            "extra": "iterations: 29370\ncpu: 28197.456588355446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 61397.21959999633,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61396.24999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 675941.1729999556,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 675889.6000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 525442.5330000458,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525404.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 523671.2600000146,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523652.30000000197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 522905.1869999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522887.1000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374599.318084664,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 374587.85805899947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 516450.01399998594,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516439.9000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2919033.8204333666,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2918777.399380813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1216608.6653895495,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 1216544.4444444433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3759421.162698343,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3759176.190476196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6576.522342918554,
            "unit": "ns/iter",
            "extra": "iterations: 126304\ncpu: 6576.084684570571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 38600.09351383986,
            "unit": "ns/iter",
            "extra": "iterations: 21569\ncpu: 38597.97394408636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 28014.88895241295,
            "unit": "ns/iter",
            "extra": "iterations: 29735\ncpu: 28013.035143769965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 27793.226707556594,
            "unit": "ns/iter",
            "extra": "iterations: 29999\ncpu: 27792.08973632453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 29285.68579660982,
            "unit": "ns/iter",
            "extra": "iterations: 29500\ncpu: 29284.847457627136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 61498.138099995005,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61496.86000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 651876.8020000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651822.0000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 536767.0450000332,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536747.2999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 532028.2429999566,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531992.7999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 530108.1319999526,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530073.1000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 374053.98563582305,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 374032.69961977284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 526105.2559999939,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526087.7000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3045537.1071428326,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3045419.805194822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1273427.9853528207,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1273357.2569906747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6606.385237951448,
            "unit": "ns/iter",
            "extra": "iterations: 125782\ncpu: 6606.208360496744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 38281.037734991725,
            "unit": "ns/iter",
            "extra": "iterations: 22022\ncpu: 38278.59413313963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 28023.234052549076,
            "unit": "ns/iter",
            "extra": "iterations: 29801\ncpu: 28021.083185128187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 27965.249907926904,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 27964.00040178132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27709.038103780927,
            "unit": "ns/iter",
            "extra": "iterations: 30102\ncpu: 27707.557637366393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 60154.111500003186,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60148.42999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 646808.4379999937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646776.6999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 529017.0790000275,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528976.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 525849.2840000031,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525849.2000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 525197.5550000338,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525159.2000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 382368.96123693953,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 382345.6010452956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 520729.48799997225,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520674.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 349.24162940728064,
            "unit": "ns/iter",
            "extra": "iterations: 2005981\ncpu: 349.21577023909987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3078.985637462017,
            "unit": "ns/iter",
            "extra": "iterations: 225935\ncpu: 3078.8381614181167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2175.7191026656237,
            "unit": "ns/iter",
            "extra": "iterations: 320594\ncpu: 2175.585007829217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2311.526489111911,
            "unit": "ns/iter",
            "extra": "iterations: 301841\ncpu: 2311.36127961412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1649.2049767990932,
            "unit": "ns/iter",
            "extra": "iterations: 425414\ncpu: 1649.080190120685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13242.519391419417,
            "unit": "ns/iter",
            "extra": "iterations: 52910\ncpu: 13242.307692307593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 34754.417602533475,
            "unit": "ns/iter",
            "extra": "iterations: 20213\ncpu: 34751.63508633053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8030.308115480235,
            "unit": "ns/iter",
            "extra": "iterations: 87253\ncpu: 8030.094094185882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7955.862157408146,
            "unit": "ns/iter",
            "extra": "iterations: 88115\ncpu: 7955.176757646289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7962.6177924594995,
            "unit": "ns/iter",
            "extra": "iterations: 87790\ncpu: 7962.180202756529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16972.059806060068,
            "unit": "ns/iter",
            "extra": "iterations: 41250\ncpu: 16971.267878787872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15953.611058020359,
            "unit": "ns/iter",
            "extra": "iterations: 43950\ncpu: 15952.350398179764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4300.312969161613,
            "unit": "ns/iter",
            "extra": "iterations: 162524\ncpu: 4299.996308237566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22720.71504778219,
            "unit": "ns/iter",
            "extra": "iterations: 30556\ncpu: 22719.429899201423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17758.610475006277,
            "unit": "ns/iter",
            "extra": "iterations: 39389\ncpu: 17757.77247454869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17838.192544685764,
            "unit": "ns/iter",
            "extra": "iterations: 39274\ncpu: 17836.741864846965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19306.406695683712,
            "unit": "ns/iter",
            "extra": "iterations: 36531\ncpu: 19305.154526292714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37663.63237186502,
            "unit": "ns/iter",
            "extra": "iterations: 18652\ncpu: 37659.6665236975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 157397.95004541712,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 157390.5994550432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 138259.4539356833,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 138255.41526928474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 138260.26736385236,
            "unit": "ns/iter",
            "extra": "iterations: 5068\ncpu: 138258.2478295183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 137199.57696850307,
            "unit": "ns/iter",
            "extra": "iterations: 5080\ncpu: 137193.93700787437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80489.88488959924,
            "unit": "ns/iter",
            "extra": "iterations: 8696\ncpu: 80485.56807727613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 134573.75907590496,
            "unit": "ns/iter",
            "extra": "iterations: 5151\ncpu: 134573.57794603088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4204.713789560328,
            "unit": "ns/iter",
            "extra": "iterations: 166423\ncpu: 4204.5720843873605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22480.501983934264,
            "unit": "ns/iter",
            "extra": "iterations: 30999\ncpu: 22478.747701539036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17859.46438223399,
            "unit": "ns/iter",
            "extra": "iterations: 39222\ncpu: 17857.544235377816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17756.61888573158,
            "unit": "ns/iter",
            "extra": "iterations: 39416\ncpu: 17755.487619240772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18716.71876002193,
            "unit": "ns/iter",
            "extra": "iterations: 37420\ncpu: 18715.109567076375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37741.0418867946,
            "unit": "ns/iter",
            "extra": "iterations: 18550\ncpu: 37738.12398921825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 153111.3569244282,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 153095.15072083974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 134710.00963205588,
            "unit": "ns/iter",
            "extra": "iterations: 5191\ncpu: 134709.76690425957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 135874.5392118656,
            "unit": "ns/iter",
            "extra": "iterations: 5126\ncpu: 135870.01560670979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 137323.07462686897,
            "unit": "ns/iter",
            "extra": "iterations: 5092\ncpu: 137312.5883739207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79457.1284246557,
            "unit": "ns/iter",
            "extra": "iterations: 8760\ncpu: 79454.70319634692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 134575.4193610023,
            "unit": "ns/iter",
            "extra": "iterations: 5227\ncpu: 134565.85039219618 ns\nthreads: 1"
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
        "date": 1702387048740,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1012.9928148241498,
            "unit": "ns/iter",
            "extra": "iterations: 690171\ncpu: 1012.9898242609441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20194.32528333021,
            "unit": "ns/iter",
            "extra": "iterations: 41118\ncpu: 20194.42579892018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45380.94885896638,
            "unit": "ns/iter",
            "extra": "iterations: 19456\ncpu: 45381.10608552632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57022.76000000098,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57023.65 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69815.43838490018,
            "unit": "ns/iter",
            "extra": "iterations: 11442\ncpu: 69814.12340499909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87695.28839437326,
            "unit": "ns/iter",
            "extra": "iterations: 10021\ncpu: 87695.45953497654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105355.04335225403,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 105353.50803043113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 122013.9365525032,
            "unit": "ns/iter",
            "extra": "iterations: 7124\ncpu: 122013.29309376753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 155069.07599614494,
            "unit": "ns/iter",
            "extra": "iterations: 6224\ncpu: 155065.92223650374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 866.1860808759158,
            "unit": "ns/iter",
            "extra": "iterations: 811416\ncpu: 866.1925572086318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 706.5432273019309,
            "unit": "ns/iter",
            "extra": "iterations: 986217\ncpu: 706.492688728749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 685.3869945169645,
            "unit": "ns/iter",
            "extra": "iterations: 1024614\ncpu: 685.3977205074297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 705.2525913857578,
            "unit": "ns/iter",
            "extra": "iterations: 993098\ncpu: 705.2533586816205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1322.0866923224216,
            "unit": "ns/iter",
            "extra": "iterations: 529574\ncpu: 1322.0558411100246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6543.124972150676,
            "unit": "ns/iter",
            "extra": "iterations: 125676\ncpu: 6543.1721251472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 38162.31167335067,
            "unit": "ns/iter",
            "extra": "iterations: 21699\ncpu: 38162.1641550302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28046.526423040963,
            "unit": "ns/iter",
            "extra": "iterations: 29444\ncpu: 28046.08069555772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28007.530570859184,
            "unit": "ns/iter",
            "extra": "iterations: 29587\ncpu: 28007.513434954566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28195.28524601343,
            "unit": "ns/iter",
            "extra": "iterations: 29287\ncpu: 28195.40410421003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 61387.3190999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61388.200000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 676071.0300000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 676060.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 525456.4919999894,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525444.3999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 524538.8860000162,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524541.1999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 525238.5820000427,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525225.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 377534.5792838885,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 377517.73231031577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 518072.84000000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518073.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2906385.2307693264,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2906145.5384615334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1258032.039630123,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 1257954.6895640697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3704113.8901961003,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3703910.1960784295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6683.03542684555,
            "unit": "ns/iter",
            "extra": "iterations: 126486\ncpu: 6682.782284205379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 38157.61298582346,
            "unit": "ns/iter",
            "extra": "iterations: 21870\ncpu: 38156.08596250584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27930.533498674857,
            "unit": "ns/iter",
            "extra": "iterations: 29837\ncpu: 27929.83543921978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 27757.083920030585,
            "unit": "ns/iter",
            "extra": "iterations: 30112\ncpu: 27756.153692879874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 28157.814866331802,
            "unit": "ns/iter",
            "extra": "iterations: 29476\ncpu: 28156.866603338305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 61221.40749999972,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61219.12999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 650763.091999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650753.1000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 532437.3629999855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532420.1999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 528042.1209999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528011.5000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 526226.0869999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526227.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 377164.74914087635,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 377151.9759450176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 523519.81800001115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523488.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3001331.671009703,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3001182.736156354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1246842.7667103144,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1246787.2870249047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6520.76253202738,
            "unit": "ns/iter",
            "extra": "iterations: 127234\ncpu: 6520.499237625215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37636.60869172085,
            "unit": "ns/iter",
            "extra": "iterations: 22113\ncpu: 37634.66286799627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27806.62667914219,
            "unit": "ns/iter",
            "extra": "iterations: 29926\ncpu: 27805.473501303313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 27725.3529313841,
            "unit": "ns/iter",
            "extra": "iterations: 30037\ncpu: 27724.55305123681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27504.874668786455,
            "unit": "ns/iter",
            "extra": "iterations: 30192\ncpu: 27504.49788023332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 60260.059600000204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60256.42000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 653580.1749999451,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653551.3000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 525844.7030000184,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525833.8000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 520519.859999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520495.4000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 521200.30999998335,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521207.5999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 378687.07916132436,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 378672.4005134778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 518368.37399997644,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518358.50000000506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 347.7687280207571,
            "unit": "ns/iter",
            "extra": "iterations: 2011558\ncpu: 347.76605993960874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3210.4542142533655,
            "unit": "ns/iter",
            "extra": "iterations: 234134\ncpu: 3210.471354010947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2199.765487824427,
            "unit": "ns/iter",
            "extra": "iterations: 318137\ncpu: 2199.754193947882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2322.6549266109505,
            "unit": "ns/iter",
            "extra": "iterations: 301475\ncpu: 2322.6250932913263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1608.285098711877,
            "unit": "ns/iter",
            "extra": "iterations: 434902\ncpu: 1608.2181732896156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12937.92656851091,
            "unit": "ns/iter",
            "extra": "iterations: 54064\ncpu: 12937.372373483335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31067.581168109806,
            "unit": "ns/iter",
            "extra": "iterations: 22515\ncpu: 31066.266933155468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8094.355596941424,
            "unit": "ns/iter",
            "extra": "iterations: 86449\ncpu: 8094.023065622524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 8016.923110358513,
            "unit": "ns/iter",
            "extra": "iterations: 87424\ncpu: 8016.617862371873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 8092.77745604484,
            "unit": "ns/iter",
            "extra": "iterations: 86338\ncpu: 8092.578007366347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16894.033606163837,
            "unit": "ns/iter",
            "extra": "iterations: 41540\ncpu: 16894.11169956672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 16106.006114036649,
            "unit": "ns/iter",
            "extra": "iterations: 43670\ncpu: 16105.175177467401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4187.02164494403,
            "unit": "ns/iter",
            "extra": "iterations: 167337\ncpu: 4187.075781207976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22478.871654150076,
            "unit": "ns/iter",
            "extra": "iterations: 31158\ncpu: 22479.161050131734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17782.702473050565,
            "unit": "ns/iter",
            "extra": "iterations: 39425\ncpu: 17782.93722257449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17459.218528026347,
            "unit": "ns/iter",
            "extra": "iterations: 40123\ncpu: 17459.215412606096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18839.250760490868,
            "unit": "ns/iter",
            "extra": "iterations: 37147\ncpu: 18839.015263682068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37575.885912536185,
            "unit": "ns/iter",
            "extra": "iterations: 18591\ncpu: 37576.43483405938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 154409.00355950615,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 154408.00889877582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 132527.43505625805,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 132527.5414838833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 133423.78390234575,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 133421.5716193009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134505.29978793958,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 134504.74262579437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 79418.14015836906,
            "unit": "ns/iter",
            "extra": "iterations: 8840\ncpu: 79418.5746606341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 133531.51380897456,
            "unit": "ns/iter",
            "extra": "iterations: 5214\ncpu: 133533.35251246672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4144.559621466409,
            "unit": "ns/iter",
            "extra": "iterations: 165058\ncpu: 4144.57948115206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22624.01967499119,
            "unit": "ns/iter",
            "extra": "iterations: 30953\ncpu: 22623.942751914215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17840.759808173145,
            "unit": "ns/iter",
            "extra": "iterations: 39202\ncpu: 17841.003010050605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17704.680351089726,
            "unit": "ns/iter",
            "extra": "iterations: 39534\ncpu: 17704.56821976007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18715.14469185047,
            "unit": "ns/iter",
            "extra": "iterations: 37141\ncpu: 18715.166527557056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37539.87965047609,
            "unit": "ns/iter",
            "extra": "iterations: 18654\ncpu: 37539.45534469806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 153814.02199022655,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 153815.97067969892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 132728.4909229905,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 132726.3519969431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 133907.70713873656,
            "unit": "ns/iter",
            "extra": "iterations: 5197\ncpu: 133907.63902251417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 136216.98338545658,
            "unit": "ns/iter",
            "extra": "iterations: 5116\ncpu: 136212.56841282098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78959.07864659902,
            "unit": "ns/iter",
            "extra": "iterations: 8837\ncpu: 78958.71902229213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 131701.10303258902,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 131702.806554906 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}