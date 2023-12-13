window.BENCHMARK_DATA = {
  "lastUpdate": 1702490380293,
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
      }
    ]
  }
}