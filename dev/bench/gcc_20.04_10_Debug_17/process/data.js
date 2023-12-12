window.BENCHMARK_DATA = {
  "lastUpdate": 1702397929350,
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
      }
    ]
  }
}