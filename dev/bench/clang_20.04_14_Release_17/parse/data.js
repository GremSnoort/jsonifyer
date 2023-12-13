window.BENCHMARK_DATA = {
  "lastUpdate": 1702504003225,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-14 20.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490379357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 557.1297778576634,
            "unit": "ns/iter",
            "extra": "iterations: 1257572\ncpu: 557.0864332221137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5130.693969999811,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5130.636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9859.820986043296,
            "unit": "ns/iter",
            "extra": "iterations: 84256\ncpu: 9859.214774022026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15170.399910208438,
            "unit": "ns/iter",
            "extra": "iterations: 55685\ncpu: 15170.115830115834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19348.861180889624,
            "unit": "ns/iter",
            "extra": "iterations: 42595\ncpu: 19348.22396994952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24088.06614278335,
            "unit": "ns/iter",
            "extra": "iterations: 34486\ncpu: 24087.394884880807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29037.14683737529,
            "unit": "ns/iter",
            "extra": "iterations: 28821\ncpu: 29034.537316540027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33445.376252706425,
            "unit": "ns/iter",
            "extra": "iterations: 24946\ncpu: 33443.61019802775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38274.404674651916,
            "unit": "ns/iter",
            "extra": "iterations: 22376\ncpu: 38272.19342152307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 535.1024467248648,
            "unit": "ns/iter",
            "extra": "iterations: 1309383\ncpu: 535.064454021473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 424.67006560570906,
            "unit": "ns/iter",
            "extra": "iterations: 1643454\ncpu: 424.63701448291135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 435.47036282095945,
            "unit": "ns/iter",
            "extra": "iterations: 1602278\ncpu: 435.4329273696567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 409.6039050150052,
            "unit": "ns/iter",
            "extra": "iterations: 1708060\ncpu: 409.5793473297198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 875.8321678142049,
            "unit": "ns/iter",
            "extra": "iterations: 778909\ncpu: 875.7296423587355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2042.127744734688,
            "unit": "ns/iter",
            "extra": "iterations: 392251\ncpu: 2042.009325661374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10657.875254246012,
            "unit": "ns/iter",
            "extra": "iterations: 77189\ncpu: 10657.083263159257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8146.808106402561,
            "unit": "ns/iter",
            "extra": "iterations: 99847\ncpu: 8146.442056346198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8675.83113494481,
            "unit": "ns/iter",
            "extra": "iterations: 97344\ncpu: 8675.292776134107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8354.160717197641,
            "unit": "ns/iter",
            "extra": "iterations: 98104\ncpu: 8353.461632553199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30523.74945445252,
            "unit": "ns/iter",
            "extra": "iterations: 27037\ncpu: 30522.432222509866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236146.8257782734,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 236137.4658656474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181332.3764528839,
            "unit": "ns/iter",
            "extra": "iterations: 4646\ncpu: 181320.34007748557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183136.5478597706,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 183124.06969240744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184100.06357533138,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 184085.22870331488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96779.64527511402,
            "unit": "ns/iter",
            "extra": "iterations: 9069\ncpu: 96774.14268386786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 178381.02765826578,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 178367.6910469171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5154.996420000089,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5154.7789999999695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27202.894188846854,
            "unit": "ns/iter",
            "extra": "iterations: 30734\ncpu: 27202.707099629013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21895.31368662557,
            "unit": "ns/iter",
            "extra": "iterations: 38344\ncpu: 21894.711036928817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21183.805283880763,
            "unit": "ns/iter",
            "extra": "iterations: 39365\ncpu: 21183.884161056758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21246.612820381542,
            "unit": "ns/iter",
            "extra": "iterations: 39718\ncpu: 21245.23893448814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49522.63963337014,
            "unit": "ns/iter",
            "extra": "iterations: 17238\ncpu: 49518.71446803571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 260202.30321046093,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 260185.9096313912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201668.33302476595,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 201651.05299699138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 201413.97841727588,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 201400.67300998035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200391.7539627968,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 200373.12198483758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109436.58914923455,
            "unit": "ns/iter",
            "extra": "iterations: 7981\ncpu: 109431.54993108584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 190815.23857646226,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 190796.2434094904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 802420.1256366167,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 802371.2224108656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 456327.4536135412,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 456284.62327012006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2177.133547151041,
            "unit": "ns/iter",
            "extra": "iterations: 366979\ncpu: 2177.11640175597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10134.424675806451,
            "unit": "ns/iter",
            "extra": "iterations: 80970\ncpu: 10133.369149067517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8006.560490031308,
            "unit": "ns/iter",
            "extra": "iterations: 103422\ncpu: 8005.956179536218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8122.515491321551,
            "unit": "ns/iter",
            "extra": "iterations: 101573\ncpu: 8121.551987240699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7940.891690089488,
            "unit": "ns/iter",
            "extra": "iterations: 104598\ncpu: 7940.443411919904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29594.52437431628,
            "unit": "ns/iter",
            "extra": "iterations: 28329\ncpu: 29591.697553743463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244647.02653400804,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 244630.54173576614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185947.13017625271,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 185926.50244213242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189006.50840247553,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 188997.61752818484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185235.14384565712,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 185212.7699727412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99310.92000875654,
            "unit": "ns/iter",
            "extra": "iterations: 9126\ncpu: 99267.94871794879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 179715.84039747386,
            "unit": "ns/iter",
            "extra": "iterations: 4931\ncpu: 179706.14479821516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 207.68794072979614,
            "unit": "ns/iter",
            "extra": "iterations: 3368844\ncpu: 207.6828431355079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1518.3034362600004,
            "unit": "ns/iter",
            "extra": "iterations: 461461\ncpu: 1518.2349104257905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1190.0609032525103,
            "unit": "ns/iter",
            "extra": "iterations: 589049\ncpu: 1189.9904761743048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1246.1455307132878,
            "unit": "ns/iter",
            "extra": "iterations: 560246\ncpu: 1246.0911813739024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 872.8292933281172,
            "unit": "ns/iter",
            "extra": "iterations: 802763\ncpu: 872.7920943042925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9493.500053946946,
            "unit": "ns/iter",
            "extra": "iterations: 74146\ncpu: 9493.543818951823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11579.06963594842,
            "unit": "ns/iter",
            "extra": "iterations: 60486\ncpu: 11578.368548093755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2651.8964592519983,
            "unit": "ns/iter",
            "extra": "iterations: 265876\ncpu: 2651.8617701484895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2667.234707394016,
            "unit": "ns/iter",
            "extra": "iterations: 264981\ncpu: 2667.1734954581766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2658.0531430593833,
            "unit": "ns/iter",
            "extra": "iterations: 262499\ncpu: 2658.026506767641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5010.059425116464,
            "unit": "ns/iter",
            "extra": "iterations: 139924\ncpu: 5009.856779394516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5035.604695936783,
            "unit": "ns/iter",
            "extra": "iterations: 138162\ncpu: 5035.344016444471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1960.6755166509965,
            "unit": "ns/iter",
            "extra": "iterations: 359285\ncpu: 1960.2922471018908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10196.729551790424,
            "unit": "ns/iter",
            "extra": "iterations: 70324\ncpu: 10196.03549286167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7998.5371319417545,
            "unit": "ns/iter",
            "extra": "iterations: 87418\ncpu: 7998.501452790048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7990.370181476082,
            "unit": "ns/iter",
            "extra": "iterations: 87449\ncpu: 7989.884389758643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8020.820276129527,
            "unit": "ns/iter",
            "extra": "iterations: 87640\ncpu: 8020.432450935691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18773.57196461884,
            "unit": "ns/iter",
            "extra": "iterations: 37310\ncpu: 18773.1948539264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52074.86557425127,
            "unit": "ns/iter",
            "extra": "iterations: 13487\ncpu: 52072.86275672826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41974.34627966371,
            "unit": "ns/iter",
            "extra": "iterations: 16813\ncpu: 41973.5621245467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42373.80473230116,
            "unit": "ns/iter",
            "extra": "iterations: 16567\ncpu: 42373.066940302524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41470.61144959615,
            "unit": "ns/iter",
            "extra": "iterations: 16577\ncpu: 41469.27067623812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24824.68609421265,
            "unit": "ns/iter",
            "extra": "iterations: 28276\ncpu: 24823.981468383063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41077.21170063321,
            "unit": "ns/iter",
            "extra": "iterations: 17076\ncpu: 41075.269383930696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2390.2775838654225,
            "unit": "ns/iter",
            "extra": "iterations: 294520\ncpu: 2390.2597446692935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10109.263633337683,
            "unit": "ns/iter",
            "extra": "iterations: 69077\ncpu: 10108.725045963223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8847.77097675514,
            "unit": "ns/iter",
            "extra": "iterations: 78730\ncpu: 8847.596849993677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8666.89862329481,
            "unit": "ns/iter",
            "extra": "iterations: 80482\ncpu: 8666.691931114909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8706.247774978181,
            "unit": "ns/iter",
            "extra": "iterations: 80561\ncpu: 8705.776988865695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18551.14897682346,
            "unit": "ns/iter",
            "extra": "iterations: 36113\ncpu: 18550.915182898087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52191.684502815326,
            "unit": "ns/iter",
            "extra": "iterations: 13325\ncpu: 52188.105065666365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42505.98831803937,
            "unit": "ns/iter",
            "extra": "iterations: 16350\ncpu: 42505.59021406718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43135.1437341116,
            "unit": "ns/iter",
            "extra": "iterations: 16127\ncpu: 43132.10144478191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40611.98857942123,
            "unit": "ns/iter",
            "extra": "iterations: 17162\ncpu: 40609.4977275376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24516.709275463232,
            "unit": "ns/iter",
            "extra": "iterations: 28570\ncpu: 24516.0658032901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42321.4803467152,
            "unit": "ns/iter",
            "extra": "iterations: 16613\ncpu: 42319.24998495119 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702493010321,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 547.9779202284899,
            "unit": "ns/iter",
            "extra": "iterations: 1281535\ncpu: 547.9613120203506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5066.308289999597,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5066.334000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10080.45846576126,
            "unit": "ns/iter",
            "extra": "iterations: 83064\ncpu: 10080.240537416932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14720.196800225518,
            "unit": "ns/iter",
            "extra": "iterations: 56504\ncpu: 14720.260512530083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19200.25557206587,
            "unit": "ns/iter",
            "extra": "iterations: 43072\ncpu: 19200.046433878153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24590.015674984097,
            "unit": "ns/iter",
            "extra": "iterations: 34386\ncpu: 24589.216541615766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29220.545797922605,
            "unit": "ns/iter",
            "extra": "iterations: 28593\ncpu: 29219.620186758988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34157.357942561976,
            "unit": "ns/iter",
            "extra": "iterations: 24652\ncpu: 34156.57147493106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38034.0218766932,
            "unit": "ns/iter",
            "extra": "iterations: 22124\ncpu: 38031.237570059624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 522.547199729111,
            "unit": "ns/iter",
            "extra": "iterations: 1335103\ncpu: 522.5428300288453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.8184296824609,
            "unit": "ns/iter",
            "extra": "iterations: 1673203\ncpu: 417.8197146431119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 421.40154881190637,
            "unit": "ns/iter",
            "extra": "iterations: 1651072\ncpu: 421.38410681060526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.46708497436043,
            "unit": "ns/iter",
            "extra": "iterations: 1713093\ncpu: 406.452889597938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 869.392049615611,
            "unit": "ns/iter",
            "extra": "iterations: 798779\ncpu: 869.3414573993556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2019.973570218336,
            "unit": "ns/iter",
            "extra": "iterations: 393609\ncpu: 2019.8928378162072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10613.257275400802,
            "unit": "ns/iter",
            "extra": "iterations: 76525\ncpu: 10613.296308395931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8341.700246336626,
            "unit": "ns/iter",
            "extra": "iterations: 96616\ncpu: 8341.726008114607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8172.864152186642,
            "unit": "ns/iter",
            "extra": "iterations: 100193\ncpu: 8172.624834070271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7645.518116691637,
            "unit": "ns/iter",
            "extra": "iterations: 106366\ncpu: 7644.930710941475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29669.169055066297,
            "unit": "ns/iter",
            "extra": "iterations: 27494\ncpu: 29667.225576489484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241618.15434607246,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 241609.50446791216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184386.94264925385,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 184384.63513802734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 180879.92187499962,
            "unit": "ns/iter",
            "extra": "iterations: 4864\ncpu: 180877.63157894736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185195.3020698658,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 185195.81716257022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 94440.39438651179,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 94440.7033503438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 177962.14335736338,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 177960.74150360396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 6014.469631153321,
            "unit": "ns/iter",
            "extra": "iterations: 143881\ncpu: 6014.056755235238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27142.80677581325,
            "unit": "ns/iter",
            "extra": "iterations: 30845\ncpu: 27142.2758956071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21165.42632898681,
            "unit": "ns/iter",
            "extra": "iterations: 39880\ncpu: 21164.47843530591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21277.18532303923,
            "unit": "ns/iter",
            "extra": "iterations: 39763\ncpu: 21276.58124386994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20537.30755224991,
            "unit": "ns/iter",
            "extra": "iterations: 40094\ncpu: 20536.781064498467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46886.91783509156,
            "unit": "ns/iter",
            "extra": "iterations: 17331\ncpu: 46886.63089262001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258041.69999998747,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 258029.97041420196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 196036.13913042418,
            "unit": "ns/iter",
            "extra": "iterations: 4370\ncpu: 196031.39588100542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 196081.21656343938,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 196070.9566414303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197506.1330763992,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 197502.8338245289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108836.19004357271,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 108831.81082762983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191086.63968323814,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 191085.76770787494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 785165.4962531644,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 785111.1573688572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 444990.664688447,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 444975.1730959441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2137.793999932826,
            "unit": "ns/iter",
            "extra": "iterations: 387529\ncpu: 2137.6867279610033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10199.212078495026,
            "unit": "ns/iter",
            "extra": "iterations: 80871\ncpu: 10198.73254936878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7951.452317945374,
            "unit": "ns/iter",
            "extra": "iterations: 102030\ncpu: 7950.899735371933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8126.513653396928,
            "unit": "ns/iter",
            "extra": "iterations: 102209\ncpu: 8126.544629142208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7940.4442866178215,
            "unit": "ns/iter",
            "extra": "iterations: 102785\ncpu: 7940.202364158212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29318.96743521959,
            "unit": "ns/iter",
            "extra": "iterations: 28712\ncpu: 29318.44873223754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 242025.03403787344,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 242012.05050782303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 181403.98926691126,
            "unit": "ns/iter",
            "extra": "iterations: 4938\ncpu: 181396.51680842435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 181323.3740810743,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 181311.0901071207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 180686.5885062097,
            "unit": "ns/iter",
            "extra": "iterations: 4994\ncpu: 180676.85222266844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95402.98053398517,
            "unit": "ns/iter",
            "extra": "iterations: 9401\ncpu: 95396.55355813187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175485.0997991958,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 175479.95983935706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.50436283595053,
            "unit": "ns/iter",
            "extra": "iterations: 3389080\ncpu: 206.49356167455605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1430.822354123626,
            "unit": "ns/iter",
            "extra": "iterations: 484537\ncpu: 1430.7978544466182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1138.8952644547455,
            "unit": "ns/iter",
            "extra": "iterations: 622167\ncpu: 1138.8381254550538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1142.6059657077064,
            "unit": "ns/iter",
            "extra": "iterations: 603516\ncpu: 1142.5808097879706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 862.7325553339798,
            "unit": "ns/iter",
            "extra": "iterations: 837190\ncpu: 862.6872036216354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9370.103155356703,
            "unit": "ns/iter",
            "extra": "iterations: 75459\ncpu: 9369.278681138025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11336.212947565753,
            "unit": "ns/iter",
            "extra": "iterations: 63147\ncpu: 11335.735664402035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2592.8778712570165,
            "unit": "ns/iter",
            "extra": "iterations: 267914\ncpu: 2592.7002694894422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2630.287622262845,
            "unit": "ns/iter",
            "extra": "iterations: 276658\ncpu: 2630.2731169892054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2577.22137663711,
            "unit": "ns/iter",
            "extra": "iterations: 273972\ncpu: 2577.1389047056036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5003.471660000969,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5003.430000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4966.157487867457,
            "unit": "ns/iter",
            "extra": "iterations: 140741\ncpu: 4965.793905116498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1854.6040457146612,
            "unit": "ns/iter",
            "extra": "iterations: 366709\ncpu: 1854.6122402231813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9827.122356258258,
            "unit": "ns/iter",
            "extra": "iterations: 70213\ncpu: 9826.533547918487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7850.134594184779,
            "unit": "ns/iter",
            "extra": "iterations: 87084\ncpu: 7850.004593266263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7957.491502775226,
            "unit": "ns/iter",
            "extra": "iterations: 87558\ncpu: 7957.379108705081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7844.1156483127015,
            "unit": "ns/iter",
            "extra": "iterations: 89409\ncpu: 7843.453119931906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18507.89875835644,
            "unit": "ns/iter",
            "extra": "iterations: 37692\ncpu: 18507.961901729745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51547.12383143734,
            "unit": "ns/iter",
            "extra": "iterations: 13906\ncpu: 51542.78009492309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41665.04621547372,
            "unit": "ns/iter",
            "extra": "iterations: 16726\ncpu: 41664.0679182111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41930.39533625861,
            "unit": "ns/iter",
            "extra": "iterations: 16639\ncpu: 41926.39581705634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41428.614188188134,
            "unit": "ns/iter",
            "extra": "iterations: 16845\ncpu: 41426.8685069748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24271.61602471715,
            "unit": "ns/iter",
            "extra": "iterations: 28481\ncpu: 24269.72718654572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41237.78276890565,
            "unit": "ns/iter",
            "extra": "iterations: 17097\ncpu: 41235.70801895073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2153.429530590269,
            "unit": "ns/iter",
            "extra": "iterations: 327816\ncpu: 2153.239012128763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10775.790343856876,
            "unit": "ns/iter",
            "extra": "iterations: 66714\ncpu: 10775.826663069352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9452.792323296233,
            "unit": "ns/iter",
            "extra": "iterations: 74433\ncpu: 9451.970228258882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8758.575132593189,
            "unit": "ns/iter",
            "extra": "iterations: 79566\ncpu: 8758.434507201433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8826.48472420263,
            "unit": "ns/iter",
            "extra": "iterations: 79243\ncpu: 8826.21051701718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18375.309562870076,
            "unit": "ns/iter",
            "extra": "iterations: 37792\ncpu: 18374.563399661332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52394.89444850044,
            "unit": "ns/iter",
            "extra": "iterations: 13690\ncpu: 52395.10591672709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40560.09222361597,
            "unit": "ns/iter",
            "extra": "iterations: 17566\ncpu: 40558.174883296946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40864.27299619316,
            "unit": "ns/iter",
            "extra": "iterations: 17579\ncpu: 40862.40969338346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41888.84215609067,
            "unit": "ns/iter",
            "extra": "iterations: 16567\ncpu: 41888.3322267154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26229.971353283996,
            "unit": "ns/iter",
            "extra": "iterations: 26565\ncpu: 26228.21005081852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40996.11700930127,
            "unit": "ns/iter",
            "extra": "iterations: 16879\ncpu: 40994.99970377407 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702504002756,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 522.2251391673752,
            "unit": "ns/iter",
            "extra": "iterations: 1320712\ncpu: 522.2174857198238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5051.224879999836,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5050.842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9888.669197563246,
            "unit": "ns/iter",
            "extra": "iterations: 84555\ncpu: 9888.165099639285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14911.986177175566,
            "unit": "ns/iter",
            "extra": "iterations: 55922\ncpu: 14911.609026858838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19305.296493339065,
            "unit": "ns/iter",
            "extra": "iterations: 43232\ncpu: 19304.665525536642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24287.349230368225,
            "unit": "ns/iter",
            "extra": "iterations: 34367\ncpu: 24286.815840777468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29009.941294359676,
            "unit": "ns/iter",
            "extra": "iterations: 28941\ncpu: 29008.842127086136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33823.056187071415,
            "unit": "ns/iter",
            "extra": "iterations: 24632\ncpu: 33821.342156544364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37990.42215009892,
            "unit": "ns/iter",
            "extra": "iterations: 22492\ncpu: 37989.947536902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 507.24711739601895,
            "unit": "ns/iter",
            "extra": "iterations: 1376273\ncpu: 507.2083082353572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 399.41956742296117,
            "unit": "ns/iter",
            "extra": "iterations: 1746556\ncpu: 399.410955045244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 399.9275575430271,
            "unit": "ns/iter",
            "extra": "iterations: 1753861\ncpu: 399.92804446874686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 383.1736360595276,
            "unit": "ns/iter",
            "extra": "iterations: 1829332\ncpu: 383.1694301526464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 866.4332255369465,
            "unit": "ns/iter",
            "extra": "iterations: 808932\ncpu: 866.4251136065831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1899.9329158807464,
            "unit": "ns/iter",
            "extra": "iterations: 420487\ncpu: 1899.9103420557603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10052.279579154363,
            "unit": "ns/iter",
            "extra": "iterations: 81265\ncpu: 10052.181135790332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7866.388359889597,
            "unit": "ns/iter",
            "extra": "iterations: 103865\ncpu: 7866.275453713974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7830.15372408265,
            "unit": "ns/iter",
            "extra": "iterations: 105865\ncpu: 7829.957020733946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7440.238123279688,
            "unit": "ns/iter",
            "extra": "iterations: 108679\ncpu: 7440.072139051686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30521.466057825546,
            "unit": "ns/iter",
            "extra": "iterations: 27046\ncpu: 30520.831176514082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240546.51704230907,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 240540.79164375982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182756.62855313122,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 182753.51570848413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183956.88213825686,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 183952.96264491192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184742.01872176927,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 184739.07897568343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96996.65988275858,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 96994.12675588958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 182244.3614085627,
            "unit": "ns/iter",
            "extra": "iterations: 4856\ncpu: 182240.15650741346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5404.0996599997015,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5403.8740000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 29257.71449123092,
            "unit": "ns/iter",
            "extra": "iterations: 28500\ncpu: 29256.003508771955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 22619.198931033156,
            "unit": "ns/iter",
            "extra": "iterations: 36671\ncpu: 22617.973330424575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22737.051231179663,
            "unit": "ns/iter",
            "extra": "iterations: 36794\ncpu: 22735.867260966494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 22283.432253236057,
            "unit": "ns/iter",
            "extra": "iterations: 37404\ncpu: 22281.828146722306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48223.360530312166,
            "unit": "ns/iter",
            "extra": "iterations: 17122\ncpu: 48220.80948487329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 260713.33104475832,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 260700.83582089588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202703.71900441032,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 202699.371946964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202791.1300490314,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 202784.1699743172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202721.11279070465,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 202717.62790697714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110876.54294750816,
            "unit": "ns/iter",
            "extra": "iterations: 7905\ncpu: 110873.86464263103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193430.37269291477,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 193418.74583055283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 810571.9558574391,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 810526.9100169778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 446073.1573705328,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 446043.2768924322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2153.4161527818405,
            "unit": "ns/iter",
            "extra": "iterations: 372976\ncpu: 2153.3168353996057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10416.525857688057,
            "unit": "ns/iter",
            "extra": "iterations: 76747\ncpu: 10416.543969145385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8108.430576312142,
            "unit": "ns/iter",
            "extra": "iterations: 101039\ncpu: 8108.339354110825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8244.16565483082,
            "unit": "ns/iter",
            "extra": "iterations: 100148\ncpu: 8244.178615648818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8166.328918796971,
            "unit": "ns/iter",
            "extra": "iterations: 102238\ncpu: 8166.117294939267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29465.232339645798,
            "unit": "ns/iter",
            "extra": "iterations: 28312\ncpu: 29464.470895733073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 242583.13881254577,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 242579.5217152284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184667.14002947678,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 184667.44577805977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184250.0322918974,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 184247.57810861812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182668.1474932264,
            "unit": "ns/iter",
            "extra": "iterations: 4807\ncpu: 182658.99729561023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94637.67444360862,
            "unit": "ns/iter",
            "extra": "iterations: 9301\ncpu: 94631.72777120775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176735.39955804363,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 176727.13941341962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 187.66956838531345,
            "unit": "ns/iter",
            "extra": "iterations: 3733075\ncpu: 187.65982467536818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1454.3971118457807,
            "unit": "ns/iter",
            "extra": "iterations: 481761\ncpu: 1454.2613453558884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1185.6619820742867,
            "unit": "ns/iter",
            "extra": "iterations: 649007\ncpu: 1185.6309716228113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1162.270147271245,
            "unit": "ns/iter",
            "extra": "iterations: 602290\ncpu: 1162.2580484484263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 840.7711778550829,
            "unit": "ns/iter",
            "extra": "iterations: 834067\ncpu: 840.7118372984378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9257.709057615582,
            "unit": "ns/iter",
            "extra": "iterations: 75362\ncpu: 9257.17072264538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10976.15901721156,
            "unit": "ns/iter",
            "extra": "iterations: 64144\ncpu: 10975.556560239524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2604.9185151870965,
            "unit": "ns/iter",
            "extra": "iterations: 269044\ncpu: 2604.762418043147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2626.694541300778,
            "unit": "ns/iter",
            "extra": "iterations: 266144\ncpu: 2626.562312131799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2593.950659907423,
            "unit": "ns/iter",
            "extra": "iterations: 269659\ncpu: 2593.7925305663707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4997.577178473639,
            "unit": "ns/iter",
            "extra": "iterations: 139903\ncpu: 4997.447517208373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4983.805293831491,
            "unit": "ns/iter",
            "extra": "iterations: 137443\ncpu: 4983.41276019876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1883.2607467923103,
            "unit": "ns/iter",
            "extra": "iterations: 371134\ncpu: 1883.1370879520607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9900.125373600025,
            "unit": "ns/iter",
            "extra": "iterations: 70597\ncpu: 9899.487230335635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7997.942695934823,
            "unit": "ns/iter",
            "extra": "iterations: 87376\ncpu: 7997.461545504494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7800.7287687168655,
            "unit": "ns/iter",
            "extra": "iterations: 87689\ncpu: 7800.550810249832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7790.988474781247,
            "unit": "ns/iter",
            "extra": "iterations: 89456\ncpu: 7790.504829189776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18713.308547601828,
            "unit": "ns/iter",
            "extra": "iterations: 37414\ncpu: 18711.869888276862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52143.482049757506,
            "unit": "ns/iter",
            "extra": "iterations: 13426\ncpu: 52142.417697005185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41512.251864123835,
            "unit": "ns/iter",
            "extra": "iterations: 16898\ncpu: 41511.788377322686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42371.49460366979,
            "unit": "ns/iter",
            "extra": "iterations: 16678\ncpu: 42370.87780309448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41402.87285773525,
            "unit": "ns/iter",
            "extra": "iterations: 16863\ncpu: 41402.947281029745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24753.296304162617,
            "unit": "ns/iter",
            "extra": "iterations: 28248\ncpu: 24752.722316623727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41310.75613901243,
            "unit": "ns/iter",
            "extra": "iterations: 17063\ncpu: 41310.3909042963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1935.086137799586,
            "unit": "ns/iter",
            "extra": "iterations: 363557\ncpu: 1935.055300819414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 12091.038132295562,
            "unit": "ns/iter",
            "extra": "iterations: 57825\ncpu: 12090.907047125002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9312.500800697928,
            "unit": "ns/iter",
            "extra": "iterations: 75559\ncpu: 9312.189150200564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9185.575670723778,
            "unit": "ns/iter",
            "extra": "iterations: 76410\ncpu: 9185.23229943711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9434.27610396951,
            "unit": "ns/iter",
            "extra": "iterations: 73983\ncpu: 9434.20921022402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18872.826261052465,
            "unit": "ns/iter",
            "extra": "iterations: 37211\ncpu: 18872.74193114934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52396.32820820344,
            "unit": "ns/iter",
            "extra": "iterations: 13333\ncpu: 52395.72489312181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41848.616232827546,
            "unit": "ns/iter",
            "extra": "iterations: 16596\ncpu: 41848.33092311409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41415.43991985313,
            "unit": "ns/iter",
            "extra": "iterations: 16969\ncpu: 41414.52059638106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42361.25553539526,
            "unit": "ns/iter",
            "extra": "iterations: 16530\ncpu: 42360.19963702339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26123.004245495762,
            "unit": "ns/iter",
            "extra": "iterations: 26852\ncpu: 26122.862356621477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42070.71951074705,
            "unit": "ns/iter",
            "extra": "iterations: 16842\ncpu: 42070.34793967478 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}