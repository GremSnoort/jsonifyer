window.BENCHMARK_DATA = {
  "lastUpdate": 1702490280860,
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
      }
    ]
  }
}