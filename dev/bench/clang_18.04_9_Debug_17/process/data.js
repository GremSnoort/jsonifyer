window.BENCHMARK_DATA = {
  "lastUpdate": 1702392445421,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-9 18.04 Debug c++-17": [
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
        "date": 1702392444663,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18722.674285409328,
            "unit": "ns/iter",
            "extra": "iterations: 37539\ncpu: 18722.11033858121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 174623.5445422921,
            "unit": "ns/iter",
            "extra": "iterations: 4883\ncpu: 174608.2940815073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 329076.5662100301,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 329070.5479452055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 481871.289210242,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 481840.6562847609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 512827.2210000091,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512814.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 646404.6859999826,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646354.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 766044.0331674947,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 766007.7943615257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 890689.0124880158,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 890634.3900096065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 1014940.6622807003,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 1014908.1140350869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 15295.333697910584,
            "unit": "ns/iter",
            "extra": "iterations: 45715\ncpu: 15295.321010609212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12466.181502272213,
            "unit": "ns/iter",
            "extra": "iterations: 56115\ncpu: 12466.0019602602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12390.131776908926,
            "unit": "ns/iter",
            "extra": "iterations: 56497\ncpu: 12389.560507637574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12568.03257830965,
            "unit": "ns/iter",
            "extra": "iterations: 55804\ncpu: 12566.57945666975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 21475.424298488535,
            "unit": "ns/iter",
            "extra": "iterations: 32430\ncpu: 21474.412580943535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 73577.35760392374,
            "unit": "ns/iter",
            "extra": "iterations: 11619\ncpu: 73573.64661330578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 367869.9538195888,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 367854.81225722894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 295597.49482401594,
            "unit": "ns/iter",
            "extra": "iterations: 2898\ncpu: 295581.22843340196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 296196.5744089012,
            "unit": "ns/iter",
            "extra": "iterations: 2876\ncpu: 296188.94297635584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 289924.00068354036,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 289911.4490772382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 609532.922000028,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609500.4000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5452430.276470549,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 5451911.176470587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4432279.423809589,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4432033.333333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4365249.145539757,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4365075.586854462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4363484.113207559,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4363253.301886794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2527008.402173869,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2526936.6847826065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4290946.40552992,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4290759.44700461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 16815742.80952364,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16815090.476190526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7505440.140000132,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7505065.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 21543251.1632659,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 21542595.918367304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 80497.3915503611,
            "unit": "ns/iter",
            "extra": "iterations: 10604\ncpu: 80494.33232742352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 407541.20409135014,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 407526.16555661254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 323736.83919788926,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 323723.9878925476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 328342.0646153865,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 328329.0384615365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 320070.19489296427,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 320066.5039429214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 585568.7019999891,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585541.8999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5513367.434523903,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5513286.904761912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4516887.473429877,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4516730.434782602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4471745.722487989,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4471517.224880398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4443041.184833981,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4442906.635071097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2684495.4585635164,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2678842.5414364613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4343946.827907002,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4343731.1627906915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 17179039.870968387,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 17178588.709677525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7277222.650000112,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7276821.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 69615.09368084688,
            "unit": "ns/iter",
            "extra": "iterations: 12201\ncpu: 69613.11367920692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 387065.75810811104,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 387037.34234234184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 307188.37085634685,
            "unit": "ns/iter",
            "extra": "iterations: 2896\ncpu: 307176.4848066309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 286070.2450486775,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 286059.24806982203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 287920.29720633355,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 287912.6893301911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 561665.6110000235,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561633.8999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5466652.176470595,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 5466274.117647049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4448705.147619118,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4448571.9047618965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4404177.476414871,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4403904.716981149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4370236.328638508,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4370115.023474193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2531128.42506802,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2530948.2288828483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4295602.714285729,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4295324.423963158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6990.002290152755,
            "unit": "ns/iter",
            "extra": "iterations: 100430\ncpu: 6989.77994623119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 44163.3985223542,
            "unit": "ns/iter",
            "extra": "iterations: 15836\ncpu: 44161.126547108164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 34810.492416330715,
            "unit": "ns/iter",
            "extra": "iterations: 20109\ncpu: 34809.0655925208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 35904.71066620327,
            "unit": "ns/iter",
            "extra": "iterations: 20129\ncpu: 35902.72244026042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 27155.084075097126,
            "unit": "ns/iter",
            "extra": "iterations: 25727\ncpu: 27153.931667120174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 198711.3852924497,
            "unit": "ns/iter",
            "extra": "iterations: 3522\ncpu: 198693.015332194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 368868.62941487273,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 368848.02319451666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 90023.88535114117,
            "unit": "ns/iter",
            "extra": "iterations: 7789\ncpu: 90019.23225060973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 90281.11058064642,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 90278.25806451654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 90116.71004243246,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 90115.22437958088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 183887.94405043512,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 183876.41187286613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 172443.1655988136,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 172434.7954657492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 55258.19145907116,
            "unit": "ns/iter",
            "extra": "iterations: 12645\ncpu: 55252.96955318377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 268134.25940138777,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 268120.9516500342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 220074.20903953834,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 220052.9817953572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 222584.52971083534,
            "unit": "ns/iter",
            "extra": "iterations: 3147\ncpu: 222576.77152843983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 222291.1674078822,
            "unit": "ns/iter",
            "extra": "iterations: 3148\ncpu: 222278.78017789128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 394465.62915029295,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 394442.54361283354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1564480.03794653,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 1564368.3035714126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1310539.2654205535,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1310512.710280354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1299359.2314814946,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1299332.7777777538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1301965.4934821916,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1301916.9459962829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 845539.1847825608,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 845490.0966183457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1290587.451016589,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1290537.1534195945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 55360.64784264536,
            "unit": "ns/iter",
            "extra": "iterations: 12608\ncpu: 55359.041878172844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 275417.66273585014,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 275403.89150943235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 223280.10405362467,
            "unit": "ns/iter",
            "extra": "iterations: 3133\ncpu: 223273.60357484999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 228171.71220748784,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 228161.66982922205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 224297.98716713884,
            "unit": "ns/iter",
            "extra": "iterations: 3117\ncpu: 224291.8511389163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 395318.83474331285,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 395296.6723068184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1551574.7044443944,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 1551442.6666666735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1305951.6000000585,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1305922.452830195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1295502.907578633,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1295422.735674678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1295646.8851851039,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1295626.2962962878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 831690.279569948,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 831591.8757467268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1288927.6691177795,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1288874.26470588 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}