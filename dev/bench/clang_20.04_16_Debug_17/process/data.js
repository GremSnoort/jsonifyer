window.BENCHMARK_DATA = {
  "lastUpdate": 1702394266499,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-16 20.04 Debug c++-17": [
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
        "date": 1702394262091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15333.940423479326,
            "unit": "ns/iter",
            "extra": "iterations: 45622\ncpu: 15333.455350488799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145122.10571285393,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 145115.44647344618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 270628.4710821003,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 270618.34577114426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 396882.0818098734,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 396868.05301645334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 532708.7561709827,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 532685.6712823599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527279.8120000175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527252.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 631928.3830000587,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631894.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 734303.0514240635,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 734273.022151899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 834439.4564240836,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 834409.883198562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11796.094527194125,
            "unit": "ns/iter",
            "extra": "iterations: 59348\ncpu: 11795.801037945703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9740.575161393788,
            "unit": "ns/iter",
            "extra": "iterations: 71719\ncpu: 9740.09118922461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9754.664196258096,
            "unit": "ns/iter",
            "extra": "iterations: 71783\ncpu: 9753.894376105769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9728.804779380682,
            "unit": "ns/iter",
            "extra": "iterations: 71934\ncpu: 9728.04793282732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16858.09411035326,
            "unit": "ns/iter",
            "extra": "iterations: 40325\ncpu: 16857.897086174842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55720.89190000043,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55718.68000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 290443.94049641147,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 290430.09180550807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234198.60732983958,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 234190.05235602098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231220.65541644653,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 231217.90963527487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229650.82313107757,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 229645.20585048816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 548350.0106918443,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 548280.3773584897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4367688.558685364,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4367259.154929576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3637722.4901963356,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3637309.803921577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3593456.6872585425,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3593181.853281849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3590627.0077217612,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3590214.6718146694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2085601.254504309,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2085438.9639639673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3495265.187969968,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3494990.2255639215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14089370.77631609,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14064571.052631585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6378841.040000225,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6378167.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17635554.716666017,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17633623.333333347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63656.77466258653,
            "unit": "ns/iter",
            "extra": "iterations: 13411\ncpu: 63652.292893892954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327636.63632874255,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 327593.6251920128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 262929.122877437,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 262913.8623031789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 262180.2701290677,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 262171.1739397684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 259106.34207315437,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 259095.27439024547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 571453.9135313694,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 571423.1023102283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4457132.842105421,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4456938.755980837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3687960.2608694574,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3687823.7154150163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3665006.3294116845,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3664755.2941176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3643553.000000299,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3643443.750000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2107139.281818087,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2107064.9999999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3543095.129277594,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3542952.091254765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14236436.426666236,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14235517.333333405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6323324.689999482,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6322949.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53139.70820000122,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53131.139999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 284625.8098897344,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 284600.1670564657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 233773.99094650534,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 233749.49245541904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 231149.4702219829,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 231134.13643746535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 232687.19405832913,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 232662.19678386647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 538655.8045905636,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 538595.0372208402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4424944.25592421,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4424788.625592443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3618832.5369646293,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3618593.7743190597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3630487.7937744926,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3630283.2684824816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3620642.2957197707,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3620401.5564202303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2101414.9954854758,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2101284.4243792356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3511836.7849055985,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3511539.622641501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5618.7674901076,
            "unit": "ns/iter",
            "extra": "iterations: 124842\ncpu: 5618.35520097403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37521.70424424493,
            "unit": "ns/iter",
            "extra": "iterations: 18637\ncpu: 37521.253420614965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28929.824192678025,
            "unit": "ns/iter",
            "extra": "iterations: 24123\ncpu: 28929.129876052055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29699.993814946272,
            "unit": "ns/iter",
            "extra": "iterations: 24252\ncpu: 29698.51970971453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22408.022646464466,
            "unit": "ns/iter",
            "extra": "iterations: 31219\ncpu: 22407.47621640672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150967.81471094638,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 150961.4322691969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 296953.76468085434,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 296944.255319147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74257.58110403227,
            "unit": "ns/iter",
            "extra": "iterations: 9420\ncpu: 74255.37154989413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74316.40040262717,
            "unit": "ns/iter",
            "extra": "iterations: 9438\ncpu: 74313.78470014861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74282.5915029169,
            "unit": "ns/iter",
            "extra": "iterations: 9415\ncpu: 74280.1699415839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153910.5559479153,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 153906.04723019234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 141467.62591093674,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 141462.55060728732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43499.00310327817,
            "unit": "ns/iter",
            "extra": "iterations: 16112\ncpu: 43497.38704071513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218691.23207014994,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 218680.0501096118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174917.70711609084,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 174911.0362047414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 176283.07798743394,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 176278.76729559747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180080.90824301823,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 180073.53163599918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 315719.00632913876,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 315697.4231464763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1263754.641304265,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1263724.275362311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1065904.0045591728,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1065892.2492401148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1062816.3510639027,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1062749.6960486162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1055485.9593374734,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1055404.8192771054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 682155.1328124453,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 682119.0429687485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1076264.5215309428,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1076194.7368420947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43898.84572829465,
            "unit": "ns/iter",
            "extra": "iterations: 15907\ncpu: 43896.80015087661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224043.04896001122,
            "unit": "ns/iter",
            "extra": "iterations: 3125\ncpu: 224036.35199999824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179334.43828583523,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 179327.0977675131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178668.20235956326,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 178658.37394203353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 179072.6516161851,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179068.471010776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318753.0949976899,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 318744.6535107849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1254165.9046761368,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1254121.2230215783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1065143.8082191828,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1065102.5875190266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1060867.109090981,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1060838.6363636348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1053427.7187970562,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1053392.6315789449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 678793.4696673851,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 678760.7632093884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1055182.6240602087,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1055117.894736839 ns\nthreads: 1"
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
        "date": 1702394262091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15333.940423479326,
            "unit": "ns/iter",
            "extra": "iterations: 45622\ncpu: 15333.455350488799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145122.10571285393,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 145115.44647344618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 270628.4710821003,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 270618.34577114426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 396882.0818098734,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 396868.05301645334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 532708.7561709827,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 532685.6712823599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527279.8120000175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527252.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 631928.3830000587,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631894.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 734303.0514240635,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 734273.022151899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 834439.4564240836,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 834409.883198562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11796.094527194125,
            "unit": "ns/iter",
            "extra": "iterations: 59348\ncpu: 11795.801037945703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9740.575161393788,
            "unit": "ns/iter",
            "extra": "iterations: 71719\ncpu: 9740.09118922461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9754.664196258096,
            "unit": "ns/iter",
            "extra": "iterations: 71783\ncpu: 9753.894376105769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9728.804779380682,
            "unit": "ns/iter",
            "extra": "iterations: 71934\ncpu: 9728.04793282732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16858.09411035326,
            "unit": "ns/iter",
            "extra": "iterations: 40325\ncpu: 16857.897086174842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55720.89190000043,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55718.68000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 290443.94049641147,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 290430.09180550807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234198.60732983958,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 234190.05235602098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231220.65541644653,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 231217.90963527487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229650.82313107757,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 229645.20585048816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 548350.0106918443,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 548280.3773584897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4367688.558685364,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4367259.154929576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3637722.4901963356,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3637309.803921577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3593456.6872585425,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3593181.853281849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3590627.0077217612,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3590214.6718146694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2085601.254504309,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2085438.9639639673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3495265.187969968,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3494990.2255639215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14089370.77631609,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14064571.052631585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6378841.040000225,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6378167.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17635554.716666017,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17633623.333333347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63656.77466258653,
            "unit": "ns/iter",
            "extra": "iterations: 13411\ncpu: 63652.292893892954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327636.63632874255,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 327593.6251920128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 262929.122877437,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 262913.8623031789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 262180.2701290677,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 262171.1739397684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 259106.34207315437,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 259095.27439024547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 571453.9135313694,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 571423.1023102283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4457132.842105421,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4456938.755980837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3687960.2608694574,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3687823.7154150163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3665006.3294116845,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3664755.2941176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3643553.000000299,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3643443.750000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2107139.281818087,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2107064.9999999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3543095.129277594,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3542952.091254765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14236436.426666236,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14235517.333333405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6323324.689999482,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6322949.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53139.70820000122,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53131.139999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 284625.8098897344,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 284600.1670564657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 233773.99094650534,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 233749.49245541904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 231149.4702219829,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 231134.13643746535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 232687.19405832913,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 232662.19678386647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 538655.8045905636,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 538595.0372208402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4424944.25592421,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4424788.625592443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3618832.5369646293,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3618593.7743190597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3630487.7937744926,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3630283.2684824816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3620642.2957197707,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3620401.5564202303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2101414.9954854758,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2101284.4243792356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3511836.7849055985,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3511539.622641501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5618.7674901076,
            "unit": "ns/iter",
            "extra": "iterations: 124842\ncpu: 5618.35520097403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37521.70424424493,
            "unit": "ns/iter",
            "extra": "iterations: 18637\ncpu: 37521.253420614965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28929.824192678025,
            "unit": "ns/iter",
            "extra": "iterations: 24123\ncpu: 28929.129876052055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29699.993814946272,
            "unit": "ns/iter",
            "extra": "iterations: 24252\ncpu: 29698.51970971453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22408.022646464466,
            "unit": "ns/iter",
            "extra": "iterations: 31219\ncpu: 22407.47621640672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150967.81471094638,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 150961.4322691969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 296953.76468085434,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 296944.255319147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74257.58110403227,
            "unit": "ns/iter",
            "extra": "iterations: 9420\ncpu: 74255.37154989413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74316.40040262717,
            "unit": "ns/iter",
            "extra": "iterations: 9438\ncpu: 74313.78470014861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74282.5915029169,
            "unit": "ns/iter",
            "extra": "iterations: 9415\ncpu: 74280.1699415839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153910.5559479153,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 153906.04723019234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 141467.62591093674,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 141462.55060728732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43499.00310327817,
            "unit": "ns/iter",
            "extra": "iterations: 16112\ncpu: 43497.38704071513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218691.23207014994,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 218680.0501096118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174917.70711609084,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 174911.0362047414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 176283.07798743394,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 176278.76729559747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180080.90824301823,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 180073.53163599918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 315719.00632913876,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 315697.4231464763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1263754.641304265,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1263724.275362311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1065904.0045591728,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1065892.2492401148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1062816.3510639027,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1062749.6960486162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1055485.9593374734,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1055404.8192771054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 682155.1328124453,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 682119.0429687485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1076264.5215309428,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1076194.7368420947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43898.84572829465,
            "unit": "ns/iter",
            "extra": "iterations: 15907\ncpu: 43896.80015087661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224043.04896001122,
            "unit": "ns/iter",
            "extra": "iterations: 3125\ncpu: 224036.35199999824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179334.43828583523,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 179327.0977675131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178668.20235956326,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 178658.37394203353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 179072.6516161851,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179068.471010776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318753.0949976899,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 318744.6535107849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1254165.9046761368,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1254121.2230215783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1065143.8082191828,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1065102.5875190266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1060867.109090981,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1060838.6363636348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1053427.7187970562,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1053392.6315789449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 678793.4696673851,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 678760.7632093884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1055182.6240602087,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1055117.894736839 ns\nthreads: 1"
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
        "date": 1702394262091,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15333.940423479326,
            "unit": "ns/iter",
            "extra": "iterations: 45622\ncpu: 15333.455350488799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145122.10571285393,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 145115.44647344618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 270628.4710821003,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 270618.34577114426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 396882.0818098734,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 396868.05301645334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 532708.7561709827,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 532685.6712823599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527279.8120000175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527252.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 631928.3830000587,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631894.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 734303.0514240635,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 734273.022151899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 834439.4564240836,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 834409.883198562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11796.094527194125,
            "unit": "ns/iter",
            "extra": "iterations: 59348\ncpu: 11795.801037945703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9740.575161393788,
            "unit": "ns/iter",
            "extra": "iterations: 71719\ncpu: 9740.09118922461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9754.664196258096,
            "unit": "ns/iter",
            "extra": "iterations: 71783\ncpu: 9753.894376105769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9728.804779380682,
            "unit": "ns/iter",
            "extra": "iterations: 71934\ncpu: 9728.04793282732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16858.09411035326,
            "unit": "ns/iter",
            "extra": "iterations: 40325\ncpu: 16857.897086174842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55720.89190000043,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55718.68000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 290443.94049641147,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 290430.09180550807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234198.60732983958,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 234190.05235602098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231220.65541644653,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 231217.90963527487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229650.82313107757,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 229645.20585048816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 548350.0106918443,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 548280.3773584897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4367688.558685364,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4367259.154929576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3637722.4901963356,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3637309.803921577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3593456.6872585425,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3593181.853281849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3590627.0077217612,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3590214.6718146694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2085601.254504309,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2085438.9639639673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3495265.187969968,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3494990.2255639215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14089370.77631609,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14064571.052631585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6378841.040000225,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6378167.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17635554.716666017,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17633623.333333347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63656.77466258653,
            "unit": "ns/iter",
            "extra": "iterations: 13411\ncpu: 63652.292893892954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327636.63632874255,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 327593.6251920128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 262929.122877437,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 262913.8623031789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 262180.2701290677,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 262171.1739397684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 259106.34207315437,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 259095.27439024547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 571453.9135313694,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 571423.1023102283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4457132.842105421,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4456938.755980837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3687960.2608694574,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3687823.7154150163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3665006.3294116845,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3664755.2941176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3643553.000000299,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3643443.750000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2107139.281818087,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2107064.9999999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3543095.129277594,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3542952.091254765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14236436.426666236,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14235517.333333405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6323324.689999482,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6322949.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53139.70820000122,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53131.139999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 284625.8098897344,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 284600.1670564657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 233773.99094650534,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 233749.49245541904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 231149.4702219829,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 231134.13643746535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 232687.19405832913,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 232662.19678386647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 538655.8045905636,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 538595.0372208402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4424944.25592421,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4424788.625592443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3618832.5369646293,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3618593.7743190597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3630487.7937744926,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3630283.2684824816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3620642.2957197707,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3620401.5564202303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2101414.9954854758,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2101284.4243792356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3511836.7849055985,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3511539.622641501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5618.7674901076,
            "unit": "ns/iter",
            "extra": "iterations: 124842\ncpu: 5618.35520097403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37521.70424424493,
            "unit": "ns/iter",
            "extra": "iterations: 18637\ncpu: 37521.253420614965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28929.824192678025,
            "unit": "ns/iter",
            "extra": "iterations: 24123\ncpu: 28929.129876052055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29699.993814946272,
            "unit": "ns/iter",
            "extra": "iterations: 24252\ncpu: 29698.51970971453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22408.022646464466,
            "unit": "ns/iter",
            "extra": "iterations: 31219\ncpu: 22407.47621640672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150967.81471094638,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 150961.4322691969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 296953.76468085434,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 296944.255319147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74257.58110403227,
            "unit": "ns/iter",
            "extra": "iterations: 9420\ncpu: 74255.37154989413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74316.40040262717,
            "unit": "ns/iter",
            "extra": "iterations: 9438\ncpu: 74313.78470014861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74282.5915029169,
            "unit": "ns/iter",
            "extra": "iterations: 9415\ncpu: 74280.1699415839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153910.5559479153,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 153906.04723019234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 141467.62591093674,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 141462.55060728732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43499.00310327817,
            "unit": "ns/iter",
            "extra": "iterations: 16112\ncpu: 43497.38704071513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218691.23207014994,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 218680.0501096118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174917.70711609084,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 174911.0362047414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 176283.07798743394,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 176278.76729559747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180080.90824301823,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 180073.53163599918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 315719.00632913876,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 315697.4231464763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1263754.641304265,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1263724.275362311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1065904.0045591728,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1065892.2492401148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1062816.3510639027,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1062749.6960486162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1055485.9593374734,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1055404.8192771054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 682155.1328124453,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 682119.0429687485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1076264.5215309428,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1076194.7368420947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43898.84572829465,
            "unit": "ns/iter",
            "extra": "iterations: 15907\ncpu: 43896.80015087661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224043.04896001122,
            "unit": "ns/iter",
            "extra": "iterations: 3125\ncpu: 224036.35199999824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179334.43828583523,
            "unit": "ns/iter",
            "extra": "iterations: 3897\ncpu: 179327.0977675131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178668.20235956326,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 178658.37394203353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 179072.6516161851,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179068.471010776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 318753.0949976899,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 318744.6535107849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1254165.9046761368,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1254121.2230215783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1065143.8082191828,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1065102.5875190266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1060867.109090981,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1060838.6363636348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1053427.7187970562,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1053392.6315789449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 678793.4696673851,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 678760.7632093884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1055182.6240602087,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1055117.894736839 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}