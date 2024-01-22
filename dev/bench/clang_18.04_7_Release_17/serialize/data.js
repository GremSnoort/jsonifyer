window.BENCHMARK_DATA = {
  "lastUpdate": 1705963418678,
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
        "date": 1705778413810,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 709.4578731189255,
            "unit": "ns/iter",
            "extra": "iterations: 985048\ncpu: 709.4280684799118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10930.326924595362,
            "unit": "ns/iter",
            "extra": "iterations: 75938\ncpu: 10930.265479733465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24441.988503703113,
            "unit": "ns/iter",
            "extra": "iterations: 33750\ncpu: 24440.660740740735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38722.46663232508,
            "unit": "ns/iter",
            "extra": "iterations: 21353\ncpu: 38721.85173043602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48335.4522717516,
            "unit": "ns/iter",
            "extra": "iterations: 16353\ncpu: 48332.96642817833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51857.62950000026,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51857.51000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59563.12150000258,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59562.91 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68995.95942591032,
            "unit": "ns/iter",
            "extra": "iterations: 12890\ncpu: 68993.51435221107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78477.74532896107,
            "unit": "ns/iter",
            "extra": "iterations: 11293\ncpu: 78477.38422031347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 568.6992728597303,
            "unit": "ns/iter",
            "extra": "iterations: 1219022\ncpu: 568.6520833914394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 471.526810406704,
            "unit": "ns/iter",
            "extra": "iterations: 1439497\ncpu: 471.5181761406935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 465.4204483460453,
            "unit": "ns/iter",
            "extra": "iterations: 1486575\ncpu: 465.41210500647446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 473.60016065550207,
            "unit": "ns/iter",
            "extra": "iterations: 1467737\ncpu: 473.5868210721675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 926.6333273105462,
            "unit": "ns/iter",
            "extra": "iterations: 741626\ncpu: 926.6073465601254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3365.5962585886236,
            "unit": "ns/iter",
            "extra": "iterations: 238680\ncpu: 3365.509049773752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15716.345394234153,
            "unit": "ns/iter",
            "extra": "iterations: 52152\ncpu: 15715.849823592582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12348.750943058163,
            "unit": "ns/iter",
            "extra": "iterations: 66804\ncpu: 12348.381833423146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11060.546320862115,
            "unit": "ns/iter",
            "extra": "iterations: 73876\ncpu: 11060.187340949704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11785.771184378716,
            "unit": "ns/iter",
            "extra": "iterations: 69851\ncpu: 11785.55639861993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40667.03411781936,
            "unit": "ns/iter",
            "extra": "iterations: 20693\ncpu: 40663.98298941666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 456260.8341085235,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 456182.1705426358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 367382.90735231707,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 367356.2260943483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 363087.7286495483,
            "unit": "ns/iter",
            "extra": "iterations: 2377\ncpu: 363065.46066470427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365243.5462573606,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 365236.29100084136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224374.74104824424,
            "unit": "ns/iter",
            "extra": "iterations: 3854\ncpu: 224368.7597301508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363934.3909774154,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 363917.50208855374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1865399.3056680774,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1865364.3724696327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 735863.1593694949,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 735841.5936952716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2522645.4005447812,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2522563.760217982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3370.056756093502,
            "unit": "ns/iter",
            "extra": "iterations: 232257\ncpu: 3369.9376122140548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15309.511372328821,
            "unit": "ns/iter",
            "extra": "iterations: 53595\ncpu: 15309.103461143728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12148.023949356013,
            "unit": "ns/iter",
            "extra": "iterations: 67768\ncpu: 12147.529807578765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11524.089481333185,
            "unit": "ns/iter",
            "extra": "iterations: 71568\ncpu: 11524.041471048564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11865.70211237339,
            "unit": "ns/iter",
            "extra": "iterations: 69590\ncpu: 11865.50653829579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40357.84620231519,
            "unit": "ns/iter",
            "extra": "iterations: 20631\ncpu: 40357.67049585551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 461673.93315510737,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 461656.57754010585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 382952.39068738656,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 382950.8203991139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382539.04345917,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 382530.8604038627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379837.3913043238,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 379830.7826086963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222738.60523613292,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 222735.0616016419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 373951.13709323347,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 373933.14533622545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1886038.8595040014,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1885995.6611570192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 733844.4217252211,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 733807.5878594234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3330.7535819540667,
            "unit": "ns/iter",
            "extra": "iterations: 215804\ncpu: 3330.560137902913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15376.684596531053,
            "unit": "ns/iter",
            "extra": "iterations: 53858\ncpu: 15376.311782836397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12075.283824712315,
            "unit": "ns/iter",
            "extra": "iterations: 68345\ncpu: 12074.728217133674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11487.378498183414,
            "unit": "ns/iter",
            "extra": "iterations: 71287\ncpu: 11486.771781671272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11810.958192592183,
            "unit": "ns/iter",
            "extra": "iterations: 69868\ncpu: 11810.25505238447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40077.614050221084,
            "unit": "ns/iter",
            "extra": "iterations: 20868\ncpu: 40075.09584052137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 446650.04367932025,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 446630.1130524146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374158.6999999954,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 374132.9487179481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 370686.9562818472,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 370670.670628181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 370224.1350427544,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 370204.0170940146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222760.2495530071,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 222745.9259259254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367636.376651016,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 367620.02556455025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 297.15820043879637,
            "unit": "ns/iter",
            "extra": "iterations: 2355063\ncpu: 297.1520082477645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1508.0785605139433,
            "unit": "ns/iter",
            "extra": "iterations: 462026\ncpu: 1508.004960759779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1132.0017046781913,
            "unit": "ns/iter",
            "extra": "iterations: 608326\ncpu: 1131.933206866061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1129.2409427733935,
            "unit": "ns/iter",
            "extra": "iterations: 622928\ncpu: 1129.1823453111772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 994.0437741186344,
            "unit": "ns/iter",
            "extra": "iterations: 704069\ncpu: 994.009962091787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7432.424997427574,
            "unit": "ns/iter",
            "extra": "iterations: 97210\ncpu: 7432.17055858449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18024.725609284895,
            "unit": "ns/iter",
            "extra": "iterations: 38857\ncpu: 18024.31736881393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4546.8765707469865,
            "unit": "ns/iter",
            "extra": "iterations: 154226\ncpu: 4546.728178128201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4500.308318217865,
            "unit": "ns/iter",
            "extra": "iterations: 155466\ncpu: 4500.288165901193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4546.027571965835,
            "unit": "ns/iter",
            "extra": "iterations: 153997\ncpu: 4546.0073897543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9428.598338883594,
            "unit": "ns/iter",
            "extra": "iterations: 74167\ncpu: 9428.561219949626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7625.057287534843,
            "unit": "ns/iter",
            "extra": "iterations: 92027\ncpu: 7624.811196714041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3237.0543129366765,
            "unit": "ns/iter",
            "extra": "iterations: 216836\ncpu: 3236.975409987253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15971.989738502909,
            "unit": "ns/iter",
            "extra": "iterations: 43366\ncpu: 15971.710556657265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12756.999311782247,
            "unit": "ns/iter",
            "extra": "iterations: 55215\ncpu: 12756.794349361548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12858.63307483854,
            "unit": "ns/iter",
            "extra": "iterations: 54289\ncpu: 12857.750188804313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13131.109656979736,
            "unit": "ns/iter",
            "extra": "iterations: 53029\ncpu: 13130.438062192552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28227.807591888817,
            "unit": "ns/iter",
            "extra": "iterations: 24895\ncpu: 28226.286402892194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100091.90178444299,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 100087.78015703175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85411.75094662597,
            "unit": "ns/iter",
            "extra": "iterations: 8187\ncpu: 85407.12104556167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84468.800168839,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84466.08779546586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84874.78908519278,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 84869.83301064964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54939.68786492276,
            "unit": "ns/iter",
            "extra": "iterations: 12674\ncpu: 54937.265267477196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85042.4106776198,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 85039.18347626514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3043.3206975084167,
            "unit": "ns/iter",
            "extra": "iterations: 230535\ncpu: 3043.207755872173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15528.111535219607,
            "unit": "ns/iter",
            "extra": "iterations: 45062\ncpu: 15527.304602547736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12387.90060278375,
            "unit": "ns/iter",
            "extra": "iterations: 56571\ncpu: 12387.666825758868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12130.936518735269,
            "unit": "ns/iter",
            "extra": "iterations: 57324\ncpu: 12130.493336124355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12494.094736840709,
            "unit": "ns/iter",
            "extra": "iterations: 55860\ncpu: 12493.431793770114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27089.57156147935,
            "unit": "ns/iter",
            "extra": "iterations: 25796\ncpu: 27087.76166847553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98682.16136300753,
            "unit": "ns/iter",
            "extra": "iterations: 7102\ncpu: 98677.11912137545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83524.14053536495,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 83521.31931166329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82844.73879003002,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 82843.07236061669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83238.3879412417,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 83236.83961146732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55751.828833866806,
            "unit": "ns/iter",
            "extra": "iterations: 12520\ncpu: 55747.88338658149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83299.68743074563,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 83296.7869013908 ns\nthreads: 1"
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
        "date": 1705953579686,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 713.0046429020955,
            "unit": "ns/iter",
            "extra": "iterations: 986452\ncpu: 712.9806620088965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11136.75612065348,
            "unit": "ns/iter",
            "extra": "iterations: 74992\ncpu: 11136.462556005974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24718.73164940165,
            "unit": "ns/iter",
            "extra": "iterations: 33691\ncpu: 24718.141343385465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39906.51266277457,
            "unit": "ns/iter",
            "extra": "iterations: 22270\ncpu: 39904.94836102378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50957.64176363152,
            "unit": "ns/iter",
            "extra": "iterations: 16330\ncpu: 50956.21555419473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52938.36850000844,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52937.36999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61083.489299994646,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61082.35999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70719.76434995416,
            "unit": "ns/iter",
            "extra": "iterations: 12230\ncpu: 70717.83319705637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79136.8440355181,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 79129.3269849441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 574.6706479303547,
            "unit": "ns/iter",
            "extra": "iterations: 1217955\ncpu: 574.6305076952766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 481.6889754168027,
            "unit": "ns/iter",
            "extra": "iterations: 1454123\ncpu: 481.6573976204218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 475.77100075612435,
            "unit": "ns/iter",
            "extra": "iterations: 1461245\ncpu: 475.7495834031931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.75270672280107,
            "unit": "ns/iter",
            "extra": "iterations: 1450832\ncpu: 479.7378331881291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 946.4851537932374,
            "unit": "ns/iter",
            "extra": "iterations: 740930\ncpu: 946.4726762312242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3459.0728856348424,
            "unit": "ns/iter",
            "extra": "iterations: 228591\ncpu: 3459.01500933983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15610.09190553572,
            "unit": "ns/iter",
            "extra": "iterations: 53098\ncpu: 15609.88549474556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12728.08096062426,
            "unit": "ns/iter",
            "extra": "iterations: 65291\ncpu: 12727.657716990107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11434.295847437392,
            "unit": "ns/iter",
            "extra": "iterations: 71787\ncpu: 11434.1273489629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12628.787558186892,
            "unit": "ns/iter",
            "extra": "iterations: 68527\ncpu: 12628.241423088693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40285.42560270101,
            "unit": "ns/iter",
            "extra": "iterations: 20740\ncpu: 40284.315332690465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 443734.732758618,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 443724.8478701818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 364790.63832483365,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 364778.2148900166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 355935.3066557764,
            "unit": "ns/iter",
            "extra": "iterations: 2449\ncpu: 355934.0955492037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365111.7791719069,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 365096.61229610996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224628.54702591535,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 224622.85205897345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 365403.32672018895,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 365398.2693119458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1887891.0448982387,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1887706.938775507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750948.865971078,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 750898.3146067436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2545359.2103825733,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2545208.19672132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3303.2539626943385,
            "unit": "ns/iter",
            "extra": "iterations: 236960\ncpu: 3303.0794226873736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15487.642018689485,
            "unit": "ns/iter",
            "extra": "iterations: 52648\ncpu: 15486.21030238568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12481.84897693773,
            "unit": "ns/iter",
            "extra": "iterations: 66076\ncpu: 12481.345723106684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11872.569153455737,
            "unit": "ns/iter",
            "extra": "iterations: 69447\ncpu: 11871.94983224616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12227.999644365591,
            "unit": "ns/iter",
            "extra": "iterations: 67485\ncpu: 12227.414981106936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40619.1207581948,
            "unit": "ns/iter",
            "extra": "iterations: 20628\ncpu: 40615.978281947086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 468097.2840969966,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 468071.8598382741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384893.64193118794,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 384872.8654447915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 384529.60900267033,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 384515.88702559605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 377684.89316613023,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 377676.4273356423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223135.62306895896,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 223129.63439752857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379048.36796159646,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 379036.7088607592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901718.3027137476,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1901632.985386213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 743663.9087269596,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 743642.7542033654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3504.520739390018,
            "unit": "ns/iter",
            "extra": "iterations: 214447\ncpu: 3504.415076918759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15254.423220005921,
            "unit": "ns/iter",
            "extra": "iterations: 54298\ncpu: 15254.219308261736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12434.937079631756,
            "unit": "ns/iter",
            "extra": "iterations: 66608\ncpu: 12433.932860917539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11810.073717626528,
            "unit": "ns/iter",
            "extra": "iterations: 69929\ncpu: 11809.408113944164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12930.818740263332,
            "unit": "ns/iter",
            "extra": "iterations: 68046\ncpu: 12929.82835140928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40377.16146310581,
            "unit": "ns/iter",
            "extra": "iterations: 20723\ncpu: 40375.524779230924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 454769.4636696946,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 454748.2488238336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374786.0423326476,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 374776.8034557238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 374106.2162849288,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 374095.6743002548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374645.4490760043,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 374611.04426299746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227155.57874516366,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 227152.1126760559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372960.6598962775,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 372943.4312878142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.86857293822715,
            "unit": "ns/iter",
            "extra": "iterations: 2350452\ncpu: 295.8645826419751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1502.4163550754008,
            "unit": "ns/iter",
            "extra": "iterations: 464284\ncpu: 1502.3132393104331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1212.6321768999935,
            "unit": "ns/iter",
            "extra": "iterations: 577321\ncpu: 1212.5716888871218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1228.788034292221,
            "unit": "ns/iter",
            "extra": "iterations: 590454\ncpu: 1228.7067239784976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1051.7326252900173,
            "unit": "ns/iter",
            "extra": "iterations: 666155\ncpu: 1051.6782130285042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7474.070955652653,
            "unit": "ns/iter",
            "extra": "iterations: 95003\ncpu: 7473.902929381116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19228.16247942987,
            "unit": "ns/iter",
            "extra": "iterations: 36460\ncpu: 19227.87712561705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4568.524019376691,
            "unit": "ns/iter",
            "extra": "iterations: 153168\ncpu: 4568.25903582995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4520.9578709533625,
            "unit": "ns/iter",
            "extra": "iterations: 154905\ncpu: 4520.74561828217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4552.510941831005,
            "unit": "ns/iter",
            "extra": "iterations: 153722\ncpu: 4552.2631763834115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9359.630566097952,
            "unit": "ns/iter",
            "extra": "iterations: 74828\ncpu: 9359.39888811684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8501.600821146876,
            "unit": "ns/iter",
            "extra": "iterations: 82324\ncpu: 8501.389631213253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3184.0142431639365,
            "unit": "ns/iter",
            "extra": "iterations: 220246\ncpu: 3183.9252472235903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15904.762906264847,
            "unit": "ns/iter",
            "extra": "iterations: 44029\ncpu: 15904.335778691133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12657.125397514188,
            "unit": "ns/iter",
            "extra": "iterations: 55344\ncpu: 12656.752312807312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12566.12902993053,
            "unit": "ns/iter",
            "extra": "iterations: 55522\ncpu: 12565.918014480723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12760.799414679024,
            "unit": "ns/iter",
            "extra": "iterations: 53304\ncpu: 12760.443869127812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28003.45732244813,
            "unit": "ns/iter",
            "extra": "iterations: 24978\ncpu: 28002.706381615957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100945.66719355887,
            "unit": "ns/iter",
            "extra": "iterations: 6959\ncpu: 100935.99655122861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86178.09033844073,
            "unit": "ns/iter",
            "extra": "iterations: 8125\ncpu: 86173.0215384621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85945.45167579669,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85945.1310176717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 89843.13600987231,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 89837.94935145178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55514.646774458626,
            "unit": "ns/iter",
            "extra": "iterations: 12618\ncpu: 55514.4793152637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85203.29032651648,
            "unit": "ns/iter",
            "extra": "iterations: 8208\ncpu: 85199.34210526296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2951.658259858121,
            "unit": "ns/iter",
            "extra": "iterations: 237268\ncpu: 2951.6091508336754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15200.330654997384,
            "unit": "ns/iter",
            "extra": "iterations: 45924\ncpu: 15200.052260256181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11977.78521476807,
            "unit": "ns/iter",
            "extra": "iterations: 58342\ncpu: 11977.73987864642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11670.294735783242,
            "unit": "ns/iter",
            "extra": "iterations: 59762\ncpu: 11670.251999598418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12177.513255031196,
            "unit": "ns/iter",
            "extra": "iterations: 57299\ncpu: 12177.079879229928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26564.721476251598,
            "unit": "ns/iter",
            "extra": "iterations: 26364\ncpu: 26564.254286147665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98699.14332386093,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 98697.24431818297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83373.92751899277,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 83373.66920152059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82597.59624632252,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 82591.34310850529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83062.94979728448,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 83060.2671118543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55827.63956921427,
            "unit": "ns/iter",
            "extra": "iterations: 12535\ncpu: 55826.50977263678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84360.492008158,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 84354.41653647383 ns\nthreads: 1"
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
        "date": 1705955010475,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.7816707728826,
            "unit": "ns/iter",
            "extra": "iterations: 984275\ncpu: 712.7560895075056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11129.730098922695,
            "unit": "ns/iter",
            "extra": "iterations: 75109\ncpu: 11129.470502869164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25031.76403920378,
            "unit": "ns/iter",
            "extra": "iterations: 33264\ncpu: 25031.337181337178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39904.507616321214,
            "unit": "ns/iter",
            "extra": "iterations: 21664\ncpu: 39903.76661742985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49297.08027185755,
            "unit": "ns/iter",
            "extra": "iterations: 16332\ncpu: 49295.113886847896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50376.287799997495,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50376.18999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61141.968000003995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61086.379999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70809.93336051975,
            "unit": "ns/iter",
            "extra": "iterations: 12260\ncpu: 70807.2756933116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80651.72458650869,
            "unit": "ns/iter",
            "extra": "iterations: 10762\ncpu: 80649.91637242152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 583.553302831913,
            "unit": "ns/iter",
            "extra": "iterations: 1200818\ncpu: 583.5340576173899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 489.1931509454678,
            "unit": "ns/iter",
            "extra": "iterations: 1424839\ncpu: 489.18523426155474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 487.012301193207,
            "unit": "ns/iter",
            "extra": "iterations: 1437828\ncpu: 487.00526071268536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 491.14304159924467,
            "unit": "ns/iter",
            "extra": "iterations: 1441301\ncpu: 491.1324560241059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 963.3628816254518,
            "unit": "ns/iter",
            "extra": "iterations: 738486\ncpu: 963.3440579780784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3457.10897366448,
            "unit": "ns/iter",
            "extra": "iterations: 230753\ncpu: 3457.093948941078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15586.910979228931,
            "unit": "ns/iter",
            "extra": "iterations: 52235\ncpu: 15586.717718005164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12671.906411372833,
            "unit": "ns/iter",
            "extra": "iterations: 64292\ncpu: 12671.713432464381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12014.637889511981,
            "unit": "ns/iter",
            "extra": "iterations: 67681\ncpu: 12014.173844949077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12149.570002733875,
            "unit": "ns/iter",
            "extra": "iterations: 65826\ncpu: 12149.258651596603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41209.00538936528,
            "unit": "ns/iter",
            "extra": "iterations: 20225\ncpu: 41207.871446229976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 452111.9466805587,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 452098.065865135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 373371.0756733376,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 373362.89012398507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 372428.79604981357,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 372424.6457707176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 373230.185185189,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 373224.2032730405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224858.73239802898,
            "unit": "ns/iter",
            "extra": "iterations: 3849\ncpu: 224855.72876071668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370260.567822012,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 370253.5301668803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1874729.6077236105,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1874581.9105691074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750644.3738991414,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 750628.7429943958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2519539.8509484883,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2519477.5067750677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3292.185717893867,
            "unit": "ns/iter",
            "extra": "iterations: 237570\ncpu: 3292.1366334133004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15516.09299535057,
            "unit": "ns/iter",
            "extra": "iterations: 53336\ncpu: 15515.73983800806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12661.646632953249,
            "unit": "ns/iter",
            "extra": "iterations: 65057\ncpu: 12661.587530934443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12025.47452588347,
            "unit": "ns/iter",
            "extra": "iterations: 68285\ncpu: 12025.305704034574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12059.870740632048,
            "unit": "ns/iter",
            "extra": "iterations: 68320\ncpu: 12059.814110070241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 39864.601630356265,
            "unit": "ns/iter",
            "extra": "iterations: 20609\ncpu: 39861.07040613317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 467265.1480085811,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 467234.39181916084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 384334.2330659552,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 384306.1051693405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378368.28345762886,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 378339.1838525662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373597.5674637056,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 373592.18616567197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221976.77507679025,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 221965.04605936594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374229.40924511617,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 374209.0330788796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1906651.8705636412,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1906521.7118998028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 761840.5210222563,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 761800.9068425392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3328.1373475125642,
            "unit": "ns/iter",
            "extra": "iterations: 239036\ncpu: 3328.051004869561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15236.802244066674,
            "unit": "ns/iter",
            "extra": "iterations: 52494\ncpu: 15236.459404884368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12386.815190717418,
            "unit": "ns/iter",
            "extra": "iterations: 66014\ncpu: 12386.639197745877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11799.422648079537,
            "unit": "ns/iter",
            "extra": "iterations: 69507\ncpu: 11798.650495633541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12125.761361284425,
            "unit": "ns/iter",
            "extra": "iterations: 67642\ncpu: 12124.839596700287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42424.630516837846,
            "unit": "ns/iter",
            "extra": "iterations: 19871\ncpu: 42421.730159529085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 465535.5161803744,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 465510.55702917755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 384866.02626970434,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 384839.14185639424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 381615.82050176524,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 381602.3788927337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 381920.5292587907,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 381896.8790637173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230400.16889586547,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 230384.42171518426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 380315.8626253721,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 380293.4147405147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 296.81081570834715,
            "unit": "ns/iter",
            "extra": "iterations: 2356406\ncpu: 296.7870986578709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1514.9623636235021,
            "unit": "ns/iter",
            "extra": "iterations: 461681\ncpu: 1514.8769388387218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1200.533646039462,
            "unit": "ns/iter",
            "extra": "iterations: 613995\ncpu: 1200.4247591592696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1156.6435998659897,
            "unit": "ns/iter",
            "extra": "iterations: 606167\ncpu: 1156.5611456908725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 996.7497196623879,
            "unit": "ns/iter",
            "extra": "iterations: 702724\ncpu: 996.7455217126508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7375.512019013795,
            "unit": "ns/iter",
            "extra": "iterations: 100133\ncpu: 7375.014231072685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18852.110635066132,
            "unit": "ns/iter",
            "extra": "iterations: 36878\ncpu: 18851.02228971207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4512.3416766119035,
            "unit": "ns/iter",
            "extra": "iterations: 155015\ncpu: 4512.3226784504905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4495.2641889170445,
            "unit": "ns/iter",
            "extra": "iterations: 156513\ncpu: 4495.027889057212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4501.497806255807,
            "unit": "ns/iter",
            "extra": "iterations: 155442\ncpu: 4501.224894172706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9362.86729566474,
            "unit": "ns/iter",
            "extra": "iterations: 74828\ncpu: 9362.242743358192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8401.007442603379,
            "unit": "ns/iter",
            "extra": "iterations: 83976\ncpu: 8400.984805182434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3190.8112608894207,
            "unit": "ns/iter",
            "extra": "iterations: 219361\ncpu: 3190.796905557499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15935.723150898712,
            "unit": "ns/iter",
            "extra": "iterations: 44089\ncpu: 15935.466896504746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12935.762542233733,
            "unit": "ns/iter",
            "extra": "iterations: 54755\ncpu: 12934.94110126934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12728.407554166022,
            "unit": "ns/iter",
            "extra": "iterations: 55016\ncpu: 12727.43383742897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13104.975831378842,
            "unit": "ns/iter",
            "extra": "iterations: 53706\ncpu: 13104.154098238638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28418.17778409491,
            "unit": "ns/iter",
            "extra": "iterations: 24631\ncpu: 28415.87430473813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101509.99288411655,
            "unit": "ns/iter",
            "extra": "iterations: 6886\ncpu: 101503.20941039822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86887.36084003361,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 86886.05311920929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86296.46403855826,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 86295.45229856741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85902.48174191848,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 85898.95139402825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55561.968827233075,
            "unit": "ns/iter",
            "extra": "iterations: 12543\ncpu: 55557.46631587378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85822.92075934018,
            "unit": "ns/iter",
            "extra": "iterations: 8165\ncpu: 85816.79118187295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2998.5012619975114,
            "unit": "ns/iter",
            "extra": "iterations: 232964\ncpu: 2998.3091808176146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15338.650902873449,
            "unit": "ns/iter",
            "extra": "iterations: 45632\ncpu: 15338.389726507889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12115.06805603517,
            "unit": "ns/iter",
            "extra": "iterations: 57820\ncpu: 12115.019024559091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11920.21467395946,
            "unit": "ns/iter",
            "extra": "iterations: 58689\ncpu: 11919.260849563141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12228.13002166025,
            "unit": "ns/iter",
            "extra": "iterations: 57252\ncpu: 12227.401662823937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26842.792489131123,
            "unit": "ns/iter",
            "extra": "iterations: 25989\ncpu: 26840.898072261265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99468.60923773787,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99461.90138849552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83581.16638934189,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83576.36082719215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82762.92284023661,
            "unit": "ns/iter",
            "extra": "iterations: 8450\ncpu: 82760.50887574082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83390.59935706195,
            "unit": "ns/iter",
            "extra": "iterations: 8399\ncpu: 83385.2958685559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55427.23059233914,
            "unit": "ns/iter",
            "extra": "iterations: 12611\ncpu: 55423.24161446365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84149.18727447707,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 84143.34856868068 ns\nthreads: 1"
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
        "date": 1705957020086,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 724.9757270639558,
            "unit": "ns/iter",
            "extra": "iterations: 960782\ncpu: 724.9879785424789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11089.857796887281,
            "unit": "ns/iter",
            "extra": "iterations: 75357\ncpu: 11090.368512546942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24422.693851944823,
            "unit": "ns/iter",
            "extra": "iterations: 34271\ncpu: 24423.182865979983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39077.515496069886,
            "unit": "ns/iter",
            "extra": "iterations: 20844\ncpu: 39077.86413356361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48380.19576341893,
            "unit": "ns/iter",
            "extra": "iterations: 16806\ncpu: 48376.419136022865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60308.46624637122,
            "unit": "ns/iter",
            "extra": "iterations: 14117\ncpu: 60306.82864631294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60332.52660000698,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60326.47999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69863.95605539237,
            "unit": "ns/iter",
            "extra": "iterations: 12493\ncpu: 69862.378932202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79868.34856408932,
            "unit": "ns/iter",
            "extra": "iterations: 10899\ncpu: 79872.37361225812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 592.6243232557139,
            "unit": "ns/iter",
            "extra": "iterations: 1181207\ncpu: 592.6255093307096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 518.9330546774618,
            "unit": "ns/iter",
            "extra": "iterations: 1413930\ncpu: 518.8912463841914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.6511138868697,
            "unit": "ns/iter",
            "extra": "iterations: 1454681\ncpu: 478.6309850750784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 481.2523767861996,
            "unit": "ns/iter",
            "extra": "iterations: 1456168\ncpu: 481.2535366798342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 944.9394611369551,
            "unit": "ns/iter",
            "extra": "iterations: 741821\ncpu: 944.9410302485362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3420.4581433180665,
            "unit": "ns/iter",
            "extra": "iterations: 237262\ncpu: 3420.277161955982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15567.33410336207,
            "unit": "ns/iter",
            "extra": "iterations: 52379\ncpu: 15566.700395196582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12289.057234038812,
            "unit": "ns/iter",
            "extra": "iterations: 66429\ncpu: 12288.321365668633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10972.847568738207,
            "unit": "ns/iter",
            "extra": "iterations: 73830\ncpu: 10972.53690911551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11555.3467147,
            "unit": "ns/iter",
            "extra": "iterations: 69674\ncpu: 11554.611476303937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40324.475250412856,
            "unit": "ns/iter",
            "extra": "iterations: 20566\ncpu: 40322.08985704559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 443941.5215827098,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 443908.7872559101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 362333.5174999909,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 362323.0833333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 356850.5559640421,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 356843.7091503277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 364232.14777495747,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 364211.8387909319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222765.23586594922,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 222762.29214632875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363796.02931321086,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 363786.6834170846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1882645.877550918,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1882568.3673469413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 730029.5661252851,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 730009.7447795806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2535789.046831735,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2535728.3746556523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3274.6751028809035,
            "unit": "ns/iter",
            "extra": "iterations: 238140\ncpu: 3274.541446208115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15761.613899091557,
            "unit": "ns/iter",
            "extra": "iterations: 51730\ncpu: 15761.06707906437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12471.064739725156,
            "unit": "ns/iter",
            "extra": "iterations: 65354\ncpu: 12470.704165009003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11141.893517948354,
            "unit": "ns/iter",
            "extra": "iterations: 73017\ncpu: 11141.697139022366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12095.121023554482,
            "unit": "ns/iter",
            "extra": "iterations: 68780\ncpu: 12094.656876999139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41015.43499999974,
            "unit": "ns/iter",
            "extra": "iterations: 20400\ncpu: 41014.10784313725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 471158.9852540123,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 471164.17258328845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387831.43137257133,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 387823.0837789659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 379062.15698181326,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 379039.15871638915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 378832.5693241159,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 378821.5771230501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224606.51181304827,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 224603.18438623528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 375320.6218306874,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 375303.0511388045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901532.2661122382,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1901381.7047817165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739938.4844621451,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 739913.386454184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3437.794627041939,
            "unit": "ns/iter",
            "extra": "iterations: 233726\ncpu: 3437.5546580183627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15437.83300732294,
            "unit": "ns/iter",
            "extra": "iterations: 53679\ncpu: 15437.806218446647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12162.079424714057,
            "unit": "ns/iter",
            "extra": "iterations: 68140\ncpu: 12161.894628705564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 10860.770784616976,
            "unit": "ns/iter",
            "extra": "iterations: 75693\ncpu: 10860.528714676384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11540.00510204092,
            "unit": "ns/iter",
            "extra": "iterations: 71932\ncpu: 11539.499805371768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40297.25779755071,
            "unit": "ns/iter",
            "extra": "iterations: 20904\ncpu: 40297.08668197469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 452227.6011469845,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 452208.4984358709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 376083.5803921584,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 376076.33986927953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368330.8022024588,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 368313.3418043193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372561.93801120744,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372538.4847180386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223684.93849307622,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 223679.70271655518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369431.835750867,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 369404.1808873726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 295.41404392329446,
            "unit": "ns/iter",
            "extra": "iterations: 2358885\ncpu: 295.4020225657472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1550.8522953389197,
            "unit": "ns/iter",
            "extra": "iterations: 455314\ncpu: 1550.7610132787524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1217.3296733954865,
            "unit": "ns/iter",
            "extra": "iterations: 587806\ncpu: 1217.3276557231488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1128.9786603714565,
            "unit": "ns/iter",
            "extra": "iterations: 621426\ncpu: 1128.955338205994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1004.4644345637802,
            "unit": "ns/iter",
            "extra": "iterations: 696533\ncpu: 1004.4203217937998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7216.377234741426,
            "unit": "ns/iter",
            "extra": "iterations: 96208\ncpu: 7216.122359886941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18887.923076925228,
            "unit": "ns/iter",
            "extra": "iterations: 37310\ncpu: 18885.808094344568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4526.775998758569,
            "unit": "ns/iter",
            "extra": "iterations: 154642\ncpu: 4526.604674021272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4495.082019149613,
            "unit": "ns/iter",
            "extra": "iterations: 155927\ncpu: 4494.7629339371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4526.18126812118,
            "unit": "ns/iter",
            "extra": "iterations: 154859\ncpu: 4526.12247270099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8995.223524416206,
            "unit": "ns/iter",
            "extra": "iterations: 77732\ncpu: 8994.78979056251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8485.12354922433,
            "unit": "ns/iter",
            "extra": "iterations: 82542\ncpu: 8484.927673184582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3224.845110969966,
            "unit": "ns/iter",
            "extra": "iterations: 217446\ncpu: 3224.631402739083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16016.801633311745,
            "unit": "ns/iter",
            "extra": "iterations: 43470\ncpu: 16016.126063952017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12743.75407388525,
            "unit": "ns/iter",
            "extra": "iterations: 54923\ncpu: 12742.661544343991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12777.039613897794,
            "unit": "ns/iter",
            "extra": "iterations: 54804\ncpu: 12777.116633822525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13093.936586370623,
            "unit": "ns/iter",
            "extra": "iterations: 53427\ncpu: 13093.636176465267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28129.180747588704,
            "unit": "ns/iter",
            "extra": "iterations: 24880\ncpu: 28128.999196141445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101204.71746078292,
            "unit": "ns/iter",
            "extra": "iterations: 6884\ncpu: 101199.5496804188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85977.828180808,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 85970.3534918085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85395.25024403298,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85393.17959980492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86096.14099570796,
            "unit": "ns/iter",
            "extra": "iterations: 8135\ncpu: 86090.19053472708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55317.48818397929,
            "unit": "ns/iter",
            "extra": "iterations: 12610\ncpu: 55316.38382236312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85829.87255505082,
            "unit": "ns/iter",
            "extra": "iterations: 8129\ncpu: 85825.37827531125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3046.001649497,
            "unit": "ns/iter",
            "extra": "iterations: 229767\ncpu: 3045.8786509811866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15571.918688190113,
            "unit": "ns/iter",
            "extra": "iterations: 45098\ncpu: 15571.517583928418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12407.031381714938,
            "unit": "ns/iter",
            "extra": "iterations: 56466\ncpu: 12405.93631565912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12331.503390696585,
            "unit": "ns/iter",
            "extra": "iterations: 56773\ncpu: 12330.7945678402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12763.68442137876,
            "unit": "ns/iter",
            "extra": "iterations: 54915\ncpu: 12762.940908676996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26945.43276518698,
            "unit": "ns/iter",
            "extra": "iterations: 25991\ncpu: 26944.780885691103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100153.51936645086,
            "unit": "ns/iter",
            "extra": "iterations: 6945\ncpu: 100149.67602591726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84421.43625619334,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84415.01628271629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83554.87298748003,
            "unit": "ns/iter",
            "extra": "iterations: 8385\ncpu: 83551.24627310649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84013.84845212635,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 84006.04751619819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55878.60415004209,
            "unit": "ns/iter",
            "extra": "iterations: 12530\ncpu: 55878.05267358362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84395.76617275085,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 84394.03686302858 ns\nthreads: 1"
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
        "date": 1705958486267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 738.0148580370745,
            "unit": "ns/iter",
            "extra": "iterations: 948241\ncpu: 738.0034189620573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11064.18279825036,
            "unit": "ns/iter",
            "extra": "iterations: 75876\ncpu: 11064.008382097105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24625.303192438212,
            "unit": "ns/iter",
            "extra": "iterations: 33642\ncpu: 24625.108495333214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39035.64770889258,
            "unit": "ns/iter",
            "extra": "iterations: 22260\ncpu: 39033.140161725074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50502.02434344605,
            "unit": "ns/iter",
            "extra": "iterations: 16678\ncpu: 50500.221849142574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60503.444088551405,
            "unit": "ns/iter",
            "extra": "iterations: 14049\ncpu: 60501.65848103069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60282.7005999984,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60280.36000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69634.57455429887,
            "unit": "ns/iter",
            "extra": "iterations: 12340\ncpu: 69630.49432739058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81807.28508529982,
            "unit": "ns/iter",
            "extra": "iterations: 10902\ncpu: 81803.96257567423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 575.0875814755426,
            "unit": "ns/iter",
            "extra": "iterations: 1220612\ncpu: 575.072094981861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 478.9832485680577,
            "unit": "ns/iter",
            "extra": "iterations: 1458144\ncpu: 478.9607885092281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.11153380109545,
            "unit": "ns/iter",
            "extra": "iterations: 1460750\ncpu: 478.09221290433044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 470.11141611040176,
            "unit": "ns/iter",
            "extra": "iterations: 1488528\ncpu: 470.0771500435333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 931.1146504871208,
            "unit": "ns/iter",
            "extra": "iterations: 751074\ncpu: 931.090145578197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3431.6814685766476,
            "unit": "ns/iter",
            "extra": "iterations: 232470\ncpu: 3431.3851249623576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15536.158540730064,
            "unit": "ns/iter",
            "extra": "iterations: 52958\ncpu: 15534.93334340424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12670.067734652357,
            "unit": "ns/iter",
            "extra": "iterations: 65107\ncpu: 12669.421106793465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12090.250770251865,
            "unit": "ns/iter",
            "extra": "iterations: 67835\ncpu: 12089.6336699344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12404.829442469065,
            "unit": "ns/iter",
            "extra": "iterations: 66095\ncpu: 12404.310462213485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40737.89205564467,
            "unit": "ns/iter",
            "extra": "iterations: 20631\ncpu: 40735.180068828355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 445773.04830417834,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 445745.52929085377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 366544.6822231459,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 366527.87441663083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 365798.0736975685,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 365784.70986869925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 367797.99277215626,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 367787.3724489806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224161.10225523706,
            "unit": "ns/iter",
            "extra": "iterations: 3902\ncpu: 224160.71245515055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372943.0782828324,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 372916.91919191956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1877535.6518218867,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1877461.9433198336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748026.5721115862,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 747979.1235059778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2528729.2958905273,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2528544.3835616447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3435.9694701557887,
            "unit": "ns/iter",
            "extra": "iterations: 230332\ncpu: 3435.7787888786543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15292.69858057354,
            "unit": "ns/iter",
            "extra": "iterations: 53895\ncpu: 15291.73021616103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12416.567513196116,
            "unit": "ns/iter",
            "extra": "iterations: 66113\ncpu: 12416.099708075531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11764.459677650657,
            "unit": "ns/iter",
            "extra": "iterations: 69490\ncpu: 11763.984746006652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12107.585576254418,
            "unit": "ns/iter",
            "extra": "iterations: 67583\ncpu: 12106.976606543072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40078.515955904084,
            "unit": "ns/iter",
            "extra": "iterations: 20682\ncpu: 40076.066144473334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 464475.1130064526,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 464467.2707889144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385613.8897254196,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 385593.40124003356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 378536.6181187766,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 378517.25184221694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 379034.3057851306,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 379015.0935189223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221710.37160960774,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 221704.20785804838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 378235.3851851804,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 378212.3747276689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1885020.4596274162,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1884927.9503105679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 758317.2317173614,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 758277.8964667221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3739.055074887633,
            "unit": "ns/iter",
            "extra": "iterations: 214054\ncpu: 3738.7878759565383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16490.092586280727,
            "unit": "ns/iter",
            "extra": "iterations: 49867\ncpu: 16489.482022179072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12406.462112595762,
            "unit": "ns/iter",
            "extra": "iterations: 64177\ncpu: 12406.011499446835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11787.671466926942,
            "unit": "ns/iter",
            "extra": "iterations: 69649\ncpu: 11787.474335597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12117.854082564752,
            "unit": "ns/iter",
            "extra": "iterations: 67874\ncpu: 12117.503020302276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40199.09479562771,
            "unit": "ns/iter",
            "extra": "iterations: 20771\ncpu: 40197.202830869974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 444765.81327801227,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 444739.47095435933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372903.2964392798,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 372891.37709137716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 372344.85098208155,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372327.92485055455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372394.2670967517,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 372367.65591397753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224165.20616966372,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 224160.74550128682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366783.119661714,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 366763.38266385056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.3117409631571,
            "unit": "ns/iter",
            "extra": "iterations: 2290732\ncpu: 305.29394097607155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1542.5235941653275,
            "unit": "ns/iter",
            "extra": "iterations: 454392\ncpu: 1542.4303244775433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1147.3583832875993,
            "unit": "ns/iter",
            "extra": "iterations: 608890\ncpu: 1147.33498661499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1172.161001375461,
            "unit": "ns/iter",
            "extra": "iterations: 596939\ncpu: 1172.1179215966777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1004.920111325556,
            "unit": "ns/iter",
            "extra": "iterations: 695618\ncpu: 1004.8684766639191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7505.61978976741,
            "unit": "ns/iter",
            "extra": "iterations: 95989\ncpu: 7505.1922616133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19163.999372443,
            "unit": "ns/iter",
            "extra": "iterations: 36650\ncpu: 19162.911323328823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4571.087187416661,
            "unit": "ns/iter",
            "extra": "iterations: 153279\ncpu: 4570.9281767235425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4512.42307841047,
            "unit": "ns/iter",
            "extra": "iterations: 155158\ncpu: 4512.2024001341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4555.981913820501,
            "unit": "ns/iter",
            "extra": "iterations: 152658\ncpu: 4555.823474695082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9473.640053962716,
            "unit": "ns/iter",
            "extra": "iterations: 74125\ncpu: 9473.307251264787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8570.791894865408,
            "unit": "ns/iter",
            "extra": "iterations: 81800\ncpu: 8570.473105134342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3212.0141941644697,
            "unit": "ns/iter",
            "extra": "iterations: 217836\ncpu: 3211.8483629886364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16062.787291614717,
            "unit": "ns/iter",
            "extra": "iterations: 43609\ncpu: 16061.851911302907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12791.95615557662,
            "unit": "ns/iter",
            "extra": "iterations: 54739\ncpu: 12791.185443650782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12849.057572149337,
            "unit": "ns/iter",
            "extra": "iterations: 54575\ncpu: 12848.604672468913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13110.770614693782,
            "unit": "ns/iter",
            "extra": "iterations: 53360\ncpu: 13110.361694152974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28125.507598295182,
            "unit": "ns/iter",
            "extra": "iterations: 24874\ncpu: 28124.394950551043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100169.11364620176,
            "unit": "ns/iter",
            "extra": "iterations: 6925\ncpu: 100167.49458483756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85277.88542555054,
            "unit": "ns/iter",
            "extra": "iterations: 8213\ncpu: 85273.37148423263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85009.91117027651,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 85006.74089313827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85144.32560961595,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 85138.97852723506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55023.01835078556,
            "unit": "ns/iter",
            "extra": "iterations: 12697\ncpu: 55021.55627313492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83897.16885463083,
            "unit": "ns/iter",
            "extra": "iterations: 8303\ncpu: 83893.53245814756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3010.704154669205,
            "unit": "ns/iter",
            "extra": "iterations: 232341\ncpu: 3010.571100236312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15378.74121805512,
            "unit": "ns/iter",
            "extra": "iterations: 45548\ncpu: 15378.220778080251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12152.705671052236,
            "unit": "ns/iter",
            "extra": "iterations: 57626\ncpu: 12151.84812411064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12056.03024652115,
            "unit": "ns/iter",
            "extra": "iterations: 58453\ncpu: 12055.415461995055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12355.318851523922,
            "unit": "ns/iter",
            "extra": "iterations: 56945\ncpu: 12354.612345245372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26699.80556825405,
            "unit": "ns/iter",
            "extra": "iterations: 26256\ncpu: 26698.87644728809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100313.18929032914,
            "unit": "ns/iter",
            "extra": "iterations: 6947\ncpu: 100309.90355549101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84862.72973624156,
            "unit": "ns/iter",
            "extra": "iterations: 8303\ncpu: 84859.84583885223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83249.34286395923,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 83244.54372170707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83426.92245481396,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 83424.64319695656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55331.37277403935,
            "unit": "ns/iter",
            "extra": "iterations: 12635\ncpu: 55329.5844875344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83834.2514520887,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 83830.73572119976 ns\nthreads: 1"
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
        "date": 1705959942561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 692.9396234804368,
            "unit": "ns/iter",
            "extra": "iterations: 989590\ncpu: 692.9241403005286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10855.718588718733,
            "unit": "ns/iter",
            "extra": "iterations: 76923\ncpu: 10855.286455286456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24355.471983262163,
            "unit": "ns/iter",
            "extra": "iterations: 34408\ncpu: 24355.068588700306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37890.02167168691,
            "unit": "ns/iter",
            "extra": "iterations: 22564\ncpu: 37888.43290196773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51135.684229806895,
            "unit": "ns/iter",
            "extra": "iterations: 16379\ncpu: 51132.98125648696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60066.22978662746,
            "unit": "ns/iter",
            "extra": "iterations: 14013\ncpu: 60064.61143224145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59917.400200004064,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59913.69000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69268.56956624814,
            "unit": "ns/iter",
            "extra": "iterations: 12657\ncpu: 69267.64636169712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79035.49300762347,
            "unit": "ns/iter",
            "extra": "iterations: 11012\ncpu: 79033.80857246635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.092544477653,
            "unit": "ns/iter",
            "extra": "iterations: 1210834\ncpu: 579.0830947925144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 485.5024719720926,
            "unit": "ns/iter",
            "extra": "iterations: 1443382\ncpu: 485.48928835194084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 483.60140717169276,
            "unit": "ns/iter",
            "extra": "iterations: 1442610\ncpu: 483.56631383395364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 482.3330029767077,
            "unit": "ns/iter",
            "extra": "iterations: 1432795\ncpu: 482.30151556921993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 955.3972437546731,
            "unit": "ns/iter",
            "extra": "iterations: 732228\ncpu: 955.3581671282701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3512.9994861905916,
            "unit": "ns/iter",
            "extra": "iterations: 227711\ncpu: 3512.832054665779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15771.058461887631,
            "unit": "ns/iter",
            "extra": "iterations: 52701\ncpu: 15769.9398493387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12930.789897182409,
            "unit": "ns/iter",
            "extra": "iterations: 64873\ncpu: 12930.132720854595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12198.941183409379,
            "unit": "ns/iter",
            "extra": "iterations: 67821\ncpu: 12198.322053641214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12498.99414530346,
            "unit": "ns/iter",
            "extra": "iterations: 66784\ncpu: 12498.331935793001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42566.014769990135,
            "unit": "ns/iter",
            "extra": "iterations: 19499\ncpu: 42562.92117544503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 452022.3599373915,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 452000.73030777177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 374686.5555555404,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 374681.4236111124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 379036.1401498558,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 379011.679153812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376779.7135986211,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 376758.1547879314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221830.54653875928,
            "unit": "ns/iter",
            "extra": "iterations: 3857\ncpu: 221821.13041223807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 376102.6289281259,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 376086.052518296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1883629.5850201906,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1883498.5829959554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 740480.4838455076,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 740454.925137902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2554248.8397790673,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2554182.596685091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3301.6207982929513,
            "unit": "ns/iter",
            "extra": "iterations: 237106\ncpu: 3301.5242127993583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15701.481064743664,
            "unit": "ns/iter",
            "extra": "iterations: 51280\ncpu: 15701.086193447663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12749.20807394996,
            "unit": "ns/iter",
            "extra": "iterations: 63934\ncpu: 12748.726812024956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12246.469623756155,
            "unit": "ns/iter",
            "extra": "iterations: 66845\ncpu: 12246.323584411755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12507.26808167437,
            "unit": "ns/iter",
            "extra": "iterations: 64499\ncpu: 12506.883827656186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41417.12495010131,
            "unit": "ns/iter",
            "extra": "iterations: 20040\ncpu: 41416.337325349465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 467314.61356297776,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 467296.1786867597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 386158.6588078156,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 386146.8861209965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 384402.4551083506,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 384389.1198584687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 382186.76169656153,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 382172.1906427636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222345.61026957442,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 222343.13222079503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382690.0826771449,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 382680.2274715647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1896120.424686316,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1895970.083682008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 757392.5871857392,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 757376.8856447681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3742.0526812185967,
            "unit": "ns/iter",
            "extra": "iterations: 214175\ncpu: 3741.9035835181726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16732.77848139509,
            "unit": "ns/iter",
            "extra": "iterations: 49585\ncpu: 16732.473530301497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13423.178876894326,
            "unit": "ns/iter",
            "extra": "iterations: 59745\ncpu: 13422.65963678969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12901.515354813442,
            "unit": "ns/iter",
            "extra": "iterations: 63498\ncpu: 12901.4709124696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13150.019559468725,
            "unit": "ns/iter",
            "extra": "iterations: 62016\ncpu: 13149.85971362227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41510.213655832944,
            "unit": "ns/iter",
            "extra": "iterations: 19845\ncpu: 41509.181153943086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 456396.3280339179,
            "unit": "ns/iter",
            "extra": "iterations: 1887\ncpu: 456381.875993642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 381557.2204487069,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 381553.10612597025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371835.8108108216,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 371822.0139494331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 373072.9089347065,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 373063.9175257726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227026.4167732073,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 227025.56890820822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371242.34582624445,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 371228.9182282792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 298.7483070787191,
            "unit": "ns/iter",
            "extra": "iterations: 2341810\ncpu: 298.73994901379916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1541.2326526403085,
            "unit": "ns/iter",
            "extra": "iterations: 455761\ncpu: 1541.182549625799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1223.9088907365635,
            "unit": "ns/iter",
            "extra": "iterations: 571325\ncpu: 1223.8920054259786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1258.4273455767957,
            "unit": "ns/iter",
            "extra": "iterations: 556814\ncpu: 1258.412683589129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1027.707050945565,
            "unit": "ns/iter",
            "extra": "iterations: 681866\ncpu: 1027.67171262388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7775.030392243732,
            "unit": "ns/iter",
            "extra": "iterations: 91372\ncpu: 7774.753753885172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19527.984130527286,
            "unit": "ns/iter",
            "extra": "iterations: 35855\ncpu: 19527.251429368374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4622.067402154752,
            "unit": "ns/iter",
            "extra": "iterations: 151464\ncpu: 4622.01183119416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4588.078491128596,
            "unit": "ns/iter",
            "extra": "iterations: 152909\ncpu: 4588.000052318648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4627.462569920917,
            "unit": "ns/iter",
            "extra": "iterations: 151242\ncpu: 4627.365414369071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9432.19514494187,
            "unit": "ns/iter",
            "extra": "iterations: 73202\ncpu: 9432.03464386215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8358.336093406158,
            "unit": "ns/iter",
            "extra": "iterations: 83935\ncpu: 8358.05444689336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3313.5834430876807,
            "unit": "ns/iter",
            "extra": "iterations: 211078\ncpu: 3313.45900567562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16573.728587189107,
            "unit": "ns/iter",
            "extra": "iterations: 42603\ncpu: 16572.783606788278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13181.806810826165,
            "unit": "ns/iter",
            "extra": "iterations: 52534\ncpu: 13181.130315605196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13216.729989687654,
            "unit": "ns/iter",
            "extra": "iterations: 53335\ncpu: 13216.139495640895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13411.274957094754,
            "unit": "ns/iter",
            "extra": "iterations: 51859\ncpu: 13410.657745039436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28472.335993158144,
            "unit": "ns/iter",
            "extra": "iterations: 24563\ncpu: 28470.528844196746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 103306.555377207,
            "unit": "ns/iter",
            "extra": "iterations: 6853\ncpu: 103305.42827958558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87126.62226991424,
            "unit": "ns/iter",
            "extra": "iterations: 7921\ncpu: 87124.45398308401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85934.5302434252,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 85930.95647897704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87847.3446918437,
            "unit": "ns/iter",
            "extra": "iterations: 8129\ncpu: 87840.55849428038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56166.72438474873,
            "unit": "ns/iter",
            "extra": "iterations: 12434\ncpu: 56164.25928904546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 88008.15084852226,
            "unit": "ns/iter",
            "extra": "iterations: 7955\ncpu: 88007.41671904572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3067.694535919155,
            "unit": "ns/iter",
            "extra": "iterations: 228053\ncpu: 3067.6465558444597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15621.152185066236,
            "unit": "ns/iter",
            "extra": "iterations: 44827\ncpu: 15621.154661253539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12254.134277104857,
            "unit": "ns/iter",
            "extra": "iterations: 57076\ncpu: 12253.414745252065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12231.099929200785,
            "unit": "ns/iter",
            "extra": "iterations: 57911\ncpu: 12230.470894994081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12615.917998746929,
            "unit": "ns/iter",
            "extra": "iterations: 55865\ncpu: 12615.220621140305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26937.228858211154,
            "unit": "ns/iter",
            "extra": "iterations: 26003\ncpu: 26936.17274929824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99749.14185914941,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 99744.58226404285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84076.73172487096,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 84074.5048613611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83494.4064355219,
            "unit": "ns/iter",
            "extra": "iterations: 8422\ncpu: 83492.36523391072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84413.41245184225,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 84408.78588293765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56742.3926546749,
            "unit": "ns/iter",
            "extra": "iterations: 12171\ncpu: 56739.4626571364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84790.63182662248,
            "unit": "ns/iter",
            "extra": "iterations: 8075\ncpu: 84786.83591331425 ns\nthreads: 1"
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
        "date": 1705962006672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 746.6532293123433,
            "unit": "ns/iter",
            "extra": "iterations: 933914\ncpu: 746.6551524016131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10905.711052824488,
            "unit": "ns/iter",
            "extra": "iterations: 75872\ncpu: 10905.333983551243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24586.77670469312,
            "unit": "ns/iter",
            "extra": "iterations: 34273\ncpu: 24584.83646018731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37308.85387766145,
            "unit": "ns/iter",
            "extra": "iterations: 22707\ncpu: 37308.054784868116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49773.78955563399,
            "unit": "ns/iter",
            "extra": "iterations: 16698\ncpu: 49773.02670978559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59726.001547329135,
            "unit": "ns/iter",
            "extra": "iterations: 14218\ncpu: 59724.21578281051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64502.245500000296,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 64496.160000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69316.45627649575,
            "unit": "ns/iter",
            "extra": "iterations: 12499\ncpu: 69313.69709576771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79767.47829647914,
            "unit": "ns/iter",
            "extra": "iterations: 10989\ncpu: 79762.48976248989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 578.1603575262087,
            "unit": "ns/iter",
            "extra": "iterations: 1209198\ncpu: 578.1554385634125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 482.57222895722197,
            "unit": "ns/iter",
            "extra": "iterations: 1449301\ncpu: 482.54482678201447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.8616305170719,
            "unit": "ns/iter",
            "extra": "iterations: 1461659\ncpu: 478.8328194195773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.13299933438634,
            "unit": "ns/iter",
            "extra": "iterations: 1458887\ncpu: 479.11181606251955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 943.3035560872393,
            "unit": "ns/iter",
            "extra": "iterations: 741461\ncpu: 943.2625586510942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3437.066368217214,
            "unit": "ns/iter",
            "extra": "iterations: 231195\ncpu: 3436.9008845347003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15414.862266014938,
            "unit": "ns/iter",
            "extra": "iterations: 52674\ncpu: 15414.348635000179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12641.002843528406,
            "unit": "ns/iter",
            "extra": "iterations: 65060\ncpu: 12640.445742391643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12038.3676114084,
            "unit": "ns/iter",
            "extra": "iterations: 68061\ncpu: 12037.757305946161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12343.346877306954,
            "unit": "ns/iter",
            "extra": "iterations: 66401\ncpu: 12342.631888073973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41072.25523631017,
            "unit": "ns/iter",
            "extra": "iterations: 20291\ncpu: 41070.22325168798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 443555.2158385047,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 443537.0600414071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 369502.40677965205,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 369479.66101695044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 365796.8598993239,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 365786.07382550306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 366052.76443323767,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 366030.88916982664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 220519.84195769278,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 220509.48253887298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 367873.8982263362,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 367856.50337837776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1874454.0405677557,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1874345.233265717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748518.6924302625,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 748479.920318725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2535829.09065925,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2535665.6593406624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3287.6004627211264,
            "unit": "ns/iter",
            "extra": "iterations: 237292\ncpu: 3287.577330883472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15657.90301642443,
            "unit": "ns/iter",
            "extra": "iterations: 52844\ncpu: 15657.537279539772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12412.905893578432,
            "unit": "ns/iter",
            "extra": "iterations: 66021\ncpu: 12412.81713394229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11618.578473814223,
            "unit": "ns/iter",
            "extra": "iterations: 70686\ncpu: 11618.077129841822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12065.45756776538,
            "unit": "ns/iter",
            "extra": "iterations: 68250\ncpu: 12064.751648351717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40395.47934084226,
            "unit": "ns/iter",
            "extra": "iterations: 20693\ncpu: 40394.297588556554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 469627.78469947516,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 469611.4207650268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387176.61902631505,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 387151.31755247875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 382484.660008887,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 382470.7057256976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 392192.91601048835,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 392178.78390201373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223016.3714991753,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 223009.96705107158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 379454.23506323097,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 379440.99433056935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1892143.7338875877,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1891999.58419958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 743259.6615755977,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 743222.0257234751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3787.84653437667,
            "unit": "ns/iter",
            "extra": "iterations: 214478\ncpu: 3787.6108505301054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15202.323229106956,
            "unit": "ns/iter",
            "extra": "iterations: 53377\ncpu: 15201.534368735609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12365.897288365042,
            "unit": "ns/iter",
            "extra": "iterations: 66565\ncpu: 12365.250507023195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11759.370534123607,
            "unit": "ns/iter",
            "extra": "iterations: 70115\ncpu: 11758.789132140017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12149.193708583476,
            "unit": "ns/iter",
            "extra": "iterations: 68061\ncpu: 12148.922290298442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40667.193951126814,
            "unit": "ns/iter",
            "extra": "iterations: 20665\ncpu: 40666.17469150712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 453443.3022036027,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 453406.8205666305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 376438.7393365101,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 376419.34510986466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 371825.0404772175,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 371818.4064763554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 371552.37832047045,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 371530.76263924874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225170.18361075563,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 225160.43533930916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369696.4507399565,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 369675.8139534892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 301.46254879990903,
            "unit": "ns/iter",
            "extra": "iterations: 2315066\ncpu: 301.4450991893984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1532.5564007812768,
            "unit": "ns/iter",
            "extra": "iterations: 457077\ncpu: 1532.4706778070245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1200.1871870933871,
            "unit": "ns/iter",
            "extra": "iterations: 598022\ncpu: 1200.1337743427453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1181.788728550563,
            "unit": "ns/iter",
            "extra": "iterations: 593606\ncpu: 1181.7574283278761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 999.9731235576969,
            "unit": "ns/iter",
            "extra": "iterations: 699795\ncpu: 999.9642752520393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7505.4212168966615,
            "unit": "ns/iter",
            "extra": "iterations: 96442\ncpu: 7505.0755894735385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 17955.107894334888,
            "unit": "ns/iter",
            "extra": "iterations: 39066\ncpu: 17953.744944452923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4545.486375031135,
            "unit": "ns/iter",
            "extra": "iterations: 153982\ncpu: 4545.207881440659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4525.547371756615,
            "unit": "ns/iter",
            "extra": "iterations: 154628\ncpu: 4525.55617352613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4508.275228704259,
            "unit": "ns/iter",
            "extra": "iterations: 154457\ncpu: 4508.283211508758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9414.099036899357,
            "unit": "ns/iter",
            "extra": "iterations: 74447\ncpu: 9414.040861283733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8435.148794550034,
            "unit": "ns/iter",
            "extra": "iterations: 83081\ncpu: 8434.869585103777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3196.6195079442577,
            "unit": "ns/iter",
            "extra": "iterations: 219203\ncpu: 3196.599042896292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15849.417343623165,
            "unit": "ns/iter",
            "extra": "iterations: 44316\ncpu: 15849.050004512965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12567.235219247841,
            "unit": "ns/iter",
            "extra": "iterations: 55782\ncpu: 12566.964253701935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12657.284466265997,
            "unit": "ns/iter",
            "extra": "iterations: 55402\ncpu: 12656.445615681681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13058.380601596928,
            "unit": "ns/iter",
            "extra": "iterations: 53757\ncpu: 13057.577617798455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28117.09576055937,
            "unit": "ns/iter",
            "extra": "iterations: 24791\ncpu: 28115.501593319907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101378.90679808965,
            "unit": "ns/iter",
            "extra": "iterations: 6899\ncpu: 101377.7793883185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86007.16124677632,
            "unit": "ns/iter",
            "extra": "iterations: 8149\ncpu: 86006.50386550526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85208.60248144504,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 85202.8342050842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86006.03248260736,
            "unit": "ns/iter",
            "extra": "iterations: 8189\ncpu: 86001.72182195543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55372.558196460115,
            "unit": "ns/iter",
            "extra": "iterations: 12664\ncpu: 55368.98294377773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85953.64677716694,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 85952.80540208821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2960.5138986821885,
            "unit": "ns/iter",
            "extra": "iterations: 235418\ncpu: 2960.446100128297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15214.35780054509,
            "unit": "ns/iter",
            "extra": "iterations: 46266\ncpu: 15214.122681883182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12173.955323424376,
            "unit": "ns/iter",
            "extra": "iterations: 57726\ncpu: 12173.502407927153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11961.448586384115,
            "unit": "ns/iter",
            "extra": "iterations: 58078\ncpu: 11960.725231585064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12374.073859024084,
            "unit": "ns/iter",
            "extra": "iterations: 56662\ncpu: 12373.206028731789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27073.91115056706,
            "unit": "ns/iter",
            "extra": "iterations: 25909\ncpu: 27072.02516500083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98969.78402032072,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 98963.96103896094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83972.07915126899,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 83970.61628322843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83286.21546501666,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 83284.8913172575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83986.21014753441,
            "unit": "ns/iter",
            "extra": "iterations: 8337\ncpu: 83981.4561592905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55771.513991044805,
            "unit": "ns/iter",
            "extra": "iterations: 12508\ncpu: 55766.90118324273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84710.48197275194,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84706.35475702434 ns\nthreads: 1"
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
        "date": 1705963418082,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 731.8474687429662,
            "unit": "ns/iter",
            "extra": "iterations: 956027\ncpu: 731.8508786885726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11518.846845869084,
            "unit": "ns/iter",
            "extra": "iterations: 73697\ncpu: 11518.603199587502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25080.07118593217,
            "unit": "ns/iter",
            "extra": "iterations: 33265\ncpu: 25080.559146249812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41191.32418731984,
            "unit": "ns/iter",
            "extra": "iterations: 21503\ncpu: 41190.32693112588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50024.68909715299,
            "unit": "ns/iter",
            "extra": "iterations: 16005\ncpu: 50022.043111527644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50202.7906999956,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50203.18999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60759.571999994936,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60757.84999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69933.82096175328,
            "unit": "ns/iter",
            "extra": "iterations: 12394\ncpu: 69933.51621752458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80970.68728045713,
            "unit": "ns/iter",
            "extra": "iterations: 10818\ncpu: 80967.70197818457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 606.5850097440336,
            "unit": "ns/iter",
            "extra": "iterations: 1154550\ncpu: 606.582304794077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 526.2468293135671,
            "unit": "ns/iter",
            "extra": "iterations: 1335121\ncpu: 526.2370976113785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 508.8146296593063,
            "unit": "ns/iter",
            "extra": "iterations: 1377421\ncpu: 508.8050784763697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 507.64709619192644,
            "unit": "ns/iter",
            "extra": "iterations: 1377381\ncpu: 507.6459599776674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 986.5802195772197,
            "unit": "ns/iter",
            "extra": "iterations: 714919\ncpu: 986.5421117637092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3495.2008810078146,
            "unit": "ns/iter",
            "extra": "iterations: 231326\ncpu: 3495.1656968952952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15499.608379568881,
            "unit": "ns/iter",
            "extra": "iterations: 52270\ncpu: 15499.070212358893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12629.109775567544,
            "unit": "ns/iter",
            "extra": "iterations: 65142\ncpu: 12629.078014184408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12059.245086483535,
            "unit": "ns/iter",
            "extra": "iterations: 67874\ncpu: 12059.094793293443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12341.031819617649,
            "unit": "ns/iter",
            "extra": "iterations: 66437\ncpu: 12341.040384123344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40672.37389607593,
            "unit": "ns/iter",
            "extra": "iterations: 20495\ncpu: 40670.83678946097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 458371.9165378539,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 458346.1617722834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 365561.75425894867,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 365352.1294718913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 362429.0851774424,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 362416.9937369526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365129.68456375826,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 365119.588926175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224748.76227190366,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 224741.0177332303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 363122.6416596726,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 363108.7175188605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1895308.807377205,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1895152.0491803268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 756511.2237370163,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 756473.4562951078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2547318.2955799894,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2547228.1767955795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3311.314107576796,
            "unit": "ns/iter",
            "extra": "iterations: 239141\ncpu: 3311.3063004670867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15641.226039886547,
            "unit": "ns/iter",
            "extra": "iterations: 52650\ncpu: 15641.063627730251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12815.985944431779,
            "unit": "ns/iter",
            "extra": "iterations: 64245\ncpu: 12815.872052299797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12225.507291061413,
            "unit": "ns/iter",
            "extra": "iterations: 67137\ncpu: 12225.526907666406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12278.143317253502,
            "unit": "ns/iter",
            "extra": "iterations: 65512\ncpu: 12277.918549273369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40715.91310499672,
            "unit": "ns/iter",
            "extra": "iterations: 20496\ncpu: 40715.466432474524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 471024.0010851585,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 471024.09115572623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390089.54712747224,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 390088.95870736206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 387571.56261180795,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 387561.09123434615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385435.38773708825,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 385432.59814733267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224149.71549947734,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 224149.5623068989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382964.0955721132,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 382956.5541429207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1899887.1185030814,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1899748.4407484368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 743697.6463999599,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 743704.9600000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3387.9199099330654,
            "unit": "ns/iter",
            "extra": "iterations: 230940\ncpu: 3387.8873300424425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15584.017727111295,
            "unit": "ns/iter",
            "extra": "iterations: 53421\ncpu: 15583.899590048828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12712.8831783574,
            "unit": "ns/iter",
            "extra": "iterations: 65279\ncpu: 12712.907673218044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12132.781311690773,
            "unit": "ns/iter",
            "extra": "iterations: 68385\ncpu: 12132.587555750528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12467.423699247849,
            "unit": "ns/iter",
            "extra": "iterations: 66500\ncpu: 12467.550375939803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 39938.59459589427,
            "unit": "ns/iter",
            "extra": "iterations: 20762\ncpu: 39936.49937385604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 456886.1176157701,
            "unit": "ns/iter",
            "extra": "iterations: 1879\ncpu: 456868.014901543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380570.5916047341,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 380556.4057717549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377030.53742966364,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 377014.10644742585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 377879.7521739386,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 377877.0000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230965.11795820892,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 230960.59243586456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376823.591383821,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 376814.3167972157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 314.51841153937335,
            "unit": "ns/iter",
            "extra": "iterations: 2226810\ncpu: 314.4979140564317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1597.4095857530658,
            "unit": "ns/iter",
            "extra": "iterations: 437879\ncpu: 1597.3600012788836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1236.2285391984701,
            "unit": "ns/iter",
            "extra": "iterations: 575328\ncpu: 1236.2089103954715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1191.3605017111768,
            "unit": "ns/iter",
            "extra": "iterations: 588785\ncpu: 1191.3725723311493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1060.3370875220298,
            "unit": "ns/iter",
            "extra": "iterations: 666278\ncpu: 1060.2857966194235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7507.745862178472,
            "unit": "ns/iter",
            "extra": "iterations: 93890\ncpu: 7507.326658856128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19487.837922194823,
            "unit": "ns/iter",
            "extra": "iterations: 35884\ncpu: 19487.086166536687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4679.7288439054655,
            "unit": "ns/iter",
            "extra": "iterations: 149685\ncpu: 4679.602498580367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4624.8108416568,
            "unit": "ns/iter",
            "extra": "iterations: 151582\ncpu: 4624.7232521011665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4657.7039579591365,
            "unit": "ns/iter",
            "extra": "iterations: 150330\ncpu: 4657.647841415522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10017.050564926461,
            "unit": "ns/iter",
            "extra": "iterations: 70009\ncpu: 10016.91353968764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8939.695042442812,
            "unit": "ns/iter",
            "extra": "iterations: 78224\ncpu: 8939.505778277915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3304.0037929299847,
            "unit": "ns/iter",
            "extra": "iterations: 212237\ncpu: 3303.8796251360523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16233.226045994923,
            "unit": "ns/iter",
            "extra": "iterations: 43093\ncpu: 16232.40665537329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12962.979391740964,
            "unit": "ns/iter",
            "extra": "iterations: 54056\ncpu: 12962.3742045285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13030.79835971303,
            "unit": "ns/iter",
            "extra": "iterations: 53893\ncpu: 13030.096673037271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13454.903353623693,
            "unit": "ns/iter",
            "extra": "iterations: 52242\ncpu: 13454.528923088836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28222.721579223606,
            "unit": "ns/iter",
            "extra": "iterations: 24797\ncpu: 28221.13158849875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102622.78750183138,
            "unit": "ns/iter",
            "extra": "iterations: 6833\ncpu: 102622.65476364689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87406.14889636755,
            "unit": "ns/iter",
            "extra": "iterations: 8019\ncpu: 87403.31712183524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86524.60360805085,
            "unit": "ns/iter",
            "extra": "iterations: 8093\ncpu: 86521.56184356903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87014.41188934165,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 87010.7178464617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56479.14859080556,
            "unit": "ns/iter",
            "extra": "iterations: 12383\ncpu: 56476.29007510274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87807.17013280666,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 87807.32899022764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3105.8847340168654,
            "unit": "ns/iter",
            "extra": "iterations: 225973\ncpu: 3105.8060033720953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15793.217957888599,
            "unit": "ns/iter",
            "extra": "iterations: 44738\ncpu: 15793.368054003393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12465.014829522994,
            "unit": "ns/iter",
            "extra": "iterations: 55902\ncpu: 12464.509319881305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12273.610749556601,
            "unit": "ns/iter",
            "extra": "iterations: 57007\ncpu: 12272.827898328345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12587.036216502072,
            "unit": "ns/iter",
            "extra": "iterations: 55113\ncpu: 12586.80529094761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26991.46430363928,
            "unit": "ns/iter",
            "extra": "iterations: 25899\ncpu: 26991.347156260625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 101148.26678239604,
            "unit": "ns/iter",
            "extra": "iterations: 6912\ncpu: 101148.04687499923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85641.42754417757,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 85640.40219378454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84233.87205669988,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 84232.14800576743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84618.65611406248,
            "unit": "ns/iter",
            "extra": "iterations: 8276\ncpu: 84617.50845819215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56757.67410352035,
            "unit": "ns/iter",
            "extra": "iterations: 12326\ncpu: 56757.19617069654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85709.73177019939,
            "unit": "ns/iter",
            "extra": "iterations: 8146\ncpu: 85708.58089860188 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}