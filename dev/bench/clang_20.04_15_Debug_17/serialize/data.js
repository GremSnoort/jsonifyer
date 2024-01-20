window.BENCHMARK_DATA = {
  "lastUpdate": 1705772784116,
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
      }
    ]
  }
}