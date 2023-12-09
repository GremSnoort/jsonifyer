window.BENCHMARK_DATA = {
  "lastUpdate": 1702084970726,
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702084970246,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1474.5392118856066,
            "unit": "ns/iter",
            "extra": "iterations: 461735\ncpu: 1474.4938113853184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17727.74932643579,
            "unit": "ns/iter",
            "extra": "iterations: 46395\ncpu: 17727.231382692098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37471.53595157945,
            "unit": "ns/iter",
            "extra": "iterations: 21974\ncpu: 37470.79275507417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 57221.79529348689,
            "unit": "ns/iter",
            "extra": "iterations: 14958\ncpu: 57219.307394036645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62320.229799999535,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62315.02999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77868.37343582325,
            "unit": "ns/iter",
            "extra": "iterations: 11188\ncpu: 77864.87307829817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 93097.2841404865,
            "unit": "ns/iter",
            "extra": "iterations: 9168\ncpu: 93092.48472949387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 107330.52206066689,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 107324.75557783904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 124864.3964015428,
            "unit": "ns/iter",
            "extra": "iterations: 7003\ncpu: 124856.34727973734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1285.9787550913118,
            "unit": "ns/iter",
            "extra": "iterations: 544554\ncpu: 1285.951439159385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1007.4903243936362,
            "unit": "ns/iter",
            "extra": "iterations: 693910\ncpu: 1007.449381043651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1013.8671690076277,
            "unit": "ns/iter",
            "extra": "iterations: 691164\ncpu: 1013.797014890821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1018.7678429863486,
            "unit": "ns/iter",
            "extra": "iterations: 686208\ncpu: 1018.7173568364111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2019.6802524071757,
            "unit": "ns/iter",
            "extra": "iterations: 345632\ncpu: 2019.591935931855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6091.633179255422,
            "unit": "ns/iter",
            "extra": "iterations: 135862\ncpu: 6091.378015927918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27884.750076154312,
            "unit": "ns/iter",
            "extra": "iterations: 29545\ncpu: 27883.080047385345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24824.842035809867,
            "unit": "ns/iter",
            "extra": "iterations: 33343\ncpu: 24823.750112467376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24615.665375561974,
            "unit": "ns/iter",
            "extra": "iterations: 33563\ncpu: 24614.849685665722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24567.522513959084,
            "unit": "ns/iter",
            "extra": "iterations: 33668\ncpu: 24566.294404181994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58325.9666999993,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58323.64999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 648768.4879999734,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648737.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 615458.2328863732,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 615418.9837685254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 616098.4063604233,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 616067.915194346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 614493.3912737466,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 614471.0063335691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 348886.596366507,
            "unit": "ns/iter",
            "extra": "iterations: 2532\ncpu: 348863.1911532394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 616592.8901488256,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 616550.389794473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 797.1958774811668,
            "unit": "ns/iter",
            "extra": "iterations: 881791\ncpu: 797.1460357386283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12139.498946837426,
            "unit": "ns/iter",
            "extra": "iterations: 67416\ncpu: 12138.981844072614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26887.679759867602,
            "unit": "ns/iter",
            "extra": "iterations: 30983\ncpu: 26886.292482974623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40379.60422343336,
            "unit": "ns/iter",
            "extra": "iterations: 20552\ncpu: 40377.84643830289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53355.69042743889,
            "unit": "ns/iter",
            "extra": "iterations: 15628\ncpu: 53353.32736114668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55405.760899998306,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55402.859999999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65701.53120475668,
            "unit": "ns/iter",
            "extra": "iterations: 13123\ncpu: 65698.11780842768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76960.33402006449,
            "unit": "ns/iter",
            "extra": "iterations: 11164\ncpu: 76956.83446793299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87950.3692462307,
            "unit": "ns/iter",
            "extra": "iterations: 9950\ncpu: 87946.89447236164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 610.6628440026561,
            "unit": "ns/iter",
            "extra": "iterations: 1145449\ncpu: 610.6393213490957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 496.4839349689317,
            "unit": "ns/iter",
            "extra": "iterations: 1411264\ncpu: 496.45714763502787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 491.8535342217844,
            "unit": "ns/iter",
            "extra": "iterations: 1419096\ncpu: 491.83092616707876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 508.0650559999924,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 508.02760000000546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1075.5744941415824,
            "unit": "ns/iter",
            "extra": "iterations: 672026\ncpu: 1075.5359167651181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4233.794331572254,
            "unit": "ns/iter",
            "extra": "iterations: 188906\ncpu: 4233.574899685583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19271.99123174258,
            "unit": "ns/iter",
            "extra": "iterations: 42996\ncpu: 19271.008931063392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15323.269617224545,
            "unit": "ns/iter",
            "extra": "iterations: 54340\ncpu: 15322.456753772489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15340.321974492721,
            "unit": "ns/iter",
            "extra": "iterations: 54495\ncpu: 15339.544912377178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16341.476330847876,
            "unit": "ns/iter",
            "extra": "iterations: 51903\ncpu: 16340.722116255292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43295.94663094909,
            "unit": "ns/iter",
            "extra": "iterations: 19412\ncpu: 43294.26643313447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 499512.62471784186,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 499471.8961625294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 413405.5615601513,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 413386.37218045205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 411481.32858499227,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 411459.6866096845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 417011.89115970064,
            "unit": "ns/iter",
            "extra": "iterations: 2104\ncpu: 416989.3536121664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 244155.68813933685,
            "unit": "ns/iter",
            "extra": "iterations: 3617\ncpu: 244142.90848769722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 417627.11373289645,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 417601.7932987268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 598.3619777646936,
            "unit": "ns/iter",
            "extra": "iterations: 1170210\ncpu: 598.3327778774702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5299.0036600002095,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5298.865999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10245.419370801224,
            "unit": "ns/iter",
            "extra": "iterations: 80833\ncpu: 10244.949463709148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15452.23687179305,
            "unit": "ns/iter",
            "extra": "iterations: 54958\ncpu: 15451.93420430155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20177.319834029404,
            "unit": "ns/iter",
            "extra": "iterations: 41212\ncpu: 20176.88052023673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25120.778021383874,
            "unit": "ns/iter",
            "extra": "iterations: 33296\ncpu: 25119.693056223074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30520.846390940012,
            "unit": "ns/iter",
            "extra": "iterations: 27902\ncpu: 30519.14916493434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35499.229219355366,
            "unit": "ns/iter",
            "extra": "iterations: 23724\ncpu: 35497.76176024301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40131.04133839565,
            "unit": "ns/iter",
            "extra": "iterations: 21070\ncpu: 40129.34504034164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 547.3647855275251,
            "unit": "ns/iter",
            "extra": "iterations: 1291611\ncpu: 547.3378594638783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 412.5321725755629,
            "unit": "ns/iter",
            "extra": "iterations: 1698201\ncpu: 412.51512630130355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.9634283184662,
            "unit": "ns/iter",
            "extra": "iterations: 1685211\ncpu: 417.9398306799569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 417.022942248003,
            "unit": "ns/iter",
            "extra": "iterations: 1681483\ncpu: 417.01444498695264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 920.5252184785421,
            "unit": "ns/iter",
            "extra": "iterations: 759800\ncpu: 920.4698604896137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2475.9975191863687,
            "unit": "ns/iter",
            "extra": "iterations: 318847\ncpu: 2475.891571819722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8764.159760316605,
            "unit": "ns/iter",
            "extra": "iterations: 92789\ncpu: 8763.756479755044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9266.025736924024,
            "unit": "ns/iter",
            "extra": "iterations: 87967\ncpu: 9265.554128252583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9247.985257649736,
            "unit": "ns/iter",
            "extra": "iterations: 87910\ncpu: 9247.507678307316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8739.043866575677,
            "unit": "ns/iter",
            "extra": "iterations: 93716\ncpu: 8738.678560757937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 25454.607229742734,
            "unit": "ns/iter",
            "extra": "iterations: 32062\ncpu: 25453.624228058165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 266197.5911910658,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 266179.094292804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 201590.3302709055,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 201575.75971731267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202791.8846975082,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 202776.41755634543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 202597.75269573546,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 202585.70089076395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104270.43298722898,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 104263.18176393223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 197602.9224389153,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 197591.95247702277 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}