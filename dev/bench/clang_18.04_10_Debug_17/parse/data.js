window.BENCHMARK_DATA = {
  "lastUpdate": 1702394216298,
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394215502,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8441.394316548278,
            "unit": "ns/iter",
            "extra": "iterations: 82837\ncpu: 8440.817509084105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61173.59852697025,
            "unit": "ns/iter",
            "extra": "iterations: 13849\ncpu: 61169.6440176186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112663.72279692182,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 112657.16904543668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164598.8764302011,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 164586.47978642257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 215732.74602385785,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 215721.96819085494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 266490.4355733594,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 266465.9062885328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 318742.0775735377,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 318727.3529411763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 369501.64588637196,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 369480.7463952504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 419957.821256046,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 419948.3091787443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7042.03332264385,
            "unit": "ns/iter",
            "extra": "iterations: 99782\ncpu: 7041.713936381311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5786.5167413016425,
            "unit": "ns/iter",
            "extra": "iterations: 120809\ncpu: 5786.346215927619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5677.4445832690935,
            "unit": "ns/iter",
            "extra": "iterations: 123257\ncpu: 5677.1177296218575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5756.595387257083,
            "unit": "ns/iter",
            "extra": "iterations: 122270\ncpu: 5756.443935552457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10073.77776821613,
            "unit": "ns/iter",
            "extra": "iterations: 69720\ncpu: 10073.386402753877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 33286.562349682434,
            "unit": "ns/iter",
            "extra": "iterations: 24531\ncpu: 33285.691573926844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 168936.82609550245,
            "unit": "ns/iter",
            "extra": "iterations: 5089\ncpu: 168931.61721359796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 125853.16263025742,
            "unit": "ns/iter",
            "extra": "iterations: 6813\ncpu: 125847.3800088065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 127127.27591847985,
            "unit": "ns/iter",
            "extra": "iterations: 6723\ncpu: 127122.93618920159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120831.64762581221,
            "unit": "ns/iter",
            "extra": "iterations: 7055\ncpu: 120823.26009922064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 382608.61244980624,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 382580.52208835335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2032000.6252723727,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2031918.9542483608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1628056.796847816,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1627999.4746059529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1584335.9165245907,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1584296.5928449747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1572854.729591866,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1572804.7619047656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 869771.5262663839,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 869736.5853658529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1540967.343283697,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1540906.7993366455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38890.12030680314,
            "unit": "ns/iter",
            "extra": "iterations: 21121\ncpu: 38889.52227640733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 194065.384615378,
            "unit": "ns/iter",
            "extra": "iterations: 4407\ncpu: 194057.06830043133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 149878.9750218339,
            "unit": "ns/iter",
            "extra": "iterations: 5725\ncpu: 149876.47161572048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 152910.61989658882,
            "unit": "ns/iter",
            "extra": "iterations: 5609\ncpu: 152904.06489570293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 147803.36519777196,
            "unit": "ns/iter",
            "extra": "iterations: 5764\ncpu: 147802.29007633633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 358734.5529122174,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 358715.75061525917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2077778.1893097817,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2077695.322939869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1658963.8092692974,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1658841.7112299532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1632557.0700525057,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1632464.273204901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1607630.716263088,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1607536.1591695466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 891052.6504297798,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 890992.4546322805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1577688.9898477152,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1577596.785109982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5489738.940000279,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5489259.999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3376684.46014501,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3376480.4347826084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27900.114638989773,
            "unit": "ns/iter",
            "extra": "iterations: 29196\ncpu: 27899.07179065632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 153357.97140305155,
            "unit": "ns/iter",
            "extra": "iterations: 5595\ncpu: 153354.06613047348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 115817.3001475904,
            "unit": "ns/iter",
            "extra": "iterations: 7453\ncpu: 115810.78760230834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 121128.3775682583,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 121123.17759639674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 115943.49190719238,
            "unit": "ns/iter",
            "extra": "iterations: 7414\ncpu: 115940.49096304267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 295487.609296084,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 295478.41023913847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2026913.1778741903,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2026827.982646427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1613098.898100116,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1613059.0673575108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1606889.2783504736,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1606820.6185567041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1564756.6739494132,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1564730.9243697496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 853928.7904411118,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 853890.2573529405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1537846.2779605908,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1537788.65131579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3181.065924871534,
            "unit": "ns/iter",
            "extra": "iterations: 219917\ncpu: 3180.9623630733254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20302.06918311841,
            "unit": "ns/iter",
            "extra": "iterations: 34546\ncpu: 20301.904706767797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16700.21532594483,
            "unit": "ns/iter",
            "extra": "iterations: 41955\ncpu: 16699.647241091752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15638.804484603917,
            "unit": "ns/iter",
            "extra": "iterations: 44820\ncpu: 15638.525211959002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12213.994283024569,
            "unit": "ns/iter",
            "extra": "iterations: 57373\ncpu: 12213.502867202253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103402.3800911608,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 103398.70607263676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132212.452093555,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 132211.44850999565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34189.98625648519,
            "unit": "ns/iter",
            "extra": "iterations: 20446\ncpu: 34189.05898464256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33863.83200309586,
            "unit": "ns/iter",
            "extra": "iterations: 20673\ncpu: 33862.60339573385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33391.579672821164,
            "unit": "ns/iter",
            "extra": "iterations: 20967\ncpu: 33390.8475222968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68447.14037145388,
            "unit": "ns/iter",
            "extra": "iterations: 10230\ncpu: 68445.7673509284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63009.221503057975,
            "unit": "ns/iter",
            "extra": "iterations: 11124\ncpu: 63006.71521035517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23908.556598300056,
            "unit": "ns/iter",
            "extra": "iterations: 29303\ncpu: 23908.38139439631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 122186.42354793604,
            "unit": "ns/iter",
            "extra": "iterations: 5716\ncpu: 122182.96011196556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97695.51340034508,
            "unit": "ns/iter",
            "extra": "iterations: 7164\ncpu: 97689.43327749854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96314.89188441684,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96305.1707451965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95039.75227365864,
            "unit": "ns/iter",
            "extra": "iterations: 7367\ncpu: 95032.02117551179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 177805.87890329858,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 177797.02970297157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 594050.1754236713,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 594030.3389830532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 494117.5920960047,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 494085.4622441742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 488716.72701950074,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 488672.0055710337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 478141.36705405934,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478100.2050580962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 301473.6590517549,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 301459.1379310322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 475716.2544097721,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475694.57259158225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23514.431667343553,
            "unit": "ns/iter",
            "extra": "iterations: 29532\ncpu: 23513.937423811603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117856.0174133462,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 117853.47421808874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95426.06454693776,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 95423.43067685503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97057.29327789228,
            "unit": "ns/iter",
            "extra": "iterations: 7215\ncpu: 97054.12335412252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94884.72745762642,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 94881.03050847388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 175230.1370927575,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 175226.7669172938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 588796.795302001,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 588773.2382550391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 484079.41107266146,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 484047.5432525887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 489214.4400279093,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 489181.1715481174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 472821.9045362404,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 472817.53554502444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305081.849434295,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 305075.41340295965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 472699.5998649965,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 472678.67746288254 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}