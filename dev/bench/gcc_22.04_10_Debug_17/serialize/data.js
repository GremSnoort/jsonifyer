window.BENCHMARK_DATA = {
  "lastUpdate": 1702397913246,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-10 22.04 Debug c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397911308,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7568.051489724467,
            "unit": "ns/iter",
            "extra": "iterations: 92601\ncpu: 7567.812442630209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95268.40710045634,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 95267.90234068765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185333.84788555096,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 185327.11971386496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 277626.2251993619,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 277620.8931419457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 358500.2037974757,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 358497.0886075953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 449954.41833079816,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 449938.70967741933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 533429.5719534709,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 533417.0238824247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 630683.534519591,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 630673.950177936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 579915.4470000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579908.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5902.093362416626,
            "unit": "ns/iter",
            "extra": "iterations: 118281\ncpu: 5901.907322393292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4884.253935703466,
            "unit": "ns/iter",
            "extra": "iterations: 143367\ncpu: 4884.190922597245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4839.14271463951,
            "unit": "ns/iter",
            "extra": "iterations: 145360\ncpu: 4839.0925976885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4905.9176510980205,
            "unit": "ns/iter",
            "extra": "iterations: 142722\ncpu: 4905.777665671725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9147.219517278387,
            "unit": "ns/iter",
            "extra": "iterations: 81579\ncpu: 9146.885840718816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48458.410744624365,
            "unit": "ns/iter",
            "extra": "iterations: 17069\ncpu: 48456.71099654343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194854.01800774745,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 194854.9122407112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159042.3241289914,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 159038.58413639705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 159286.27866418974,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 159283.4322820036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 161825.12854442865,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 161795.2173913048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 353441.32780249126,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 353437.9603399445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2974822.533122971,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2974695.8990536276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2409825.1088082986,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2409704.9222797975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2415954.9067357504,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2415669.170984458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2435867.503916511,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2435740.9921671036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1442506.8680124218,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1442347.9813664588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2356983.7544305073,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2356804.0506329113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10123291.542857345,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10123201.904761897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5823876.167701822,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5823570.80745342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11722390.1098906,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11722005.494505513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47178.94966040952,
            "unit": "ns/iter",
            "extra": "iterations: 17521\ncpu: 47177.8836824382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 197040.27613140075,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 197029.8644612902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 160388.8709617152,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 160383.58543417274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 162071.66672963422,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 162067.2586434925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164328.4984668483,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 164329.39823687266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 356663.9241492538,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 356655.67855678714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2950206.1582279117,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2950157.9113924117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2438850.9843342756,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2438760.3133159266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2447886.750656194,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2447896.850393686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2446320.3175852313,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2446254.068241466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1439943.594135772,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1439873.611111118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2370931.576142175,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2370742.1319797086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10269663.09708751,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10269266.990291215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5747756.490797566,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5747590.79754601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47131.912228017405,
            "unit": "ns/iter",
            "extra": "iterations: 17648\ncpu: 47130.64369900273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 199384.01523194322,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 199384.9757673665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158819.37534806118,
            "unit": "ns/iter",
            "extra": "iterations: 5387\ncpu: 158815.63022090265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159083.79870008965,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 159082.82265552506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 161329.37859695914,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 161324.0361105896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 354986.7507128266,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 354982.11812627164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2921288.1442006957,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2921221.630094044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2429332.677083451,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2429238.281250005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2440960.0052354764,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2440969.1099476577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2430818.2062663445,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2430724.543080943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1451932.9485981103,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451909.0342679115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2365425.6101265303,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2365360.506329126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2695.8427498784336,
            "unit": "ns/iter",
            "extra": "iterations: 258906\ncpu: 2695.8544800043114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19308.83445871026,
            "unit": "ns/iter",
            "extra": "iterations: 36136\ncpu: 19308.390524684466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15453.171025000116,
            "unit": "ns/iter",
            "extra": "iterations: 45239\ncpu: 15452.70673533892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15560.57215566807,
            "unit": "ns/iter",
            "extra": "iterations: 44993\ncpu: 15559.98488653776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11766.553171469805,
            "unit": "ns/iter",
            "extra": "iterations: 59515\ncpu: 11766.596656305099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 80798.71597974225,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 80799.15956712047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189666.7502027616,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189665.74749932502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46670.285885328114,
            "unit": "ns/iter",
            "extra": "iterations: 15034\ncpu: 46669.83504057531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46906.204728602665,
            "unit": "ns/iter",
            "extra": "iterations: 15015\ncpu: 46906.46020646036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46780.75621690507,
            "unit": "ns/iter",
            "extra": "iterations: 14919\ncpu: 46779.469133319144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 94688.3054579836,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 94686.21994055565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88498.38986477836,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88496.17085808235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22744.996982479362,
            "unit": "ns/iter",
            "extra": "iterations: 30820\ncpu: 22745.068137573006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 111513.53302635878,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 111512.24198158245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 88873.73361174618,
            "unit": "ns/iter",
            "extra": "iterations: 7902\ncpu: 88869.21032649859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 89051.71404979975,
            "unit": "ns/iter",
            "extra": "iterations: 7872\ncpu: 89049.83485772228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 90084.72290086228,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 90081.25241095497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 164711.10492807764,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 164711.83683093434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 788256.7799096913,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 788259.8194130923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 670060.0507177192,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 670047.2727272752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 664935.148713086,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 664924.6901811153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 669871.1367113077,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 669849.1395793465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 416637.4433849757,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 416639.3325387383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 652964.3597390386,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 652960.2050326152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22663.966413448507,
            "unit": "ns/iter",
            "extra": "iterations: 30935\ncpu: 22663.617262000946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 111131.93268475975,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 111129.68774517522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 88840.04072053565,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 88837.28276037029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89556.9911674327,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 89557.61648745443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90454.5908446149,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 90453.13990973507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162677.5048814443,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162674.9418874956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 785980.396629223,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 785973.3707865158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 667457.8043893294,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 667454.1030534334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 666023.0486177468,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 666025.9294566289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 667499.0697230229,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 667479.8471824215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 418670.347305388,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 418658.68263473426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 651114.9906890132,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 651088.5474860421 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397911308,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7568.051489724467,
            "unit": "ns/iter",
            "extra": "iterations: 92601\ncpu: 7567.812442630209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95268.40710045634,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 95267.90234068765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185333.84788555096,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 185327.11971386496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 277626.2251993619,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 277620.8931419457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 358500.2037974757,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 358497.0886075953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 449954.41833079816,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 449938.70967741933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 533429.5719534709,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 533417.0238824247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 630683.534519591,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 630673.950177936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 579915.4470000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579908.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5902.093362416626,
            "unit": "ns/iter",
            "extra": "iterations: 118281\ncpu: 5901.907322393292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4884.253935703466,
            "unit": "ns/iter",
            "extra": "iterations: 143367\ncpu: 4884.190922597245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4839.14271463951,
            "unit": "ns/iter",
            "extra": "iterations: 145360\ncpu: 4839.0925976885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4905.9176510980205,
            "unit": "ns/iter",
            "extra": "iterations: 142722\ncpu: 4905.777665671725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9147.219517278387,
            "unit": "ns/iter",
            "extra": "iterations: 81579\ncpu: 9146.885840718816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48458.410744624365,
            "unit": "ns/iter",
            "extra": "iterations: 17069\ncpu: 48456.71099654343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194854.01800774745,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 194854.9122407112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159042.3241289914,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 159038.58413639705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 159286.27866418974,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 159283.4322820036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 161825.12854442865,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 161795.2173913048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 353441.32780249126,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 353437.9603399445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2974822.533122971,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2974695.8990536276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2409825.1088082986,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2409704.9222797975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2415954.9067357504,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2415669.170984458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2435867.503916511,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2435740.9921671036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1442506.8680124218,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1442347.9813664588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2356983.7544305073,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2356804.0506329113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10123291.542857345,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10123201.904761897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5823876.167701822,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5823570.80745342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11722390.1098906,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11722005.494505513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47178.94966040952,
            "unit": "ns/iter",
            "extra": "iterations: 17521\ncpu: 47177.8836824382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 197040.27613140075,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 197029.8644612902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 160388.8709617152,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 160383.58543417274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 162071.66672963422,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 162067.2586434925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164328.4984668483,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 164329.39823687266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 356663.9241492538,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 356655.67855678714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2950206.1582279117,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2950157.9113924117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2438850.9843342756,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2438760.3133159266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2447886.750656194,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2447896.850393686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2446320.3175852313,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2446254.068241466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1439943.594135772,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1439873.611111118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2370931.576142175,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2370742.1319797086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10269663.09708751,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10269266.990291215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5747756.490797566,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5747590.79754601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47131.912228017405,
            "unit": "ns/iter",
            "extra": "iterations: 17648\ncpu: 47130.64369900273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 199384.01523194322,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 199384.9757673665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158819.37534806118,
            "unit": "ns/iter",
            "extra": "iterations: 5387\ncpu: 158815.63022090265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159083.79870008965,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 159082.82265552506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 161329.37859695914,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 161324.0361105896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 354986.7507128266,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 354982.11812627164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2921288.1442006957,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2921221.630094044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2429332.677083451,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2429238.281250005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2440960.0052354764,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2440969.1099476577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2430818.2062663445,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2430724.543080943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1451932.9485981103,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451909.0342679115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2365425.6101265303,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2365360.506329126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2695.8427498784336,
            "unit": "ns/iter",
            "extra": "iterations: 258906\ncpu: 2695.8544800043114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19308.83445871026,
            "unit": "ns/iter",
            "extra": "iterations: 36136\ncpu: 19308.390524684466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15453.171025000116,
            "unit": "ns/iter",
            "extra": "iterations: 45239\ncpu: 15452.70673533892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15560.57215566807,
            "unit": "ns/iter",
            "extra": "iterations: 44993\ncpu: 15559.98488653776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11766.553171469805,
            "unit": "ns/iter",
            "extra": "iterations: 59515\ncpu: 11766.596656305099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 80798.71597974225,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 80799.15956712047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189666.7502027616,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189665.74749932502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46670.285885328114,
            "unit": "ns/iter",
            "extra": "iterations: 15034\ncpu: 46669.83504057531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46906.204728602665,
            "unit": "ns/iter",
            "extra": "iterations: 15015\ncpu: 46906.46020646036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46780.75621690507,
            "unit": "ns/iter",
            "extra": "iterations: 14919\ncpu: 46779.469133319144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 94688.3054579836,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 94686.21994055565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88498.38986477836,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88496.17085808235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22744.996982479362,
            "unit": "ns/iter",
            "extra": "iterations: 30820\ncpu: 22745.068137573006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 111513.53302635878,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 111512.24198158245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 88873.73361174618,
            "unit": "ns/iter",
            "extra": "iterations: 7902\ncpu: 88869.21032649859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 89051.71404979975,
            "unit": "ns/iter",
            "extra": "iterations: 7872\ncpu: 89049.83485772228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 90084.72290086228,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 90081.25241095497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 164711.10492807764,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 164711.83683093434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 788256.7799096913,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 788259.8194130923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 670060.0507177192,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 670047.2727272752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 664935.148713086,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 664924.6901811153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 669871.1367113077,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 669849.1395793465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 416637.4433849757,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 416639.3325387383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 652964.3597390386,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 652960.2050326152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22663.966413448507,
            "unit": "ns/iter",
            "extra": "iterations: 30935\ncpu: 22663.617262000946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 111131.93268475975,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 111129.68774517522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 88840.04072053565,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 88837.28276037029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89556.9911674327,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 89557.61648745443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90454.5908446149,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 90453.13990973507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162677.5048814443,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162674.9418874956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 785980.396629223,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 785973.3707865158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 667457.8043893294,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 667454.1030534334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 666023.0486177468,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 666025.9294566289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 667499.0697230229,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 667479.8471824215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 418670.347305388,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 418658.68263473426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 651114.9906890132,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 651088.5474860421 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397911308,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7568.051489724467,
            "unit": "ns/iter",
            "extra": "iterations: 92601\ncpu: 7567.812442630209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95268.40710045634,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 95267.90234068765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185333.84788555096,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 185327.11971386496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 277626.2251993619,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 277620.8931419457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 358500.2037974757,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 358497.0886075953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 449954.41833079816,
            "unit": "ns/iter",
            "extra": "iterations: 1953\ncpu: 449938.70967741933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 533429.5719534709,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 533417.0238824247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 630683.534519591,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 630673.950177936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 579915.4470000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579908.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5902.093362416626,
            "unit": "ns/iter",
            "extra": "iterations: 118281\ncpu: 5901.907322393292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4884.253935703466,
            "unit": "ns/iter",
            "extra": "iterations: 143367\ncpu: 4884.190922597245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4839.14271463951,
            "unit": "ns/iter",
            "extra": "iterations: 145360\ncpu: 4839.0925976885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4905.9176510980205,
            "unit": "ns/iter",
            "extra": "iterations: 142722\ncpu: 4905.777665671725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9147.219517278387,
            "unit": "ns/iter",
            "extra": "iterations: 81579\ncpu: 9146.885840718816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48458.410744624365,
            "unit": "ns/iter",
            "extra": "iterations: 17069\ncpu: 48456.71099654343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194854.01800774745,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 194854.9122407112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159042.3241289914,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 159038.58413639705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 159286.27866418974,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 159283.4322820036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 161825.12854442865,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 161795.2173913048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 353441.32780249126,
            "unit": "ns/iter",
            "extra": "iterations: 2471\ncpu: 353437.9603399445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2974822.533122971,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2974695.8990536276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2409825.1088082986,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2409704.9222797975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2415954.9067357504,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2415669.170984458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2435867.503916511,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2435740.9921671036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1442506.8680124218,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1442347.9813664588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2356983.7544305073,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2356804.0506329113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10123291.542857345,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10123201.904761897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5823876.167701822,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5823570.80745342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11722390.1098906,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11722005.494505513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47178.94966040952,
            "unit": "ns/iter",
            "extra": "iterations: 17521\ncpu: 47177.8836824382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 197040.27613140075,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 197029.8644612902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 160388.8709617152,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 160383.58543417274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 162071.66672963422,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 162067.2586434925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 164328.4984668483,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 164329.39823687266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 356663.9241492538,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 356655.67855678714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2950206.1582279117,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2950157.9113924117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2438850.9843342756,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2438760.3133159266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2447886.750656194,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2447896.850393686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2446320.3175852313,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2446254.068241466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1439943.594135772,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1439873.611111118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2370931.576142175,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2370742.1319797086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10269663.09708751,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10269266.990291215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5747756.490797566,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5747590.79754601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 47131.912228017405,
            "unit": "ns/iter",
            "extra": "iterations: 17648\ncpu: 47130.64369900273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 199384.01523194322,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 199384.9757673665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158819.37534806118,
            "unit": "ns/iter",
            "extra": "iterations: 5387\ncpu: 158815.63022090265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 159083.79870008965,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 159082.82265552506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 161329.37859695914,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 161324.0361105896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 354986.7507128266,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 354982.11812627164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2921288.1442006957,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2921221.630094044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2429332.677083451,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2429238.281250005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2440960.0052354764,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2440969.1099476577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2430818.2062663445,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2430724.543080943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1451932.9485981103,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1451909.0342679115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2365425.6101265303,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2365360.506329126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2695.8427498784336,
            "unit": "ns/iter",
            "extra": "iterations: 258906\ncpu: 2695.8544800043114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19308.83445871026,
            "unit": "ns/iter",
            "extra": "iterations: 36136\ncpu: 19308.390524684466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15453.171025000116,
            "unit": "ns/iter",
            "extra": "iterations: 45239\ncpu: 15452.70673533892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15560.57215566807,
            "unit": "ns/iter",
            "extra": "iterations: 44993\ncpu: 15559.98488653776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11766.553171469805,
            "unit": "ns/iter",
            "extra": "iterations: 59515\ncpu: 11766.596656305099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 80798.71597974225,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 80799.15956712047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 189666.7502027616,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189665.74749932502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46670.285885328114,
            "unit": "ns/iter",
            "extra": "iterations: 15034\ncpu: 46669.83504057531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46906.204728602665,
            "unit": "ns/iter",
            "extra": "iterations: 15015\ncpu: 46906.46020646036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46780.75621690507,
            "unit": "ns/iter",
            "extra": "iterations: 14919\ncpu: 46779.469133319144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 94688.3054579836,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 94686.21994055565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88498.38986477836,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88496.17085808235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 22744.996982479362,
            "unit": "ns/iter",
            "extra": "iterations: 30820\ncpu: 22745.068137573006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 111513.53302635878,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 111512.24198158245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 88873.73361174618,
            "unit": "ns/iter",
            "extra": "iterations: 7902\ncpu: 88869.21032649859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 89051.71404979975,
            "unit": "ns/iter",
            "extra": "iterations: 7872\ncpu: 89049.83485772228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 90084.72290086228,
            "unit": "ns/iter",
            "extra": "iterations: 7777\ncpu: 90081.25241095497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 164711.10492807764,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 164711.83683093434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 788256.7799096913,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 788259.8194130923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 670060.0507177192,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 670047.2727272752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 664935.148713086,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 664924.6901811153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 669871.1367113077,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 669849.1395793465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 416637.4433849757,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 416639.3325387383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 652964.3597390386,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 652960.2050326152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22663.966413448507,
            "unit": "ns/iter",
            "extra": "iterations: 30935\ncpu: 22663.617262000946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 111131.93268475975,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 111129.68774517522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 88840.04072053565,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 88837.28276037029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 89556.9911674327,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 89557.61648745443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 90454.5908446149,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 90453.13990973507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 162677.5048814443,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 162674.9418874956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 785980.396629223,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 785973.3707865158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 667457.8043893294,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 667454.1030534334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 666023.0486177468,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 666025.9294566289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 667499.0697230229,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 667479.8471824215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 418670.347305388,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 418658.68263473426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 651114.9906890132,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 651088.5474860421 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}