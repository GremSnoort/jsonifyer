window.BENCHMARK_DATA = {
  "lastUpdate": 1702392405454,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-10 18.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392405083,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8629.78826643639,
            "unit": "ns/iter",
            "extra": "iterations: 81220\ncpu: 8629.511204136912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 63043.17223880525,
            "unit": "ns/iter",
            "extra": "iterations: 13400\ncpu: 63041.559701492544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 116753.03143712811,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 116745.0462710942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168818.77383287146,
            "unit": "ns/iter",
            "extra": "iterations: 5098\ncpu: 168809.72930561003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 223913.31613889575,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 223908.58018386093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 274488.5502696099,
            "unit": "ns/iter",
            "extra": "iterations: 3153\ncpu: 274476.7522993973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 326722.8019578129,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 326721.2725903613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 380554.24312528555,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 380549.27979048435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 432516.10487075394,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 432497.61431411613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7191.691891336376,
            "unit": "ns/iter",
            "extra": "iterations: 97180\ncpu: 7191.585717225753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5843.940870447104,
            "unit": "ns/iter",
            "extra": "iterations: 120329\ncpu: 5843.908783418806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5893.427546195243,
            "unit": "ns/iter",
            "extra": "iterations: 119276\ncpu: 5893.271068781657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5865.446179225029,
            "unit": "ns/iter",
            "extra": "iterations: 120028\ncpu: 5865.2597727197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10046.194764607018,
            "unit": "ns/iter",
            "extra": "iterations: 69756\ncpu: 10045.994609782689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 33721.601613631254,
            "unit": "ns/iter",
            "extra": "iterations: 24293\ncpu: 33720.33507594783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 160931.80018833064,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 160928.56873822972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 123340.3899971013,
            "unit": "ns/iter",
            "extra": "iterations: 6918\ncpu: 123338.52269442019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 124685.7804699912,
            "unit": "ns/iter",
            "extra": "iterations: 6851\ncpu: 124683.75419646729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 119286.42491968173,
            "unit": "ns/iter",
            "extra": "iterations: 7159\ncpu: 119281.78516552632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 378756.8696691917,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 378745.3168593058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2099573.2250580164,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2099456.8445475656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1644782.145132793,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1644709.9115044212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1655639.2178571855,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1655544.2857142831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1612534.3298610693,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1612451.3888888864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 877229.7393365062,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 877181.0426540266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1583045.742759819,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1582975.6388415701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41403.82604754273,
            "unit": "ns/iter",
            "extra": "iterations: 19856\ncpu: 41403.444802578575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 193789.37158836468,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 193790.22371364644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153713.43764538562,
            "unit": "ns/iter",
            "extra": "iterations: 5589\ncpu: 153710.30595813226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 147775.77350721243,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 147769.49210706935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145455.72369531958,
            "unit": "ns/iter",
            "extra": "iterations: 5921\ncpu: 145450.73467319735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 340838.93299373105,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 340822.25705329067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2127047.597254219,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2126887.6430205987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1669310.080935105,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1669214.7482014361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1691828.4272727843,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1691736.1818181833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1691759.1060071127,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1691672.9681978787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 912894.0852105367,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 912858.3741429972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1619888.4765216184,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1619780.869565214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5594327.950000206,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5593854.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3398768.576642191,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3398644.525547435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31882.628276750787,
            "unit": "ns/iter",
            "extra": "iterations: 25597\ncpu: 31881.126694534516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 154389.84064459568,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 154376.27573858577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 117498.4691053511,
            "unit": "ns/iter",
            "extra": "iterations: 7299\ncpu: 117489.17659953442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 120525.87792572237,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 120520.96706377072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 113250.7378435461,
            "unit": "ns/iter",
            "extra": "iterations: 7568\ncpu: 113246.0755813954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288566.3064085588,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 288545.49399198894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2117267.122171873,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2117163.3484162954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1635355.581436076,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1635273.2049036738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1653117.494680923,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1653024.8226950427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1605225.282758605,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1605140.3448275866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 866851.598696462,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 866808.472998139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1579955.721562126,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1579834.9745331164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3221.4535731358174,
            "unit": "ns/iter",
            "extra": "iterations: 217568\ncpu: 3221.4383549051604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21158.38650176692,
            "unit": "ns/iter",
            "extra": "iterations: 33071\ncpu: 21158.250430890963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16891.89099240554,
            "unit": "ns/iter",
            "extra": "iterations: 41465\ncpu: 16891.086458458944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 17131.2962872413,
            "unit": "ns/iter",
            "extra": "iterations: 40913\ncpu: 17130.36443184317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12250.500350372447,
            "unit": "ns/iter",
            "extra": "iterations: 57082\ncpu: 12249.728460810738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 101508.98341266623,
            "unit": "ns/iter",
            "extra": "iterations: 6933\ncpu: 101500.79330737148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 137960.58046088667,
            "unit": "ns/iter",
            "extra": "iterations: 5077\ncpu: 137953.16131573747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 35247.20331135894,
            "unit": "ns/iter",
            "extra": "iterations: 19871\ncpu: 35245.88596447069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 35101.444567184524,
            "unit": "ns/iter",
            "extra": "iterations: 19916\ncpu: 35099.33721630881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34790.03867156063,
            "unit": "ns/iter",
            "extra": "iterations: 20144\ncpu: 34787.48510722791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68386.88777810057,
            "unit": "ns/iter",
            "extra": "iterations: 10203\ncpu: 68380.07448789633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 64747.566512489575,
            "unit": "ns/iter",
            "extra": "iterations: 10810\ncpu: 64746.83626272024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24166.467699634344,
            "unit": "ns/iter",
            "extra": "iterations: 28978\ncpu: 24165.96383463318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 123225.95690413113,
            "unit": "ns/iter",
            "extra": "iterations: 5685\ncpu: 123223.11345646341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 99119.81888984545,
            "unit": "ns/iter",
            "extra": "iterations: 7062\ncpu: 99113.57972245912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 98666.28438556388,
            "unit": "ns/iter",
            "extra": "iterations: 7096\ncpu: 98660.01972942491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 97640.94247109097,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 97636.53712216124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 174650.2218601091,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 174638.1298571094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 613383.3877192118,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 613355.3508771864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 505770.9031792072,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 505737.138728324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 504910.9632034927,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 504886.4357864378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 490346.5969209274,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 490307.06787963345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 308416.22075640026,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 308400.7036059861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 488944.75859653315,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 488933.47368421376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23988.09914869052,
            "unit": "ns/iter",
            "extra": "iterations: 29249\ncpu: 23988.20814386817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 120432.52800687127,
            "unit": "ns/iter",
            "extra": "iterations: 5820\ncpu: 120422.6975945017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97775.7671787693,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 97770.64245810112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 100012.51014575787,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 100005.07287796398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 99120.31721497972,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 99112.81905842412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170491.55590820318,
            "unit": "ns/iter",
            "extra": "iterations: 4096\ncpu: 170484.814453125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613594.3056768347,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 613581.9213973765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 498505.2877493005,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 498474.78632478556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 500950.15214286116,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 500935.85714286345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 485825.43910928664,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 485808.2115518444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306644.92534039315,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 306626.0869565205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 488406.5585773747,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 488375.244072516 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}