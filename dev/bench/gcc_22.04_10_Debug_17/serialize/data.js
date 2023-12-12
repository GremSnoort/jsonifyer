window.BENCHMARK_DATA = {
  "lastUpdate": 1702409102213,
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409101520,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7870.3285434711715,
            "unit": "ns/iter",
            "extra": "iterations: 92487\ncpu: 7870.213111031822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 92967.17437683434,
            "unit": "ns/iter",
            "extra": "iterations: 9187\ncpu: 92964.70011973442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 179375.87497433778,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 179360.1724491891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 267946.2916280502,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 267934.8470806302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 350155.3001617997,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 350139.6844660194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 434914.03541149694,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 434898.15461346623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 519590.99940370454,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 519551.69946332707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 614333.5079805581,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 614299.8612074945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 563800.8230000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563762.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5745.5631047138195,
            "unit": "ns/iter",
            "extra": "iterations: 121235\ncpu: 5745.320245803608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4710.289744710855,
            "unit": "ns/iter",
            "extra": "iterations: 148655\ncpu: 4710.164474790626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4619.874249515332,
            "unit": "ns/iter",
            "extra": "iterations: 151069\ncpu: 4619.790294501189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4687.719477348829,
            "unit": "ns/iter",
            "extra": "iterations: 149086\ncpu: 4687.648068899825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8404.512089892532,
            "unit": "ns/iter",
            "extra": "iterations: 83210\ncpu: 8404.423747145769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46977.051481357295,
            "unit": "ns/iter",
            "extra": "iterations: 17754\ncpu: 46975.94908189695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 202447.19787280727,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 202445.04764015082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 156513.68795487416,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 156510.8624454149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 154875.66431925437,
            "unit": "ns/iter",
            "extra": "iterations: 5538\ncpu: 154872.4810400867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 155856.14521093463,
            "unit": "ns/iter",
            "extra": "iterations: 5523\ncpu: 155851.7110266162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 352477.8637833283,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 352472.67582861794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2883132.0061919256,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2883070.588235291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2389136.066666599,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2389029.487179492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2342069.4145729053,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2342042.4623115645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2380035.138461468,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2379987.1794871762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1409706.5265553785,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1409691.0470409757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2296364.1439205096,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2296293.300248142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9828351.157407437,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 9828065.740740743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5573600.359281646,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5573482.035928137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11486991.595744412,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11486471.276595738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47489.10616929475,
            "unit": "ns/iter",
            "extra": "iterations: 17425\ncpu: 47488.99856527984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 204393.87077722495,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 204389.1566265063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 159441.19126394016,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 159437.54646840133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 158734.3009762384,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 158728.43986001133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159677.24250884276,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 159676.9030336876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 361936.5727348391,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 361925.8104738175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2906724.826498506,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2906660.567823356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2420308.166233701,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2420205.7142857173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2347674.1363636637,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2347612.87878788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2404876.8682170343,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2404819.8966408297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1433311.573189447,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1433265.1771956852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2326159.5225000065,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2326121.7499999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10107031.305555783,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10106669.444444435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5708685.371951244,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 5708514.024390237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46049.04480832126,
            "unit": "ns/iter",
            "extra": "iterations: 18077\ncpu: 46048.62532499843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 188943.65558247504,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 188939.1103281221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 156417.72379215265,
            "unit": "ns/iter",
            "extra": "iterations: 5485\ncpu: 156414.23883318127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157514.2512829866,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 157508.4127565983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 156456.5041597334,
            "unit": "ns/iter",
            "extra": "iterations: 5409\ncpu: 156454.90848585652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 359120.9456083927,
            "unit": "ns/iter",
            "extra": "iterations: 2482\ncpu: 359113.85979049164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2905572.071651195,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2905373.831775706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2410017.00520845,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2409850.260416661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2360733.8303797487,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2360663.544303803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2404738.4781490276,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2404623.9074550136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1404993.3107088935,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1404890.045248866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2367105.979899475,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2367020.1005025255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2720.3544360732903,
            "unit": "ns/iter",
            "extra": "iterations: 257897\ncpu: 2720.307719748603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19071.65118558377,
            "unit": "ns/iter",
            "extra": "iterations: 36733\ncpu: 19071.148558516932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14886.54955956197,
            "unit": "ns/iter",
            "extra": "iterations: 48588\ncpu: 14886.117971515658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14946.771567305532,
            "unit": "ns/iter",
            "extra": "iterations: 46749\ncpu: 14945.712207747692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11550.079169894545,
            "unit": "ns/iter",
            "extra": "iterations: 60667\ncpu: 11549.75522112511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 80611.75218150193,
            "unit": "ns/iter",
            "extra": "iterations: 8595\ncpu: 80607.67888307203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 183182.63436929052,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 183166.2575084882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45517.07353898326,
            "unit": "ns/iter",
            "extra": "iterations: 15366\ncpu: 45514.336847585895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45052.080331876816,
            "unit": "ns/iter",
            "extra": "iterations: 15548\ncpu: 45052.058142526555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45487.08849154984,
            "unit": "ns/iter",
            "extra": "iterations: 15380\ncpu: 45486.0208062416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 94904.14037705642,
            "unit": "ns/iter",
            "extra": "iterations: 7373\ncpu: 94901.99376102128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 85117.2130709451,
            "unit": "ns/iter",
            "extra": "iterations: 8232\ncpu: 85113.15597667545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21171.23968018334,
            "unit": "ns/iter",
            "extra": "iterations: 33019\ncpu: 21171.222629395248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103052.60200029831,
            "unit": "ns/iter",
            "extra": "iterations: 6799\ncpu: 103051.15458155704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83025.97993827118,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 83015.61016144246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83009.90631628096,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 83002.59250530216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84537.18363127607,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 84534.81697677291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156132.00893654829,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 156121.8722073284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 767795.6035049726,
            "unit": "ns/iter",
            "extra": "iterations: 913\ncpu: 767760.4600219136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 648691.9925719493,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 648646.610956356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 644307.2286750941,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 644234.7549909157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 647690.6284658487,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 647665.0646950009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 408417.2663170136,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 408403.4965034952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 632425.4492753312,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 632425.634057968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21445.16324966883,
            "unit": "ns/iter",
            "extra": "iterations: 32631\ncpu: 21444.19723575741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103371.17366327385,
            "unit": "ns/iter",
            "extra": "iterations: 6789\ncpu: 103365.38518191047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83765.34798709903,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 83762.2267351559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83624.21433683806,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 83624.15314885548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 85105.82571706464,
            "unit": "ns/iter",
            "extra": "iterations: 8228\ncpu: 85103.59747204548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 157733.06182310465,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 157729.5351985575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 765688.7789934194,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 765634.7921225487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 648720.9415584627,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 648714.0074211546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 636491.5018248195,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 636476.6423357642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 647709.0703052816,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 647686.956521742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 406366.1777126181,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 406353.0791788831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 632827.0334236675,
            "unit": "ns/iter",
            "extra": "iterations: 1107\ncpu: 632789.6115627862 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}