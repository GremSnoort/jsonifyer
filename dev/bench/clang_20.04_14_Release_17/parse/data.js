window.BENCHMARK_DATA = {
  "lastUpdate": 1705775446472,
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
        "date": 1705575659928,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 535.9897576306781,
            "unit": "ns/iter",
            "extra": "iterations: 1296575\ncpu: 535.9787131481019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5092.470710000043,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5092.491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9909.58458644441,
            "unit": "ns/iter",
            "extra": "iterations: 83991\ncpu: 9909.427200533391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14923.221001416408,
            "unit": "ns/iter",
            "extra": "iterations: 56520\ncpu: 14923.156404812451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19406.034000604464,
            "unit": "ns/iter",
            "extra": "iterations: 42911\ncpu: 19405.672205262053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24473.12760993675,
            "unit": "ns/iter",
            "extra": "iterations: 34292\ncpu: 24472.71375247873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29183.067177700334,
            "unit": "ns/iter",
            "extra": "iterations: 28700\ncpu: 29182.662020905904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33321.86791999902,
            "unit": "ns/iter",
            "extra": "iterations: 25000\ncpu: 33321.48400000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37963.595770861015,
            "unit": "ns/iter",
            "extra": "iterations: 21943\ncpu: 37962.63956614862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 523.0020952077796,
            "unit": "ns/iter",
            "extra": "iterations: 1344974\ncpu: 522.9994780568253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.24572535051095,
            "unit": "ns/iter",
            "extra": "iterations: 1677389\ncpu: 417.2450159146156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 416.8530229873328,
            "unit": "ns/iter",
            "extra": "iterations: 1676752\ncpu: 416.84715449869793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.47857241926647,
            "unit": "ns/iter",
            "extra": "iterations: 1723223\ncpu: 407.4701881300328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 870.7969122965262,
            "unit": "ns/iter",
            "extra": "iterations: 793470\ncpu: 870.7925945530392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2001.8102523969262,
            "unit": "ns/iter",
            "extra": "iterations: 393586\ncpu: 2001.8148511379939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10295.920671707083,
            "unit": "ns/iter",
            "extra": "iterations: 78963\ncpu: 10295.865152033239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8138.8432507016805,
            "unit": "ns/iter",
            "extra": "iterations: 101455\ncpu: 8132.457739884696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8220.2252584023,
            "unit": "ns/iter",
            "extra": "iterations: 98296\ncpu: 8220.251078375537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7825.797923962837,
            "unit": "ns/iter",
            "extra": "iterations: 103659\ncpu: 7825.538544651237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30070.8223315108,
            "unit": "ns/iter",
            "extra": "iterations: 27450\ncpu: 30070.24772313292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238618.6502808976,
            "unit": "ns/iter",
            "extra": "iterations: 3560\ncpu: 238613.93258427022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182282.7922550353,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 182280.65896448412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185895.09738867613,
            "unit": "ns/iter",
            "extra": "iterations: 4672\ncpu: 185891.45976027366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 183648.8970840623,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 183646.41938250474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96518.89694362413,
            "unit": "ns/iter",
            "extra": "iterations: 9063\ncpu: 96516.72735297344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179558.6019656174,
            "unit": "ns/iter",
            "extra": "iterations: 4884\ncpu: 179555.7330057329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5827.623291560151,
            "unit": "ns/iter",
            "extra": "iterations: 140918\ncpu: 5827.559999432292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27539.2268574207,
            "unit": "ns/iter",
            "extra": "iterations: 30755\ncpu: 27538.72215899855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21518.04339093075,
            "unit": "ns/iter",
            "extra": "iterations: 38833\ncpu: 21517.57010789791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21486.419591327038,
            "unit": "ns/iter",
            "extra": "iterations: 38466\ncpu: 21485.779649560624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20716.158480746464,
            "unit": "ns/iter",
            "extra": "iterations: 39967\ncpu: 20715.805539570123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48387.59012444351,
            "unit": "ns/iter",
            "extra": "iterations: 17437\ncpu: 48386.36233297018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258251.3771411459,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 258248.73006497315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200431.1126146877,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 200423.78440366947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200216.26441533794,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 200208.06340454862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200352.02427296728,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 200338.35585069793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110397.29034292253,
            "unit": "ns/iter",
            "extra": "iterations: 7932\ncpu: 110391.78013111374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191719.16323365152,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 191708.19490586995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 798088.5372384265,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 798046.7782426755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 436963.3323485915,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 436928.75430822157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2120.5128137086804,
            "unit": "ns/iter",
            "extra": "iterations: 373077\ncpu: 2120.404903009313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10571.61092547619,
            "unit": "ns/iter",
            "extra": "iterations: 79008\ncpu: 10571.076346699014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7849.414243391784,
            "unit": "ns/iter",
            "extra": "iterations: 104301\ncpu: 7849.1462210333475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8024.575373769156,
            "unit": "ns/iter",
            "extra": "iterations: 102403\ncpu: 8024.066677734056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7848.860007679665,
            "unit": "ns/iter",
            "extra": "iterations: 104170\ncpu: 7848.758759719715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29722.73800134834,
            "unit": "ns/iter",
            "extra": "iterations: 28149\ncpu: 29722.135777469943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245730.65159869439,
            "unit": "ns/iter",
            "extra": "iterations: 3628\ncpu: 245729.18963616344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185050.68907563592,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 185048.27731092452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184175.10845895714,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 184172.13149078804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183469.70777872135,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 183466.38935108107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95308.56585099718,
            "unit": "ns/iter",
            "extra": "iterations: 9195\ncpu: 95308.05872756918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176807.35913375815,
            "unit": "ns/iter",
            "extra": "iterations: 4987\ncpu: 176806.23621415693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 198.81414959312065,
            "unit": "ns/iter",
            "extra": "iterations: 3521967\ncpu: 198.8129076734675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1486.3782509476525,
            "unit": "ns/iter",
            "extra": "iterations: 470632\ncpu: 1486.3489945435006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1126.7112229429638,
            "unit": "ns/iter",
            "extra": "iterations: 620773\ncpu: 1126.6973595823263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1088.687719331062,
            "unit": "ns/iter",
            "extra": "iterations: 640869\ncpu: 1088.6661704654166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 847.3849256761283,
            "unit": "ns/iter",
            "extra": "iterations: 826518\ncpu: 847.3727129959658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9368.408089712551,
            "unit": "ns/iter",
            "extra": "iterations: 74638\ncpu: 9368.353921594855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11617.421010811455,
            "unit": "ns/iter",
            "extra": "iterations: 60407\ncpu: 11617.448308970817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2632.7218250796736,
            "unit": "ns/iter",
            "extra": "iterations: 266487\ncpu: 2632.70666111291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2645.6276971157267,
            "unit": "ns/iter",
            "extra": "iterations: 264959\ncpu: 2645.59120467695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2647.814844024041,
            "unit": "ns/iter",
            "extra": "iterations: 265009\ncpu: 2647.7979993132412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5014.717513620976,
            "unit": "ns/iter",
            "extra": "iterations: 145738\ncpu: 5014.691432570799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5045.404738102469,
            "unit": "ns/iter",
            "extra": "iterations: 139043\ncpu: 5045.298936300312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1936.9905070212726,
            "unit": "ns/iter",
            "extra": "iterations: 365744\ncpu: 1936.9498884465709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10050.638884898239,
            "unit": "ns/iter",
            "extra": "iterations: 69626\ncpu: 10050.603222933858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8027.266264726447,
            "unit": "ns/iter",
            "extra": "iterations: 86414\ncpu: 8027.093989399797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8118.382717926463,
            "unit": "ns/iter",
            "extra": "iterations: 85499\ncpu: 8118.3382261781635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8136.9235853102755,
            "unit": "ns/iter",
            "extra": "iterations: 86397\ncpu: 8136.863548502957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19094.53078567939,
            "unit": "ns/iter",
            "extra": "iterations: 36478\ncpu: 19094.432260540787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52507.23394119601,
            "unit": "ns/iter",
            "extra": "iterations: 13435\ncpu: 52506.98176404918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42705.31338113685,
            "unit": "ns/iter",
            "extra": "iterations: 16456\ncpu: 42702.75887214403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 46658.24124087522,
            "unit": "ns/iter",
            "extra": "iterations: 16440\ncpu: 46655.34063260346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41612.10521940311,
            "unit": "ns/iter",
            "extra": "iterations: 16841\ncpu: 41609.03746808377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24805.656469426583,
            "unit": "ns/iter",
            "extra": "iterations: 28341\ncpu: 24804.45996965547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41362.017379444784,
            "unit": "ns/iter",
            "extra": "iterations: 16859\ncpu: 41359.932380331644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1933.7451730440434,
            "unit": "ns/iter",
            "extra": "iterations: 363376\ncpu: 1933.6439390603673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10700.58123450793,
            "unit": "ns/iter",
            "extra": "iterations: 65354\ncpu: 10691.538390917112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9058.561270820024,
            "unit": "ns/iter",
            "extra": "iterations: 78406\ncpu: 9058.19452592911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9441.011235803726,
            "unit": "ns/iter",
            "extra": "iterations: 74405\ncpu: 9440.512062361367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9352.745419659348,
            "unit": "ns/iter",
            "extra": "iterations: 75049\ncpu: 9352.678916441297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19675.582773075446,
            "unit": "ns/iter",
            "extra": "iterations: 35549\ncpu: 19674.868491378224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51311.39035249888,
            "unit": "ns/iter",
            "extra": "iterations: 13475\ncpu: 51308.74211502732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41617.6041404126,
            "unit": "ns/iter",
            "extra": "iterations: 16665\ncpu: 41615.0435043501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42067.376916135545,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 42066.97324917271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41086.76181818694,
            "unit": "ns/iter",
            "extra": "iterations: 17050\ncpu: 41085.583577712554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26262.104835097292,
            "unit": "ns/iter",
            "extra": "iterations: 26804\ncpu: 26261.979555290403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41735.75582157038,
            "unit": "ns/iter",
            "extra": "iterations: 16791\ncpu: 41733.827645762336 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773690777,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 547.6607934930853,
            "unit": "ns/iter",
            "extra": "iterations: 1277163\ncpu: 547.6444275319596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5040.237239999215,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5040.185999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9835.036911682942,
            "unit": "ns/iter",
            "extra": "iterations: 84797\ncpu: 9834.824345200894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14499.969254013113,
            "unit": "ns/iter",
            "extra": "iterations: 56918\ncpu: 14499.381566464035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19326.823170451364,
            "unit": "ns/iter",
            "extra": "iterations: 43426\ncpu: 19325.740339888547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23988.668558067686,
            "unit": "ns/iter",
            "extra": "iterations: 35071\ncpu: 23987.516751732193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28367.1573325137,
            "unit": "ns/iter",
            "extra": "iterations: 29301\ncpu: 28366.199105832544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33341.0860397506,
            "unit": "ns/iter",
            "extra": "iterations: 24756\ncpu: 33339.808531265146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38074.35066317481,
            "unit": "ns/iter",
            "extra": "iterations: 22543\ncpu: 38073.81448786761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 512.2179981367068,
            "unit": "ns/iter",
            "extra": "iterations: 1373920\ncpu: 512.2054413648544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 403.90848191618267,
            "unit": "ns/iter",
            "extra": "iterations: 1733264\ncpu: 403.9002713954717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 407.6223378698847,
            "unit": "ns/iter",
            "extra": "iterations: 1719206\ncpu: 407.6154922679424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 386.10523241771136,
            "unit": "ns/iter",
            "extra": "iterations: 1813158\ncpu: 386.09812272289554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 856.1807317592452,
            "unit": "ns/iter",
            "extra": "iterations: 826064\ncpu: 856.1565447713493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2003.7815383383322,
            "unit": "ns/iter",
            "extra": "iterations: 399054\ncpu: 2003.7270645075603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10639.295473220198,
            "unit": "ns/iter",
            "extra": "iterations: 77892\ncpu: 10638.992451086113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8444.366178594842,
            "unit": "ns/iter",
            "extra": "iterations: 96229\ncpu: 8444.165480260632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8288.318729853892,
            "unit": "ns/iter",
            "extra": "iterations: 98036\ncpu: 8288.142111061257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7748.953495235646,
            "unit": "ns/iter",
            "extra": "iterations: 105043\ncpu: 7748.7409917843115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29924.48864668381,
            "unit": "ns/iter",
            "extra": "iterations: 27525\ncpu: 29924.08356039969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239913.40255059974,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 239905.683393402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188745.07212266568,
            "unit": "ns/iter",
            "extra": "iterations: 4631\ncpu: 188742.2802850357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186512.8567736204,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 186507.12901141503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187938.35918099966,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 187929.62317577816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98149.81997742783,
            "unit": "ns/iter",
            "extra": "iterations: 8860\ncpu: 98146.35440180583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181949.8554241871,
            "unit": "ns/iter",
            "extra": "iterations: 4821\ncpu: 181939.61833644417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5863.3624172020845,
            "unit": "ns/iter",
            "extra": "iterations: 141006\ncpu: 5863.120718267294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27597.167637094513,
            "unit": "ns/iter",
            "extra": "iterations: 30399\ncpu: 27596.575545248194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21614.146859804798,
            "unit": "ns/iter",
            "extra": "iterations: 38867\ncpu: 21613.772609154345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21552.964851244255,
            "unit": "ns/iter",
            "extra": "iterations: 39091\ncpu: 21552.418715305288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21342.72907249944,
            "unit": "ns/iter",
            "extra": "iterations: 39601\ncpu: 21341.918133380404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47718.68343516021,
            "unit": "ns/iter",
            "extra": "iterations: 17513\ncpu: 47717.32998344066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258881.29706494868,
            "unit": "ns/iter",
            "extra": "iterations: 3373\ncpu: 258867.56596501695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201048.22355105373,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 201043.00827966776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200187.20583506324,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 200179.0719044345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 199660.7742896208,
            "unit": "ns/iter",
            "extra": "iterations: 4364\ncpu: 199654.2392300643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109888.7909959747,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 109884.26810865183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 190329.02119755608,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 190324.0166083919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 794848.2876254069,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 794813.8795986618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 453175.1007120995,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 453158.7487283821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2157.1003826659658,
            "unit": "ns/iter",
            "extra": "iterations: 372126\ncpu: 2157.0489565362145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10492.69340014591,
            "unit": "ns/iter",
            "extra": "iterations: 78229\ncpu: 10492.323818532712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7944.441584641381,
            "unit": "ns/iter",
            "extra": "iterations: 102610\ncpu: 7944.152616704063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8364.496307569083,
            "unit": "ns/iter",
            "extra": "iterations: 97903\ncpu: 8364.22683676706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7798.622673773946,
            "unit": "ns/iter",
            "extra": "iterations: 104676\ncpu: 7798.076923076915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29416.164407736138,
            "unit": "ns/iter",
            "extra": "iterations: 28332\ncpu: 29415.314838345315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246904.3195478456,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 246894.76151089033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186662.28844940593,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 186654.87060803798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 187311.6057915792,
            "unit": "ns/iter",
            "extra": "iterations: 4731\ncpu: 187303.57218347143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184124.603742221,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 184118.71101871046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95525.50136418968,
            "unit": "ns/iter",
            "extra": "iterations: 9163\ncpu: 95522.36167194179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177695.82382684745,
            "unit": "ns/iter",
            "extra": "iterations: 4944\ncpu: 177689.7046925565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 188.04835556613764,
            "unit": "ns/iter",
            "extra": "iterations: 3719882\ncpu: 188.0389216647184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1429.0644283936754,
            "unit": "ns/iter",
            "extra": "iterations: 490110\ncpu: 1429.01532309073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1145.8636148130745,
            "unit": "ns/iter",
            "extra": "iterations: 611672\ncpu: 1145.7959494631052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1174.7468027598973,
            "unit": "ns/iter",
            "extra": "iterations: 595670\ncpu: 1174.700421374246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 840.367187102205,
            "unit": "ns/iter",
            "extra": "iterations: 824694\ncpu: 840.3338692896984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9328.126044039542,
            "unit": "ns/iter",
            "extra": "iterations: 75069\ncpu: 9327.851709760429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11452.413614454052,
            "unit": "ns/iter",
            "extra": "iterations: 60994\ncpu: 11452.044463389871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2643.459940383395,
            "unit": "ns/iter",
            "extra": "iterations: 264693\ncpu: 2643.3400203254496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2644.5576618612617,
            "unit": "ns/iter",
            "extra": "iterations: 264022\ncpu: 2644.45462878092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2624.8731851707976,
            "unit": "ns/iter",
            "extra": "iterations: 266554\ncpu: 2624.7589606608876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4940.214243361255,
            "unit": "ns/iter",
            "extra": "iterations: 141666\ncpu: 4940.13454180962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5022.188343162388,
            "unit": "ns/iter",
            "extra": "iterations: 140913\ncpu: 5022.017131137648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1889.6409760623706,
            "unit": "ns/iter",
            "extra": "iterations: 372886\ncpu: 1889.5490847068452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10006.985371454262,
            "unit": "ns/iter",
            "extra": "iterations: 70547\ncpu: 10006.37872623933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7873.238684430177,
            "unit": "ns/iter",
            "extra": "iterations: 88418\ncpu: 7872.959125969806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7981.768987124941,
            "unit": "ns/iter",
            "extra": "iterations: 87770\ncpu: 7981.4686111426645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7871.721981515617,
            "unit": "ns/iter",
            "extra": "iterations: 88397\ncpu: 7871.474145050167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18757.536067362318,
            "unit": "ns/iter",
            "extra": "iterations: 29334\ncpu: 18756.57257789602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51776.36788527217,
            "unit": "ns/iter",
            "extra": "iterations: 13458\ncpu: 51774.899687917656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42223.77196206174,
            "unit": "ns/iter",
            "extra": "iterations: 16870\ncpu: 42222.969768820105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42145.517656259326,
            "unit": "ns/iter",
            "extra": "iterations: 16623\ncpu: 42144.10756181233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41976.231130369386,
            "unit": "ns/iter",
            "extra": "iterations: 16614\ncpu: 41973.84133862991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24707.81376204937,
            "unit": "ns/iter",
            "extra": "iterations: 28426\ncpu: 24706.779005136308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41164.86196101774,
            "unit": "ns/iter",
            "extra": "iterations: 16930\ncpu: 41163.14825753098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1894.1180570331503,
            "unit": "ns/iter",
            "extra": "iterations: 371329\ncpu: 1894.019589097559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10640.22567903418,
            "unit": "ns/iter",
            "extra": "iterations: 65571\ncpu: 10639.679126443163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8857.483919127464,
            "unit": "ns/iter",
            "extra": "iterations: 79038\ncpu: 8857.234494799875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8007.620668358474,
            "unit": "ns/iter",
            "extra": "iterations: 87438\ncpu: 8007.473867197364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9389.55616792039,
            "unit": "ns/iter",
            "extra": "iterations: 74393\ncpu: 9389.25436533015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19994.33448927825,
            "unit": "ns/iter",
            "extra": "iterations: 34892\ncpu: 19993.86392296204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51084.86281721675,
            "unit": "ns/iter",
            "extra": "iterations: 13595\ncpu: 51082.7068775287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41509.73654661805,
            "unit": "ns/iter",
            "extra": "iterations: 16743\ncpu: 41508.660335662804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40753.070975625626,
            "unit": "ns/iter",
            "extra": "iterations: 17189\ncpu: 40751.73075804348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42051.81036138803,
            "unit": "ns/iter",
            "extra": "iterations: 16658\ncpu: 42050.21611237865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25379.552560353623,
            "unit": "ns/iter",
            "extra": "iterations: 27711\ncpu: 25378.236079535443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42208.502129163484,
            "unit": "ns/iter",
            "extra": "iterations: 16908\ncpu: 42207.36337828255 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705775446076,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 564.7489364696373,
            "unit": "ns/iter",
            "extra": "iterations: 1236448\ncpu: 564.7289655529387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5198.061529999904,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5197.490999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10157.596677434225,
            "unit": "ns/iter",
            "extra": "iterations: 82346\ncpu: 10157.14545940301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14523.789141641537,
            "unit": "ns/iter",
            "extra": "iterations: 55478\ncpu: 14522.585529399039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19438.03530122107,
            "unit": "ns/iter",
            "extra": "iterations: 43058\ncpu: 19436.641274559886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24132.964084547704,
            "unit": "ns/iter",
            "extra": "iterations: 34442\ncpu: 24131.481911619543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28505.498925757107,
            "unit": "ns/iter",
            "extra": "iterations: 29323\ncpu: 28505.214336868677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33025.89856223501,
            "unit": "ns/iter",
            "extra": "iterations: 25178\ncpu: 33023.93756454046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37497.74427718833,
            "unit": "ns/iter",
            "extra": "iterations: 22454\ncpu: 37496.904783112106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 536.1587761714067,
            "unit": "ns/iter",
            "extra": "iterations: 1298123\ncpu: 536.1250821378256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 422.69168497961056,
            "unit": "ns/iter",
            "extra": "iterations: 1659118\ncpu: 422.6842816484429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 435.6776954840774,
            "unit": "ns/iter",
            "extra": "iterations: 1612382\ncpu: 435.67237788563745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 411.6565399995118,
            "unit": "ns/iter",
            "extra": "iterations: 1700757\ncpu: 411.63646540922696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 872.040280154032,
            "unit": "ns/iter",
            "extra": "iterations: 779143\ncpu: 871.9807532121819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2064.2516898310714,
            "unit": "ns/iter",
            "extra": "iterations: 389388\ncpu: 2064.208706996622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10919.598057526371,
            "unit": "ns/iter",
            "extra": "iterations: 74956\ncpu: 10918.861732216239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8222.2831267477,
            "unit": "ns/iter",
            "extra": "iterations: 97942\ncpu: 8221.785342345484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8258.357758797021,
            "unit": "ns/iter",
            "extra": "iterations: 97876\ncpu: 8257.74960153666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7871.62541142265,
            "unit": "ns/iter",
            "extra": "iterations: 103300\ncpu: 7871.312681510141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30169.812423784806,
            "unit": "ns/iter",
            "extra": "iterations: 27882\ncpu: 30168.208880281145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239939.07189900422,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 239936.44346871556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183554.81777492477,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 183543.15856777498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184081.69589393077,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 184078.65697177133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184203.2424049314,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 184184.95857233912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97064.65918933808,
            "unit": "ns/iter",
            "extra": "iterations: 9005\ncpu: 97058.94503053885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 178709.9004924088,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 178690.6852687731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5135.388339999736,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5135.287999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27115.423295268694,
            "unit": "ns/iter",
            "extra": "iterations: 30650\ncpu: 27112.995106035843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21225.654214508926,
            "unit": "ns/iter",
            "extra": "iterations: 38842\ncpu: 21224.85968796662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21633.364410277085,
            "unit": "ns/iter",
            "extra": "iterations: 38764\ncpu: 21632.50954493859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20836.549230884128,
            "unit": "ns/iter",
            "extra": "iterations: 40371\ncpu: 20835.778157588327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 48186.584004139324,
            "unit": "ns/iter",
            "extra": "iterations: 17392\ncpu: 48184.32612695492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258524.76832152953,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 258506.29432624194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200658.59533701034,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 200640.48938134834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 199241.68734206233,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 199234.41304847298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 199333.13017616325,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 199320.22420498816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109641.30756742184,
            "unit": "ns/iter",
            "extra": "iterations: 8008\ncpu: 109633.99100899113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 191169.8435569388,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 191156.06796116522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 795235.5965058783,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 795207.4875207945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 452834.6240409366,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 452823.9386189262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2161.64826206267,
            "unit": "ns/iter",
            "extra": "iterations: 369835\ncpu: 2161.632079170449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10483.415581771886,
            "unit": "ns/iter",
            "extra": "iterations: 78579\ncpu: 10483.253795543333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7841.9011869062415,
            "unit": "ns/iter",
            "extra": "iterations: 104389\ncpu: 7841.537901503008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8163.008337411138,
            "unit": "ns/iter",
            "extra": "iterations: 100151\ncpu: 8162.631426545936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7969.052345665065,
            "unit": "ns/iter",
            "extra": "iterations: 103638\ncpu: 7968.258746791705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 29642.368601890543,
            "unit": "ns/iter",
            "extra": "iterations: 28231\ncpu: 29640.887676667542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 243747.15711136683,
            "unit": "ns/iter",
            "extra": "iterations: 3628\ncpu: 243735.03307607354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185300.48237013153,
            "unit": "ns/iter",
            "extra": "iterations: 4793\ncpu: 185286.5220112672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186058.69447956452,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 186039.38053097416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183850.5049091236,
            "unit": "ns/iter",
            "extra": "iterations: 4787\ncpu: 183842.072279089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95410.72314906589,
            "unit": "ns/iter",
            "extra": "iterations: 9171\ncpu: 95406.34609093906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176240.66123517152,
            "unit": "ns/iter",
            "extra": "iterations: 4971\ncpu: 176227.31844699173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 212.28469468505077,
            "unit": "ns/iter",
            "extra": "iterations: 3280416\ncpu: 212.27508950084234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1524.449367941484,
            "unit": "ns/iter",
            "extra": "iterations: 460084\ncpu: 1524.4198885420944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1178.8899538844837,
            "unit": "ns/iter",
            "extra": "iterations: 591343\ncpu: 1178.8525441241384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1254.274238177479,
            "unit": "ns/iter",
            "extra": "iterations: 556921\ncpu: 1254.2155889255484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 871.8808169385045,
            "unit": "ns/iter",
            "extra": "iterations: 804418\ncpu: 871.8413809735772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9490.95017870968,
            "unit": "ns/iter",
            "extra": "iterations: 73583\ncpu: 9490.556242610402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11551.230212385446,
            "unit": "ns/iter",
            "extra": "iterations: 60644\ncpu: 11550.906932260352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2654.1112911774244,
            "unit": "ns/iter",
            "extra": "iterations: 264100\ncpu: 2654.051117001163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2640.072254477846,
            "unit": "ns/iter",
            "extra": "iterations: 264039\ncpu: 2640.0187093573313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2655.5089144629737,
            "unit": "ns/iter",
            "extra": "iterations: 263897\ncpu: 2655.4125283728063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4991.512151233753,
            "unit": "ns/iter",
            "extra": "iterations: 148380\ncpu: 4991.412589297774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5028.9253651907975,
            "unit": "ns/iter",
            "extra": "iterations: 139037\ncpu: 5028.847716794857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1945.0873581258663,
            "unit": "ns/iter",
            "extra": "iterations: 360619\ncpu: 1945.0242499702063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10099.19564117022,
            "unit": "ns/iter",
            "extra": "iterations: 69147\ncpu: 10098.488726915215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8049.699481865053,
            "unit": "ns/iter",
            "extra": "iterations: 86850\ncpu: 8049.450777202043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8039.643931921517,
            "unit": "ns/iter",
            "extra": "iterations: 87194\ncpu: 8039.54515218939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8008.298327605374,
            "unit": "ns/iter",
            "extra": "iterations: 87300\ncpu: 8008.057273768596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18817.886075272072,
            "unit": "ns/iter",
            "extra": "iterations: 37358\ncpu: 18817.417955993045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51878.815846631966,
            "unit": "ns/iter",
            "extra": "iterations: 13353\ncpu: 51876.297461244234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41830.7771264551,
            "unit": "ns/iter",
            "extra": "iterations: 16718\ncpu: 41829.6207680343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42125.32245462289,
            "unit": "ns/iter",
            "extra": "iterations: 16638\ncpu: 42123.74684457242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41738.374602333846,
            "unit": "ns/iter",
            "extra": "iterations: 15088\ncpu: 41736.87698833544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24592.154020385547,
            "unit": "ns/iter",
            "extra": "iterations: 28256\ncpu: 24591.01429784849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41376.475944616956,
            "unit": "ns/iter",
            "extra": "iterations: 17044\ncpu: 41376.015019949096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1960.5402041975797,
            "unit": "ns/iter",
            "extra": "iterations: 358868\ncpu: 1960.5066486841865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11473.757072227241,
            "unit": "ns/iter",
            "extra": "iterations: 61084\ncpu: 11473.320345753486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8805.483393121855,
            "unit": "ns/iter",
            "extra": "iterations: 79726\ncpu: 8805.14135915516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8623.09556726853,
            "unit": "ns/iter",
            "extra": "iterations: 81011\ncpu: 8622.830232931412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9276.323204346878,
            "unit": "ns/iter",
            "extra": "iterations: 75460\ncpu: 9276.325205406973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20132.664003679984,
            "unit": "ns/iter",
            "extra": "iterations: 34798\ncpu: 20132.375423874924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51577.725636296425,
            "unit": "ns/iter",
            "extra": "iterations: 13555\ncpu: 51575.10143858356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41982.23355940447,
            "unit": "ns/iter",
            "extra": "iterations: 16514\ncpu: 41981.37943563039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40694.646815698725,
            "unit": "ns/iter",
            "extra": "iterations: 17178\ncpu: 40694.59774129739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40967.92326573277,
            "unit": "ns/iter",
            "extra": "iterations: 17111\ncpu: 40966.66471860255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24586.598219917643,
            "unit": "ns/iter",
            "extra": "iterations: 28538\ncpu: 24585.216202957483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41555.39198586304,
            "unit": "ns/iter",
            "extra": "iterations: 16970\ncpu: 41553.906894519336 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}