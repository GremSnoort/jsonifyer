window.BENCHMARK_DATA = {
  "lastUpdate": 1705956449863,
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
        "date": 1705574915793,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7606.281157971408,
            "unit": "ns/iter",
            "extra": "iterations: 92023\ncpu: 7605.843104441281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66655.22849837522,
            "unit": "ns/iter",
            "extra": "iterations: 12906\ncpu: 66651.9990701999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125682.48463526457,
            "unit": "ns/iter",
            "extra": "iterations: 6964\ncpu: 125674.71280873066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 186416.34151545863,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 186402.24119530417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 244084.3472696096,
            "unit": "ns/iter",
            "extra": "iterations: 3516\ncpu: 244070.25028441407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 299680.33892970433,
            "unit": "ns/iter",
            "extra": "iterations: 2859\ncpu: 299660.54564533057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 359052.6068765441,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 359026.01491300727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 416560.0196360225,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 416540.66091954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 472273.2656846525,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 472244.1352973267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5737.255949198951,
            "unit": "ns/iter",
            "extra": "iterations: 121571\ncpu: 5737.028567668282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4828.620006632378,
            "unit": "ns/iter",
            "extra": "iterations: 144742\ncpu: 4828.3221179754255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4790.690031387569,
            "unit": "ns/iter",
            "extra": "iterations: 145918\ncpu: 4790.37541632972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4826.481644650251,
            "unit": "ns/iter",
            "extra": "iterations: 146633\ncpu: 4826.175553933977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8357.878965150943,
            "unit": "ns/iter",
            "extra": "iterations: 83761\ncpu: 8357.165029070813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27623.576816956207,
            "unit": "ns/iter",
            "extra": "iterations: 29720\ncpu: 27620.93876177655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 114413.1685737066,
            "unit": "ns/iter",
            "extra": "iterations: 7516\ncpu: 114406.77221926575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 92479.83595188824,
            "unit": "ns/iter",
            "extra": "iterations: 9229\ncpu: 92472.62975403601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 90193.99388121795,
            "unit": "ns/iter",
            "extra": "iterations: 9479\ncpu: 90188.93343179666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 94295.47088776194,
            "unit": "ns/iter",
            "extra": "iterations: 9034\ncpu: 94290.59110028778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 248379.35124203612,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 248372.90583477795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1931692.8458335288,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1931552.916666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1600023.763698802,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1599943.3219178093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1546082.5581395328,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1545966.6112956812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1583166.7193878798,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1583080.2721088484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 961918.4797507777,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 961853.3748701956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1547519.3255425547,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1547442.9048414032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6565801.00000042,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6565082.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3763335.475806314,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3763120.5645161304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8251975.34586499,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8251318.796992499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 27039.030794111663,
            "unit": "ns/iter",
            "extra": "iterations: 30298\ncpu: 27037.58003828635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 113086.88489492936,
            "unit": "ns/iter",
            "extra": "iterations: 7567\ncpu: 113079.79384168134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 92855.72254838489,
            "unit": "ns/iter",
            "extra": "iterations: 9198\ncpu: 92850.52185257603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 93146.42218343628,
            "unit": "ns/iter",
            "extra": "iterations: 9169\ncpu: 93139.69898571307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 95541.20432153835,
            "unit": "ns/iter",
            "extra": "iterations: 8932\ncpu: 95535.79265562014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 257557.2861409851,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 257539.78494623708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1971475.0190275458,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1971352.6427061323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1612102.9480069706,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1612002.2530329293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1596365.976027414,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1596227.0547945285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1593947.2547009627,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1593863.0769230823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 968981.7957894919,
            "unit": "ns/iter",
            "extra": "iterations: 950\ncpu: 968929.0526315786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1568536.4168067442,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1568454.2857142827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6612558.450000279,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6612244.999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3685245.3517787056,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3685083.3992094756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 26595.14700860269,
            "unit": "ns/iter",
            "extra": "iterations: 31039\ncpu: 26592.957247333816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 112807.18403694086,
            "unit": "ns/iter",
            "extra": "iterations: 7580\ncpu: 112800.79155672908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 92006.30862476282,
            "unit": "ns/iter",
            "extra": "iterations: 9322\ncpu: 92000.8903668747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 89592.06433669111,
            "unit": "ns/iter",
            "extra": "iterations: 9528\ncpu: 89587.61544920302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 92292.42527615334,
            "unit": "ns/iter",
            "extra": "iterations: 9234\ncpu: 92288.15247996539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 246344.83634278597,
            "unit": "ns/iter",
            "extra": "iterations: 3489\ncpu: 246330.72513614196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1961028.6624737715,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1958353.878406714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1628389.6335079055,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1628313.0890052412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1570552.7719595202,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1570472.8040540575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1592848.349829445,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1592741.9795221763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 970052.4630592503,
            "unit": "ns/iter",
            "extra": "iterations: 961\ncpu: 970002.8095733635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1553745.3528427356,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1553636.7892976624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2875.400973267919,
            "unit": "ns/iter",
            "extra": "iterations: 244126\ncpu: 2875.260316393985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14626.754389994616,
            "unit": "ns/iter",
            "extra": "iterations: 47893\ncpu: 14625.809617271807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11578.674374432967,
            "unit": "ns/iter",
            "extra": "iterations: 60545\ncpu: 11578.090676356389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11192.350881407168,
            "unit": "ns/iter",
            "extra": "iterations: 62457\ncpu: 11191.770337992535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9589.95685742112,
            "unit": "ns/iter",
            "extra": "iterations: 72921\ncpu: 9589.863002427293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59665.23183714557,
            "unit": "ns/iter",
            "extra": "iterations: 11741\ncpu: 59661.51946171569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126854.9524759654,
            "unit": "ns/iter",
            "extra": "iterations: 5513\ncpu: 126849.10212225717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33267.59936247949,
            "unit": "ns/iter",
            "extra": "iterations: 21019\ncpu: 33265.76430848287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32982.79216314225,
            "unit": "ns/iter",
            "extra": "iterations: 21233\ncpu: 32981.24146375908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33532.656912596525,
            "unit": "ns/iter",
            "extra": "iterations: 20846\ncpu: 33530.902811090644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65027.799720016395,
            "unit": "ns/iter",
            "extra": "iterations: 10715\ncpu: 65023.25711619278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59941.95767649122,
            "unit": "ns/iter",
            "extra": "iterations: 11672\ncpu: 59938.84509938358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18017.936261978637,
            "unit": "ns/iter",
            "extra": "iterations: 38721\ncpu: 18016.732522403643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 90026.8567214022,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 90026.09030271952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 71608.13674160957,
            "unit": "ns/iter",
            "extra": "iterations: 9741\ncpu: 71600.91366389439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 68216.06454128948,
            "unit": "ns/iter",
            "extra": "iterations: 10257\ncpu: 68213.434727503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71138.2097575779,
            "unit": "ns/iter",
            "extra": "iterations: 9859\ncpu: 71133.41109646049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154312.95679013882,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 154303.99176954755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 559743.2357658403,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 559708.3400160396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 479169.2335616467,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 479140.34246575786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 460168.6432325334,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 460144.0210249684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 467061.30280747195,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 467022.25935828994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 309911.29513276933,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 309883.98230088485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 459143.74047304597,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 459110.70959264453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18034.90346841727,
            "unit": "ns/iter",
            "extra": "iterations: 38692\ncpu: 18033.381577587086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88351.0143273752,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 88344.49093445003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 72008.96101485149,
            "unit": "ns/iter",
            "extra": "iterations: 9696\ncpu: 72004.1872937294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 68460.39390089101,
            "unit": "ns/iter",
            "extra": "iterations: 10231\ncpu: 68458.09793764031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71161.68007312503,
            "unit": "ns/iter",
            "extra": "iterations: 9846\ncpu: 71157.16026812865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142624.14172105616,
            "unit": "ns/iter",
            "extra": "iterations: 4904\ncpu: 142609.1353996765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 560258.1160929367,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 560231.3050440325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 502496.07672416745,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 502484.99999999197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 464777.2660916079,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464741.2740544121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 465364.3277925674,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 465326.72872340423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 309789.6312973844,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 309771.6897012883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 460901.30125246954,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 460860.4482531256 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772783328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7316.631868422823,
            "unit": "ns/iter",
            "extra": "iterations: 94545\ncpu: 7316.6153683431185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63821.219257539095,
            "unit": "ns/iter",
            "extra": "iterations: 12930\ncpu: 63819.2807424594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 121746.09073224968,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 121744.37960261219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 181139.0591543406,
            "unit": "ns/iter",
            "extra": "iterations: 4801\ncpu: 181136.01333055622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 236067.03193276448,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 236066.89075630248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 289842.68389662774,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 289838.96620278334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 355250.4470635243,
            "unit": "ns/iter",
            "extra": "iterations: 2503\ncpu: 355239.95205753064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 393027.78581237333,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 393010.43478260894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 468040.4730788913,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 468032.20073183515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5363.617568065734,
            "unit": "ns/iter",
            "extra": "iterations: 132923\ncpu: 5363.564620118415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4565.900294958832,
            "unit": "ns/iter",
            "extra": "iterations: 154937\ncpu: 4565.804165564066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4659.531307835675,
            "unit": "ns/iter",
            "extra": "iterations: 151831\ncpu: 4659.483899862356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4606.434131102543,
            "unit": "ns/iter",
            "extra": "iterations: 151088\ncpu: 4606.329423911891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7956.9737123936575,
            "unit": "ns/iter",
            "extra": "iterations: 90575\ncpu: 7956.86999723985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 24991.192997018676,
            "unit": "ns/iter",
            "extra": "iterations: 32529\ncpu: 24990.273294598668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 103580.96451017816,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 103580.12322858923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 83431.92634805346,
            "unit": "ns/iter",
            "extra": "iterations: 10441\ncpu: 83432.42026625817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 83749.40451588306,
            "unit": "ns/iter",
            "extra": "iterations: 10452\ncpu: 83745.79027937236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 84957.11922533953,
            "unit": "ns/iter",
            "extra": "iterations: 9914\ncpu: 84955.4972765786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 237675.77009554417,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 237664.16526138302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1842601.7078430352,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1842570.9803921527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1502890.2046980872,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1502834.7315436236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1525813.5702479118,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1525812.231404955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1532127.27680002,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1532084.3200000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 938701.7597938098,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 938690.8247422706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1476227.4055728305,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1476176.0061919524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6274529.840000015,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6274496.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3602417.3229571655,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3602373.929961088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8006585.673913576,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 8006388.405797118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25452.02354802784,
            "unit": "ns/iter",
            "extra": "iterations: 32232\ncpu: 25451.402333085138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 122244.88801053872,
            "unit": "ns/iter",
            "extra": "iterations: 6831\ncpu: 122240.46259698442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 91310.51337740044,
            "unit": "ns/iter",
            "extra": "iterations: 9531\ncpu: 91308.87629839496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 84618.01384881782,
            "unit": "ns/iter",
            "extra": "iterations: 10398\ncpu: 84615.35872283172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90281.17027896487,
            "unit": "ns/iter",
            "extra": "iterations: 9320\ncpu: 90279.31330472125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 236038.88173206625,
            "unit": "ns/iter",
            "extra": "iterations: 3695\ncpu: 236033.12584573784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1872828.4699028397,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1872795.3398058256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1504402.3096026427,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1504366.8874172163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1547338.3398057783,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1547292.23300971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1541991.5854837904,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1541937.4193548432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 929055.163730571,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 929037.2020725375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1522652.8935836642,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1522600.9389671301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6509815.350000281,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6509530.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3576561.8582376493,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3576419.1570881368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24231.50242995134,
            "unit": "ns/iter",
            "extra": "iterations: 33334\ncpu: 24230.614387712245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 105235.82244008884,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 105232.71604938239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 83946.94775259658,
            "unit": "ns/iter",
            "extra": "iterations: 10412\ncpu: 83945.25547445244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 83813.36786570944,
            "unit": "ns/iter",
            "extra": "iterations: 10425\ncpu: 83810.4748201437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 85597.01869254577,
            "unit": "ns/iter",
            "extra": "iterations: 9790\ncpu: 85595.36261491313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 232386.15936905635,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 232377.7264073988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1858171.3111110858,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1858140.4040404125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1549621.409539345,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1549550.164473685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1530334.553428998,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1530307.6555023873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1533915.3172303105,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1533861.6747182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 951711.8749999362,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 951691.1585365874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1478324.9885433072,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1478257.937806867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2876.6849448305347,
            "unit": "ns/iter",
            "extra": "iterations: 244700\ncpu: 2876.6109521863405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14526.300449358729,
            "unit": "ns/iter",
            "extra": "iterations: 48291\ncpu: 14525.669379387338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11606.220484041844,
            "unit": "ns/iter",
            "extra": "iterations: 63796\ncpu: 11605.918866386672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10977.935722411596,
            "unit": "ns/iter",
            "extra": "iterations: 65046\ncpu: 10977.777265319852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9284.1083892483,
            "unit": "ns/iter",
            "extra": "iterations: 75561\ncpu: 9284.163788197659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59726.436056003564,
            "unit": "ns/iter",
            "extra": "iterations: 11643\ncpu: 59725.53465601603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 123046.61336430832,
            "unit": "ns/iter",
            "extra": "iterations: 5597\ncpu: 123040.75397534436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32200.490182228652,
            "unit": "ns/iter",
            "extra": "iterations: 21237\ncpu: 32199.298394311765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33009.93321017883,
            "unit": "ns/iter",
            "extra": "iterations: 21111\ncpu: 33008.34162285056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32506.636184116487,
            "unit": "ns/iter",
            "extra": "iterations: 21269\ncpu: 32506.82213550232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68436.68003924143,
            "unit": "ns/iter",
            "extra": "iterations: 10195\ncpu: 68433.53604708162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59453.559696453296,
            "unit": "ns/iter",
            "extra": "iterations: 11860\ncpu: 59451.90556492385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17966.021782902626,
            "unit": "ns/iter",
            "extra": "iterations: 38241\ncpu: 17965.484689208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 87861.61257555065,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 87861.46328918613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 69470.62232989834,
            "unit": "ns/iter",
            "extra": "iterations: 10112\ncpu: 69468.7401107597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70532.81370000377,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 70530.17999999867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71028.72015656134,
            "unit": "ns/iter",
            "extra": "iterations: 9709\ncpu: 71026.14069420123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139523.59700344276,
            "unit": "ns/iter",
            "extra": "iterations: 5206\ncpu: 139518.78601613318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 541799.6006314444,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 541794.1594317305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 447263.7856677062,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 447254.3322475549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 460795.57644761424,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 460781.45738451724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 463010.17270931165,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 462991.3645352641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 304151.739955828,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 304144.238410595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 456743.7806788859,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 456733.81201044226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18557.456779300894,
            "unit": "ns/iter",
            "extra": "iterations: 37644\ncpu: 18556.994474550727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 84937.38272218926,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 84934.04599129998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 69277.81634980283,
            "unit": "ns/iter",
            "extra": "iterations: 10520\ncpu: 69275.81749049477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 69362.9427325958,
            "unit": "ns/iter",
            "extra": "iterations: 10093\ncpu: 69361.65659367944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71179.95391276838,
            "unit": "ns/iter",
            "extra": "iterations: 9699\ncpu: 71178.45138674049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138082.59964967365,
            "unit": "ns/iter",
            "extra": "iterations: 5138\ncpu: 138078.94122226533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 525054.6365054831,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 525032.3712948614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 455424.59894456965,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 455409.6965699225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 451883.5022082164,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 451873.1230283919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 459701.96513161156,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 459700.78947368736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 304599.0310421376,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 304591.66297117475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 445175.7546933542,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 445164.83103879815 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774726723,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7471.836089613906,
            "unit": "ns/iter",
            "extra": "iterations: 93423\ncpu: 7471.428877257206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65911.15989096694,
            "unit": "ns/iter",
            "extra": "iterations: 12840\ncpu: 65907.3520249221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128986.76296082986,
            "unit": "ns/iter",
            "extra": "iterations: 6944\ncpu: 128983.17972350228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 184738.2556406847,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 184733.8867603235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 243295.2658943348,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 243282.33964396725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 299621.1786833789,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 299618.59979101346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 358846.4511340041,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 358829.0309278349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 415224.11744966643,
            "unit": "ns/iter",
            "extra": "iterations: 2086\ncpu: 415208.48513902246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 474867.9112200859,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 474842.4291939004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5609.576308372784,
            "unit": "ns/iter",
            "extra": "iterations: 124888\ncpu: 5609.412433540448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4769.04385702242,
            "unit": "ns/iter",
            "extra": "iterations: 146932\ncpu: 4768.935970380855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4690.417866701849,
            "unit": "ns/iter",
            "extra": "iterations: 149440\ncpu: 4690.244245182012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4783.6457695847885,
            "unit": "ns/iter",
            "extra": "iterations: 146735\ncpu: 4783.564248475146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8108.380643667402,
            "unit": "ns/iter",
            "extra": "iterations: 86380\ncpu: 8107.977541097489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 25733.74126027968,
            "unit": "ns/iter",
            "extra": "iterations: 31866\ncpu: 25733.298813782716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 108751.31497265589,
            "unit": "ns/iter",
            "extra": "iterations: 7861\ncpu: 108747.41127083059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 86924.14377420094,
            "unit": "ns/iter",
            "extra": "iterations: 9814\ncpu: 86922.75320970024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 86654.9374421248,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 86651.16781561883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 86803.90772685176,
            "unit": "ns/iter",
            "extra": "iterations: 9797\ncpu: 86801.28610799242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 240507.92839229773,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 240494.7617720816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1935504.9728032837,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1935405.6485355631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1573700.4138512288,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573615.371621622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1585225.630323769,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1585162.1805792185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1585570.9044367452,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1585506.6552901035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 953066.9711042535,
            "unit": "ns/iter",
            "extra": "iterations: 969\ncpu: 953028.1733746113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1549579.522388227,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1549133.9966832544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6479013.550000446,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6478808.99999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3675833.7137255287,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3675647.0588235185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8306061.62121271,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8305663.63636362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25137.399712063023,
            "unit": "ns/iter",
            "extra": "iterations: 32646\ncpu: 25136.047295227636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 109683.18201726336,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 109681.45047017919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 87855.71845867262,
            "unit": "ns/iter",
            "extra": "iterations: 9654\ncpu: 87854.72343070284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88194.29109198361,
            "unit": "ns/iter",
            "extra": "iterations: 9643\ncpu: 88194.30675101107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 91521.5591731848,
            "unit": "ns/iter",
            "extra": "iterations: 9337\ncpu: 91517.52168790813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 249253.160796769,
            "unit": "ns/iter",
            "extra": "iterations: 3464\ncpu: 249250.86605080837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1959111.8544302508,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1959041.561181433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1584871.66269156,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1584834.5826235083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1598030.6775301283,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1597960.8919382486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1598485.1913791662,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1598409.8275862036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 961272.1288659514,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 961215.7731958773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1557126.2871620439,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1557088.5135135103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6524696.640000229,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6524491.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3618258.29501913,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3618071.264367818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24658.102402779467,
            "unit": "ns/iter",
            "extra": "iterations: 33378\ncpu: 24657.01659775904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 109500.1492691774,
            "unit": "ns/iter",
            "extra": "iterations: 7731\ncpu: 109496.52050187538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87472.05686094933,
            "unit": "ns/iter",
            "extra": "iterations: 9831\ncpu: 87467.5414505134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 85990.53448799619,
            "unit": "ns/iter",
            "extra": "iterations: 9873\ncpu: 85988.9597893241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 87793.68823408156,
            "unit": "ns/iter",
            "extra": "iterations: 9706\ncpu: 87790.48011539239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 240142.43043964263,
            "unit": "ns/iter",
            "extra": "iterations: 3594\ncpu: 240133.1385642743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1965864.5864979967,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1965824.6835443166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1605246.4844827636,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1605220.6896551684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1591601.9042736627,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1591543.4188034143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1603072.893287465,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1603043.889845091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 956830.7169230395,
            "unit": "ns/iter",
            "extra": "iterations: 975\ncpu: 956787.7948717952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1557640.9250000247,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1557597.166666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2883.5945698219134,
            "unit": "ns/iter",
            "extra": "iterations: 242202\ncpu: 2883.5116968480934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13993.949077225614,
            "unit": "ns/iter",
            "extra": "iterations: 49958\ncpu: 13993.82481284278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10917.990134963618,
            "unit": "ns/iter",
            "extra": "iterations: 64166\ncpu: 10917.610572577325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11352.371894542755,
            "unit": "ns/iter",
            "extra": "iterations: 64443\ncpu: 11352.063063482556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9576.952895277715,
            "unit": "ns/iter",
            "extra": "iterations: 73050\ncpu: 9576.62286105407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57711.51436095569,
            "unit": "ns/iter",
            "extra": "iterations: 12151\ncpu: 57709.52185005333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127507.32689856447,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 127497.68712438547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33269.40953195991,
            "unit": "ns/iter",
            "extra": "iterations: 21024\ncpu: 33268.50266362234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33343.571564791084,
            "unit": "ns/iter",
            "extra": "iterations: 20974\ncpu: 33342.257080194475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33402.92046649418,
            "unit": "ns/iter",
            "extra": "iterations: 20922\ncpu: 33401.42433801782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66914.75255467334,
            "unit": "ns/iter",
            "extra": "iterations: 10471\ncpu: 66911.9568331582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 59885.67827499894,
            "unit": "ns/iter",
            "extra": "iterations: 11687\ncpu: 59882.75862068927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18433.689148327172,
            "unit": "ns/iter",
            "extra": "iterations: 38031\ncpu: 18433.72774841603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92672.77898358913,
            "unit": "ns/iter",
            "extra": "iterations: 7556\ncpu: 92671.5854949708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73393.87713987901,
            "unit": "ns/iter",
            "extra": "iterations: 9580\ncpu: 73391.56576200448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74502.67622600905,
            "unit": "ns/iter",
            "extra": "iterations: 9380\ncpu: 74499.65884861405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74798.78822149099,
            "unit": "ns/iter",
            "extra": "iterations: 9373\ncpu: 74794.55883921927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 141318.03446178717,
            "unit": "ns/iter",
            "extra": "iterations: 4933\ncpu: 141316.70383133853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 572601.9942856473,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 572589.9591836693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 482920.88466847775,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 482921.270718231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 479623.9828414926,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 479602.402196294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 481211.8388429725,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 481191.804407712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 318512.7654545154,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 318502.81818181777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 473914.1569688755,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 473842.08389715484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18839.842112334445,
            "unit": "ns/iter",
            "extra": "iterations: 37210\ncpu: 18838.97876914778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93267.77558635318,
            "unit": "ns/iter",
            "extra": "iterations: 7504\ncpu: 93262.11353944604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74256.42626604957,
            "unit": "ns/iter",
            "extra": "iterations: 9419\ncpu: 74252.63828431886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74224.52948051399,
            "unit": "ns/iter",
            "extra": "iterations: 9413\ncpu: 74224.57239987228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75383.13539090587,
            "unit": "ns/iter",
            "extra": "iterations: 9299\ncpu: 75381.23454134921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142537.04904740772,
            "unit": "ns/iter",
            "extra": "iterations: 4934\ncpu: 142532.3875151999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 573020.6086249615,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 572991.7819365358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 486996.4248956751,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 486981.98887343565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 479618.7037036873,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 479606.515775028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 483508.58632600267,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 483489.6408839748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 321278.155504617,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 321265.77981651865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 475992.95989118295,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 475971.92386131804 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705777732919,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7404.045016553293,
            "unit": "ns/iter",
            "extra": "iterations: 94543\ncpu: 7404.187512560422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65328.67291874537,
            "unit": "ns/iter",
            "extra": "iterations: 13009\ncpu: 65325.75140287492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 124999.47219036912,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 124991.59977064222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 184352.6122881391,
            "unit": "ns/iter",
            "extra": "iterations: 4720\ncpu: 184340.3389830508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 253167.8715703417,
            "unit": "ns/iter",
            "extra": "iterations: 3426\ncpu: 253161.12084063044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 301221.68776076013,
            "unit": "ns/iter",
            "extra": "iterations: 2876\ncpu: 301220.7232267037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 358536.5709557289,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 358543.40091021935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 416091.84630159516,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 416088.3285302593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 473989.29162132676,
            "unit": "ns/iter",
            "extra": "iterations: 1838\ncpu: 473972.79651795333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5498.28362047205,
            "unit": "ns/iter",
            "extra": "iterations: 126768\ncpu: 5498.245614035089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4672.86471919044,
            "unit": "ns/iter",
            "extra": "iterations: 150280\ncpu: 4672.758850146391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4648.89680206501,
            "unit": "ns/iter",
            "extra": "iterations: 150691\ncpu: 4648.977709352259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4675.012433522464,
            "unit": "ns/iter",
            "extra": "iterations: 150239\ncpu: 4674.736919175441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8400.473495779257,
            "unit": "ns/iter",
            "extra": "iterations: 83515\ncpu: 8400.310123929834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 25289.886443359774,
            "unit": "ns/iter",
            "extra": "iterations: 32213\ncpu: 25288.75919659762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 107355.1564745931,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 107352.71718572683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 87328.22095882076,
            "unit": "ns/iter",
            "extra": "iterations: 9762\ncpu: 87327.46363450118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 84800.3802550398,
            "unit": "ns/iter",
            "extra": "iterations: 10038\ncpu: 84800.05977286321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 85656.6280708836,
            "unit": "ns/iter",
            "extra": "iterations: 9932\ncpu: 85655.42690294022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 245041.64088246122,
            "unit": "ns/iter",
            "extra": "iterations: 3581\ncpu: 245041.60848924945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1955913.2500000657,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1955813.65546219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1600600.886402753,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1600569.535283991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1626770.0998248078,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1626715.4115586688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1605965.755244783,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1605994.0559440588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 952387.5307377751,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 952324.0778688523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1565235.7403035471,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1565238.7858347388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6412146.060000624,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6411717.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3810461.8016194976,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3810364.3724696357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8255255.291044759,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8254913.432835807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25302.08606229066,
            "unit": "ns/iter",
            "extra": "iterations: 32430\ncpu: 25301.38143694111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 109590.65355542094,
            "unit": "ns/iter",
            "extra": "iterations: 7805\ncpu: 109589.67328635482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 87223.10212024988,
            "unit": "ns/iter",
            "extra": "iterations: 9763\ncpu: 87224.70552084417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 86199.31313847082,
            "unit": "ns/iter",
            "extra": "iterations: 9887\ncpu: 86195.52948315933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 88739.92180499021,
            "unit": "ns/iter",
            "extra": "iterations: 9374\ncpu: 88740.5909963733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 246418.44574530533,
            "unit": "ns/iter",
            "extra": "iterations: 3502\ncpu: 246409.62307252808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1961590.8448637258,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1961626.624737958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1617676.6226087988,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1617640.869565217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1642708.522968071,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1642669.611307426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1627333.3892989762,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1627295.3874538746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 951514.5570401471,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 951509.8663925984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1577116.7689712776,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1577092.7487352393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6543566.689999807,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6543490.999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3680078.14960641,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3679797.2440944915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24409.285190226674,
            "unit": "ns/iter",
            "extra": "iterations: 33802\ncpu: 24408.440328974695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 114070.07272260939,
            "unit": "ns/iter",
            "extra": "iterations: 7783\ncpu: 114064.71797507333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 86339.0623734264,
            "unit": "ns/iter",
            "extra": "iterations: 9876\ncpu: 86337.44430943714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 85178.66773642713,
            "unit": "ns/iter",
            "extra": "iterations: 9971\ncpu: 85177.07351318818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 86274.8350494483,
            "unit": "ns/iter",
            "extra": "iterations: 9809\ncpu: 86273.97288204668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 242065.69361584206,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 242057.1508224128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1960127.3375528015,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1960059.493670893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1625987.9756946007,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1625944.6180555539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1624509.0910682443,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1624495.2714535906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1615910.8667820212,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1615828.2006920448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 948011.6843717908,
            "unit": "ns/iter",
            "extra": "iterations: 979\ncpu: 947976.5066394215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1572544.8819561398,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1572494.435075884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2897.1460414080634,
            "unit": "ns/iter",
            "extra": "iterations: 241500\ncpu: 2897.0091097308514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 13982.923689317104,
            "unit": "ns/iter",
            "extra": "iterations: 49993\ncpu: 13982.363530894341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11158.822490100087,
            "unit": "ns/iter",
            "extra": "iterations: 62881\ncpu: 11158.4612204004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11151.512347842474,
            "unit": "ns/iter",
            "extra": "iterations: 62764\ncpu: 11150.981454336923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9485.261116149577,
            "unit": "ns/iter",
            "extra": "iterations: 73879\ncpu: 9485.200124527904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56809.71651115711,
            "unit": "ns/iter",
            "extra": "iterations: 12325\ncpu: 56808.90060851956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 116240.29096935217,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 116235.69179784645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33233.55828628502,
            "unit": "ns/iter",
            "extra": "iterations: 21077\ncpu: 33232.983821226975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33454.54137501057,
            "unit": "ns/iter",
            "extra": "iterations: 20858\ncpu: 33453.869019081256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33691.22373681524,
            "unit": "ns/iter",
            "extra": "iterations: 20761\ncpu: 33690.881942102416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67217.02318167865,
            "unit": "ns/iter",
            "extra": "iterations: 10353\ncpu: 67213.9573070611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60082.50085881871,
            "unit": "ns/iter",
            "extra": "iterations: 11644\ncpu: 60080.36757128057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18084.1060113527,
            "unit": "ns/iter",
            "extra": "iterations: 38760\ncpu: 18083.48297213633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88937.94390150082,
            "unit": "ns/iter",
            "extra": "iterations: 7879\ncpu: 88934.52214748201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72101.147957602,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 72099.38265253657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72960.00010487398,
            "unit": "ns/iter",
            "extra": "iterations: 9536\ncpu: 72955.30620805315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73120.65504280255,
            "unit": "ns/iter",
            "extra": "iterations: 9578\ncpu: 73118.11442889988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140052.7405632132,
            "unit": "ns/iter",
            "extra": "iterations: 5007\ncpu: 140045.19672458753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 557492.4569378147,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 557492.0255183411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 477652.67643050867,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 477621.45776566747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 479324.4516792563,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 479310.69225496746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 480755.05991737836,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 480732.2314049548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 315276.85649822064,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 315269.22382671497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 468658.6644340255,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 468658.874748831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18339.960873876822,
            "unit": "ns/iter",
            "extra": "iterations: 38312\ncpu: 18339.191376070125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 89312.41080529324,
            "unit": "ns/iter",
            "extra": "iterations: 7848\ncpu: 89309.19979612668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71957.5102711562,
            "unit": "ns/iter",
            "extra": "iterations: 9736\ncpu: 71954.64256368091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73083.25576782327,
            "unit": "ns/iter",
            "extra": "iterations: 9579\ncpu: 73079.12099384096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72839.4249297652,
            "unit": "ns/iter",
            "extra": "iterations: 9611\ncpu: 72837.11372385887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 140783.8682887665,
            "unit": "ns/iter",
            "extra": "iterations: 4973\ncpu: 140781.66096923486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 553983.2597299233,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 553972.1207307442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 477384.49217153405,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 477354.731109594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 480302.6817558551,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 480309.67078189703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 477085.3599727417,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 477085.7923497223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 312756.85892855976,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 312761.8749999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 466292.4572763824,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 466287.9839786401 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705952881088,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7461.319721878941,
            "unit": "ns/iter",
            "extra": "iterations: 93916\ncpu: 7461.320754716982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66405.16530975913,
            "unit": "ns/iter",
            "extra": "iterations: 12897\ncpu: 66405.28805148484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125467.85652362603,
            "unit": "ns/iter",
            "extra": "iterations: 6921\ncpu: 125466.175408178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 184441.01238236585,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 184439.3016344725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 243140.16016829724,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 243139.15848527345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 300350.9555555518,
            "unit": "ns/iter",
            "extra": "iterations: 2880\ncpu: 300346.4236111111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 359140.44329897995,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 359110.1030927838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 416666.908741577,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 416661.3352545632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 472754.2483695649,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 472754.2934782604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5590.220586478503,
            "unit": "ns/iter",
            "extra": "iterations: 125597\ncpu: 5590.198014283787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4707.265306122211,
            "unit": "ns/iter",
            "extra": "iterations: 148911\ncpu: 4707.19624473679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4693.241827303566,
            "unit": "ns/iter",
            "extra": "iterations: 149094\ncpu: 4693.208982252804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4737.6519360982265,
            "unit": "ns/iter",
            "extra": "iterations: 147539\ncpu: 4737.699184622367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8166.017665291073,
            "unit": "ns/iter",
            "extra": "iterations: 85818\ncpu: 8165.860309026089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27033.70200308961,
            "unit": "ns/iter",
            "extra": "iterations: 30403\ncpu: 27033.72035654379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 106597.20788485499,
            "unit": "ns/iter",
            "extra": "iterations: 7990\ncpu: 106592.49061326671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 89545.00734445803,
            "unit": "ns/iter",
            "extra": "iterations: 9531\ncpu: 89542.52439408255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 88383.68350684346,
            "unit": "ns/iter",
            "extra": "iterations: 9798\ncpu: 88308.51194121226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 86501.22898490557,
            "unit": "ns/iter",
            "extra": "iterations: 9743\ncpu: 86497.36220876536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 241540.526461629,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 241526.96037683578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1963817.8241527127,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1963711.652542377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1600435.4041450194,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1600346.8048359288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1606421.4490499238,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1606362.6943005195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1604853.6159168507,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1604801.038062279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 948226.2640736427,
            "unit": "ns/iter",
            "extra": "iterations: 977\ncpu: 948213.8178096191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1562705.850921239,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1562662.1440535989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6459042.220000129,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6459030.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3686394.2047243044,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3686309.0551181072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8295181.843283132,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8294988.805970165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26327.008817444832,
            "unit": "ns/iter",
            "extra": "iterations: 31415\ncpu: 26326.955276141987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 108580.55839877587,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 108576.76716493504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89489.68527651913,
            "unit": "ns/iter",
            "extra": "iterations: 9529\ncpu: 89485.12960436568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 90375.0125899258,
            "unit": "ns/iter",
            "extra": "iterations: 9452\ncpu: 90374.73550571308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 92897.91562601754,
            "unit": "ns/iter",
            "extra": "iterations: 9209\ncpu: 92896.42740797067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 243843.98147629914,
            "unit": "ns/iter",
            "extra": "iterations: 3563\ncpu: 243844.26045467332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1986883.7702127148,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1986841.0638297854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1617555.7147827297,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1617538.6086956556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1628266.0574913234,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1628145.8188153382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1625145.8603839374,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1625082.3734729476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 945257.224365433,
            "unit": "ns/iter",
            "extra": "iterations: 985\ncpu: 945223.8578680165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1581297.0998308128,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1581224.1962775046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6521242.669999765,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6520815.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3594203.8499998627,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3594058.46153847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25321.635914792314,
            "unit": "ns/iter",
            "extra": "iterations: 32204\ncpu: 25320.857657433786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 108356.50133232861,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 108351.98578860515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87518.46251027314,
            "unit": "ns/iter",
            "extra": "iterations: 9736\ncpu: 87518.10805258836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 88563.43731898812,
            "unit": "ns/iter",
            "extra": "iterations: 9668\ncpu: 88562.88787753409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88919.77217173133,
            "unit": "ns/iter",
            "extra": "iterations: 9573\ncpu: 88919.37741564837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 240871.44690265149,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 240873.75553097247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1972027.8101266643,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1971960.7594936616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1620910.798960186,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1620902.5996533826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1627012.6690018445,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1627032.9246935097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1614646.4186850125,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1614622.6643598524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 949663.6375770714,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 949646.3039014405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1572043.672269058,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1572036.8067226834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2891.5008985909453,
            "unit": "ns/iter",
            "extra": "iterations: 242602\ncpu: 2891.5326336963594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14255.792601034027,
            "unit": "ns/iter",
            "extra": "iterations: 49142\ncpu: 14255.734402344326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10970.69678632982,
            "unit": "ns/iter",
            "extra": "iterations: 63790\ncpu: 10970.616084025722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10685.954173410315,
            "unit": "ns/iter",
            "extra": "iterations: 65486\ncpu: 10686.045872400218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9167.433699308642,
            "unit": "ns/iter",
            "extra": "iterations: 76417\ncpu: 9167.409084366065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56094.826340602274,
            "unit": "ns/iter",
            "extra": "iterations: 12513\ncpu: 56094.861344202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 130058.96257872549,
            "unit": "ns/iter",
            "extra": "iterations: 5398\ncpu: 130058.4290477953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 33862.42754884871,
            "unit": "ns/iter",
            "extra": "iterations: 20676\ncpu: 33862.20739021102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34166.33902688983,
            "unit": "ns/iter",
            "extra": "iterations: 20491\ncpu: 34166.23883656223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34077.225680554104,
            "unit": "ns/iter",
            "extra": "iterations: 20498\ncpu: 34077.51000097556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67204.31803373036,
            "unit": "ns/iter",
            "extra": "iterations: 10436\ncpu: 67204.21617478065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60546.16037002076,
            "unit": "ns/iter",
            "extra": "iterations: 11567\ncpu: 60544.67018241489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18623.678912250343,
            "unit": "ns/iter",
            "extra": "iterations: 37619\ncpu: 18622.78369972614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91021.47579494237,
            "unit": "ns/iter",
            "extra": "iterations: 7705\ncpu: 91020.25957170827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72476.60932159542,
            "unit": "ns/iter",
            "extra": "iterations: 9655\ncpu: 72475.14241325746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73076.81440819683,
            "unit": "ns/iter",
            "extra": "iterations: 9564\ncpu: 73072.85654537847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73270.0496557493,
            "unit": "ns/iter",
            "extra": "iterations: 9586\ncpu: 73264.34383475968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140977.0058092983,
            "unit": "ns/iter",
            "extra": "iterations: 4992\ncpu: 140970.7131410258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 560402.048465279,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 560399.9192245527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 469327.4809109424,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 469306.3630274594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 472452.73655914475,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 472415.99462365784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 470747.5726842168,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 470719.0669371243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 304503.1024411589,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 304489.5815169975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 461832.4509162046,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 461462.0418848132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18708.681054897712,
            "unit": "ns/iter",
            "extra": "iterations: 37160\ncpu: 18708.258880516907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90586.34464516275,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 90582.36129032132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71984.89804282301,
            "unit": "ns/iter",
            "extra": "iterations: 9759\ncpu: 71983.29746900254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73082.42970214828,
            "unit": "ns/iter",
            "extra": "iterations: 9602\ncpu: 73079.65007290155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73935.28146816063,
            "unit": "ns/iter",
            "extra": "iterations: 9454\ncpu: 73934.89528242064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139575.60346889542,
            "unit": "ns/iter",
            "extra": "iterations: 5016\ncpu: 139570.03588516804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 556832.0626984645,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 556804.04761904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 470021.96995993005,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 470026.4352470002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 477016.65170067834,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 477007.2789115654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 478932.8855379953,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 478915.7642220698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 310312.0763052001,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 310299.1075412747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 463945.3255968459,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463920.4907161735 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705954902123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7743.2577488310435,
            "unit": "ns/iter",
            "extra": "iterations: 90433\ncpu: 7743.077195271639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68609.12677064963,
            "unit": "ns/iter",
            "extra": "iterations: 12566\ncpu: 68606.48575521247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 130338.76859254992,
            "unit": "ns/iter",
            "extra": "iterations: 6629\ncpu: 130339.49313621967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 190777.04574445353,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 190776.77589619532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 250021.0488235285,
            "unit": "ns/iter",
            "extra": "iterations: 3400\ncpu: 250020.5294117647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 311079.3440317311,
            "unit": "ns/iter",
            "extra": "iterations: 2773\ncpu: 311078.6152181752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 370342.512644686,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 370337.6768109729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 431532.6694622167,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 431521.8549580658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 488616.74802703486,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 488613.19052987645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5790.0783395966055,
            "unit": "ns/iter",
            "extra": "iterations: 120284\ncpu: 5789.82657710086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4928.53880607527,
            "unit": "ns/iter",
            "extra": "iterations: 142220\ncpu: 4928.523414428351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4942.654950138841,
            "unit": "ns/iter",
            "extra": "iterations: 141794\ncpu: 4942.638616584619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4964.747918071702,
            "unit": "ns/iter",
            "extra": "iterations: 140855\ncpu: 4964.777963153602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8368.067063444212,
            "unit": "ns/iter",
            "extra": "iterations: 84010\ncpu: 8368.113319842872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26246.005375656783,
            "unit": "ns/iter",
            "extra": "iterations: 31252\ncpu: 26244.838730321273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 109980.1737789186,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 109978.49614395901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 89170.05908049979,
            "unit": "ns/iter",
            "extra": "iterations: 9614\ncpu: 89169.4924069066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 88063.47635275037,
            "unit": "ns/iter",
            "extra": "iterations: 9684\ncpu: 88061.86493184646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 89253.14287212476,
            "unit": "ns/iter",
            "extra": "iterations: 9533\ncpu: 89253.0473093465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 242369.82651071792,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 242367.1122250066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2063289.788889051,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2063258.6666666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1679960.0871141814,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1679949.1833030845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1719297.2909760994,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1719284.162062616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1706902.7009175033,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1706892.4770642156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1000555.6630670005,
            "unit": "ns/iter",
            "extra": "iterations: 926\ncpu: 1000561.447084232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1643639.6648934553,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1643635.1063829751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6738986.499999556,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6738920.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3899565.7916667406,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3899422.083333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8519061.874999955,
            "unit": "ns/iter",
            "extra": "iterations: 128\ncpu: 8518898.437500006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26395.251010845685,
            "unit": "ns/iter",
            "extra": "iterations: 31162\ncpu: 26394.406649123895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 110789.57973271818,
            "unit": "ns/iter",
            "extra": "iterations: 7707\ncpu: 110787.06370831665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89941.74425986427,
            "unit": "ns/iter",
            "extra": "iterations: 9451\ncpu: 89937.71029520711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 89432.19010005145,
            "unit": "ns/iter",
            "extra": "iterations: 9495\ncpu: 89429.56292785633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 92174.67816216487,
            "unit": "ns/iter",
            "extra": "iterations: 9250\ncpu: 92171.94594594573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 242498.95348834989,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 242493.91986550885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2074586.133928794,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2074528.7946428556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1692174.94918322,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1692145.0090744095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1733761.155555545,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1733712.7777777775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1724716.869003803,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1724664.206642063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1011617.1792349414,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 1011586.1202185757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1658738.9228006564,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1658685.9964093342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6800754.659999484,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6800454.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3800905.674796741,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3800748.7804878145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25782.289711164372,
            "unit": "ns/iter",
            "extra": "iterations: 32025\ncpu: 25781.742388758863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 110836.02795475455,
            "unit": "ns/iter",
            "extra": "iterations: 7691\ncpu: 110832.08945520665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88458.27357706665,
            "unit": "ns/iter",
            "extra": "iterations: 9628\ncpu: 88455.2035729127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 88688.28097968381,
            "unit": "ns/iter",
            "extra": "iterations: 9595\ncpu: 88683.24127149573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88823.39384775324,
            "unit": "ns/iter",
            "extra": "iterations: 9590\ncpu: 88820.52137643393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 238832.00658979447,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 238819.30258099877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2065304.099778385,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2065229.2682926792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1691657.4754990581,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1691563.1578947327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1728795.5777779492,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1728700.925925924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1699489.6270567065,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1699446.800731259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1014027.3852909581,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 1014001.207464326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1659866.504456349,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1659785.7397504526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2956.870351276576,
            "unit": "ns/iter",
            "extra": "iterations: 237619\ncpu: 2956.822476317128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14877.247061030888,
            "unit": "ns/iter",
            "extra": "iterations: 47976\ncpu: 14877.186509921656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11110.387009020591,
            "unit": "ns/iter",
            "extra": "iterations: 62859\ncpu: 11110.14810926043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11264.56101318475,
            "unit": "ns/iter",
            "extra": "iterations: 61667\ncpu: 11263.865600726442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9753.325022584711,
            "unit": "ns/iter",
            "extra": "iterations: 71955\ncpu: 9739.780418316977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57048.65963673975,
            "unit": "ns/iter",
            "extra": "iterations: 11617\ncpu: 57047.21528794004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 134646.37980030113,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 134644.81566820233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34895.86037379315,
            "unit": "ns/iter",
            "extra": "iterations: 20118\ncpu: 34895.53136494657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35207.60268598604,
            "unit": "ns/iter",
            "extra": "iterations: 19881\ncpu: 35205.326693828654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35333.522338330746,
            "unit": "ns/iter",
            "extra": "iterations: 19809\ncpu: 35332.12681104521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67539.7693787185,
            "unit": "ns/iter",
            "extra": "iterations: 10398\ncpu: 67538.06501250286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 60276.7362438637,
            "unit": "ns/iter",
            "extra": "iterations: 11613\ncpu: 60275.32076121592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18706.06458182566,
            "unit": "ns/iter",
            "extra": "iterations: 37317\ncpu: 18705.099552482592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93766.08087840545,
            "unit": "ns/iter",
            "extra": "iterations: 7468\ncpu: 93761.10069630359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74322.63785616963,
            "unit": "ns/iter",
            "extra": "iterations: 9441\ncpu: 74320.12498676099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75117.02589064954,
            "unit": "ns/iter",
            "extra": "iterations: 9347\ncpu: 75114.72130095125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76467.36641221217,
            "unit": "ns/iter",
            "extra": "iterations: 9170\ncpu: 76467.00109051251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142726.18575220613,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 142717.0034700964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 587701.7076022773,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 587670.7602339194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 497716.93861521373,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 497697.4304068532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 505517.3220461569,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 505494.95677233575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 502591.9156540066,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 502568.2630450289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 329514.9551251875,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 329495.08738781064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 490092.53081234265,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 490068.6274509857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18856.470621498473,
            "unit": "ns/iter",
            "extra": "iterations: 37136\ncpu: 18855.531021111703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93710.72004761048,
            "unit": "ns/iter",
            "extra": "iterations: 7562\ncpu: 93704.80031737495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74131.0949306864,
            "unit": "ns/iter",
            "extra": "iterations: 9449\ncpu: 74130.81807598642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75212.80994404203,
            "unit": "ns/iter",
            "extra": "iterations: 9292\ncpu: 75212.55919070268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75265.76917285679,
            "unit": "ns/iter",
            "extra": "iterations: 9297\ncpu: 75264.55845971812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142415.8701562198,
            "unit": "ns/iter",
            "extra": "iterations: 4929\ncpu: 142415.3377967112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 588038.2647793551,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 588041.7985012501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 498077.4491826939,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 498069.72281449387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 506650.8453683591,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 506653.8293216631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 503527.2553495536,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 503526.10556347907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 330506.03595079435,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 330504.9668874131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 492530.8614627031,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 492529.11392404785 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705956449004,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7597.346275502472,
            "unit": "ns/iter",
            "extra": "iterations: 91999\ncpu: 7597.301057620191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68053.04063421322,
            "unit": "ns/iter",
            "extra": "iterations: 12551\ncpu: 68052.45797147637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 129550.28219584197,
            "unit": "ns/iter",
            "extra": "iterations: 6740\ncpu: 129550.14836795254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 191947.99009246394,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 191936.9660942316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 252715.55963570805,
            "unit": "ns/iter",
            "extra": "iterations: 3404\ncpu: 252704.28907168034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 310312.39618567395,
            "unit": "ns/iter",
            "extra": "iterations: 2779\ncpu: 310303.7423533648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 368264.30573248,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 368255.159235669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 428507.6520453433,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 428496.15574174415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 490674.3902989451,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 490670.5583756347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5757.770597804454,
            "unit": "ns/iter",
            "extra": "iterations: 121712\ncpu: 5757.634415669781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4855.842045398954,
            "unit": "ns/iter",
            "extra": "iterations: 144187\ncpu: 4855.71445414636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4754.047124150011,
            "unit": "ns/iter",
            "extra": "iterations: 147313\ncpu: 4753.843177452095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4809.208520180054,
            "unit": "ns/iter",
            "extra": "iterations: 145842\ncpu: 4809.092031102146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8203.579608430327,
            "unit": "ns/iter",
            "extra": "iterations: 85349\ncpu: 8203.30056591172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30090.360118831533,
            "unit": "ns/iter",
            "extra": "iterations: 27602\ncpu: 30089.989855807562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 108756.66985341339,
            "unit": "ns/iter",
            "extra": "iterations: 7845\ncpu: 108753.3460803062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 87281.1373677217,
            "unit": "ns/iter",
            "extra": "iterations: 9733\ncpu: 87280.67399568512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 86662.10866477413,
            "unit": "ns/iter",
            "extra": "iterations: 9856\ncpu: 86658.00527597402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 88756.73740108058,
            "unit": "ns/iter",
            "extra": "iterations: 9604\ncpu: 88755.3935860059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 246219.37168140843,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 246204.1107622034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2005981.2215053446,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2005956.9892473072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1645471.3575221107,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1645426.1946902631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1643361.3292035093,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643326.3716814169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1638697.3315789283,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1638644.2105263143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 999913.852370645,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 999893.6422413776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1601902.217241355,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1601864.3103448276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6710168.400001067,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6709881.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3816706.4285716503,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3816549.795918361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8399439.93846121,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8399103.07692308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 25300.094457310595,
            "unit": "ns/iter",
            "extra": "iterations: 32385\ncpu: 25299.26509186357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 108492.17434920391,
            "unit": "ns/iter",
            "extra": "iterations: 7875\ncpu: 108488.8888888889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 88773.41902071642,
            "unit": "ns/iter",
            "extra": "iterations: 9558\ncpu: 88772.25360954163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 87201.81083855452,
            "unit": "ns/iter",
            "extra": "iterations: 9743\ncpu: 87201.08796058757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90043.67660429451,
            "unit": "ns/iter",
            "extra": "iterations: 9459\ncpu: 90041.36800930277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 249630.61525129015,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 249626.02541883357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2019984.6187363644,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2019959.6949891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1655589.9256636782,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1655561.7699115004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1660285.5839287096,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1660229.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1661723.2826475077,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1661683.184257608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1000348.0299465666,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 1000323.5294117711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1617118.463541721,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1617097.3958333286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6798764.889999802,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6798479.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3805245.334693813,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3805122.857142882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 24723.737315407092,
            "unit": "ns/iter",
            "extra": "iterations: 33249\ncpu: 24723.31197930768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 108584.02362804631,
            "unit": "ns/iter",
            "extra": "iterations: 7872\ncpu: 108583.06656504114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 90499.77407759041,
            "unit": "ns/iter",
            "extra": "iterations: 9459\ncpu: 90496.24696056727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86308.8052945347,
            "unit": "ns/iter",
            "extra": "iterations: 9897\ncpu: 86305.91088208536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 89676.36001258665,
            "unit": "ns/iter",
            "extra": "iterations: 9533\ncpu: 89674.3732298331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 243852.6891512084,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 243849.43788645352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2001662.9139786588,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2001605.1612903157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1647020.6214788605,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1646979.4014084486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1644091.2469136138,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1644029.1005290987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1642418.6355634383,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1642403.1690140825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 993054.494646715,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 993022.5910064277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1597044.862306276,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1597031.3253012092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2863.9425739247918,
            "unit": "ns/iter",
            "extra": "iterations: 243931\ncpu: 2863.8942979776975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14333.246136210699,
            "unit": "ns/iter",
            "extra": "iterations: 48851\ncpu: 14332.973736463882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11201.615143218705,
            "unit": "ns/iter",
            "extra": "iterations: 62457\ncpu: 11201.295291160362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10925.75230502808,
            "unit": "ns/iter",
            "extra": "iterations: 64099\ncpu: 10925.588542723035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9637.00908010482,
            "unit": "ns/iter",
            "extra": "iterations: 72356\ncpu: 9636.86218143621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57786.55287033468,
            "unit": "ns/iter",
            "extra": "iterations: 12124\ncpu: 57785.67304519991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 131451.03004132173,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 131449.15508824622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34222.02270507712,
            "unit": "ns/iter",
            "extra": "iterations: 20480\ncpu: 34221.37695312522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34366.255390201455,
            "unit": "ns/iter",
            "extra": "iterations: 20361\ncpu: 34365.645105839976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34413.964522952854,
            "unit": "ns/iter",
            "extra": "iterations: 20323\ncpu: 34414.02844068315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70189.62761590214,
            "unit": "ns/iter",
            "extra": "iterations: 9987\ncpu: 70187.95434064281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 61816.68599119483,
            "unit": "ns/iter",
            "extra": "iterations: 11350\ncpu: 61815.64757709274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18468.3065824597,
            "unit": "ns/iter",
            "extra": "iterations: 37843\ncpu: 18468.02050577387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91578.59756736642,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 91577.8053884391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 72004.16100564417,
            "unit": "ns/iter",
            "extra": "iterations: 9745\ncpu: 72002.67829656204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70125.36566566171,
            "unit": "ns/iter",
            "extra": "iterations: 9990\ncpu: 70122.03203203285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71934.18758988255,
            "unit": "ns/iter",
            "extra": "iterations: 9734\ncpu: 71932.07314567469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140536.23046171662,
            "unit": "ns/iter",
            "extra": "iterations: 5003\ncpu: 140534.3393963634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 572273.2398042837,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 572268.4339314769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 483782.2676348253,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 483776.07192253607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 479759.0857339041,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 479748.42249657057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 486869.91117279,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 486860.7217210243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 321617.27209625614,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 321617.6307265151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 475037.1735593235,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 475026.10169491835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18517.25766806045,
            "unit": "ns/iter",
            "extra": "iterations: 37754\ncpu: 18517.060443926443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88397.72703180682,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88395.30540131184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71555.19502751151,
            "unit": "ns/iter",
            "extra": "iterations: 9814\ncpu: 71554.7177501537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 70474.06319702644,
            "unit": "ns/iter",
            "extra": "iterations: 9953\ncpu: 70472.01848688845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72946.26043075565,
            "unit": "ns/iter",
            "extra": "iterations: 9611\ncpu: 72944.9693060035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138927.3489624967,
            "unit": "ns/iter",
            "extra": "iterations: 5012\ncpu: 138925.01995211534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 569036.5696821697,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 569021.2713936492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 483423.12413790845,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 483421.5172413855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 483699.05805109325,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 483675.05183138227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 489369.88485694956,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 489357.85066294443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 322720.93868143146,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 322716.4130935954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 477105.79141097143,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 477093.7286980192 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}