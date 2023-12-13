window.BENCHMARK_DATA = {
  "lastUpdate": 1702489590605,
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
      }
    ]
  }
}