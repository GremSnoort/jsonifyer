window.BENCHMARK_DATA = {
  "lastUpdate": 1705774842669,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-7 18.04 Release c++-17": [
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
        "date": 1702490279785,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.9501044589315,
            "unit": "ns/iter",
            "extra": "iterations: 980769\ncpu: 712.9551403031703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11088.905198083521,
            "unit": "ns/iter",
            "extra": "iterations: 74893\ncpu: 11088.665162298214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24789.282125575304,
            "unit": "ns/iter",
            "extra": "iterations: 33478\ncpu: 24788.71497699982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39880.817709286726,
            "unit": "ns/iter",
            "extra": "iterations: 21932\ncpu: 39880.15684844064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50040.325436633306,
            "unit": "ns/iter",
            "extra": "iterations: 16547\ncpu: 50038.76231341029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50219.90199999209,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50219.650000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61619.69559999534,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61616.75999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70812.62832506697,
            "unit": "ns/iter",
            "extra": "iterations: 12293\ncpu: 70812.46237696252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80798.6673450461,
            "unit": "ns/iter",
            "extra": "iterations: 10810\ncpu: 80798.57539315442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 594.1129575445367,
            "unit": "ns/iter",
            "extra": "iterations: 1177044\ncpu: 594.1110952521741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 493.4158829263708,
            "unit": "ns/iter",
            "extra": "iterations: 1416817\ncpu: 493.4084641841538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 491.85302695703854,
            "unit": "ns/iter",
            "extra": "iterations: 1423261\ncpu: 491.8504757735925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 487.29033274542223,
            "unit": "ns/iter",
            "extra": "iterations: 1424903\ncpu: 487.28018679166195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 955.2622792293063,
            "unit": "ns/iter",
            "extra": "iterations: 732151\ncpu: 955.2132005556235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3428.3791141040365,
            "unit": "ns/iter",
            "extra": "iterations: 231946\ncpu: 3428.3238339958407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15615.987072257352,
            "unit": "ns/iter",
            "extra": "iterations: 52368\ncpu: 15615.79781545983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12332.481045181454,
            "unit": "ns/iter",
            "extra": "iterations: 66553\ncpu: 12332.458341472206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11739.98505040616,
            "unit": "ns/iter",
            "extra": "iterations: 69634\ncpu: 11739.838297383465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12017.562270470937,
            "unit": "ns/iter",
            "extra": "iterations: 68074\ncpu: 12017.400182154706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41188.165325387985,
            "unit": "ns/iter",
            "extra": "iterations: 20130\ncpu: 41187.42175856936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 456461.3417059121,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 456459.60230245953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 370087.56462587934,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 370079.6768707485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369039.41842775466,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 369035.71428571414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370842.934468125,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 370842.12765957485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 225541.13793104255,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 225538.008815141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 365971.7473505477,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 365960.0254345057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1883524.2903886212,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1883507.9754601174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 751213.6857835222,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 751212.277867527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2524742.3406593385,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2524671.4285714254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3373.920136082966,
            "unit": "ns/iter",
            "extra": "iterations: 223981\ncpu: 3373.7062518695775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15512.054839431104,
            "unit": "ns/iter",
            "extra": "iterations: 53684\ncpu: 15511.753967662638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12190.484087002966,
            "unit": "ns/iter",
            "extra": "iterations: 68089\ncpu: 12189.945512490976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11704.159822000956,
            "unit": "ns/iter",
            "extra": "iterations: 71686\ncpu: 11703.656222972364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11947.527220876806,
            "unit": "ns/iter",
            "extra": "iterations: 69781\ncpu: 11946.780642295229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40716.242259091574,
            "unit": "ns/iter",
            "extra": "iterations: 20734\ncpu: 40715.12973859346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 460154.7444444107,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 460137.14285714336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 377662.2161694733,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 377638.21876350907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375449.753852756,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 375448.8869863022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373198.2119518649,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 373181.55631986144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222342.77358489696,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 222336.3844977042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371610.8112724041,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 371583.6037574748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1881839.1554191061,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1881779.9591001954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 746256.0851910552,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 746212.7388535069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3716.582618075259,
            "unit": "ns/iter",
            "extra": "iterations: 215074\ncpu: 3716.3957521597054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16677.57221709256,
            "unit": "ns/iter",
            "extra": "iterations: 49822\ncpu: 16677.102484846044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13171.58803267548,
            "unit": "ns/iter",
            "extra": "iterations: 63289\ncpu: 13171.356791859549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12549.392519276229,
            "unit": "ns/iter",
            "extra": "iterations: 66277\ncpu: 12548.961178085916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12913.532220532577,
            "unit": "ns/iter",
            "extra": "iterations: 64462\ncpu: 12912.913034035573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40241.933262562816,
            "unit": "ns/iter",
            "extra": "iterations: 20723\ncpu: 40240.68908941783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 453363.1319261237,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 453343.2189973603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379844.96314172243,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 379829.66213251546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372089.4847311752,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 372067.4408602141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375159.70443773246,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 375147.5657044398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225845.35943984255,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225836.5923236514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372690.0806730016,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 372667.2562553923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.9432287269491,
            "unit": "ns/iter",
            "extra": "iterations: 2357090\ncpu: 296.9414829302239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1570.3059348759102,
            "unit": "ns/iter",
            "extra": "iterations: 446193\ncpu: 1570.2518865154675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1241.5823394149404,
            "unit": "ns/iter",
            "extra": "iterations: 563175\ncpu: 1241.5345141385847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1222.639676262169,
            "unit": "ns/iter",
            "extra": "iterations: 570956\ncpu: 1222.5766959275413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1004.8123659095362,
            "unit": "ns/iter",
            "extra": "iterations: 697757\ncpu: 1004.7579601494559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7449.767967293136,
            "unit": "ns/iter",
            "extra": "iterations: 98081\ncpu: 7449.716051019034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18376.195835413455,
            "unit": "ns/iter",
            "extra": "iterations: 38083\ncpu: 18375.773967386842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4579.349220245724,
            "unit": "ns/iter",
            "extra": "iterations: 153061\ncpu: 4579.1475294163465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4532.90422142993,
            "unit": "ns/iter",
            "extra": "iterations: 152247\ncpu: 4532.59571617168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4553.256000832605,
            "unit": "ns/iter",
            "extra": "iterations: 153687\ncpu: 4553.15674064817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9522.929356763081,
            "unit": "ns/iter",
            "extra": "iterations: 73581\ncpu: 9522.48542422645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8662.26243182874,
            "unit": "ns/iter",
            "extra": "iterations: 80680\ncpu: 8661.970748636537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3315.8826644901515,
            "unit": "ns/iter",
            "extra": "iterations: 210712\ncpu: 3315.714339952157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16260.880539095262,
            "unit": "ns/iter",
            "extra": "iterations: 43035\ncpu: 16260.982920878574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12723.009440422966,
            "unit": "ns/iter",
            "extra": "iterations: 54023\ncpu: 12722.84582492633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12666.23456038009,
            "unit": "ns/iter",
            "extra": "iterations: 55798\ncpu: 12665.823147783214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13011.377343052794,
            "unit": "ns/iter",
            "extra": "iterations: 53776\ncpu: 13011.296861053337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27917.879045453778,
            "unit": "ns/iter",
            "extra": "iterations: 25059\ncpu: 27917.19142822925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98107.55169028047,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 98108.16383784555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85242.83966962948,
            "unit": "ns/iter",
            "extra": "iterations: 8233\ncpu: 85242.51184258597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84169.26914238295,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84167.26744889365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84017.41873643274,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 84016.12008680914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54515.7290759145,
            "unit": "ns/iter",
            "extra": "iterations: 12856\ncpu: 54514.9113254506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83932.57938218531,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 83933.12978927177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2988.626253752121,
            "unit": "ns/iter",
            "extra": "iterations: 232203\ncpu: 2988.6103969371215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15338.43971383605,
            "unit": "ns/iter",
            "extra": "iterations: 45848\ncpu: 15338.252486477013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12075.276933688814,
            "unit": "ns/iter",
            "extra": "iterations: 57985\ncpu: 12075.216004139093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11932.978102190726,
            "unit": "ns/iter",
            "extra": "iterations: 58225\ncpu: 11932.82095319882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12367.555449449497,
            "unit": "ns/iter",
            "extra": "iterations: 56547\ncpu: 12367.635772012512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27259.126006615203,
            "unit": "ns/iter",
            "extra": "iterations: 25705\ncpu: 27258.478895156437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98439.80651473973,
            "unit": "ns/iter",
            "extra": "iterations: 7153\ncpu: 98437.22913462874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83704.9702295619,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83703.82592061121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82759.84426718202,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 82759.06655554289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83247.62507433652,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83248.1741405957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55296.56484991802,
            "unit": "ns/iter",
            "extra": "iterations: 12660\ncpu: 55295.04739336575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84033.61276748989,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 84031.48593411861 ns\nthreads: 1"
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
        "date": 1702490279785,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.9501044589315,
            "unit": "ns/iter",
            "extra": "iterations: 980769\ncpu: 712.9551403031703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11088.905198083521,
            "unit": "ns/iter",
            "extra": "iterations: 74893\ncpu: 11088.665162298214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24789.282125575304,
            "unit": "ns/iter",
            "extra": "iterations: 33478\ncpu: 24788.71497699982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39880.817709286726,
            "unit": "ns/iter",
            "extra": "iterations: 21932\ncpu: 39880.15684844064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50040.325436633306,
            "unit": "ns/iter",
            "extra": "iterations: 16547\ncpu: 50038.76231341029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50219.90199999209,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50219.650000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61619.69559999534,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61616.75999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70812.62832506697,
            "unit": "ns/iter",
            "extra": "iterations: 12293\ncpu: 70812.46237696252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80798.6673450461,
            "unit": "ns/iter",
            "extra": "iterations: 10810\ncpu: 80798.57539315442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 594.1129575445367,
            "unit": "ns/iter",
            "extra": "iterations: 1177044\ncpu: 594.1110952521741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 493.4158829263708,
            "unit": "ns/iter",
            "extra": "iterations: 1416817\ncpu: 493.4084641841538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 491.85302695703854,
            "unit": "ns/iter",
            "extra": "iterations: 1423261\ncpu: 491.8504757735925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 487.29033274542223,
            "unit": "ns/iter",
            "extra": "iterations: 1424903\ncpu: 487.28018679166195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 955.2622792293063,
            "unit": "ns/iter",
            "extra": "iterations: 732151\ncpu: 955.2132005556235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3428.3791141040365,
            "unit": "ns/iter",
            "extra": "iterations: 231946\ncpu: 3428.3238339958407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15615.987072257352,
            "unit": "ns/iter",
            "extra": "iterations: 52368\ncpu: 15615.79781545983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12332.481045181454,
            "unit": "ns/iter",
            "extra": "iterations: 66553\ncpu: 12332.458341472206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11739.98505040616,
            "unit": "ns/iter",
            "extra": "iterations: 69634\ncpu: 11739.838297383465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12017.562270470937,
            "unit": "ns/iter",
            "extra": "iterations: 68074\ncpu: 12017.400182154706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41188.165325387985,
            "unit": "ns/iter",
            "extra": "iterations: 20130\ncpu: 41187.42175856936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 456461.3417059121,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 456459.60230245953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 370087.56462587934,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 370079.6768707485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369039.41842775466,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 369035.71428571414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370842.934468125,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 370842.12765957485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 225541.13793104255,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 225538.008815141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 365971.7473505477,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 365960.0254345057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1883524.2903886212,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1883507.9754601174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 751213.6857835222,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 751212.277867527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2524742.3406593385,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2524671.4285714254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3373.920136082966,
            "unit": "ns/iter",
            "extra": "iterations: 223981\ncpu: 3373.7062518695775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15512.054839431104,
            "unit": "ns/iter",
            "extra": "iterations: 53684\ncpu: 15511.753967662638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12190.484087002966,
            "unit": "ns/iter",
            "extra": "iterations: 68089\ncpu: 12189.945512490976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11704.159822000956,
            "unit": "ns/iter",
            "extra": "iterations: 71686\ncpu: 11703.656222972364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11947.527220876806,
            "unit": "ns/iter",
            "extra": "iterations: 69781\ncpu: 11946.780642295229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40716.242259091574,
            "unit": "ns/iter",
            "extra": "iterations: 20734\ncpu: 40715.12973859346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 460154.7444444107,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 460137.14285714336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 377662.2161694733,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 377638.21876350907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375449.753852756,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 375448.8869863022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373198.2119518649,
            "unit": "ns/iter",
            "extra": "iterations: 2326\ncpu: 373181.55631986144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222342.77358489696,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 222336.3844977042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371610.8112724041,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 371583.6037574748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1881839.1554191061,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1881779.9591001954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 746256.0851910552,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 746212.7388535069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3716.582618075259,
            "unit": "ns/iter",
            "extra": "iterations: 215074\ncpu: 3716.3957521597054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16677.57221709256,
            "unit": "ns/iter",
            "extra": "iterations: 49822\ncpu: 16677.102484846044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13171.58803267548,
            "unit": "ns/iter",
            "extra": "iterations: 63289\ncpu: 13171.356791859549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12549.392519276229,
            "unit": "ns/iter",
            "extra": "iterations: 66277\ncpu: 12548.961178085916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12913.532220532577,
            "unit": "ns/iter",
            "extra": "iterations: 64462\ncpu: 12912.913034035573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40241.933262562816,
            "unit": "ns/iter",
            "extra": "iterations: 20723\ncpu: 40240.68908941783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 453363.1319261237,
            "unit": "ns/iter",
            "extra": "iterations: 1895\ncpu: 453343.2189973603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379844.96314172243,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 379829.66213251546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372089.4847311752,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 372067.4408602141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375159.70443773246,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 375147.5657044398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225845.35943984255,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 225836.5923236514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372690.0806730016,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 372667.2562553923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.9432287269491,
            "unit": "ns/iter",
            "extra": "iterations: 2357090\ncpu: 296.9414829302239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1570.3059348759102,
            "unit": "ns/iter",
            "extra": "iterations: 446193\ncpu: 1570.2518865154675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1241.5823394149404,
            "unit": "ns/iter",
            "extra": "iterations: 563175\ncpu: 1241.5345141385847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1222.639676262169,
            "unit": "ns/iter",
            "extra": "iterations: 570956\ncpu: 1222.5766959275413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1004.8123659095362,
            "unit": "ns/iter",
            "extra": "iterations: 697757\ncpu: 1004.7579601494559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7449.767967293136,
            "unit": "ns/iter",
            "extra": "iterations: 98081\ncpu: 7449.716051019034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18376.195835413455,
            "unit": "ns/iter",
            "extra": "iterations: 38083\ncpu: 18375.773967386842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4579.349220245724,
            "unit": "ns/iter",
            "extra": "iterations: 153061\ncpu: 4579.1475294163465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4532.90422142993,
            "unit": "ns/iter",
            "extra": "iterations: 152247\ncpu: 4532.59571617168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4553.256000832605,
            "unit": "ns/iter",
            "extra": "iterations: 153687\ncpu: 4553.15674064817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9522.929356763081,
            "unit": "ns/iter",
            "extra": "iterations: 73581\ncpu: 9522.48542422645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8662.26243182874,
            "unit": "ns/iter",
            "extra": "iterations: 80680\ncpu: 8661.970748636537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3315.8826644901515,
            "unit": "ns/iter",
            "extra": "iterations: 210712\ncpu: 3315.714339952157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16260.880539095262,
            "unit": "ns/iter",
            "extra": "iterations: 43035\ncpu: 16260.982920878574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12723.009440422966,
            "unit": "ns/iter",
            "extra": "iterations: 54023\ncpu: 12722.84582492633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12666.23456038009,
            "unit": "ns/iter",
            "extra": "iterations: 55798\ncpu: 12665.823147783214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13011.377343052794,
            "unit": "ns/iter",
            "extra": "iterations: 53776\ncpu: 13011.296861053337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27917.879045453778,
            "unit": "ns/iter",
            "extra": "iterations: 25059\ncpu: 27917.19142822925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98107.55169028047,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 98108.16383784555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85242.83966962948,
            "unit": "ns/iter",
            "extra": "iterations: 8233\ncpu: 85242.51184258597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84169.26914238295,
            "unit": "ns/iter",
            "extra": "iterations: 8267\ncpu: 84167.26744889365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84017.41873643274,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 84016.12008680914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54515.7290759145,
            "unit": "ns/iter",
            "extra": "iterations: 12856\ncpu: 54514.9113254506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83932.57938218531,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 83933.12978927177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2988.626253752121,
            "unit": "ns/iter",
            "extra": "iterations: 232203\ncpu: 2988.6103969371215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15338.43971383605,
            "unit": "ns/iter",
            "extra": "iterations: 45848\ncpu: 15338.252486477013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12075.276933688814,
            "unit": "ns/iter",
            "extra": "iterations: 57985\ncpu: 12075.216004139093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11932.978102190726,
            "unit": "ns/iter",
            "extra": "iterations: 58225\ncpu: 11932.82095319882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12367.555449449497,
            "unit": "ns/iter",
            "extra": "iterations: 56547\ncpu: 12367.635772012512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27259.126006615203,
            "unit": "ns/iter",
            "extra": "iterations: 25705\ncpu: 27258.478895156437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98439.80651473973,
            "unit": "ns/iter",
            "extra": "iterations: 7153\ncpu: 98437.22913462874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83704.9702295619,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83703.82592061121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82759.84426718202,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 82759.06655554289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83247.62507433652,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83248.1741405957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55296.56484991802,
            "unit": "ns/iter",
            "extra": "iterations: 12660\ncpu: 55295.04739336575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84033.61276748989,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 84031.48593411861 ns\nthreads: 1"
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
        "date": 1702492887135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 723.2913559523258,
            "unit": "ns/iter",
            "extra": "iterations: 971015\ncpu: 723.2995370823315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11364.83271958537,
            "unit": "ns/iter",
            "extra": "iterations: 73320\ncpu: 11364.474904528097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25141.740022320395,
            "unit": "ns/iter",
            "extra": "iterations: 33149\ncpu: 25142.004283688795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39416.46133370929,
            "unit": "ns/iter",
            "extra": "iterations: 21414\ncpu: 39415.46651723172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49525.986180282656,
            "unit": "ns/iter",
            "extra": "iterations: 16064\ncpu: 49524.88794820716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50783.54759999683,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50782.03999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61507.5250000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61505.61000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70962.73961490823,
            "unit": "ns/iter",
            "extra": "iterations: 12205\ncpu: 70960.47521507578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81263.93872594887,
            "unit": "ns/iter",
            "extra": "iterations: 10706\ncpu: 81263.02073603588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 588.5900720100196,
            "unit": "ns/iter",
            "extra": "iterations: 1191641\ncpu: 588.578355393949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 490.898511368258,
            "unit": "ns/iter",
            "extra": "iterations: 1426948\ncpu: 490.8942021713471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 488.6384786770985,
            "unit": "ns/iter",
            "extra": "iterations: 1429072\ncpu: 488.6212171255189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 489.9560606748671,
            "unit": "ns/iter",
            "extra": "iterations: 1430905\ncpu: 489.9558670911061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 959.360957337583,
            "unit": "ns/iter",
            "extra": "iterations: 730150\ncpu: 959.3360268437981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3467.0995520647216,
            "unit": "ns/iter",
            "extra": "iterations: 233516\ncpu: 3467.065640041792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15532.2883251817,
            "unit": "ns/iter",
            "extra": "iterations: 52746\ncpu: 15531.759754294182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12486.891175881097,
            "unit": "ns/iter",
            "extra": "iterations: 64811\ncpu: 12486.724475783447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11715.58821678304,
            "unit": "ns/iter",
            "extra": "iterations: 69913\ncpu: 11715.020096405566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12061.896198872766,
            "unit": "ns/iter",
            "extra": "iterations: 67822\ncpu: 12061.565568694488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40907.570475680164,
            "unit": "ns/iter",
            "extra": "iterations: 20539\ncpu: 40905.51146599147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 464536.3745298341,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 464523.64320257766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 367972.5867346879,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 367958.1632653061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 367114.9085520926,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 367094.7078746822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371109.2775862445,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 371093.8793103457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227159.96555296076,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 227148.3553483552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371995.30166883284,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 371974.3260590499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1871032.8729168186,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1870897.9166666656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 728699.9200626442,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 728673.2758620706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2519321.1639346923,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2519133.333333327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3290.814141217684,
            "unit": "ns/iter",
            "extra": "iterations: 236486\ncpu: 3290.7102323181953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15670.925181548506,
            "unit": "ns/iter",
            "extra": "iterations: 52741\ncpu: 15670.973246620279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12548.202459409897,
            "unit": "ns/iter",
            "extra": "iterations: 64487\ncpu: 12548.056197373046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11784.82839123023,
            "unit": "ns/iter",
            "extra": "iterations: 69606\ncpu: 11784.073212079355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12108.380470983459,
            "unit": "ns/iter",
            "extra": "iterations: 67858\ncpu: 12108.06095080903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40317.45504100107,
            "unit": "ns/iter",
            "extra": "iterations: 20730\ncpu: 40317.086348287434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 461880.1068947149,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 461840.4061998918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 386263.4546660983,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 386249.3144626272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380445.1679023115,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 380413.38857392216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379188.35767057905,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 379170.40417209844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221952.46360639183,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 221946.81714430667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379387.78624940786,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 379348.34728955576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1887203.4247421944,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1887123.7113402102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 733702.5299212354,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 733687.4803149638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3763.392982718214,
            "unit": "ns/iter",
            "extra": "iterations: 214157\ncpu: 3763.387608156664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16169.759046599624,
            "unit": "ns/iter",
            "extra": "iterations: 49549\ncpu: 16169.264768209297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12381.55542003521,
            "unit": "ns/iter",
            "extra": "iterations: 66411\ncpu: 12381.52263932183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11728.28324229701,
            "unit": "ns/iter",
            "extra": "iterations: 69753\ncpu: 11728.150760540757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12061.096560633854,
            "unit": "ns/iter",
            "extra": "iterations: 68123\ncpu: 12060.969129369027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42013.38433552761,
            "unit": "ns/iter",
            "extra": "iterations: 19790\ncpu: 42011.758463870705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 452895.9634655591,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 452900.93945720483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 376903.77595153864,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 376888.66782007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373956.5648068535,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 373960.3433476398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374036.32364255766,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 374030.52586575295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229230.69377116874,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 229224.9413604386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372967.197408179,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 372960.0863930888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.47971838483267,
            "unit": "ns/iter",
            "extra": "iterations: 2356691\ncpu: 297.4766314294055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1524.5832751159328,
            "unit": "ns/iter",
            "extra": "iterations: 459483\ncpu: 1524.5998219738162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1230.2432522481188,
            "unit": "ns/iter",
            "extra": "iterations: 567263\ncpu: 1230.2136751383407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1133.1134096750295,
            "unit": "ns/iter",
            "extra": "iterations: 617487\ncpu: 1133.125879573166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1013.8946513567907,
            "unit": "ns/iter",
            "extra": "iterations: 690792\ncpu: 1013.9053434318919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7204.990523603443,
            "unit": "ns/iter",
            "extra": "iterations: 97822\ncpu: 7204.449919241048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19001.619003764477,
            "unit": "ns/iter",
            "extra": "iterations: 36919\ncpu: 19000.77196023711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4516.525517970839,
            "unit": "ns/iter",
            "extra": "iterations: 155028\ncpu: 4516.253192971639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4472.593720868009,
            "unit": "ns/iter",
            "extra": "iterations: 156614\ncpu: 4472.416897595369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4498.1137676507415,
            "unit": "ns/iter",
            "extra": "iterations: 155800\ncpu: 4497.948652118095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9441.470153175193,
            "unit": "ns/iter",
            "extra": "iterations: 74229\ncpu: 9441.326166323073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8445.577399812402,
            "unit": "ns/iter",
            "extra": "iterations: 82371\ncpu: 8444.661349261265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3225.71193625661,
            "unit": "ns/iter",
            "extra": "iterations: 217497\ncpu: 3225.7148374460144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15919.910819477282,
            "unit": "ns/iter",
            "extra": "iterations: 43967\ncpu: 15919.676120726972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12807.008627766521,
            "unit": "ns/iter",
            "extra": "iterations: 54823\ncpu: 12807.157579847912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12693.776345373275,
            "unit": "ns/iter",
            "extra": "iterations: 55152\ncpu: 12693.673846823252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13023.618858320848,
            "unit": "ns/iter",
            "extra": "iterations: 53833\ncpu: 13023.481879144656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28222.158651321322,
            "unit": "ns/iter",
            "extra": "iterations: 24765\ncpu: 28221.18715929696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101341.77249746639,
            "unit": "ns/iter",
            "extra": "iterations: 6923\ncpu: 101341.45601617932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86780.55690702744,
            "unit": "ns/iter",
            "extra": "iterations: 8057\ncpu: 86781.49435273604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85547.27368165205,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85544.66552734494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86094.69344323447,
            "unit": "ns/iter",
            "extra": "iterations: 8129\ncpu: 86094.58728010819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55955.39772909325,
            "unit": "ns/iter",
            "extra": "iterations: 12506\ncpu: 55955.19750519779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86389.01492722005,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 86388.87244016909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3015.3931695378333,
            "unit": "ns/iter",
            "extra": "iterations: 232078\ncpu: 3015.361214763996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15390.72360768323,
            "unit": "ns/iter",
            "extra": "iterations: 45392\ncpu: 15390.222946774817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12225.986374396567,
            "unit": "ns/iter",
            "extra": "iterations: 57025\ncpu: 12226.107847435476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12065.243229758633,
            "unit": "ns/iter",
            "extra": "iterations: 58122\ncpu: 12064.951309314805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12544.49837244287,
            "unit": "ns/iter",
            "extra": "iterations: 55912\ncpu: 12544.478823866126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26780.079522326585,
            "unit": "ns/iter",
            "extra": "iterations: 26043\ncpu: 26779.587605114746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100545.8628472332,
            "unit": "ns/iter",
            "extra": "iterations: 6912\ncpu: 100542.37557870371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84810.56817906722,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 84810.45372050873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83671.77984495927,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83669.24269529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84323.15115718887,
            "unit": "ns/iter",
            "extra": "iterations: 8296\ncpu: 84324.14416586341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55703.40910900597,
            "unit": "ns/iter",
            "extra": "iterations: 12559\ncpu: 55702.26928895536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85247.2324114451,
            "unit": "ns/iter",
            "extra": "iterations: 8244\ncpu: 85245.47549733205 ns\nthreads: 1"
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
        "date": 1702503964963,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 731.2700450075057,
            "unit": "ns/iter",
            "extra": "iterations: 947842\ncpu: 731.2517276086098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10896.758957570068,
            "unit": "ns/iter",
            "extra": "iterations: 76360\ncpu: 10896.564955474068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24342.46495497161,
            "unit": "ns/iter",
            "extra": "iterations: 34313\ncpu: 24341.78008335033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39091.795905736,
            "unit": "ns/iter",
            "extra": "iterations: 22617\ncpu: 39091.174780032714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50510.29956027684,
            "unit": "ns/iter",
            "extra": "iterations: 16374\ncpu: 50507.505801881045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60980.07713125505,
            "unit": "ns/iter",
            "extra": "iterations: 14041\ncpu: 60977.81497044371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58748.03719999591,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58746.809999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68470.25368223705,
            "unit": "ns/iter",
            "extra": "iterations: 12764\ncpu: 68468.94390473203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78543.72089685775,
            "unit": "ns/iter",
            "extra": "iterations: 11150\ncpu: 78540.93273542596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 585.7382966255791,
            "unit": "ns/iter",
            "extra": "iterations: 1192797\ncpu: 585.7247293546178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 480.8427469953627,
            "unit": "ns/iter",
            "extra": "iterations: 1456748\ncpu: 480.8375230307505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.18172740924507,
            "unit": "ns/iter",
            "extra": "iterations: 1463197\ncpu: 478.16035708110473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.6361639338271,
            "unit": "ns/iter",
            "extra": "iterations: 1460809\ncpu: 479.6196491122384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 987.8444742621616,
            "unit": "ns/iter",
            "extra": "iterations: 708005\ncpu: 987.8451423365674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3450.3861316069365,
            "unit": "ns/iter",
            "extra": "iterations: 231750\ncpu: 3450.318446601944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15475.847189307295,
            "unit": "ns/iter",
            "extra": "iterations: 52745\ncpu: 15475.385344582452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12564.566422029775,
            "unit": "ns/iter",
            "extra": "iterations: 64858\ncpu: 12564.337475716191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11260.501583394273,
            "unit": "ns/iter",
            "extra": "iterations: 72313\ncpu: 11260.539598688994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11905.560175502374,
            "unit": "ns/iter",
            "extra": "iterations: 68375\ncpu: 11905.605850091442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41012.70200264473,
            "unit": "ns/iter",
            "extra": "iterations: 20423\ncpu: 41010.73789355148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 445849.61219263537,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 445792.57172131096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 369441.81194028596,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 369433.3049040513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 368310.13522679504,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 368299.06740144076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 367507.6638298011,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 367479.7446808497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224041.722134996,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 224036.7870225013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 365511.30456854857,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 365486.2521150584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1871463.3488844086,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1871360.0405679487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750579.8125496762,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 750515.3296266884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2514140.342465957,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2514053.972602737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3442.8859317742326,
            "unit": "ns/iter",
            "extra": "iterations: 229503\ncpu: 3442.6251508694877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15218.93837648395,
            "unit": "ns/iter",
            "extra": "iterations: 54265\ncpu: 15218.276974108501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12415.672764810484,
            "unit": "ns/iter",
            "extra": "iterations: 66359\ncpu: 12414.799801082017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11795.08775968416,
            "unit": "ns/iter",
            "extra": "iterations: 69941\ncpu: 11794.787034786505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11753.225251629765,
            "unit": "ns/iter",
            "extra": "iterations: 69944\ncpu: 11752.336154638024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40670.93456261575,
            "unit": "ns/iter",
            "extra": "iterations: 20554\ncpu: 40668.70682105669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 454524.16421828174,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 454520.1993704124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 381139.46073748684,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 381114.1865509763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375016.51788024494,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 374993.79577768117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372204.1927038583,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 372170.51502146025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 225619.77962628787,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 225614.845149731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376805.4523089935,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 376782.08890807204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1885159.8547718117,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1885061.2033195044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 724770.6757812721,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 724729.8437499993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3717.48264473666,
            "unit": "ns/iter",
            "extra": "iterations: 213768\ncpu: 3717.285561917584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16970.490856629345,
            "unit": "ns/iter",
            "extra": "iterations: 50255\ncpu: 16969.80598945382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13428.681552567252,
            "unit": "ns/iter",
            "extra": "iterations: 60751\ncpu: 13428.41763921589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12853.759852006373,
            "unit": "ns/iter",
            "extra": "iterations: 64327\ncpu: 12853.667977676576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13165.124938342147,
            "unit": "ns/iter",
            "extra": "iterations: 62847\ncpu: 13165.110506468132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40227.824055377605,
            "unit": "ns/iter",
            "extra": "iterations: 20802\ncpu: 40226.261897894656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 448488.7446586701,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 448457.68629494443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 376265.92801725055,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 376257.586206897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370017.35596098047,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 369985.40517607256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373232.18553193,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 373225.82978723425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227614.48157625255,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 227612.35926304964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368254.33948032133,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 368222.5901089673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.58162404738414,
            "unit": "ns/iter",
            "extra": "iterations: 2354882\ncpu: 297.5625954931059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1470.5879279631777,
            "unit": "ns/iter",
            "extra": "iterations: 476589\ncpu: 1470.4753991384691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1191.963954682259,
            "unit": "ns/iter",
            "extra": "iterations: 587233\ncpu: 1191.9340364046377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1148.1077296198569,
            "unit": "ns/iter",
            "extra": "iterations: 609823\ncpu: 1148.1101893500272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 983.8698858750465,
            "unit": "ns/iter",
            "extra": "iterations: 710361\ncpu: 983.7788110552186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7462.073507795753,
            "unit": "ns/iter",
            "extra": "iterations: 93201\ncpu: 7461.588394974237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18594.110971868853,
            "unit": "ns/iter",
            "extra": "iterations: 37505\ncpu: 18592.483668843972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4544.927047679553,
            "unit": "ns/iter",
            "extra": "iterations: 154553\ncpu: 4544.794342393903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4433.703074070234,
            "unit": "ns/iter",
            "extra": "iterations: 157999\ncpu: 4433.34388192332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4480.215877526988,
            "unit": "ns/iter",
            "extra": "iterations: 156246\ncpu: 4480.1742124597795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9379.328884536199,
            "unit": "ns/iter",
            "extra": "iterations: 74552\ncpu: 9378.466037128386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8465.745447932357,
            "unit": "ns/iter",
            "extra": "iterations: 82490\ncpu: 8465.495211540812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3228.385004329003,
            "unit": "ns/iter",
            "extra": "iterations: 217156\ncpu: 3228.125402936146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15954.008992681911,
            "unit": "ns/iter",
            "extra": "iterations: 44147\ncpu: 15953.093075407416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12663.666003504302,
            "unit": "ns/iter",
            "extra": "iterations: 54788\ncpu: 12662.694385631987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12674.060188807922,
            "unit": "ns/iter",
            "extra": "iterations: 54977\ncpu: 12673.67080779239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13060.139372628912,
            "unit": "ns/iter",
            "extra": "iterations: 54035\ncpu: 13060.153604145451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28099.36064128244,
            "unit": "ns/iter",
            "extra": "iterations: 24950\ncpu: 28098.452905811577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99252.55980724645,
            "unit": "ns/iter",
            "extra": "iterations: 7056\ncpu: 99250.58106576034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84795.40709032024,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84787.79693717699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84157.98397895326,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 84155.51171688127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84057.80321766764,
            "unit": "ns/iter",
            "extra": "iterations: 8329\ncpu: 84052.33521431114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54816.752948531444,
            "unit": "ns/iter",
            "extra": "iterations: 12803\ncpu: 54815.62914941767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84287.66104959075,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 84282.5108329319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3013.213661373786,
            "unit": "ns/iter",
            "extra": "iterations: 232817\ncpu: 3013.056177169166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15570.059572020513,
            "unit": "ns/iter",
            "extra": "iterations: 45189\ncpu: 15569.516917834042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12231.897703803334,
            "unit": "ns/iter",
            "extra": "iterations: 57617\ncpu: 12230.749605151243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12068.145684672405,
            "unit": "ns/iter",
            "extra": "iterations: 57597\ncpu: 12067.510460614172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12448.106039337608,
            "unit": "ns/iter",
            "extra": "iterations: 56281\ncpu: 12447.401432099718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26852.678796496537,
            "unit": "ns/iter",
            "extra": "iterations: 26024\ncpu: 26851.87519213078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98296.98636300236,
            "unit": "ns/iter",
            "extra": "iterations: 7113\ncpu: 98296.9633066228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83185.06091912063,
            "unit": "ns/iter",
            "extra": "iterations: 8421\ncpu: 83179.40862130452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82170.96759042167,
            "unit": "ns/iter",
            "extra": "iterations: 8516\ncpu: 82166.29873180011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82782.4677228675,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 82775.44336722634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55174.7116656135,
            "unit": "ns/iter",
            "extra": "iterations: 12704\ncpu: 55172.685768262694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83199.636590575,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 83199.1321921077 ns\nthreads: 1"
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
        "date": 1705575601836,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 704.7327614718278,
            "unit": "ns/iter",
            "extra": "iterations: 991732\ncpu: 704.681204196295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10984.630577131611,
            "unit": "ns/iter",
            "extra": "iterations: 75442\ncpu: 10984.003605418731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24397.599268150552,
            "unit": "ns/iter",
            "extra": "iterations: 34160\ncpu: 24396.25585480093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39400.97798015957,
            "unit": "ns/iter",
            "extra": "iterations: 22071\ncpu: 39398.944316070854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48342.67966959855,
            "unit": "ns/iter",
            "extra": "iterations: 16586\ncpu: 48339.69010008438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50189.19749999213,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50185.700000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60877.805399991295,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60875.940000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69909.00883534142,
            "unit": "ns/iter",
            "extra": "iterations: 12450\ncpu: 69902.52208835345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80056.6284143014,
            "unit": "ns/iter",
            "extra": "iterations: 10910\ncpu: 80052.31897341897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 603.7033452701157,
            "unit": "ns/iter",
            "extra": "iterations: 1159159\ncpu: 603.6667963583948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 493.70800796464334,
            "unit": "ns/iter",
            "extra": "iterations: 1418775\ncpu: 493.6750365632322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 496.4554694323451,
            "unit": "ns/iter",
            "extra": "iterations: 1420833\ncpu: 496.4450431542617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 476.96783705498916,
            "unit": "ns/iter",
            "extra": "iterations: 1455215\ncpu: 476.9314499919258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 950.866009666216,
            "unit": "ns/iter",
            "extra": "iterations: 735971\ncpu: 950.8165403256376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3237.9925283128887,
            "unit": "ns/iter",
            "extra": "iterations: 246263\ncpu: 3237.9545445316626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15541.103346868975,
            "unit": "ns/iter",
            "extra": "iterations: 52706\ncpu: 15540.500132812203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12296.06570786621,
            "unit": "ns/iter",
            "extra": "iterations: 66750\ncpu: 12295.881647940096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11405.417945724073,
            "unit": "ns/iter",
            "extra": "iterations: 71928\ncpu: 11404.802024246459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12336.366954933925,
            "unit": "ns/iter",
            "extra": "iterations: 70074\ncpu: 12335.73936124668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40708.747435272875,
            "unit": "ns/iter",
            "extra": "iterations: 20470\ncpu: 40705.92574499265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 447859.55584153574,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 447841.89397838403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 367984.8022071423,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 367959.3803056024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 367342.41047297267,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 367321.706081081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 368806.99531318044,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 368790.7541542394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219046.76707755408,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 219039.03441191622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 362437.08336841286,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 362405.51578947436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1871641.6788618248,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1871493.292682925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 741851.9246629843,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 741832.434575734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2521891.0410960033,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2521620.547945208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3266.7248252774316,
            "unit": "ns/iter",
            "extra": "iterations: 238950\ncpu: 3266.4674618121044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15437.975780968327,
            "unit": "ns/iter",
            "extra": "iterations: 52851\ncpu: 15436.758055665934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12091.587183528973,
            "unit": "ns/iter",
            "extra": "iterations: 67897\ncpu: 12091.345714832756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11382.991130634842,
            "unit": "ns/iter",
            "extra": "iterations: 71933\ncpu: 11382.393338245272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11776.21893023026,
            "unit": "ns/iter",
            "extra": "iterations: 69529\ncpu: 11775.844611600924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40157.00855686996,
            "unit": "ns/iter",
            "extra": "iterations: 20802\ncpu: 40155.14854340918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 471879.7820652422,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 471874.6195652147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 389011.96329456737,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 388991.62936436874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 383113.79035824555,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 383090.4909332173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384730.7663019812,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 384700.74398249283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224896.3514698179,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 224877.56575554347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 376189.6336805669,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 376157.0746527782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1893278.9546392856,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1893138.3505154632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 744883.0465863645,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 744845.5421686755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3430.955379591409,
            "unit": "ns/iter",
            "extra": "iterations: 215574\ncpu: 3430.6869102953037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15349.833525194477,
            "unit": "ns/iter",
            "extra": "iterations: 53858\ncpu: 15348.783838983994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12161.835791386717,
            "unit": "ns/iter",
            "extra": "iterations: 68279\ncpu: 12160.955784355416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11406.895763579996,
            "unit": "ns/iter",
            "extra": "iterations: 72278\ncpu: 11406.31589141923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11769.486377613253,
            "unit": "ns/iter",
            "extra": "iterations: 70252\ncpu: 11768.494847121843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41978.094794330595,
            "unit": "ns/iter",
            "extra": "iterations: 19959\ncpu: 41975.46971291151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 447027.5643665934,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 447005.5612770368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372877.6368715158,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 372855.9088955711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 369624.41641855775,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 369590.4721395161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370466.26539276,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 370435.8811040346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 235923.58131130255,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 235920.83118224054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 365736.35396760004,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 365712.46364769497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.9436104003914,
            "unit": "ns/iter",
            "extra": "iterations: 2357456\ncpu: 296.93754623628087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1486.9932671834426,
            "unit": "ns/iter",
            "extra": "iterations: 472462\ncpu: 1486.950696563951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1137.9486461492472,
            "unit": "ns/iter",
            "extra": "iterations: 616390\ncpu: 1137.9237171271416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1144.1469539961681,
            "unit": "ns/iter",
            "extra": "iterations: 612212\ncpu: 1144.1000829777986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 984.0370810454117,
            "unit": "ns/iter",
            "extra": "iterations: 711145\ncpu: 983.9967939027897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7190.057041107094,
            "unit": "ns/iter",
            "extra": "iterations: 98841\ncpu: 7189.879705790123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18491.006719222187,
            "unit": "ns/iter",
            "extra": "iterations: 37802\ncpu: 18490.64070684074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4419.374745083192,
            "unit": "ns/iter",
            "extra": "iterations: 158385\ncpu: 4419.176689711796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4409.48281858634,
            "unit": "ns/iter",
            "extra": "iterations: 158136\ncpu: 4409.304649162751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4410.224145100219,
            "unit": "ns/iter",
            "extra": "iterations: 158732\ncpu: 4410.024443716459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9273.980162652711,
            "unit": "ns/iter",
            "extra": "iterations: 75867\ncpu: 9273.240012126473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8408.579915491471,
            "unit": "ns/iter",
            "extra": "iterations: 83069\ncpu: 8407.980112918161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3202.934729694875,
            "unit": "ns/iter",
            "extra": "iterations: 218568\ncpu: 3202.7501738589413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15822.810708933508,
            "unit": "ns/iter",
            "extra": "iterations: 44038\ncpu: 15822.176302284328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12691.49393994248,
            "unit": "ns/iter",
            "extra": "iterations: 55280\ncpu: 12691.072720694801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12717.73691983978,
            "unit": "ns/iter",
            "extra": "iterations: 54166\ncpu: 12717.23036591237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12827.309874866774,
            "unit": "ns/iter",
            "extra": "iterations: 53783\ncpu: 12825.961735120829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28055.492136093475,
            "unit": "ns/iter",
            "extra": "iterations: 24924\ncpu: 28053.590916385903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101149.38899321477,
            "unit": "ns/iter",
            "extra": "iterations: 6923\ncpu: 101139.78044200393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86311.41688137464,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 86272.3714881613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85425.68464172285,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 85424.66373196349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85761.71204510248,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 85759.22068374034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55454.09901696602,
            "unit": "ns/iter",
            "extra": "iterations: 12614\ncpu: 55451.62517837293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84842.62653383531,
            "unit": "ns/iter",
            "extra": "iterations: 8231\ncpu: 84839.6428137514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3004.341689728083,
            "unit": "ns/iter",
            "extra": "iterations: 233434\ncpu: 3004.3065705938743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15251.137348298565,
            "unit": "ns/iter",
            "extra": "iterations: 45978\ncpu: 15250.521988777256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12114.522833420397,
            "unit": "ns/iter",
            "extra": "iterations: 57810\ncpu: 12114.151530877038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11977.80431512013,
            "unit": "ns/iter",
            "extra": "iterations: 58492\ncpu: 11977.455036586203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12451.156403920308,
            "unit": "ns/iter",
            "extra": "iterations: 56239\ncpu: 12450.607229858319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26967.04536019003,
            "unit": "ns/iter",
            "extra": "iterations: 26014\ncpu: 26966.733297455252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100032.30951701029,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 100027.65075735997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84067.88578283963,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 84064.67906418742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83304.16266350391,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83301.34363852514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84070.94784280866,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 84069.16236029327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55674.24519612798,
            "unit": "ns/iter",
            "extra": "iterations: 12594\ncpu: 55673.62235985485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84764.1789422861,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 84760.35981646994 ns\nthreads: 1"
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
        "date": 1705773423538,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 750.4682466166847,
            "unit": "ns/iter",
            "extra": "iterations: 935979\ncpu: 750.4260245155074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11235.006650063566,
            "unit": "ns/iter",
            "extra": "iterations: 74285\ncpu: 11234.480716160733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23995.458810952012,
            "unit": "ns/iter",
            "extra": "iterations: 33674\ncpu: 23994.782324642165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37566.7573330975,
            "unit": "ns/iter",
            "extra": "iterations: 22603\ncpu: 37565.97354333496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47696.00544862315,
            "unit": "ns/iter",
            "extra": "iterations: 16885\ncpu: 47695.32721350307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59479.93917121629,
            "unit": "ns/iter",
            "extra": "iterations: 14286\ncpu: 59477.0614587708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60128.27660000539,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60127.19000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69326.51996798742,
            "unit": "ns/iter",
            "extra": "iterations: 12495\ncpu: 69323.79351740693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79196.97699692496,
            "unit": "ns/iter",
            "extra": "iterations: 11042\ncpu: 79190.32783915952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 576.4733855489421,
            "unit": "ns/iter",
            "extra": "iterations: 1199386\ncpu: 576.4519512483896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 490.07206602024667,
            "unit": "ns/iter",
            "extra": "iterations: 1436530\ncpu: 490.0604233813432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 481.5041642714095,
            "unit": "ns/iter",
            "extra": "iterations: 1454276\ncpu: 481.499729074812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 483.98082618107065,
            "unit": "ns/iter",
            "extra": "iterations: 1445930\ncpu: 483.95240433492665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 946.35002163804,
            "unit": "ns/iter",
            "extra": "iterations: 737123\ncpu: 946.3276820829086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3317.420495951121,
            "unit": "ns/iter",
            "extra": "iterations: 242887\ncpu: 3317.2261174949663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15467.42369794173,
            "unit": "ns/iter",
            "extra": "iterations: 52705\ncpu: 15466.726117066728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12515.306412947713,
            "unit": "ns/iter",
            "extra": "iterations: 60487\ncpu: 12515.05282126737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11692.53878074476,
            "unit": "ns/iter",
            "extra": "iterations: 69403\ncpu: 11692.439808077464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12045.735520261162,
            "unit": "ns/iter",
            "extra": "iterations: 67370\ncpu: 12045.057147098118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40993.451117801014,
            "unit": "ns/iter",
            "extra": "iterations: 20263\ncpu: 40991.126684103976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 451213.5471892628,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 451181.7947395558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 366537.0665245405,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 366522.13219616166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 367581.8619528728,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 367573.8636363631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 371572.5372750652,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 371556.9837189377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 226670.8224029225,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 226670.1469045114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 369673.7935565789,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 369651.8863925391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1871135.9109309926,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1871029.3522267195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 736569.6619385554,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 736530.890464935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2520753.386920722,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2520607.0844686627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3360.3167505424003,
            "unit": "ns/iter",
            "extra": "iterations: 237455\ncpu: 3360.141079362411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15596.828701688988,
            "unit": "ns/iter",
            "extra": "iterations: 52861\ncpu: 15596.208925294563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12780.855997619477,
            "unit": "ns/iter",
            "extra": "iterations: 63867\ncpu: 12780.371709959722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11790.195088382732,
            "unit": "ns/iter",
            "extra": "iterations: 69753\ncpu: 11789.759580233182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12137.26107662442,
            "unit": "ns/iter",
            "extra": "iterations: 67823\ncpu: 12136.868024121635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40259.378386221055,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 40257.343266253774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 463709.7784366368,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 463696.4420485174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384148.3528368833,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 384126.06382978935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378188.86954643956,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 378177.7105831526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377772.4298661772,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 377759.6892533441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226418.7590049117,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 226410.132158591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 377955.99224807427,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 377934.6683893209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1891686.1030928295,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1891552.9896907124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 731689.594317327,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 731654.7750591938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3544.77876027699,
            "unit": "ns/iter",
            "extra": "iterations: 214193\ncpu: 3544.67606317669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15330.439381609493,
            "unit": "ns/iter",
            "extra": "iterations: 54076\ncpu: 15329.96523411488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12474.085956089632,
            "unit": "ns/iter",
            "extra": "iterations: 66406\ncpu: 12473.738818781432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11835.400068612313,
            "unit": "ns/iter",
            "extra": "iterations: 69958\ncpu: 11834.916664284225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12183.226253045263,
            "unit": "ns/iter",
            "extra": "iterations: 68114\ncpu: 12182.79795636729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40363.429256135045,
            "unit": "ns/iter",
            "extra": "iterations: 20864\ncpu: 40362.33224693241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 451150.96373060177,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 451137.40932642494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375681.4350427435,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 375669.6581196608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371185.19633728726,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 371171.93356047664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372411.84438773274,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 372398.9795918375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226011.05674489774,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 226000.5674490595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369797.5497670468,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 369779.2460821683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.44701709449424,
            "unit": "ns/iter",
            "extra": "iterations: 2364272\ncpu: 296.4434718171181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1526.6875084633862,
            "unit": "ns/iter",
            "extra": "iterations: 457846\ncpu: 1526.6832078908685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1186.7115087369973,
            "unit": "ns/iter",
            "extra": "iterations: 589387\ncpu: 1186.6764960883067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1169.4713248429414,
            "unit": "ns/iter",
            "extra": "iterations: 600607\ncpu: 1169.4209358199262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1063.9449048186032,
            "unit": "ns/iter",
            "extra": "iterations: 659005\ncpu: 1063.8805471885626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7468.6619870521645,
            "unit": "ns/iter",
            "extra": "iterations: 98085\ncpu: 7468.352959168009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19048.833737105655,
            "unit": "ns/iter",
            "extra": "iterations: 36737\ncpu: 19048.602226638293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4594.99494253776,
            "unit": "ns/iter",
            "extra": "iterations: 152448\ncpu: 4594.779203400504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4549.9497661951145,
            "unit": "ns/iter",
            "extra": "iterations: 153761\ncpu: 4549.734978310502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4566.999673450364,
            "unit": "ns/iter",
            "extra": "iterations: 153116\ncpu: 4566.817314976857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9525.696655586547,
            "unit": "ns/iter",
            "extra": "iterations: 73705\ncpu: 9525.228953259568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8634.71422418015,
            "unit": "ns/iter",
            "extra": "iterations: 81256\ncpu: 8634.391306488002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3236.1370711042405,
            "unit": "ns/iter",
            "extra": "iterations: 216457\ncpu: 3235.98590020187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16260.181858212349,
            "unit": "ns/iter",
            "extra": "iterations: 43149\ncpu: 16259.422002827307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12886.536198968752,
            "unit": "ns/iter",
            "extra": "iterations: 54159\ncpu: 12886.330988386095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12918.974174164103,
            "unit": "ns/iter",
            "extra": "iterations: 54248\ncpu: 12918.913139654864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13220.030690343452,
            "unit": "ns/iter",
            "extra": "iterations: 53046\ncpu: 13219.552840930382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28183.940998791626,
            "unit": "ns/iter",
            "extra": "iterations: 24830\ncpu: 28182.956101489897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101976.18850072788,
            "unit": "ns/iter",
            "extra": "iterations: 6870\ncpu: 101972.00873362465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87118.41458876008,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 87114.00570648754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86224.31797518882,
            "unit": "ns/iter",
            "extra": "iterations: 8139\ncpu: 86219.32669861132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86571.98443098925,
            "unit": "ns/iter",
            "extra": "iterations: 8093\ncpu: 86570.48066230137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55964.60453420408,
            "unit": "ns/iter",
            "extra": "iterations: 12527\ncpu: 55963.11167877392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86490.21953029081,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 86487.16934487029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3023.797954470762,
            "unit": "ns/iter",
            "extra": "iterations: 232116\ncpu: 3023.6726464353783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15643.59509775625,
            "unit": "ns/iter",
            "extra": "iterations: 44959\ncpu: 15642.9124313263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12456.205847743622,
            "unit": "ns/iter",
            "extra": "iterations: 56090\ncpu: 12455.517917632527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12296.720836106968,
            "unit": "ns/iter",
            "extra": "iterations: 57074\ncpu: 12296.183901601467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12680.640440910538,
            "unit": "ns/iter",
            "extra": "iterations: 55340\ncpu: 12680.397542464627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27122.66032335387,
            "unit": "ns/iter",
            "extra": "iterations: 25854\ncpu: 27122.54583429982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100217.38469242743,
            "unit": "ns/iter",
            "extra": "iterations: 6990\ncpu: 100213.9628040052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84522.23167049204,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 84516.98272738123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84123.17818574006,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 84119.16246700333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84375.9779730403,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 84371.91863264445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56119.284636981625,
            "unit": "ns/iter",
            "extra": "iterations: 12465\ncpu: 56118.99719213878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84497.20536258646,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 84494.88117001831 ns\nthreads: 1"
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
        "date": 1705774841818,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 711.0791339254615,
            "unit": "ns/iter",
            "extra": "iterations: 983472\ncpu: 711.0774887337922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11175.464630159397,
            "unit": "ns/iter",
            "extra": "iterations: 74343\ncpu: 11175.206811670232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24671.081510160897,
            "unit": "ns/iter",
            "extra": "iterations: 33321\ncpu: 24670.37003691365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40527.96213557385,
            "unit": "ns/iter",
            "extra": "iterations: 22158\ncpu: 40526.27944760358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48903.21338177477,
            "unit": "ns/iter",
            "extra": "iterations: 16515\ncpu: 48899.188616409294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50948.863799999344,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50948.89 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63752.4292198318,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 63748.89597644754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69403.10269482962,
            "unit": "ns/iter",
            "extra": "iterations: 12357\ncpu: 69397.51557821479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78947.89810469921,
            "unit": "ns/iter",
            "extra": "iterations: 11080\ncpu: 78945.26173285201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 578.6879345710868,
            "unit": "ns/iter",
            "extra": "iterations: 1210964\ncpu: 578.6622888872014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 487.93747361968923,
            "unit": "ns/iter",
            "extra": "iterations: 1433363\ncpu: 487.9218313853506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 485.9786960990667,
            "unit": "ns/iter",
            "extra": "iterations: 1440769\ncpu: 485.9497948664912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.4139299283816,
            "unit": "ns/iter",
            "extra": "iterations: 1443324\ncpu: 484.3936635156073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 990.412706906948,
            "unit": "ns/iter",
            "extra": "iterations: 734388\ncpu: 990.3236436325213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3383.128813511366,
            "unit": "ns/iter",
            "extra": "iterations: 211911\ncpu: 3383.062228954606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15516.192324447844,
            "unit": "ns/iter",
            "extra": "iterations: 52791\ncpu: 15516.150480195472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12635.710976154283,
            "unit": "ns/iter",
            "extra": "iterations: 64877\ncpu: 12635.573469796687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12083.361329161004,
            "unit": "ns/iter",
            "extra": "iterations: 67772\ncpu: 12083.155285368563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12440.494128846669,
            "unit": "ns/iter",
            "extra": "iterations: 66171\ncpu: 12440.353024738937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41905.94032103467,
            "unit": "ns/iter",
            "extra": "iterations: 19873\ncpu: 41905.33890202783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 442497.1543209779,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 442484.8251028815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 367324.24947142875,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 367319.2389006343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 366729.76751059026,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 366715.3164556965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370736.629066321,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 370732.4883819175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 225814.10481144694,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 225807.98439531834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 365952.9974554568,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 365949.0670059387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1884238.4847250727,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1884094.908350307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 760522.9399837797,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 760495.8637469574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2584930.7002800573,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2584788.5154061653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3402.069014577767,
            "unit": "ns/iter",
            "extra": "iterations: 231241\ncpu: 3402.0281870429517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15188.365843410302,
            "unit": "ns/iter",
            "extra": "iterations: 54742\ncpu: 15188.116985130271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12351.278462282047,
            "unit": "ns/iter",
            "extra": "iterations: 66228\ncpu: 12351.019206377992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11735.00141679606,
            "unit": "ns/iter",
            "extra": "iterations: 69876\ncpu: 11734.763008758408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12083.83330381185,
            "unit": "ns/iter",
            "extra": "iterations: 67746\ncpu: 12083.827827473155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40638.91320347268,
            "unit": "ns/iter",
            "extra": "iterations: 20381\ncpu: 40638.49663902649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 470874.0615468021,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 470848.801742921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 389037.53145918454,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 389034.5827755455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 380359.70409512304,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 380359.31307793956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383425.9266256862,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 383420.56239015824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226291.47638708088,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 226284.82580645112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381603.7205105561,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 381598.32746479026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1931904.1987316785,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1931856.659619465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739251.5984000056,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739200.8799999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3418.157922949055,
            "unit": "ns/iter",
            "extra": "iterations: 231328\ncpu: 3418.105892931251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15206.667622090832,
            "unit": "ns/iter",
            "extra": "iterations: 54426\ncpu: 15206.348068937717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12386.652766953237,
            "unit": "ns/iter",
            "extra": "iterations: 66716\ncpu: 12386.53846153852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11792.246394608706,
            "unit": "ns/iter",
            "extra": "iterations: 70034\ncpu: 11791.90964388726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12141.478553184223,
            "unit": "ns/iter",
            "extra": "iterations: 68122\ncpu: 12141.333196324229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40847.65598487158,
            "unit": "ns/iter",
            "extra": "iterations: 20627\ncpu: 40847.60265671194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 454648.2699161213,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 454638.8364779845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379293.22910352575,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 379282.2000866183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 373866.3219470863,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 373865.7557643018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373471.5368151004,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 373467.4229452073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227247.98568080718,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 227238.08903931282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372870.9476596084,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 372866.97872340464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.60354592419975,
            "unit": "ns/iter",
            "extra": "iterations: 2309130\ncpu: 306.60339608424124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1539.035802490901,
            "unit": "ns/iter",
            "extra": "iterations: 454298\ncpu: 1539.014919722291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1188.858384520446,
            "unit": "ns/iter",
            "extra": "iterations: 589992\ncpu: 1188.8223908120772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1194.5241731409963,
            "unit": "ns/iter",
            "extra": "iterations: 584864\ncpu: 1194.5096637850745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1019.3210226901955,
            "unit": "ns/iter",
            "extra": "iterations: 687481\ncpu: 1019.3193702807766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7191.749586156143,
            "unit": "ns/iter",
            "extra": "iterations: 97259\ncpu: 7191.589467298698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19135.226529776173,
            "unit": "ns/iter",
            "extra": "iterations: 36525\ncpu: 19135.019849418033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4608.023660343506,
            "unit": "ns/iter",
            "extra": "iterations: 151942\ncpu: 4607.928683313379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4544.475655406762,
            "unit": "ns/iter",
            "extra": "iterations: 154141\ncpu: 4544.415178310767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4584.352066634535,
            "unit": "ns/iter",
            "extra": "iterations: 152954\ncpu: 4584.291355570932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9608.424635796971,
            "unit": "ns/iter",
            "extra": "iterations: 73105\ncpu: 9608.234730866568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8174.579515828541,
            "unit": "ns/iter",
            "extra": "iterations: 85920\ncpu: 8174.470437616321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3222.8913060553696,
            "unit": "ns/iter",
            "extra": "iterations: 216461\ncpu: 3222.887725733527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15919.223479424167,
            "unit": "ns/iter",
            "extra": "iterations: 44013\ncpu: 15919.18751278022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12867.668975120987,
            "unit": "ns/iter",
            "extra": "iterations: 53860\ncpu: 12867.517638321558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12934.868367574647,
            "unit": "ns/iter",
            "extra": "iterations: 54128\ncpu: 12934.462754950986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13298.989345943806,
            "unit": "ns/iter",
            "extra": "iterations: 52656\ncpu: 13298.816848981955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28240.44191097047,
            "unit": "ns/iter",
            "extra": "iterations: 24867\ncpu: 28240.12144609354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102392.45547444937,
            "unit": "ns/iter",
            "extra": "iterations: 6850\ncpu: 102391.10948905064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87441.86683322393,
            "unit": "ns/iter",
            "extra": "iterations: 8005\ncpu: 87440.32479700213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86865.75439465439,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 86863.2210943305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86950.55642556338,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86949.36614466785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56317.651487064206,
            "unit": "ns/iter",
            "extra": "iterations: 12407\ncpu: 56316.99846860726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86913.81562579094,
            "unit": "ns/iter",
            "extra": "iterations: 8038\ncpu: 86912.96342373759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3025.859974048411,
            "unit": "ns/iter",
            "extra": "iterations: 231200\ncpu: 3025.7941176470795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15586.922147829773,
            "unit": "ns/iter",
            "extra": "iterations: 44957\ncpu: 15586.556042440627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12392.099025340101,
            "unit": "ns/iter",
            "extra": "iterations: 56430\ncpu: 12392.089314194507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12065.801645974745,
            "unit": "ns/iter",
            "extra": "iterations: 57352\ncpu: 12065.049170037602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12599.653511065557,
            "unit": "ns/iter",
            "extra": "iterations: 55439\ncpu: 12598.694060138165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26815.204497563103,
            "unit": "ns/iter",
            "extra": "iterations: 26103\ncpu: 26812.86059073684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100064.60872027671,
            "unit": "ns/iter",
            "extra": "iterations: 7064\ncpu: 100058.32389580963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85793.82193295569,
            "unit": "ns/iter",
            "extra": "iterations: 8143\ncpu: 85790.4949035988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84407.27453821166,
            "unit": "ns/iter",
            "extra": "iterations: 8283\ncpu: 84404.5877097673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85006.56835058267,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 85005.52647595863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56747.341242205424,
            "unit": "ns/iter",
            "extra": "iterations: 12349\ncpu: 56742.51356385049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84914.60712547973,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 84912.12305447464 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}