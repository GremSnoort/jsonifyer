window.BENCHMARK_DATA = {
  "lastUpdate": 1702503965638,
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
      }
    ]
  }
}