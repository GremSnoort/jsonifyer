window.BENCHMARK_DATA = {
  "lastUpdate": 1702310715516,
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
        "date": 1702085576320,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1484.2853670063644,
            "unit": "ns/iter",
            "extra": "iterations: 471831\ncpu: 1484.2475377836556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18399.08641781367,
            "unit": "ns/iter",
            "extra": "iterations: 44551\ncpu: 18398.747502861886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 38904.070799392626,
            "unit": "ns/iter",
            "extra": "iterations: 21116\ncpu: 38901.060806971014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50306.143500000646,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50216.299999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 64120.96721191713,
            "unit": "ns/iter",
            "extra": "iterations: 13694\ncpu: 64118.15393603034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 80434.21521878283,
            "unit": "ns/iter",
            "extra": "iterations: 10947\ncpu: 80428.90289577055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96756.3826126877,
            "unit": "ns/iter",
            "extra": "iterations: 8719\ncpu: 96750.00573460254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112622.05637126004,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 112618.22233875204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 130534.63648469048,
            "unit": "ns/iter",
            "extra": "iterations: 6759\ncpu: 130534.0582926468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1304.7822896327136,
            "unit": "ns/iter",
            "extra": "iterations: 536217\ncpu: 1304.710779404608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1060.0786978546732,
            "unit": "ns/iter",
            "extra": "iterations: 658544\ncpu: 1060.0658422216259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1076.168132491319,
            "unit": "ns/iter",
            "extra": "iterations: 671863\ncpu: 1076.0156460468888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1048.537080023661,
            "unit": "ns/iter",
            "extra": "iterations: 645334\ncpu: 1048.5220056590874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2019.693195546814,
            "unit": "ns/iter",
            "extra": "iterations: 346817\ncpu: 2019.6080353615905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5852.76345000011,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5852.125000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28122.628851303307,
            "unit": "ns/iter",
            "extra": "iterations: 29503\ncpu: 28121.868962478427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24827.098689329552,
            "unit": "ns/iter",
            "extra": "iterations: 33418\ncpu: 24825.43539409896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24388.577136706528,
            "unit": "ns/iter",
            "extra": "iterations: 28806\ncpu: 24387.322085676544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24809.082400024385,
            "unit": "ns/iter",
            "extra": "iterations: 33483\ncpu: 24807.015500403177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 58781.326399997626,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58777.600000000166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 627205.7390000328,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627180.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 502330.12699999334,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502282.49999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 501365.4229999815,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501370.4000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 504507.50700002804,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504470.9000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 369414.17358804925,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 369375.04152824037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 508043.8049999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508010.7999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 806.0411874487303,
            "unit": "ns/iter",
            "extra": "iterations: 859995\ncpu: 806.0218954761381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12871.191448099375,
            "unit": "ns/iter",
            "extra": "iterations: 63939\ncpu: 12871.144371979499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27773.192396430084,
            "unit": "ns/iter",
            "extra": "iterations: 29907\ncpu: 27772.605075734737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41736.70542171428,
            "unit": "ns/iter",
            "extra": "iterations: 20049\ncpu: 41736.201306798415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 55918.0502603096,
            "unit": "ns/iter",
            "extra": "iterations: 14982\ncpu: 55916.159391269655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57937.69349999707,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57933.44999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 68834.11452202976,
            "unit": "ns/iter",
            "extra": "iterations: 12574\ncpu: 68831.00843009386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 81216.05902520505,
            "unit": "ns/iter",
            "extra": "iterations: 10792\ncpu: 81213.25982209046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 91857.50238011782,
            "unit": "ns/iter",
            "extra": "iterations: 8613\ncpu: 91854.64994775344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 621.1359428815894,
            "unit": "ns/iter",
            "extra": "iterations: 1130004\ncpu: 621.1294827274943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 514.2710824443195,
            "unit": "ns/iter",
            "extra": "iterations: 1368366\ncpu: 514.2525464678318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 514.7197172450038,
            "unit": "ns/iter",
            "extra": "iterations: 1357076\ncpu: 514.680975862814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 538.0925663225437,
            "unit": "ns/iter",
            "extra": "iterations: 1311168\ncpu: 538.074449650998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1046.8509111574508,
            "unit": "ns/iter",
            "extra": "iterations: 668655\ncpu: 1046.8580957294853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4113.84886945458,
            "unit": "ns/iter",
            "extra": "iterations: 190041\ncpu: 4113.683889265998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19069.19637171586,
            "unit": "ns/iter",
            "extra": "iterations: 43657\ncpu: 19068.88700552025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15341.925957541513,
            "unit": "ns/iter",
            "extra": "iterations: 53888\ncpu: 15341.539860451214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15558.68058177966,
            "unit": "ns/iter",
            "extra": "iterations: 53491\ncpu: 15557.920023929173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16341.528727556994,
            "unit": "ns/iter",
            "extra": "iterations: 51240\ncpu: 16341.477361436408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42944.548981269065,
            "unit": "ns/iter",
            "extra": "iterations: 19436\ncpu: 42942.86375797487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 508509.214491073,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 508486.48648648395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 430605.46894864336,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 430581.466992665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 430317.4079333974,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 430306.1214495585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 426316.14017769473,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 426297.7788746304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257811.38376167955,
            "unit": "ns/iter",
            "extra": "iterations: 3424\ncpu: 257804.00116822295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 426407.0840707908,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 426398.6234021614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 596.5778232876911,
            "unit": "ns/iter",
            "extra": "iterations: 1175323\ncpu: 596.5459707671836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5432.43796000013,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5432.401999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10324.285200532699,
            "unit": "ns/iter",
            "extra": "iterations: 80361\ncpu: 10324.02409128809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15564.720756732539,
            "unit": "ns/iter",
            "extra": "iterations: 54286\ncpu: 15564.469660686038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20432.827991244845,
            "unit": "ns/iter",
            "extra": "iterations: 41120\ncpu: 20432.762645914314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25284.683166509414,
            "unit": "ns/iter",
            "extra": "iterations: 32869\ncpu: 25283.90885028443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30426.066483818475,
            "unit": "ns/iter",
            "extra": "iterations: 27345\ncpu: 30424.231120863005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35531.90116524401,
            "unit": "ns/iter",
            "extra": "iterations: 23686\ncpu: 35530.86211264057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40461.5212653625,
            "unit": "ns/iter",
            "extra": "iterations: 20832\ncpu: 40459.874231950984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 536.7356935752114,
            "unit": "ns/iter",
            "extra": "iterations: 1301618\ncpu: 536.7262130671179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 403.7595296157642,
            "unit": "ns/iter",
            "extra": "iterations: 1725568\ncpu: 403.74653447444547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.72550155610594,
            "unit": "ns/iter",
            "extra": "iterations: 1689791\ncpu: 410.71706500981537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 408.7266223030316,
            "unit": "ns/iter",
            "extra": "iterations: 1667583\ncpu: 408.59261577984495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 915.130655334921,
            "unit": "ns/iter",
            "extra": "iterations: 760344\ncpu: 915.097771534988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2475.236620797465,
            "unit": "ns/iter",
            "extra": "iterations: 323674\ncpu: 2475.2170393667707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8562.77367324603,
            "unit": "ns/iter",
            "extra": "iterations: 95044\ncpu: 8562.473170321213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9307.67688887883,
            "unit": "ns/iter",
            "extra": "iterations: 88174\ncpu: 9307.349105178455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9206.704352471697,
            "unit": "ns/iter",
            "extra": "iterations: 87973\ncpu: 9206.414468075352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8727.717769701665,
            "unit": "ns/iter",
            "extra": "iterations: 94104\ncpu: 8727.331463062215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 25843.832715143617,
            "unit": "ns/iter",
            "extra": "iterations: 32083\ncpu: 25843.103824455433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262199.9018719794,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 262188.28502415435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203583.83539864176,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 203575.09936871575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 199093.75576251285,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 199084.9126891738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201359.97320397152,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 201352.50635250728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104641.1579829906,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 104636.72296083295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 195564.40843805592,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 195555.29622980245 ns\nthreads: 1"
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
          "id": "08a1871a28562639bf0f45a39f33526d4fa6ea0d",
          "message": "rm typeid -> tuple_name set",
          "timestamp": "2023-12-11T00:33:38+03:00",
          "tree_id": "fbafa482ecf5561fe3f71808e32dcdc5e65d7018",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/08a1871a28562639bf0f45a39f33526d4fa6ea0d"
        },
        "date": 1702244193394,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1605.4780193100485,
            "unit": "ns/iter",
            "extra": "iterations: 442775\ncpu: 1600.1422844559881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24479.393252163773,
            "unit": "ns/iter",
            "extra": "iterations: 34085\ncpu: 24477.605985037404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50000.56579184343,
            "unit": "ns/iter",
            "extra": "iterations: 16651\ncpu: 50000.120112906145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62733.850071735804,
            "unit": "ns/iter",
            "extra": "iterations: 13940\ncpu: 62732.02295552367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92786.24049547451,
            "unit": "ns/iter",
            "extra": "iterations: 10495\ncpu: 92783.23010957602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 114863.08416169506,
            "unit": "ns/iter",
            "extra": "iterations: 7545\ncpu: 114861.2193505633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 135507.58014048697,
            "unit": "ns/iter",
            "extra": "iterations: 6264\ncpu: 135504.1507024265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 156663.71531792346,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 156652.40245664754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 173256.92336858972,
            "unit": "ns/iter",
            "extra": "iterations: 5011\ncpu: 173252.06545599678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1363.3492775218174,
            "unit": "ns/iter",
            "extra": "iterations: 510050\ncpu: 1363.32163513381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1116.4785703460889,
            "unit": "ns/iter",
            "extra": "iterations: 626865\ncpu: 1116.4303318896414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1165.5752538127967,
            "unit": "ns/iter",
            "extra": "iterations: 604481\ncpu: 1165.5372129148818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1132.730598151221,
            "unit": "ns/iter",
            "extra": "iterations: 618021\ncpu: 1132.7034194630914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2283.220767032497,
            "unit": "ns/iter",
            "extra": "iterations: 307940\ncpu: 2283.1717217639816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6666.072795079189,
            "unit": "ns/iter",
            "extra": "iterations: 123882\ncpu: 6665.89254290373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31203.97947269968,
            "unit": "ns/iter",
            "extra": "iterations: 26209\ncpu: 31203.00660078595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27706.261453343508,
            "unit": "ns/iter",
            "extra": "iterations: 29642\ncpu: 27705.617029890014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29217.036241777012,
            "unit": "ns/iter",
            "extra": "iterations: 24171\ncpu: 29215.514459476253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28739.28504315102,
            "unit": "ns/iter",
            "extra": "iterations: 28736\ncpu: 28738.87806236082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74854.67351966743,
            "unit": "ns/iter",
            "extra": "iterations: 11771\ncpu: 74851.03219777397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 790091.2011884501,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 790066.8081494063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 650264.4159999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650232.5000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 657530.2269999952,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657520.0999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 639665.3470000046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639631.3000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 460557.68687924405,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 460540.1986408784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 906.539639911305,
            "unit": "ns/iter",
            "extra": "iterations: 772643\ncpu: 906.503779882818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18491.811836048266,
            "unit": "ns/iter",
            "extra": "iterations: 45184\ncpu: 18491.33542847026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39587.86804736472,
            "unit": "ns/iter",
            "extra": "iterations: 21197\ncpu: 39586.41788932384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 59248.251167397495,
            "unit": "ns/iter",
            "extra": "iterations: 14134\ncpu: 59247.1204188481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66022.3212102907,
            "unit": "ns/iter",
            "extra": "iterations: 13253\ncpu: 66020.7500188637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82803.44330285587,
            "unit": "ns/iter",
            "extra": "iterations: 10609\ncpu: 82801.94174757262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99065.50402631128,
            "unit": "ns/iter",
            "extra": "iterations: 8817\ncpu: 99063.42293297034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115206.54158989261,
            "unit": "ns/iter",
            "extra": "iterations: 7598\ncpu: 115204.47486180547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 131675.97862411512,
            "unit": "ns/iter",
            "extra": "iterations: 6643\ncpu: 131671.12750263466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 754.4101128872301,
            "unit": "ns/iter",
            "extra": "iterations: 915604\ncpu: 754.3754723657754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 617.4417071355979,
            "unit": "ns/iter",
            "extra": "iterations: 1134204\ncpu: 617.4272882127018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 614.7332586595558,
            "unit": "ns/iter",
            "extra": "iterations: 1140963\ncpu: 614.7060859992833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 609.550577402998,
            "unit": "ns/iter",
            "extra": "iterations: 1148418\ncpu: 609.5459144666875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1268.7942932726428,
            "unit": "ns/iter",
            "extra": "iterations: 551139\ncpu: 1268.7645040543252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5263.743868618837,
            "unit": "ns/iter",
            "extra": "iterations: 152168\ncpu: 5263.628358130468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23655.512534657984,
            "unit": "ns/iter",
            "extra": "iterations: 34624\ncpu: 23654.47666358597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19913.39180682359,
            "unit": "ns/iter",
            "extra": "iterations: 41620\ncpu: 19912.683805862576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19739.11069863208,
            "unit": "ns/iter",
            "extra": "iterations: 41753\ncpu: 19738.301439417522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19728.26259155883,
            "unit": "ns/iter",
            "extra": "iterations: 41913\ncpu: 19727.996087132986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56746.91520705894,
            "unit": "ns/iter",
            "extra": "iterations: 14730\ncpu: 56744.928716904134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 581910.8359999916,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 606086.691496841,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 606068.2361208707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 601203.3864430421,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 601184.4863731661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 603238.3909090977,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 603225.8041958006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 357561.8562728374,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 357549.3706861571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 603039.7446514781,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 603017.2532781245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 592.1568050909975,
            "unit": "ns/iter",
            "extra": "iterations: 1184209\ncpu: 592.1361009754144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5269.293990000107,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5269.018999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10096.728578297141,
            "unit": "ns/iter",
            "extra": "iterations: 79032\ncpu: 10096.319212470891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15576.97976158457,
            "unit": "ns/iter",
            "extra": "iterations: 55785\ncpu: 15576.77870395264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20306.973022957074,
            "unit": "ns/iter",
            "extra": "iterations: 40553\ncpu: 20306.108056124078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25507.87159887113,
            "unit": "ns/iter",
            "extra": "iterations: 32967\ncpu: 25507.355840689248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30288.455044537204,
            "unit": "ns/iter",
            "extra": "iterations: 27505\ncpu: 30287.482275949787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35130.433262891085,
            "unit": "ns/iter",
            "extra": "iterations: 23660\ncpu: 35129.07438715148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40368.962275157646,
            "unit": "ns/iter",
            "extra": "iterations: 20570\ncpu: 40367.78804083607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 547.4118014045459,
            "unit": "ns/iter",
            "extra": "iterations: 1274289\ncpu: 546.1528742694965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 419.5819703381654,
            "unit": "ns/iter",
            "extra": "iterations: 1683914\ncpu: 419.5698236370734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 428.2165237550365,
            "unit": "ns/iter",
            "extra": "iterations: 1642157\ncpu: 428.2099092839455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 427.13246297168416,
            "unit": "ns/iter",
            "extra": "iterations: 1655557\ncpu: 427.12525150145945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 955.8839816154237,
            "unit": "ns/iter",
            "extra": "iterations: 687098\ncpu: 955.8699050208121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2270.5833023015352,
            "unit": "ns/iter",
            "extra": "iterations: 346419\ncpu: 2270.4658231794238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8571.860592053046,
            "unit": "ns/iter",
            "extra": "iterations: 96917\ncpu: 8571.571550914701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9141.110264510295,
            "unit": "ns/iter",
            "extra": "iterations: 89902\ncpu: 9140.784409690552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8716.672660913388,
            "unit": "ns/iter",
            "extra": "iterations: 93979\ncpu: 8716.484533778763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8456.215473911523,
            "unit": "ns/iter",
            "extra": "iterations: 97687\ncpu: 8455.843663947084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29818.711077519278,
            "unit": "ns/iter",
            "extra": "iterations: 27786\ncpu: 29817.713956668682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259952.05676588658,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 259940.44185332954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 204144.03689777642,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 204136.2632197411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202628.77333953345,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 202621.04040873138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203055.24976636664,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 203047.03271028184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103669.86452380968,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 103665.86904761934 ns\nthreads: 1"
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
          "id": "ee321988d93ff16926e7194dec34c10291baefc2",
          "message": "add delta",
          "timestamp": "2023-12-11T11:53:54+03:00",
          "tree_id": "290f299ec6b77fff1939bc5ef8e8a991dcfff337",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/ee321988d93ff16926e7194dec34c10291baefc2"
        },
        "date": 1702285113815,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1611.3866266519544,
            "unit": "ns/iter",
            "extra": "iterations: 428509\ncpu: 1611.0634782466645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24759.042968633956,
            "unit": "ns/iter",
            "extra": "iterations: 33443\ncpu: 24757.865622103283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51273.016811348076,
            "unit": "ns/iter",
            "extra": "iterations: 16358\ncpu: 51269.89852060154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66063.76404989124,
            "unit": "ns/iter",
            "extra": "iterations: 13630\ncpu: 66060.55759354368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 94920.91878072663,
            "unit": "ns/iter",
            "extra": "iterations: 10170\ncpu: 94913.9724680433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 118120.48971529839,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 118115.12055578263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 147983.5790414333,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 147974.02112103984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163061.77017937624,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 163053.04559043338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 179825.12988599617,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 179816.8973941368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1415.8272658254368,
            "unit": "ns/iter",
            "extra": "iterations: 492624\ncpu: 1415.7996768326364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1128.7732961887484,
            "unit": "ns/iter",
            "extra": "iterations: 619919\ncpu: 1128.716170983631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1176.5619146249844,
            "unit": "ns/iter",
            "extra": "iterations: 594811\ncpu: 1176.5357399241095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1147.0239027144826,
            "unit": "ns/iter",
            "extra": "iterations: 616248\ncpu: 1147.0229517986281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2291.9612833160313,
            "unit": "ns/iter",
            "extra": "iterations: 305708\ncpu: 2291.910581339051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6785.479666344542,
            "unit": "ns/iter",
            "extra": "iterations: 122162\ncpu: 6785.465201944951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33055.362375449244,
            "unit": "ns/iter",
            "extra": "iterations: 25090\ncpu: 33054.26066161821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29647.78544984015,
            "unit": "ns/iter",
            "extra": "iterations: 27821\ncpu: 29647.73013191467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 28993.040087746973,
            "unit": "ns/iter",
            "extra": "iterations: 28263\ncpu: 28992.357499203863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28506.801097442403,
            "unit": "ns/iter",
            "extra": "iterations: 28612\ncpu: 28506.203690759135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 78016.62730690236,
            "unit": "ns/iter",
            "extra": "iterations: 11704\ncpu: 78015.19993164724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 801484.398799285,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 801467.3241852482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 671074.0320000354,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671044.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 667171.4589999737,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667171.4999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 660193.3200000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660149.0999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 474402.9174809898,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 474394.0825189997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 959.8824723697514,
            "unit": "ns/iter",
            "extra": "iterations: 729454\ncpu: 959.8635417723378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19127.317728531805,
            "unit": "ns/iter",
            "extra": "iterations: 43320\ncpu: 19127.086795937244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41033.73438033501,
            "unit": "ns/iter",
            "extra": "iterations: 20503\ncpu: 41032.263571184725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 51407.77029999981,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51406.660000000316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 68432.25993883691,
            "unit": "ns/iter",
            "extra": "iterations: 12753\ncpu: 68431.37301027235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 85696.01308593966,
            "unit": "ns/iter",
            "extra": "iterations: 10240\ncpu: 85693.72070312484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 102194.66799577515,
            "unit": "ns/iter",
            "extra": "iterations: 8527\ncpu: 102194.5584613581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 118979.99714052574,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 118975.72167756023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 136162.0847351995,
            "unit": "ns/iter",
            "extra": "iterations: 6420\ncpu: 136160.03115264824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 837.309527400362,
            "unit": "ns/iter",
            "extra": "iterations: 835464\ncpu: 837.295443011315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 647.2361201802248,
            "unit": "ns/iter",
            "extra": "iterations: 1088865\ncpu: 647.2281687812531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 631.4004068408252,
            "unit": "ns/iter",
            "extra": "iterations: 1110508\ncpu: 631.3734795246863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 651.572324267358,
            "unit": "ns/iter",
            "extra": "iterations: 1078172\ncpu: 651.5498454791987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1256.0622646344998,
            "unit": "ns/iter",
            "extra": "iterations: 557909\ncpu: 1256.0607554278547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5249.658376392292,
            "unit": "ns/iter",
            "extra": "iterations: 151342\ncpu: 5249.551347279675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24120.115744430797,
            "unit": "ns/iter",
            "extra": "iterations: 33885\ncpu: 24119.451084550692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20107.890725167184,
            "unit": "ns/iter",
            "extra": "iterations: 41025\ncpu: 20107.592931139545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20069.018427129184,
            "unit": "ns/iter",
            "extra": "iterations: 41135\ncpu: 20068.664154612867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20243.364847622262,
            "unit": "ns/iter",
            "extra": "iterations: 40754\ncpu: 20242.86205035081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57593.03201324717,
            "unit": "ns/iter",
            "extra": "iterations: 14494\ncpu: 57590.754795087756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 595419.4849999794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595397.8999999948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 505802.8400000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505795.3000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 617093.7137882746,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 617074.1643454003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 507462.8719999623,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507462.0000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 371349.8943572469,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 371336.7416207039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 638686.9814285693,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 638650.4285714269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 578.7404283960242,
            "unit": "ns/iter",
            "extra": "iterations: 1200478\ncpu: 578.7076481201659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5350.445010000158,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5350.437999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10135.759570173188,
            "unit": "ns/iter",
            "extra": "iterations: 81242\ncpu: 10134.946210088418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15595.824260027854,
            "unit": "ns/iter",
            "extra": "iterations: 56117\ncpu: 15595.283069301633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20269.082577066554,
            "unit": "ns/iter",
            "extra": "iterations: 41101\ncpu: 20267.718546994063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27252.91188794054,
            "unit": "ns/iter",
            "extra": "iterations: 32697\ncpu: 27252.55833868534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30987.568221006724,
            "unit": "ns/iter",
            "extra": "iterations: 27257\ncpu: 30986.550243974187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35415.219058238814,
            "unit": "ns/iter",
            "extra": "iterations: 23318\ncpu: 35414.812591131136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40193.29059293984,
            "unit": "ns/iter",
            "extra": "iterations: 20761\ncpu: 40192.49554453068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 551.0236311086113,
            "unit": "ns/iter",
            "extra": "iterations: 1277384\ncpu: 551.0168437995153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 418.9491359378709,
            "unit": "ns/iter",
            "extra": "iterations: 1666894\ncpu: 418.92645843107135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 426.1370848961465,
            "unit": "ns/iter",
            "extra": "iterations: 1641005\ncpu: 426.1107065487289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 423.61460335417956,
            "unit": "ns/iter",
            "extra": "iterations: 1654524\ncpu: 423.606910507194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 887.567085103575,
            "unit": "ns/iter",
            "extra": "iterations: 788968\ncpu: 887.5319404589263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2302.6137506216232,
            "unit": "ns/iter",
            "extra": "iterations: 347897\ncpu: 2302.5803614288193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8616.004651362084,
            "unit": "ns/iter",
            "extra": "iterations: 93521\ncpu: 8615.82425337615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8893.94690955598,
            "unit": "ns/iter",
            "extra": "iterations: 92333\ncpu: 8893.790952313973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9066.850067670555,
            "unit": "ns/iter",
            "extra": "iterations: 90881\ncpu: 9066.733420626937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8377.251528116998,
            "unit": "ns/iter",
            "extra": "iterations: 98160\ncpu: 8377.015077424592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31077.048071325822,
            "unit": "ns/iter",
            "extra": "iterations: 27480\ncpu: 31076.37554585179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262005.52194067216,
            "unit": "ns/iter",
            "extra": "iterations: 3236\ncpu: 262000.8961681073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 206687.97005702864,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 206679.30133079668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 206377.31143667447,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 206371.97542532903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210207.29494712726,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 210200.51703877773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106695.72469390143,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 106692.69002303395 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "85d3fc64843f115b47e5a722ba83cd4466299644",
          "message": "Simple Inheritance V1",
          "timestamp": "2023-12-11T18:41:15+03:00",
          "tree_id": "8007add2e1aa04b15f12fdb3fdfca620b2eec68e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/85d3fc64843f115b47e5a722ba83cd4466299644"
        },
        "date": 1702309464362,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1604.5695532612606,
            "unit": "ns/iter",
            "extra": "iterations: 433833\ncpu: 1604.5432228530333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 23802.626539900262,
            "unit": "ns/iter",
            "extra": "iterations: 34499\ncpu: 23802.124699266646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49332.322801282775,
            "unit": "ns/iter",
            "extra": "iterations: 16521\ncpu: 49332.00169481267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 61780.49279999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61778.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92190.18787936188,
            "unit": "ns/iter",
            "extra": "iterations: 10544\ncpu: 92168.03869499237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 112770.25107547992,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 112763.39460305039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 133754.87302080178,
            "unit": "ns/iter",
            "extra": "iterations: 6442\ncpu: 133747.26792921452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 159656.75184584945,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 159646.64145506918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 173091.4698963331,
            "unit": "ns/iter",
            "extra": "iterations: 5016\ncpu: 173089.91228070174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1361.3951458476618,
            "unit": "ns/iter",
            "extra": "iterations: 515435\ncpu: 1361.3633144819419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1122.1521230245853,
            "unit": "ns/iter",
            "extra": "iterations: 627972\ncpu: 1122.1369742599989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1106.7894146365363,
            "unit": "ns/iter",
            "extra": "iterations: 633743\ncpu: 1106.7697789166893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1089.10294474473,
            "unit": "ns/iter",
            "extra": "iterations: 638799\ncpu: 1089.0558689039901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2173.9813618204885,
            "unit": "ns/iter",
            "extra": "iterations: 318647\ncpu: 2173.9724522747756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6940.952469405556,
            "unit": "ns/iter",
            "extra": "iterations: 118976\ncpu: 6940.746873318991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31700.415184652225,
            "unit": "ns/iter",
            "extra": "iterations: 25697\ncpu: 31700.237381795527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 28869.222967075635,
            "unit": "ns/iter",
            "extra": "iterations: 28641\ncpu: 28868.209908871835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30077.46730462596,
            "unit": "ns/iter",
            "extra": "iterations: 27588\ncpu: 30077.33797303173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29720.549549234776,
            "unit": "ns/iter",
            "extra": "iterations: 28618\ncpu: 29719.526172339105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 75638.74243201515,
            "unit": "ns/iter",
            "extra": "iterations: 11694\ncpu: 75634.46211732515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 799543.6410912325,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 799490.8780903666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 651959.5000000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651904.7000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 650352.1460000173,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650282.9000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 646455.4339999893,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646438.7999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 461246.2896406026,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 461235.09513742145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 922.9280737901993,
            "unit": "ns/iter",
            "extra": "iterations: 758583\ncpu: 922.9156203078652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18272.390449808863,
            "unit": "ns/iter",
            "extra": "iterations: 45486\ncpu: 18272.061733280607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39013.14552619437,
            "unit": "ns/iter",
            "extra": "iterations: 21570\ncpu: 39012.582290217826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 58455.76490524336,
            "unit": "ns/iter",
            "extra": "iterations: 14458\ncpu: 58451.756812837135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 64516.8339762611,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 64512.16617210669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 81161.92911930398,
            "unit": "ns/iter",
            "extra": "iterations: 10821\ncpu: 81155.161260512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 96867.46648137967,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 96861.78988326836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 112726.69399119541,
            "unit": "ns/iter",
            "extra": "iterations: 7722\ncpu: 112715.44936544975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 128752.31913325265,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 128743.77948113198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 758.9313524290101,
            "unit": "ns/iter",
            "extra": "iterations: 922407\ncpu: 757.1550302632082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 626.2361662963261,
            "unit": "ns/iter",
            "extra": "iterations: 1116946\ncpu: 626.2223061813163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 625.5676058711547,
            "unit": "ns/iter",
            "extra": "iterations: 1115554\ncpu: 625.5456033504448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 621.273580077101,
            "unit": "ns/iter",
            "extra": "iterations: 1125378\ncpu: 621.2173154264628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1210.0822776715809,
            "unit": "ns/iter",
            "extra": "iterations: 578626\ncpu: 1209.993156201069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5393.5483838247155,
            "unit": "ns/iter",
            "extra": "iterations: 147880\ncpu: 5393.22288341898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22500.66168224269,
            "unit": "ns/iter",
            "extra": "iterations: 36915\ncpu: 22499.469050521424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18792.147188209183,
            "unit": "ns/iter",
            "extra": "iterations: 44100\ncpu: 18790.659863945453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20260.939241876153,
            "unit": "ns/iter",
            "extra": "iterations: 40653\ncpu: 20260.03984945769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19186.388469665293,
            "unit": "ns/iter",
            "extra": "iterations: 43069\ncpu: 19185.184239243936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57407.405720555835,
            "unit": "ns/iter",
            "extra": "iterations: 14579\ncpu: 57405.23355511348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 575075.2149999982,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575044.6000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 602016.0090529302,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 601999.1643454034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610155.3677192921,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 610130.245614032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 602102.260990963,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 602073.482205163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 355029.7550020392,
            "unit": "ns/iter",
            "extra": "iterations: 2449\ncpu: 355020.7023274806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 608920.5860139866,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 608897.622377621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 585.8272787806477,
            "unit": "ns/iter",
            "extra": "iterations: 1204438\ncpu: 585.7874793056988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5279.647550000277,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5279.491000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9994.053053843007,
            "unit": "ns/iter",
            "extra": "iterations: 82388\ncpu: 9993.98213332038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15249.355122364672,
            "unit": "ns/iter",
            "extra": "iterations: 56634\ncpu: 15249.138326800172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20453.245213513557,
            "unit": "ns/iter",
            "extra": "iterations: 41262\ncpu: 20452.90097426205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25484.398839011723,
            "unit": "ns/iter",
            "extra": "iterations: 32903\ncpu: 25483.791751512083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30442.948111836406,
            "unit": "ns/iter",
            "extra": "iterations: 27540\ncpu: 30442.748729121275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35228.505409649675,
            "unit": "ns/iter",
            "extra": "iterations: 23569\ncpu: 35228.0071280071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40282.86182268529,
            "unit": "ns/iter",
            "extra": "iterations: 21002\ncpu: 40281.71602704502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 549.0900436996601,
            "unit": "ns/iter",
            "extra": "iterations: 1276669\ncpu: 549.0873515374814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 418.8520169368907,
            "unit": "ns/iter",
            "extra": "iterations: 1676577\ncpu: 418.84172334464904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 411.72431019224433,
            "unit": "ns/iter",
            "extra": "iterations: 1701706\ncpu: 411.7216487454364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.29455201460615,
            "unit": "ns/iter",
            "extra": "iterations: 1694553\ncpu: 412.2809968174518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 883.7519301476894,
            "unit": "ns/iter",
            "extra": "iterations: 787375\ncpu: 883.7478964915084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2476.2099857230965,
            "unit": "ns/iter",
            "extra": "iterations: 324303\ncpu: 2476.152548696735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8905.49202499583,
            "unit": "ns/iter",
            "extra": "iterations: 91536\ncpu: 8905.447037231224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8985.286289435453,
            "unit": "ns/iter",
            "extra": "iterations: 90908\ncpu: 8985.055220662658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9059.407611444767,
            "unit": "ns/iter",
            "extra": "iterations: 90942\ncpu: 9059.29603483537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8574.265861819445,
            "unit": "ns/iter",
            "extra": "iterations: 95339\ncpu: 8574.214120139759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30375.546164718875,
            "unit": "ns/iter",
            "extra": "iterations: 26882\ncpu: 30375.355256305444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262044.69577204832,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 262035.20220587985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 202899.5640428521,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 202896.48346529863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202801.60837381883,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 202794.610224381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 202460.7309656471,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 202457.6369545055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105915.00903149242,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 105911.34878193706 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "825d4b8b89216ec0a9dcc887895418d7e677e406",
          "message": "set(CMAKE_VERBOSE_MAKEFILE OFF)",
          "timestamp": "2023-12-11T18:58:08+03:00",
          "tree_id": "455cf7a424831f799b54c049bdff16a090b6030a",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/825d4b8b89216ec0a9dcc887895418d7e677e406"
        },
        "date": 1702310522462,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1618.1572780377237,
            "unit": "ns/iter",
            "extra": "iterations: 407603\ncpu: 1618.120818541571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 23789.35819345934,
            "unit": "ns/iter",
            "extra": "iterations: 34674\ncpu: 23788.59664301782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 48860.71895539822,
            "unit": "ns/iter",
            "extra": "iterations: 17040\ncpu: 48860.32276995307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 61249.0992000005,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61247.76000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90397.73988654182,
            "unit": "ns/iter",
            "extra": "iterations: 10753\ncpu: 90394.34576397283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 112214.26657135285,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 112210.96958669084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 134455.96031007788,
            "unit": "ns/iter",
            "extra": "iterations: 6450\ncpu: 134450.18604651163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 155358.72686433178,
            "unit": "ns/iter",
            "extra": "iterations: 5565\ncpu: 155354.1958670259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 171802.66640300557,
            "unit": "ns/iter",
            "extra": "iterations: 5057\ncpu: 171799.169468064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1544.4317695256016,
            "unit": "ns/iter",
            "extra": "iterations: 454020\ncpu: 1544.3982643936395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1381.7553371497288,
            "unit": "ns/iter",
            "extra": "iterations: 505888\ncpu: 1381.734099247263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1422.3670718267965,
            "unit": "ns/iter",
            "extra": "iterations: 491822\ncpu: 1422.3399929242692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1292.3692228922262,
            "unit": "ns/iter",
            "extra": "iterations: 542962\ncpu: 1292.3339018200193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2418.965039033162,
            "unit": "ns/iter",
            "extra": "iterations: 287063\ncpu: 2418.919540309964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6974.926173588926,
            "unit": "ns/iter",
            "extra": "iterations: 118291\ncpu: 6974.724197107126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32164.139471106006,
            "unit": "ns/iter",
            "extra": "iterations: 25525\ncpu: 32163.60822722825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 28841.837285049278,
            "unit": "ns/iter",
            "extra": "iterations: 28553\ncpu: 28840.29699155957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29413.729895291857,
            "unit": "ns/iter",
            "extra": "iterations: 28078\ncpu: 29412.31925350807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28744.36821571608,
            "unit": "ns/iter",
            "extra": "iterations: 28964\ncpu: 28743.31238779173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 75498.59551906884,
            "unit": "ns/iter",
            "extra": "iterations: 11694\ncpu: 75495.07439712687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 784306.7836010257,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 784272.0202874078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 640502.4759999947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640472.899999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 645422.9750000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645408.4999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 647943.2559999907,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647893.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 459355.33141961787,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 459339.82254697196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 926.6267592520503,
            "unit": "ns/iter",
            "extra": "iterations: 757211\ncpu: 926.566703336323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18224.064978119477,
            "unit": "ns/iter",
            "extra": "iterations: 45246\ncpu: 18223.107014984813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 38738.98058072227,
            "unit": "ns/iter",
            "extra": "iterations: 21525\ncpu: 38738.32752613238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 58596.832426781664,
            "unit": "ns/iter",
            "extra": "iterations: 14340\ncpu: 58594.47698744775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 64733.04011312137,
            "unit": "ns/iter",
            "extra": "iterations: 13437\ncpu: 64729.03922006409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 81295.96665742657,
            "unit": "ns/iter",
            "extra": "iterations: 10827\ncpu: 81292.02918629358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 97277.8875627392,
            "unit": "ns/iter",
            "extra": "iterations: 8965\ncpu: 97273.89849414388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 113127.3570134605,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 113123.93892339556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 129372.39614529129,
            "unit": "ns/iter",
            "extra": "iterations: 6745\ncpu: 129370.86730911731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 775.4346391483717,
            "unit": "ns/iter",
            "extra": "iterations: 903446\ncpu: 775.4098197346603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 649.7616502342341,
            "unit": "ns/iter",
            "extra": "iterations: 1072575\ncpu: 649.7503671072005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 659.1665288618282,
            "unit": "ns/iter",
            "extra": "iterations: 1061888\ncpu: 659.1464448228077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 638.3380622850135,
            "unit": "ns/iter",
            "extra": "iterations: 1093618\ncpu: 638.306703071821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1233.5156692806738,
            "unit": "ns/iter",
            "extra": "iterations: 569873\ncpu: 1233.456401689501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5106.552911825296,
            "unit": "ns/iter",
            "extra": "iterations: 156723\ncpu: 5106.449595783639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23447.753746948998,
            "unit": "ns/iter",
            "extra": "iterations: 34428\ncpu: 23447.150575113188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19660.599781171113,
            "unit": "ns/iter",
            "extra": "iterations: 42042\ncpu: 19659.69506683784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20491.70195020573,
            "unit": "ns/iter",
            "extra": "iterations: 40406\ncpu: 20491.139929713558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19891.550613830135,
            "unit": "ns/iter",
            "extra": "iterations: 41461\ncpu: 19891.039772316315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57667.108098833036,
            "unit": "ns/iter",
            "extra": "iterations: 14570\ncpu: 57665.758407686604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 582594.6090000116,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582564.099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 605253.136746142,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 605221.2482468431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610114.8463157937,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 610079.5087719322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 604180.9641602302,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 604157.3436402001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 354545.79991916375,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 354527.20291026763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 610998.8782185244,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 610950.9394572005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 581.8821691953461,
            "unit": "ns/iter",
            "extra": "iterations: 1211712\ncpu: 581.8834838641551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5301.127019999967,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5300.8880000000145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10164.740417063002,
            "unit": "ns/iter",
            "extra": "iterations: 80899\ncpu: 10164.444554320813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15560.162396664702,
            "unit": "ns/iter",
            "extra": "iterations: 56128\ncpu: 15559.742018244044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20437.508963675176,
            "unit": "ns/iter",
            "extra": "iterations: 40441\ncpu: 20436.655869043712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25474.111107705066,
            "unit": "ns/iter",
            "extra": "iterations: 32608\ncpu: 25472.755152109745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30678.082413133827,
            "unit": "ns/iter",
            "extra": "iterations: 27168\ncpu: 30674.889575971516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35882.96690955903,
            "unit": "ns/iter",
            "extra": "iterations: 23330\ncpu: 35881.45306472367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40235.03950033547,
            "unit": "ns/iter",
            "extra": "iterations: 20734\ncpu: 40234.14198900342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 541.0458734869151,
            "unit": "ns/iter",
            "extra": "iterations: 1285274\ncpu: 541.0394981926065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 410.27504810676817,
            "unit": "ns/iter",
            "extra": "iterations: 1703502\ncpu: 410.2635629426921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 406.9040379920074,
            "unit": "ns/iter",
            "extra": "iterations: 1714887\ncpu: 406.89777227303904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 410.28231215561345,
            "unit": "ns/iter",
            "extra": "iterations: 1710525\ncpu: 410.26287250990225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 908.7863687100266,
            "unit": "ns/iter",
            "extra": "iterations: 787497\ncpu: 908.7875890320788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2475.66766758424,
            "unit": "ns/iter",
            "extra": "iterations: 323703\ncpu: 2475.5501184728064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8070.435216343915,
            "unit": "ns/iter",
            "extra": "iterations: 100442\ncpu: 8070.3181935843795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9063.961803978304,
            "unit": "ns/iter",
            "extra": "iterations: 90245\ncpu: 9063.80519696382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8732.034418916757,
            "unit": "ns/iter",
            "extra": "iterations: 92362\ncpu: 8731.80528788885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8548.108733389965,
            "unit": "ns/iter",
            "extra": "iterations: 95049\ncpu: 8547.876358509739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30032.324572881895,
            "unit": "ns/iter",
            "extra": "iterations: 27510\ncpu: 30031.043256997546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259794.6330558095,
            "unit": "ns/iter",
            "extra": "iterations: 3243\ncpu: 259786.95652173745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 204372.59924917502,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 204361.66119192846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 203284.89709330708,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 203278.5278949817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201984.8486185301,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 201981.17018806475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102540.68721487708,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 102538.26178500312 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "2f550c1607320f8cf14031a2e95845f60ee8b88b",
          "message": "Upd",
          "timestamp": "2023-12-11T19:02:05+03:00",
          "tree_id": "337d408608d901b7b5b76fdd59c6fa5b12dc6c2e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2f550c1607320f8cf14031a2e95845f60ee8b88b"
        },
        "date": 1702310714944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1697.4248124957126,
            "unit": "ns/iter",
            "extra": "iterations: 435990\ncpu: 1697.3632422761993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24441.24258559591,
            "unit": "ns/iter",
            "extra": "iterations: 33617\ncpu: 24440.101734241605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49848.73134773891,
            "unit": "ns/iter",
            "extra": "iterations: 16754\ncpu: 49848.668974573244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62344.043999999594,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62343.91000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92061.4778451038,
            "unit": "ns/iter",
            "extra": "iterations: 10562\ncpu: 92058.64419617494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113614.89965535306,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 113611.90349946974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 135789.47143763799,
            "unit": "ns/iter",
            "extra": "iterations: 6302\ncpu: 135786.70263408447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 157652.64348142463,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 157649.49016751637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 173224.39851286262,
            "unit": "ns/iter",
            "extra": "iterations: 4976\ncpu: 173213.54501607714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1356.9352780646118,
            "unit": "ns/iter",
            "extra": "iterations: 515204\ncpu: 1356.9027026187698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1130.7551492352209,
            "unit": "ns/iter",
            "extra": "iterations: 620966\ncpu: 1130.7588499209296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1105.9726108867162,
            "unit": "ns/iter",
            "extra": "iterations: 635581\ncpu: 1105.940863556338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1110.6920740782186,
            "unit": "ns/iter",
            "extra": "iterations: 628255\ncpu: 1110.6366045634338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2183.502521531847,
            "unit": "ns/iter",
            "extra": "iterations: 321035\ncpu: 2183.3946454436414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6944.518855077307,
            "unit": "ns/iter",
            "extra": "iterations: 118960\ncpu: 6944.05934767989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34577.86593432583,
            "unit": "ns/iter",
            "extra": "iterations: 25398\ncpu: 34576.73832585244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29208.14359050037,
            "unit": "ns/iter",
            "extra": "iterations: 27077\ncpu: 29207.6817963585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29522.583183679195,
            "unit": "ns/iter",
            "extra": "iterations: 27842\ncpu: 29523.029954744583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28835.07000912898,
            "unit": "ns/iter",
            "extra": "iterations: 28482\ncpu: 28835.127448915147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 75439.2455583211,
            "unit": "ns/iter",
            "extra": "iterations: 11651\ncpu: 75330.12616942747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 785008.7606338513,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 785002.5020850732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 653002.3980000124,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653000.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 655868.102999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655853.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 641422.0080000063,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641405.5999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 461669.70078328106,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 461663.60313315986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 932.0642263868441,
            "unit": "ns/iter",
            "extra": "iterations: 755733\ncpu: 932.0517960708331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18267.4315533442,
            "unit": "ns/iter",
            "extra": "iterations: 45225\ncpu: 18267.500276395796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39843.252870857366,
            "unit": "ns/iter",
            "extra": "iterations: 21248\ncpu: 39841.73569277106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 59676.10983315528,
            "unit": "ns/iter",
            "extra": "iterations: 14085\ncpu: 59673.801916933095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66380.57549571773,
            "unit": "ns/iter",
            "extra": "iterations: 12961\ncpu: 66374.1455134633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83247.33355462718,
            "unit": "ns/iter",
            "extra": "iterations: 10544\ncpu: 83241.10394537183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99446.05984072828,
            "unit": "ns/iter",
            "extra": "iterations: 8790\ncpu: 99438.14562002287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115646.67053089124,
            "unit": "ns/iter",
            "extra": "iterations: 7591\ncpu: 115640.16598603645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 131090.2616681686,
            "unit": "ns/iter",
            "extra": "iterations: 6642\ncpu: 131084.6281240589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 754.0721856485261,
            "unit": "ns/iter",
            "extra": "iterations: 929326\ncpu: 754.0232383469279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 641.5031802120291,
            "unit": "ns/iter",
            "extra": "iterations: 1079645\ncpu: 641.49984485641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 633.0838987270264,
            "unit": "ns/iter",
            "extra": "iterations: 1094665\ncpu: 633.0350381166844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 627.0591624624745,
            "unit": "ns/iter",
            "extra": "iterations: 1107628\ncpu: 627.0312776491703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1224.8399806648865,
            "unit": "ns/iter",
            "extra": "iterations: 570981\ncpu: 1224.7717524751301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5381.356479395319,
            "unit": "ns/iter",
            "extra": "iterations: 148679\ncpu: 5381.147303923227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23388.496115270234,
            "unit": "ns/iter",
            "extra": "iterations: 35395\ncpu: 23387.142251730587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19634.267078393343,
            "unit": "ns/iter",
            "extra": "iterations: 42261\ncpu: 19633.61728307424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20492.850337267468,
            "unit": "ns/iter",
            "extra": "iterations: 40324\ncpu: 20491.99484178158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19659.7710802651,
            "unit": "ns/iter",
            "extra": "iterations: 41425\ncpu: 19658.751961375867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57427.263476347456,
            "unit": "ns/iter",
            "extra": "iterations: 14544\ncpu: 57426.36826182619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 585138.2459999855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585121.099999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 604176.4941013228,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 604168.0083275477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 598889.669461924,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 598886.7225716294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 598038.1484320624,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 598038.5365853675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 357456.96861167386,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 357451.06639838766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 604045.1019690646,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 604020.3234880429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 594.033894679983,
            "unit": "ns/iter",
            "extra": "iterations: 1192252\ncpu: 594.0124235480374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5358.202150000011,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5358.2380000000285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10365.563084054023,
            "unit": "ns/iter",
            "extra": "iterations: 80258\ncpu: 10365.061426898188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16004.426685388264,
            "unit": "ns/iter",
            "extra": "iterations: 54839\ncpu: 16003.652510074831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20672.72210173493,
            "unit": "ns/iter",
            "extra": "iterations: 40576\ncpu: 20671.732058359576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26322.21366968548,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 26321.419330992518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31381.235972330163,
            "unit": "ns/iter",
            "extra": "iterations: 27321\ncpu: 31380.535119505294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36343.26134413206,
            "unit": "ns/iter",
            "extra": "iterations: 22721\ncpu: 36341.7059108312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40993.06294875494,
            "unit": "ns/iter",
            "extra": "iterations: 20334\ncpu: 40991.91501917963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 546.615768760841,
            "unit": "ns/iter",
            "extra": "iterations: 1273556\ncpu: 546.6153824409745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 414.1354649463686,
            "unit": "ns/iter",
            "extra": "iterations: 1690238\ncpu: 414.12375061973216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 410.101528860281,
            "unit": "ns/iter",
            "extra": "iterations: 1697212\ncpu: 410.1076353454954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 413.30987764461105,
            "unit": "ns/iter",
            "extra": "iterations: 1690322\ncpu: 413.30308663083133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 896.1959155518992,
            "unit": "ns/iter",
            "extra": "iterations: 784292\ncpu: 896.2095750052231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2457.259498060761,
            "unit": "ns/iter",
            "extra": "iterations: 321513\ncpu: 2457.2116835089055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8641.145326219132,
            "unit": "ns/iter",
            "extra": "iterations: 94078\ncpu: 8640.540827823786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9156.978419669695,
            "unit": "ns/iter",
            "extra": "iterations: 89804\ncpu: 9156.611064095083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9054.115631171884,
            "unit": "ns/iter",
            "extra": "iterations: 90633\ncpu: 9054.033299129323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8563.238277964529,
            "unit": "ns/iter",
            "extra": "iterations: 95120\ncpu: 8563.289529016003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30496.432359368155,
            "unit": "ns/iter",
            "extra": "iterations: 27003\ncpu: 30495.885642335816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 267472.7092198526,
            "unit": "ns/iter",
            "extra": "iterations: 3243\ncpu: 267458.21769966127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 205534.23848492946,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 205528.40776244813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205735.28352579972,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 205725.66580249876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203992.74777518027,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 203984.19203746886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103828.20216049688,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 103823.0175688505 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}