window.BENCHMARK_DATA = {
  "lastUpdate": 1702244194023,
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
      }
    ]
  }
}