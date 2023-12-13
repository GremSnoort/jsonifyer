window.BENCHMARK_DATA = {
  "lastUpdate": 1702490834889,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-8 18.04 Release c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397918317,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1004.1161699676439,
            "unit": "ns/iter",
            "extra": "iterations: 697874\ncpu: 1004.1057554802157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20067.473111519423,
            "unit": "ns/iter",
            "extra": "iterations: 41356\ncpu: 20066.677144791563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45884.8623566731,
            "unit": "ns/iter",
            "extra": "iterations: 19536\ncpu: 45884.07555282555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56801.890499997404,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56802.250000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69811.42503248226,
            "unit": "ns/iter",
            "extra": "iterations: 11545\ncpu: 69811.0870506713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 86987.67589169892,
            "unit": "ns/iter",
            "extra": "iterations: 10009\ncpu: 86985.44310120893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 106402.52617112803,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 106401.24282982791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124415.22127001466,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 124406.72941837595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 154786.21657070066,
            "unit": "ns/iter",
            "extra": "iterations: 6252\ncpu: 154779.76647472815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 800.353489128286,
            "unit": "ns/iter",
            "extra": "iterations: 873413\ncpu: 800.3123379203194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 662.7915080993803,
            "unit": "ns/iter",
            "extra": "iterations: 1053969\ncpu: 662.7566844945156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 672.8685071121885,
            "unit": "ns/iter",
            "extra": "iterations: 1039060\ncpu: 672.8366985544613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 661.4555502544855,
            "unit": "ns/iter",
            "extra": "iterations: 1054303\ncpu: 661.3796982461408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1316.6460862147383,
            "unit": "ns/iter",
            "extra": "iterations: 528657\ncpu: 1316.5763434514272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6471.587415566829,
            "unit": "ns/iter",
            "extra": "iterations: 129096\ncpu: 6471.267119043188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35992.36235028489,
            "unit": "ns/iter",
            "extra": "iterations: 23044\ncpu: 35990.17965630971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 26326.425235886723,
            "unit": "ns/iter",
            "extra": "iterations: 31265\ncpu: 26324.63457540383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 26973.264984227644,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26971.774691859926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 26546.952376362893,
            "unit": "ns/iter",
            "extra": "iterations: 31119\ncpu: 26545.277804556787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 72963.2117866686,
            "unit": "ns/iter",
            "extra": "iterations: 12319\ncpu: 72959.89122493709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 637067.3630000283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637032.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 621394.5768136737,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 621375.0355618782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 500586.41900000116,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500545.4999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 521927.7450000277,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521546.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360471.47986717307,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 360470.5687007064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 609096.6617647166,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 609094.0476190485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2807893.2713864557,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2807821.533923304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1173283.5450061709,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 1173252.281134401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3553626.9699248453,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3553408.6466165413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6407.226362019938,
            "unit": "ns/iter",
            "extra": "iterations: 130468\ncpu: 6406.965692736938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37876.683640646545,
            "unit": "ns/iter",
            "extra": "iterations: 22073\ncpu: 37874.33516060349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27780.979650872323,
            "unit": "ns/iter",
            "extra": "iterations: 30075\ncpu: 27779.956774729766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26947.79288226103,
            "unit": "ns/iter",
            "extra": "iterations: 30712\ncpu: 26947.167231049716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27395.679351051782,
            "unit": "ns/iter",
            "extra": "iterations: 30326\ncpu: 27394.183209127514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 71427.69439908667,
            "unit": "ns/iter",
            "extra": "iterations: 12248\ncpu: 71426.19203135213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 616045.7149999843,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616030.5999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 515022.29700003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514969.00000000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 520799.9529999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520785.10000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 514881.0040000171,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514855.09999999835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 365082.01119401597,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 365056.5920398005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 505435.1009999891,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505410.4000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2925134.6823900016,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2924896.540880493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1277454.2403204383,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1277393.591455266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6316.601654404398,
            "unit": "ns/iter",
            "extra": "iterations: 131165\ncpu: 6316.1651355163685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37428.703774935,
            "unit": "ns/iter",
            "extra": "iterations: 22358\ncpu: 37427.51587798543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27560.443769397574,
            "unit": "ns/iter",
            "extra": "iterations: 30286\ncpu: 27558.81265271088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26960.903013364918,
            "unit": "ns/iter",
            "extra": "iterations: 31128\ncpu: 26960.24158314058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27028.98617630929,
            "unit": "ns/iter",
            "extra": "iterations: 30889\ncpu: 27027.048463854564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 71255.85790884355,
            "unit": "ns/iter",
            "extra": "iterations: 12309\ncpu: 71255.77219920378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 622191.2329999668,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622194.8999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 513644.9999999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513640.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 509789.74599996716,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509779.09999999584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 508762.5620000154,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508757.5999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 370918.44268445607,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 370914.08920383436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 507311.948999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507300.6999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 336.67801958173266,
            "unit": "ns/iter",
            "extra": "iterations: 2080611\ncpu: 336.6764858976552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3011.3639351746097,
            "unit": "ns/iter",
            "extra": "iterations: 240955\ncpu: 3011.379718204659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2186.21443429507,
            "unit": "ns/iter",
            "extra": "iterations: 320653\ncpu: 2186.1856898267106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2188.4487710855096,
            "unit": "ns/iter",
            "extra": "iterations: 317516\ncpu: 2188.4223157258284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1570.4593364643765,
            "unit": "ns/iter",
            "extra": "iterations: 445854\ncpu: 1570.467911020189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 14583.422051504524,
            "unit": "ns/iter",
            "extra": "iterations: 48423\ncpu: 14583.514032587875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33949.71788879044,
            "unit": "ns/iter",
            "extra": "iterations: 20538\ncpu: 33949.58126399852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7838.034057671103,
            "unit": "ns/iter",
            "extra": "iterations: 89231\ncpu: 7837.996884490811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7799.5294471156285,
            "unit": "ns/iter",
            "extra": "iterations: 89856\ncpu: 7799.430199430218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7736.901301674725,
            "unit": "ns/iter",
            "extra": "iterations: 89961\ncpu: 7736.749258011733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16564.955634168626,
            "unit": "ns/iter",
            "extra": "iterations: 44381\ncpu: 16564.451003807862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15053.227175034563,
            "unit": "ns/iter",
            "extra": "iterations: 46528\ncpu: 15051.95796079787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4349.924916560193,
            "unit": "ns/iter",
            "extra": "iterations: 161194\ncpu: 4349.741925878116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22917.424800714594,
            "unit": "ns/iter",
            "extra": "iterations: 30233\ncpu: 22916.62421856929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17743.493088026087,
            "unit": "ns/iter",
            "extra": "iterations: 39352\ncpu: 17743.62167107123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17840.23087296156,
            "unit": "ns/iter",
            "extra": "iterations: 39303\ncpu: 17839.951148767293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19265.43371816949,
            "unit": "ns/iter",
            "extra": "iterations: 36639\ncpu: 19265.38933922864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 39022.12887748375,
            "unit": "ns/iter",
            "extra": "iterations: 17924\ncpu: 39021.898013836784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 151640.3205627687,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 151641.27705627974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131399.1625468202,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 131398.78277153714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 131110.17312758695,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 131109.57847196193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134744.70838933132,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 134740.83317335343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80958.32451478456,
            "unit": "ns/iter",
            "extra": "iterations: 8656\ncpu: 80956.88539741299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 131434.67618503905,
            "unit": "ns/iter",
            "extra": "iterations: 5253\ncpu: 131432.45764325245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4174.904880616676,
            "unit": "ns/iter",
            "extra": "iterations: 165266\ncpu: 4174.764924424825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22059.289376138295,
            "unit": "ns/iter",
            "extra": "iterations: 31834\ncpu: 22059.445875478854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17618.35670899986,
            "unit": "ns/iter",
            "extra": "iterations: 39842\ncpu: 17618.455398825346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17528.624407136744,
            "unit": "ns/iter",
            "extra": "iterations: 39849\ncpu: 17527.468694320993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18334.2020791881,
            "unit": "ns/iter",
            "extra": "iterations: 38188\ncpu: 18334.049963339417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37482.09247091529,
            "unit": "ns/iter",
            "extra": "iterations: 18568\ncpu: 37481.82895303756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 151486.02255965487,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 151487.15835141033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133611.3109919644,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 133610.30256606804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 133749.67512399846,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133750.78214421848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 133798.0210526343,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 133796.91866028836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79263.04995479537,
            "unit": "ns/iter",
            "extra": "iterations: 8848\ncpu: 79261.2680831823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 129946.98662207063,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 129947.8260869557 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397918317,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1004.1161699676439,
            "unit": "ns/iter",
            "extra": "iterations: 697874\ncpu: 1004.1057554802157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20067.473111519423,
            "unit": "ns/iter",
            "extra": "iterations: 41356\ncpu: 20066.677144791563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45884.8623566731,
            "unit": "ns/iter",
            "extra": "iterations: 19536\ncpu: 45884.07555282555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56801.890499997404,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56802.250000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69811.42503248226,
            "unit": "ns/iter",
            "extra": "iterations: 11545\ncpu: 69811.0870506713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 86987.67589169892,
            "unit": "ns/iter",
            "extra": "iterations: 10009\ncpu: 86985.44310120893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 106402.52617112803,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 106401.24282982791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124415.22127001466,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 124406.72941837595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 154786.21657070066,
            "unit": "ns/iter",
            "extra": "iterations: 6252\ncpu: 154779.76647472815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 800.353489128286,
            "unit": "ns/iter",
            "extra": "iterations: 873413\ncpu: 800.3123379203194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 662.7915080993803,
            "unit": "ns/iter",
            "extra": "iterations: 1053969\ncpu: 662.7566844945156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 672.8685071121885,
            "unit": "ns/iter",
            "extra": "iterations: 1039060\ncpu: 672.8366985544613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 661.4555502544855,
            "unit": "ns/iter",
            "extra": "iterations: 1054303\ncpu: 661.3796982461408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1316.6460862147383,
            "unit": "ns/iter",
            "extra": "iterations: 528657\ncpu: 1316.5763434514272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6471.587415566829,
            "unit": "ns/iter",
            "extra": "iterations: 129096\ncpu: 6471.267119043188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35992.36235028489,
            "unit": "ns/iter",
            "extra": "iterations: 23044\ncpu: 35990.17965630971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 26326.425235886723,
            "unit": "ns/iter",
            "extra": "iterations: 31265\ncpu: 26324.63457540383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 26973.264984227644,
            "unit": "ns/iter",
            "extra": "iterations: 30749\ncpu: 26971.774691859926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 26546.952376362893,
            "unit": "ns/iter",
            "extra": "iterations: 31119\ncpu: 26545.277804556787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 72963.2117866686,
            "unit": "ns/iter",
            "extra": "iterations: 12319\ncpu: 72959.89122493709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 637067.3630000283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637032.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 621394.5768136737,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 621375.0355618782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 500586.41900000116,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500545.4999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 521927.7450000277,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521546.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360471.47986717307,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 360470.5687007064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 609096.6617647166,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 609094.0476190485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2807893.2713864557,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2807821.533923304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1173283.5450061709,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 1173252.281134401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3553626.9699248453,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3553408.6466165413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6407.226362019938,
            "unit": "ns/iter",
            "extra": "iterations: 130468\ncpu: 6406.965692736938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 37876.683640646545,
            "unit": "ns/iter",
            "extra": "iterations: 22073\ncpu: 37874.33516060349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 27780.979650872323,
            "unit": "ns/iter",
            "extra": "iterations: 30075\ncpu: 27779.956774729766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26947.79288226103,
            "unit": "ns/iter",
            "extra": "iterations: 30712\ncpu: 26947.167231049716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27395.679351051782,
            "unit": "ns/iter",
            "extra": "iterations: 30326\ncpu: 27394.183209127514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 71427.69439908667,
            "unit": "ns/iter",
            "extra": "iterations: 12248\ncpu: 71426.19203135213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 616045.7149999843,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616030.5999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 515022.29700003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514969.00000000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 520799.9529999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520785.10000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 514881.0040000171,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514855.09999999835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 365082.01119401597,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 365056.5920398005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 505435.1009999891,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505410.4000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2925134.6823900016,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2924896.540880493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1277454.2403204383,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1277393.591455266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6316.601654404398,
            "unit": "ns/iter",
            "extra": "iterations: 131165\ncpu: 6316.1651355163685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37428.703774935,
            "unit": "ns/iter",
            "extra": "iterations: 22358\ncpu: 37427.51587798543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 27560.443769397574,
            "unit": "ns/iter",
            "extra": "iterations: 30286\ncpu: 27558.81265271088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26960.903013364918,
            "unit": "ns/iter",
            "extra": "iterations: 31128\ncpu: 26960.24158314058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27028.98617630929,
            "unit": "ns/iter",
            "extra": "iterations: 30889\ncpu: 27027.048463854564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 71255.85790884355,
            "unit": "ns/iter",
            "extra": "iterations: 12309\ncpu: 71255.77219920378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 622191.2329999668,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622194.8999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 513644.9999999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513640.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 509789.74599996716,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509779.09999999584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 508762.5620000154,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508757.5999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 370918.44268445607,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 370914.08920383436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 507311.948999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507300.6999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 336.67801958173266,
            "unit": "ns/iter",
            "extra": "iterations: 2080611\ncpu: 336.6764858976552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3011.3639351746097,
            "unit": "ns/iter",
            "extra": "iterations: 240955\ncpu: 3011.379718204659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2186.21443429507,
            "unit": "ns/iter",
            "extra": "iterations: 320653\ncpu: 2186.1856898267106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2188.4487710855096,
            "unit": "ns/iter",
            "extra": "iterations: 317516\ncpu: 2188.4223157258284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1570.4593364643765,
            "unit": "ns/iter",
            "extra": "iterations: 445854\ncpu: 1570.467911020189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 14583.422051504524,
            "unit": "ns/iter",
            "extra": "iterations: 48423\ncpu: 14583.514032587875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33949.71788879044,
            "unit": "ns/iter",
            "extra": "iterations: 20538\ncpu: 33949.58126399852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7838.034057671103,
            "unit": "ns/iter",
            "extra": "iterations: 89231\ncpu: 7837.996884490811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7799.5294471156285,
            "unit": "ns/iter",
            "extra": "iterations: 89856\ncpu: 7799.430199430218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7736.901301674725,
            "unit": "ns/iter",
            "extra": "iterations: 89961\ncpu: 7736.749258011733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16564.955634168626,
            "unit": "ns/iter",
            "extra": "iterations: 44381\ncpu: 16564.451003807862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15053.227175034563,
            "unit": "ns/iter",
            "extra": "iterations: 46528\ncpu: 15051.95796079787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4349.924916560193,
            "unit": "ns/iter",
            "extra": "iterations: 161194\ncpu: 4349.741925878116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22917.424800714594,
            "unit": "ns/iter",
            "extra": "iterations: 30233\ncpu: 22916.62421856929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17743.493088026087,
            "unit": "ns/iter",
            "extra": "iterations: 39352\ncpu: 17743.62167107123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17840.23087296156,
            "unit": "ns/iter",
            "extra": "iterations: 39303\ncpu: 17839.951148767293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 19265.43371816949,
            "unit": "ns/iter",
            "extra": "iterations: 36639\ncpu: 19265.38933922864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 39022.12887748375,
            "unit": "ns/iter",
            "extra": "iterations: 17924\ncpu: 39021.898013836784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 151640.3205627687,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 151641.27705627974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131399.1625468202,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 131398.78277153714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 131110.17312758695,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 131109.57847196193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134744.70838933132,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 134740.83317335343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80958.32451478456,
            "unit": "ns/iter",
            "extra": "iterations: 8656\ncpu: 80956.88539741299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 131434.67618503905,
            "unit": "ns/iter",
            "extra": "iterations: 5253\ncpu: 131432.45764325245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4174.904880616676,
            "unit": "ns/iter",
            "extra": "iterations: 165266\ncpu: 4174.764924424825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22059.289376138295,
            "unit": "ns/iter",
            "extra": "iterations: 31834\ncpu: 22059.445875478854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17618.35670899986,
            "unit": "ns/iter",
            "extra": "iterations: 39842\ncpu: 17618.455398825346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17528.624407136744,
            "unit": "ns/iter",
            "extra": "iterations: 39849\ncpu: 17527.468694320993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18334.2020791881,
            "unit": "ns/iter",
            "extra": "iterations: 38188\ncpu: 18334.049963339417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37482.09247091529,
            "unit": "ns/iter",
            "extra": "iterations: 18568\ncpu: 37481.82895303756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 151486.02255965487,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 151487.15835141033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133611.3109919644,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 133610.30256606804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 133749.67512399846,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133750.78214421848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 133798.0210526343,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 133796.91866028836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79263.04995479537,
            "unit": "ns/iter",
            "extra": "iterations: 8848\ncpu: 79261.2680831823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 129946.98662207063,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 129947.8260869557 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409126119,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 914.0295742551253,
            "unit": "ns/iter",
            "extra": "iterations: 765294\ncpu: 913.9588184410175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18466.006310410357,
            "unit": "ns/iter",
            "extra": "iterations: 45005\ncpu: 18465.066103766247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42287.78442688663,
            "unit": "ns/iter",
            "extra": "iterations: 21139\ncpu: 42285.12701641515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53005.49010000282,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53002.89 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 64936.573106001844,
            "unit": "ns/iter",
            "extra": "iterations: 12434\ncpu: 64934.976676853796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 81125.37047328122,
            "unit": "ns/iter",
            "extra": "iterations: 10797\ncpu: 81120.41307770678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 97607.71118530836,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 97603.1274346132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124801.9578125037,
            "unit": "ns/iter",
            "extra": "iterations: 7680\ncpu: 124794.6614583333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 141898.61917225792,
            "unit": "ns/iter",
            "extra": "iterations: 6113\ncpu: 141893.8328153117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 742.3434644558846,
            "unit": "ns/iter",
            "extra": "iterations: 943265\ncpu: 742.3040184889711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 610.7223696360276,
            "unit": "ns/iter",
            "extra": "iterations: 1147940\ncpu: 610.7026499642842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 598.8423837954521,
            "unit": "ns/iter",
            "extra": "iterations: 1164563\ncpu: 598.8093387820152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 589.4628149250497,
            "unit": "ns/iter",
            "extra": "iterations: 1188259\ncpu: 589.4351315664355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1228.5958143598375,
            "unit": "ns/iter",
            "extra": "iterations: 570092\ncpu: 1228.5552156494039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5635.384230000113,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5635.1219999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35894.47558304395,
            "unit": "ns/iter",
            "extra": "iterations: 23283\ncpu: 35893.643430829325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 24448.312160999954,
            "unit": "ns/iter",
            "extra": "iterations: 33739\ncpu: 24446.9871661875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 23909.65103468236,
            "unit": "ns/iter",
            "extra": "iterations: 34310\ncpu: 23908.464004663405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 24079.684567719083,
            "unit": "ns/iter",
            "extra": "iterations: 33890\ncpu: 24078.34169371486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 67985.69395291258,
            "unit": "ns/iter",
            "extra": "iterations: 12998\ncpu: 67983.45130019981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 550225.3630000383,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550187.3000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 577792.8375668438,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 577755.4812834226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 579578.3574297322,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 579548.0589022767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 578790.8949130172,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 578757.0281124499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 352455.7753682437,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 352441.9394435352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 577691.1192230444,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 577662.2906898863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2731162.7696793345,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2731048.396501454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1207449.9857697932,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1207385.8990944389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3465426.1143911146,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3465166.789667897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5582.325710000191,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5582.0680000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 38456.036023183166,
            "unit": "ns/iter",
            "extra": "iterations: 22430\ncpu: 38454.24877396343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 24792.52151550637,
            "unit": "ns/iter",
            "extra": "iterations: 33441\ncpu: 24791.322029843654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 24018.613235165296,
            "unit": "ns/iter",
            "extra": "iterations: 34499\ncpu: 24017.61500333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 23998.120508073633,
            "unit": "ns/iter",
            "extra": "iterations: 34562\ncpu: 23997.16740929338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 68382.86304948988,
            "unit": "ns/iter",
            "extra": "iterations: 13012\ncpu: 68379.73409160807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 601746.4010000139,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601724.7000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 613498.6596491312,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 613466.3859649131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 617802.6437189309,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 617786.657203688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 612174.0217849388,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 612146.5917076621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 357870.0211726363,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 357850.8957654703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 599494.7962051955,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 599475.6148981011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2802209.7379519036,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2802008.7349397573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1195304.936467558,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1195232.0203303664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5564.50223000013,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5564.504000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36525.99625038783,
            "unit": "ns/iter",
            "extra": "iterations: 22669\ncpu: 36526.022321231714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 25241.310102021154,
            "unit": "ns/iter",
            "extra": "iterations: 31954\ncpu: 25240.692871002193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 24425.580696988174,
            "unit": "ns/iter",
            "extra": "iterations: 34233\ncpu: 24425.104431396732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 24390.54082436364,
            "unit": "ns/iter",
            "extra": "iterations: 34281\ncpu: 24390.300749686532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 68347.90689628781,
            "unit": "ns/iter",
            "extra": "iterations: 13007\ncpu: 68347.49750134525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 610927.107000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610911.7000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 618949.4146685544,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 618930.1833568399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 624486.2076541294,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 624479.5180722905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 623519.7806955203,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 623502.2711142631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 368058.3438818529,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 368051.26582278765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 617869.2423378206,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 617861.5823235925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 340.76211362305935,
            "unit": "ns/iter",
            "extra": "iterations: 2057188\ncpu: 340.7513557341379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2636.338346852426,
            "unit": "ns/iter",
            "extra": "iterations: 266413\ncpu: 2636.3064114739227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1922.0580351984884,
            "unit": "ns/iter",
            "extra": "iterations: 363538\ncpu: 1922.0252078187218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1877.1499644995608,
            "unit": "ns/iter",
            "extra": "iterations: 373235\ncpu: 1877.127814915523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1440.5537741390788,
            "unit": "ns/iter",
            "extra": "iterations: 483448\ncpu: 1440.533418278704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 13849.746979852594,
            "unit": "ns/iter",
            "extra": "iterations: 50577\ncpu: 13849.24768175259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30809.284979559117,
            "unit": "ns/iter",
            "extra": "iterations: 22749\ncpu: 30808.65092971141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7207.848386465021,
            "unit": "ns/iter",
            "extra": "iterations: 97023\ncpu: 7207.483792502844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7260.722917210055,
            "unit": "ns/iter",
            "extra": "iterations: 95845\ncpu: 7260.536282539619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7347.219918792739,
            "unit": "ns/iter",
            "extra": "iterations: 95558\ncpu: 7346.795663366671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15119.742989645682,
            "unit": "ns/iter",
            "extra": "iterations: 46360\ncpu: 15118.589301121809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14256.007008537472,
            "unit": "ns/iter",
            "extra": "iterations: 49083\ncpu: 14255.520241224061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4048.7138900111227,
            "unit": "ns/iter",
            "extra": "iterations: 173290\ncpu: 4048.469040337039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22115.74094863937,
            "unit": "ns/iter",
            "extra": "iterations: 32067\ncpu: 22114.669286182045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 16701.849646845505,
            "unit": "ns/iter",
            "extra": "iterations: 41908\ncpu: 16701.321943304243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17017.395477339618,
            "unit": "ns/iter",
            "extra": "iterations: 41082\ncpu: 17016.854096684652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18208.315811604956,
            "unit": "ns/iter",
            "extra": "iterations: 38048\ncpu: 18207.803301093216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 35970.25873659405,
            "unit": "ns/iter",
            "extra": "iterations: 19487\ncpu: 35969.53353517752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 143038.03058292644,
            "unit": "ns/iter",
            "extra": "iterations: 4872\ncpu: 143028.63300492734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 122735.17046250598,
            "unit": "ns/iter",
            "extra": "iterations: 5708\ncpu: 122730.50105115489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 124582.11731248141,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 124575.32883043031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 125074.43005181492,
            "unit": "ns/iter",
            "extra": "iterations: 5597\ncpu: 125066.57137752425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 75519.74560930755,
            "unit": "ns/iter",
            "extra": "iterations: 9281\ncpu: 75518.01530007477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 125787.36134605961,
            "unit": "ns/iter",
            "extra": "iterations: 5557\ncpu: 125782.5265430977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3853.067183191828,
            "unit": "ns/iter",
            "extra": "iterations: 181340\ncpu: 3852.929304069711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 20368.609445798054,
            "unit": "ns/iter",
            "extra": "iterations: 34428\ncpu: 20368.043453003575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 15986.82800814022,
            "unit": "ns/iter",
            "extra": "iterations: 43723\ncpu: 15986.66605676631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 15905.618971720476,
            "unit": "ns/iter",
            "extra": "iterations: 43918\ncpu: 15904.822623980823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17073.688158923822,
            "unit": "ns/iter",
            "extra": "iterations: 40976\ncpu: 17073.07692307695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 34945.286753351036,
            "unit": "ns/iter",
            "extra": "iterations: 20073\ncpu: 34943.93962038587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 142431.818496641,
            "unit": "ns/iter",
            "extra": "iterations: 4909\ncpu: 142426.9097575887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 121904.80781304372,
            "unit": "ns/iter",
            "extra": "iterations: 5734\ncpu: 121900.61039414108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 123079.44606464276,
            "unit": "ns/iter",
            "extra": "iterations: 5692\ncpu: 123078.47856640758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 124484.28952516595,
            "unit": "ns/iter",
            "extra": "iterations: 5623\ncpu: 124481.64680775399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 74438.76730830301,
            "unit": "ns/iter",
            "extra": "iterations: 9403\ncpu: 74437.82835265409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 122034.34131736052,
            "unit": "ns/iter",
            "extra": "iterations: 5678\ncpu: 122034.60725607457 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412571577,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 868.3392081245612,
            "unit": "ns/iter",
            "extra": "iterations: 806440\ncpu: 868.3241158672687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12655.187837528725,
            "unit": "ns/iter",
            "extra": "iterations: 65365\ncpu: 12654.795379790407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27325.66634877781,
            "unit": "ns/iter",
            "extra": "iterations: 30409\ncpu: 27325.298431385454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43205.77543417763,
            "unit": "ns/iter",
            "extra": "iterations: 19865\ncpu: 43203.86106216966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 55858.369100173586,
            "unit": "ns/iter",
            "extra": "iterations: 14725\ncpu: 55855.15789473685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55900.58719999434,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55899.129999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67432.18320151226,
            "unit": "ns/iter",
            "extra": "iterations: 13275\ncpu: 67430.10922787193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77245.21394724862,
            "unit": "ns/iter",
            "extra": "iterations: 11185\ncpu: 77241.86857398308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89307.24650260103,
            "unit": "ns/iter",
            "extra": "iterations: 9793\ncpu: 89304.31941182476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 726.6317314777535,
            "unit": "ns/iter",
            "extra": "iterations: 964777\ncpu: 726.6134039265036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 604.2464777662689,
            "unit": "ns/iter",
            "extra": "iterations: 1157930\ncpu: 604.2437798485225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 597.9650987070628,
            "unit": "ns/iter",
            "extra": "iterations: 1167951\ncpu: 597.9444343127409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 589.0764843523998,
            "unit": "ns/iter",
            "extra": "iterations: 1154746\ncpu: 589.047894515331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1114.035814889341,
            "unit": "ns/iter",
            "extra": "iterations: 628705\ncpu: 1114.0048194304168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5024.410439708382,
            "unit": "ns/iter",
            "extra": "iterations: 160311\ncpu: 5024.289038182026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22248.528746540913,
            "unit": "ns/iter",
            "extra": "iterations: 37935\ncpu: 22246.930275471164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19289.29716959193,
            "unit": "ns/iter",
            "extra": "iterations: 42962\ncpu: 19288.506121688926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18933.754161420075,
            "unit": "ns/iter",
            "extra": "iterations: 43675\ncpu: 18933.37149398969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19076.416401885475,
            "unit": "ns/iter",
            "extra": "iterations: 43117\ncpu: 19075.18380221261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55877.39165295907,
            "unit": "ns/iter",
            "extra": "iterations: 14592\ncpu: 55874.403782894646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 505457.8691428365,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 505422.7428571433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 406989.81933960906,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 406971.41509434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 410971.8161455451,
            "unit": "ns/iter",
            "extra": "iterations: 2143\ncpu: 410962.5291647227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 416157.7648183327,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 416140.5831739968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 251566.53875289933,
            "unit": "ns/iter",
            "extra": "iterations: 3432\ncpu: 251557.22610722686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 412632.6068538802,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 412624.65492622484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2034505.1899564436,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2034343.8864628808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 803715.953367882,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 803690.4145077729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2685671.492753684,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2685546.0869565248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5197.443314460677,
            "unit": "ns/iter",
            "extra": "iterations: 149068\ncpu: 5197.2690315829195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23851.231290013246,
            "unit": "ns/iter",
            "extra": "iterations: 35302\ncpu: 23850.677015466415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18936.705627408177,
            "unit": "ns/iter",
            "extra": "iterations: 43839\ncpu: 18935.342959465303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18982.619946887953,
            "unit": "ns/iter",
            "extra": "iterations: 44057\ncpu: 18981.864402932544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 19068.759564220272,
            "unit": "ns/iter",
            "extra": "iterations: 43600\ncpu: 19068.396788990805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 55497.34596689671,
            "unit": "ns/iter",
            "extra": "iterations: 15224\ncpu: 55495.29689963181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 523030.04652566725,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 523007.06948640384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 429040.544023593,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 429029.90654205676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 420025.943214625,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 420008.2290664068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 420116.02706620353,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 420101.06331561133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 250414.26130507072,
            "unit": "ns/iter",
            "extra": "iterations: 3494\ncpu: 250407.09788208432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 420122.6269455306,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 420107.587548638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2031818.2416851914,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2031734.5898004305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 802480.3819742475,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 802450.12875537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5534.213849287063,
            "unit": "ns/iter",
            "extra": "iterations: 148282\ncpu: 5533.989965066572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23945.054917170895,
            "unit": "ns/iter",
            "extra": "iterations: 34288\ncpu: 23944.452869808654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19053.079269679474,
            "unit": "ns/iter",
            "extra": "iterations: 43926\ncpu: 19052.476892956256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18467.036861728717,
            "unit": "ns/iter",
            "extra": "iterations: 44789\ncpu: 18466.62126861501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18406.40243930008,
            "unit": "ns/iter",
            "extra": "iterations: 44111\ncpu: 18406.06651402139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 54799.76269524921,
            "unit": "ns/iter",
            "extra": "iterations: 15301\ncpu: 54796.84334357254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 509902.48091598705,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 509878.2736347623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 423800.7355816316,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 423783.18670576724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 418519.57115296973,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 418502.6531596722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 416988.30687321513,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 416970.3775411405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252624.41447177134,
            "unit": "ns/iter",
            "extra": "iterations: 3455\ncpu: 252618.03183791606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 415317.0395992334,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 415299.28435114573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 365.78529571707986,
            "unit": "ns/iter",
            "extra": "iterations: 1905132\ncpu: 365.7765446173807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2123.308675710342,
            "unit": "ns/iter",
            "extra": "iterations: 330094\ncpu: 2123.24852920683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1659.0150086067674,
            "unit": "ns/iter",
            "extra": "iterations: 421758\ncpu: 1658.9567951289653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1639.097214122629,
            "unit": "ns/iter",
            "extra": "iterations: 426975\ncpu: 1639.0268751097858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1286.5021371287119,
            "unit": "ns/iter",
            "extra": "iterations: 544656\ncpu: 1286.4569563173823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9494.16534077868,
            "unit": "ns/iter",
            "extra": "iterations: 73787\ncpu: 9493.871549188852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22251.23099955373,
            "unit": "ns/iter",
            "extra": "iterations: 31394\ncpu: 22250.726253424455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5348.912519511783,
            "unit": "ns/iter",
            "extra": "iterations: 130692\ncpu: 5348.761974719197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5316.5331514594245,
            "unit": "ns/iter",
            "extra": "iterations: 131593\ncpu: 5316.193110575869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5346.482555833754,
            "unit": "ns/iter",
            "extra": "iterations: 131104\ncpu: 5346.331919697315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10969.370855203868,
            "unit": "ns/iter",
            "extra": "iterations: 63634\ncpu: 10968.890844517065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9048.549807809974,
            "unit": "ns/iter",
            "extra": "iterations: 77267\ncpu: 9048.354407444194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3552.049450688966,
            "unit": "ns/iter",
            "extra": "iterations: 196883\ncpu: 3551.9288105118558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18044.109702357826,
            "unit": "ns/iter",
            "extra": "iterations: 38805\ncpu: 18043.58201262695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14214.611353798708,
            "unit": "ns/iter",
            "extra": "iterations: 49446\ncpu: 14214.162925211282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13859.547102241575,
            "unit": "ns/iter",
            "extra": "iterations: 50263\ncpu: 13858.85044665059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13498.624492053188,
            "unit": "ns/iter",
            "extra": "iterations: 47003\ncpu: 13498.246920409407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29814.177156177197,
            "unit": "ns/iter",
            "extra": "iterations: 23595\ncpu: 29813.354524263348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 110134.62036023493,
            "unit": "ns/iter",
            "extra": "iterations: 6385\ncpu: 110129.45967110513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95403.60949796508,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 95401.05834463892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 94298.20305260358,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 94296.143363314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 94794.9573632803,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 94792.230644287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60800.947049131406,
            "unit": "ns/iter",
            "extra": "iterations: 11539\ncpu: 60799.71401334609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 94787.16047888601,
            "unit": "ns/iter",
            "extra": "iterations: 7434\ncpu: 94785.1627656722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3241.590251812426,
            "unit": "ns/iter",
            "extra": "iterations: 215835\ncpu: 3241.525702504248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16474.99969149187,
            "unit": "ns/iter",
            "extra": "iterations: 42138\ncpu: 16474.787602639168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13237.373777425313,
            "unit": "ns/iter",
            "extra": "iterations: 52962\ncpu: 13237.0850798687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12965.568333456637,
            "unit": "ns/iter",
            "extra": "iterations: 53956\ncpu: 12965.24575580088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13536.486126699154,
            "unit": "ns/iter",
            "extra": "iterations: 51682\ncpu: 13536.264076467576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28920.435279295456,
            "unit": "ns/iter",
            "extra": "iterations: 23810\ncpu: 28919.89920201562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 110271.09385772244,
            "unit": "ns/iter",
            "extra": "iterations: 6382\ncpu: 110268.16045126844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94352.06512944427,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 94347.8694714135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93304.77680881972,
            "unit": "ns/iter",
            "extra": "iterations: 7339\ncpu: 93302.68428941129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 95244.83516335065,
            "unit": "ns/iter",
            "extra": "iterations: 7377\ncpu: 95240.81604988435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61728.59218472324,
            "unit": "ns/iter",
            "extra": "iterations: 11260\ncpu: 61726.81172291312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 93297.76672082568,
            "unit": "ns/iter",
            "extra": "iterations: 7386\ncpu: 93296.06011372994 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702416019535,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 864.6283555608325,
            "unit": "ns/iter",
            "extra": "iterations: 804858\ncpu: 864.5175919230473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12646.25919623173,
            "unit": "ns/iter",
            "extra": "iterations: 65815\ncpu: 12645.603585808705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27550.18927901608,
            "unit": "ns/iter",
            "extra": "iterations: 30389\ncpu: 27548.823587482315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42527.900888027456,
            "unit": "ns/iter",
            "extra": "iterations: 19594\ncpu: 42525.45166887821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54419.302980808665,
            "unit": "ns/iter",
            "extra": "iterations: 14694\ncpu: 54418.39526337282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 56063.98790000071,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56060.81000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 68048.97408881715,
            "unit": "ns/iter",
            "extra": "iterations: 12813\ncpu: 68044.7358151877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78493.02050444619,
            "unit": "ns/iter",
            "extra": "iterations: 11022\ncpu: 78488.93122845216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 90074.92572313639,
            "unit": "ns/iter",
            "extra": "iterations: 9680\ncpu: 90071.97314049584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 726.256561196983,
            "unit": "ns/iter",
            "extra": "iterations: 962172\ncpu: 726.2427092037607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 604.884258360367,
            "unit": "ns/iter",
            "extra": "iterations: 1158831\ncpu: 604.8691310467183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 593.7435480601894,
            "unit": "ns/iter",
            "extra": "iterations: 1179219\ncpu: 593.7119398517159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 604.1138163869009,
            "unit": "ns/iter",
            "extra": "iterations: 1158436\ncpu: 604.0805016418686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1143.2325817478254,
            "unit": "ns/iter",
            "extra": "iterations: 611729\ncpu: 1143.1586535868012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5516.878953480301,
            "unit": "ns/iter",
            "extra": "iterations: 146390\ncpu: 5516.6391146936285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23113.84720507389,
            "unit": "ns/iter",
            "extra": "iterations: 35636\ncpu: 23112.68660904703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18961.89232192787,
            "unit": "ns/iter",
            "extra": "iterations: 44308\ncpu: 18960.774577954355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18944.042637262068,
            "unit": "ns/iter",
            "extra": "iterations: 43530\ncpu: 18942.88306914775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18852.305107774155,
            "unit": "ns/iter",
            "extra": "iterations: 43424\ncpu: 18851.5175939572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54756.35156300846,
            "unit": "ns/iter",
            "extra": "iterations: 15323\ncpu: 54755.58963649417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 509180.61375981214,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 509137.89981894795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 416492.51777139364,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 416470.7973102795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 427030.02113352634,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 427001.63304514904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 416865.6317567656,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 416857.0463320461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 255343.5245183952,
            "unit": "ns/iter",
            "extra": "iterations: 3426\ncpu: 255341.56450671316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 413320.78342116205,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 413309.43938667915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2051259.633554025,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2051211.258278147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 834250.7888692921,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 834205.3003533557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2706715.7647058377,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2706660.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5269.495126192,
            "unit": "ns/iter",
            "extra": "iterations: 151832\ncpu: 5269.3450655988145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23620.855240366425,
            "unit": "ns/iter",
            "extra": "iterations: 35217\ncpu: 23619.998864184832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 19003.84033804397,
            "unit": "ns/iter",
            "extra": "iterations: 44018\ncpu: 19003.278204370876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18745.665375870034,
            "unit": "ns/iter",
            "extra": "iterations: 44417\ncpu: 18745.541121642607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18736.90736508603,
            "unit": "ns/iter",
            "extra": "iterations: 44195\ncpu: 18736.61952709569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 54811.06975983091,
            "unit": "ns/iter",
            "extra": "iterations: 15281\ncpu: 54807.75472809383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 528156.9554878104,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 528134.1463414642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 436675.74290061434,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 436655.4259634909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 430851.91485146777,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 430825.89108910854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 432817.1740427602,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 432784.4853306838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 257279.18310273456,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 257257.2564027075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 430286.2035398329,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 430258.8987217309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2065994.5659090795,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2065842.0454545508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 824650.6966993856,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 824604.7279214988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5444.79897697509,
            "unit": "ns/iter",
            "extra": "iterations: 147406\ncpu: 5444.715954574445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24040.140469489685,
            "unit": "ns/iter",
            "extra": "iterations: 34463\ncpu: 24038.339668630135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18923.193367766828,
            "unit": "ns/iter",
            "extra": "iterations: 43756\ncpu: 18922.39235761938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18487.6367957156,
            "unit": "ns/iter",
            "extra": "iterations: 44815\ncpu: 18486.42418832979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18784.418779299915,
            "unit": "ns/iter",
            "extra": "iterations: 43942\ncpu: 18783.571526102594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 54872.20227901545,
            "unit": "ns/iter",
            "extra": "iterations: 15182\ncpu: 54867.66565669884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 521731.48510131025,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 521708.99880810664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 432623.0591132755,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 432616.10837438266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 452809.73461350007,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 452766.07582471543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 432838.521631028,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 432819.14470412856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 257611.54700854613,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 257594.93073975953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 424670.92860634916,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 424640.6845965772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 363.0352715142496,
            "unit": "ns/iter",
            "extra": "iterations: 1927873\ncpu: 363.02661015533806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2099.72967921828,
            "unit": "ns/iter",
            "extra": "iterations: 332812\ncpu: 2099.6896145571654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1646.3558212910998,
            "unit": "ns/iter",
            "extra": "iterations: 424064\ncpu: 1646.3227248717094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1517.0214976352847,
            "unit": "ns/iter",
            "extra": "iterations: 461167\ncpu: 1516.8884590614684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1285.4418958002893,
            "unit": "ns/iter",
            "extra": "iterations: 545606\ncpu: 1285.341620143463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9546.778843923203,
            "unit": "ns/iter",
            "extra": "iterations: 73265\ncpu: 9546.238995427571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22470.20201857265,
            "unit": "ns/iter",
            "extra": "iterations: 31012\ncpu: 22468.221978589154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5385.184742781427,
            "unit": "ns/iter",
            "extra": "iterations: 130181\ncpu: 5385.156820119693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5356.972988100504,
            "unit": "ns/iter",
            "extra": "iterations: 130424\ncpu: 5356.7932282402735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5397.4590813601435,
            "unit": "ns/iter",
            "extra": "iterations: 129953\ncpu: 5397.03508191421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10714.34430504048,
            "unit": "ns/iter",
            "extra": "iterations: 65198\ncpu: 10713.768827264552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10444.14244757176,
            "unit": "ns/iter",
            "extra": "iterations: 68713\ncpu: 10443.364428856179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3669.430163026251,
            "unit": "ns/iter",
            "extra": "iterations: 190644\ncpu: 3669.2458194330593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18332.881630635064,
            "unit": "ns/iter",
            "extra": "iterations: 38439\ncpu: 18331.345768620296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14501.282418900713,
            "unit": "ns/iter",
            "extra": "iterations: 48336\ncpu: 14500.597898047165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14061.865245527293,
            "unit": "ns/iter",
            "extra": "iterations: 49913\ncpu: 14061.625227896404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14649.34721500241,
            "unit": "ns/iter",
            "extra": "iterations: 48097\ncpu: 14648.99473979666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30050.508536374404,
            "unit": "ns/iter",
            "extra": "iterations: 23312\ncpu: 30049.408030198472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 113255.03660197479,
            "unit": "ns/iter",
            "extra": "iterations: 5874\ncpu: 113230.66053796407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 97234.10246360776,
            "unit": "ns/iter",
            "extra": "iterations: 7144\ncpu: 97229.2273236286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95738.13255654958,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 95731.08978752507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96200.08638100758,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 96195.387554585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61081.582388842406,
            "unit": "ns/iter",
            "extra": "iterations: 11470\ncpu: 61079.55536181431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 95798.38035298957,
            "unit": "ns/iter",
            "extra": "iterations: 7309\ncpu: 95790.25858530564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3289.6830058483797,
            "unit": "ns/iter",
            "extra": "iterations: 213903\ncpu: 3289.525626101551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16560.951472359226,
            "unit": "ns/iter",
            "extra": "iterations: 42347\ncpu: 16559.569745200388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13356.327904181939,
            "unit": "ns/iter",
            "extra": "iterations: 52433\ncpu: 13355.61955257172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13279.85525487776,
            "unit": "ns/iter",
            "extra": "iterations: 52437\ncpu: 13278.536148139547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 15081.814519115285,
            "unit": "ns/iter",
            "extra": "iterations: 48598\ncpu: 15081.085641384645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29258.91114917076,
            "unit": "ns/iter",
            "extra": "iterations: 23939\ncpu: 29256.88207527501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 110314.37219943404,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 110313.8213947614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95767.43340611897,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 95763.8919213968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 92650.53145364857,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 92648.6234871655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 93164.83813717273,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 93162.730184147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61390.34789459944,
            "unit": "ns/iter",
            "extra": "iterations: 11423\ncpu: 61389.96760920995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 94243.32938005996,
            "unit": "ns/iter",
            "extra": "iterations: 7420\ncpu: 94241.25336927125 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418360800,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 879.17883255865,
            "unit": "ns/iter",
            "extra": "iterations: 792982\ncpu: 879.1852778499385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12730.927381375182,
            "unit": "ns/iter",
            "extra": "iterations: 64763\ncpu: 12730.563747818971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27571.805476362624,
            "unit": "ns/iter",
            "extra": "iterations: 30166\ncpu: 27571.61042232978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42852.14879649805,
            "unit": "ns/iter",
            "extra": "iterations: 19651\ncpu: 42852.419724187086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53916.77596741195,
            "unit": "ns/iter",
            "extra": "iterations: 14730\ncpu: 53914.745417515274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55679.35449999481,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55679.549999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67465.22557204889,
            "unit": "ns/iter",
            "extra": "iterations: 12936\ncpu: 67463.80643166359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77989.93378256734,
            "unit": "ns/iter",
            "extra": "iterations: 11130\ncpu: 77988.73315363885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89321.10594605634,
            "unit": "ns/iter",
            "extra": "iterations: 9788\ncpu: 89320.6068655497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 738.8267624955198,
            "unit": "ns/iter",
            "extra": "iterations: 962967\ncpu: 738.8033027092325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 605.8675141364031,
            "unit": "ns/iter",
            "extra": "iterations: 1144741\ncpu: 605.8578315968416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 601.0564594547633,
            "unit": "ns/iter",
            "extra": "iterations: 1167227\ncpu: 601.051552097407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 608.3912449611369,
            "unit": "ns/iter",
            "extra": "iterations: 1156020\ncpu: 608.3905987785668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1110.6878378292872,
            "unit": "ns/iter",
            "extra": "iterations: 631236\ncpu: 1110.6944154008959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5523.316365675518,
            "unit": "ns/iter",
            "extra": "iterations: 146239\ncpu: 5523.280383481826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23944.092047407266,
            "unit": "ns/iter",
            "extra": "iterations: 34341\ncpu: 23942.76229579799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19051.831922836933,
            "unit": "ns/iter",
            "extra": "iterations: 43129\ncpu: 19051.023673166528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18690.51310232038,
            "unit": "ns/iter",
            "extra": "iterations: 44038\ncpu: 18690.133521049956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18641.223928546195,
            "unit": "ns/iter",
            "extra": "iterations: 43889\ncpu: 18640.032810043464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55649.0544015799,
            "unit": "ns/iter",
            "extra": "iterations: 15165\ncpu: 55646.805143422374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 515750.4104567227,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 515732.992788462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 411088.9952584,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 411073.8264580357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 411020.54135338444,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 411005.3571428573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 410881.0354274952,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 410869.3434104876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 252271.9248032609,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 252241.9411250362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 412922.76864243596,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 412908.55640535336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2029389.3450549738,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2029255.1648351636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 812411.5103627067,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 812386.0967184822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2701810.154069745,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2701730.81395349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4754.918892066853,
            "unit": "ns/iter",
            "extra": "iterations: 166075\ncpu: 4754.7969290983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 21702.790299041786,
            "unit": "ns/iter",
            "extra": "iterations: 37687\ncpu: 21702.791413484807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 17292.00088488129,
            "unit": "ns/iter",
            "extra": "iterations: 47464\ncpu: 17291.67368953311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17173.441009001097,
            "unit": "ns/iter",
            "extra": "iterations: 47770\ncpu: 17173.529411764735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17308.039026038245,
            "unit": "ns/iter",
            "extra": "iterations: 47353\ncpu: 17307.710176757562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53687.03743938072,
            "unit": "ns/iter",
            "extra": "iterations: 15465\ncpu: 53687.30682185614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 520792.4134615392,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 520780.8293269261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 432383.48863636167,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 432368.47826087015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 426752.61607141374,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 426755.1587301569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 423824.20291261544,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 423811.4077669915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 250223.23396334596,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 250195.64719358596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 420581.5516252274,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 420572.6577437856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2045577.1816142718,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2045545.7399103187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 797783.8996569713,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 797773.5849056572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5039.630789695101,
            "unit": "ns/iter",
            "extra": "iterations: 159378\ncpu: 5039.486629271296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22380.26406972951,
            "unit": "ns/iter",
            "extra": "iterations: 37172\ncpu: 22380.3857742386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18038.07508128822,
            "unit": "ns/iter",
            "extra": "iterations: 47362\ncpu: 18037.572315358288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18581.96364325357,
            "unit": "ns/iter",
            "extra": "iterations: 44861\ncpu: 18580.731593143213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18714.78538201475,
            "unit": "ns/iter",
            "extra": "iterations: 44069\ncpu: 18714.25718759228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 55200.348840257924,
            "unit": "ns/iter",
            "extra": "iterations: 15262\ncpu: 55199.06958458916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 516513.03285543824,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 516502.03106332367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 418954.12699952745,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 418938.9723703327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 416816.7874581033,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 416804.45189085795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 417481.75974964077,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 417466.29754453566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 250621.92978417742,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 250609.58273381236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 413328.3140811462,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 413324.39140811627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 360.50206247802663,
            "unit": "ns/iter",
            "extra": "iterations: 1941354\ncpu: 360.4873196748233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2092.4264468008405,
            "unit": "ns/iter",
            "extra": "iterations: 333840\ncpu: 2092.3403426791433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1638.3639062356424,
            "unit": "ns/iter",
            "extra": "iterations: 425791\ncpu: 1638.3413458715725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1600.0211279050973,
            "unit": "ns/iter",
            "extra": "iterations: 436863\ncpu: 1599.9945062868712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1262.7588507964965,
            "unit": "ns/iter",
            "extra": "iterations: 553566\ncpu: 1262.7500605167254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9541.880637937056,
            "unit": "ns/iter",
            "extra": "iterations: 73675\ncpu: 9541.653206650702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20059.15826042335,
            "unit": "ns/iter",
            "extra": "iterations: 34974\ncpu: 20058.898038542924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5356.754565955016,
            "unit": "ns/iter",
            "extra": "iterations: 129929\ncpu: 5356.737910705103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5364.088858551708,
            "unit": "ns/iter",
            "extra": "iterations: 130387\ncpu: 5364.076173238192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5373.91372253921,
            "unit": "ns/iter",
            "extra": "iterations: 130231\ncpu: 5373.88025892457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10891.570846708448,
            "unit": "ns/iter",
            "extra": "iterations: 66044\ncpu: 10891.19223547939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10097.940405987194,
            "unit": "ns/iter",
            "extra": "iterations: 69017\ncpu: 10098.000492632285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3516.3154851102827,
            "unit": "ns/iter",
            "extra": "iterations: 198862\ncpu: 3516.271585320527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18227.225252577715,
            "unit": "ns/iter",
            "extra": "iterations: 38206\ncpu: 18227.33078574022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14231.810044956519,
            "unit": "ns/iter",
            "extra": "iterations: 49159\ncpu: 14231.888362253141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13963.950429741488,
            "unit": "ns/iter",
            "extra": "iterations: 50030\ncpu: 13963.809714171399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14479.837349896157,
            "unit": "ns/iter",
            "extra": "iterations: 48300\ncpu: 14479.556935817818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29716.47214797955,
            "unit": "ns/iter",
            "extra": "iterations: 23571\ncpu: 29716.511815366353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 114143.6537530326,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 114142.84100080833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 97367.82121889912,
            "unit": "ns/iter",
            "extra": "iterations: 7154\ncpu: 97364.73301649312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96489.05197304836,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 96489.63288876764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96900.43603603597,
            "unit": "ns/iter",
            "extra": "iterations: 7215\ncpu: 96898.58627858777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61851.261848028094,
            "unit": "ns/iter",
            "extra": "iterations: 11331\ncpu: 61851.11640631876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 96271.47334343816,
            "unit": "ns/iter",
            "extra": "iterations: 7259\ncpu: 96270.87753134004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3308.209256338345,
            "unit": "ns/iter",
            "extra": "iterations: 212395\ncpu: 3308.1287224275484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16431.71830853655,
            "unit": "ns/iter",
            "extra": "iterations: 42614\ncpu: 16431.419251889103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13245.985897896735,
            "unit": "ns/iter",
            "extra": "iterations: 52829\ncpu: 13245.755172348478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13292.804865070904,
            "unit": "ns/iter",
            "extra": "iterations: 52620\ncpu: 13292.88483466354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14640.408552673165,
            "unit": "ns/iter",
            "extra": "iterations: 47377\ncpu: 14640.228380859928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28684.445869529034,
            "unit": "ns/iter",
            "extra": "iterations: 24404\ncpu: 28684.59678741146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 111375.2936696856,
            "unit": "ns/iter",
            "extra": "iterations: 6303\ncpu: 111374.13929874581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 96424.1899808414,
            "unit": "ns/iter",
            "extra": "iterations: 7306\ncpu: 96423.73391732924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94400.38814634598,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 94399.75698663418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94925.68595825804,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 94922.74329086627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62339.07018639068,
            "unit": "ns/iter",
            "extra": "iterations: 11213\ncpu: 62339.418532061194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 96156.87013164902,
            "unit": "ns/iter",
            "extra": "iterations: 7292\ncpu: 96155.06034010036 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422479932,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 920.3953480101558,
            "unit": "ns/iter",
            "extra": "iterations: 759159\ncpu: 920.3169559999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12734.145040141057,
            "unit": "ns/iter",
            "extra": "iterations: 65768\ncpu: 12733.665308356643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27672.30529915636,
            "unit": "ns/iter",
            "extra": "iterations: 30118\ncpu: 27670.628859818036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43754.15355015343,
            "unit": "ns/iter",
            "extra": "iterations: 18971\ncpu: 43752.28506668071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54706.55736144119,
            "unit": "ns/iter",
            "extra": "iterations: 14705\ncpu: 54704.42706562391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55951.20920000341,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55947.09 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67565.86112411937,
            "unit": "ns/iter",
            "extra": "iterations: 12810\ncpu: 67559.39890710387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77601.21315132124,
            "unit": "ns/iter",
            "extra": "iterations: 11208\ncpu: 77596.91291934329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88935.6918232594,
            "unit": "ns/iter",
            "extra": "iterations: 9845\ncpu: 88931.17318435747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 780.8545105287575,
            "unit": "ns/iter",
            "extra": "iterations: 895405\ncpu: 780.8337009509669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 662.9512817304417,
            "unit": "ns/iter",
            "extra": "iterations: 1047061\ncpu: 662.9229815645892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 650.1632044766226,
            "unit": "ns/iter",
            "extra": "iterations: 1072587\ncpu: 650.1270293225618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 654.1489565645994,
            "unit": "ns/iter",
            "extra": "iterations: 1068298\ncpu: 654.1407921759659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1112.6984126983962,
            "unit": "ns/iter",
            "extra": "iterations: 630315\ncpu: 1112.6836581709144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5550.0132132422905,
            "unit": "ns/iter",
            "extra": "iterations: 144779\ncpu: 5549.985149780009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23954.455446406602,
            "unit": "ns/iter",
            "extra": "iterations: 34408\ncpu: 23953.874099046727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19316.162443205303,
            "unit": "ns/iter",
            "extra": "iterations: 42698\ncpu: 19316.24666260712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18930.468608623145,
            "unit": "ns/iter",
            "extra": "iterations: 43324\ncpu: 18930.02492844615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19048.65883997146,
            "unit": "ns/iter",
            "extra": "iterations: 42930\ncpu: 19048.572094106697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54619.66370873267,
            "unit": "ns/iter",
            "extra": "iterations: 15326\ncpu: 54618.01513767453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 509391.06417738716,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 509375.3792298729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 415910.90690978017,
            "unit": "ns/iter",
            "extra": "iterations: 2084\ncpu: 415908.3013435691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 413015.6545628465,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 413002.8666985194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 414008.63519921555,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 414001.8975332071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 252761.60152358722,
            "unit": "ns/iter",
            "extra": "iterations: 3413\ncpu: 252758.98036917724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 414064.3306489884,
            "unit": "ns/iter",
            "extra": "iterations: 2111\ncpu: 414046.37612505985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2058213.4623893844,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2058174.3362831906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 828499.5778363731,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 828477.5725593667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2697256.609329442,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2697231.486880466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5142.249935004328,
            "unit": "ns/iter",
            "extra": "iterations: 153856\ncpu: 5142.03410981697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23641.96472874887,
            "unit": "ns/iter",
            "extra": "iterations: 34986\ncpu: 23640.330417881396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18960.681113348393,
            "unit": "ns/iter",
            "extra": "iterations: 43724\ncpu: 18960.051687860276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 19075.524895184164,
            "unit": "ns/iter",
            "extra": "iterations: 44125\ncpu: 19074.36373937686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 19262.834937286036,
            "unit": "ns/iter",
            "extra": "iterations: 43850\ncpu: 19261.817559863244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 54863.00118819897,
            "unit": "ns/iter",
            "extra": "iterations: 15149\ncpu: 54860.00396065722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 525937.2626139994,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 525898.541033434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 438883.39326971525,
            "unit": "ns/iter",
            "extra": "iterations: 1991\ncpu: 438866.19789050653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 435587.0278745576,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 435576.80438029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 430415.32153538056,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 430393.4695912275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 254703.85991317494,
            "unit": "ns/iter",
            "extra": "iterations: 3455\ncpu: 254687.98842257637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 431205.3965432308,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 431179.1604938282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2075640.1121282326,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2075401.144164756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 832310.6636931173,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 832243.0865298822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5462.968522259103,
            "unit": "ns/iter",
            "extra": "iterations: 146548\ncpu: 5462.844255806984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24234.02472390644,
            "unit": "ns/iter",
            "extra": "iterations: 34137\ncpu: 24233.350909570327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18993.033963658705,
            "unit": "ns/iter",
            "extra": "iterations: 43311\ncpu: 18992.630047793933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18803.641196088414,
            "unit": "ns/iter",
            "extra": "iterations: 43776\ncpu: 18802.62015716379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19248.756280823585,
            "unit": "ns/iter",
            "extra": "iterations: 42988\ncpu: 19248.343723829945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 54832.48944187795,
            "unit": "ns/iter",
            "extra": "iterations: 14065\ncpu: 54825.63099893331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 505120.095545133,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 505070.9847596736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 419605.24613151664,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 419573.59767891694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 418005.0110470652,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 417981.2680115288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 420120.61594203144,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 420097.00483091816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 254345.15482748643,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 254327.9501304718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 415634.3544243455,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 415603.0447193167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 383.2571328955758,
            "unit": "ns/iter",
            "extra": "iterations: 1824154\ncpu: 383.2587051312587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2137.9085237179306,
            "unit": "ns/iter",
            "extra": "iterations: 327451\ncpu: 2137.7436624105753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1622.8635018757968,
            "unit": "ns/iter",
            "extra": "iterations: 446475\ncpu: 1622.7826866005828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1546.549829335046,
            "unit": "ns/iter",
            "extra": "iterations: 454692\ncpu: 1546.4419871033424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1306.1978166296549,
            "unit": "ns/iter",
            "extra": "iterations: 536052\ncpu: 1306.1341063926454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9928.320353582727,
            "unit": "ns/iter",
            "extra": "iterations: 70931\ncpu: 9927.729765546737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22174.957661736065,
            "unit": "ns/iter",
            "extra": "iterations: 31579\ncpu: 22172.99154501405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5395.742342911012,
            "unit": "ns/iter",
            "extra": "iterations: 129847\ncpu: 5395.612528591284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5436.639383412993,
            "unit": "ns/iter",
            "extra": "iterations: 128968\ncpu: 5436.57729049065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5466.801123665962,
            "unit": "ns/iter",
            "extra": "iterations: 127974\ncpu: 5466.584618750671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10802.048292471927,
            "unit": "ns/iter",
            "extra": "iterations: 64772\ncpu: 10801.9792502932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10251.693525665276,
            "unit": "ns/iter",
            "extra": "iterations: 68146\ncpu: 10251.251724239126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3657.3607808081792,
            "unit": "ns/iter",
            "extra": "iterations: 192416\ncpu: 3657.3325503076253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18029.596468616495,
            "unit": "ns/iter",
            "extra": "iterations: 38795\ncpu: 18028.269106843596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14156.4830341746,
            "unit": "ns/iter",
            "extra": "iterations: 49305\ncpu: 14156.367508366387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13993.718926243593,
            "unit": "ns/iter",
            "extra": "iterations: 50179\ncpu: 13993.479343948638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14541.62994718817,
            "unit": "ns/iter",
            "extra": "iterations: 48285\ncpu: 14528.453971212582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29879.67516902194,
            "unit": "ns/iter",
            "extra": "iterations: 22778\ncpu: 29879.8401966806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 112214.72904263888,
            "unit": "ns/iter",
            "extra": "iterations: 6215\ncpu: 112209.15526950949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96483.15756738228,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96472.9509329639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95987.78108293372,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 95979.45167923154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96499.0940607702,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 96498.25966850811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61107.81772969172,
            "unit": "ns/iter",
            "extra": "iterations: 11461\ncpu: 61104.624378326414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 95927.0181318715,
            "unit": "ns/iter",
            "extra": "iterations: 7280\ncpu: 95919.61538461529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3310.3597589528745,
            "unit": "ns/iter",
            "extra": "iterations: 211411\ncpu: 3310.0988122661597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16420.02443317922,
            "unit": "ns/iter",
            "extra": "iterations: 42606\ncpu: 16418.666385015942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13006.620623439088,
            "unit": "ns/iter",
            "extra": "iterations: 53638\ncpu: 13005.809314292159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12996.375923793692,
            "unit": "ns/iter",
            "extra": "iterations: 53854\ncpu: 12995.55279087921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13482.440191203395,
            "unit": "ns/iter",
            "extra": "iterations: 51882\ncpu: 13482.14024131681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28666.39042274252,
            "unit": "ns/iter",
            "extra": "iterations: 24412\ncpu: 28665.123709650718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 111106.53518257654,
            "unit": "ns/iter",
            "extra": "iterations: 6381\ncpu: 111105.45369064418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95477.86066803038,
            "unit": "ns/iter",
            "extra": "iterations: 7335\ncpu: 95471.69734151327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93720.09028800685,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 93714.94976557275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94479.39959677012,
            "unit": "ns/iter",
            "extra": "iterations: 7440\ncpu: 94473.07795698883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62470.01076608047,
            "unit": "ns/iter",
            "extra": "iterations: 11239\ncpu: 62466.34931933463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 95863.91304943497,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 95862.89196220732 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453371451,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 894.4041269719432,
            "unit": "ns/iter",
            "extra": "iterations: 780960\ncpu: 894.4035545994673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12823.812655812822,
            "unit": "ns/iter",
            "extra": "iterations: 64982\ncpu: 12823.57268166569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27990.988246686167,
            "unit": "ns/iter",
            "extra": "iterations: 29949\ncpu: 27991.195031553656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43296.27640496221,
            "unit": "ns/iter",
            "extra": "iterations: 19182\ncpu: 43295.51663017411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54811.32672718499,
            "unit": "ns/iter",
            "extra": "iterations: 14431\ncpu: 54808.675767445115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55931.42409999814,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55928.91 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67844.39976644868,
            "unit": "ns/iter",
            "extra": "iterations: 12845\ncpu: 67844.1105488517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78449.90439461818,
            "unit": "ns/iter",
            "extra": "iterations: 11150\ncpu: 78450.54708520182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89535.23653033662,
            "unit": "ns/iter",
            "extra": "iterations: 9707\ncpu: 89533.61491707018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 730.3739881543615,
            "unit": "ns/iter",
            "extra": "iterations: 959509\ncpu: 730.3650096038696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 597.5667059350383,
            "unit": "ns/iter",
            "extra": "iterations: 1150205\ncpu: 597.553479597116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 592.9807425396168,
            "unit": "ns/iter",
            "extra": "iterations: 1162874\ncpu: 592.9627801464305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 596.4560293024612,
            "unit": "ns/iter",
            "extra": "iterations: 1175874\ncpu: 596.4599098202696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1090.638712670281,
            "unit": "ns/iter",
            "extra": "iterations: 644559\ncpu: 1090.628010779464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5609.639356688098,
            "unit": "ns/iter",
            "extra": "iterations: 145124\ncpu: 5609.636586643149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24188.574629909665,
            "unit": "ns/iter",
            "extra": "iterations: 34316\ncpu: 24188.107588297018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19558.9945265719,
            "unit": "ns/iter",
            "extra": "iterations: 42752\ncpu: 19558.528255988047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19179.449630886877,
            "unit": "ns/iter",
            "extra": "iterations: 43618\ncpu: 19178.71750194873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19235.533773382183,
            "unit": "ns/iter",
            "extra": "iterations: 42874\ncpu: 19235.42006810655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55717.293617304684,
            "unit": "ns/iter",
            "extra": "iterations: 15166\ncpu: 55715.17868917317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 510085.8778935394,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 510059.31712963013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 415225.7768791647,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 415223.45385347365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 418297.95951806806,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 418287.42168674746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 419453.01262748626,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 419443.51627003396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256279.66859959398,
            "unit": "ns/iter",
            "extra": "iterations: 3449\ncpu: 256271.46999130116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 418812.1822991686,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 418812.21741221857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2043051.31707312,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2043052.9933481086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 803169.2168367384,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 803159.4387755115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2683104.0261627184,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2683086.0465116277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5217.350286457928,
            "unit": "ns/iter",
            "extra": "iterations: 152204\ncpu: 5217.173661664605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23557.57006694673,
            "unit": "ns/iter",
            "extra": "iterations: 35252\ncpu: 23557.398161806483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18803.084745379296,
            "unit": "ns/iter",
            "extra": "iterations: 44144\ncpu: 18802.870152229152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18695.743959836465,
            "unit": "ns/iter",
            "extra": "iterations: 44618\ncpu: 18695.620601550872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18596.513619293553,
            "unit": "ns/iter",
            "extra": "iterations: 44202\ncpu: 18595.726437717793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 55009.91079537851,
            "unit": "ns/iter",
            "extra": "iterations: 15414\ncpu: 55008.47281691986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 515463.62760262424,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 515464.0690065447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 427711.27679448144,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 427698.6234021608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 422000.17974804237,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 421996.26937984425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 423728.2107537417,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 423721.987518002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 249601.9522164696,
            "unit": "ns/iter",
            "extra": "iterations: 3474\ncpu: 249605.67069660252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 421737.6410526329,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 421732.7368421047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2049987.1278027585,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2049858.5201793695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 805206.4160206829,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 805195.5211024979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5467.315452513486,
            "unit": "ns/iter",
            "extra": "iterations: 148073\ncpu: 5467.133778609218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24056.25539766906,
            "unit": "ns/iter",
            "extra": "iterations: 34413\ncpu: 24056.097986226006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18976.296676943977,
            "unit": "ns/iter",
            "extra": "iterations: 43785\ncpu: 18975.5190133608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18546.017189034676,
            "unit": "ns/iter",
            "extra": "iterations: 44796\ncpu: 18545.87463166358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18863.83327274341,
            "unit": "ns/iter",
            "extra": "iterations: 44012\ncpu: 18863.54176133785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 55071.14097992754,
            "unit": "ns/iter",
            "extra": "iterations: 15144\ncpu: 55070.19281563632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 503072.531505259,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 503064.7607934629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 418212.5282296744,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 418205.74162679276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 416952.85830152285,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 416945.03816793725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 416495.56622998795,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 416492.96458030184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 254999.9117733936,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 255001.4753614626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 419708.9217391426,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 419701.1111111121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 360.6376628337989,
            "unit": "ns/iter",
            "extra": "iterations: 1942318\ncpu: 360.6357455370308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2077.212563717834,
            "unit": "ns/iter",
            "extra": "iterations: 336445\ncpu: 2077.1938949902647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1614.2612271447224,
            "unit": "ns/iter",
            "extra": "iterations: 432011\ncpu: 1614.2535722470134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1614.8893488228111,
            "unit": "ns/iter",
            "extra": "iterations: 433154\ncpu: 1614.8547629711452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1273.013412396179,
            "unit": "ns/iter",
            "extra": "iterations: 549268\ncpu: 1273.002796449093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9641.67167092881,
            "unit": "ns/iter",
            "extra": "iterations: 72738\ncpu: 9641.615111771001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22119.99001169547,
            "unit": "ns/iter",
            "extra": "iterations: 31637\ncpu: 22120.014539937503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5307.805295890919,
            "unit": "ns/iter",
            "extra": "iterations: 131687\ncpu: 5307.729692376636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5298.609804823541,
            "unit": "ns/iter",
            "extra": "iterations: 132649\ncpu: 5298.471907063019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5365.606005835914,
            "unit": "ns/iter",
            "extra": "iterations: 130573\ncpu: 5365.607744326926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10069.756902007224,
            "unit": "ns/iter",
            "extra": "iterations: 69219\ncpu: 10069.846429448562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10000.550196050277,
            "unit": "ns/iter",
            "extra": "iterations: 70135\ncpu: 10000.352177942574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3612.3900521541036,
            "unit": "ns/iter",
            "extra": "iterations: 194615\ncpu: 3612.2467435706444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18316.95818215013,
            "unit": "ns/iter",
            "extra": "iterations: 38309\ncpu: 18316.510480565794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14250.579224314853,
            "unit": "ns/iter",
            "extra": "iterations: 49221\ncpu: 14250.055870461829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14142.217108058347,
            "unit": "ns/iter",
            "extra": "iterations: 49427\ncpu: 14142.051914945334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14533.51471484081,
            "unit": "ns/iter",
            "extra": "iterations: 47605\ncpu: 14532.97132654138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 32552.055361681934,
            "unit": "ns/iter",
            "extra": "iterations: 23211\ncpu: 32551.337727801303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 113231.05057359883,
            "unit": "ns/iter",
            "extra": "iterations: 6189\ncpu: 113229.7786395203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 98583.7868875309,
            "unit": "ns/iter",
            "extra": "iterations: 7184\ncpu: 98584.07572383148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 98141.86220028083,
            "unit": "ns/iter",
            "extra": "iterations: 7090\ncpu: 98141.55148095869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 98723.97160928,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98720.68868587574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 62555.336405943985,
            "unit": "ns/iter",
            "extra": "iterations: 11174\ncpu: 62555.226418471284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 97331.53909985711,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 97327.35583684943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3341.1951671610736,
            "unit": "ns/iter",
            "extra": "iterations: 207704\ncpu: 3341.1576089049795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16898.73236514517,
            "unit": "ns/iter",
            "extra": "iterations: 41452\ncpu: 16898.784135867936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13515.034738402475,
            "unit": "ns/iter",
            "extra": "iterations: 51931\ncpu: 13515.154724538479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13437.379876639832,
            "unit": "ns/iter",
            "extra": "iterations: 52367\ncpu: 13437.204728168357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13946.41570415776,
            "unit": "ns/iter",
            "extra": "iterations: 50216\ncpu: 13946.06300780632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29190.642232402588,
            "unit": "ns/iter",
            "extra": "iterations: 24010\ncpu: 29190.54977092884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 111023.27526407265,
            "unit": "ns/iter",
            "extra": "iterations: 6343\ncpu: 111020.29008355647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95209.82589712436,
            "unit": "ns/iter",
            "extra": "iterations: 7329\ncpu: 95209.4692318188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94619.64965572782,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 94615.63385986205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94617.94351436033,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 94619.35483870968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61773.780031749026,
            "unit": "ns/iter",
            "extra": "iterations: 11338\ncpu: 61773.469747752104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 94391.22514147307,
            "unit": "ns/iter",
            "extra": "iterations: 7422\ncpu: 94387.09242791716 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479560519,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 885.3493290240641,
            "unit": "ns/iter",
            "extra": "iterations: 797048\ncpu: 885.3272324878805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12891.559921079359,
            "unit": "ns/iter",
            "extra": "iterations: 64368\ncpu: 12890.91629381059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 28270.424988940886,
            "unit": "ns/iter",
            "extra": "iterations: 29389\ncpu: 28268.916941712883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44830.1063374397,
            "unit": "ns/iter",
            "extra": "iterations: 19156\ncpu: 44826.978492378366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 55454.09555144199,
            "unit": "ns/iter",
            "extra": "iterations: 14589\ncpu: 55450.55178559185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57422.72210000009,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57419.07 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 69252.93030231442,
            "unit": "ns/iter",
            "extra": "iterations: 12669\ncpu: 69249.59349593495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 79501.74861953178,
            "unit": "ns/iter",
            "extra": "iterations: 11047\ncpu: 79499.28487372145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 91207.51244200577,
            "unit": "ns/iter",
            "extra": "iterations: 9484\ncpu: 91205.87304934628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 735.6885614361864,
            "unit": "ns/iter",
            "extra": "iterations: 945005\ncpu: 735.6558960005502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 610.2232176250683,
            "unit": "ns/iter",
            "extra": "iterations: 1144372\ncpu: 610.1799065338892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 598.6168104028561,
            "unit": "ns/iter",
            "extra": "iterations: 1150835\ncpu: 598.5971924732911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 606.607943744838,
            "unit": "ns/iter",
            "extra": "iterations: 1152605\ncpu: 606.604430832766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1115.8756040834512,
            "unit": "ns/iter",
            "extra": "iterations: 635053\ncpu: 1115.8454491199932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5505.951852975191,
            "unit": "ns/iter",
            "extra": "iterations: 145118\ncpu: 5505.841453162254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23975.798420592197,
            "unit": "ns/iter",
            "extra": "iterations: 34190\ncpu: 23975.238373793494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19229.551642643284,
            "unit": "ns/iter",
            "extra": "iterations: 42736\ncpu: 19229.43420067395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19009.72272853407,
            "unit": "ns/iter",
            "extra": "iterations: 43232\ncpu: 19009.113619541036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19085.5609614497,
            "unit": "ns/iter",
            "extra": "iterations: 43060\ncpu: 19085.443567115657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55951.95813106672,
            "unit": "ns/iter",
            "extra": "iterations: 14832\ncpu: 55950.573085220996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 518432.45535715984,
            "unit": "ns/iter",
            "extra": "iterations: 1680\ncpu: 518420.4166666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 427960.9181547618,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 427952.2817460326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 426123.1013151291,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 426110.4724792985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 429252.9818893829,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 429246.4512971136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 252600.9164691911,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 252599.37796208527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 420005.240114325,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 419988.51834206696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2026695.0899123042,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2026665.5701754347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 800138.6817021198,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 800112.2553191497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2697436.621700854,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2697389.1495601228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5288.108804590743,
            "unit": "ns/iter",
            "extra": "iterations: 151262\ncpu: 5288.04590710158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23816.247134128003,
            "unit": "ns/iter",
            "extra": "iterations: 34370\ncpu: 23815.909223159808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 19519.70741802658,
            "unit": "ns/iter",
            "extra": "iterations: 43246\ncpu: 19519.59950053184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 19045.334903718616,
            "unit": "ns/iter",
            "extra": "iterations: 43726\ncpu: 19045.0761560628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18977.34262450672,
            "unit": "ns/iter",
            "extra": "iterations: 43231\ncpu: 18977.2269898914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 55286.26465153181,
            "unit": "ns/iter",
            "extra": "iterations: 15152\ncpu: 55284.87988384376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 522967.8983566425,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 522965.4899573963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 433957.9581074432,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 433947.36323312146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 432552.02942618635,
            "unit": "ns/iter",
            "extra": "iterations: 2039\ncpu: 432528.88670917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 432035.2012954775,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 432020.1295465853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 255018.520058983,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 255000.76696165188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 431346.20854022773,
            "unit": "ns/iter",
            "extra": "iterations: 2014\ncpu: 431319.8113207531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2107105.8378996113,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2106980.821917809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 825685.2526501832,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 825655.7420494701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5432.247465533248,
            "unit": "ns/iter",
            "extra": "iterations: 149637\ncpu: 5432.177870446458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24334.27421828937,
            "unit": "ns/iter",
            "extra": "iterations: 33900\ncpu: 24333.604719764026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19128.143265000377,
            "unit": "ns/iter",
            "extra": "iterations: 42732\ncpu: 19128.032855939262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18951.530744410476,
            "unit": "ns/iter",
            "extra": "iterations: 43390\ncpu: 18950.88960589988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19064.40148621357,
            "unit": "ns/iter",
            "extra": "iterations: 43197\ncpu: 19064.120193531868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 55458.61676170524,
            "unit": "ns/iter",
            "extra": "iterations: 15082\ncpu: 55457.05476727228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 521048.4849023068,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 521041.385435166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 427224.5350098639,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 427196.94280078704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 420031.58673713077,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 420010.76405574265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 424609.3822243765,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 424582.56435162615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 261537.57451274846,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 261524.2878560715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 425276.6757157054,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 425253.6031589334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 366.06063516710975,
            "unit": "ns/iter",
            "extra": "iterations: 1922927\ncpu: 366.035424121664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2053.9534822739743,
            "unit": "ns/iter",
            "extra": "iterations: 343224\ncpu: 2053.8257814138865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1604.9220135402343,
            "unit": "ns/iter",
            "extra": "iterations: 436922\ncpu: 1604.803603389151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1652.0035206817097,
            "unit": "ns/iter",
            "extra": "iterations: 427190\ncpu: 1651.9040707881911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1297.9391289218386,
            "unit": "ns/iter",
            "extra": "iterations: 540273\ncpu: 1297.8310965012029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10034.278495853992,
            "unit": "ns/iter",
            "extra": "iterations: 69940\ncpu: 10034.103517300591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22085.043791145476,
            "unit": "ns/iter",
            "extra": "iterations: 30988\ncpu: 22084.284239060205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5339.732220023632,
            "unit": "ns/iter",
            "extra": "iterations: 126350\ncpu: 5339.373961218831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5325.715380176472,
            "unit": "ns/iter",
            "extra": "iterations: 131702\ncpu: 5325.3420601054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5351.587863695735,
            "unit": "ns/iter",
            "extra": "iterations: 130913\ncpu: 5351.279093749297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11075.582079170861,
            "unit": "ns/iter",
            "extra": "iterations: 63256\ncpu: 11075.431579612961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10153.286876363058,
            "unit": "ns/iter",
            "extra": "iterations: 69211\ncpu: 10152.61880336935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3589.139388313948,
            "unit": "ns/iter",
            "extra": "iterations: 195002\ncpu: 3589.0154972769765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18255.972243818254,
            "unit": "ns/iter",
            "extra": "iterations: 38586\ncpu: 18254.594930804025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14393.42579589513,
            "unit": "ns/iter",
            "extra": "iterations: 48279\ncpu: 14392.638621346814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13988.634421507417,
            "unit": "ns/iter",
            "extra": "iterations: 49992\ncpu: 13987.546007361208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14540.263158991947,
            "unit": "ns/iter",
            "extra": "iterations: 47971\ncpu: 14539.296658397856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29991.08051336713,
            "unit": "ns/iter",
            "extra": "iterations: 23375\ncpu: 29989.09518716578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 113839.01989887659,
            "unit": "ns/iter",
            "extra": "iterations: 6131\ncpu: 113830.4681128687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 98096.06749156848,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98093.47581552334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 97169.37817575998,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 97166.30570595652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95435.24425651513,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 95426.90627202114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61486.525755977236,
            "unit": "ns/iter",
            "extra": "iterations: 11376\ncpu: 61482.34880450054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 96727.6661589533,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 96719.08058709494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3331.167432001215,
            "unit": "ns/iter",
            "extra": "iterations: 209930\ncpu: 3330.9627018530036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16476.08099755232,
            "unit": "ns/iter",
            "extra": "iterations: 42063\ncpu: 16475.548581889034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13203.099401965592,
            "unit": "ns/iter",
            "extra": "iterations: 53007\ncpu: 13202.907163204718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13197.042392654368,
            "unit": "ns/iter",
            "extra": "iterations: 53146\ncpu: 13196.710947202135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13516.421828792189,
            "unit": "ns/iter",
            "extra": "iterations: 50722\ncpu: 13516.087693702968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28936.421296106473,
            "unit": "ns/iter",
            "extra": "iterations: 24211\ncpu: 28935.541695922988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 109693.82538933589,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 109692.33915368789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 96674.08035714392,
            "unit": "ns/iter",
            "extra": "iterations: 7504\ncpu: 96672.01492537232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93279.51470391339,
            "unit": "ns/iter",
            "extra": "iterations: 7447\ncpu: 93276.90345105469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 93633.73137516531,
            "unit": "ns/iter",
            "extra": "iterations: 7490\ncpu: 93633.16421895754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61602.32296881878,
            "unit": "ns/iter",
            "extra": "iterations: 11385\ncpu: 61601.41414141431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 95000.42227284693,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 94999.94639506728 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488590767,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 880.0038619043476,
            "unit": "ns/iter",
            "extra": "iterations: 797534\ncpu: 879.9806654010989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13033.597585040656,
            "unit": "ns/iter",
            "extra": "iterations: 63852\ncpu: 13033.38658146965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 28220.445325148627,
            "unit": "ns/iter",
            "extra": "iterations: 29648\ncpu: 28219.14800323798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44614.25545544567,
            "unit": "ns/iter",
            "extra": "iterations: 19201\ncpu: 44613.82740482268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 55481.15194641981,
            "unit": "ns/iter",
            "extra": "iterations: 14334\ncpu: 55479.52420817635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57091.256899997235,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57091.190000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 69279.42604680503,
            "unit": "ns/iter",
            "extra": "iterations: 12562\ncpu: 69277.11351695591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 79870.68293135766,
            "unit": "ns/iter",
            "extra": "iterations: 10780\ncpu: 79869.95361781074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 91414.02360469855,
            "unit": "ns/iter",
            "extra": "iterations: 9532\ncpu: 91412.56819135549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 731.9007428132758,
            "unit": "ns/iter",
            "extra": "iterations: 948556\ncpu: 731.894268762203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 618.3219560811341,
            "unit": "ns/iter",
            "extra": "iterations: 1132816\ncpu: 618.3157723760964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 612.2088186632812,
            "unit": "ns/iter",
            "extra": "iterations: 1142350\ncpu: 612.1919726878806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 617.0182859945088,
            "unit": "ns/iter",
            "extra": "iterations: 1137756\ncpu: 617.0177085420769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1117.0536793181786,
            "unit": "ns/iter",
            "extra": "iterations: 626964\ncpu: 1117.0359063678295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5552.3826192501765,
            "unit": "ns/iter",
            "extra": "iterations: 143354\ncpu: 5552.291530058456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24321.14502494781,
            "unit": "ns/iter",
            "extra": "iterations: 34070\ncpu: 24320.678015849673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19525.426211296734,
            "unit": "ns/iter",
            "extra": "iterations: 42310\ncpu: 19525.42661309379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19182.410537540003,
            "unit": "ns/iter",
            "extra": "iterations: 43141\ncpu: 19181.903525648482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19475.88400744291,
            "unit": "ns/iter",
            "extra": "iterations: 42451\ncpu: 19475.88749381639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 55567.0090419543,
            "unit": "ns/iter",
            "extra": "iterations: 15041\ncpu: 55566.258892361104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 517852.2737596997,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 517835.50508069195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 423726.206286854,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 423723.42829076626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 421666.06863220106,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 421660.60898984957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 427826.88829005085,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 427823.0769230771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 255736.22232116913,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 255732.94746215534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 422900.99075425975,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 422895.08515815163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2063149.5369128191,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2063123.2662192394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 818832.8116319631,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 818820.6597222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2909467.283018866,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2909428.301886794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5219.040691034586,
            "unit": "ns/iter",
            "extra": "iterations: 151483\ncpu: 5218.933477683955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23627.55214600874,
            "unit": "ns/iter",
            "extra": "iterations: 34902\ncpu: 23627.330811987777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18773.163230552243,
            "unit": "ns/iter",
            "extra": "iterations: 44042\ncpu: 18771.73834067484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18615.062432384344,
            "unit": "ns/iter",
            "extra": "iterations: 44368\ncpu: 18614.199423007598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18763.28143726238,
            "unit": "ns/iter",
            "extra": "iterations: 44056\ncpu: 18762.08688941349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 55133.85629290418,
            "unit": "ns/iter",
            "extra": "iterations: 15295\ncpu: 55022.26217718219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 523934.1934900367,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 523892.9475587686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 427568.67026498984,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 427540.6771344476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 421844.3496093738,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 421830.46874999866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 426418.41216879355,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 426389.89205102815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 251601.24725275405,
            "unit": "ns/iter",
            "extra": "iterations: 3458\ncpu: 251580.21978021995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 424596.4075875583,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 424572.5680933854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2051002.0315315344,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2050858.333333337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 816071.1442392196,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 816001.1433597165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5452.344120393461,
            "unit": "ns/iter",
            "extra": "iterations: 146719\ncpu: 5452.293840606862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24120.01945696054,
            "unit": "ns/iter",
            "extra": "iterations: 34178\ncpu: 24120.015799637124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19037.836684807113,
            "unit": "ns/iter",
            "extra": "iterations: 43364\ncpu: 19037.697168157774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18596.569214456984,
            "unit": "ns/iter",
            "extra": "iterations: 44326\ncpu: 18596.142219013665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18779.32442914574,
            "unit": "ns/iter",
            "extra": "iterations: 43575\ncpu: 18779.038439472097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 55378.43572039313,
            "unit": "ns/iter",
            "extra": "iterations: 15207\ncpu: 55377.86545669786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 519564.38902005943,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 519564.2857142888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 430953.33153770433,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 430949.51028403366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 424649.43471954163,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 424649.6131528063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 426732.64830919163,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 426733.42995168944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 255953.53694008096,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 255945.40430482873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 419400.40067339153,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 419400.62530062284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 366.6158863044453,
            "unit": "ns/iter",
            "extra": "iterations: 1906636\ncpu: 366.60878112025375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2120.2724481056434,
            "unit": "ns/iter",
            "extra": "iterations: 329226\ncpu: 2120.250830736325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1556.649387261454,
            "unit": "ns/iter",
            "extra": "iterations: 449784\ncpu: 1556.6189548761092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1528.1710085950692,
            "unit": "ns/iter",
            "extra": "iterations: 458053\ncpu: 1528.1725040551933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1277.3844422646073,
            "unit": "ns/iter",
            "extra": "iterations: 547419\ncpu: 1277.3676105506102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9761.800586877192,
            "unit": "ns/iter",
            "extra": "iterations: 71906\ncpu: 9761.812644285634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22410.12708569298,
            "unit": "ns/iter",
            "extra": "iterations: 32663\ncpu: 22409.70210942054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5391.814243821263,
            "unit": "ns/iter",
            "extra": "iterations: 129923\ncpu: 5391.81823079822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5360.479354601583,
            "unit": "ns/iter",
            "extra": "iterations: 130586\ncpu: 5360.484278559794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5390.799118692549,
            "unit": "ns/iter",
            "extra": "iterations: 130261\ncpu: 5390.608854530565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11169.588070904012,
            "unit": "ns/iter",
            "extra": "iterations: 62620\ncpu: 11169.487384222448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10126.706373821879,
            "unit": "ns/iter",
            "extra": "iterations: 67385\ncpu: 10126.356013949775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3699.867664445125,
            "unit": "ns/iter",
            "extra": "iterations: 188619\ncpu: 3699.769376361838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18919.267897332287,
            "unit": "ns/iter",
            "extra": "iterations: 37324\ncpu: 18918.950273282742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 14952.9783036219,
            "unit": "ns/iter",
            "extra": "iterations: 46782\ncpu: 14952.434697105718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 14556.836373424976,
            "unit": "ns/iter",
            "extra": "iterations: 48299\ncpu: 14555.750636658966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 15007.752684701509,
            "unit": "ns/iter",
            "extra": "iterations: 46467\ncpu: 15006.581014483632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30240.285664895684,
            "unit": "ns/iter",
            "extra": "iterations: 23139\ncpu: 30238.891049742924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 116403.74164997022,
            "unit": "ns/iter",
            "extra": "iterations: 5988\ncpu: 116392.36806947166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 101660.42009597266,
            "unit": "ns/iter",
            "extra": "iterations: 6877\ncpu: 101654.38417914862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 100946.46128430178,
            "unit": "ns/iter",
            "extra": "iterations: 6961\ncpu: 100942.47952880355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 100946.91267443493,
            "unit": "ns/iter",
            "extra": "iterations: 6951\ncpu: 100944.9287872249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 67032.45392231338,
            "unit": "ns/iter",
            "extra": "iterations: 10504\ncpu: 67029.41736481323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 100407.81681250579,
            "unit": "ns/iter",
            "extra": "iterations: 6971\ncpu: 100397.91995409555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3480.2855360035646,
            "unit": "ns/iter",
            "extra": "iterations: 200325\ncpu: 3480.0868588543776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17060.077440340676,
            "unit": "ns/iter",
            "extra": "iterations: 41193\ncpu: 17058.813390624637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13691.503174137293,
            "unit": "ns/iter",
            "extra": "iterations: 51195\ncpu: 13690.669010645626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13588.182517888854,
            "unit": "ns/iter",
            "extra": "iterations: 51710\ncpu: 13587.308064204086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13803.755572195858,
            "unit": "ns/iter",
            "extra": "iterations: 50743\ncpu: 13803.64188163872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29195.062353926325,
            "unit": "ns/iter",
            "extra": "iterations: 23960\ncpu: 29195.066777962904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 112704.96881495485,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 112705.0215896376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 98008.65973771548,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 98008.67745535633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 96410.34128516188,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 96408.34252619855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 96889.05423682978,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 96889.00082804271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 65769.30612436951,
            "unit": "ns/iter",
            "extra": "iterations: 10646\ncpu: 65767.49013714051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 96507.6575607079,
            "unit": "ns/iter",
            "extra": "iterations: 7248\ncpu: 96507.6986754967 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490831614,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 889.6463349056586,
            "unit": "ns/iter",
            "extra": "iterations: 782913\ncpu: 889.6365241093199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12774.500023098932,
            "unit": "ns/iter",
            "extra": "iterations: 64937\ncpu: 12774.31356545575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27529.638351361955,
            "unit": "ns/iter",
            "extra": "iterations: 30231\ncpu: 27528.156528067215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42080.13498158756,
            "unit": "ns/iter",
            "extra": "iterations: 19010\ncpu: 42077.88532351392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53968.4552024095,
            "unit": "ns/iter",
            "extra": "iterations: 14945\ncpu: 53965.63399130141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55314.30660000182,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55312.74000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67139.55829442332,
            "unit": "ns/iter",
            "extra": "iterations: 13063\ncpu: 67137.11245502565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77868.4674640732,
            "unit": "ns/iter",
            "extra": "iterations: 11203\ncpu: 77865.30393644559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89208.29252814867,
            "unit": "ns/iter",
            "extra": "iterations: 9770\ncpu: 89203.20368474929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 723.5249578965888,
            "unit": "ns/iter",
            "extra": "iterations: 964885\ncpu: 723.4755437176439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 602.6359955937457,
            "unit": "ns/iter",
            "extra": "iterations: 1134750\ncpu: 602.6088565763372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 590.9952338048308,
            "unit": "ns/iter",
            "extra": "iterations: 1194244\ncpu: 590.9881062831378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 598.5265408453756,
            "unit": "ns/iter",
            "extra": "iterations: 1175848\ncpu: 598.5093311380384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1131.1497614908135,
            "unit": "ns/iter",
            "extra": "iterations: 618844\ncpu: 1131.1160809509342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5498.854229550687,
            "unit": "ns/iter",
            "extra": "iterations: 146765\ncpu: 5498.636595918644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23795.687889594283,
            "unit": "ns/iter",
            "extra": "iterations: 34491\ncpu: 23794.766750746578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19208.223258968905,
            "unit": "ns/iter",
            "extra": "iterations: 42762\ncpu: 19207.47158692296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18865.0373265674,
            "unit": "ns/iter",
            "extra": "iterations: 43749\ncpu: 18864.803766943263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18878.9827817102,
            "unit": "ns/iter",
            "extra": "iterations: 41816\ncpu: 18877.99646068488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53879.22328558914,
            "unit": "ns/iter",
            "extra": "iterations: 15151\ncpu: 53874.67493894796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 503266.7068764455,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 503249.5920745911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 417567.9167065485,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 417547.29535663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 418921.22569778515,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 418881.08758421533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 416770.3413809764,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 416739.15982617025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 251978.51176983066,
            "unit": "ns/iter",
            "extra": "iterations: 3441\ncpu: 251973.17640220848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 410681.3657844775,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 410652.2684310006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2049112.1238938656,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2049040.707964601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 813883.9930975388,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 813836.5832614312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2684903.3684211383,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2684724.561403499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5439.05302869925,
            "unit": "ns/iter",
            "extra": "iterations: 146449\ncpu: 5438.818974523556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24576.034495085092,
            "unit": "ns/iter",
            "extra": "iterations: 33570\ncpu: 24573.824843610397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18868.911255908253,
            "unit": "ns/iter",
            "extra": "iterations: 43586\ncpu: 18868.675721561947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18703.34265988472,
            "unit": "ns/iter",
            "extra": "iterations: 44032\ncpu: 18702.464117005773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18789.356067175726,
            "unit": "ns/iter",
            "extra": "iterations: 43826\ncpu: 18788.776069000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 54906.398529983744,
            "unit": "ns/iter",
            "extra": "iterations: 15374\ncpu: 54903.928710810054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 520841.11980735726,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 520814.3287176386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 430418.68774704577,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 430387.3517786539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 425175.1147699899,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 425136.8038740916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 425222.2233576493,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 425199.0267639906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 250627.15285345842,
            "unit": "ns/iter",
            "extra": "iterations: 3487\ncpu: 250607.68568970438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 421475.1115984482,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 421442.3001949307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2057162.2533631881,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2057133.8565022335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 803523.4397590338,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 803484.9397590312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5432.058642895754,
            "unit": "ns/iter",
            "extra": "iterations: 147520\ncpu: 5431.820092190896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23904.080213281,
            "unit": "ns/iter",
            "extra": "iterations: 34321\ncpu: 23903.18172547437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18816.409021424435,
            "unit": "ns/iter",
            "extra": "iterations: 43829\ncpu: 18815.96887905276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18399.708340766414,
            "unit": "ns/iter",
            "extra": "iterations: 44840\ncpu: 18398.603925066833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18727.14745411943,
            "unit": "ns/iter",
            "extra": "iterations: 43973\ncpu: 18726.391194596745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 54150.84882817481,
            "unit": "ns/iter",
            "extra": "iterations: 15446\ncpu: 54146.60106176347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 517280.6969697087,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 517243.01841948845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 424061.9723435207,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 424056.8170790887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 421390.63084338215,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 421361.97590361326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 425716.10179351555,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 425706.2530295706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 253481.43882591746,
            "unit": "ns/iter",
            "extra": "iterations: 3441\ncpu: 253471.0549258934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 422300.15154439426,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 422276.97876447794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 360.34744576969433,
            "unit": "ns/iter",
            "extra": "iterations: 1933283\ncpu: 360.34258822945293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1958.0772134600093,
            "unit": "ns/iter",
            "extra": "iterations: 357088\ncpu: 1957.921016668152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1581.0719644107328,
            "unit": "ns/iter",
            "extra": "iterations: 442830\ncpu: 1581.0123523699883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1515.4268225820608,
            "unit": "ns/iter",
            "extra": "iterations: 461447\ncpu: 1515.4100037490693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1268.5767746451593,
            "unit": "ns/iter",
            "extra": "iterations: 551406\ncpu: 1268.5485830767022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 9658.362556651562,
            "unit": "ns/iter",
            "extra": "iterations: 62222\ncpu: 9658.297708206075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21999.216023477326,
            "unit": "ns/iter",
            "extra": "iterations: 31691\ncpu: 21997.81325928489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5310.866823436964,
            "unit": "ns/iter",
            "extra": "iterations: 132253\ncpu: 5310.653066471031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5302.931160797185,
            "unit": "ns/iter",
            "extra": "iterations: 131582\ncpu: 5302.867413476032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5340.177918494202,
            "unit": "ns/iter",
            "extra": "iterations: 131549\ncpu: 5340.006385453321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11034.297911935444,
            "unit": "ns/iter",
            "extra": "iterations: 63408\ncpu: 11034.276431995908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10021.183605005876,
            "unit": "ns/iter",
            "extra": "iterations: 69753\ncpu: 10020.525282066694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3559.094748086156,
            "unit": "ns/iter",
            "extra": "iterations: 196595\ncpu: 3559.0055698262763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17773.597484764377,
            "unit": "ns/iter",
            "extra": "iterations: 38724\ncpu: 17771.477636607753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13933.046218070001,
            "unit": "ns/iter",
            "extra": "iterations: 50305\ncpu: 13932.72438127424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13760.965661097418,
            "unit": "ns/iter",
            "extra": "iterations: 50817\ncpu: 13759.682783320695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14072.514125879392,
            "unit": "ns/iter",
            "extra": "iterations: 49873\ncpu: 14071.858520642481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29813.925507419015,
            "unit": "ns/iter",
            "extra": "iterations: 23452\ncpu: 29813.742964352823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 110091.7185534616,
            "unit": "ns/iter",
            "extra": "iterations: 6360\ncpu: 110079.575471698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96097.03925310195,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 96088.3194766251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95282.14724344648,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 95273.19868995778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96341.87310683551,
            "unit": "ns/iter",
            "extra": "iterations: 7329\ncpu: 96335.17533087736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61218.21814840864,
            "unit": "ns/iter",
            "extra": "iterations: 11428\ncpu: 61217.19460973002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 94133.76404189008,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 94126.68298653484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3273.535922230412,
            "unit": "ns/iter",
            "extra": "iterations: 214171\ncpu: 3273.4053630043527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16296.052271180553,
            "unit": "ns/iter",
            "extra": "iterations: 42643\ncpu: 16294.657974344884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13093.215773452246,
            "unit": "ns/iter",
            "extra": "iterations: 54205\ncpu: 13092.105894290193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13118.813953055058,
            "unit": "ns/iter",
            "extra": "iterations: 53594\ncpu: 13117.796768294998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13588.184356674177,
            "unit": "ns/iter",
            "extra": "iterations: 51498\ncpu: 13586.950949551483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28816.787244541203,
            "unit": "ns/iter",
            "extra": "iterations: 24319\ncpu: 28814.66754389539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 109159.95857343648,
            "unit": "ns/iter",
            "extra": "iterations: 6421\ncpu: 109152.60862794008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94082.30332972175,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 94079.30427720748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 92662.04764411548,
            "unit": "ns/iter",
            "extra": "iterations: 7598\ncpu: 92653.17188733898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91879.955072656,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 91870.21730436028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61110.81760514475,
            "unit": "ns/iter",
            "extra": "iterations: 11508\ncpu: 61103.9363920752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 93749.04915842573,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 93743.60138925862 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}