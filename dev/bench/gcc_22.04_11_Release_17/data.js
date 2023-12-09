window.BENCHMARK_DATA = {
  "lastUpdate": 1702084699380,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-11 22.04 Release c++-17": [
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702084698963,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1506.9171972922277,
            "unit": "ns/iter",
            "extra": "iterations: 437848\ncpu: 1506.8715627340996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17870.3186166621,
            "unit": "ns/iter",
            "extra": "iterations: 45889\ncpu: 17869.868595959815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37835.32454491346,
            "unit": "ns/iter",
            "extra": "iterations: 21809\ncpu: 37833.67875647668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56458.48256323853,
            "unit": "ns/iter",
            "extra": "iterations: 14825\ncpu: 56455.379426644184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 63619.16737333794,
            "unit": "ns/iter",
            "extra": "iterations: 13915\ncpu: 63614.99101688828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 80275.4864645367,
            "unit": "ns/iter",
            "extra": "iterations: 11082\ncpu: 80267.33441617039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96130.01648227466,
            "unit": "ns/iter",
            "extra": "iterations: 8858\ncpu: 96128.1553398058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 109074.6955676502,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 109070.99533437024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 126190.61420653145,
            "unit": "ns/iter",
            "extra": "iterations: 6856\ncpu: 126187.66044340731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1306.300270094599,
            "unit": "ns/iter",
            "extra": "iterations: 535368\ncpu: 1306.2596195514122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1043.7494294221667,
            "unit": "ns/iter",
            "extra": "iterations: 676069\ncpu: 1043.718910347909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1040.443304091933,
            "unit": "ns/iter",
            "extra": "iterations: 674158\ncpu: 1040.4187149006618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1088.0524566233544,
            "unit": "ns/iter",
            "extra": "iterations: 642569\ncpu: 1088.031479887763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2022.660575093236,
            "unit": "ns/iter",
            "extra": "iterations: 345231\ncpu: 2022.6523689935113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5954.343207749761,
            "unit": "ns/iter",
            "extra": "iterations: 136987\ncpu: 5954.155503806938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28242.774581962738,
            "unit": "ns/iter",
            "extra": "iterations: 29483\ncpu: 28242.661872943692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24942.055430441647,
            "unit": "ns/iter",
            "extra": "iterations: 33303\ncpu: 24940.99930937151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24768.28959722513,
            "unit": "ns/iter",
            "extra": "iterations: 33443\ncpu: 24766.82414855123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24663.14698375486,
            "unit": "ns/iter",
            "extra": "iterations: 33303\ncpu: 24661.084586974157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 59331.14970000019,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59326.05000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 623043.6120000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623032.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 505974.93599997275,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505920.20000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 579386.406999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579347.6999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 501447.9209999934,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501437.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 354029.3399755986,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 353994.7539650271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 505168.55600000103,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505146.59999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 814.0872860792476,
            "unit": "ns/iter",
            "extra": "iterations: 859255\ncpu: 814.0138841205458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12390.689586004248,
            "unit": "ns/iter",
            "extra": "iterations: 66305\ncpu: 12390.13649046076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27013.81703264544,
            "unit": "ns/iter",
            "extra": "iterations: 30694\ncpu: 27011.839447448983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40265.47948743031,
            "unit": "ns/iter",
            "extra": "iterations: 20524\ncpu: 40263.47690508661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53761.58054359555,
            "unit": "ns/iter",
            "extra": "iterations: 15563\ncpu: 53758.55554841594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55986.34589999847,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55982.1099999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66461.25286390621,
            "unit": "ns/iter",
            "extra": "iterations: 13094\ncpu: 66455.37650832458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77676.42160903168,
            "unit": "ns/iter",
            "extra": "iterations: 11162\ncpu: 77673.25748073845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88321.97183241935,
            "unit": "ns/iter",
            "extra": "iterations: 9834\ncpu: 88314.14480374203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 627.0562622816869,
            "unit": "ns/iter",
            "extra": "iterations: 1117516\ncpu: 627.0536618715051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 520.6024171502102,
            "unit": "ns/iter",
            "extra": "iterations: 1342490\ncpu: 520.5736355578043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 516.8784575792781,
            "unit": "ns/iter",
            "extra": "iterations: 1325060\ncpu: 516.8336528157212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 577.1942122265292,
            "unit": "ns/iter",
            "extra": "iterations: 1222750\ncpu: 577.1692496421969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1033.7681154402128,
            "unit": "ns/iter",
            "extra": "iterations: 664240\ncpu: 1033.7513549319613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4188.428726021144,
            "unit": "ns/iter",
            "extra": "iterations: 189438\ncpu: 4188.2615948225775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19249.17215095735,
            "unit": "ns/iter",
            "extra": "iterations: 43032\ncpu: 19247.834169920072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15317.342795081464,
            "unit": "ns/iter",
            "extra": "iterations: 54324\ncpu: 15316.72373168399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15361.955220842565,
            "unit": "ns/iter",
            "extra": "iterations: 54043\ncpu: 15360.979220250549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16326.720689519596,
            "unit": "ns/iter",
            "extra": "iterations: 50818\ncpu: 16325.929788657553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42831.08751158224,
            "unit": "ns/iter",
            "extra": "iterations: 19426\ncpu: 42827.32935241444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 503999.2439999911,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 503900.6857142852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 416498.50498812436,
            "unit": "ns/iter",
            "extra": "iterations: 2105\ncpu: 416469.6437054608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 420113.3309625358,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 420082.0293978192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 426699.0718336379,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 426688.6578449914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 243964.143173023,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 243953.51022664583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 410773.6015108591,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 410765.1558073642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 610.7301847642442,
            "unit": "ns/iter",
            "extra": "iterations: 1140751\ncpu: 610.7139068911605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5439.681080000014,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5439.578000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10693.831024402676,
            "unit": "ns/iter",
            "extra": "iterations: 78680\ncpu: 10693.575241484448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15705.343208267472,
            "unit": "ns/iter",
            "extra": "iterations: 53705\ncpu: 15705.079601526897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20913.029895291722,
            "unit": "ns/iter",
            "extra": "iterations: 40207\ncpu: 20912.567463376883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25857.637705778532,
            "unit": "ns/iter",
            "extra": "iterations: 32377\ncpu: 25856.978719461425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31394.17458441095,
            "unit": "ns/iter",
            "extra": "iterations: 27070\ncpu: 31392.046545991823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36845.58268778862,
            "unit": "ns/iter",
            "extra": "iterations: 22978\ncpu: 36843.25441726884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42287.397053648616,
            "unit": "ns/iter",
            "extra": "iterations: 19889\ncpu: 42284.6196389965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 554.1849254846803,
            "unit": "ns/iter",
            "extra": "iterations: 1273832\ncpu: 554.1514893643758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.3582647437706,
            "unit": "ns/iter",
            "extra": "iterations: 1729612\ncpu: 407.32285622440054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 414.5277235932839,
            "unit": "ns/iter",
            "extra": "iterations: 1690726\ncpu: 414.5036510942638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.17442258858244,
            "unit": "ns/iter",
            "extra": "iterations: 1701603\ncpu: 412.16511724532506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 922.8973340511715,
            "unit": "ns/iter",
            "extra": "iterations: 752265\ncpu: 922.8432799611804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2468.6517938956094,
            "unit": "ns/iter",
            "extra": "iterations: 324127\ncpu: 2468.5169701999625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8677.271393876279,
            "unit": "ns/iter",
            "extra": "iterations: 94291\ncpu: 8676.832359398019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9322.601450012982,
            "unit": "ns/iter",
            "extra": "iterations: 88413\ncpu: 9321.891577030516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9130.729772051422,
            "unit": "ns/iter",
            "extra": "iterations: 89406\ncpu: 9130.219448359157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8838.330172698159,
            "unit": "ns/iter",
            "extra": "iterations: 93863\ncpu: 8837.697495285787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 25984.422037159344,
            "unit": "ns/iter",
            "extra": "iterations: 31701\ncpu: 25983.095170499586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 278816.1188118843,
            "unit": "ns/iter",
            "extra": "iterations: 3131\ncpu: 278790.6739060995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211205.51575861537,
            "unit": "ns/iter",
            "extra": "iterations: 4093\ncpu: 211191.13119960943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205323.40243309055,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 205305.3771289531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 207365.77829044044,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 207353.69111218976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107753.28179031267,
            "unit": "ns/iter",
            "extra": "iterations: 8155\ncpu: 107744.25505824672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 202627.42761020636,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 202614.59396751726 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}