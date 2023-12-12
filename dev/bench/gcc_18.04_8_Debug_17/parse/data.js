window.BENCHMARK_DATA = {
  "lastUpdate": 1702381157630,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-8 18.04 Debug c++-17": [
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
        "date": 1702381156888,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7630.360872697642,
            "unit": "ns/iter",
            "extra": "iterations: 91578\ncpu: 7630.079276682172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54464.061699991355,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54464.360000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99900.39417589096,
            "unit": "ns/iter",
            "extra": "iterations: 8585\ncpu: 99897.8683750728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145401.55114786475,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 145398.4132343012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190867.01716548018,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 190860.05721830987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236609.3274263856,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 236598.52780806975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285888.3610654243,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 285879.2831305491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326431.0802422464,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 326418.58440575306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371436.7772086867,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 371424.5838668372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6260.892202019594,
            "unit": "ns/iter",
            "extra": "iterations: 111811\ncpu: 6260.626414216848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5099.091277802338,
            "unit": "ns/iter",
            "extra": "iterations: 137580\ncpu: 5098.877743858123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5135.664998513182,
            "unit": "ns/iter",
            "extra": "iterations: 137877\ncpu: 5135.398942535743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5091.7879029678525,
            "unit": "ns/iter",
            "extra": "iterations: 137852\ncpu: 5091.451701825142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8631.631999004747,
            "unit": "ns/iter",
            "extra": "iterations: 80315\ncpu: 8631.585631575688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29436.68463699362,
            "unit": "ns/iter",
            "extra": "iterations: 27768\ncpu: 29433.931143762635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 158298.59001650606,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 158293.41163516234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 119651.07157805629,
            "unit": "ns/iter",
            "extra": "iterations: 7167\ncpu: 119642.33291474816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116394.05248129606,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 116393.33786539774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115462.30533837271,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 115454.79913723373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 337750.75018156425,
            "unit": "ns/iter",
            "extra": "iterations: 2754\ncpu: 337737.72694262833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1787199.676300588,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1787092.2928709092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1409343.3209877505,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1409296.296296301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1402647.0592703724,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1402598.3282674744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1383167.3407739433,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1383116.9642857139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 776392.3198992544,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 776363.7279596986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1350479.0773723025,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1350427.1532846733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36580.13347514396,
            "unit": "ns/iter",
            "extra": "iterations: 22566\ncpu: 36579.229814765546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 183104.12428420075,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 183097.7942735947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142181.16803819063,
            "unit": "ns/iter",
            "extra": "iterations: 6076\ncpu: 142176.49769585262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138394.70404883206,
            "unit": "ns/iter",
            "extra": "iterations: 6224\ncpu: 138391.21143958883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 136407.488246515,
            "unit": "ns/iter",
            "extra": "iterations: 6296\ncpu: 136403.33545107977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 304774.9892047442,
            "unit": "ns/iter",
            "extra": "iterations: 2779\ncpu: 304769.881252249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1799207.2563106155,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1799132.2330097149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1431153.303680934,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1431078.9877300658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1428850.7066052563,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1428804.454685094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1406569.5565611746,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1406455.0527903389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 804905.2844752808,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 804864.9609713785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1380419.9688427504,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1380329.5252225476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6549314.880281843,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6549046.478873226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2946393.0656252303,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2946219.0625000107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27658.455399853123,
            "unit": "ns/iter",
            "extra": "iterations: 29686\ncpu: 27657.498484134012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144738.53337806824,
            "unit": "ns/iter",
            "extra": "iterations: 5962\ncpu: 144730.27507547886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111591.94528915209,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 111585.66601689355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111522.69480941587,
            "unit": "ns/iter",
            "extra": "iterations: 7687\ncpu: 111516.66449850386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108243.06751108059,
            "unit": "ns/iter",
            "extra": "iterations: 7895\ncpu: 108237.97340088667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 271586.5627732416,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 271575.6089943791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1781686.1593928912,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1781577.229601519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1393445.2089093896,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1393365.130568359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1391202.4119403851,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1391147.164179106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1376848.0413589047,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1376776.2186115189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 765640.5608552805,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 765591.282894738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1344711.790764707,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1344640.4040404067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2918.756444123451,
            "unit": "ns/iter",
            "extra": "iterations: 240762\ncpu: 2918.6246168415278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18612.06897009804,
            "unit": "ns/iter",
            "extra": "iterations: 37654\ncpu: 18611.913740904118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14407.405453309526,
            "unit": "ns/iter",
            "extra": "iterations: 48521\ncpu: 14407.332907400838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14617.345094844199,
            "unit": "ns/iter",
            "extra": "iterations: 47868\ncpu: 14617.082393248154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10893.183486380052,
            "unit": "ns/iter",
            "extra": "iterations: 64250\ncpu: 10892.955642023297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 94506.50771520947,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 94502.32809962134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121440.64988678097,
            "unit": "ns/iter",
            "extra": "iterations: 5741\ncpu: 121437.85054868454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29738.279115268837,
            "unit": "ns/iter",
            "extra": "iterations: 23510\ncpu: 29737.260740110596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29786.54683253843,
            "unit": "ns/iter",
            "extra": "iterations: 23552\ncpu: 29785.996942934773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29262.727690509644,
            "unit": "ns/iter",
            "extra": "iterations: 23936\ncpu: 29262.474933155085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56723.728376083374,
            "unit": "ns/iter",
            "extra": "iterations: 12359\ncpu: 56723.254308601194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55185.6124980366,
            "unit": "ns/iter",
            "extra": "iterations: 12738\ncpu: 55184.69147432879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21258.790696259955,
            "unit": "ns/iter",
            "extra": "iterations: 32890\ncpu: 21258.640924293148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106061.33333333643,
            "unit": "ns/iter",
            "extra": "iterations: 6612\ncpu: 106058.07622504549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86665.75641503208,
            "unit": "ns/iter",
            "extra": "iterations: 8067\ncpu: 86664.23701500092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87411.02434761738,
            "unit": "ns/iter",
            "extra": "iterations: 8009\ncpu: 87410.17605194103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86411.51768329913,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 86411.00431299942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 148683.53548659311,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 148682.63918401863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 519621.43455881457,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 519611.3970588227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 424789.91798298963,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 424786.6342648789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 424593.4236363417,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 424591.63636363664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 420571.77851142123,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 420566.86674669496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 269404.7574942239,
            "unit": "ns/iter",
            "extra": "iterations: 2602\ncpu: 269402.2674865513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 416506.45573378727,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 416489.1265597098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21864.937447247066,
            "unit": "ns/iter",
            "extra": "iterations: 31989\ncpu: 21862.92788145959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107993.56562692476,
            "unit": "ns/iter",
            "extra": "iterations: 6476\ncpu: 107992.06300185324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88122.8529966046,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 88118.7963311984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87961.21258161389,
            "unit": "ns/iter",
            "extra": "iterations: 7964\ncpu: 87954.57056755375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87604.52694760934,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 87595.86094785588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152702.98208042118,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 152622.04982517398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 509974.3628850646,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 509975.8076634048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426150.0024330978,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426134.00243308785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 420785.6032511073,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 420759.843467794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 418588.1831742215,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 418571.0620525131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 268936.0142527078,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 268925.9244992314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 415242.52106826013,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415225.8753709198 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}