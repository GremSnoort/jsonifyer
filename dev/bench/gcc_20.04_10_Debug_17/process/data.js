window.BENCHMARK_DATA = {
  "lastUpdate": 1702490741450,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 20.04 Debug c++-17": [
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
        "date": 1702397927633,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14814.904571428315,
            "unit": "ns/iter",
            "extra": "iterations: 47250\ncpu: 14814.421164021163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145943.6503701155,
            "unit": "ns/iter",
            "extra": "iterations: 5809\ncpu: 145944.44826992595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 277568.0937098849,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 277561.64955070603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 408316.4526613159,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 408321.57324540726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 543689.4083023606,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 543676.1462205696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 543334.1240000118,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543341.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 648549.9870036324,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 648530.9025270761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 754626.0814332033,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 754612.7035830611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 861239.7569572896,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 861207.5139146576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11736.762297188237,
            "unit": "ns/iter",
            "extra": "iterations: 58367\ncpu: 11736.817037024342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9899.995446368046,
            "unit": "ns/iter",
            "extra": "iterations: 71152\ncpu: 9899.852428603535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9908.398755784247,
            "unit": "ns/iter",
            "extra": "iterations: 70888\ncpu: 9908.442895835677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9909.033574365272,
            "unit": "ns/iter",
            "extra": "iterations: 70530\ncpu: 9908.902594640576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16009.62902009246,
            "unit": "ns/iter",
            "extra": "iterations: 43749\ncpu: 16009.266497519957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63912.876032441854,
            "unit": "ns/iter",
            "extra": "iterations: 13439\ncpu: 63911.58568345865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 333731.1929484685,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 333708.3688492836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 270550.6959189895,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 270540.19637925783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 261690.1109748554,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 261674.6167995093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 261521.6968769073,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 261502.93937538212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 571593.1516927138,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 571585.4817708334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4565074.394088746,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4564752.709359615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3731925.3080002,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3731803.600000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3740811.477911508,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3740697.590361444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3718140.051999853,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717969.5999999894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2167115.992990661,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2166775.934579441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3630855.839215727,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3630715.2941176505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14512035.783783436,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14511214.864864862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6497617.559999753,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6497102.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17781393.779660765,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 17779986.440677967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 70681.97966270147,
            "unit": "ns/iter",
            "extra": "iterations: 12096\ncpu: 70678.68716931214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 359034.3572920967,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 359010.6142916844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 289952.1420358512,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 289952.9252620891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284985.2616047867,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 284980.63660477503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286984.86822741886,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 286975.98662207427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 575591.061048413,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 575562.375580625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4627736.034825857,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4627456.218905479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3769861.7620967687,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3769789.1129032406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3790317.795081875,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3790114.7540983586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3772011.0850202274,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3771823.0769230975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2195931.6894117366,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2195881.176470577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3676967.0000000685,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 3676816.1434977553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14722624.438356327,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14721947.945205538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6511548.249999919,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6511263.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 61505.38909406704,
            "unit": "ns/iter",
            "extra": "iterations: 13809\ncpu: 61503.85980157874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 320303.88474448666,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 320284.6325997763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261346.25528006713,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261332.17018671616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 257537.18096392386,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 257531.94907547717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257056.92878604715,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 257060.72716346104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556355.9164524277,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 556317.6092544976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4585562.5172413755,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4585454.679802973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3747149.112449593,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3747032.931726919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3748588.7269078293,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3748473.493975913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3798931.0479999855,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3798616.7999999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2173158.643192481,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2173001.408450714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3649116.5333332526,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3648975.6862745066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5720.472811878271,
            "unit": "ns/iter",
            "extra": "iterations: 121634\ncpu: 5720.144860811928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37475.676780650654,
            "unit": "ns/iter",
            "extra": "iterations: 18687\ncpu: 37474.83277144538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30877.551830477554,
            "unit": "ns/iter",
            "extra": "iterations: 22699\ncpu: 30876.457112647993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30873.422564672448,
            "unit": "ns/iter",
            "extra": "iterations: 23426\ncpu: 30871.173055579337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23269.359267888012,
            "unit": "ns/iter",
            "extra": "iterations: 30050\ncpu: 23267.946755407567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 147932.44131951785,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 147921.20955804604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 302046.4410876008,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 302043.97928356094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74243.6373381416,
            "unit": "ns/iter",
            "extra": "iterations: 9422\ncpu: 74242.88898323089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74878.5516025596,
            "unit": "ns/iter",
            "extra": "iterations: 9360\ncpu: 74869.8717948722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74241.56264574634,
            "unit": "ns/iter",
            "extra": "iterations: 9434\ncpu: 74240.20563917732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 154601.9432498311,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 154601.86211482892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 147521.83459596365,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 147511.21632996656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42252.15009946401,
            "unit": "ns/iter",
            "extra": "iterations: 16589\ncpu: 42251.81746940741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209129.689737476,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 209127.02863962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170818.49646082605,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170806.07761776933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172683.9434986359,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 172675.1048605959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 173213.9903940819,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 173207.2660098517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 295241.5658227867,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 295221.13924050453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1274925.3663003778,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1274825.09157507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1073389.7243491265,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1073276.4165390565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1082595.5208655433,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1082552.5502318414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1075908.771739086,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1075911.4906832282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 676820.5473887972,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676781.2379110251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1063910.31562967,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1063880.5766312606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43730.91222159738,
            "unit": "ns/iter",
            "extra": "iterations: 16029\ncpu: 43729.15964813805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214465.9926515553,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 214459.70606246183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176902.4491033218,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 176888.53245769063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178823.68550242382,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 178815.0345180263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178034.72741156223,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 178024.4082463728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296444.45423583844,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 296425.84078331565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1275851.670932335,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1275778.4277879298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1073475.0091602693,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1073451.2977099272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1079196.600924553,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1079143.913713424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1078688.6466049778,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1078650.7716049198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 680274.420796846,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 680246.0641399439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1067228.2905198701,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1067177.217125375 ns\nthreads: 1"
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
        "date": 1702397927633,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14814.904571428315,
            "unit": "ns/iter",
            "extra": "iterations: 47250\ncpu: 14814.421164021163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145943.6503701155,
            "unit": "ns/iter",
            "extra": "iterations: 5809\ncpu: 145944.44826992595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 277568.0937098849,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 277561.64955070603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 408316.4526613159,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 408321.57324540726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 543689.4083023606,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 543676.1462205696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 543334.1240000118,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543341.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 648549.9870036324,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 648530.9025270761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 754626.0814332033,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 754612.7035830611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 861239.7569572896,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 861207.5139146576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11736.762297188237,
            "unit": "ns/iter",
            "extra": "iterations: 58367\ncpu: 11736.817037024342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9899.995446368046,
            "unit": "ns/iter",
            "extra": "iterations: 71152\ncpu: 9899.852428603535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9908.398755784247,
            "unit": "ns/iter",
            "extra": "iterations: 70888\ncpu: 9908.442895835677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9909.033574365272,
            "unit": "ns/iter",
            "extra": "iterations: 70530\ncpu: 9908.902594640576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16009.62902009246,
            "unit": "ns/iter",
            "extra": "iterations: 43749\ncpu: 16009.266497519957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63912.876032441854,
            "unit": "ns/iter",
            "extra": "iterations: 13439\ncpu: 63911.58568345865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 333731.1929484685,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 333708.3688492836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 270550.6959189895,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 270540.19637925783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 261690.1109748554,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 261674.6167995093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 261521.6968769073,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 261502.93937538212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 571593.1516927138,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 571585.4817708334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4565074.394088746,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4564752.709359615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3731925.3080002,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3731803.600000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3740811.477911508,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3740697.590361444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3718140.051999853,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717969.5999999894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2167115.992990661,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2166775.934579441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3630855.839215727,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3630715.2941176505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14512035.783783436,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14511214.864864862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6497617.559999753,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6497102.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17781393.779660765,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 17779986.440677967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 70681.97966270147,
            "unit": "ns/iter",
            "extra": "iterations: 12096\ncpu: 70678.68716931214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 359034.3572920967,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 359010.6142916844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 289952.1420358512,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 289952.9252620891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 284985.2616047867,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 284980.63660477503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286984.86822741886,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 286975.98662207427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 575591.061048413,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 575562.375580625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4627736.034825857,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4627456.218905479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3769861.7620967687,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3769789.1129032406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3790317.795081875,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3790114.7540983586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3772011.0850202274,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3771823.0769230975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2195931.6894117366,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2195881.176470577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3676967.0000000685,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 3676816.1434977553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14722624.438356327,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14721947.945205538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6511548.249999919,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6511263.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 61505.38909406704,
            "unit": "ns/iter",
            "extra": "iterations: 13809\ncpu: 61503.85980157874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 320303.88474448666,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 320284.6325997763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 261346.25528006713,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261332.17018671616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 257537.18096392386,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 257531.94907547717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257056.92878604715,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 257060.72716346104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556355.9164524277,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 556317.6092544976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4585562.5172413755,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4585454.679802973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3747149.112449593,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3747032.931726919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3748588.7269078293,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3748473.493975913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3798931.0479999855,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3798616.7999999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2173158.643192481,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2173001.408450714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3649116.5333332526,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3648975.6862745066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5720.472811878271,
            "unit": "ns/iter",
            "extra": "iterations: 121634\ncpu: 5720.144860811928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37475.676780650654,
            "unit": "ns/iter",
            "extra": "iterations: 18687\ncpu: 37474.83277144538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30877.551830477554,
            "unit": "ns/iter",
            "extra": "iterations: 22699\ncpu: 30876.457112647993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30873.422564672448,
            "unit": "ns/iter",
            "extra": "iterations: 23426\ncpu: 30871.173055579337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23269.359267888012,
            "unit": "ns/iter",
            "extra": "iterations: 30050\ncpu: 23267.946755407567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 147932.44131951785,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 147921.20955804604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 302046.4410876008,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 302043.97928356094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74243.6373381416,
            "unit": "ns/iter",
            "extra": "iterations: 9422\ncpu: 74242.88898323089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74878.5516025596,
            "unit": "ns/iter",
            "extra": "iterations: 9360\ncpu: 74869.8717948722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74241.56264574634,
            "unit": "ns/iter",
            "extra": "iterations: 9434\ncpu: 74240.20563917732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 154601.9432498311,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 154601.86211482892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 147521.83459596365,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 147511.21632996656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42252.15009946401,
            "unit": "ns/iter",
            "extra": "iterations: 16589\ncpu: 42251.81746940741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209129.689737476,
            "unit": "ns/iter",
            "extra": "iterations: 3352\ncpu: 209127.02863962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170818.49646082605,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170806.07761776933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172683.9434986359,
            "unit": "ns/iter",
            "extra": "iterations: 4053\ncpu: 172675.1048605959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 173213.9903940819,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 173207.2660098517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 295241.5658227867,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 295221.13924050453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1274925.3663003778,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1274825.09157507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1073389.7243491265,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1073276.4165390565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1082595.5208655433,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1082552.5502318414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1075908.771739086,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1075911.4906832282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 676820.5473887972,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676781.2379110251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1063910.31562967,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1063880.5766312606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43730.91222159738,
            "unit": "ns/iter",
            "extra": "iterations: 16029\ncpu: 43729.15964813805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214465.9926515553,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 214459.70606246183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176902.4491033218,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 176888.53245769063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178823.68550242382,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 178815.0345180263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178034.72741156223,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 178024.4082463728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296444.45423583844,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 296425.84078331565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1275851.670932335,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1275778.4277879298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1073475.0091602693,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1073451.2977099272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1079196.600924553,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1079143.913713424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1078688.6466049778,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1078650.7716049198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 680274.420796846,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 680246.0641399439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1067228.2905198701,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1067177.217125375 ns\nthreads: 1"
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
        "date": 1702398825635,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14796.894279422208,
            "unit": "ns/iter",
            "extra": "iterations: 42688\ncpu: 14796.289355322338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145569.02747253142,
            "unit": "ns/iter",
            "extra": "iterations: 5824\ncpu: 145564.85233516485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 274985.3496659377,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 274966.01972637617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 411368.1348154977,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 411353.1220435193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 538127.0733210212,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 538100.0616142948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 537664.1590000304,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537663.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 641033.4420000367,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640988.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 747695.2830645146,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 747670.3225806449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 849517.1092745708,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 849336.0881542702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11845.38741884677,
            "unit": "ns/iter",
            "extra": "iterations: 58993\ncpu: 11845.010424965662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9846.312672876375,
            "unit": "ns/iter",
            "extra": "iterations: 70860\ncpu: 9846.205193338988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9620.93463143249,
            "unit": "ns/iter",
            "extra": "iterations: 72619\ncpu: 9620.522177391606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9694.050579615932,
            "unit": "ns/iter",
            "extra": "iterations: 72203\ncpu: 9693.9102253369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15857.44657863108,
            "unit": "ns/iter",
            "extra": "iterations: 44149\ncpu: 15856.880110534774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62742.46710140949,
            "unit": "ns/iter",
            "extra": "iterations: 13648\ncpu: 62741.11225087916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 324839.9342105141,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 324828.6466165415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 260347.86341463146,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 260341.00609756066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 259731.20042513433,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 259715.69996963264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 259856.64707673842,
            "unit": "ns/iter",
            "extra": "iterations: 3284\ncpu: 259842.23507917093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 557446.9102482449,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 557411.58497772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4505845.768115938,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4505533.816425119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3686438.577075102,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3686322.9249011828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3663707.6259842967,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3663654.3307086607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3672335.8385828077,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3672218.110236219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2135001.0321839363,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2134935.402298855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3577838.5884616277,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3577726.5384615394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14233471.756756289,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14233087.83783782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6162494.25000035,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6162258.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17415734.557376992,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 17415216.393442616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69271.2908295535,
            "unit": "ns/iter",
            "extra": "iterations: 12344\ncpu: 69269.87200259221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 358303.0275804406,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 358280.0250731307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 288601.30104272364,
            "unit": "ns/iter",
            "extra": "iterations: 2973\ncpu: 288575.00840901496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 301042.6699094207,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 300973.666554847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284643.4765546982,
            "unit": "ns/iter",
            "extra": "iterations: 3007\ncpu: 284638.74293315614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 572790.8939393983,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 572773.4519104044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4605048.436274347,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4604949.509803915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3731130.8964142906,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3731064.5418326613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3728878.420000001,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3728773.600000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3706259.924603235,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3706054.761904751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2175359.163934349,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2175306.323185014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3616537.832684838,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3616429.961089471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14590016.38356191,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14589091.780821895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6309715.330000359,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6309547.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 61414.971740850546,
            "unit": "ns/iter",
            "extra": "iterations: 13907\ncpu: 61412.7705472063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 316134.2453107753,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 316127.03199705994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 258960.47701148986,
            "unit": "ns/iter",
            "extra": "iterations: 3306\ncpu: 258941.71203871758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 257160.55498797426,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 257142.9086538474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257161.7439831438,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 257147.23225030207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 550644.5114068415,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 550599.8098859293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4534969.262135967,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4534728.640776702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3690159.9486165773,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3689973.1225296515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3663585.6784314187,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3663349.4117647083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3670559.4173228056,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3670375.590551188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2141439.8896551533,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2141316.781609199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3583147.4384613456,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3582951.9230769225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5788.725771454172,
            "unit": "ns/iter",
            "extra": "iterations: 120746\ncpu: 5788.409553939685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37937.22937413054,
            "unit": "ns/iter",
            "extra": "iterations: 17975\ncpu: 37937.101529902546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28768.08383607119,
            "unit": "ns/iter",
            "extra": "iterations: 24035\ncpu: 28767.364260453516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30435.83783900977,
            "unit": "ns/iter",
            "extra": "iterations: 23045\ncpu: 30435.786504664764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23422.247727958096,
            "unit": "ns/iter",
            "extra": "iterations: 29819\ncpu: 23421.912203628686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 145626.04681295823,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 145619.39393939546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 285719.227457345,
            "unit": "ns/iter",
            "extra": "iterations: 2462\ncpu: 285705.76766855863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74007.6690632212,
            "unit": "ns/iter",
            "extra": "iterations: 9458\ncpu: 74002.36836540466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76514.45184717442,
            "unit": "ns/iter",
            "extra": "iterations: 9501\ncpu: 76382.82286075164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73902.79629044006,
            "unit": "ns/iter",
            "extra": "iterations: 9489\ncpu: 73901.06439034644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 153575.14216762202,
            "unit": "ns/iter",
            "extra": "iterations: 4558\ncpu: 153572.2685388351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 144540.2862445885,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 144534.68756444514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43619.61996253853,
            "unit": "ns/iter",
            "extra": "iterations: 16551\ncpu: 43618.38559603632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 205467.29023746157,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 205455.79009088472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169850.68013632495,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 169848.14995131656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 170921.21150551422,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 170916.54834761197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171293.27628361326,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 171285.77017114818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 289962.0004133733,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 289954.898718477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1260308.421902971,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1260280.2513465176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1055802.2469878946,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1055801.8072289075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1090030.7579424465,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1090012.1028744422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1055665.8642533855,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1055624.132730005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 667249.7602283724,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 667203.6156041797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1046423.6062874673,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1046371.4071856225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43575.61427325826,
            "unit": "ns/iter",
            "extra": "iterations: 16058\ncpu: 43572.649146842654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212295.3667578324,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 212282.8319659664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178475.75088697608,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 178461.80942726805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177386.12187736563,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 177378.0721675499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178571.8546378599,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 178563.53240152777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 292573.52384936734,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 292559.8744769858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1257819.427289008,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1257743.6265708988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1051400.380451137,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1051372.7819548727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1051616.39248122,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1051599.248120283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1079187.9939939545,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1079162.0120120205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 671925.9261744752,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 671916.2032598293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1048526.4820359278,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1048513.3233533 ns\nthreads: 1"
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
        "date": 1702409138537,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14518.817164178821,
            "unit": "ns/iter",
            "extra": "iterations: 47972\ncpu: 14518.396147752856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 143169.61851405236,
            "unit": "ns/iter",
            "extra": "iterations: 5801\ncpu: 143161.45492156528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 275727.5326460395,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 275718.15057794435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 400988.19252077193,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 400980.8864265929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 532111.779733013,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 532083.9199029126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 531840.9660000043,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531831.7000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 636147.799000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636117.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 737339.3179282953,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 737320.3984063739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 841556.3916591238,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 841533.9981867636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11537.998485944996,
            "unit": "ns/iter",
            "extra": "iterations: 60764\ncpu: 11537.709828187757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9385.368566299401,
            "unit": "ns/iter",
            "extra": "iterations: 74646\ncpu: 9385.316024971195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9420.135071410965,
            "unit": "ns/iter",
            "extra": "iterations: 73798\ncpu: 9419.86097184206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9457.439667654302,
            "unit": "ns/iter",
            "extra": "iterations: 73899\ncpu: 9457.31741972151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15855.22982364763,
            "unit": "ns/iter",
            "extra": "iterations: 44173\ncpu: 15855.015507210312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61582.03464474548,
            "unit": "ns/iter",
            "extra": "iterations: 13624\ncpu: 61580.33617146201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 336119.684494039,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 336111.6198537898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 260188.916565537,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 260184.83009708748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 262605.47812787606,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 262590.9758335877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 258352.23283132998,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 258340.8433734937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 578635.6543046397,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 578616.6225165548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4496643.038647092,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4496606.280193239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3716707.410852889,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3716628.682170539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3626492.8326847176,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3626197.665369658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3639677.5254903496,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3639422.7450980376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2132565.803695219,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2132464.6651270166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3535070.9846744165,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3534726.0536398427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14187653.763158143,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14187461.842105245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6308243.9200002225,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6308207.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17442474.57377074,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 17442150.819672145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66247.67750154577,
            "unit": "ns/iter",
            "extra": "iterations: 12952\ncpu: 66247.31315626929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 361725.0788814738,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 361724.1235392318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 289333.78057795146,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 289328.79704300954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 286312.4482758618,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 286313.7267904528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286651.6852284251,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 286649.78326108743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 598878.1095983485,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 598866.0313138199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4564089.324742385,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4564077.31958765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3674397.338582637,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3674381.4960630117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3670312.2125983355,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3670270.4724409543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3705036.1785715166,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3704990.4761904906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2181796.4285714156,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2181788.7587821945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3583800.969111966,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3583788.803088822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14569637.202702928,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14569318.918918973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6432312.609999826,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6432219.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60256.899699999165,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60254.53999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 324134.9177310228,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 324129.1885800136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 259977.2898944196,
            "unit": "ns/iter",
            "extra": "iterations: 3315\ncpu: 259957.49622925892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 259119.0395920915,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 259115.71685663008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 255139.90106633824,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 255125.94786729763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 557949.2141025756,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 557935.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4508957.632850065,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4508759.420289858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3624640.08527124,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3624372.0930232294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3626195.309917338,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3625938.4297520667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3641349.9533075793,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3640973.151750948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2136721.689655117,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2136641.8390804697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3540507.353612203,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3540382.8897338444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5660.966601640062,
            "unit": "ns/iter",
            "extra": "iterations: 123539\ncpu: 5660.76542630261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36332.83834820462,
            "unit": "ns/iter",
            "extra": "iterations: 19276\ncpu: 36330.483502801166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29220.287395597177,
            "unit": "ns/iter",
            "extra": "iterations: 23706\ncpu: 29218.548046907694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30243.33140213551,
            "unit": "ns/iter",
            "extra": "iterations: 23129\ncpu: 30241.791690086106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23082.459443417552,
            "unit": "ns/iter",
            "extra": "iterations: 30328\ncpu: 23080.849380110747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 148012.02941799318,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 148002.13756613867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 292937.0029362409,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 292921.0989932909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72460.24043545911,
            "unit": "ns/iter",
            "extra": "iterations: 9645\ncpu: 72453.90357698232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72433.71912556764,
            "unit": "ns/iter",
            "extra": "iterations: 9652\ncpu: 72428.33609614699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72696.93880303063,
            "unit": "ns/iter",
            "extra": "iterations: 9641\ncpu: 72693.85955813668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144128.95720164513,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 144121.04938271578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 142058.98153034505,
            "unit": "ns/iter",
            "extra": "iterations: 4927\ncpu: 142052.91252283368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41120.258170701614,
            "unit": "ns/iter",
            "extra": "iterations: 17012\ncpu: 41118.11074535588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 202401.94654724933,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 202386.9979774616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165134.515687664,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 165118.73083274343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165764.2532005595,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 165755.50023707995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 165638.21474283093,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 165622.7305048586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 283984.5951219638,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 283968.3333333348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1242461.5577265003,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1242330.905861453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1036680.3397340929,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1036672.0827178647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1038640.448888836,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1038612.2962962983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1036902.8254437961,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1036852.9585798746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 662616.6552706833,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 662581.7663817755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1032268.9706314427,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1032170.9251101506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42736.46095086775,
            "unit": "ns/iter",
            "extra": "iterations: 16364\ncpu: 42735.02811048619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209176.42022070012,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 209163.91291380898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 171434.8333333295,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 171427.81862744843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171143.82999511645,
            "unit": "ns/iter",
            "extra": "iterations: 4094\ncpu: 171125.3786028322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172143.6330387899,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 172141.4825724099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 289659.0334849298,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 289643.94377841585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1247841.5533808216,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1247827.5800711883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1040382.9821693876,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1040304.160475488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1041692.1249999959,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1041627.2321428552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1044200.2492537206,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1044164.1791044784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 667501.236917245,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 667455.3758325416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1040410.3842730359,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1040399.4065281902 ns\nthreads: 1"
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
        "date": 1702412528106,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13739.096265608367,
            "unit": "ns/iter",
            "extra": "iterations: 50932\ncpu: 13738.27259875913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 111970.04769454546,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 111962.253930506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 210307.0702009203,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 210300.6051803437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 307291.4130276593,
            "unit": "ns/iter",
            "extra": "iterations: 2748\ncpu: 307275.5822416301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 404210.72799255996,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 404194.2710759199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 511783.39988459257,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 511776.28390075016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 596914.3112947621,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 596879.6831955923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 558162.4719999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558163.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 639256.2630000499,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639235.6999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10900.007924251895,
            "unit": "ns/iter",
            "extra": "iterations: 64107\ncpu: 10899.318327171759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9161.896386420758,
            "unit": "ns/iter",
            "extra": "iterations: 76766\ncpu: 9161.893286090204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9100.397297824118,
            "unit": "ns/iter",
            "extra": "iterations: 76975\ncpu: 9100.077947385504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9074.15224513135,
            "unit": "ns/iter",
            "extra": "iterations: 76922\ncpu: 9074.006136085907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14978.110559931527,
            "unit": "ns/iter",
            "extra": "iterations: 46970\ncpu: 14977.690014903123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56488.18019883922,
            "unit": "ns/iter",
            "extra": "iterations: 14484\ncpu: 56487.66915216792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247615.19936435422,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 247609.62149667708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196208.10672481847,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 196208.010098692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 195054.05958430146,
            "unit": "ns/iter",
            "extra": "iterations: 4330\ncpu: 195045.7736720559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193222.76436001406,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 193222.68204432342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 455452.9324045346,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 455428.84416924743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3495945.486792418,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3495821.132075471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2812913.573170722,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2812811.890243906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2821921.148484886,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2821737.272727276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2816091.361701964,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2816016.109422495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1647315.7935942565,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1647242.348754454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2748824.2878338383,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2748738.8724035565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10549300.801980086,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10548795.049504958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6227462.610738239,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6227101.342281872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13527942.8987337,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13527574.683544299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52059.54529999986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52057.80000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 279777.6706606126,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 279772.99222797994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 220750.23341901254,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 220740.23136246626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 223686.2438770189,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 223680.7451797812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 218743.7466768947,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 218729.08997954926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 465079.5911513646,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 465078.9978678035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3542440.984732949,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3542237.0229007723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2860767.8707693103,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2860724.9230769034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2863719.7244581017,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2863552.3219814287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2858985.39570544,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2858815.030674848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1673070.9205775866,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1673020.5776173263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2777225.641791031,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2777062.0895522465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10829966.469387677,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10829425.510204123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6334597.0544216875,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6334287.074829894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53918.51696475645,
            "unit": "ns/iter",
            "extra": "iterations: 15208\ncpu: 53915.866649132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 249728.45702672045,
            "unit": "ns/iter",
            "extra": "iterations: 3444\ncpu: 249725.69686411123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194723.18328411784,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 194714.4674085851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193175.30859198637,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 193175.07872244724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 190357.48445825413,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 190350.57726465436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 437648.6099397745,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 437634.8895582314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3503697.382575755,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3503445.4545454523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2823586.8060607337,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2823523.6363636404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2819089.648484709,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2819048.4848484704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2816468.1842901856,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2816129.3051359644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1674752.4310953761,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1674613.0742049483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2746460.2529762704,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2746455.9523809617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5694.495515311233,
            "unit": "ns/iter",
            "extra": "iterations: 122751\ncpu: 5694.414709452508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31477.93115550829,
            "unit": "ns/iter",
            "extra": "iterations: 22224\ncpu: 31477.587293016335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24586.74363744795,
            "unit": "ns/iter",
            "extra": "iterations: 28487\ncpu: 24586.00063186709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24377.543700458176,
            "unit": "ns/iter",
            "extra": "iterations: 28764\ncpu: 24377.148518982107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19696.997631868315,
            "unit": "ns/iter",
            "extra": "iterations: 35471\ncpu: 19696.295565391578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 123844.06771570552,
            "unit": "ns/iter",
            "extra": "iterations: 5656\ncpu: 123840.34653465309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 234212.8230383839,
            "unit": "ns/iter",
            "extra": "iterations: 2995\ncpu: 234204.7078464079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 58933.72967274008,
            "unit": "ns/iter",
            "extra": "iterations: 11856\ncpu: 58933.704453441256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 59069.19863244691,
            "unit": "ns/iter",
            "extra": "iterations: 11846\ncpu: 59069.263886544424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 59470.07309196152,
            "unit": "ns/iter",
            "extra": "iterations: 11766\ncpu: 59469.0973992855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 114899.31301212868,
            "unit": "ns/iter",
            "extra": "iterations: 6102\ncpu: 114898.09898393856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111737.98054226121,
            "unit": "ns/iter",
            "extra": "iterations: 6270\ncpu: 111735.74162679471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 36752.32138728282,
            "unit": "ns/iter",
            "extra": "iterations: 19030\ncpu: 36752.30688386746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 177512.26800203382,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 177509.30527383447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 144795.61956972306,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 144794.08357468058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 144597.79748402425,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 144597.73149103054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 143858.69788457474,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 143856.1100842069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 247239.6748855337,
            "unit": "ns/iter",
            "extra": "iterations: 2839\ncpu: 247239.76752377299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1005803.8388488778,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1005786.1870503691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 838596.8011975684,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 838588.0239520947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 837565.9575757377,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 837565.6969696943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 842137.9002403985,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 842137.6201923112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 543707.1165501113,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 543706.6045066039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 829375.6409952259,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 829358.1753554478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38130.38921797656,
            "unit": "ns/iter",
            "extra": "iterations: 18401\ncpu: 38130.38421824942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 179381.9941025568,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 179376.07692307833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 149098.91125772198,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 149095.23302830348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 150688.0256079116,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 150686.14159672853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 150014.18089911997,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 150012.36825123618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 250147.82458020683,
            "unit": "ns/iter",
            "extra": "iterations: 2799\ncpu: 250147.44551625324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1000866.9070100349,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1000867.2389127195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 846935.5066344715,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 846934.6200241314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 838717.8463385353,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 838703.9615846365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 839671.0287770088,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 839662.2302158198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 548660.7496075184,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 548660.8320251215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 834098.7809523611,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 834085.238095248 ns\nthreads: 1"
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
        "date": 1702416007147,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13688.01258390929,
            "unit": "ns/iter",
            "extra": "iterations: 51097\ncpu: 13687.703779086834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 112285.19031786476,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 112280.80861816731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 212533.98779296633,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 212531.6162109375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 309769.8571428523,
            "unit": "ns/iter",
            "extra": "iterations: 2786\ncpu: 309751.1127063891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 408424.99248826265,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 408404.0845070425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 506356.66394875373,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 506323.0634828189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 612312.5496872868,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 612281.0979847116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 566679.162000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566679.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 645376.0819999842,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645312.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10931.100802508434,
            "unit": "ns/iter",
            "extra": "iterations: 64423\ncpu: 10929.87442373064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9114.017292965356,
            "unit": "ns/iter",
            "extra": "iterations: 75869\ncpu: 9113.910819966002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9129.527085675492,
            "unit": "ns/iter",
            "extra": "iterations: 76498\ncpu: 9128.9837642814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9163.375871495828,
            "unit": "ns/iter",
            "extra": "iterations: 76449\ncpu: 9162.878520320743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15186.399400676155,
            "unit": "ns/iter",
            "extra": "iterations: 47053\ncpu: 15185.282553716012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55985.30781367888,
            "unit": "ns/iter",
            "extra": "iterations: 14577\ncpu: 55984.729368182816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247018.5900549284,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 247001.50332466062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195649.02200825477,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 195644.79596515378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 194268.15255009223,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 194258.1511839712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193268.9072025326,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 193265.38722059128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 450472.7455288748,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 450450.5365355135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3503361.5056603733,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3503106.415094331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2849122.144171774,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2848968.7116564377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2835640.226299647,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2835424.4648317983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2830998.3119266336,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2830862.385321106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1643579.197158127,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1643483.3037300168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2776097.256716483,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2776021.7910447693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10505577.686274415,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10505375.490196077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6325922.680555528,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6325587.499999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13443734.620253347,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13443068.354430346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52650.15440000127,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52644.68999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 279029.79734111216,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 279011.2191958493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 221204.85104732375,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 221187.3286785633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 220851.0185042365,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 220840.8121305574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 217674.67355267046,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 217657.02626881024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 460137.3320994331,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 460111.79270227416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3552262.3893128894,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3552106.4885496213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2885209.1490682387,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2885081.9875776256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2914284.3993807095,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2914278.6377709084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2882147.595679,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2882115.7407407355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1675775.3303249052,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1675772.382671482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2795893.6555890935,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2795837.160120842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10802118.585858848,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10801606.060606046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6190755.006622377,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6190464.900662249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53769.85240627667,
            "unit": "ns/iter",
            "extra": "iterations: 15231\ncpu: 53767.11312454868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 244909.0228833009,
            "unit": "ns/iter",
            "extra": "iterations: 3496\ncpu: 244896.85354690952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 193631.59977400227,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 193618.9152542377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 192447.59110312987,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 192444.3720512253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189800.90519538024,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 189785.59058614605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 431604.41505693295,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 431578.0584447746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3535278.0037880624,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3535110.227272742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2858334.684048994,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2858132.8220858956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2853056.0487804837,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2852942.3780487734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2836146.4437688757,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2835955.623100311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1641834.3374341088,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1641732.3374340984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2770696.8988094144,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2770518.154761914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5636.566749698366,
            "unit": "ns/iter",
            "extra": "iterations: 124450\ncpu: 5636.413820811569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32000.66482361607,
            "unit": "ns/iter",
            "extra": "iterations: 21884\ncpu: 31998.60171815016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26236.4713005666,
            "unit": "ns/iter",
            "extra": "iterations: 26673\ncpu: 26235.219135455172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25973.40692159433,
            "unit": "ns/iter",
            "extra": "iterations: 26988\ncpu: 25971.48732770121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19916.162392676983,
            "unit": "ns/iter",
            "extra": "iterations: 35174\ncpu: 19915.212941377144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 121012.2773836272,
            "unit": "ns/iter",
            "extra": "iterations: 5779\ncpu: 121007.35421353002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 224126.35829049666,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 224126.09254498826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 59448.449584112976,
            "unit": "ns/iter",
            "extra": "iterations: 11782\ncpu: 59442.67526735696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 59707.82416737722,
            "unit": "ns/iter",
            "extra": "iterations: 11710\ncpu: 59703.578138343735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 59357.560882481084,
            "unit": "ns/iter",
            "extra": "iterations: 11785\ncpu: 59353.43232923177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 119255.2462978788,
            "unit": "ns/iter",
            "extra": "iterations: 5875\ncpu: 119250.11063829788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111376.32998564921,
            "unit": "ns/iter",
            "extra": "iterations: 6273\ncpu: 111373.52144109752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 36864.40334406014,
            "unit": "ns/iter",
            "extra": "iterations: 18959\ncpu: 36861.880900890916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 175528.50187640448,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 175519.6647485616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 143513.6399016787,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 143501.82302334902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 143620.53381001178,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 143613.626149133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 142994.5943300087,
            "unit": "ns/iter",
            "extra": "iterations: 4903\ncpu: 142981.72547419928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 249526.18368067258,
            "unit": "ns/iter",
            "extra": "iterations: 2831\ncpu: 249509.46661956818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1012913.6849710977,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1012859.8265895847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 849420.3147699974,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 849381.4769975696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 861442.7643312416,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 861361.2738853644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 850846.2951219715,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 850815.4878048709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 543218.5287267155,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 543211.413043479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 836505.6750298961,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 836505.4958183862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37507.969023459416,
            "unit": "ns/iter",
            "extra": "iterations: 18627\ncpu: 37507.907875664445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 180285.28891175566,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 180285.25855415637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 149522.22077922532,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 149518.94826485068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 148422.57063829503,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 148417.76595744703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 149301.59483679198,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 149297.54640494945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 251526.29314675936,
            "unit": "ns/iter",
            "extra": "iterations: 2787\ncpu: 251526.0136347327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1008287.5629522324,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1008244.2836468857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 848570.8840579618,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 848554.8309178755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 854355.6658595399,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 854344.1888619751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 846126.1411338756,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 846088.6610373968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 557905.3226581151,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 557904.4035228218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 840824.1812724916,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 840781.1524609765 ns\nthreads: 1"
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
        "date": 1702418396231,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13899.93176040675,
            "unit": "ns/iter",
            "extra": "iterations: 50352\ncpu: 13899.93048935494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 113638.70312079381,
            "unit": "ns/iter",
            "extra": "iterations: 7434\ncpu: 113636.19854721549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 216705.1580240928,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 216556.45121651515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 315214.2353154526,
            "unit": "ns/iter",
            "extra": "iterations: 2758\ncpu: 315217.7664974619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 411117.433506882,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 411107.90345480357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 510152.02468392975,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 510116.0144491272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 607820.5808257478,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 607822.253324003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 567926.2590000463,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567896.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 649603.4240000199,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649603.0000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11007.619703522862,
            "unit": "ns/iter",
            "extra": "iterations: 63816\ncpu: 11007.266202833162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9237.098147226796,
            "unit": "ns/iter",
            "extra": "iterations: 76426\ncpu: 9236.737497710199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9177.788797735508,
            "unit": "ns/iter",
            "extra": "iterations: 76306\ncpu: 9177.898199355228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9151.820236180218,
            "unit": "ns/iter",
            "extra": "iterations: 76467\ncpu: 9151.449644944876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14768.590730739592,
            "unit": "ns/iter",
            "extra": "iterations: 47404\ncpu: 14768.78322504432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55002.89435104317,
            "unit": "ns/iter",
            "extra": "iterations: 14870\ncpu: 54999.60322797581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 245556.7049600941,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 245559.63511972607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 194299.531072162,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 194291.5547461876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 193126.40117726967,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 193123.6585918043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 190733.38748603928,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 190724.31284916162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 449226.8385124726,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 449212.02241467155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3530043.45833341,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3529965.909090921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2835009.3435583864,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2834845.705521474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2839198.661585424,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2839135.6707317093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2843545.86890254,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2843396.951219509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1626111.6590510104,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1626077.328646749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2764095.9074626914,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2764014.3283582088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10439384.941747399,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10438984.46601943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6157641.506578821,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6157469.736842093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13603025.316455575,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13600218.987341775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 51786.589799996815,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51785.96000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 278964.4664287926,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 278956.9250729814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 221409.52494184097,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 221407.23701214875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 219326.97040658974,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 219302.75347401065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 215625.4640423874,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 215623.59323744645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 460946.7551889364,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 460925.81160191924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3577503.9423078587,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3577306.923076926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2891381.2142856997,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2891320.8074534237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2890432.124223672,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2890311.801242236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2878793.5603715605,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2878701.238390087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1661506.076923014,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1661401.788908762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2796139.054217029,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2796093.0722891735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10739358.343434647,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10738787.87878785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6339708.5918366425,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6339285.034013632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53094.74892954559,
            "unit": "ns/iter",
            "extra": "iterations: 15414\ncpu: 53092.390035033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 241530.70608106678,
            "unit": "ns/iter",
            "extra": "iterations: 3552\ncpu: 241517.98986486468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 192549.4162356618,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 192542.97279064482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 190679.92013348092,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 190669.7441601786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 188928.31061108253,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 188930.3772336206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 433346.54387706367,
            "unit": "ns/iter",
            "extra": "iterations: 2017\ncpu: 433308.6266732778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3544744.231939176,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3544423.9543726263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2840504.9574467605,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2840454.7112461957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2863226.651376149,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2863024.159021419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2848532.9938838026,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2848530.581039751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1629298.474605924,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1629194.9211908872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2765075.38165679,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2765048.8165680524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5624.985754412363,
            "unit": "ns/iter",
            "extra": "iterations: 124249\ncpu: 5624.897584688831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 30711.51823794776,
            "unit": "ns/iter",
            "extra": "iterations: 22837\ncpu: 30711.0084511977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25975.316998923514,
            "unit": "ns/iter",
            "extra": "iterations: 26937\ncpu: 25974.3104280357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24936.974754943883,
            "unit": "ns/iter",
            "extra": "iterations: 29075\ncpu: 24937.258813413526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19781.33319216105,
            "unit": "ns/iter",
            "extra": "iterations: 35418\ncpu: 19780.4703822917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 120703.11807353255,
            "unit": "ns/iter",
            "extra": "iterations: 5793\ncpu: 120697.82496115976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 236393.65845427403,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 236369.52413094896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 59287.33739352911,
            "unit": "ns/iter",
            "extra": "iterations: 11740\ncpu: 59286.44804088608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 59449.020914811175,
            "unit": "ns/iter",
            "extra": "iterations: 11762\ncpu: 59448.40163237572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 59451.31374713465,
            "unit": "ns/iter",
            "extra": "iterations: 11777\ncpu: 59447.57578330588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 113786.73523654618,
            "unit": "ns/iter",
            "extra": "iterations: 6130\ncpu: 113788.123980426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 112192.76677367275,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 112183.40288924734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37285.3948447576,
            "unit": "ns/iter",
            "extra": "iterations: 18777\ncpu: 37285.823081429415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 178599.67670322725,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 178594.18218933285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 147466.46186261286,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 147468.3944374199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 146701.81783919563,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 146698.24120602995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 146449.33180108847,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 146443.60635185844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 252391.2267671175,
            "unit": "ns/iter",
            "extra": "iterations: 2787\ncpu: 252390.491567993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1017265.1913043627,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1017240.5797101522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 849659.687727863,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 849634.2648845621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 851980.2648845281,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 851930.8626974556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 847303.800970871,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 847302.3058252542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 545213.4149184176,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 545219.7358197398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 839271.0131736933,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 839240.5988023872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38220.6654837323,
            "unit": "ns/iter",
            "extra": "iterations: 18316\ncpu: 38220.3264904997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 184620.3366701792,
            "unit": "ns/iter",
            "extra": "iterations: 3796\ncpu: 184612.61854583747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 152651.50929367798,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 152646.70894380196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 151710.60108343005,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 151703.27193932876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 150874.7992669284,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 150868.08969383367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 254457.5470054491,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 254446.09800363344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1016511.2387190916,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1016501.1644832519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 848908.6024242584,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 848881.9393939325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 850995.2017010882,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 850941.0692588186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 847895.5054413293,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 847905.1995163151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 546633.2628705231,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 546600.0000000079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 842176.892900112,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 842177.2563176857 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420963404,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13579.718610518621,
            "unit": "ns/iter",
            "extra": "iterations: 51530\ncpu: 13578.994760333786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 111643.06638566911,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 111637.49999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 210493.55628335217,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 210485.03153808828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 307997.46442617313,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 307977.797640329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 404287.68031642353,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 404249.2787342949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 504062.9305153434,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 504036.5952518818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 599055.098201951,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 599019.0871369295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 561405.8269999874,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561378.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 647229.2200000141,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647191.1000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10729.437576807817,
            "unit": "ns/iter",
            "extra": "iterations: 63470\ncpu: 10728.517409799912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9002.408012041242,
            "unit": "ns/iter",
            "extra": "iterations: 77733\ncpu: 9002.102067333059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9050.180049941002,
            "unit": "ns/iter",
            "extra": "iterations: 76090\ncpu: 9049.30871336575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9032.986458105112,
            "unit": "ns/iter",
            "extra": "iterations: 77611\ncpu: 9032.238986741559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14777.862396003238,
            "unit": "ns/iter",
            "extra": "iterations: 47237\ncpu: 14776.656011177658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54584.38157894714,
            "unit": "ns/iter",
            "extra": "iterations: 14972\ncpu: 54580.36334491048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247304.50751010652,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 247288.93703061808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196346.64622100216,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 196333.81575924656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 193196.72320217025,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 193180.73270013597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 192675.2672842302,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 192662.76547672856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452893.7189575891,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 452865.9683188549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3463071.446096617,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3462792.1933085457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2779117.2432432566,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2778900.900900905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2789415.243243199,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2789210.810810815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2782960.7455089954,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2782743.41317365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1605364.0714285583,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1605217.4216027905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2711841.3167155404,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2711744.8680351996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10401506.660194226,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10400767.961165031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6133505.322368536,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6133023.684210525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13280521.759493832,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13279546.835443031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 51383.41939999975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51378.07999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 278060.247252743,
            "unit": "ns/iter",
            "extra": "iterations: 3094\ncpu: 278031.67420814524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 220583.79444301428,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 220567.84152302536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 221591.59026526206,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 221575.79191346883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 218790.21734693888,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 218771.81122448956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 459294.3806758262,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 459278.77507919905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3499082.6528301886,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3498906.037735862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2824164.739393978,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2824093.0303030135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2835022.735562296,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2834906.990881457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2834298.221212135,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2834180.6060606097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1647286.625886549,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1647200.5319148933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2733777.035294171,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2733665.882352951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10632557.8000002,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10632042.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6324090.664383507,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6323873.972602738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52705.72073170761,
            "unit": "ns/iter",
            "extra": "iterations: 15580\ncpu: 52704.26829268276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 241155.42117245443,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 241146.69891861084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194018.5817852289,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 194008.9714544632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 191955.06455240783,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 191948.78542510147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189671.79830432916,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 189663.83311021826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 432269.11320754694,
            "unit": "ns/iter",
            "extra": "iterations: 2014\ncpu: 432243.09831181663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3472163.1040891516,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3472017.4721189523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2796652.110447779,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2796614.9253731403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2793858.3443113747,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2793751.1976047833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2784474.7731342744,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2784334.328358211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1617920.762564971,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1617871.2305026064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2711338.935860003,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2711230.903790095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5559.260384124855,
            "unit": "ns/iter",
            "extra": "iterations: 125480\ncpu: 5559.064392731923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31507.877639219085,
            "unit": "ns/iter",
            "extra": "iterations: 22213\ncpu: 31506.34313240006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25808.528906390555,
            "unit": "ns/iter",
            "extra": "iterations: 27935\ncpu: 25807.954179345004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25743.27909204796,
            "unit": "ns/iter",
            "extra": "iterations: 27138\ncpu: 25742.41653769624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19785.36404902453,
            "unit": "ns/iter",
            "extra": "iterations: 35248\ncpu: 19784.861552428527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 121420.18549922119,
            "unit": "ns/iter",
            "extra": "iterations: 5779\ncpu: 121414.82955528819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 230039.22619829085,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 230029.64543663777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 58634.67985249881,
            "unit": "ns/iter",
            "extra": "iterations: 11932\ncpu: 58633.33892054973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 58869.28888889085,
            "unit": "ns/iter",
            "extra": "iterations: 11970\ncpu: 58866.399331661625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 58717.628801206185,
            "unit": "ns/iter",
            "extra": "iterations: 11937\ncpu: 58715.179693390186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 118001.91735536842,
            "unit": "ns/iter",
            "extra": "iterations: 5929\ncpu: 117995.49671108088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 110499.28012668196,
            "unit": "ns/iter",
            "extra": "iterations: 6315\ncpu: 110494.83768804415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 36870.127125336585,
            "unit": "ns/iter",
            "extra": "iterations: 18997\ncpu: 36869.02142443528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 173562.995794166,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 173556.25927758377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 142310.15530224977,
            "unit": "ns/iter",
            "extra": "iterations: 4913\ncpu: 142305.37349888246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 141894.97975708396,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 141881.65991902698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 142136.1919171396,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 142124.89845654127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 248711.02876421573,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 248703.19602272494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 991518.358356902,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991484.2776203916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 831910.6392857548,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 831838.3333333251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 831284.0546318323,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 831229.5724465491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 831373.0118764811,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 831292.042755342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 535173.6050420342,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 535158.2123758598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 820575.2200000033,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 820548.1176470558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37283.115876397576,
            "unit": "ns/iter",
            "extra": "iterations: 18770\ncpu: 37282.003196590995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 178474.09501915897,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 178468.45466155975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 147260.71157895747,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 147248.21052631474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 148314.0592467204,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 148302.03131612076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 149123.14732808128,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 149111.00702576138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 250708.73273703954,
            "unit": "ns/iter",
            "extra": "iterations: 2795\ncpu: 250688.69409660462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 993736.3432624246,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 993677.588652502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 832395.0866983066,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 832376.6033254126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 833455.7159905031,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 833429.4749403239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 833511.4703088375,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 833440.855106892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 540203.8244803409,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 540158.0446497211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 825367.7704141486,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 825351.1242603462 ns\nthreads: 1"
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
        "date": 1702421380619,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13861.44962271666,
            "unit": "ns/iter",
            "extra": "iterations: 50360\ncpu: 13860.714853057983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 113735.01580286806,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 113730.86915762688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 212206.7823745413,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 212200.85679314562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 311908.69440458994,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 311899.2826398852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 409331.60396039917,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 409317.39745403087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 508603.8413068832,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 508589.26487747964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 603737.9532449258,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 603721.0048848566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 564297.9269999842,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564273.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 644291.7900000111,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644273.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10822.47071620306,
            "unit": "ns/iter",
            "extra": "iterations: 64814\ncpu: 10822.495139938886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9130.075178080726,
            "unit": "ns/iter",
            "extra": "iterations: 76791\ncpu: 9129.852456668092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9061.821947401586,
            "unit": "ns/iter",
            "extra": "iterations: 77303\ncpu: 9061.604336183585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9108.484954152202,
            "unit": "ns/iter",
            "extra": "iterations: 77430\ncpu: 9108.086013173188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14969.219116263434,
            "unit": "ns/iter",
            "extra": "iterations: 46756\ncpu: 14969.174009752767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56905.129247911296,
            "unit": "ns/iter",
            "extra": "iterations: 14360\ncpu: 56903.530640668556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 260871.02092177002,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 260871.86173438432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204138.05512943864,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 204130.7766059447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200704.32036947084,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 200704.86144871145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198690.0074435869,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 198682.3679925568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452449.3787255873,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 452446.91675231134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3506927.2943395767,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3506887.9245282966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2824303.2896340927,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2824239.6341463393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2846289.562691065,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2846280.1223241584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2820633.5212122337,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2820577.57575757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1650342.172597917,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1650334.8754448446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2755036.363095222,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2754950.8928571395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10551124.088235097,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10550985.29411767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6227769.8187919315,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6227747.651006722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13489379.417721115,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13488954.430379752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52465.11940000005,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52464.67999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291755.719161884,
            "unit": "ns/iter",
            "extra": "iterations: 2959\ncpu: 291752.07840486686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 228220.22222222746,
            "unit": "ns/iter",
            "extra": "iterations: 3753\ncpu: 228221.2363442581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 229868.72078785923,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 229863.50811817774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 225966.45912770584,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 225967.24993470928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 463717.58368870604,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 463682.9424307018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3559663.48473267,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3559550.7633588025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2871460.003086387,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2871342.5925925933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2890008.6532507744,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2889949.535603697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2859587.8246152587,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2859486.153846153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1686869.2028985673,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1686809.239130433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2796488.9999999604,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2796420.120120111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10844445.828283112,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10844175.757575765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6297086.898648467,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6296966.8918918865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54511.73822548174,
            "unit": "ns/iter",
            "extra": "iterations: 14990\ncpu: 54511.92795196802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 255192.49511110803,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 255187.73333333313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199215.93648587065,
            "unit": "ns/iter",
            "extra": "iterations: 4314\ncpu: 199216.6434863236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199524.03767442933,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 199519.46511627996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 194337.55439235995,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 194338.0746472459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 433669.2509999977,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 433664.199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3524321.3207547152,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3524224.9056603615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2832859.2613982055,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2832867.1732522836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2844335.104615276,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2844209.538461546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2832125.0299002915,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 2830660.1328903595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1641765.339222621,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1641683.9222614823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2756764.6449704263,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2756726.331360942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5653.457946186488,
            "unit": "ns/iter",
            "extra": "iterations: 123984\ncpu: 5653.335914311568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32222.456912441165,
            "unit": "ns/iter",
            "extra": "iterations: 21700\ncpu: 32222.271889400916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26182.846162465066,
            "unit": "ns/iter",
            "extra": "iterations: 26775\ncpu: 26182.009337068263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 23969.291322315054,
            "unit": "ns/iter",
            "extra": "iterations: 29040\ncpu: 23969.004820936698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20053.3835981106,
            "unit": "ns/iter",
            "extra": "iterations: 34935\ncpu: 20052.1024760269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122277.08679706941,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 122271.7778553955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 235790.42852324503,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 235770.97100471708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 59253.113780559375,
            "unit": "ns/iter",
            "extra": "iterations: 11821\ncpu: 59251.459267405575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 59764.05866279884,
            "unit": "ns/iter",
            "extra": "iterations: 11711\ncpu: 59761.847835367385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 59494.25837810274,
            "unit": "ns/iter",
            "extra": "iterations: 11727\ncpu: 59493.229299905586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 119557.54787506364,
            "unit": "ns/iter",
            "extra": "iterations: 5859\ncpu: 119554.19013483541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 112118.61458333189,
            "unit": "ns/iter",
            "extra": "iterations: 6240\ncpu: 112109.8557692294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 36879.88922218656,
            "unit": "ns/iter",
            "extra": "iterations: 19002\ncpu: 36878.88643300745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 176299.20045328364,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 176289.3225887708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 145055.09863241593,
            "unit": "ns/iter",
            "extra": "iterations: 4826\ncpu: 145052.36220472257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 145268.17853436724,
            "unit": "ns/iter",
            "extra": "iterations: 4817\ncpu: 145262.59082416614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 143608.36791091034,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 143603.42338626724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 253657.62486487525,
            "unit": "ns/iter",
            "extra": "iterations: 2775\ncpu: 253642.88288288593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1086684.5360230238,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1086669.8847262103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 847322.9384057542,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 847289.9758454164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 843206.9073405981,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 843151.0228640229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 838160.0862698071,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 838141.9198056032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 545010.411627932,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 544986.8217054302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 835037.7574316206,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 835021.4030915564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37841.1851051171,
            "unit": "ns/iter",
            "extra": "iterations: 18503\ncpu: 37840.83662108784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 181142.22141748064,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 181120.27935850903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 150238.1866952694,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 150236.86695278835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 151710.03876136747,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 151699.95669120774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 150583.51448187337,
            "unit": "ns/iter",
            "extra": "iterations: 4661\ncpu: 150573.80390474162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 256999.93536540453,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 256979.2875504979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1007510.2417266266,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1007471.0791366788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 845980.4975903254,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 845949.3975903504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 846957.4830918462,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 846942.0289855059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 845198.1801693336,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 845156.5900846557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 548378.0963195087,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 548337.7447141695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 837523.090909141,
            "unit": "ns/iter",
            "extra": "iterations: 836\ncpu: 837498.9234449813 ns\nthreads: 1"
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
        "date": 1702422467602,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13676.39707853338,
            "unit": "ns/iter",
            "extra": "iterations: 51481\ncpu: 13676.301936636817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 111281.8846153832,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 111276.45888594164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 209542.95398699414,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 209542.92941459888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 306099.1890741501,
            "unit": "ns/iter",
            "extra": "iterations: 2819\ncpu: 306093.72117772256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 407350.49767442624,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 407334.04651162814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 501001.5746397624,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 500980.11527377507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 597833.5285223374,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 597817.9381443298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 558976.6159999954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558935.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 641893.7389999542,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641833.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10950.668807452872,
            "unit": "ns/iter",
            "extra": "iterations: 64618\ncpu: 10950.198087220262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9024.73079353637,
            "unit": "ns/iter",
            "extra": "iterations: 77539\ncpu: 9024.672745328173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9076.46591509162,
            "unit": "ns/iter",
            "extra": "iterations: 75752\ncpu: 9076.387422114256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9090.24465533396,
            "unit": "ns/iter",
            "extra": "iterations: 76712\ncpu: 9090.11758264678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14687.077453569837,
            "unit": "ns/iter",
            "extra": "iterations: 47706\ncpu: 14687.232213977293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54815.64536013371,
            "unit": "ns/iter",
            "extra": "iterations: 14925\ncpu: 54815.276381909556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 248065.1272360141,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 248065.69532602406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195757.03148528535,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 195754.87109285843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 196144.74599489546,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 196143.3480380775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193969.20740571697,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 193969.30940481593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 457726.6334203582,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 457715.24804177595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3470380.216417983,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3470288.0597014963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2807242.343465077,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2807222.1884498424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2821674.917682961,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2821639.9390243897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2793912.8383234027,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2793874.251497011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1635288.2821869783,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1635292.0634920674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2737344.3372780266,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2737289.940828405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10489837.74509793,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10488746.078431392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6169434.278145922,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6169358.9403973445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13519738.70512852,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13519544.87179491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 51585.82710000133,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51585.21999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 279045.49401488545,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 279043.7722419942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 221097.84350063637,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 221100.15444015563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 221719.24090790853,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 221719.65437193657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 218880.25689478323,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 218880.592441267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 466466.8845327582,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 466456.44468313846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3523192.636363517,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3523167.8030303093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2864407.9353846163,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2864416.3076923126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2866450.390092934,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2866437.15170278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2845007.1472392655,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2845014.7239263766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1766321.6108107835,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1766295.3153153146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2774947.0512048216,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2774931.9277108465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10786939.686868943,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10786793.939393943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6235006.953020183,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6234989.261744982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53603.92826921737,
            "unit": "ns/iter",
            "extra": "iterations: 15363\ncpu: 53603.54097506989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 244545.436254973,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 244509.9317017647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 195263.52117486784,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 195262.24954462695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194256.0869565182,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 194253.1702898548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193315.59259259317,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 193313.32889776008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 441357.5867139749,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 441359.2292089227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3493406.6779026217,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3493386.891385767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2831723.2158054616,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2831687.8419452896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2838878.103658468,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2838833.8414634313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2814334.99090905,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2814319.393939408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1641448.6437389872,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1641453.4391534387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2754607.477611987,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2754565.0746268504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5590.3874520538975,
            "unit": "ns/iter",
            "extra": "iterations: 125662\ncpu: 5590.284254587735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31387.798096776347,
            "unit": "ns/iter",
            "extra": "iterations: 22278\ncpu: 31387.274441152655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26035.52994791615,
            "unit": "ns/iter",
            "extra": "iterations: 26880\ncpu: 26035.111607143015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24952.180465880207,
            "unit": "ns/iter",
            "extra": "iterations: 28033\ncpu: 24951.970891449328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19717.256041913526,
            "unit": "ns/iter",
            "extra": "iterations: 35502\ncpu: 19717.075094361113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122422.09935618543,
            "unit": "ns/iter",
            "extra": "iterations: 5747\ncpu: 122416.98277362196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 232663.16805049684,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 232656.3600132853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 58888.041996300715,
            "unit": "ns/iter",
            "extra": "iterations: 11882\ncpu: 58885.743140885825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 59091.369662635545,
            "unit": "ns/iter",
            "extra": "iterations: 11827\ncpu: 59090.53014289371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 59190.86447569234,
            "unit": "ns/iter",
            "extra": "iterations: 11806\ncpu: 59190.78434694182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 119162.85753144714,
            "unit": "ns/iter",
            "extra": "iterations: 5882\ncpu: 119162.8867732065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111463.82901224897,
            "unit": "ns/iter",
            "extra": "iterations: 6287\ncpu: 111460.80801654168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 36941.446000738826,
            "unit": "ns/iter",
            "extra": "iterations: 18991\ncpu: 36938.07066505241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 179480.71859810952,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 179478.63903811766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 144471.84973129097,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 144471.82720132318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 143240.70211022263,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 143240.87277197256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 143130.51442602457,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 143130.71413955223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 246937.0247087864,
            "unit": "ns/iter",
            "extra": "iterations: 2833\ncpu: 246934.3805153501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1011660.6123033183,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1011659.7997138783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 842516.3341346713,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 842508.0528846266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 844471.1975903511,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 844471.8072289301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 842602.5714285201,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 842595.2784503624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 545768.9228971731,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 545763.7850467317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 831099.7826603422,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 831081.5914489334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37726.21515298651,
            "unit": "ns/iter",
            "extra": "iterations: 18531\ncpu: 37725.53558901295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 179874.61950090618,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 179873.11551324942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 149385.6984261973,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 149384.47469161928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 149623.15559812527,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 149621.47722435175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 149260.16524701615,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 149260.28534923468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 251968.63328530933,
            "unit": "ns/iter",
            "extra": "iterations: 2776\ncpu: 251968.40778098072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 998330.7948349925,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 998330.1291248325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 841821.7337349228,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 841811.8072289034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 845073.7983091553,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 845073.3091787444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 841945.544471137,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 841937.7403846146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 549348.1614419862,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 549350.5485893354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 839134.7398568197,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 839124.2243436711 ns\nthreads: 1"
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
        "date": 1702453358763,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13880.338599283841,
            "unit": "ns/iter",
            "extra": "iterations: 50260\ncpu: 13879.120573020295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 114376.64463032587,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 114377.07771181868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 213922.6132610338,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 213915.75055459698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 312731.79963768367,
            "unit": "ns/iter",
            "extra": "iterations: 2760\ncpu: 312726.88405797083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 412851.8299287456,
            "unit": "ns/iter",
            "extra": "iterations: 2105\ncpu: 412828.88361045124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 510461.6638705866,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 510437.4475733973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 609625.5017568795,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 609592.5509487002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 570591.4819999975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570558.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 651865.6290000422,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651855.600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10996.180699634837,
            "unit": "ns/iter",
            "extra": "iterations: 63719\ncpu: 10995.681037053319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9231.928852501916,
            "unit": "ns/iter",
            "extra": "iterations: 75730\ncpu: 9231.452528720452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9118.32514720634,
            "unit": "ns/iter",
            "extra": "iterations: 76593\ncpu: 9117.74835820504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9138.30842197857,
            "unit": "ns/iter",
            "extra": "iterations: 77274\ncpu: 9138.01925615344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14996.67320373699,
            "unit": "ns/iter",
            "extra": "iterations: 46555\ncpu: 14996.264633229524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54614.01941487463,
            "unit": "ns/iter",
            "extra": "iterations: 14937\ncpu: 54612.15772912899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 249320.93748182815,
            "unit": "ns/iter",
            "extra": "iterations: 3439\ncpu: 249309.10148298927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198380.18532280842,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 198373.2234091965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197962.97643253708,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 197956.81608133073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195925.13035509433,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 195919.0148911795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 454870.0991223468,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 454843.2627774898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3566552.6423077136,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3566485.7692307644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2893408.1913580853,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2893292.901234563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2862159.5434782878,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2862022.360248455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2882664.612307753,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2882597.846153837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1654017.7348754338,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1653950.7117437725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2786692.543543473,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2786532.1321321353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10584749.52941201,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10583207.843137246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6354778.703448103,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6354805.517241391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13659684.153846176,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13659099.99999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 51967.991300000445,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51965.94000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 280161.8463041339,
            "unit": "ns/iter",
            "extra": "iterations: 3071\ncpu: 280156.2683165101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224578.07688271278,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 224569.16819732304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 225028.37385139623,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 225021.18666316572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220981.8951156921,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 220982.10796915277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 464088.35901551024,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 464084.1091492793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3593878.540540569,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3593885.328185315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2915316.274999924,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2915300.6250000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2898694.1464174557,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2898644.8598130783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2891562.5763240336,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2891597.196261682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1682479.6123189258,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1682454.1666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2819908.6575756553,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2819888.4848484686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10866212.306122439,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10866047.959183697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6311180.486486331,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6311110.135135159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52764.47259345271,
            "unit": "ns/iter",
            "extra": "iterations: 15489\ncpu: 52764.497385241106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 247582.3614631233,
            "unit": "ns/iter",
            "extra": "iterations: 3472\ncpu: 247580.78917050664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 196976.75625431302,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 196977.27794353888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194893.8726158012,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 194887.9427792912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193666.85621061403,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 193661.90369036875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 437562.31477732724,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 437555.01012145646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3589198.3461539214,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3589210.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2884802.0372670954,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2884745.031055899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2865442.5969230384,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2865299.3846153896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2870069.4660492335,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2870001.5432098857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1652547.0142348728,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1652490.5693950101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2787700.8892214843,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2787574.251496996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5820.121300497956,
            "unit": "ns/iter",
            "extra": "iterations: 122753\ncpu: 5819.760820509439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32363.502406293817,
            "unit": "ns/iter",
            "extra": "iterations: 21610\ncpu: 32363.572420175664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26304.924700492644,
            "unit": "ns/iter",
            "extra": "iterations: 26627\ncpu: 26304.720772148376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26346.103060122776,
            "unit": "ns/iter",
            "extra": "iterations: 26829\ncpu: 26345.76763949471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20028.063492062953,
            "unit": "ns/iter",
            "extra": "iterations: 34965\ncpu: 20027.887887887857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 121614.57388435917,
            "unit": "ns/iter",
            "extra": "iterations: 5759\ncpu: 121616.0097239107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 235847.88096840944,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 235845.05716207175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 59170.45810055931,
            "unit": "ns/iter",
            "extra": "iterations: 11814\ncpu: 59166.49737599472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60033.13035653062,
            "unit": "ns/iter",
            "extra": "iterations: 11668\ncpu: 60031.90778196856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 59711.18024396574,
            "unit": "ns/iter",
            "extra": "iterations: 11723\ncpu: 59710.73104154296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 119839.47792608327,
            "unit": "ns/iter",
            "extra": "iterations: 5844\ncpu: 119835.59206023438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 100806.45700706,
            "unit": "ns/iter",
            "extra": "iterations: 6943\ncpu: 100800.10082097187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37352.05878894681,
            "unit": "ns/iter",
            "extra": "iterations: 18711\ncpu: 37350.472983806394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 180674.56528497735,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 180668.03108808486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 147207.96382754412,
            "unit": "ns/iter",
            "extra": "iterations: 4755\ncpu: 147205.0683491059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 146383.18433760517,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 146380.03359227325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 145698.76425301842,
            "unit": "ns/iter",
            "extra": "iterations: 4806\ncpu: 145692.30129005515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 250596.1716124325,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 250589.70325348488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1021498.2740524623,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1021476.5306122529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 856684.3865853626,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 856659.0243902522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 856832.6151961078,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 856784.5588235444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 853829.3387297569,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 853795.5168119507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 551483.9583333358,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 551460.3773584887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 844218.0253317226,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 844188.1785283482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38276.910781685976,
            "unit": "ns/iter",
            "extra": "iterations: 18281\ncpu: 38276.85575187332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 183346.11166317228,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 183343.43619247095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 152015.44292238477,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 152015.13372472144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153152.50785683328,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 153147.9484941053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 153029.82297797952,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 153024.43863091388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 253064.03469460362,
            "unit": "ns/iter",
            "extra": "iterations: 2767\ncpu: 253051.31911817807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1020983.185672528,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1020939.9122806927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 859852.7660098363,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 859833.7438423762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 858693.9093137383,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 858678.7990196157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 855410.91277642,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 855385.3808353748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 554400.7260490803,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 554379.4140934194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 852077.191230206,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 852040.0730816079 ns\nthreads: 1"
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
        "date": 1702479549108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13935.954684316981,
            "unit": "ns/iter",
            "extra": "iterations: 49100\ncpu: 13935.576374745417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 114146.53701955541,
            "unit": "ns/iter",
            "extra": "iterations: 7415\ncpu: 114142.49494268376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 215728.46739399308,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 215717.4559880982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 316848.7530011038,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 316843.61586031277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 416060.77470166615,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 416025.68019093084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 514590.356213008,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 514556.2721893494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 622269.7588401366,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 622254.8797736912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 575699.0169999767,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575649.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 660828.2420000365,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660810.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10960.894856372945,
            "unit": "ns/iter",
            "extra": "iterations: 63846\ncpu: 10960.412555210987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9117.026703174517,
            "unit": "ns/iter",
            "extra": "iterations: 76695\ncpu: 9116.780754938376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9273.383290461488,
            "unit": "ns/iter",
            "extra": "iterations: 75418\ncpu: 9273.182794558339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9158.926154851464,
            "unit": "ns/iter",
            "extra": "iterations: 76525\ncpu: 9158.680169879122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14847.697849051827,
            "unit": "ns/iter",
            "extra": "iterations: 47142\ncpu: 14847.119341563763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56407.5486518199,
            "unit": "ns/iter",
            "extra": "iterations: 14501\ncpu: 56405.04792772908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247599.14098836714,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 247592.6744186048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198143.2432244533,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 198128.97845726192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197344.50346419343,
            "unit": "ns/iter",
            "extra": "iterations: 4330\ncpu: 197333.37182447995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196598.18935729476,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 196587.2149274362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452479.0139896595,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 452467.9792746115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3592296.9382240335,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3592137.837837828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2884551.2981366348,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2884359.3167701894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2905762.4156248355,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2905585.937499999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2899376.277258572,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2899173.5202492173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1676044.9818840546,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1675943.4782608731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2812801.7090909216,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2812706.363636368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10677178.539999658,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10676962.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6327045.877550777,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6326849.659863951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13747439.116883328,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13747038.96103896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52945.73170000376,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52944.40000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 279122.8735818579,
            "unit": "ns/iter",
            "extra": "iterations: 3085\ncpu: 279113.4197730964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 223211.01742976005,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 223201.170655566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 224491.77222803218,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 224486.34937238554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221964.92452829937,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 221962.0315326954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 462960.3018162377,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 462938.3012820493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3633752.542968827,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3633649.218750007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2928351.430817555,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2928247.484276732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2952826.0222222675,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2952693.968253971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2928290.1194968554,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2928121.6981132147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1696604.0566727745,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1696543.8756855607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2850624.617736992,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2850499.6941895983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10975665.61224472,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10974637.755102012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6552473.673610769,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6552190.972222248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54601.484257473014,
            "unit": "ns/iter",
            "extra": "iterations: 15023\ncpu: 54601.39120015981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 245091.71485713718,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 245089.28571428612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 196134.3473273587,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 196136.2009635237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194032.03854002067,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 194028.0435275435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192080.49786181157,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 192082.2192212471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 435343.95891783736,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 435332.9158316626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3590534.6500000563,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3590374.6153846164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2886510.074074031,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2886480.55555557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2907372.2959501087,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2907195.01557634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2898074.9006211045,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2898051.8633540375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1672522.0967742566,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672463.799283156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2809841.74622367,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2809793.3534743283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5640.829348921788,
            "unit": "ns/iter",
            "extra": "iterations: 124025\ncpu: 5640.722434992948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31831.203179086588,
            "unit": "ns/iter",
            "extra": "iterations: 21956\ncpu: 31830.287848424126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25284.32397673547,
            "unit": "ns/iter",
            "extra": "iterations: 27681\ncpu: 25283.83728911532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25843.014581153548,
            "unit": "ns/iter",
            "extra": "iterations: 27707\ncpu: 25818.212004186724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19807.46845286995,
            "unit": "ns/iter",
            "extra": "iterations: 35233\ncpu: 19806.825987000775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122042.05524573283,
            "unit": "ns/iter",
            "extra": "iterations: 5738\ncpu: 122043.13349599122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 226734.67669902203,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 226728.38187702475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60053.70692916438,
            "unit": "ns/iter",
            "extra": "iterations: 11632\ncpu: 60052.372764786436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60601.56706841478,
            "unit": "ns/iter",
            "extra": "iterations: 11533\ncpu: 60599.67051070883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 60102.63136176003,
            "unit": "ns/iter",
            "extra": "iterations: 11632\ncpu: 60099.535763411084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 121651.98749999698,
            "unit": "ns/iter",
            "extra": "iterations: 5760\ncpu: 121650.67708333292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113731.42491079938,
            "unit": "ns/iter",
            "extra": "iterations: 6166\ncpu: 113726.12714887988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37928.6366491581,
            "unit": "ns/iter",
            "extra": "iterations: 18467\ncpu: 37929.01933178108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 182027.71324676083,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 182015.8961038967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 148898.8089672764,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 148893.90140246486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 147394.30284510265,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 147388.57744994707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 147936.69462592425,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 147934.68914647098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 252747.63633093153,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 252736.76258992814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1030029.2448071556,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1029995.5489614166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 863748.2493826959,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 863737.160493828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 865515.3464858192,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 865473.1196054266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 869271.410958913,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 869258.530510577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 556451.3643595828,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 556435.1630867128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 853682.2390243792,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 853640.2439024367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38743.65198603962,
            "unit": "ns/iter",
            "extra": "iterations: 18051\ncpu: 38742.54611932884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 184567.36501597438,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 184556.01703940387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 152685.9637396214,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 152687.352555703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153792.67492328674,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 153787.76852257884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 152851.15616139313,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 152852.49727371917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 254109.79258990148,
            "unit": "ns/iter",
            "extra": "iterations: 2753\ncpu: 254103.26916091333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1028248.5558824019,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1028241.4705882308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 864388.0752157801,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 864367.9408138191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 866402.4517327276,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 866359.4059405999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 862081.7758620386,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 862063.0541871965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 559534.9239391583,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 559539.5516413162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 858052.5202453833,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 858039.6319018397 ns\nthreads: 1"
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
        "date": 1702488577127,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14031.525208400235,
            "unit": "ns/iter",
            "extra": "iterations: 49904\ncpu: 14030.749038153253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 119100.65793029362,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 119098.45987570925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 215210.76181052698,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 215175.48849863972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 314340.345719484,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 314326.8852459017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 415225.95363287773,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 415220.74569789664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 514233.3376700002,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 514229.4500295684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 613595.4625706438,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 613583.7570621466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 572812.1440000108,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572820.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 661038.92000001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661040.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11057.752018699079,
            "unit": "ns/iter",
            "extra": "iterations: 61178\ncpu: 11057.291836934846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9291.987593875368,
            "unit": "ns/iter",
            "extra": "iterations: 75366\ncpu: 9292.11182761456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9371.479128449151,
            "unit": "ns/iter",
            "extra": "iterations: 75773\ncpu: 9371.475327623295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9261.89177872255,
            "unit": "ns/iter",
            "extra": "iterations: 75706\ncpu: 9261.51295802182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14893.496848515791,
            "unit": "ns/iter",
            "extra": "iterations: 46962\ncpu: 14893.230697159406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55062.33975953527,
            "unit": "ns/iter",
            "extra": "iterations: 14472\ncpu: 55059.832780541736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 243841.7884396391,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 243832.94419134405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195115.56456043452,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 195112.95787545753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 193672.63557975346,
            "unit": "ns/iter",
            "extra": "iterations: 4407\ncpu: 193671.0460630818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193108.7248641363,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 193107.1105072466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 455886.65030992794,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 455869.4214876032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3552552.3702289793,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3552474.045801527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2888398.9566564253,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2888292.879256957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2869788.2746913424,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2869684.876543214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2858338.286153832,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2858289.5384615352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1664307.331541246,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1664242.4731182824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2789690.290030285,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2789524.7734138956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10600446.811881423,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10599915.84158415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6272856.824324051,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6272656.081081098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13570863.397436101,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13570202.564102566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 51269.630299998425,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51266.61999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 275405.03426192317,
            "unit": "ns/iter",
            "extra": "iterations: 3123\ncpu: 275398.78322126094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 220369.05084746124,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 220363.79044684028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 219494.14698364807,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 219486.37525562348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 218490.86922094307,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 218481.4303959133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 468550.8172043174,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 468538.92473118164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3593093.6108950223,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3592955.642023347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2918044.3072100617,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2917981.8181818235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2920702.805642661,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2920642.319749218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2901352.8509316845,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2901272.670807447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1686600.9547100745,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1686550.543478261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2825547.519756793,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2825506.079027358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10911197.204081895,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10910790.816326521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6469519.310344602,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6469156.551724133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53317.969710758654,
            "unit": "ns/iter",
            "extra": "iterations: 15385\ncpu: 53317.89405264893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 241688.32037192263,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 241691.5469146244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 193455.37652370223,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 193455.53047404074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 191754.98478406234,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 191754.6654732607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189383.0426519399,
            "unit": "ns/iter",
            "extra": "iterations: 4525\ncpu: 189380.3756906084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 442700.8105527528,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 442706.68341708364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3563682.801526754,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3563609.1603053617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2887182.2546583964,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2887144.0993788694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2866801.509259316,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2866791.975308645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2859955.8153846026,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2859941.538461525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1665852.3315411692,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1665853.046594973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2793634.993939391,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2793579.9999999898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5691.50431348984,
            "unit": "ns/iter",
            "extra": "iterations: 123334\ncpu: 5691.577342825184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32035.63810587529,
            "unit": "ns/iter",
            "extra": "iterations: 22385\ncpu: 32035.72928300196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26251.22041534607,
            "unit": "ns/iter",
            "extra": "iterations: 28410\ncpu: 26251.590989088356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26050.35247274181,
            "unit": "ns/iter",
            "extra": "iterations: 26873\ncpu: 26049.916272838695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20106.720547157016,
            "unit": "ns/iter",
            "extra": "iterations: 34725\ncpu: 20106.586033117343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 123285.64203641472,
            "unit": "ns/iter",
            "extra": "iterations: 5657\ncpu: 123284.86830475548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 225461.0956521686,
            "unit": "ns/iter",
            "extra": "iterations: 3105\ncpu: 225460.86956521397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 59840.17989237219,
            "unit": "ns/iter",
            "extra": "iterations: 11707\ncpu: 59839.50627829463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60122.47848079512,
            "unit": "ns/iter",
            "extra": "iterations: 11664\ncpu: 60123.29389574727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 59591.577622852354,
            "unit": "ns/iter",
            "extra": "iterations: 11762\ncpu: 59592.41625573964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 120560.18542705594,
            "unit": "ns/iter",
            "extra": "iterations: 5819\ncpu: 120560.49149338454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 116327.91808583027,
            "unit": "ns/iter",
            "extra": "iterations: 5872\ncpu: 116326.9754768385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37400.98217154083,
            "unit": "ns/iter",
            "extra": "iterations: 18678\ncpu: 37400.144555091894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 181721.21021254561,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 181723.4577501307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 148876.46256912456,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 148876.75457252207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 147742.02405570904,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 147741.88647394133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 148011.03438093213,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 148009.15418688205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 250794.30568466734,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 250797.64032892423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1026146.722873831,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1026160.7038123155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 860890.8492461962,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 860892.336683416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 856841.8009828129,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 856839.9262899315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 857074.9265606282,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 857065.7282741709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 549714.8040752474,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 549712.4608150491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 847063.4957575385,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 847074.7878787891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38640.20783165657,
            "unit": "ns/iter",
            "extra": "iterations: 18106\ncpu: 38639.71059317352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 187902.66244612128,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 187905.03771551626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 154343.87704001716,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 154339.79432148428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153556.93488269797,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 153554.19864064996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154942.9644996677,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 154940.93632127703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 256202.68949103352,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 256197.43683632425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1028403.0631424537,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1028363.8766519801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 860227.7125307267,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 860199.6314496354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 859398.1832718658,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 859380.4428044311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 858703.3006135266,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 858690.5521472341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 552640.1988950088,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 552627.7032359921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 852752.5383678993,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 852727.4056029328 ns\nthreads: 1"
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
        "date": 1702490738796,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14112.2425048498,
            "unit": "ns/iter",
            "extra": "iterations: 49999\ncpu: 14111.510230204607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 114129.7892103838,
            "unit": "ns/iter",
            "extra": "iterations: 7396\ncpu: 114122.87723093564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 214417.51725839256,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 214407.91420118348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 313157.5288356955,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 313139.3543706927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 414331.92005742574,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 414301.81905217795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 514088.0507674233,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 514063.5182998817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 611804.2438336835,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 611803.1712473572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 571061.4139999847,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571010.600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 651737.350000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651697.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11060.055010192633,
            "unit": "ns/iter",
            "extra": "iterations: 63770\ncpu: 11059.40254037949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9243.079097387106,
            "unit": "ns/iter",
            "extra": "iterations: 75780\ncpu: 9242.503299023481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9209.15980425673,
            "unit": "ns/iter",
            "extra": "iterations: 76018\ncpu: 9208.48746349548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9236.4050933256,
            "unit": "ns/iter",
            "extra": "iterations: 75864\ncpu: 9235.960402826104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14933.517036213472,
            "unit": "ns/iter",
            "extra": "iterations: 46724\ncpu: 14933.160688297236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54815.4430201321,
            "unit": "ns/iter",
            "extra": "iterations: 14900\ncpu: 54811.69798657718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 243793.5898972612,
            "unit": "ns/iter",
            "extra": "iterations: 3504\ncpu: 243774.65753424648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 194549.2365542331,
            "unit": "ns/iter",
            "extra": "iterations: 4388\ncpu: 194535.3236098451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 191810.129205921,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 191808.3445491248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 191339.37153881165,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 191330.79891057688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452064.0374550992,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 452049.25602873415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3568941.176923073,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3568710.7692307625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2869575.6604938186,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2869453.703703704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2884068.481366584,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2883839.1304347864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2872051.105263192,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2871784.5201238366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1652948.6868327712,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1652853.9145907504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2794861.504531792,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2794717.824773413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10535570.568627723,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10535495.098039197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6361690.602739768,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6361513.698630142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13704733.461538902,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13704153.846153835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 51588.654700003644,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51589.18999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 279213.7908475827,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 279199.22655494715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 219357.6670921632,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 219359.53535869226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 219242.64331373398,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 219231.88442853474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 216123.78463094385,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 216125.63195146623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 465515.80311996787,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 465480.4733727813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3618989.8015564326,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3619021.011673134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2906348.493750066,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2906352.4999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2917838.554858969,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2917713.7931034397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2896277.8416149216,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2896301.5527950325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1691344.257713225,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1691316.1524500886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2824690.3030302897,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2824713.3333333307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10888431.193877773,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10887704.081632711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6524485.986014204,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6524351.748251742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53242.34661561527,
            "unit": "ns/iter",
            "extra": "iterations: 15409\ncpu: 53242.80615224876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 241149.12386364167,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 241137.52840909158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 192468.5611073629,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 192459.73441368403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 190206.2751499044,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 190195.3142349537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 187279.6339854941,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 187270.43306221132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 442993.0792774503,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 442965.2784746629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3574528.045977119,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3574291.954022972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2876460.219135774,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2876284.259259244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2884361.7585139596,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2884199.380804943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2858847.6441718196,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2858600.9202454044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1691200.6910714135,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1691142.6785714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2801299.165662762,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2801106.927710854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5587.991084683778,
            "unit": "ns/iter",
            "extra": "iterations: 125290\ncpu: 5587.745231063938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31631.809319545944,
            "unit": "ns/iter",
            "extra": "iterations: 22147\ncpu: 31630.11694586168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26005.903817530914,
            "unit": "ns/iter",
            "extra": "iterations: 26876\ncpu: 26004.267748176804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24329.545662496046,
            "unit": "ns/iter",
            "extra": "iterations: 28853\ncpu: 24328.25356115461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19838.881232716816,
            "unit": "ns/iter",
            "extra": "iterations: 35077\ncpu: 19837.40627761784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122448.63588667204,
            "unit": "ns/iter",
            "extra": "iterations: 5718\ncpu: 122438.07275270992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 235758.06142424865,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 235747.31690853895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 59393.067674279686,
            "unit": "ns/iter",
            "extra": "iterations: 11777\ncpu: 59390.48993801499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 59835.36577238252,
            "unit": "ns/iter",
            "extra": "iterations: 11704\ncpu: 59833.69788106708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 59700.47879149798,
            "unit": "ns/iter",
            "extra": "iterations: 11717\ncpu: 59697.76393274731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 120048.46342720096,
            "unit": "ns/iter",
            "extra": "iterations: 5824\ncpu: 120037.37980769158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 112413.55634142667,
            "unit": "ns/iter",
            "extra": "iterations: 6221\ncpu: 112407.84439800831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37565.212651990565,
            "unit": "ns/iter",
            "extra": "iterations: 18669\ncpu: 37561.24591568905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 179861.84311715834,
            "unit": "ns/iter",
            "extra": "iterations: 3901\ncpu: 179849.26941809923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 148297.67125901658,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 148290.2924968204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 147737.59710569613,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 147730.43204697827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 146295.38615931428,
            "unit": "ns/iter",
            "extra": "iterations: 4783\ncpu: 146289.35814342505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 253392.44348140244,
            "unit": "ns/iter",
            "extra": "iterations: 2769\ncpu: 253382.412423255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1027870.5051244642,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1027811.8594436243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 856178.2611386037,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 856125.9900990058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 857214.5201958796,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 857187.0257037913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 851407.8175182554,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 851407.9075425852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 549339.7570532777,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 549345.1410658336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 844579.6899879461,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 844560.0723763583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38405.05592069378,
            "unit": "ns/iter",
            "extra": "iterations: 18258\ncpu: 38405.38394128603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 185766.0029193309,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 185763.48195328965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 153343.45985562057,
            "unit": "ns/iter",
            "extra": "iterations: 4571\ncpu: 153344.89170859547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 152776.58987286483,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 152763.2836475245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 152752.13578902057,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 152753.66172624196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 255370.5886861443,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 255362.08029196825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1028099.140762456,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1028108.504398834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 859892.4061349606,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 859868.2208588955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 859577.0466258114,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 859554.1104294385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 856131.1276073788,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 856139.8773006176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 558187.906847116,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 558170.4617834407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 852772.4811665034,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 852770.7168894259 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}