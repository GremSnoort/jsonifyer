window.BENCHMARK_DATA = {
  "lastUpdate": 1702412529690,
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
      }
    ]
  }
}