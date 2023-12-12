window.BENCHMARK_DATA = {
  "lastUpdate": 1702394237952,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-14 20.04 Debug c++-17": [
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
        "date": 1702394234357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8149.074111510211,
            "unit": "ns/iter",
            "extra": "iterations: 86073\ncpu: 8149.038606764026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100611.33006879657,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 100606.01608954178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193656.95272805728,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 193646.2116191738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 288397.71186439367,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 288387.4709205716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 377296.3684672685,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 377280.8519982434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469786.1970604162,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 469755.41643984773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 560560.7152061758,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 560505.9278350514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 524416.6119999818,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524370.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 600810.6670000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600799.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6035.148712872209,
            "unit": "ns/iter",
            "extra": "iterations: 116150\ncpu: 6034.82049074472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5032.383966245144,
            "unit": "ns/iter",
            "extra": "iterations: 138882\ncpu: 5032.037989084253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4934.4244293514475,
            "unit": "ns/iter",
            "extra": "iterations: 141199\ncpu: 4934.197126041972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5252.826729252807,
            "unit": "ns/iter",
            "extra": "iterations: 140393\ncpu: 5252.741945823517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9180.413867197323,
            "unit": "ns/iter",
            "extra": "iterations: 76324\ncpu: 9180.016770609498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48418.914645574754,
            "unit": "ns/iter",
            "extra": "iterations: 17070\ncpu: 48417.176332747506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 193672.32480760702,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 193659.82344952496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158448.4413626289,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 158443.03797468345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160812.32566472515,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 160804.92174241008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162862.00114811267,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 162854.15231534638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 367884.45189007925,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 367857.9037800688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3027624.2636654363,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3027427.3311897074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2491273.3660476054,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2491136.3395225466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2467009.31578965,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2466808.684210529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2506252.238605698,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2506107.238605902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1484308.1821086432,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1484219.169329075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2407885.0051680235,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2407767.958656332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10382832.392156383,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10381826.470588224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5914819.113924514,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5914213.291139226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12296032.662791647,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12295324.41860467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49772.626181077554,
            "unit": "ns/iter",
            "extra": "iterations: 16722\ncpu: 49769.84810429357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 205641.83619866063,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 205633.64374402913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163310.49521622833,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 163303.04247990786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 167387.03787285023,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167376.19701726775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163684.8564850322,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 163681.48503453526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 383576.7832665784,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 383568.6693368934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3022091.5113267964,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3022045.307443353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2517446.4664879492,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2517221.7158177043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2465380.9052629666,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2465276.315789473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2518435.1559141637,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2518311.827956979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1471241.917591066,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1471179.2393026964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2412362.286821675,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2412206.976744185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10406781.74509777,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10406566.666666713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5896183.139240541,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5896037.341772174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 44047.47420475314,
            "unit": "ns/iter",
            "extra": "iterations: 18705\ncpu: 44046.490243250526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 192691.066396584,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 192685.64033310744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158934.73384387323,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 158930.8367575647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 161097.64663911308,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 161095.19339091258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 165018.06124030592,
            "unit": "ns/iter",
            "extra": "iterations: 5160\ncpu: 165014.28294573637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 374321.87109375116,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 374320.0086805553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3018468.2870966634,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3018383.225806466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2486164.1119999452,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2486091.7333333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2462884.17847764,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2462781.102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2510163.305630009,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2510102.412868635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1481157.1626793242,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1481117.3843700169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2410537.4407216795,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2410452.3195876204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2700.1366212123203,
            "unit": "ns/iter",
            "extra": "iterations: 259235\ncpu: 2700.098366347154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21132.326068582104,
            "unit": "ns/iter",
            "extra": "iterations: 33128\ncpu: 21131.94578604193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14975.638565022431,
            "unit": "ns/iter",
            "extra": "iterations: 46830\ncpu: 14975.387572069218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15588.264129999965,
            "unit": "ns/iter",
            "extra": "iterations: 45046\ncpu: 15587.730320117205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12048.841487785712,
            "unit": "ns/iter",
            "extra": "iterations: 58046\ncpu: 12048.304792750585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87089.62877376484,
            "unit": "ns/iter",
            "extra": "iterations: 8049\ncpu: 87089.29059510495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 192475.59511391254,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 192474.69118858245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48184.32115530681,
            "unit": "ns/iter",
            "extra": "iterations: 14507\ncpu: 48184.08354587412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48009.168038414035,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 48008.92318244181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48311.246841995366,
            "unit": "ns/iter",
            "extra": "iterations: 14487\ncpu: 48309.843307792646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102790.8233308876,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 102789.12692589742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90173.65807117158,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90172.3182052604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25104.56387902617,
            "unit": "ns/iter",
            "extra": "iterations: 27873\ncpu: 25103.924945287472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 124175.32199230093,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 124172.25534900215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 97139.45331115741,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 97138.18232197179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 96530.74219717212,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 96528.94266465027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98907.15385723073,
            "unit": "ns/iter",
            "extra": "iterations: 6948\ncpu: 98905.81462291373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 185091.3525369913,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 185085.14799154352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 809999.8229166911,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 809996.1805555624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 688807.9182266074,
            "unit": "ns/iter",
            "extra": "iterations: 1015\ncpu: 688797.8325123098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 685866.9167482922,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 685844.270323217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 693166.4792079014,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 693109.5049505034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 444317.37753811333,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 444315.4822334985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 673810.8848368428,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 673759.6928982758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24182.191847432197,
            "unit": "ns/iter",
            "extra": "iterations: 28997\ncpu: 24180.639376487245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 118873.44280631187,
            "unit": "ns/iter",
            "extra": "iterations: 5901\ncpu: 118865.63294356751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96082.4503848259,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96076.55305112786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96915.25778763277,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 96914.68918731902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 97066.68387629616,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 97063.15571507436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184158.78099501124,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 184148.24953934932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 809381.658227779,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 809318.4119677711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 690336.1767028449,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 690290.3257650479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 680531.8132295838,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 680501.2645914399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 692974.4445544499,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 692950.5940594074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 446116.1550733735,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 446114.67772814387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 671962.93173081,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 671937.1153846072 ns\nthreads: 1"
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
        "date": 1702394234357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8149.074111510211,
            "unit": "ns/iter",
            "extra": "iterations: 86073\ncpu: 8149.038606764026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100611.33006879657,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 100606.01608954178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193656.95272805728,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 193646.2116191738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 288397.71186439367,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 288387.4709205716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 377296.3684672685,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 377280.8519982434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469786.1970604162,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 469755.41643984773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 560560.7152061758,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 560505.9278350514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 524416.6119999818,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524370.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 600810.6670000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600799.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6035.148712872209,
            "unit": "ns/iter",
            "extra": "iterations: 116150\ncpu: 6034.82049074472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5032.383966245144,
            "unit": "ns/iter",
            "extra": "iterations: 138882\ncpu: 5032.037989084253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4934.4244293514475,
            "unit": "ns/iter",
            "extra": "iterations: 141199\ncpu: 4934.197126041972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5252.826729252807,
            "unit": "ns/iter",
            "extra": "iterations: 140393\ncpu: 5252.741945823517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9180.413867197323,
            "unit": "ns/iter",
            "extra": "iterations: 76324\ncpu: 9180.016770609498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48418.914645574754,
            "unit": "ns/iter",
            "extra": "iterations: 17070\ncpu: 48417.176332747506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 193672.32480760702,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 193659.82344952496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158448.4413626289,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 158443.03797468345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160812.32566472515,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 160804.92174241008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162862.00114811267,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 162854.15231534638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 367884.45189007925,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 367857.9037800688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3027624.2636654363,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3027427.3311897074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2491273.3660476054,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2491136.3395225466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2467009.31578965,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2466808.684210529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2506252.238605698,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2506107.238605902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1484308.1821086432,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1484219.169329075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2407885.0051680235,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2407767.958656332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10382832.392156383,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10381826.470588224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5914819.113924514,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5914213.291139226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12296032.662791647,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12295324.41860467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49772.626181077554,
            "unit": "ns/iter",
            "extra": "iterations: 16722\ncpu: 49769.84810429357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 205641.83619866063,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 205633.64374402913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163310.49521622833,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 163303.04247990786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 167387.03787285023,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167376.19701726775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163684.8564850322,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 163681.48503453526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 383576.7832665784,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 383568.6693368934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3022091.5113267964,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3022045.307443353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2517446.4664879492,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2517221.7158177043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2465380.9052629666,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2465276.315789473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2518435.1559141637,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2518311.827956979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1471241.917591066,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1471179.2393026964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2412362.286821675,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2412206.976744185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10406781.74509777,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10406566.666666713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5896183.139240541,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5896037.341772174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 44047.47420475314,
            "unit": "ns/iter",
            "extra": "iterations: 18705\ncpu: 44046.490243250526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 192691.066396584,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 192685.64033310744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158934.73384387323,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 158930.8367575647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 161097.64663911308,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 161095.19339091258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 165018.06124030592,
            "unit": "ns/iter",
            "extra": "iterations: 5160\ncpu: 165014.28294573637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 374321.87109375116,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 374320.0086805553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3018468.2870966634,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3018383.225806466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2486164.1119999452,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2486091.7333333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2462884.17847764,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2462781.102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2510163.305630009,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2510102.412868635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1481157.1626793242,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1481117.3843700169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2410537.4407216795,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2410452.3195876204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2700.1366212123203,
            "unit": "ns/iter",
            "extra": "iterations: 259235\ncpu: 2700.098366347154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21132.326068582104,
            "unit": "ns/iter",
            "extra": "iterations: 33128\ncpu: 21131.94578604193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14975.638565022431,
            "unit": "ns/iter",
            "extra": "iterations: 46830\ncpu: 14975.387572069218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15588.264129999965,
            "unit": "ns/iter",
            "extra": "iterations: 45046\ncpu: 15587.730320117205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12048.841487785712,
            "unit": "ns/iter",
            "extra": "iterations: 58046\ncpu: 12048.304792750585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87089.62877376484,
            "unit": "ns/iter",
            "extra": "iterations: 8049\ncpu: 87089.29059510495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 192475.59511391254,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 192474.69118858245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48184.32115530681,
            "unit": "ns/iter",
            "extra": "iterations: 14507\ncpu: 48184.08354587412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48009.168038414035,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 48008.92318244181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48311.246841995366,
            "unit": "ns/iter",
            "extra": "iterations: 14487\ncpu: 48309.843307792646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102790.8233308876,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 102789.12692589742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90173.65807117158,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90172.3182052604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25104.56387902617,
            "unit": "ns/iter",
            "extra": "iterations: 27873\ncpu: 25103.924945287472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 124175.32199230093,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 124172.25534900215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 97139.45331115741,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 97138.18232197179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 96530.74219717212,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 96528.94266465027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98907.15385723073,
            "unit": "ns/iter",
            "extra": "iterations: 6948\ncpu: 98905.81462291373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 185091.3525369913,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 185085.14799154352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 809999.8229166911,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 809996.1805555624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 688807.9182266074,
            "unit": "ns/iter",
            "extra": "iterations: 1015\ncpu: 688797.8325123098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 685866.9167482922,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 685844.270323217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 693166.4792079014,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 693109.5049505034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 444317.37753811333,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 444315.4822334985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 673810.8848368428,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 673759.6928982758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24182.191847432197,
            "unit": "ns/iter",
            "extra": "iterations: 28997\ncpu: 24180.639376487245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 118873.44280631187,
            "unit": "ns/iter",
            "extra": "iterations: 5901\ncpu: 118865.63294356751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96082.4503848259,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96076.55305112786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96915.25778763277,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 96914.68918731902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 97066.68387629616,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 97063.15571507436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184158.78099501124,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 184148.24953934932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 809381.658227779,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 809318.4119677711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 690336.1767028449,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 690290.3257650479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 680531.8132295838,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 680501.2645914399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 692974.4445544499,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 692950.5940594074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 446116.1550733735,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 446114.67772814387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 671962.93173081,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 671937.1153846072 ns\nthreads: 1"
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
        "date": 1702394234357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8149.074111510211,
            "unit": "ns/iter",
            "extra": "iterations: 86073\ncpu: 8149.038606764026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100611.33006879657,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 100606.01608954178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193656.95272805728,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 193646.2116191738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 288397.71186439367,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 288387.4709205716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 377296.3684672685,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 377280.8519982434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469786.1970604162,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 469755.41643984773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 560560.7152061758,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 560505.9278350514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 524416.6119999818,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524370.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 600810.6670000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600799.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6035.148712872209,
            "unit": "ns/iter",
            "extra": "iterations: 116150\ncpu: 6034.82049074472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5032.383966245144,
            "unit": "ns/iter",
            "extra": "iterations: 138882\ncpu: 5032.037989084253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4934.4244293514475,
            "unit": "ns/iter",
            "extra": "iterations: 141199\ncpu: 4934.197126041972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5252.826729252807,
            "unit": "ns/iter",
            "extra": "iterations: 140393\ncpu: 5252.741945823517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9180.413867197323,
            "unit": "ns/iter",
            "extra": "iterations: 76324\ncpu: 9180.016770609498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48418.914645574754,
            "unit": "ns/iter",
            "extra": "iterations: 17070\ncpu: 48417.176332747506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 193672.32480760702,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 193659.82344952496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158448.4413626289,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 158443.03797468345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160812.32566472515,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 160804.92174241008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162862.00114811267,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 162854.15231534638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 367884.45189007925,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 367857.9037800688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3027624.2636654363,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3027427.3311897074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2491273.3660476054,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2491136.3395225466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2467009.31578965,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2466808.684210529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2506252.238605698,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2506107.238605902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1484308.1821086432,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1484219.169329075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2407885.0051680235,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2407767.958656332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10382832.392156383,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10381826.470588224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5914819.113924514,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5914213.291139226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12296032.662791647,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12295324.41860467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 49772.626181077554,
            "unit": "ns/iter",
            "extra": "iterations: 16722\ncpu: 49769.84810429357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 205641.83619866063,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 205633.64374402913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163310.49521622833,
            "unit": "ns/iter",
            "extra": "iterations: 5226\ncpu: 163303.04247990786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 167387.03787285023,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 167376.19701726775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 163684.8564850322,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 163681.48503453526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 383576.7832665784,
            "unit": "ns/iter",
            "extra": "iterations: 2247\ncpu: 383568.6693368934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3022091.5113267964,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3022045.307443353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2517446.4664879492,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2517221.7158177043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2465380.9052629666,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2465276.315789473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2518435.1559141637,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2518311.827956979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1471241.917591066,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1471179.2393026964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2412362.286821675,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2412206.976744185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10406781.74509777,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10406566.666666713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5896183.139240541,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5896037.341772174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 44047.47420475314,
            "unit": "ns/iter",
            "extra": "iterations: 18705\ncpu: 44046.490243250526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 192691.066396584,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 192685.64033310744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158934.73384387323,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 158930.8367575647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 161097.64663911308,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 161095.19339091258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 165018.06124030592,
            "unit": "ns/iter",
            "extra": "iterations: 5160\ncpu: 165014.28294573637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 374321.87109375116,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 374320.0086805553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3018468.2870966634,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3018383.225806466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2486164.1119999452,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2486091.7333333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2462884.17847764,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2462781.102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2510163.305630009,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2510102.412868635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1481157.1626793242,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1481117.3843700169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2410537.4407216795,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2410452.3195876204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2700.1366212123203,
            "unit": "ns/iter",
            "extra": "iterations: 259235\ncpu: 2700.098366347154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21132.326068582104,
            "unit": "ns/iter",
            "extra": "iterations: 33128\ncpu: 21131.94578604193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14975.638565022431,
            "unit": "ns/iter",
            "extra": "iterations: 46830\ncpu: 14975.387572069218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15588.264129999965,
            "unit": "ns/iter",
            "extra": "iterations: 45046\ncpu: 15587.730320117205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12048.841487785712,
            "unit": "ns/iter",
            "extra": "iterations: 58046\ncpu: 12048.304792750585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 87089.62877376484,
            "unit": "ns/iter",
            "extra": "iterations: 8049\ncpu: 87089.29059510495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 192475.59511391254,
            "unit": "ns/iter",
            "extra": "iterations: 3643\ncpu: 192474.69118858245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 48184.32115530681,
            "unit": "ns/iter",
            "extra": "iterations: 14507\ncpu: 48184.08354587412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48009.168038414035,
            "unit": "ns/iter",
            "extra": "iterations: 14580\ncpu: 48008.92318244181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 48311.246841995366,
            "unit": "ns/iter",
            "extra": "iterations: 14487\ncpu: 48309.843307792646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 102790.8233308876,
            "unit": "ns/iter",
            "extra": "iterations: 6815\ncpu: 102789.12692589742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90173.65807117158,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90172.3182052604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25104.56387902617,
            "unit": "ns/iter",
            "extra": "iterations: 27873\ncpu: 25103.924945287472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 124175.32199230093,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 124172.25534900215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 97139.45331115741,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 97138.18232197179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 96530.74219717212,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 96528.94266465027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98907.15385723073,
            "unit": "ns/iter",
            "extra": "iterations: 6948\ncpu: 98905.81462291373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 185091.3525369913,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 185085.14799154352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 809999.8229166911,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 809996.1805555624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 688807.9182266074,
            "unit": "ns/iter",
            "extra": "iterations: 1015\ncpu: 688797.8325123098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 685866.9167482922,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 685844.270323217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 693166.4792079014,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 693109.5049505034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 444317.37753811333,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 444315.4822334985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 673810.8848368428,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 673759.6928982758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24182.191847432197,
            "unit": "ns/iter",
            "extra": "iterations: 28997\ncpu: 24180.639376487245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 118873.44280631187,
            "unit": "ns/iter",
            "extra": "iterations: 5901\ncpu: 118865.63294356751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96082.4503848259,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96076.55305112786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 96915.25778763277,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 96914.68918731902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 97066.68387629616,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 97063.15571507436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 184158.78099501124,
            "unit": "ns/iter",
            "extra": "iterations: 3799\ncpu: 184148.24953934932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 809381.658227779,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 809318.4119677711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 690336.1767028449,
            "unit": "ns/iter",
            "extra": "iterations: 1013\ncpu: 690290.3257650479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 680531.8132295838,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 680501.2645914399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 692974.4445544499,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 692950.5940594074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 446116.1550733735,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 446114.67772814387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 671962.93173081,
            "unit": "ns/iter",
            "extra": "iterations: 1040\ncpu: 671937.1153846072 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}