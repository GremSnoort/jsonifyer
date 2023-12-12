window.BENCHMARK_DATA = {
  "lastUpdate": 1702409126568,
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
      }
    ]
  }
}