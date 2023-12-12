window.BENCHMARK_DATA = {
  "lastUpdate": 1702394269465,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-16 18.04 Debug c++-17": [
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
        "date": 1702394261603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9146.186916254539,
            "unit": "ns/iter",
            "extra": "iterations: 76553\ncpu: 9145.90936997897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102013.80021545386,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 102011.43164950922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197338.45061315695,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 197333.31103678924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 291288.00507269765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 291288.33276969905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 380482.6932623828,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 380471.3652482269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 471968.81253373343,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 471951.80983252317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 571192.8235294127,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 571180 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 527726.9459999161,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527720.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 603961.3879999024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603953.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7202.541552144357,
            "unit": "ns/iter",
            "extra": "iterations: 97143\ncpu: 7202.486025755842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5942.050671565824,
            "unit": "ns/iter",
            "extra": "iterations: 117561\ncpu: 5941.829348168182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5881.135958834058,
            "unit": "ns/iter",
            "extra": "iterations: 118352\ncpu: 5880.988069487637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5925.668109459563,
            "unit": "ns/iter",
            "extra": "iterations: 117596\ncpu: 5925.677744140952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9912.04333872946,
            "unit": "ns/iter",
            "extra": "iterations: 70422\ncpu: 9911.962170912502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46727.691719604576,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 46727.337118443975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 199084.89739412814,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 199077.6640297813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157168.51671902326,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 157167.2824681322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155433.1487076732,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155425.82817619163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159690.87825435438,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159688.48098894948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 407663.05600379896,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 407648.69482676714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3166923.780405476,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166845.270270266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2590457.3905817494,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2590396.675900275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2568198.9834252615,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2568119.889502768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2596693.5138888583,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2596674.7222222253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1493100.5648000792,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1493078.559999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2490907.3546665846,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2490882.933333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10301173.456311023,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10300520.388349527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5988162.3012818005,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5988023.717948729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12438682.546512293,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12438086.046511602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46328.42372121429,
            "unit": "ns/iter",
            "extra": "iterations: 17849\ncpu: 46325.480419071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 191744.38421645045,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 191744.68996617786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 156224.41992688522,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 156220.01828153548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157623.73085461813,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 157622.34554198975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159886.06911405156,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159877.4864206778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 409591.3255703276,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 409591.8250950584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3166746.26689187,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166610.472972986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2614282.944615437,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2614076.307692305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2595058.7027779194,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2594936.388888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2635617.135977441,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2635459.4900849788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1510376.8026099917,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1510290.8646003262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2529928.91351344,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529769.4594594627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10475947.262136191,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10475131.06796116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5973128.819354931,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 5972849.677419387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45238.03330421381,
            "unit": "ns/iter",
            "extra": "iterations: 18316\ncpu: 45234.49989080569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 187668.2833883456,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 187656.5016501647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 154496.91502551638,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 154487.65499635309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157674.28695973038,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 157665.7391949542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 160210.15694729082,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 160195.18094880885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 402615.2536130583,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 402608.671328673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3145072.96633012,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3144882.828282836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2594150.3008355265,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2593944.568245135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2581539.9252079637,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2581405.540166207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2609116.754189975,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2608961.452513969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1510235.8171519835,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1510152.9126213642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2514101.6226413897,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2513916.442048512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3217.4171555093944,
            "unit": "ns/iter",
            "extra": "iterations: 217691\ncpu: 3217.3962175744296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21997.347703048075,
            "unit": "ns/iter",
            "extra": "iterations: 31803\ncpu: 21996.946828915374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16113.382289847308,
            "unit": "ns/iter",
            "extra": "iterations: 45217\ncpu: 16112.495300440116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15721.805698607166,
            "unit": "ns/iter",
            "extra": "iterations: 44467\ncpu: 15720.437627903786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13029.779310473567,
            "unit": "ns/iter",
            "extra": "iterations: 53718\ncpu: 13028.833910421194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 95228.50198931029,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 95223.0621484423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 202107.93589373046,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 202103.3496967956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50398.941235918945,
            "unit": "ns/iter",
            "extra": "iterations: 13852\ncpu: 50398.99653479682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 50251.60735451478,
            "unit": "ns/iter",
            "extra": "iterations: 14005\ncpu: 50249.68939664396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50980.67023368234,
            "unit": "ns/iter",
            "extra": "iterations: 13737\ncpu: 50980.2213001383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106139.32622182899,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 106133.69647450314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84312.46619260148,
            "unit": "ns/iter",
            "extra": "iterations: 8297\ncpu: 84306.5324816188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26223.662516457647,
            "unit": "ns/iter",
            "extra": "iterations: 26585\ncpu: 26221.335339476966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130386.03660130664,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130377.16153127806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 104191.4600720633,
            "unit": "ns/iter",
            "extra": "iterations: 6662\ncpu: 104186.16031221795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104421.71159874198,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 104420.43588595271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104949.0146948647,
            "unit": "ns/iter",
            "extra": "iterations: 6669\ncpu: 104949.13780176883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 191054.3605795268,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 191047.34827774545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 857231.6059112852,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 857204.4334975365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721413.8387097555,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 721407.5962538962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 721822.0010194528,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 721779.612640163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 724532.1438848762,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 724524.9743062734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 459154.29603123985,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 459133.897202345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 701105.6415094816,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 701106.5541211587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26309.216857982323,
            "unit": "ns/iter",
            "extra": "iterations: 26658\ncpu: 26308.781604020893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129945.4265799153,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 129941.57992565013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105557.1313450793,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 105551.48365717649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 105030.76918465651,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105027.18824940023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105244.26947656673,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 105244.41570298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 194379.6811875633,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 194371.69811320832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 852691.2426829058,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 852683.2926829281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 716411.3655244175,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 716380.1661474678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 713058.670385411,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 713039.249492891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 724527.9636552591,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 724529.1796469453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 458980.2199605769,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 458963.4931057126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 699108.6268958319,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 699100.910010111 ns\nthreads: 1"
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
        "date": 1702394261603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9146.186916254539,
            "unit": "ns/iter",
            "extra": "iterations: 76553\ncpu: 9145.90936997897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102013.80021545386,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 102011.43164950922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197338.45061315695,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 197333.31103678924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 291288.00507269765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 291288.33276969905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 380482.6932623828,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 380471.3652482269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 471968.81253373343,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 471951.80983252317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 571192.8235294127,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 571180 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 527726.9459999161,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527720.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 603961.3879999024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603953.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7202.541552144357,
            "unit": "ns/iter",
            "extra": "iterations: 97143\ncpu: 7202.486025755842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5942.050671565824,
            "unit": "ns/iter",
            "extra": "iterations: 117561\ncpu: 5941.829348168182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5881.135958834058,
            "unit": "ns/iter",
            "extra": "iterations: 118352\ncpu: 5880.988069487637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5925.668109459563,
            "unit": "ns/iter",
            "extra": "iterations: 117596\ncpu: 5925.677744140952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9912.04333872946,
            "unit": "ns/iter",
            "extra": "iterations: 70422\ncpu: 9911.962170912502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46727.691719604576,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 46727.337118443975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 199084.89739412814,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 199077.6640297813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157168.51671902326,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 157167.2824681322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155433.1487076732,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155425.82817619163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159690.87825435438,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159688.48098894948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 407663.05600379896,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 407648.69482676714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3166923.780405476,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166845.270270266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2590457.3905817494,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2590396.675900275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2568198.9834252615,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2568119.889502768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2596693.5138888583,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2596674.7222222253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1493100.5648000792,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1493078.559999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2490907.3546665846,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2490882.933333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10301173.456311023,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10300520.388349527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5988162.3012818005,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5988023.717948729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12438682.546512293,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12438086.046511602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46328.42372121429,
            "unit": "ns/iter",
            "extra": "iterations: 17849\ncpu: 46325.480419071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 191744.38421645045,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 191744.68996617786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 156224.41992688522,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 156220.01828153548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157623.73085461813,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 157622.34554198975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159886.06911405156,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159877.4864206778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 409591.3255703276,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 409591.8250950584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3166746.26689187,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166610.472972986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2614282.944615437,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2614076.307692305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2595058.7027779194,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2594936.388888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2635617.135977441,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2635459.4900849788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1510376.8026099917,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1510290.8646003262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2529928.91351344,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529769.4594594627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10475947.262136191,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10475131.06796116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5973128.819354931,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 5972849.677419387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45238.03330421381,
            "unit": "ns/iter",
            "extra": "iterations: 18316\ncpu: 45234.49989080569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 187668.2833883456,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 187656.5016501647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 154496.91502551638,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 154487.65499635309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157674.28695973038,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 157665.7391949542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 160210.15694729082,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 160195.18094880885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 402615.2536130583,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 402608.671328673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3145072.96633012,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3144882.828282836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2594150.3008355265,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2593944.568245135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2581539.9252079637,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2581405.540166207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2609116.754189975,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2608961.452513969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1510235.8171519835,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1510152.9126213642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2514101.6226413897,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2513916.442048512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3217.4171555093944,
            "unit": "ns/iter",
            "extra": "iterations: 217691\ncpu: 3217.3962175744296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21997.347703048075,
            "unit": "ns/iter",
            "extra": "iterations: 31803\ncpu: 21996.946828915374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16113.382289847308,
            "unit": "ns/iter",
            "extra": "iterations: 45217\ncpu: 16112.495300440116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15721.805698607166,
            "unit": "ns/iter",
            "extra": "iterations: 44467\ncpu: 15720.437627903786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13029.779310473567,
            "unit": "ns/iter",
            "extra": "iterations: 53718\ncpu: 13028.833910421194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 95228.50198931029,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 95223.0621484423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 202107.93589373046,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 202103.3496967956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50398.941235918945,
            "unit": "ns/iter",
            "extra": "iterations: 13852\ncpu: 50398.99653479682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 50251.60735451478,
            "unit": "ns/iter",
            "extra": "iterations: 14005\ncpu: 50249.68939664396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50980.67023368234,
            "unit": "ns/iter",
            "extra": "iterations: 13737\ncpu: 50980.2213001383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106139.32622182899,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 106133.69647450314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84312.46619260148,
            "unit": "ns/iter",
            "extra": "iterations: 8297\ncpu: 84306.5324816188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26223.662516457647,
            "unit": "ns/iter",
            "extra": "iterations: 26585\ncpu: 26221.335339476966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130386.03660130664,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130377.16153127806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 104191.4600720633,
            "unit": "ns/iter",
            "extra": "iterations: 6662\ncpu: 104186.16031221795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104421.71159874198,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 104420.43588595271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104949.0146948647,
            "unit": "ns/iter",
            "extra": "iterations: 6669\ncpu: 104949.13780176883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 191054.3605795268,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 191047.34827774545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 857231.6059112852,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 857204.4334975365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721413.8387097555,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 721407.5962538962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 721822.0010194528,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 721779.612640163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 724532.1438848762,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 724524.9743062734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 459154.29603123985,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 459133.897202345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 701105.6415094816,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 701106.5541211587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26309.216857982323,
            "unit": "ns/iter",
            "extra": "iterations: 26658\ncpu: 26308.781604020893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129945.4265799153,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 129941.57992565013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105557.1313450793,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 105551.48365717649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 105030.76918465651,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105027.18824940023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105244.26947656673,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 105244.41570298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 194379.6811875633,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 194371.69811320832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 852691.2426829058,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 852683.2926829281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 716411.3655244175,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 716380.1661474678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 713058.670385411,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 713039.249492891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 724527.9636552591,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 724529.1796469453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 458980.2199605769,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 458963.4931057126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 699108.6268958319,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 699100.910010111 ns\nthreads: 1"
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
        "date": 1702394261603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9146.186916254539,
            "unit": "ns/iter",
            "extra": "iterations: 76553\ncpu: 9145.90936997897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102013.80021545386,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 102011.43164950922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197338.45061315695,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 197333.31103678924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 291288.00507269765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 291288.33276969905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 380482.6932623828,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 380471.3652482269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 471968.81253373343,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 471951.80983252317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 571192.8235294127,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 571180 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 527726.9459999161,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527720.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 603961.3879999024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603953.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7202.541552144357,
            "unit": "ns/iter",
            "extra": "iterations: 97143\ncpu: 7202.486025755842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5942.050671565824,
            "unit": "ns/iter",
            "extra": "iterations: 117561\ncpu: 5941.829348168182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5881.135958834058,
            "unit": "ns/iter",
            "extra": "iterations: 118352\ncpu: 5880.988069487637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5925.668109459563,
            "unit": "ns/iter",
            "extra": "iterations: 117596\ncpu: 5925.677744140952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9912.04333872946,
            "unit": "ns/iter",
            "extra": "iterations: 70422\ncpu: 9911.962170912502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46727.691719604576,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 46727.337118443975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 199084.89739412814,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 199077.6640297813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157168.51671902326,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 157167.2824681322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155433.1487076732,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155425.82817619163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159690.87825435438,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159688.48098894948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 407663.05600379896,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 407648.69482676714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3166923.780405476,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166845.270270266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2590457.3905817494,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2590396.675900275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2568198.9834252615,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2568119.889502768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2596693.5138888583,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2596674.7222222253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1493100.5648000792,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1493078.559999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2490907.3546665846,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2490882.933333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10301173.456311023,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10300520.388349527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5988162.3012818005,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5988023.717948729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12438682.546512293,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12438086.046511602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46328.42372121429,
            "unit": "ns/iter",
            "extra": "iterations: 17849\ncpu: 46325.480419071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 191744.38421645045,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 191744.68996617786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 156224.41992688522,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 156220.01828153548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157623.73085461813,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 157622.34554198975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159886.06911405156,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159877.4864206778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 409591.3255703276,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 409591.8250950584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3166746.26689187,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166610.472972986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2614282.944615437,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2614076.307692305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2595058.7027779194,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2594936.388888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2635617.135977441,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2635459.4900849788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1510376.8026099917,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1510290.8646003262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2529928.91351344,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529769.4594594627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10475947.262136191,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10475131.06796116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5973128.819354931,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 5972849.677419387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45238.03330421381,
            "unit": "ns/iter",
            "extra": "iterations: 18316\ncpu: 45234.49989080569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 187668.2833883456,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 187656.5016501647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 154496.91502551638,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 154487.65499635309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157674.28695973038,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 157665.7391949542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 160210.15694729082,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 160195.18094880885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 402615.2536130583,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 402608.671328673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3145072.96633012,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3144882.828282836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2594150.3008355265,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2593944.568245135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2581539.9252079637,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2581405.540166207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2609116.754189975,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2608961.452513969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1510235.8171519835,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1510152.9126213642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2514101.6226413897,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2513916.442048512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3217.4171555093944,
            "unit": "ns/iter",
            "extra": "iterations: 217691\ncpu: 3217.3962175744296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21997.347703048075,
            "unit": "ns/iter",
            "extra": "iterations: 31803\ncpu: 21996.946828915374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16113.382289847308,
            "unit": "ns/iter",
            "extra": "iterations: 45217\ncpu: 16112.495300440116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15721.805698607166,
            "unit": "ns/iter",
            "extra": "iterations: 44467\ncpu: 15720.437627903786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13029.779310473567,
            "unit": "ns/iter",
            "extra": "iterations: 53718\ncpu: 13028.833910421194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 95228.50198931029,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 95223.0621484423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 202107.93589373046,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 202103.3496967956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50398.941235918945,
            "unit": "ns/iter",
            "extra": "iterations: 13852\ncpu: 50398.99653479682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 50251.60735451478,
            "unit": "ns/iter",
            "extra": "iterations: 14005\ncpu: 50249.68939664396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50980.67023368234,
            "unit": "ns/iter",
            "extra": "iterations: 13737\ncpu: 50980.2213001383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106139.32622182899,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 106133.69647450314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84312.46619260148,
            "unit": "ns/iter",
            "extra": "iterations: 8297\ncpu: 84306.5324816188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26223.662516457647,
            "unit": "ns/iter",
            "extra": "iterations: 26585\ncpu: 26221.335339476966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130386.03660130664,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130377.16153127806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 104191.4600720633,
            "unit": "ns/iter",
            "extra": "iterations: 6662\ncpu: 104186.16031221795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104421.71159874198,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 104420.43588595271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104949.0146948647,
            "unit": "ns/iter",
            "extra": "iterations: 6669\ncpu: 104949.13780176883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 191054.3605795268,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 191047.34827774545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 857231.6059112852,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 857204.4334975365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721413.8387097555,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 721407.5962538962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 721822.0010194528,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 721779.612640163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 724532.1438848762,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 724524.9743062734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 459154.29603123985,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 459133.897202345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 701105.6415094816,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 701106.5541211587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26309.216857982323,
            "unit": "ns/iter",
            "extra": "iterations: 26658\ncpu: 26308.781604020893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129945.4265799153,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 129941.57992565013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105557.1313450793,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 105551.48365717649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 105030.76918465651,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105027.18824940023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105244.26947656673,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 105244.41570298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 194379.6811875633,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 194371.69811320832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 852691.2426829058,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 852683.2926829281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 716411.3655244175,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 716380.1661474678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 713058.670385411,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 713039.249492891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 724527.9636552591,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 724529.1796469453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 458980.2199605769,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 458963.4931057126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 699108.6268958319,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 699100.910010111 ns\nthreads: 1"
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
        "date": 1702394261603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9146.186916254539,
            "unit": "ns/iter",
            "extra": "iterations: 76553\ncpu: 9145.90936997897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102013.80021545386,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 102011.43164950922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197338.45061315695,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 197333.31103678924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 291288.00507269765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 291288.33276969905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 380482.6932623828,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 380471.3652482269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 471968.81253373343,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 471951.80983252317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 571192.8235294127,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 571180 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 527726.9459999161,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527720.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 603961.3879999024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603953.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7202.541552144357,
            "unit": "ns/iter",
            "extra": "iterations: 97143\ncpu: 7202.486025755842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5942.050671565824,
            "unit": "ns/iter",
            "extra": "iterations: 117561\ncpu: 5941.829348168182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5881.135958834058,
            "unit": "ns/iter",
            "extra": "iterations: 118352\ncpu: 5880.988069487637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5925.668109459563,
            "unit": "ns/iter",
            "extra": "iterations: 117596\ncpu: 5925.677744140952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9912.04333872946,
            "unit": "ns/iter",
            "extra": "iterations: 70422\ncpu: 9911.962170912502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46727.691719604576,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 46727.337118443975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 199084.89739412814,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 199077.6640297813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157168.51671902326,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 157167.2824681322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155433.1487076732,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155425.82817619163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159690.87825435438,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159688.48098894948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 407663.05600379896,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 407648.69482676714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3166923.780405476,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166845.270270266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2590457.3905817494,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2590396.675900275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2568198.9834252615,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2568119.889502768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2596693.5138888583,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2596674.7222222253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1493100.5648000792,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1493078.559999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2490907.3546665846,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2490882.933333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10301173.456311023,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10300520.388349527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5988162.3012818005,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5988023.717948729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12438682.546512293,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12438086.046511602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46328.42372121429,
            "unit": "ns/iter",
            "extra": "iterations: 17849\ncpu: 46325.480419071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 191744.38421645045,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 191744.68996617786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 156224.41992688522,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 156220.01828153548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157623.73085461813,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 157622.34554198975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159886.06911405156,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159877.4864206778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 409591.3255703276,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 409591.8250950584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3166746.26689187,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166610.472972986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2614282.944615437,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2614076.307692305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2595058.7027779194,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2594936.388888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2635617.135977441,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2635459.4900849788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1510376.8026099917,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1510290.8646003262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2529928.91351344,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529769.4594594627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10475947.262136191,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10475131.06796116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5973128.819354931,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 5972849.677419387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45238.03330421381,
            "unit": "ns/iter",
            "extra": "iterations: 18316\ncpu: 45234.49989080569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 187668.2833883456,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 187656.5016501647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 154496.91502551638,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 154487.65499635309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157674.28695973038,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 157665.7391949542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 160210.15694729082,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 160195.18094880885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 402615.2536130583,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 402608.671328673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3145072.96633012,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3144882.828282836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2594150.3008355265,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2593944.568245135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2581539.9252079637,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2581405.540166207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2609116.754189975,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2608961.452513969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1510235.8171519835,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1510152.9126213642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2514101.6226413897,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2513916.442048512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3217.4171555093944,
            "unit": "ns/iter",
            "extra": "iterations: 217691\ncpu: 3217.3962175744296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21997.347703048075,
            "unit": "ns/iter",
            "extra": "iterations: 31803\ncpu: 21996.946828915374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16113.382289847308,
            "unit": "ns/iter",
            "extra": "iterations: 45217\ncpu: 16112.495300440116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15721.805698607166,
            "unit": "ns/iter",
            "extra": "iterations: 44467\ncpu: 15720.437627903786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13029.779310473567,
            "unit": "ns/iter",
            "extra": "iterations: 53718\ncpu: 13028.833910421194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 95228.50198931029,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 95223.0621484423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 202107.93589373046,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 202103.3496967956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50398.941235918945,
            "unit": "ns/iter",
            "extra": "iterations: 13852\ncpu: 50398.99653479682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 50251.60735451478,
            "unit": "ns/iter",
            "extra": "iterations: 14005\ncpu: 50249.68939664396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50980.67023368234,
            "unit": "ns/iter",
            "extra": "iterations: 13737\ncpu: 50980.2213001383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106139.32622182899,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 106133.69647450314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84312.46619260148,
            "unit": "ns/iter",
            "extra": "iterations: 8297\ncpu: 84306.5324816188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26223.662516457647,
            "unit": "ns/iter",
            "extra": "iterations: 26585\ncpu: 26221.335339476966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130386.03660130664,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130377.16153127806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 104191.4600720633,
            "unit": "ns/iter",
            "extra": "iterations: 6662\ncpu: 104186.16031221795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104421.71159874198,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 104420.43588595271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104949.0146948647,
            "unit": "ns/iter",
            "extra": "iterations: 6669\ncpu: 104949.13780176883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 191054.3605795268,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 191047.34827774545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 857231.6059112852,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 857204.4334975365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721413.8387097555,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 721407.5962538962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 721822.0010194528,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 721779.612640163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 724532.1438848762,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 724524.9743062734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 459154.29603123985,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 459133.897202345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 701105.6415094816,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 701106.5541211587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26309.216857982323,
            "unit": "ns/iter",
            "extra": "iterations: 26658\ncpu: 26308.781604020893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129945.4265799153,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 129941.57992565013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105557.1313450793,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 105551.48365717649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 105030.76918465651,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105027.18824940023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105244.26947656673,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 105244.41570298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 194379.6811875633,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 194371.69811320832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 852691.2426829058,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 852683.2926829281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 716411.3655244175,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 716380.1661474678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 713058.670385411,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 713039.249492891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 724527.9636552591,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 724529.1796469453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 458980.2199605769,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 458963.4931057126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 699108.6268958319,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 699100.910010111 ns\nthreads: 1"
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
        "date": 1702394261603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9146.186916254539,
            "unit": "ns/iter",
            "extra": "iterations: 76553\ncpu: 9145.90936997897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102013.80021545386,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 102011.43164950922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197338.45061315695,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 197333.31103678924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 291288.00507269765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 291288.33276969905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 380482.6932623828,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 380471.3652482269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 471968.81253373343,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 471951.80983252317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 571192.8235294127,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 571180 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 527726.9459999161,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527720.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 603961.3879999024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603953.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7202.541552144357,
            "unit": "ns/iter",
            "extra": "iterations: 97143\ncpu: 7202.486025755842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5942.050671565824,
            "unit": "ns/iter",
            "extra": "iterations: 117561\ncpu: 5941.829348168182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5881.135958834058,
            "unit": "ns/iter",
            "extra": "iterations: 118352\ncpu: 5880.988069487637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5925.668109459563,
            "unit": "ns/iter",
            "extra": "iterations: 117596\ncpu: 5925.677744140952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9912.04333872946,
            "unit": "ns/iter",
            "extra": "iterations: 70422\ncpu: 9911.962170912502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46727.691719604576,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 46727.337118443975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 199084.89739412814,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 199077.6640297813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157168.51671902326,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 157167.2824681322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155433.1487076732,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155425.82817619163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159690.87825435438,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159688.48098894948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 407663.05600379896,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 407648.69482676714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3166923.780405476,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166845.270270266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2590457.3905817494,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2590396.675900275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2568198.9834252615,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2568119.889502768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2596693.5138888583,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2596674.7222222253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1493100.5648000792,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1493078.559999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2490907.3546665846,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2490882.933333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10301173.456311023,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10300520.388349527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5988162.3012818005,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5988023.717948729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12438682.546512293,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12438086.046511602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46328.42372121429,
            "unit": "ns/iter",
            "extra": "iterations: 17849\ncpu: 46325.480419071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 191744.38421645045,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 191744.68996617786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 156224.41992688522,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 156220.01828153548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157623.73085461813,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 157622.34554198975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159886.06911405156,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159877.4864206778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 409591.3255703276,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 409591.8250950584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3166746.26689187,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166610.472972986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2614282.944615437,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2614076.307692305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2595058.7027779194,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2594936.388888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2635617.135977441,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2635459.4900849788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1510376.8026099917,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1510290.8646003262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2529928.91351344,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529769.4594594627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10475947.262136191,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10475131.06796116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5973128.819354931,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 5972849.677419387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45238.03330421381,
            "unit": "ns/iter",
            "extra": "iterations: 18316\ncpu: 45234.49989080569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 187668.2833883456,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 187656.5016501647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 154496.91502551638,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 154487.65499635309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157674.28695973038,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 157665.7391949542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 160210.15694729082,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 160195.18094880885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 402615.2536130583,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 402608.671328673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3145072.96633012,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3144882.828282836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2594150.3008355265,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2593944.568245135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2581539.9252079637,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2581405.540166207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2609116.754189975,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2608961.452513969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1510235.8171519835,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1510152.9126213642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2514101.6226413897,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2513916.442048512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3217.4171555093944,
            "unit": "ns/iter",
            "extra": "iterations: 217691\ncpu: 3217.3962175744296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21997.347703048075,
            "unit": "ns/iter",
            "extra": "iterations: 31803\ncpu: 21996.946828915374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16113.382289847308,
            "unit": "ns/iter",
            "extra": "iterations: 45217\ncpu: 16112.495300440116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15721.805698607166,
            "unit": "ns/iter",
            "extra": "iterations: 44467\ncpu: 15720.437627903786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13029.779310473567,
            "unit": "ns/iter",
            "extra": "iterations: 53718\ncpu: 13028.833910421194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 95228.50198931029,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 95223.0621484423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 202107.93589373046,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 202103.3496967956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50398.941235918945,
            "unit": "ns/iter",
            "extra": "iterations: 13852\ncpu: 50398.99653479682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 50251.60735451478,
            "unit": "ns/iter",
            "extra": "iterations: 14005\ncpu: 50249.68939664396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50980.67023368234,
            "unit": "ns/iter",
            "extra": "iterations: 13737\ncpu: 50980.2213001383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106139.32622182899,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 106133.69647450314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84312.46619260148,
            "unit": "ns/iter",
            "extra": "iterations: 8297\ncpu: 84306.5324816188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26223.662516457647,
            "unit": "ns/iter",
            "extra": "iterations: 26585\ncpu: 26221.335339476966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130386.03660130664,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130377.16153127806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 104191.4600720633,
            "unit": "ns/iter",
            "extra": "iterations: 6662\ncpu: 104186.16031221795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104421.71159874198,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 104420.43588595271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104949.0146948647,
            "unit": "ns/iter",
            "extra": "iterations: 6669\ncpu: 104949.13780176883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 191054.3605795268,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 191047.34827774545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 857231.6059112852,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 857204.4334975365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721413.8387097555,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 721407.5962538962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 721822.0010194528,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 721779.612640163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 724532.1438848762,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 724524.9743062734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 459154.29603123985,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 459133.897202345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 701105.6415094816,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 701106.5541211587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26309.216857982323,
            "unit": "ns/iter",
            "extra": "iterations: 26658\ncpu: 26308.781604020893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129945.4265799153,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 129941.57992565013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105557.1313450793,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 105551.48365717649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 105030.76918465651,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105027.18824940023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105244.26947656673,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 105244.41570298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 194379.6811875633,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 194371.69811320832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 852691.2426829058,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 852683.2926829281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 716411.3655244175,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 716380.1661474678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 713058.670385411,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 713039.249492891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 724527.9636552591,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 724529.1796469453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 458980.2199605769,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 458963.4931057126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 699108.6268958319,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 699100.910010111 ns\nthreads: 1"
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
        "date": 1702394261603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9146.186916254539,
            "unit": "ns/iter",
            "extra": "iterations: 76553\ncpu: 9145.90936997897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 102013.80021545386,
            "unit": "ns/iter",
            "extra": "iterations: 8354\ncpu: 102011.43164950922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197338.45061315695,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 197333.31103678924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 291288.00507269765,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 291288.33276969905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 380482.6932623828,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 380471.3652482269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 471968.81253373343,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 471951.80983252317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 571192.8235294127,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 571180 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 527726.9459999161,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527720.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 603961.3879999024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603953.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7202.541552144357,
            "unit": "ns/iter",
            "extra": "iterations: 97143\ncpu: 7202.486025755842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5942.050671565824,
            "unit": "ns/iter",
            "extra": "iterations: 117561\ncpu: 5941.829348168182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5881.135958834058,
            "unit": "ns/iter",
            "extra": "iterations: 118352\ncpu: 5880.988069487637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5925.668109459563,
            "unit": "ns/iter",
            "extra": "iterations: 117596\ncpu: 5925.677744140952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9912.04333872946,
            "unit": "ns/iter",
            "extra": "iterations: 70422\ncpu: 9911.962170912502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46727.691719604576,
            "unit": "ns/iter",
            "extra": "iterations: 17789\ncpu: 46727.337118443975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 199084.89739412814,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 199077.6640297813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157168.51671902326,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 157167.2824681322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155433.1487076732,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155425.82817619163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159690.87825435438,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159688.48098894948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 407663.05600379896,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 407648.69482676714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3166923.780405476,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166845.270270266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2590457.3905817494,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2590396.675900275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2568198.9834252615,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2568119.889502768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2596693.5138888583,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2596674.7222222253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1493100.5648000792,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1493078.559999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2490907.3546665846,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2490882.933333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10301173.456311023,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10300520.388349527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5988162.3012818005,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5988023.717948729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12438682.546512293,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12438086.046511602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46328.42372121429,
            "unit": "ns/iter",
            "extra": "iterations: 17849\ncpu: 46325.480419071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 191744.38421645045,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 191744.68996617786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 156224.41992688522,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 156220.01828153548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157623.73085461813,
            "unit": "ns/iter",
            "extra": "iterations: 5406\ncpu: 157622.34554198975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159886.06911405156,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 159877.4864206778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 409591.3255703276,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 409591.8250950584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3166746.26689187,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3166610.472972986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2614282.944615437,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2614076.307692305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2595058.7027779194,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2594936.388888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2635617.135977441,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2635459.4900849788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1510376.8026099917,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1510290.8646003262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2529928.91351344,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2529769.4594594627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10475947.262136191,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10475131.06796116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5973128.819354931,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 5972849.677419387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45238.03330421381,
            "unit": "ns/iter",
            "extra": "iterations: 18316\ncpu: 45234.49989080569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 187668.2833883456,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 187656.5016501647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 154496.91502551638,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 154487.65499635309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157674.28695973038,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 157665.7391949542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 160210.15694729082,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 160195.18094880885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 402615.2536130583,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 402608.671328673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3145072.96633012,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3144882.828282836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2594150.3008355265,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2593944.568245135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2581539.9252079637,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2581405.540166207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2609116.754189975,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2608961.452513969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1510235.8171519835,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1510152.9126213642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2514101.6226413897,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2513916.442048512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3217.4171555093944,
            "unit": "ns/iter",
            "extra": "iterations: 217691\ncpu: 3217.3962175744296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21997.347703048075,
            "unit": "ns/iter",
            "extra": "iterations: 31803\ncpu: 21996.946828915374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16113.382289847308,
            "unit": "ns/iter",
            "extra": "iterations: 45217\ncpu: 16112.495300440116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15721.805698607166,
            "unit": "ns/iter",
            "extra": "iterations: 44467\ncpu: 15720.437627903786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13029.779310473567,
            "unit": "ns/iter",
            "extra": "iterations: 53718\ncpu: 13028.833910421194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 95228.50198931029,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 95223.0621484423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 202107.93589373046,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 202103.3496967956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50398.941235918945,
            "unit": "ns/iter",
            "extra": "iterations: 13852\ncpu: 50398.99653479682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 50251.60735451478,
            "unit": "ns/iter",
            "extra": "iterations: 14005\ncpu: 50249.68939664396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50980.67023368234,
            "unit": "ns/iter",
            "extra": "iterations: 13737\ncpu: 50980.2213001383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106139.32622182899,
            "unit": "ns/iter",
            "extra": "iterations: 6609\ncpu: 106133.69647450314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84312.46619260148,
            "unit": "ns/iter",
            "extra": "iterations: 8297\ncpu: 84306.5324816188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26223.662516457647,
            "unit": "ns/iter",
            "extra": "iterations: 26585\ncpu: 26221.335339476966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130386.03660130664,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130377.16153127806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 104191.4600720633,
            "unit": "ns/iter",
            "extra": "iterations: 6662\ncpu: 104186.16031221795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 104421.71159874198,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 104420.43588595271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104949.0146948647,
            "unit": "ns/iter",
            "extra": "iterations: 6669\ncpu: 104949.13780176883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 191054.3605795268,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 191047.34827774545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 857231.6059112852,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 857204.4334975365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 721413.8387097555,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 721407.5962538962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 721822.0010194528,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 721779.612640163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 724532.1438848762,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 724524.9743062734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 459154.29603123985,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 459133.897202345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 701105.6415094816,
            "unit": "ns/iter",
            "extra": "iterations: 1007\ncpu: 701106.5541211587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26309.216857982323,
            "unit": "ns/iter",
            "extra": "iterations: 26658\ncpu: 26308.781604020893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129945.4265799153,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 129941.57992565013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 105557.1313450793,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 105551.48365717649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 105030.76918465651,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 105027.18824940023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105244.26947656673,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 105244.41570298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 194379.6811875633,
            "unit": "ns/iter",
            "extra": "iterations: 3604\ncpu: 194371.69811320832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 852691.2426829058,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 852683.2926829281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 716411.3655244175,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 716380.1661474678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 713058.670385411,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 713039.249492891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 724527.9636552591,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 724529.1796469453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 458980.2199605769,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 458963.4931057126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 699108.6268958319,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 699100.910010111 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}