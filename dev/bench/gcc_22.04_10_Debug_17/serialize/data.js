window.BENCHMARK_DATA = {
  "lastUpdate": 1702421914015,
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412518028,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6584.525987956363,
            "unit": "ns/iter",
            "extra": "iterations: 106280\ncpu: 6584.524840045164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65216.814600677775,
            "unit": "ns/iter",
            "extra": "iterations: 12972\ncpu: 65215.872648781995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 125511.41141957392,
            "unit": "ns/iter",
            "extra": "iterations: 6988\ncpu: 125511.66285060097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 187614.99040511722,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 187612.9637526653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 244738.397045511,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 244738.37805245718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 301680.88036594365,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 301672.87121745246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 361027.63481513725,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 361024.5118404655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 419796.4559036161,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 419796.6746987948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 478864.1317956888,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 478860.0219659527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4938.620613386071,
            "unit": "ns/iter",
            "extra": "iterations: 141966\ncpu: 4938.616288407094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4167.804586937223,
            "unit": "ns/iter",
            "extra": "iterations: 167650\ncpu: 4167.766179540713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4142.154791374199,
            "unit": "ns/iter",
            "extra": "iterations: 168052\ncpu: 4142.118510937096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4198.911148697154,
            "unit": "ns/iter",
            "extra": "iterations: 166728\ncpu: 4198.950386257857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7340.537261789635,
            "unit": "ns/iter",
            "extra": "iterations: 95084\ncpu: 7340.343275419629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29426.796283059743,
            "unit": "ns/iter",
            "extra": "iterations: 27980\ncpu: 29426.37598284487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123786.19504108778,
            "unit": "ns/iter",
            "extra": "iterations: 6937\ncpu: 123777.49747729574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98731.61671469537,
            "unit": "ns/iter",
            "extra": "iterations: 8675\ncpu: 98725.56772334292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97621.78917867303,
            "unit": "ns/iter",
            "extra": "iterations: 8742\ncpu: 97618.35964310243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98683.32547387695,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 98681.80767452631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 239944.28728069505,
            "unit": "ns/iter",
            "extra": "iterations: 3648\ncpu: 239925.27412280682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1978663.517021363,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1978572.3404255272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1627692.7460595868,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1627563.9229422046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1593337.5738831614,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1593237.1134020635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1624377.590192639,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1624240.4553415028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 979674.3277311438,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 979647.7941176489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1573726.1411564632,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1573678.231292517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6674656.889999824,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6674618.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3840225.47773278,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3839879.35222672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8117254.360294038,
            "unit": "ns/iter",
            "extra": "iterations: 136\ncpu: 8117244.117647073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29044.449427918556,
            "unit": "ns/iter",
            "extra": "iterations: 28405\ncpu: 29043.524027459993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 124414.5435256541,
            "unit": "ns/iter",
            "extra": "iterations: 6881\ncpu: 124414.57636971347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100022.50537509061,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 100020.6356625386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98551.33083659605,
            "unit": "ns/iter",
            "extra": "iterations: 8678\ncpu: 98552.36229545978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100695.13589591728,
            "unit": "ns/iter",
            "extra": "iterations: 8455\ncpu: 100692.79716144293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 240977.42475192246,
            "unit": "ns/iter",
            "extra": "iterations: 3628\ncpu: 240980.23704520348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1998267.1293103863,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1998239.6551724023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1639565.358657296,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1639560.7773851524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1609382.563039722,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1609345.7685664913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1633151.1832460626,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1633151.4834205953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 972610.1740506418,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 972577.8481012646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1586155.3775509887,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1586155.10204081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6686205.91999968,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6685709.00000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3607867.2015503873,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3607665.1162790656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30074.36041023297,
            "unit": "ns/iter",
            "extra": "iterations: 28179\ncpu: 30072.408531175737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121996.28656716664,
            "unit": "ns/iter",
            "extra": "iterations: 7035\ncpu: 121996.16204690855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98235.16446537388,
            "unit": "ns/iter",
            "extra": "iterations: 8707\ncpu: 98232.50258412777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97932.64020677419,
            "unit": "ns/iter",
            "extra": "iterations: 8705\ncpu: 97932.75129236026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98938.93693589102,
            "unit": "ns/iter",
            "extra": "iterations: 8642\ncpu: 98937.85003471414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 240990.6823334377,
            "unit": "ns/iter",
            "extra": "iterations: 3617\ncpu: 240990.65523914856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1966381.0021186632,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1966341.1016949224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1629321.0437063002,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1629321.3286713276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1590261.0545144759,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1590239.1822828015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1619305.3951472912,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1619283.7088388212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 967952.3564767254,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 967944.352331604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1569178.1414140873,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1569167.0033670086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2629.0688006783107,
            "unit": "ns/iter",
            "extra": "iterations: 266509\ncpu: 2629.0703128224777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14239.658859677784,
            "unit": "ns/iter",
            "extra": "iterations: 49144\ncpu: 14239.652856910416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10887.129460051678,
            "unit": "ns/iter",
            "extra": "iterations: 64321\ncpu: 10886.83167239312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10582.30318931807,
            "unit": "ns/iter",
            "extra": "iterations: 66127\ncpu: 10582.436826107281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9003.684835742833,
            "unit": "ns/iter",
            "extra": "iterations: 77531\ncpu: 9003.68110820197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55338.685397705696,
            "unit": "ns/iter",
            "extra": "iterations: 12635\ncpu: 55338.48041155546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 126976.74256707178,
            "unit": "ns/iter",
            "extra": "iterations: 5516\ncpu: 126976.5953589558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32660.03797468206,
            "unit": "ns/iter",
            "extra": "iterations: 21409\ncpu: 32659.979447895563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32081.782926157444,
            "unit": "ns/iter",
            "extra": "iterations: 21776\ncpu: 32081.135194709736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32617.443012652813,
            "unit": "ns/iter",
            "extra": "iterations: 21496\ncpu: 32617.449758094546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 63702.91317011203,
            "unit": "ns/iter",
            "extra": "iterations: 10987\ncpu: 63702.0114680987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58993.47049401356,
            "unit": "ns/iter",
            "extra": "iterations: 11862\ncpu: 58991.797336030926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16588.243218271957,
            "unit": "ns/iter",
            "extra": "iterations: 42209\ncpu: 16588.45743798717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 80493.20431472486,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 80493.38947854185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65083.91320089563,
            "unit": "ns/iter",
            "extra": "iterations: 10772\ncpu: 65083.62421091717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 63799.56416795898,
            "unit": "ns/iter",
            "extra": "iterations: 10979\ncpu: 63799.31687767553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 65100.71443193236,
            "unit": "ns/iter",
            "extra": "iterations: 10747\ncpu: 65099.06020284782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 125710.89373882095,
            "unit": "ns/iter",
            "extra": "iterations: 5590\ncpu: 125712.02146690607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 544665.5590061775,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 544659.2391304299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 462793.3757415925,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 462798.54976927827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 452730.3132686191,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 452690.55016181205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 462714.10912695306,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 462702.64550265047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 300182.4755784055,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 300188.131962298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 452074.0070967672,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 452064.322580646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17027.77273059198,
            "unit": "ns/iter",
            "extra": "iterations: 41079\ncpu: 17026.26889651663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 82829.06823836316,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 82828.4089562848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66130.54214687241,
            "unit": "ns/iter",
            "extra": "iterations: 10499\ncpu: 66123.9451376324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 65173.753215284574,
            "unit": "ns/iter",
            "extra": "iterations: 10730\ncpu: 65170.885368126845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66906.57306590556,
            "unit": "ns/iter",
            "extra": "iterations: 10470\ncpu: 66900.73543457406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 125395.7774995546,
            "unit": "ns/iter",
            "extra": "iterations: 5591\ncpu: 125395.85047397367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 545921.8597038408,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 545927.1239282907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 462277.21376570174,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 462281.20450032974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 452141.4703225996,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 452108.25806452153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 461538.2790237359,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 461522.427440635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 302082.78559102275,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 302063.41673857195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 451595.88429218606,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 451571.8164188734 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702416024006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6673.4732625925235,
            "unit": "ns/iter",
            "extra": "iterations: 104984\ncpu: 6673.41023394041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64157.419831226034,
            "unit": "ns/iter",
            "extra": "iterations: 13272\ncpu: 64156.02019288727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 123233.51162790654,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 123230.04933051443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 181443.82081769104,
            "unit": "ns/iter",
            "extra": "iterations: 4794\ncpu: 181439.3199833125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 240280.30747688678,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 240279.36152338277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 294619.3556771512,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 294605.57455540384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 362137.70514378225,
            "unit": "ns/iter",
            "extra": "iterations: 2469\ncpu: 362119.1980558929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 409268.51983002824,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 409264.73087818664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 466002.52064342867,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 465996.35388739966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4902.117197898389,
            "unit": "ns/iter",
            "extra": "iterations: 142750\ncpu: 4901.972679509637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4120.7057057057455,
            "unit": "ns/iter",
            "extra": "iterations: 169830\ncpu: 4120.58411352529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4082.2026656077383,
            "unit": "ns/iter",
            "extra": "iterations: 171218\ncpu: 4082.0772348701676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4160.129980754403,
            "unit": "ns/iter",
            "extra": "iterations: 168348\ncpu: 4160.098130063915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7356.382195322044,
            "unit": "ns/iter",
            "extra": "iterations: 95166\ncpu: 7356.199693167728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29383.235496469835,
            "unit": "ns/iter",
            "extra": "iterations: 27907\ncpu: 29382.040348299663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 121755.17471591361,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 121751.6761363633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98411.22811113606,
            "unit": "ns/iter",
            "extra": "iterations: 8566\ncpu: 98411.59234181659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102033.32032761442,
            "unit": "ns/iter",
            "extra": "iterations: 8791\ncpu: 102030.33784552418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98672.25497224856,
            "unit": "ns/iter",
            "extra": "iterations: 8648\ncpu: 98671.05689176658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 239269.75556776533,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 239263.26642837483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1949738.7100840523,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1949680.46218488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1631887.212543656,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1631706.0975609776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1573007.629251699,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1572964.9659863913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1619713.0436299127,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1619658.9877835934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 961459.0182991378,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 961404.9515608173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1558846.4890754973,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1558806.8907563025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6628312.610000649,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6627973.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3638748.4534882843,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3638564.3410852766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7913254.647481729,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7912888.489208621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29921.37455125596,
            "unit": "ns/iter",
            "extra": "iterations: 27577\ncpu: 29920.002175726222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 124573.87559601298,
            "unit": "ns/iter",
            "extra": "iterations: 6921\ncpu: 124564.4704522461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100526.3050111487,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 100522.77901654766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99579.19235683265,
            "unit": "ns/iter",
            "extra": "iterations: 8609\ncpu: 99575.20037170353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100574.08381333305,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 100571.02386270114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 240973.62682857979,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 240956.38973226605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1981150.9638296887,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1981075.9574468005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1620187.0818815401,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1620097.0383275286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1592011.505982928,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1591945.2991453027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1627957.5313588548,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1627883.101045291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 956426.8181817029,
            "unit": "ns/iter",
            "extra": "iterations: 946\ncpu: 956399.5771670158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1565955.5243697285,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565863.6974789994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6590152.139999646,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6589694.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3744851.8964141607,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3744599.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28842.357804259518,
            "unit": "ns/iter",
            "extra": "iterations: 28619\ncpu: 28841.489919284213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121684.2147612964,
            "unit": "ns/iter",
            "extra": "iterations: 7059\ncpu: 121678.46720498586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98514.2265301493,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 98510.29682466625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97673.7618451085,
            "unit": "ns/iter",
            "extra": "iterations: 8780\ncpu: 97668.99772209553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 98061.18660838202,
            "unit": "ns/iter",
            "extra": "iterations: 8692\ncpu: 98058.14542107696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 240630.2903047121,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 240618.91966759102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1944174.8100207157,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1944090.6054279672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1609744.0722892073,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1609662.3063683298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1574798.9190557152,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1574737.7740303515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1613647.4169551372,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1613535.9861591726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 949606.0836734066,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 949587.4489795896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1548963.3344426565,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1548911.980033275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2636.261551174051,
            "unit": "ns/iter",
            "extra": "iterations: 263826\ncpu: 2636.240552485346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14150.956702614043,
            "unit": "ns/iter",
            "extra": "iterations: 49518\ncpu: 14150.686619007114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11213.504568658424,
            "unit": "ns/iter",
            "extra": "iterations: 62491\ncpu: 11213.240306604199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11130.852805667655,
            "unit": "ns/iter",
            "extra": "iterations: 62944\ncpu: 11130.299949161217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9001.124166634423,
            "unit": "ns/iter",
            "extra": "iterations: 77847\ncpu: 9000.777165465643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55208.057399670804,
            "unit": "ns/iter",
            "extra": "iterations: 12683\ncpu: 55205.88188914305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 119839.18493151406,
            "unit": "ns/iter",
            "extra": "iterations: 5840\ncpu: 119838.047945205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32195.213816243584,
            "unit": "ns/iter",
            "extra": "iterations: 21757\ncpu: 32195.3532196536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31774.90301078817,
            "unit": "ns/iter",
            "extra": "iterations: 22054\ncpu: 31774.62591820091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32058.441181870017,
            "unit": "ns/iter",
            "extra": "iterations: 21796\ncpu: 32057.07928060188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65480.71484557279,
            "unit": "ns/iter",
            "extra": "iterations: 10717\ncpu: 65479.518521974904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58264.71231396135,
            "unit": "ns/iter",
            "extra": "iterations: 12027\ncpu: 58261.070923755105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16318.894658339925,
            "unit": "ns/iter",
            "extra": "iterations: 42908\ncpu: 16317.901090705782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 79308.86844192058,
            "unit": "ns/iter",
            "extra": "iterations: 8825\ncpu: 79306.13031161428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 64161.00395074706,
            "unit": "ns/iter",
            "extra": "iterations: 10884\ncpu: 64161.163175303824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 62936.46034172486,
            "unit": "ns/iter",
            "extra": "iterations: 11120\ncpu: 62935.33273381278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 64391.944238946344,
            "unit": "ns/iter",
            "extra": "iterations: 10814\ncpu: 64389.49509894599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 125723.24834021542,
            "unit": "ns/iter",
            "extra": "iterations: 5573\ncpu: 125718.48196662488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 537168.2021522366,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 537135.7417371316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 463338.8690242529,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 463317.0923379133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 446419.1607142883,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 446401.33928571054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 453442.0887305295,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 453438.6658031141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 293431.7059563853,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 293432.7181208107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 443832.5057179745,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 443828.2719186756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16794.48875784904,
            "unit": "ns/iter",
            "extra": "iterations: 41718\ncpu: 16794.36214583632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 82031.04049624773,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 82026.98970037421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65605.93692091352,
            "unit": "ns/iter",
            "extra": "iterations: 10685\ncpu: 65603.73420683097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 64369.43327508512,
            "unit": "ns/iter",
            "extra": "iterations: 10873\ncpu: 64365.50170146253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 66363.7738005299,
            "unit": "ns/iter",
            "extra": "iterations: 10588\ncpu: 66362.7313940313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 125960.26907629127,
            "unit": "ns/iter",
            "extra": "iterations: 5478\ncpu: 125958.21467688832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 537318.9416730234,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 537287.9508825795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 455449.3897202056,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 455446.1288223787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 444701.9663706096,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 444692.7030456846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 453196.7525973745,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 453178.37662337144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 294907.65654006327,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 294901.5611814338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 443023.6378653674,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 443013.0876747144 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418377527,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6542.747055619037,
            "unit": "ns/iter",
            "extra": "iterations: 106474\ncpu: 6542.153953077746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 63757.54258982199,
            "unit": "ns/iter",
            "extra": "iterations: 13360\ncpu: 63755.696107784424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 122400.83319350898,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 122397.8048098434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 180940.1921878209,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 180938.04280074796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 239543.0301688392,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 239538.11237199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 294975.672360779,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 294950.6320464641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 352259.5568135894,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 352235.70562070346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 408836.66901737865,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 408812.317818524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 466510.70802139427,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 466503.5828877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4926.0416405914575,
            "unit": "ns/iter",
            "extra": "iterations: 142217\ncpu: 4925.620003234498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4131.504305689054,
            "unit": "ns/iter",
            "extra": "iterations: 169427\ncpu: 4131.204589587256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4131.550383296506,
            "unit": "ns/iter",
            "extra": "iterations: 169451\ncpu: 4131.304034794722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4186.397700723796,
            "unit": "ns/iter",
            "extra": "iterations: 167357\ncpu: 4186.182830715181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7475.533566455952,
            "unit": "ns/iter",
            "extra": "iterations: 93799\ncpu: 7475.079691681148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30382.717994230847,
            "unit": "ns/iter",
            "extra": "iterations: 27042\ncpu: 30380.271429627923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 127651.53644358428,
            "unit": "ns/iter",
            "extra": "iterations: 6709\ncpu: 127648.33805336127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 102510.26300059946,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 102504.98505678415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100544.49882269603,
            "unit": "ns/iter",
            "extra": "iterations: 8494\ncpu: 100538.42712502954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102251.95458348203,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 102244.75917294143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 245237.91837307136,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 245221.20617110725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1930536.9896265422,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1930369.7095435632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1602463.2996574694,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1602421.2328767134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1573747.7741934995,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1573669.949066216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1606067.7551724345,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1606051.3793103457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 957091.9711340603,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 957042.6804123723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1552725.3467336146,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1552600.5025125637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6595102.710000447,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6594593.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3676551.9881890314,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3676479.527559059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7950206.956204543,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 7949827.737226288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31959.17594732107,
            "unit": "ns/iter",
            "extra": "iterations: 25968\ncpu: 31959.161275415838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 126980.07410687847,
            "unit": "ns/iter",
            "extra": "iterations: 6774\ncpu: 126974.50546206083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 103035.29445575358,
            "unit": "ns/iter",
            "extra": "iterations: 8351\ncpu: 103035.57657765469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101897.19584569619,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 101890.30267062304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103245.64681724465,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 103244.48604903943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 246399.90552735698,
            "unit": "ns/iter",
            "extra": "iterations: 3546\ncpu: 246388.21206993746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1952614.5115303237,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1952582.180293507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1603648.0637930888,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1603606.551724137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1591488.3651877372,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1591459.3856655317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1604973.9862543233,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1604958.9347079068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 963295.5447991695,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 963277.7548918637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1559902.9631491008,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1559902.345058627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6595485.060000215,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6595200.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3622044.463035077,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3621968.0933852145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 29954.714207947818,
            "unit": "ns/iter",
            "extra": "iterations: 27555\ncpu: 29953.500272182853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 125693.30790670394,
            "unit": "ns/iter",
            "extra": "iterations: 6817\ncpu: 125693.1934868711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 101081.33104995958,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 101079.43781740911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 100692.92618237303,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 100692.07839455544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101900.64906647583,
            "unit": "ns/iter",
            "extra": "iterations: 8409\ncpu: 101900.77298132992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 243325.60665362232,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 243325.1887056194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1942327.9729167575,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1942245.6249999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1601239.8241379098,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1601228.9655172406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1577467.264406797,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1577417.1186440669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1598944.0568965806,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1598945.6896551712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 956961.2731005951,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 956915.1950718723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1554477.4431437973,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1554477.4247491648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2665.6328972305078,
            "unit": "ns/iter",
            "extra": "iterations: 262782\ncpu: 2665.5459658576265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14600.844298382875,
            "unit": "ns/iter",
            "extra": "iterations: 47925\ncpu: 14600.849243609831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11211.288913846969,
            "unit": "ns/iter",
            "extra": "iterations: 60544\ncpu: 11211.277748414403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10991.119519848871,
            "unit": "ns/iter",
            "extra": "iterations: 63730\ncpu: 10991.038757257194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9103.169007131683,
            "unit": "ns/iter",
            "extra": "iterations: 76979\ncpu: 9103.165798464534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55720.83444816413,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 55718.87243191588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 125070.76803571644,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 125070.6428571429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32248.321967605945,
            "unit": "ns/iter",
            "extra": "iterations: 21732\ncpu: 32246.939996318964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 31962.4871818258,
            "unit": "ns/iter",
            "extra": "iterations: 21922\ncpu: 31962.48061308283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32364.442578196857,
            "unit": "ns/iter",
            "extra": "iterations: 21612\ncpu: 32362.775310012483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 65779.6577439655,
            "unit": "ns/iter",
            "extra": "iterations: 10647\ncpu: 65779.14905607281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58311.77327188957,
            "unit": "ns/iter",
            "extra": "iterations: 11935\ncpu: 58311.7637201508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16181.10852874507,
            "unit": "ns/iter",
            "extra": "iterations: 43242\ncpu: 16180.962952684953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 77646.63524453517,
            "unit": "ns/iter",
            "extra": "iterations: 9017\ncpu: 77646.57868470615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 63605.184922796354,
            "unit": "ns/iter",
            "extra": "iterations: 11010\ncpu: 63603.251589463754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 62419.10836823929,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 62419.124855182556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 63595.15053177204,
            "unit": "ns/iter",
            "extra": "iterations: 11001\ncpu: 63595.16407599415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 124592.66945531957,
            "unit": "ns/iter",
            "extra": "iterations: 5618\ncpu: 124588.37664649417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 541443.3687064163,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 541443.5321456216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 460200.1187663891,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 460177.42782152037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 448227.4089743517,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 448220.70512820344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 455466.472656263,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 455466.4062500028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 294786.3333333247,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 294775.2006759634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 443221.0456274004,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 443221.2927756603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16520.700796493264,
            "unit": "ns/iter",
            "extra": "iterations: 42436\ncpu: 16520.065510415836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 80467.52249770105,
            "unit": "ns/iter",
            "extra": "iterations: 8712\ncpu: 80467.44719926566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 65179.464665931504,
            "unit": "ns/iter",
            "extra": "iterations: 10896\ncpu: 65179.49706314318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 62922.69373487404,
            "unit": "ns/iter",
            "extra": "iterations: 11157\ncpu: 62920.354934123156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 64656.192293473585,
            "unit": "ns/iter",
            "extra": "iterations: 10822\ncpu: 64656.21881352852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 124320.88646055025,
            "unit": "ns/iter",
            "extra": "iterations: 5628\ncpu: 124315.95593461403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 538994.9105628639,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 538994.911333844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 455634.97983082756,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 455611.97137281194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 445447.01147224737,
            "unit": "ns/iter",
            "extra": "iterations: 1569\ncpu: 445446.9088591435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 454136.08181820123,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 454116.103896099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 295214.5126582399,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 295214.97890295176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 441891.8068181831,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 441872.6010101056 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421913585,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6651.169063044882,
            "unit": "ns/iter",
            "extra": "iterations: 105576\ncpu: 6651.102523300751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 64180.50606859912,
            "unit": "ns/iter",
            "extra": "iterations: 13265\ncpu: 64178.288729739914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 122852.97687534844,
            "unit": "ns/iter",
            "extra": "iterations: 7092\ncpu: 122839.50930626056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 182060.75270382845,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 182041.84692179703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 241525.33184978613,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 241512.35048678718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 294904.6578313084,
            "unit": "ns/iter",
            "extra": "iterations: 2905\ncpu: 294883.4423407918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 352982.51501624926,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 352950.892857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 411309.0075365122,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 411309.0909090908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 467909.3969956941,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 467891.46995708137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5055.503359791313,
            "unit": "ns/iter",
            "extra": "iterations: 137955\ncpu: 5055.3702294226305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4211.586202541538,
            "unit": "ns/iter",
            "extra": "iterations: 166277\ncpu: 4211.4814436151755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4174.11845577416,
            "unit": "ns/iter",
            "extra": "iterations: 167877\ncpu: 4174.023838882043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4236.2221630451795,
            "unit": "ns/iter",
            "extra": "iterations: 165230\ncpu: 4236.146583550203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7422.867709694352,
            "unit": "ns/iter",
            "extra": "iterations: 94149\ncpu: 7422.505815250306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29946.39978810358,
            "unit": "ns/iter",
            "extra": "iterations: 27372\ncpu: 29946.01052170104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 128472.19589020927,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 128472.35638218091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 101871.29938899729,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 101868.77920210852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98960.75588542195,
            "unit": "ns/iter",
            "extra": "iterations: 8623\ncpu: 98958.22799489758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103075.53674508302,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 103074.3026922145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 241431.08498897057,
            "unit": "ns/iter",
            "extra": "iterations: 3624\ncpu: 241428.89072847686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1967343.9957265314,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1967258.1196581174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1618888.6742556875,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1618834.1506129615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1595650.4044750938,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1595630.808950087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1618246.3083623985,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1618225.2613240439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 971535.417801038,
            "unit": "ns/iter",
            "extra": "iterations: 955\ncpu: 971527.7486910993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1572813.5922165755,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1572773.7732656565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6638511.030000132,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6637665.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3690789.0866142064,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3690306.299212591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 7978978.8394157225,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 7978105.10948906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33150.92601221057,
            "unit": "ns/iter",
            "extra": "iterations: 24896\ncpu: 33148.778920308556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135448.97410951878,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 135434.59908991004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 104295.36390137684,
            "unit": "ns/iter",
            "extra": "iterations: 8233\ncpu: 104286.49338029887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 102403.39097387328,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 102399.09738717327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103008.31716686666,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 103008.25930372087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 242244.8215375956,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 242241.3821815147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1985429.0106837589,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1985402.5641025526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1636787.917398895,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1636747.9789103668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1613950.287197278,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1613950.346020763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1624700.8083624188,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1624701.0452961745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 963541.4439833997,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 963530.8091286323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1576559.5709459495,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1576485.3040540582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6630210.409999791,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6629802.999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3723350.217391363,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3723231.2252964433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28651.26134743144,
            "unit": "ns/iter",
            "extra": "iterations: 28751\ncpu: 28650.53737261295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 127284.36209208568,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 127269.06571300933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 100374.91734561685,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 100371.27169677653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 99102.28538309908,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 99093.28851280911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 101408.41793168796,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 101402.76328273227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 242784.99372270363,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 242770.38755458582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1968593.1094737067,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1968434.7368421054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1631099.6928447613,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1630914.3106457223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1598463.5797598509,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1598400.686106341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1609753.7348353404,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1609610.5719237484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 962143.8185566842,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 962048.2474226746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1569138.5521885958,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1569048.653198663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2661.6463628428733,
            "unit": "ns/iter",
            "extra": "iterations: 263530\ncpu: 2661.3596175008424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14539.171562305002,
            "unit": "ns/iter",
            "extra": "iterations: 48070\ncpu: 14538.527147909297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11407.359341355283,
            "unit": "ns/iter",
            "extra": "iterations: 63160\ncpu: 11407.36067131106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10937.600384531574,
            "unit": "ns/iter",
            "extra": "iterations: 63974\ncpu: 10936.5898646325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9194.718943101578,
            "unit": "ns/iter",
            "extra": "iterations: 76223\ncpu: 9193.92702989907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55603.66595901332,
            "unit": "ns/iter",
            "extra": "iterations: 12247\ncpu: 55595.95002857853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127006.43467199367,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 126994.36670906782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 32385.309972173058,
            "unit": "ns/iter",
            "extra": "iterations: 21560\ncpu: 32381.892393321184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 32126.453373698114,
            "unit": "ns/iter",
            "extra": "iterations: 21801\ncpu: 32124.255768084055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 32758.179460821433,
            "unit": "ns/iter",
            "extra": "iterations: 21403\ncpu: 32754.55777227505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 66209.81112166992,
            "unit": "ns/iter",
            "extra": "iterations: 10520\ncpu: 66206.67300380261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 58730.13838799115,
            "unit": "ns/iter",
            "extra": "iterations: 11923\ncpu: 58730.202130335994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 16149.300249342397,
            "unit": "ns/iter",
            "extra": "iterations: 43314\ncpu: 16147.905988826045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 78711.91505617855,
            "unit": "ns/iter",
            "extra": "iterations: 8900\ncpu: 78705.60674157197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 63850.04016064124,
            "unit": "ns/iter",
            "extra": "iterations: 10956\ncpu: 63842.96276013211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 62524.2325332409,
            "unit": "ns/iter",
            "extra": "iterations: 11207\ncpu: 62521.50441688187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 64183.94262970183,
            "unit": "ns/iter",
            "extra": "iterations: 10929\ncpu: 64184.06990575486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 123682.28979880127,
            "unit": "ns/iter",
            "extra": "iterations: 5666\ncpu: 123660.32474408865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 567181.1298904407,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 567127.5430359946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 462117.0891089293,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 462049.8349835005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 453796.0609993556,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 453796.5606748816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 460520.98226019676,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 460513.9947437553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 295120.14388185844,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 295109.49367088673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 450582.1823453605,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 450577.38402062637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 16382.80505686556,
            "unit": "ns/iter",
            "extra": "iterations: 42556\ncpu: 16382.599398439697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 80387.71289286084,
            "unit": "ns/iter",
            "extra": "iterations: 8718\ncpu: 80387.89860059551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 64563.86095518713,
            "unit": "ns/iter",
            "extra": "iterations: 10867\ncpu: 64561.764976535036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 63090.69869310508,
            "unit": "ns/iter",
            "extra": "iterations: 11095\ncpu: 63089.20234339779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 65077.621591435374,
            "unit": "ns/iter",
            "extra": "iterations: 10745\ncpu: 65075.91437878123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 124301.85600000591,
            "unit": "ns/iter",
            "extra": "iterations: 5625\ncpu: 124299.76888888885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 546034.7220921254,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 546024.9024199834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 460606.4641211366,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 460597.3666886132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 449904.92100194766,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 449889.5953757212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 463576.64416775695,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 463577.26081257756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 297848.97746598424,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 297839.6258503452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 450064.71879021317,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 450048.51994851604 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}