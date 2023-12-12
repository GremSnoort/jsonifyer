window.BENCHMARK_DATA = {
  "lastUpdate": 1702394251019,
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
        "date": 1702394242239,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 19401.86753131696,
            "unit": "ns/iter",
            "extra": "iterations: 36084\ncpu: 19401.269260614125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 180532.29676870757,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 180523.08673469388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 341268.5456333666,
            "unit": "ns/iter",
            "extra": "iterations: 2542\ncpu: 341260.30684500403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 500549.76129778783,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 500551.3325608343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 531852.2320000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531831.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 663010.7080000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 662988.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 790734.417948771,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 790696.1538461541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 923947.2977022607,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 923927.0729270732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 1047029.6448704335,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 1046998.5343855686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 15703.913771781099,
            "unit": "ns/iter",
            "extra": "iterations: 44475\ncpu: 15703.464867903316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 13080.802633788811,
            "unit": "ns/iter",
            "extra": "iterations: 53611\ncpu: 13080.621514241479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12883.97070582387,
            "unit": "ns/iter",
            "extra": "iterations: 54277\ncpu: 12883.615527755746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12982.49154077924,
            "unit": "ns/iter",
            "extra": "iterations: 54083\ncpu: 12982.541648947015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 21871.350905684907,
            "unit": "ns/iter",
            "extra": "iterations: 32020\ncpu: 21870.79013116802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 73819.40843487876,
            "unit": "ns/iter",
            "extra": "iterations: 11571\ncpu: 73816.35986518017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 362693.39310053457,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 362679.6422487225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 296921.32660871407,
            "unit": "ns/iter",
            "extra": "iterations: 2875\ncpu: 296918.5043478266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 297236.77909408946,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 297226.27177700354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 287822.3320908184,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 287818.0955608272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 633969.402000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633942.0999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5684386.662576442,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5684288.957055211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4575870.133004765,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4575807.389162546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4544306.828431472,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4544162.254901958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4524521.521951035,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4524438.048780484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2590304.8603351493,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2590111.7318435763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4454002.647619182,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4453832.857142867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 17226754.26229544,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 17226034.42622954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7573257.099999507,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 7573004.99999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 21643371.06122433,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 21642348.979591794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 77219.9596396321,
            "unit": "ns/iter",
            "extra": "iterations: 11100\ncpu: 77215.7027027027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 404728.5654846198,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 404712.8132387705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 325179.00113937445,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 325163.0839346757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 334040.00741897215,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 334014.5255759465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 320327.5904977161,
            "unit": "ns/iter",
            "extra": "iterations: 2652\ncpu: 320309.23831070954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 611163.6179999777,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611135.3999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5753449.217390937,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5753111.801242195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4622649.56930688,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4622334.653465358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4606509.847290313,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4606331.034482739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4602708.428571169,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4602467.980295556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2645105.548295587,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2644982.9545454453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4487380.211538349,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4487189.903846146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 17571327.80000082,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17570760.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7770601.095588979,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 7770202.205882354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 70826.90383649501,
            "unit": "ns/iter",
            "extra": "iterations: 11938\ncpu: 70823.76444965684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 380424.78989361326,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 380413.16489361826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 295022.79841214546,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 295010.07939247345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 285026.4279986826,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 285018.3427998657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 288545.8123097941,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 288543.82820426056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 590287.7280000212,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590282.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5683824.384146596,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5683839.6341463635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4584867.438423657,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4584813.793103467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4559065.165853565,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4559041.951219525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4556439.882926719,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4556332.195121942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2601542.9413407305,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2601398.8826815514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4441561.483253625,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4441549.760765568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 7139.445637365335,
            "unit": "ns/iter",
            "extra": "iterations: 98358\ncpu: 7139.323695073062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 46038.31535378266,
            "unit": "ns/iter",
            "extra": "iterations: 15221\ncpu: 46037.50739110456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 35111.211949432334,
            "unit": "ns/iter",
            "extra": "iterations: 19934\ncpu: 35111.00632085903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33846.75176790028,
            "unit": "ns/iter",
            "extra": "iterations: 20646\ncpu: 33846.06703477692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 27761.333611210066,
            "unit": "ns/iter",
            "extra": "iterations: 25191\ncpu: 27761.144853320664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 205311.02027624272,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 205301.3811342946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 381712.528353313,
            "unit": "ns/iter",
            "extra": "iterations: 1834\ncpu: 381706.32497273583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 92899.51811545559,
            "unit": "ns/iter",
            "extra": "iterations: 7535\ncpu: 92899.86728599887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 93010.9052296256,
            "unit": "ns/iter",
            "extra": "iterations: 7534\ncpu: 93007.71170692834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 92965.74107024293,
            "unit": "ns/iter",
            "extra": "iterations: 7531\ncpu: 92963.78966936738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 188024.40070061779,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 188018.05443276593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 177369.58508752412,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 177368.06999746492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 56299.8895780635,
            "unit": "ns/iter",
            "extra": "iterations: 12253\ncpu: 56296.88239614853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 275369.3204876402,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 275351.3959889892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 221515.1863923939,
            "unit": "ns/iter",
            "extra": "iterations: 3160\ncpu: 221498.70253164554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 223682.23906800037,
            "unit": "ns/iter",
            "extra": "iterations: 3133\ncpu: 223667.9221193756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 225660.20883016544,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 225649.75829842285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 399929.95830954,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 399909.4231867562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1600681.1766054407,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 1600581.8807339359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1347460.512572573,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1347396.9052224567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1331989.23725496,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1331941.9607843123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1330304.8645037292,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1330280.1526717592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 854190.6597305973,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 854163.5250917905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1311391.9230769223,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1311320.6378986868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 56634.52436063774,
            "unit": "ns/iter",
            "extra": "iterations: 12356\ncpu: 56632.58336031127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 279174.41036976886,
            "unit": "ns/iter",
            "extra": "iterations: 2488\ncpu: 279160.6913183277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 225732.51236979174,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 225721.97265625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 224984.40935296987,
            "unit": "ns/iter",
            "extra": "iterations: 3122\ncpu: 224974.2472773854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 224798.44672655934,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 224794.7689345332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 395148.53551300673,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 395137.6550169055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1598574.0732265692,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 1598530.663615587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1343845.801541337,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1343805.2023121205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1329310.1749050831,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1329264.0684410643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1332144.600760477,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1332149.4296578097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 839422.392986766,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 839403.9903264906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1317573.3596987594,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1317546.327683611 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}