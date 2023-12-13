window.BENCHMARK_DATA = {
  "lastUpdate": 1702503260076,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-15 20.04 Debug c++-17": [
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
        "date": 1702489590252,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7389.199938698223,
            "unit": "ns/iter",
            "extra": "iterations: 94614\ncpu: 7388.72788382269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65259.673572741885,
            "unit": "ns/iter",
            "extra": "iterations: 13032\ncpu: 65258.03406998159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125021.52301553279,
            "unit": "ns/iter",
            "extra": "iterations: 7017\ncpu: 125016.41727233863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 183982.22591571882,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 183977.6201566801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 242594.80295840767,
            "unit": "ns/iter",
            "extra": "iterations: 3583\ncpu: 242583.78453809663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 300449.5796046055,
            "unit": "ns/iter",
            "extra": "iterations: 2883\ncpu: 300437.94658342004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 361329.7064409495,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 361315.40049545845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 420544.57640231546,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 420526.16054158565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 479645.9040793829,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 479633.5722160964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5615.466776386337,
            "unit": "ns/iter",
            "extra": "iterations: 125167\ncpu: 5615.300358720747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4668.259405001088,
            "unit": "ns/iter",
            "extra": "iterations: 149681\ncpu: 4668.046044588163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4679.154477521578,
            "unit": "ns/iter",
            "extra": "iterations: 149614\ncpu: 4678.97723475076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4677.182662600552,
            "unit": "ns/iter",
            "extra": "iterations: 149215\ncpu: 4677.124283751625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8177.848055422816,
            "unit": "ns/iter",
            "extra": "iterations: 85597\ncpu: 8177.549446826399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26163.76826622483,
            "unit": "ns/iter",
            "extra": "iterations: 31342\ncpu: 26162.494416437996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 110381.4101102355,
            "unit": "ns/iter",
            "extra": "iterations: 7893\ncpu: 110376.97960217897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 86490.83567073058,
            "unit": "ns/iter",
            "extra": "iterations: 9840\ncpu: 86487.3272357723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 88340.00547334738,
            "unit": "ns/iter",
            "extra": "iterations: 9866\ncpu: 88337.1072369754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 89244.17681368116,
            "unit": "ns/iter",
            "extra": "iterations: 9773\ncpu: 89241.27698761888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 247629.2316207768,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 247615.21430598918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1955461.5378149934,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1955397.899159662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1602434.948097001,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1602393.425605535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1608644.4723183615,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1608593.4256055395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1612024.4355401637,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1611971.0801393725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 978770.9746299515,
            "unit": "ns/iter",
            "extra": "iterations: 946\ncpu: 978735.3065539137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1558876.7768455937,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1558846.6442952985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6565501.839999115,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6565303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3674503.2705882704,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3674316.07843137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8278121.318181603,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8277653.030303041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25215.78033704722,
            "unit": "ns/iter",
            "extra": "iterations: 32518\ncpu: 25214.545790024058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 114413.73836898558,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 114409.30481283426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 88777.93057868272,
            "unit": "ns/iter",
            "extra": "iterations: 9608\ncpu: 88775.40591174002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 87369.34695347394,
            "unit": "ns/iter",
            "extra": "iterations: 9716\ncpu: 87368.2379580077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 88700.65226488501,
            "unit": "ns/iter",
            "extra": "iterations: 9559\ncpu: 88697.87634689786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 247929.75241889202,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 247925.04268639605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1957755.0693275272,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1957652.521008395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1599038.4261167382,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1598998.625429554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1623318.0872601196,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1623264.2233856947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1618351.468420985,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1618298.0701754463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 981431.4567511495,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 981396.097046412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1574630.174281038,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1574590.5245346846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6658458.690000088,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6658374.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3850538.8401641785,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850348.7704917984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24633.839098784712,
            "unit": "ns/iter",
            "extra": "iterations: 33244\ncpu: 24633.022500300856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 107903.46696146001,
            "unit": "ns/iter",
            "extra": "iterations: 7915\ncpu: 107900.72015161008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87079.73463572518,
            "unit": "ns/iter",
            "extra": "iterations: 9828\ncpu: 87075.2442002442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 85230.73240565397,
            "unit": "ns/iter",
            "extra": "iterations: 9989\ncpu: 85227.11983181478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 87248.0870672181,
            "unit": "ns/iter",
            "extra": "iterations: 9820\ncpu: 87242.58655804482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 242243.70598054008,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 242236.21696801082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1950050.5031713282,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1949985.6236786474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1619690.0260869686,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1619621.3913043467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1609274.8981001354,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1609221.5889464538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1615643.8700172137,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1615586.1351819762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 979145.0273684476,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 979104.4210526267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1570760.6610170056,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1570670.1694915253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2872.362943705254,
            "unit": "ns/iter",
            "extra": "iterations: 244250\ncpu: 2872.205117707261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14047.065072584439,
            "unit": "ns/iter",
            "extra": "iterations: 49391\ncpu: 14046.540867769365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10962.729806893578,
            "unit": "ns/iter",
            "extra": "iterations: 63747\ncpu: 10962.316658038824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10893.291995508029,
            "unit": "ns/iter",
            "extra": "iterations: 64114\ncpu: 10893.065477118842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9481.558242769182,
            "unit": "ns/iter",
            "extra": "iterations: 73889\ncpu: 9481.12168252378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58111.023331114666,
            "unit": "ns/iter",
            "extra": "iterations: 12044\ncpu: 58108.7927598804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 128685.62210370626,
            "unit": "ns/iter",
            "extra": "iterations: 5438\ncpu: 128681.20632585573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33572.74646672895,
            "unit": "ns/iter",
            "extra": "iterations: 20873\ncpu: 33571.398457337076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33413.114688511305,
            "unit": "ns/iter",
            "extra": "iterations: 20996\ncpu: 33411.52124214138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33620.62361517285,
            "unit": "ns/iter",
            "extra": "iterations: 20851\ncpu: 33619.37077358399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69057.52516281731,
            "unit": "ns/iter",
            "extra": "iterations: 10134\ncpu: 69055.56542332702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60452.18596217866,
            "unit": "ns/iter",
            "extra": "iterations: 11583\ncpu: 60449.28774928786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18363.72790362702,
            "unit": "ns/iter",
            "extra": "iterations: 38185\ncpu: 18363.077124525207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90150.86111827461,
            "unit": "ns/iter",
            "extra": "iterations: 7762\ncpu: 90147.30739500081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72497.19944053036,
            "unit": "ns/iter",
            "extra": "iterations: 9652\ncpu: 72492.6958143384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70054.14793727225,
            "unit": "ns/iter",
            "extra": "iterations: 10011\ncpu: 70051.77304964556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72045.42999690713,
            "unit": "ns/iter",
            "extra": "iterations: 9721\ncpu: 72042.60878510507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 136383.54790535712,
            "unit": "ns/iter",
            "extra": "iterations: 5156\ncpu: 136378.4716834752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 555863.0111465483,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 555844.745222924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 473727.7479729239,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 473721.8243243252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 464664.15053053614,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 464645.7559681713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 470356.48821551615,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 470328.48484849004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 316518.4613995882,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 316502.21218961384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 461259.9110085592,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 461250.36255768256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18233.415849057434,
            "unit": "ns/iter",
            "extra": "iterations: 38425\ncpu: 18232.728692257464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88890.11856256341,
            "unit": "ns/iter",
            "extra": "iterations: 7903\ncpu: 88884.38567632569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71811.55571530742,
            "unit": "ns/iter",
            "extra": "iterations: 9737\ncpu: 71807.58960665505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 70143.03456221164,
            "unit": "ns/iter",
            "extra": "iterations: 9982\ncpu: 70141.6449609286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71457.57132653736,
            "unit": "ns/iter",
            "extra": "iterations: 9800\ncpu: 71456.66326530626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 134479.5419466384,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 134472.14436552097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 557639.0962609621,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 557608.750994431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 474097.73865948623,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 474087.745429929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 467571.01935914933,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 467550.5340453937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 473627.9176232565,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 473614.11208642303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 319950.9111617438,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 319944.2369020511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 464677.2692819439,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 464660.5053191491 ns\nthreads: 1"
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
        "date": 1702492241012,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7641.850691295061,
            "unit": "ns/iter",
            "extra": "iterations: 91495\ncpu: 7641.224110607137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68535.68697054518,
            "unit": "ns/iter",
            "extra": "iterations: 12395\ncpu: 68534.26381605485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128769.90227135931,
            "unit": "ns/iter",
            "extra": "iterations: 6692\ncpu: 128766.66168559472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 189140.19235806665,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 189140.26200873364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 246694.0367207742,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 246677.48363222321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 310537.70109654,
            "unit": "ns/iter",
            "extra": "iterations: 2827\ncpu: 310523.8415281215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 368147.086126441,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 368127.40772167983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 427620.76319682563,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 427601.72668968904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 487472.4675615018,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 487458.1096196865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5657.0611729794655,
            "unit": "ns/iter",
            "extra": "iterations: 124009\ncpu: 5656.878129813167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4700.758786307348,
            "unit": "ns/iter",
            "extra": "iterations: 148868\ncpu: 4700.75973345514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4672.895292858941,
            "unit": "ns/iter",
            "extra": "iterations: 149560\ncpu: 4672.74806097887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4716.952489254707,
            "unit": "ns/iter",
            "extra": "iterations: 147735\ncpu: 4716.887670491092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8175.618729215026,
            "unit": "ns/iter",
            "extra": "iterations: 85396\ncpu: 8175.304463909318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 25929.864824612643,
            "unit": "ns/iter",
            "extra": "iterations: 31559\ncpu: 25929.27849424888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 107792.72084805205,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 107788.65471983874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 85910.66383580978,
            "unit": "ns/iter",
            "extra": "iterations: 9891\ncpu: 85911.21221312298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 85638.89160873686,
            "unit": "ns/iter",
            "extra": "iterations: 9927\ncpu: 85637.6145864814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 87053.53621256034,
            "unit": "ns/iter",
            "extra": "iterations: 9748\ncpu: 87052.41075092298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 247349.28637015694,
            "unit": "ns/iter",
            "extra": "iterations: 3485\ncpu: 247330.04304160614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1914847.610309265,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1914691.340206186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1564768.6750841988,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1564652.8619528608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1559502.728643186,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1559379.7319933046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1567593.030150744,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1567458.6264656654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 941598.275826441,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 941580.5785123953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1521428.222222245,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1521334.3137254869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6506147.169999395,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6505047.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3600413.4942529695,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3599977.394636018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8305173.87786332,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 8304632.061068695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25627.529512911267,
            "unit": "ns/iter",
            "extra": "iterations: 31986\ncpu: 25626.846120177608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 109713.29491786812,
            "unit": "ns/iter",
            "extra": "iterations: 7792\ncpu: 109710.67761806984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 87808.58058474804,
            "unit": "ns/iter",
            "extra": "iterations: 9611\ncpu: 87805.753823744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 87047.74469604311,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 87047.8988168095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90118.10121628927,
            "unit": "ns/iter",
            "extra": "iterations: 9455\ncpu: 90117.10206240056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 250984.7752386432,
            "unit": "ns/iter",
            "extra": "iterations: 3457\ncpu: 250973.67659820602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1941758.8016701334,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941650.5219206708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1581955.899659849,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1581936.7346938779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1584853.8194209458,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1584833.3901192474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1586422.3633276715,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1586378.6078098433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 942832.6844262287,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 942805.6352458978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1544024.814569562,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1544001.6556291424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6539522.589999933,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6539389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3618638.130769096,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3618530.0000000186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24487.370777456003,
            "unit": "ns/iter",
            "extra": "iterations: 33481\ncpu: 24486.434096950496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 107062.83688566354,
            "unit": "ns/iter",
            "extra": "iterations: 7976\ncpu: 107060.04262788396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87058.90936000682,
            "unit": "ns/iter",
            "extra": "iterations: 9797\ncpu: 87054.09819332432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 85877.95004551037,
            "unit": "ns/iter",
            "extra": "iterations: 9889\ncpu: 85874.8912933556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 87012.59335540619,
            "unit": "ns/iter",
            "extra": "iterations: 9662\ncpu: 87008.10391223364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 247698.4917473088,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 247693.62549800787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1924163.6487602456,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1924117.3553719053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1598134.0976027274,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1598095.3767123306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1588570.5663265525,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1588425.850340129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1583936.676320186,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1583851.959114143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 940778.5365112079,
            "unit": "ns/iter",
            "extra": "iterations: 986\ncpu: 940700.5070993898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1546441.3123966602,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1546293.8842975146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2970.692890625912,
            "unit": "ns/iter",
            "extra": "iterations: 235942\ncpu: 2970.5970111298493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13928.183848387114,
            "unit": "ns/iter",
            "extra": "iterations: 50286\ncpu: 13927.878534781043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11330.6428351603,
            "unit": "ns/iter",
            "extra": "iterations: 61739\ncpu: 11329.827175691244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11051.601737209403,
            "unit": "ns/iter",
            "extra": "iterations: 63320\ncpu: 11051.216045483216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9488.403109286386,
            "unit": "ns/iter",
            "extra": "iterations: 73779\ncpu: 9487.724149148116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58518.68024371973,
            "unit": "ns/iter",
            "extra": "iterations: 11981\ncpu: 58512.753526416825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129900.674897884,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 129891.7192721875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33964.88803762697,
            "unit": "ns/iter",
            "extra": "iterations: 20623\ncpu: 33961.31503660936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33835.94456269564,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33834.72813467506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34093.800691804434,
            "unit": "ns/iter",
            "extra": "iterations: 20526\ncpu: 34093.40836012883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67737.86790076198,
            "unit": "ns/iter",
            "extra": "iterations: 10318\ncpu: 67735.31692188392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60917.3164435975,
            "unit": "ns/iter",
            "extra": "iterations: 11506\ncpu: 60913.64505475479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18719.75805115413,
            "unit": "ns/iter",
            "extra": "iterations: 37417\ncpu: 18719.09025309358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90917.31561115233,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 90911.15454782294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73057.94537115144,
            "unit": "ns/iter",
            "extra": "iterations: 9592\ncpu: 73051.39699749826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72576.2320115973,
            "unit": "ns/iter",
            "extra": "iterations: 9659\ncpu: 72571.43596645661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72923.77871147923,
            "unit": "ns/iter",
            "extra": "iterations: 9639\ncpu: 72919.54559601625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141563.35277497178,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 141554.328960644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 567906.6777327586,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 567872.1457489867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 482156.4287680352,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 482121.8857536119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 475177.12262879533,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 475125.067750683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 480272.233103435,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 480223.86206896347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 320271.4406779455,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 320261.5208428768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 472713.45307227917,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 472714.7197839309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18854.319571576954,
            "unit": "ns/iter",
            "extra": "iterations: 37253\ncpu: 18854.347300888207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93189.61841227507,
            "unit": "ns/iter",
            "extra": "iterations: 7495\ncpu: 93185.24349566322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73823.24963243707,
            "unit": "ns/iter",
            "extra": "iterations: 9522\ncpu: 73819.10312959462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72489.06330816919,
            "unit": "ns/iter",
            "extra": "iterations: 9667\ncpu: 72489.22106134296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72632.87314440233,
            "unit": "ns/iter",
            "extra": "iterations: 9633\ncpu: 72631.62047129648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 140740.35227957254,
            "unit": "ns/iter",
            "extra": "iterations: 4979\ncpu: 140740.73107049576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 567611.3171520946,
            "unit": "ns/iter",
            "extra": "iterations: 1236\ncpu: 567593.6893203926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 484930.42955798254,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 484931.4917127126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 476573.6486671933,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 476543.06220095465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 482795.7845303961,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 482777.83149171853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 322500.56597703585,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 322470.9425287345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 473848.6901695038,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 473839.25423729524 ns\nthreads: 1"
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
        "date": 1702503258561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7557.19378160316,
            "unit": "ns/iter",
            "extra": "iterations: 92950\ncpu: 7556.975793437333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66839.21384687384,
            "unit": "ns/iter",
            "extra": "iterations: 12696\ncpu: 66836.81474480151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 126960.70155772427,
            "unit": "ns/iter",
            "extra": "iterations: 6869\ncpu: 126956.50021837241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 186344.33807367136,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 186336.3714716656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 247327.6219547262,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 247321.06620808266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 302862.2594936556,
            "unit": "ns/iter",
            "extra": "iterations: 2844\ncpu: 302844.05766526004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 361661.73635983065,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 361640.9412744687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 420163.7875849018,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 420145.441319108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 478373.22461371875,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 478352.9801324506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5714.678571428759,
            "unit": "ns/iter",
            "extra": "iterations: 122136\ncpu: 5714.418353311071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4829.200556353375,
            "unit": "ns/iter",
            "extra": "iterations: 144872\ncpu: 4829.049781876419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4809.712830144289,
            "unit": "ns/iter",
            "extra": "iterations: 145353\ncpu: 4809.56636601927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4843.35030163878,
            "unit": "ns/iter",
            "extra": "iterations: 144544\ncpu: 4843.089301527569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8327.730540135366,
            "unit": "ns/iter",
            "extra": "iterations: 83942\ncpu: 8327.42846250983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26962.629299280867,
            "unit": "ns/iter",
            "extra": "iterations: 30383\ncpu: 26960.872856531598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 108836.82970322836,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 108832.8747930199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 87912.72075237363,
            "unit": "ns/iter",
            "extra": "iterations: 9676\ncpu: 87910.36585365857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87660.42958762734,
            "unit": "ns/iter",
            "extra": "iterations: 9700\ncpu: 87658.37113402091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 87520.96702373633,
            "unit": "ns/iter",
            "extra": "iterations: 9522\ncpu: 87519.07162360831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 241647.28707066964,
            "unit": "ns/iter",
            "extra": "iterations: 3581\ncpu: 241630.7176766269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1990079.7424892527,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1990001.2875536422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1609081.0605536618,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1609029.7577854674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1598737.7689655125,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1598643.4482758632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1615196.8795811133,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1615113.612565449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 984166.5339702669,
            "unit": "ns/iter",
            "extra": "iterations: 942\ncpu: 984108.8110403405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1574081.894915191,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1573994.9152542392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6616886.0800007675,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6616642.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3699019.5059291436,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3698822.9249011907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8287844.643939136,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8287370.454545471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25741.392909895756,
            "unit": "ns/iter",
            "extra": "iterations: 31819\ncpu: 25739.718407240904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 109332.78954784069,
            "unit": "ns/iter",
            "extra": "iterations: 7807\ncpu: 109328.02613039612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 88967.71000417978,
            "unit": "ns/iter",
            "extra": "iterations: 9576\ncpu: 88963.43984962402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88087.83416771093,
            "unit": "ns/iter",
            "extra": "iterations: 9588\ncpu: 88084.01126408004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90373.46504688534,
            "unit": "ns/iter",
            "extra": "iterations: 9384\ncpu: 90368.17988064756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 249640.1817393806,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 249629.7601849176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1997791.6688173625,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1997722.3655913991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1623810.1985941613,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1623772.7592267182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1616465.6354167305,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1616410.5902777775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1629252.8916083553,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1629216.083916083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 975799.6956978831,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 975779.3284365133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1581531.1428571178,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1581490.9863945574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6633209.640000359,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6632643.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3694008.213438961,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3693837.9446640434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25047.95267016643,
            "unit": "ns/iter",
            "extra": "iterations: 32601\ncpu: 25046.179565043985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 108733.41035755722,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 108729.39305255149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87572.36782198824,
            "unit": "ns/iter",
            "extra": "iterations: 9752\ncpu: 87565.09433962312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 87031.63613180541,
            "unit": "ns/iter",
            "extra": "iterations: 9803\ncpu: 87028.40967050877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 87483.7064656129,
            "unit": "ns/iter",
            "extra": "iterations: 9682\ncpu: 87477.81450113666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 240064.3688318798,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 240051.40786172193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1990652.8482905717,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1990514.102564097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1630967.0681817597,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1630890.209790208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1608369.9048442394,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1608247.0588235355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1623905.630662033,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1623831.707317072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 979218.045263104,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 979140.5263157877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1596036.5634516801,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1595058.0372250332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2866.262355144578,
            "unit": "ns/iter",
            "extra": "iterations: 244554\ncpu: 2866.2532610384596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14317.942258610834,
            "unit": "ns/iter",
            "extra": "iterations: 48977\ncpu: 14317.722604487866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11327.412120327523,
            "unit": "ns/iter",
            "extra": "iterations: 61698\ncpu: 11326.70913157637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10917.156328927498,
            "unit": "ns/iter",
            "extra": "iterations: 64537\ncpu: 10916.76867533351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9761.302029903212,
            "unit": "ns/iter",
            "extra": "iterations: 73304\ncpu: 9761.08261486415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59017.609294461196,
            "unit": "ns/iter",
            "extra": "iterations: 11835\ncpu: 59017.5580904096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 128436.05778022259,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 128434.52185042895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33741.623538466345,
            "unit": "ns/iter",
            "extra": "iterations: 20783\ncpu: 33741.03834865027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33419.53879556808,
            "unit": "ns/iter",
            "extra": "iterations: 20956\ncpu: 33419.450276770476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33758.27776167131,
            "unit": "ns/iter",
            "extra": "iterations: 20694\ncpu: 33757.69305112619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68260.3952725595,
            "unit": "ns/iter",
            "extra": "iterations: 10365\ncpu: 68260.57887120034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60523.821768470734,
            "unit": "ns/iter",
            "extra": "iterations: 11558\ncpu: 60522.78940993307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18594.008149894373,
            "unit": "ns/iter",
            "extra": "iterations: 38160\ncpu: 18593.566561844855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91388.98137159526,
            "unit": "ns/iter",
            "extra": "iterations: 7247\ncpu: 91386.94632261561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72948.29510750866,
            "unit": "ns/iter",
            "extra": "iterations: 9627\ncpu: 72946.58772203187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71522.00957717208,
            "unit": "ns/iter",
            "extra": "iterations: 9815\ncpu: 71521.21242995487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74144.48854639419,
            "unit": "ns/iter",
            "extra": "iterations: 9473\ncpu: 74140.43069777207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139056.6642899745,
            "unit": "ns/iter",
            "extra": "iterations: 5049\ncpu: 139052.40641711242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 572285.9967320451,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 572272.9575163481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 486328.65553235833,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486316.5622825355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 472655.59486835427,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 472644.29439567716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 478908.65044547955,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 478907.2652501694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 316667.9349299553,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 316662.49435155425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 472144.17881242186,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 472130.2294197034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18561.13724763824,
            "unit": "ns/iter",
            "extra": "iterations: 37793\ncpu: 18561.082740190148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92701.4952330543,
            "unit": "ns/iter",
            "extra": "iterations: 7552\ncpu: 92701.20497881371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74309.57862903546,
            "unit": "ns/iter",
            "extra": "iterations: 9424\ncpu: 74306.38794567184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72142.95722531003,
            "unit": "ns/iter",
            "extra": "iterations: 9702\ncpu: 72140.21851164647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74072.46860464946,
            "unit": "ns/iter",
            "extra": "iterations: 9460\ncpu: 74069.23890063533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 137942.61591489907,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 137942.22966318775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 570883.2985317758,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 570857.9119086551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 484546.56137931213,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 484544.68965517124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 474031.2160701927,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 474004.5914922305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 479539.2644853157,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 479521.745057943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 321243.1974287904,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 321233.7924701567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 473667.5694070008,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 473662.2641509448 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}