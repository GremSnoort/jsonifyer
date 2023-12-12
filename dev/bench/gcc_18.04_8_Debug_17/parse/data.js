window.BENCHMARK_DATA = {
  "lastUpdate": 1702391784126,
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
        "date": 1702382283265,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7703.943057352041,
            "unit": "ns/iter",
            "extra": "iterations: 90477\ncpu: 7703.804281751163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54896.21020000186,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54894.93999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99051.27595917425,
            "unit": "ns/iter",
            "extra": "iterations: 8523\ncpu: 99048.09339434472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146024.5000856696,
            "unit": "ns/iter",
            "extra": "iterations: 5837\ncpu: 146025.1327736851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191208.59443696018,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 191205.33871691348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241837.329701018,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 241830.56719754136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287293.2258490284,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 287270.39235080767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334397.78401228035,
            "unit": "ns/iter",
            "extra": "iterations: 2602\ncpu: 334385.049961568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377803.57610621396,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 377781.7256637171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6289.161006414334,
            "unit": "ns/iter",
            "extra": "iterations: 110213\ncpu: 6288.697340604098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5020.5572975178975,
            "unit": "ns/iter",
            "extra": "iterations: 137074\ncpu: 5020.386798371676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5204.884791047164,
            "unit": "ns/iter",
            "extra": "iterations: 134217\ncpu: 5204.85258946333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5176.21292975379,
            "unit": "ns/iter",
            "extra": "iterations: 135223\ncpu: 5175.831774180425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8585.325085772536,
            "unit": "ns/iter",
            "extra": "iterations: 79862\ncpu: 8584.918985249564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29455.92267242882,
            "unit": "ns/iter",
            "extra": "iterations: 27765\ncpu: 29453.77993877178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146089.89777173073,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 146085.69484606222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114960.0375100827,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 114952.64856144133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115807.09937550993,
            "unit": "ns/iter",
            "extra": "iterations: 7366\ncpu: 115802.95954385016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115401.76065264999,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 115394.01294498362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 333426.34787311545,
            "unit": "ns/iter",
            "extra": "iterations: 2774\ncpu: 333414.20331651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1801999.1503905875,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1801917.7734375016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1435488.521671747,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1435455.882352944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1424582.876854546,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1424477.7448071248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1395259.4154302352,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1395204.896142434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 768215.5531739712,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 768188.458367684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1377102.189835616,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1377056.3527653238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36339.71338394914,
            "unit": "ns/iter",
            "extra": "iterations: 22654\ncpu: 36337.28701333103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179072.77913496044,
            "unit": "ns/iter",
            "extra": "iterations: 4994\ncpu: 179061.5338406087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136217.8978945594,
            "unit": "ns/iter",
            "extra": "iterations: 6317\ncpu: 136211.8727243947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136790.23122308135,
            "unit": "ns/iter",
            "extra": "iterations: 6271\ncpu: 136785.75984691436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131462.64396945792,
            "unit": "ns/iter",
            "extra": "iterations: 6550\ncpu: 131456.41221374052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 303316.9125740223,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 303308.4639498422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1835086.6574256443,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1834986.3366336646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1450350.7554517784,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1450271.1838006175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1462809.9433069318,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1462766.1417322755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1439217.7352941795,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1439140.7120743005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 813049.7230499168,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 813024.8904469747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1394607.858858936,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1394507.6576576591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6516348.446808505,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6516324.822695065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2973728.59047625,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2973606.666666653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27803.944444443277,
            "unit": "ns/iter",
            "extra": "iterations: 29592\ncpu: 27803.12584482294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137534.14043776176,
            "unit": "ns/iter",
            "extra": "iterations: 6259\ncpu: 137529.52548330429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108342.40277426426,
            "unit": "ns/iter",
            "extra": "iterations: 7930\ncpu: 108336.8348045397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108827.70982879483,
            "unit": "ns/iter",
            "extra": "iterations: 7885\ncpu: 108823.27203551061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103265.87472255652,
            "unit": "ns/iter",
            "extra": "iterations: 8110\ncpu: 103262.28113440219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 260257.1451064866,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 260244.0568076571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1771956.4036697359,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1771906.972477066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1381332.0957910188,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1381297.968069675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1408690.8235294262,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1408618.552036203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1376905.5543963618,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1376869.4485841983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 762444.7120331797,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 762408.8796680475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1324174.1361639635,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1324138.7994143553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2868.6224890684266,
            "unit": "ns/iter",
            "extra": "iterations: 243336\ncpu: 2868.415277640807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18525.231304763867,
            "unit": "ns/iter",
            "extra": "iterations: 37777\ncpu: 18524.77962781585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13899.182430197525,
            "unit": "ns/iter",
            "extra": "iterations: 51395\ncpu: 13898.626325518037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15183.0690305797,
            "unit": "ns/iter",
            "extra": "iterations: 46110\ncpu: 15182.678377792383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10826.838017254238,
            "unit": "ns/iter",
            "extra": "iterations: 63871\ncpu: 10826.750794570307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 91820.4211012805,
            "unit": "ns/iter",
            "extra": "iterations: 7573\ncpu: 91812.71622870787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120306.28183092947,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 120300.52613118288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29883.727027260986,
            "unit": "ns/iter",
            "extra": "iterations: 23332\ncpu: 29881.943253900336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28825.042941248917,
            "unit": "ns/iter",
            "extra": "iterations: 24289\ncpu: 28824.274362880293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28839.150276194076,
            "unit": "ns/iter",
            "extra": "iterations: 23896\ncpu: 28837.34516237023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58271.43196362838,
            "unit": "ns/iter",
            "extra": "iterations: 11876\ncpu: 58269.63624115852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53827.751314863286,
            "unit": "ns/iter",
            "extra": "iterations: 12739\ncpu: 53825.096161393725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20678.784214821328,
            "unit": "ns/iter",
            "extra": "iterations: 33107\ncpu: 20678.699368713438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104897.09185052014,
            "unit": "ns/iter",
            "extra": "iterations: 6663\ncpu: 104897.4936214917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84435.77005731768,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 84429.7636103154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84678.635551856,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 84675.16370996535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90705.68225926616,
            "unit": "ns/iter",
            "extra": "iterations: 8038\ncpu: 90699.04205026025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 146871.38680224027,
            "unit": "ns/iter",
            "extra": "iterations: 4819\ncpu: 146865.61527287678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 508827.6222385709,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 508829.3814433063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 410370.0248334269,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 410359.90308903775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 424008.6440777963,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 423994.5786682398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 416817.1130638774,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 416792.61862917634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273592.2032773825,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 273584.35427233594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 420976.0782813277,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 420967.3925838738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21769.38371799642,
            "unit": "ns/iter",
            "extra": "iterations: 31716\ncpu: 21768.842224744927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110517.20972265223,
            "unit": "ns/iter",
            "extra": "iterations: 6418\ncpu: 110515.72140853874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88903.69381639248,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 88901.71615363698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88737.08976796668,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 88735.66628629497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88169.7628374132,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 88167.70872567523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153580.93292416062,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 153578.01402893447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 526997.3228699354,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 526986.5470851985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 430869.98280099547,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 430856.8181818153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430886.371253774,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 430877.12538226414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 422808.46719319304,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 422806.50060753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 269302.65622582095,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 269303.48027841817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 422161.19064750714,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 422153.59712229966 ns\nthreads: 1"
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
        "date": 1702388129556,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7646.602268248944,
            "unit": "ns/iter",
            "extra": "iterations: 91348\ncpu: 7646.322853264439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54717.418100000265,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54715.91 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100700.75566513569,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 100697.48737818479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145877.64943211054,
            "unit": "ns/iter",
            "extra": "iterations: 5899\ncpu: 145870.6390913714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192610.06416518433,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 192607.14920071056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238238.7960924664,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 238230.5723720418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282998.4472739284,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 282987.8223963435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 329238.05265150976,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 329225.9848484846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 376200.11303594307,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 376186.7908185362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6341.6062719344245,
            "unit": "ns/iter",
            "extra": "iterations: 110843\ncpu: 6341.4866071831275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5141.069131074978,
            "unit": "ns/iter",
            "extra": "iterations: 135800\ncpu: 5141.174521354927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5134.143396695751,
            "unit": "ns/iter",
            "extra": "iterations: 136621\ncpu: 5133.917186962469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5092.006115430294,
            "unit": "ns/iter",
            "extra": "iterations: 137521\ncpu: 5091.900873321169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8747.755115298045,
            "unit": "ns/iter",
            "extra": "iterations: 80054\ncpu: 8747.429235266198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29872.668125775508,
            "unit": "ns/iter",
            "extra": "iterations: 27414\ncpu: 29872.010651491935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 154133.38738578974,
            "unit": "ns/iter",
            "extra": "iterations: 5581\ncpu: 154129.60043003067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120068.78356431959,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 120065.07069858603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118283.37748618737,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 118280.81491712728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 116315.19461444375,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 116312.17190262514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 336940.91417094425,
            "unit": "ns/iter",
            "extra": "iterations: 2738\ncpu: 336927.1000730459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1799950.1992263668,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1799897.4854932316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1417915.6381678625,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1417875.419847325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1413168.0015197368,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1413147.1124620016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1376894.0548147333,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376841.4814814818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 782498.4307305212,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 782480.6884970588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1361372.4868036024,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1361321.84750733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36544.18678986517,
            "unit": "ns/iter",
            "extra": "iterations: 22619\ncpu: 36543.78619744459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177890.87901896128,
            "unit": "ns/iter",
            "extra": "iterations: 4852\ncpu: 177882.76999175575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139212.58416640013,
            "unit": "ns/iter",
            "extra": "iterations: 6202\ncpu: 139208.7713640756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141548.49540229305,
            "unit": "ns/iter",
            "extra": "iterations: 6090\ncpu: 141542.95566502423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135047.5988080289,
            "unit": "ns/iter",
            "extra": "iterations: 6376\ncpu: 135046.4397741529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 304899.268798333,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 304886.050597329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1811479.5825243348,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1811479.0291262101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1447114.8773292277,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1447021.2732919336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1434179.4329738317,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1434168.2588597834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1415145.8916030468,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1415093.1297709972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 806356.0371650825,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 806345.8081244583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1393014.3203592938,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1392961.227544912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6557588.82394318,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6557295.774647853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2901526.8562499587,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2901465.3124999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28488.74189076715,
            "unit": "ns/iter",
            "extra": "iterations: 28856\ncpu: 28487.75644579974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144881.37458025495,
            "unit": "ns/iter",
            "extra": "iterations: 5956\ncpu: 144881.2961719273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111031.23686588847,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 111022.74428811172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112784.01992136879,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 112780.36697247763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108685.25069602548,
            "unit": "ns/iter",
            "extra": "iterations: 7902\ncpu: 108681.43507972707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284958.0489706924,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 284946.22582657676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1797333.1823415435,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1797251.0556621868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1406968.496229333,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1406925.7918552095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1394339.1629298124,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1394295.216741404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1370602.9970631208,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1370565.9324522812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 769535.7828947486,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 769516.1184210501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1347806.369942074,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1347741.1849710962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2902.269421104678,
            "unit": "ns/iter",
            "extra": "iterations: 241477\ncpu: 2902.193997772065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18663.040537298883,
            "unit": "ns/iter",
            "extra": "iterations: 37521\ncpu: 18662.84214173398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14480.174106312894,
            "unit": "ns/iter",
            "extra": "iterations: 48367\ncpu: 14480.139351210531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14020.012412271652,
            "unit": "ns/iter",
            "extra": "iterations: 49870\ncpu: 14019.54481652298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10915.57240571551,
            "unit": "ns/iter",
            "extra": "iterations: 64035\ncpu: 10914.962130085152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93996.88526145525,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 93991.96694662745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122228.93795746357,
            "unit": "ns/iter",
            "extra": "iterations: 5738\ncpu: 122222.2377134889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29739.240878392167,
            "unit": "ns/iter",
            "extra": "iterations: 23543\ncpu: 29738.2661512976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31082.44650984428,
            "unit": "ns/iter",
            "extra": "iterations: 23509\ncpu: 31081.215704623635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29620.587451344647,
            "unit": "ns/iter",
            "extra": "iterations: 23636\ncpu: 29619.647994584357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59408.458025631866,
            "unit": "ns/iter",
            "extra": "iterations: 11781\ncpu: 59407.11314828971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55364.987538052526,
            "unit": "ns/iter",
            "extra": "iterations: 14123\ncpu: 55363.293917722935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21568.432172869103,
            "unit": "ns/iter",
            "extra": "iterations: 32487\ncpu: 21567.310000923724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105227.79178575703,
            "unit": "ns/iter",
            "extra": "iterations: 6647\ncpu: 105225.47013690388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86180.51199408692,
            "unit": "ns/iter",
            "extra": "iterations: 8129\ncpu: 86181.24000491928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86920.11420752022,
            "unit": "ns/iter",
            "extra": "iterations: 8038\ncpu: 86917.13112714648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86400.39829251103,
            "unit": "ns/iter",
            "extra": "iterations: 8082\ncpu: 86397.35214055951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 152691.33450165836,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 152678.729463306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 518755.2945104364,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 518742.87833826954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 426365.3855054672,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 426338.1242387334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 425470.01218022144,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 425457.00365408265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 418781.58433012036,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 418763.99521531776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 267832.1011107049,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 267823.78399080876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 416143.67935751483,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 416136.8828078524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21878.012057980683,
            "unit": "ns/iter",
            "extra": "iterations: 32012\ncpu: 21878.192552792527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108134.58547864202,
            "unit": "ns/iter",
            "extra": "iterations: 6487\ncpu: 108130.8463079991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88311.23456167827,
            "unit": "ns/iter",
            "extra": "iterations: 7951\ncpu: 88309.57112313047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88272.82102200188,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 88270.60460409723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87895.4688598781,
            "unit": "ns/iter",
            "extra": "iterations: 7964\ncpu: 87893.60873932717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154419.87864078637,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 154421.44748455423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 515089.82557281933,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 515062.3059867008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 429057.5524390483,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 429045.30487805157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 430861.1737804413,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 430864.5121951155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421325.0740517906,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 421294.22034918994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 267718.525773178,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 267712.485681557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418843.67044775584,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 418832.1194029827 ns\nthreads: 1"
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
        "date": 1702390789706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7634.319741715711,
            "unit": "ns/iter",
            "extra": "iterations: 91527\ncpu: 7634.01400679581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53813.873299998246,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53813.57 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108628.21573217792,
            "unit": "ns/iter",
            "extra": "iterations: 8543\ncpu: 108623.50462366854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143973.16554734466,
            "unit": "ns/iter",
            "extra": "iterations: 5956\ncpu: 143967.5117528543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189360.45458515588,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 189354.3013100436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234738.0750880974,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 234734.15559772277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278701.07967742335,
            "unit": "ns/iter",
            "extra": "iterations: 3100\ncpu: 278686.1612903225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326561.55672034173,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 326555.55971546227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 369643.93254134717,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 369626.6440390325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6278.252386762922,
            "unit": "ns/iter",
            "extra": "iterations: 111448\ncpu: 6278.114456966479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5166.663506411185,
            "unit": "ns/iter",
            "extra": "iterations: 135854\ncpu: 5166.469886790236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5153.935986210182,
            "unit": "ns/iter",
            "extra": "iterations: 135752\ncpu: 5153.856296776471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5093.0491897767515,
            "unit": "ns/iter",
            "extra": "iterations: 137061\ncpu: 5092.946206433628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8815.600065654065,
            "unit": "ns/iter",
            "extra": "iterations: 79203\ncpu: 8815.211545017235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28937.002844445993,
            "unit": "ns/iter",
            "extra": "iterations: 28125\ncpu: 28936.035555555576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150404.02049754607,
            "unit": "ns/iter",
            "extra": "iterations: 5708\ncpu: 150397.4071478629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117789.99931129435,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 117786.87327823673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118094.99405831083,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 118090.12021555858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115979.26305084604,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 115978.2508474577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 330698.52559971175,
            "unit": "ns/iter",
            "extra": "iterations: 2793\ncpu: 330683.92409595515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1757353.40909097,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1757289.9621212112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1402937.8469697314,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1402873.333333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1385143.9464285453,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1385105.0595238067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1361476.9254386155,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1361427.9239766032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 766777.4352547945,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 766751.5455304935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1343013.4740633778,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1342964.265129684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36432.18355411724,
            "unit": "ns/iter",
            "extra": "iterations: 22571\ncpu: 36430.649949049555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171699.1187150805,
            "unit": "ns/iter",
            "extra": "iterations: 5012\ncpu: 171692.93695131736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137770.90282232536,
            "unit": "ns/iter",
            "extra": "iterations: 6236\ncpu: 137758.5150737651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138059.33140654795,
            "unit": "ns/iter",
            "extra": "iterations: 6228\ncpu: 138053.48426461112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134639.63207696076,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 134631.6826998898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 305178.1299198835,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 305165.4127481709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1775400.1409523534,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1775268.7619047659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1411637.8267477648,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1411593.9209726413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1423435.6438791563,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1423323.6883942708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1424381.200000008,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1424285.5223880627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 796549.7716738097,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 796493.905579402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1364371.3416789756,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1364309.131075111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6549633.366196992,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6549217.605633788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2989419.2884615567,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2989222.435897427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27774.363740871016,
            "unit": "ns/iter",
            "extra": "iterations: 29576\ncpu: 27773.448065999415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141207.42637434925,
            "unit": "ns/iter",
            "extra": "iterations: 6112\ncpu: 141197.676701571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110746.51251956742,
            "unit": "ns/iter",
            "extra": "iterations: 7668\ncpu: 110742.11006781424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110162.96820104815,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 110155.71227080391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 107810.87967275367,
            "unit": "ns/iter",
            "extra": "iterations: 7945\ncpu: 107805.28634361229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 272975.04238619836,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 272954.41130298434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1753908.971644686,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1753845.368620047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1393458.367559473,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1393352.8273809506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1375655.4624447192,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1375612.0765832046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1355489.7128280443,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1355376.3848396565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 755551.2565146434,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 755510.8306188978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1328864.146723696,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1328768.803418803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2896.3030409497246,
            "unit": "ns/iter",
            "extra": "iterations: 241931\ncpu: 2896.2807577367053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18039.481348082914,
            "unit": "ns/iter",
            "extra": "iterations: 38870\ncpu: 18038.31232312846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14480.160976188963,
            "unit": "ns/iter",
            "extra": "iterations: 50523\ncpu: 14479.458860321005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15142.092763295625,
            "unit": "ns/iter",
            "extra": "iterations: 47950\ncpu: 15141.055265902016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10824.466746045799,
            "unit": "ns/iter",
            "extra": "iterations: 64669\ncpu: 10823.958929317052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93847.9219335871,
            "unit": "ns/iter",
            "extra": "iterations: 7468\ncpu: 93843.29137653974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119750.34914675857,
            "unit": "ns/iter",
            "extra": "iterations: 5860\ncpu: 119744.16382252639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29182.461740326013,
            "unit": "ns/iter",
            "extra": "iterations: 24007\ncpu: 29180.597325780047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29180.93645638378,
            "unit": "ns/iter",
            "extra": "iterations: 24015\ncpu: 29178.48844472231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29231.993813228266,
            "unit": "ns/iter",
            "extra": "iterations: 23922\ncpu: 29230.482401137182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59290.055494270055,
            "unit": "ns/iter",
            "extra": "iterations: 11785\ncpu: 59286.796775562114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54570.01589032464,
            "unit": "ns/iter",
            "extra": "iterations: 12838\ncpu: 54566.98862751191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21260.1971736609,
            "unit": "ns/iter",
            "extra": "iterations: 32834\ncpu: 21258.585612474937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105486.30689343532,
            "unit": "ns/iter",
            "extra": "iterations: 6644\ncpu: 105480.16255268008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85979.68948595156,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 85975.15642252484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85279.93625303583,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 85274.56204379666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84911.33353510666,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 84909.24939467257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154091.62698412308,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 154087.38977072263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 507974.92313269555,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 507968.8179840497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 419303.7824519271,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 419285.63701923226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 417529.2680596911,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 417516.5373134381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 410393.7982353045,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 410377.2352941181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 265908.6894977179,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 265906.69710806536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 408440.2012835445,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 408408.2263710562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21670.996101604866,
            "unit": "ns/iter",
            "extra": "iterations: 32321\ncpu: 21670.198941864724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107049.30813953976,
            "unit": "ns/iter",
            "extra": "iterations: 6536\ncpu: 107047.41432068471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87091.47757847955,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 87090.89436970536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86790.36301624321,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 86788.56505022972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86671.35337134622,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 86669.69509172188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154491.5293857702,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 154486.76535572147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 505822.5058139573,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 505794.54941860883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 420848.09384341165,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 420840.58577405487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 414500.3816567836,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 414469.28994083096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 411339.10980623704,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 411319.2601291813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 265111.1352985634,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 265093.3106575981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 409424.9976648872,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 409401.40105078823 ns\nthreads: 1"
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
        "date": 1702391782465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7660.340026744701,
            "unit": "ns/iter",
            "extra": "iterations: 91234\ncpu: 7660.002849814763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55022.599400001585,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55021.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100824.9394261434,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 100824.63100720274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147775.6529029916,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 147766.0836639019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192589.02160837594,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 192590.6883492982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237652.96999724567,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 237638.97605284903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284011.6162904797,
            "unit": "ns/iter",
            "extra": "iterations: 3057\ncpu: 283991.1678115799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 329183.9893939246,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 329166.3636363637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 375332.7770124631,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 375311.0632802406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6349.035872244312,
            "unit": "ns/iter",
            "extra": "iterations: 110336\ncpu: 6348.679488109055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5259.76235364883,
            "unit": "ns/iter",
            "extra": "iterations: 136316\ncpu: 5259.523460195424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5101.349447068165,
            "unit": "ns/iter",
            "extra": "iterations: 136364\ncpu: 5101.2209967440085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5018.185924971354,
            "unit": "ns/iter",
            "extra": "iterations: 139680\ncpu: 5018.064146620848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8757.071640414715,
            "unit": "ns/iter",
            "extra": "iterations: 80248\ncpu: 8756.802661748594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29355.32722286334,
            "unit": "ns/iter",
            "extra": "iterations: 27712\ncpu: 29353.91166281759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147362.90608398325,
            "unit": "ns/iter",
            "extra": "iterations: 5835\ncpu: 147352.99057412165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116132.93132464873,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 116128.88165037998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115525.79377694211,
            "unit": "ns/iter",
            "extra": "iterations: 7424\ncpu: 115520.24515086196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112044.90010501632,
            "unit": "ns/iter",
            "extra": "iterations: 7618\ncpu: 112039.56419007629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 336660.1367116343,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 336646.66423623764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1782935.0211539026,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1782904.2307692333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1403500.2036198997,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1403441.6289592746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1400074.9969878874,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1400023.0421686773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1369697.8129601877,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1369651.5463917537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 767402.0390690118,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 767408.2294264351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1345820.563134971,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1345762.9898403469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35974.47049831688,
            "unit": "ns/iter",
            "extra": "iterations: 22897\ncpu: 35972.529152290685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 170311.96488791434,
            "unit": "ns/iter",
            "extra": "iterations: 5041\ncpu: 170300.17853600517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137803.49631528222,
            "unit": "ns/iter",
            "extra": "iterations: 6242\ncpu: 137801.50592758745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137328.786116026,
            "unit": "ns/iter",
            "extra": "iterations: 6223\ncpu: 137321.46874497822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132440.95479789854,
            "unit": "ns/iter",
            "extra": "iterations: 6482\ncpu: 132436.8250539959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 304651.9384236499,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 304638.1069669249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1810292.2641878694,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1810240.9001956885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1436918.1802773678,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1436844.99229584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1429550.7852761152,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1429507.0552147324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1403667.9111445793,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1403623.343373494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 798620.7426850118,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 798596.9879518059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1384048.9836553065,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1383956.9093610637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6559972.405594155,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6559637.062937041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2950417.6265823008,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2950370.2531645494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27772.329945112466,
            "unit": "ns/iter",
            "extra": "iterations: 29514\ncpu: 27771.0645795216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137934.81905988633,
            "unit": "ns/iter",
            "extra": "iterations: 6212\ncpu: 137931.1171925308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106713.01090593508,
            "unit": "ns/iter",
            "extra": "iterations: 8069\ncpu: 106708.52645928842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107913.72286432469,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 107911.63316582981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106419.90856151073,
            "unit": "ns/iter",
            "extra": "iterations: 8071\ncpu: 106412.97237021392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 270481.14992224204,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 270476.4230171088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1788562.2203064938,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1788437.7394636068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1400241.7654134997,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1400212.1804511247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1400937.5701356768,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1400880.844645551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1368176.1551976933,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1368143.1918008812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 760937.3937653558,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 760908.9417555386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1343920.3823954065,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1343894.5165945177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2877.1143989495,
            "unit": "ns/iter",
            "extra": "iterations: 242983\ncpu: 2877.0675314733903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18615.28043888223,
            "unit": "ns/iter",
            "extra": "iterations: 37641\ncpu: 18614.385908982156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14932.296120956085,
            "unit": "ns/iter",
            "extra": "iterations: 46893\ncpu: 14931.232806602186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13907.560354264026,
            "unit": "ns/iter",
            "extra": "iterations: 50245\ncpu: 13907.437555975659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10790.267320019673,
            "unit": "ns/iter",
            "extra": "iterations: 64896\ncpu: 10789.848372781058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 94252.05154499985,
            "unit": "ns/iter",
            "extra": "iterations: 7411\ncpu: 94251.1941708273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116448.15530428343,
            "unit": "ns/iter",
            "extra": "iterations: 6014\ncpu: 116445.06152311248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29362.896995526924,
            "unit": "ns/iter",
            "extra": "iterations: 23698\ncpu: 29362.36813233188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29551.9088763383,
            "unit": "ns/iter",
            "extra": "iterations: 23726\ncpu: 29550.927252802878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29045.99925487422,
            "unit": "ns/iter",
            "extra": "iterations: 24157\ncpu: 29045.76313283937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58675.70569991291,
            "unit": "ns/iter",
            "extra": "iterations: 11930\ncpu: 58673.90611902767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55021.48475561652,
            "unit": "ns/iter",
            "extra": "iterations: 12726\ncpu: 55017.91607732216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21421.345148168682,
            "unit": "ns/iter",
            "extra": "iterations: 32699\ncpu: 21420.725404446614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106173.20684952261,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 106166.6161539622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87019.48654012942,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 87019.06711326118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86998.39548443153,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 86996.39002605059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86372.52888888725,
            "unit": "ns/iter",
            "extra": "iterations: 8100\ncpu: 86365.70370370403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 151126.53738115146,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 151125.51858253987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 524130.33860041987,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 524086.5312264868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 426035.02007297147,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 426015.145985402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 426986.5951219639,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 426950.00000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 424030.57391826593,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 424011.23798077373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 269641.96766742587,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 269640.1847575063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 420357.3790226424,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 420349.88081048714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22077.810278548815,
            "unit": "ns/iter",
            "extra": "iterations: 31736\ncpu: 22076.685782707442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108730.2510033883,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 108726.38159925902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88689.29149285512,
            "unit": "ns/iter",
            "extra": "iterations: 7911\ncpu: 88686.57565415249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87976.69959879767,
            "unit": "ns/iter",
            "extra": "iterations: 7976\ncpu: 87972.0536609829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87915.80065400312,
            "unit": "ns/iter",
            "extra": "iterations: 7951\ncpu: 87913.68381335639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156038.0802854768,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 156032.1587867972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 516629.73313557776,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 516615.71534469945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426011.74893620197,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 425992.2188449837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 423779.6345454847,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 423760.06060606235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 419486.52492492355,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 419482.5825825879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 267728.77288399194,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 267726.8862504791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 417808.9094159573,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 417788.37902264815 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}