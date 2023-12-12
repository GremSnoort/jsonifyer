window.BENCHMARK_DATA = {
  "lastUpdate": 1702388102908,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-10 20.04 Release c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381149094,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 606.4072333755579,
            "unit": "ns/iter",
            "extra": "iterations: 1150279\ncpu: 606.3766268879116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5490.304330000413,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5490.240999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10782.325420149476,
            "unit": "ns/iter",
            "extra": "iterations: 78603\ncpu: 10782.136814116511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16097.967468822835,
            "unit": "ns/iter",
            "extra": "iterations: 52442\ncpu: 16097.627855535637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21272.21051702437,
            "unit": "ns/iter",
            "extra": "iterations: 39650\ncpu: 21271.329129886504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26137.66803625726,
            "unit": "ns/iter",
            "extra": "iterations: 31883\ncpu: 26136.82213091615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31023.12965879124,
            "unit": "ns/iter",
            "extra": "iterations: 26670\ncpu: 31021.409823772014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36532.64979030628,
            "unit": "ns/iter",
            "extra": "iterations: 23129\ncpu: 36530.63253923644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41099.18170962295,
            "unit": "ns/iter",
            "extra": "iterations: 20098\ncpu: 41097.62662951541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 564.0643076641073,
            "unit": "ns/iter",
            "extra": "iterations: 1245046\ncpu: 564.037232359286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 434.6735070220434,
            "unit": "ns/iter",
            "extra": "iterations: 1608932\ncpu: 434.6585188186939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 456.8854647864101,
            "unit": "ns/iter",
            "extra": "iterations: 1543892\ncpu: 456.8852614042949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.1637750583605,
            "unit": "ns/iter",
            "extra": "iterations: 1646258\ncpu: 425.16871596068154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 927.9461910749372,
            "unit": "ns/iter",
            "extra": "iterations: 767605\ncpu: 927.9566964780064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1509.3624002020424,
            "unit": "ns/iter",
            "extra": "iterations: 526189\ncpu: 1509.2890577340088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9929.091429927556,
            "unit": "ns/iter",
            "extra": "iterations: 84305\ncpu: 9928.693434553114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7590.818770012931,
            "unit": "ns/iter",
            "extra": "iterations: 106180\ncpu: 7590.325861744226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10065.627465520118,
            "unit": "ns/iter",
            "extra": "iterations: 80916\ncpu: 10065.098373621993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8542.822243485476,
            "unit": "ns/iter",
            "extra": "iterations: 95102\ncpu: 8542.490168450719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27624.540129568835,
            "unit": "ns/iter",
            "extra": "iterations: 29791\ncpu: 27623.01030512576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 258815.97645306488,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 258804.17287630396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200312.80602159392,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 200303.30958400376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200666.76979572172,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 200657.05760844625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200221.5387614845,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 200211.03211009133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103372.39430125186,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 103367.49822653078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192166.154066553,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 192158.95966497686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5535.460099999909,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5534.937000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25840.904403968256,
            "unit": "ns/iter",
            "extra": "iterations: 32062\ncpu: 25839.67625226118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21000.644130332017,
            "unit": "ns/iter",
            "extra": "iterations: 40113\ncpu: 20999.670929623826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22710.81282885805,
            "unit": "ns/iter",
            "extra": "iterations: 36870\ncpu: 22710.010848928694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21115.597517684837,
            "unit": "ns/iter",
            "extra": "iterations: 39157\ncpu: 21114.710013535296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45028.55584061016,
            "unit": "ns/iter",
            "extra": "iterations: 18320\ncpu: 45026.08624454152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277852.1854557179,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 277836.9323594781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214947.5798381133,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 214937.9200392449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212104.36159842843,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 212101.70565302155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212210.07796280694,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 212206.63770214774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110660.84075385943,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 110656.31166202913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 202612.39224841542,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 202612.37450385233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 826269.5800000153,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 826263.217391303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468658.5740740364,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 468625.1851851837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2387.9002858549156,
            "unit": "ns/iter",
            "extra": "iterations: 337234\ncpu: 2387.8099479886428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9169.863255855507,
            "unit": "ns/iter",
            "extra": "iterations: 88757\ncpu: 9169.1460955192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9191.854856303638,
            "unit": "ns/iter",
            "extra": "iterations: 89842\ncpu: 9191.42383295114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8360.83500081313,
            "unit": "ns/iter",
            "extra": "iterations: 98352\ncpu: 8360.473605010597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7845.035135575783,
            "unit": "ns/iter",
            "extra": "iterations: 104111\ncpu: 7844.980837759691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26734.663169608244,
            "unit": "ns/iter",
            "extra": "iterations: 31455\ncpu: 26734.967413765535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264784.7438262235,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 264764.2665873246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198832.8563499004,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 198817.31793960877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199362.41117541018,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 199352.20391807577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195185.6275898434,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 195180.09441384661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100604.07337049225,
            "unit": "ns/iter",
            "extra": "iterations: 8791\ncpu: 100599.73836878654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189326.7809605979,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 189318.5871203961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 200.08318293616207,
            "unit": "ns/iter",
            "extra": "iterations: 3500177\ncpu: 200.07339628824312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1472.3433888794425,
            "unit": "ns/iter",
            "extra": "iterations: 476122\ncpu: 1472.3694767307434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1134.8032880157862,
            "unit": "ns/iter",
            "extra": "iterations: 618671\ncpu: 1134.7732478166922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1279.3906093924656,
            "unit": "ns/iter",
            "extra": "iterations: 546610\ncpu: 1279.3488959221406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 909.7599777624331,
            "unit": "ns/iter",
            "extra": "iterations: 773470\ncpu: 909.7088445576397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9999.35889588023,
            "unit": "ns/iter",
            "extra": "iterations: 70246\ncpu: 9998.676081200387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11854.86613146256,
            "unit": "ns/iter",
            "extra": "iterations: 59043\ncpu: 11854.653388208515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2879.895177843835,
            "unit": "ns/iter",
            "extra": "iterations: 243107\ncpu: 2879.71757292057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2863.080944309546,
            "unit": "ns/iter",
            "extra": "iterations: 244835\ncpu: 2862.9219678559075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2846.0169486700283,
            "unit": "ns/iter",
            "extra": "iterations: 245742\ncpu: 2845.794776635676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5098.098229109062,
            "unit": "ns/iter",
            "extra": "iterations: 137332\ncpu: 5098.050709230176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5306.973189312063,
            "unit": "ns/iter",
            "extra": "iterations: 131925\ncpu: 5306.705324995243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1872.3010466148771,
            "unit": "ns/iter",
            "extra": "iterations: 372630\ncpu: 1872.2094302659525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9912.407488986482,
            "unit": "ns/iter",
            "extra": "iterations: 70824\ncpu: 9911.551169095099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8045.677675230503,
            "unit": "ns/iter",
            "extra": "iterations: 87114\ncpu: 8045.76531900733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8069.6674931100815,
            "unit": "ns/iter",
            "extra": "iterations: 86717\ncpu: 8069.48810498507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7849.013666607229,
            "unit": "ns/iter",
            "extra": "iterations: 88976\ncpu: 7848.957022118293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18221.37306376099,
            "unit": "ns/iter",
            "extra": "iterations: 38283\ncpu: 18221.218295326755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56384.74860560715,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 56381.876970333295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45854.724115120065,
            "unit": "ns/iter",
            "extra": "iterations: 15115\ncpu: 45855.22990406933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45854.80654544925,
            "unit": "ns/iter",
            "extra": "iterations: 15125\ncpu: 45853.62644628118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45466.91260669341,
            "unit": "ns/iter",
            "extra": "iterations: 15230\ncpu: 45463.729481286755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26471.15659071793,
            "unit": "ns/iter",
            "extra": "iterations: 26598\ncpu: 26471.125648544737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44770.74658795281,
            "unit": "ns/iter",
            "extra": "iterations: 15753\ncpu: 44769.389957468666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2011.219223476604,
            "unit": "ns/iter",
            "extra": "iterations: 349146\ncpu: 2011.2033361401536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9862.874879978455,
            "unit": "ns/iter",
            "extra": "iterations: 70820\ncpu: 9862.742163230678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9240.844491863274,
            "unit": "ns/iter",
            "extra": "iterations: 74980\ncpu: 9240.676180314766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9663.7865207544,
            "unit": "ns/iter",
            "extra": "iterations: 72007\ncpu: 9663.888233088444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9621.143749048602,
            "unit": "ns/iter",
            "extra": "iterations: 72237\ncpu: 9620.91725846849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18095.968957242672,
            "unit": "ns/iter",
            "extra": "iterations: 38753\ncpu: 18094.68944339787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56214.76277577037,
            "unit": "ns/iter",
            "extra": "iterations: 12465\ncpu: 56213.49378259105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45920.972964061395,
            "unit": "ns/iter",
            "extra": "iterations: 15165\ncpu: 45917.856907351976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45726.96908779548,
            "unit": "ns/iter",
            "extra": "iterations: 15172\ncpu: 45723.622462430736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46448.40362242367,
            "unit": "ns/iter",
            "extra": "iterations: 15128\ncpu: 46446.89317821187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27545.597200377528,
            "unit": "ns/iter",
            "extra": "iterations: 25432\ncpu: 27544.50692041503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45268.06148282083,
            "unit": "ns/iter",
            "extra": "iterations: 15484\ncpu: 45268.57401188328 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381149094,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 606.4072333755579,
            "unit": "ns/iter",
            "extra": "iterations: 1150279\ncpu: 606.3766268879116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5490.304330000413,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5490.240999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10782.325420149476,
            "unit": "ns/iter",
            "extra": "iterations: 78603\ncpu: 10782.136814116511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16097.967468822835,
            "unit": "ns/iter",
            "extra": "iterations: 52442\ncpu: 16097.627855535637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21272.21051702437,
            "unit": "ns/iter",
            "extra": "iterations: 39650\ncpu: 21271.329129886504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26137.66803625726,
            "unit": "ns/iter",
            "extra": "iterations: 31883\ncpu: 26136.82213091615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31023.12965879124,
            "unit": "ns/iter",
            "extra": "iterations: 26670\ncpu: 31021.409823772014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36532.64979030628,
            "unit": "ns/iter",
            "extra": "iterations: 23129\ncpu: 36530.63253923644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41099.18170962295,
            "unit": "ns/iter",
            "extra": "iterations: 20098\ncpu: 41097.62662951541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 564.0643076641073,
            "unit": "ns/iter",
            "extra": "iterations: 1245046\ncpu: 564.037232359286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 434.6735070220434,
            "unit": "ns/iter",
            "extra": "iterations: 1608932\ncpu: 434.6585188186939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 456.8854647864101,
            "unit": "ns/iter",
            "extra": "iterations: 1543892\ncpu: 456.8852614042949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.1637750583605,
            "unit": "ns/iter",
            "extra": "iterations: 1646258\ncpu: 425.16871596068154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 927.9461910749372,
            "unit": "ns/iter",
            "extra": "iterations: 767605\ncpu: 927.9566964780064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1509.3624002020424,
            "unit": "ns/iter",
            "extra": "iterations: 526189\ncpu: 1509.2890577340088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9929.091429927556,
            "unit": "ns/iter",
            "extra": "iterations: 84305\ncpu: 9928.693434553114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7590.818770012931,
            "unit": "ns/iter",
            "extra": "iterations: 106180\ncpu: 7590.325861744226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10065.627465520118,
            "unit": "ns/iter",
            "extra": "iterations: 80916\ncpu: 10065.098373621993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8542.822243485476,
            "unit": "ns/iter",
            "extra": "iterations: 95102\ncpu: 8542.490168450719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27624.540129568835,
            "unit": "ns/iter",
            "extra": "iterations: 29791\ncpu: 27623.01030512576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 258815.97645306488,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 258804.17287630396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200312.80602159392,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 200303.30958400376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200666.76979572172,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 200657.05760844625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200221.5387614845,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 200211.03211009133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103372.39430125186,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 103367.49822653078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192166.154066553,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 192158.95966497686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5535.460099999909,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5534.937000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25840.904403968256,
            "unit": "ns/iter",
            "extra": "iterations: 32062\ncpu: 25839.67625226118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21000.644130332017,
            "unit": "ns/iter",
            "extra": "iterations: 40113\ncpu: 20999.670929623826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22710.81282885805,
            "unit": "ns/iter",
            "extra": "iterations: 36870\ncpu: 22710.010848928694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21115.597517684837,
            "unit": "ns/iter",
            "extra": "iterations: 39157\ncpu: 21114.710013535296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45028.55584061016,
            "unit": "ns/iter",
            "extra": "iterations: 18320\ncpu: 45026.08624454152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277852.1854557179,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 277836.9323594781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214947.5798381133,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 214937.9200392449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212104.36159842843,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 212101.70565302155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212210.07796280694,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 212206.63770214774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110660.84075385943,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 110656.31166202913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 202612.39224841542,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 202612.37450385233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 826269.5800000153,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 826263.217391303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468658.5740740364,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 468625.1851851837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2387.9002858549156,
            "unit": "ns/iter",
            "extra": "iterations: 337234\ncpu: 2387.8099479886428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9169.863255855507,
            "unit": "ns/iter",
            "extra": "iterations: 88757\ncpu: 9169.1460955192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9191.854856303638,
            "unit": "ns/iter",
            "extra": "iterations: 89842\ncpu: 9191.42383295114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8360.83500081313,
            "unit": "ns/iter",
            "extra": "iterations: 98352\ncpu: 8360.473605010597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7845.035135575783,
            "unit": "ns/iter",
            "extra": "iterations: 104111\ncpu: 7844.980837759691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26734.663169608244,
            "unit": "ns/iter",
            "extra": "iterations: 31455\ncpu: 26734.967413765535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264784.7438262235,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 264764.2665873246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198832.8563499004,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 198817.31793960877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199362.41117541018,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 199352.20391807577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195185.6275898434,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 195180.09441384661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100604.07337049225,
            "unit": "ns/iter",
            "extra": "iterations: 8791\ncpu: 100599.73836878654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189326.7809605979,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 189318.5871203961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 200.08318293616207,
            "unit": "ns/iter",
            "extra": "iterations: 3500177\ncpu: 200.07339628824312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1472.3433888794425,
            "unit": "ns/iter",
            "extra": "iterations: 476122\ncpu: 1472.3694767307434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1134.8032880157862,
            "unit": "ns/iter",
            "extra": "iterations: 618671\ncpu: 1134.7732478166922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1279.3906093924656,
            "unit": "ns/iter",
            "extra": "iterations: 546610\ncpu: 1279.3488959221406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 909.7599777624331,
            "unit": "ns/iter",
            "extra": "iterations: 773470\ncpu: 909.7088445576397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9999.35889588023,
            "unit": "ns/iter",
            "extra": "iterations: 70246\ncpu: 9998.676081200387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11854.86613146256,
            "unit": "ns/iter",
            "extra": "iterations: 59043\ncpu: 11854.653388208515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2879.895177843835,
            "unit": "ns/iter",
            "extra": "iterations: 243107\ncpu: 2879.71757292057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2863.080944309546,
            "unit": "ns/iter",
            "extra": "iterations: 244835\ncpu: 2862.9219678559075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2846.0169486700283,
            "unit": "ns/iter",
            "extra": "iterations: 245742\ncpu: 2845.794776635676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5098.098229109062,
            "unit": "ns/iter",
            "extra": "iterations: 137332\ncpu: 5098.050709230176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5306.973189312063,
            "unit": "ns/iter",
            "extra": "iterations: 131925\ncpu: 5306.705324995243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1872.3010466148771,
            "unit": "ns/iter",
            "extra": "iterations: 372630\ncpu: 1872.2094302659525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9912.407488986482,
            "unit": "ns/iter",
            "extra": "iterations: 70824\ncpu: 9911.551169095099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8045.677675230503,
            "unit": "ns/iter",
            "extra": "iterations: 87114\ncpu: 8045.76531900733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8069.6674931100815,
            "unit": "ns/iter",
            "extra": "iterations: 86717\ncpu: 8069.48810498507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7849.013666607229,
            "unit": "ns/iter",
            "extra": "iterations: 88976\ncpu: 7848.957022118293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18221.37306376099,
            "unit": "ns/iter",
            "extra": "iterations: 38283\ncpu: 18221.218295326755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56384.74860560715,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 56381.876970333295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45854.724115120065,
            "unit": "ns/iter",
            "extra": "iterations: 15115\ncpu: 45855.22990406933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45854.80654544925,
            "unit": "ns/iter",
            "extra": "iterations: 15125\ncpu: 45853.62644628118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45466.91260669341,
            "unit": "ns/iter",
            "extra": "iterations: 15230\ncpu: 45463.729481286755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26471.15659071793,
            "unit": "ns/iter",
            "extra": "iterations: 26598\ncpu: 26471.125648544737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44770.74658795281,
            "unit": "ns/iter",
            "extra": "iterations: 15753\ncpu: 44769.389957468666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2011.219223476604,
            "unit": "ns/iter",
            "extra": "iterations: 349146\ncpu: 2011.2033361401536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9862.874879978455,
            "unit": "ns/iter",
            "extra": "iterations: 70820\ncpu: 9862.742163230678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9240.844491863274,
            "unit": "ns/iter",
            "extra": "iterations: 74980\ncpu: 9240.676180314766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9663.7865207544,
            "unit": "ns/iter",
            "extra": "iterations: 72007\ncpu: 9663.888233088444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9621.143749048602,
            "unit": "ns/iter",
            "extra": "iterations: 72237\ncpu: 9620.91725846849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18095.968957242672,
            "unit": "ns/iter",
            "extra": "iterations: 38753\ncpu: 18094.68944339787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56214.76277577037,
            "unit": "ns/iter",
            "extra": "iterations: 12465\ncpu: 56213.49378259105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45920.972964061395,
            "unit": "ns/iter",
            "extra": "iterations: 15165\ncpu: 45917.856907351976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45726.96908779548,
            "unit": "ns/iter",
            "extra": "iterations: 15172\ncpu: 45723.622462430736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46448.40362242367,
            "unit": "ns/iter",
            "extra": "iterations: 15128\ncpu: 46446.89317821187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27545.597200377528,
            "unit": "ns/iter",
            "extra": "iterations: 25432\ncpu: 27544.50692041503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45268.06148282083,
            "unit": "ns/iter",
            "extra": "iterations: 15484\ncpu: 45268.57401188328 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381149094,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 606.4072333755579,
            "unit": "ns/iter",
            "extra": "iterations: 1150279\ncpu: 606.3766268879116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5490.304330000413,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5490.240999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10782.325420149476,
            "unit": "ns/iter",
            "extra": "iterations: 78603\ncpu: 10782.136814116511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16097.967468822835,
            "unit": "ns/iter",
            "extra": "iterations: 52442\ncpu: 16097.627855535637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21272.21051702437,
            "unit": "ns/iter",
            "extra": "iterations: 39650\ncpu: 21271.329129886504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26137.66803625726,
            "unit": "ns/iter",
            "extra": "iterations: 31883\ncpu: 26136.82213091615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31023.12965879124,
            "unit": "ns/iter",
            "extra": "iterations: 26670\ncpu: 31021.409823772014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36532.64979030628,
            "unit": "ns/iter",
            "extra": "iterations: 23129\ncpu: 36530.63253923644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41099.18170962295,
            "unit": "ns/iter",
            "extra": "iterations: 20098\ncpu: 41097.62662951541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 564.0643076641073,
            "unit": "ns/iter",
            "extra": "iterations: 1245046\ncpu: 564.037232359286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 434.6735070220434,
            "unit": "ns/iter",
            "extra": "iterations: 1608932\ncpu: 434.6585188186939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 456.8854647864101,
            "unit": "ns/iter",
            "extra": "iterations: 1543892\ncpu: 456.8852614042949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.1637750583605,
            "unit": "ns/iter",
            "extra": "iterations: 1646258\ncpu: 425.16871596068154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 927.9461910749372,
            "unit": "ns/iter",
            "extra": "iterations: 767605\ncpu: 927.9566964780064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1509.3624002020424,
            "unit": "ns/iter",
            "extra": "iterations: 526189\ncpu: 1509.2890577340088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9929.091429927556,
            "unit": "ns/iter",
            "extra": "iterations: 84305\ncpu: 9928.693434553114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7590.818770012931,
            "unit": "ns/iter",
            "extra": "iterations: 106180\ncpu: 7590.325861744226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10065.627465520118,
            "unit": "ns/iter",
            "extra": "iterations: 80916\ncpu: 10065.098373621993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8542.822243485476,
            "unit": "ns/iter",
            "extra": "iterations: 95102\ncpu: 8542.490168450719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27624.540129568835,
            "unit": "ns/iter",
            "extra": "iterations: 29791\ncpu: 27623.01030512576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 258815.97645306488,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 258804.17287630396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200312.80602159392,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 200303.30958400376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200666.76979572172,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 200657.05760844625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200221.5387614845,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 200211.03211009133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103372.39430125186,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 103367.49822653078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192166.154066553,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 192158.95966497686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5535.460099999909,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5534.937000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25840.904403968256,
            "unit": "ns/iter",
            "extra": "iterations: 32062\ncpu: 25839.67625226118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21000.644130332017,
            "unit": "ns/iter",
            "extra": "iterations: 40113\ncpu: 20999.670929623826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22710.81282885805,
            "unit": "ns/iter",
            "extra": "iterations: 36870\ncpu: 22710.010848928694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21115.597517684837,
            "unit": "ns/iter",
            "extra": "iterations: 39157\ncpu: 21114.710013535296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45028.55584061016,
            "unit": "ns/iter",
            "extra": "iterations: 18320\ncpu: 45026.08624454152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277852.1854557179,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 277836.9323594781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214947.5798381133,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 214937.9200392449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212104.36159842843,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 212101.70565302155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212210.07796280694,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 212206.63770214774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110660.84075385943,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 110656.31166202913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 202612.39224841542,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 202612.37450385233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 826269.5800000153,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 826263.217391303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468658.5740740364,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 468625.1851851837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2387.9002858549156,
            "unit": "ns/iter",
            "extra": "iterations: 337234\ncpu: 2387.8099479886428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9169.863255855507,
            "unit": "ns/iter",
            "extra": "iterations: 88757\ncpu: 9169.1460955192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9191.854856303638,
            "unit": "ns/iter",
            "extra": "iterations: 89842\ncpu: 9191.42383295114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8360.83500081313,
            "unit": "ns/iter",
            "extra": "iterations: 98352\ncpu: 8360.473605010597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7845.035135575783,
            "unit": "ns/iter",
            "extra": "iterations: 104111\ncpu: 7844.980837759691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26734.663169608244,
            "unit": "ns/iter",
            "extra": "iterations: 31455\ncpu: 26734.967413765535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264784.7438262235,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 264764.2665873246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198832.8563499004,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 198817.31793960877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199362.41117541018,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 199352.20391807577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195185.6275898434,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 195180.09441384661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100604.07337049225,
            "unit": "ns/iter",
            "extra": "iterations: 8791\ncpu: 100599.73836878654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189326.7809605979,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 189318.5871203961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 200.08318293616207,
            "unit": "ns/iter",
            "extra": "iterations: 3500177\ncpu: 200.07339628824312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1472.3433888794425,
            "unit": "ns/iter",
            "extra": "iterations: 476122\ncpu: 1472.3694767307434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1134.8032880157862,
            "unit": "ns/iter",
            "extra": "iterations: 618671\ncpu: 1134.7732478166922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1279.3906093924656,
            "unit": "ns/iter",
            "extra": "iterations: 546610\ncpu: 1279.3488959221406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 909.7599777624331,
            "unit": "ns/iter",
            "extra": "iterations: 773470\ncpu: 909.7088445576397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9999.35889588023,
            "unit": "ns/iter",
            "extra": "iterations: 70246\ncpu: 9998.676081200387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11854.86613146256,
            "unit": "ns/iter",
            "extra": "iterations: 59043\ncpu: 11854.653388208515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2879.895177843835,
            "unit": "ns/iter",
            "extra": "iterations: 243107\ncpu: 2879.71757292057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2863.080944309546,
            "unit": "ns/iter",
            "extra": "iterations: 244835\ncpu: 2862.9219678559075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2846.0169486700283,
            "unit": "ns/iter",
            "extra": "iterations: 245742\ncpu: 2845.794776635676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5098.098229109062,
            "unit": "ns/iter",
            "extra": "iterations: 137332\ncpu: 5098.050709230176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5306.973189312063,
            "unit": "ns/iter",
            "extra": "iterations: 131925\ncpu: 5306.705324995243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1872.3010466148771,
            "unit": "ns/iter",
            "extra": "iterations: 372630\ncpu: 1872.2094302659525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9912.407488986482,
            "unit": "ns/iter",
            "extra": "iterations: 70824\ncpu: 9911.551169095099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8045.677675230503,
            "unit": "ns/iter",
            "extra": "iterations: 87114\ncpu: 8045.76531900733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8069.6674931100815,
            "unit": "ns/iter",
            "extra": "iterations: 86717\ncpu: 8069.48810498507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7849.013666607229,
            "unit": "ns/iter",
            "extra": "iterations: 88976\ncpu: 7848.957022118293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18221.37306376099,
            "unit": "ns/iter",
            "extra": "iterations: 38283\ncpu: 18221.218295326755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56384.74860560715,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 56381.876970333295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45854.724115120065,
            "unit": "ns/iter",
            "extra": "iterations: 15115\ncpu: 45855.22990406933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45854.80654544925,
            "unit": "ns/iter",
            "extra": "iterations: 15125\ncpu: 45853.62644628118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45466.91260669341,
            "unit": "ns/iter",
            "extra": "iterations: 15230\ncpu: 45463.729481286755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26471.15659071793,
            "unit": "ns/iter",
            "extra": "iterations: 26598\ncpu: 26471.125648544737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44770.74658795281,
            "unit": "ns/iter",
            "extra": "iterations: 15753\ncpu: 44769.389957468666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2011.219223476604,
            "unit": "ns/iter",
            "extra": "iterations: 349146\ncpu: 2011.2033361401536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9862.874879978455,
            "unit": "ns/iter",
            "extra": "iterations: 70820\ncpu: 9862.742163230678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9240.844491863274,
            "unit": "ns/iter",
            "extra": "iterations: 74980\ncpu: 9240.676180314766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9663.7865207544,
            "unit": "ns/iter",
            "extra": "iterations: 72007\ncpu: 9663.888233088444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9621.143749048602,
            "unit": "ns/iter",
            "extra": "iterations: 72237\ncpu: 9620.91725846849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18095.968957242672,
            "unit": "ns/iter",
            "extra": "iterations: 38753\ncpu: 18094.68944339787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56214.76277577037,
            "unit": "ns/iter",
            "extra": "iterations: 12465\ncpu: 56213.49378259105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45920.972964061395,
            "unit": "ns/iter",
            "extra": "iterations: 15165\ncpu: 45917.856907351976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45726.96908779548,
            "unit": "ns/iter",
            "extra": "iterations: 15172\ncpu: 45723.622462430736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46448.40362242367,
            "unit": "ns/iter",
            "extra": "iterations: 15128\ncpu: 46446.89317821187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27545.597200377528,
            "unit": "ns/iter",
            "extra": "iterations: 25432\ncpu: 27544.50692041503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45268.06148282083,
            "unit": "ns/iter",
            "extra": "iterations: 15484\ncpu: 45268.57401188328 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381149094,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 606.4072333755579,
            "unit": "ns/iter",
            "extra": "iterations: 1150279\ncpu: 606.3766268879116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5490.304330000413,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5490.240999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10782.325420149476,
            "unit": "ns/iter",
            "extra": "iterations: 78603\ncpu: 10782.136814116511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16097.967468822835,
            "unit": "ns/iter",
            "extra": "iterations: 52442\ncpu: 16097.627855535637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21272.21051702437,
            "unit": "ns/iter",
            "extra": "iterations: 39650\ncpu: 21271.329129886504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26137.66803625726,
            "unit": "ns/iter",
            "extra": "iterations: 31883\ncpu: 26136.82213091615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31023.12965879124,
            "unit": "ns/iter",
            "extra": "iterations: 26670\ncpu: 31021.409823772014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36532.64979030628,
            "unit": "ns/iter",
            "extra": "iterations: 23129\ncpu: 36530.63253923644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41099.18170962295,
            "unit": "ns/iter",
            "extra": "iterations: 20098\ncpu: 41097.62662951541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 564.0643076641073,
            "unit": "ns/iter",
            "extra": "iterations: 1245046\ncpu: 564.037232359286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 434.6735070220434,
            "unit": "ns/iter",
            "extra": "iterations: 1608932\ncpu: 434.6585188186939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 456.8854647864101,
            "unit": "ns/iter",
            "extra": "iterations: 1543892\ncpu: 456.8852614042949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.1637750583605,
            "unit": "ns/iter",
            "extra": "iterations: 1646258\ncpu: 425.16871596068154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 927.9461910749372,
            "unit": "ns/iter",
            "extra": "iterations: 767605\ncpu: 927.9566964780064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1509.3624002020424,
            "unit": "ns/iter",
            "extra": "iterations: 526189\ncpu: 1509.2890577340088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9929.091429927556,
            "unit": "ns/iter",
            "extra": "iterations: 84305\ncpu: 9928.693434553114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7590.818770012931,
            "unit": "ns/iter",
            "extra": "iterations: 106180\ncpu: 7590.325861744226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10065.627465520118,
            "unit": "ns/iter",
            "extra": "iterations: 80916\ncpu: 10065.098373621993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8542.822243485476,
            "unit": "ns/iter",
            "extra": "iterations: 95102\ncpu: 8542.490168450719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27624.540129568835,
            "unit": "ns/iter",
            "extra": "iterations: 29791\ncpu: 27623.01030512576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 258815.97645306488,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 258804.17287630396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200312.80602159392,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 200303.30958400376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200666.76979572172,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 200657.05760844625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200221.5387614845,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 200211.03211009133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103372.39430125186,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 103367.49822653078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192166.154066553,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 192158.95966497686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5535.460099999909,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5534.937000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25840.904403968256,
            "unit": "ns/iter",
            "extra": "iterations: 32062\ncpu: 25839.67625226118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21000.644130332017,
            "unit": "ns/iter",
            "extra": "iterations: 40113\ncpu: 20999.670929623826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22710.81282885805,
            "unit": "ns/iter",
            "extra": "iterations: 36870\ncpu: 22710.010848928694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21115.597517684837,
            "unit": "ns/iter",
            "extra": "iterations: 39157\ncpu: 21114.710013535296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45028.55584061016,
            "unit": "ns/iter",
            "extra": "iterations: 18320\ncpu: 45026.08624454152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277852.1854557179,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 277836.9323594781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 214947.5798381133,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 214937.9200392449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212104.36159842843,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 212101.70565302155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212210.07796280694,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 212206.63770214774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110660.84075385943,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 110656.31166202913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 202612.39224841542,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 202612.37450385233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 826269.5800000153,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 826263.217391303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 468658.5740740364,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 468625.1851851837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2387.9002858549156,
            "unit": "ns/iter",
            "extra": "iterations: 337234\ncpu: 2387.8099479886428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9169.863255855507,
            "unit": "ns/iter",
            "extra": "iterations: 88757\ncpu: 9169.1460955192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9191.854856303638,
            "unit": "ns/iter",
            "extra": "iterations: 89842\ncpu: 9191.42383295114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8360.83500081313,
            "unit": "ns/iter",
            "extra": "iterations: 98352\ncpu: 8360.473605010597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7845.035135575783,
            "unit": "ns/iter",
            "extra": "iterations: 104111\ncpu: 7844.980837759691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26734.663169608244,
            "unit": "ns/iter",
            "extra": "iterations: 31455\ncpu: 26734.967413765535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264784.7438262235,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 264764.2665873246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198832.8563499004,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 198817.31793960877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199362.41117541018,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 199352.20391807577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195185.6275898434,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 195180.09441384661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100604.07337049225,
            "unit": "ns/iter",
            "extra": "iterations: 8791\ncpu: 100599.73836878654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189326.7809605979,
            "unit": "ns/iter",
            "extra": "iterations: 4643\ncpu: 189318.5871203961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 200.08318293616207,
            "unit": "ns/iter",
            "extra": "iterations: 3500177\ncpu: 200.07339628824312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1472.3433888794425,
            "unit": "ns/iter",
            "extra": "iterations: 476122\ncpu: 1472.3694767307434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1134.8032880157862,
            "unit": "ns/iter",
            "extra": "iterations: 618671\ncpu: 1134.7732478166922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1279.3906093924656,
            "unit": "ns/iter",
            "extra": "iterations: 546610\ncpu: 1279.3488959221406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 909.7599777624331,
            "unit": "ns/iter",
            "extra": "iterations: 773470\ncpu: 909.7088445576397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9999.35889588023,
            "unit": "ns/iter",
            "extra": "iterations: 70246\ncpu: 9998.676081200387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11854.86613146256,
            "unit": "ns/iter",
            "extra": "iterations: 59043\ncpu: 11854.653388208515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2879.895177843835,
            "unit": "ns/iter",
            "extra": "iterations: 243107\ncpu: 2879.71757292057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2863.080944309546,
            "unit": "ns/iter",
            "extra": "iterations: 244835\ncpu: 2862.9219678559075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2846.0169486700283,
            "unit": "ns/iter",
            "extra": "iterations: 245742\ncpu: 2845.794776635676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5098.098229109062,
            "unit": "ns/iter",
            "extra": "iterations: 137332\ncpu: 5098.050709230176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5306.973189312063,
            "unit": "ns/iter",
            "extra": "iterations: 131925\ncpu: 5306.705324995243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1872.3010466148771,
            "unit": "ns/iter",
            "extra": "iterations: 372630\ncpu: 1872.2094302659525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9912.407488986482,
            "unit": "ns/iter",
            "extra": "iterations: 70824\ncpu: 9911.551169095099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8045.677675230503,
            "unit": "ns/iter",
            "extra": "iterations: 87114\ncpu: 8045.76531900733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8069.6674931100815,
            "unit": "ns/iter",
            "extra": "iterations: 86717\ncpu: 8069.48810498507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7849.013666607229,
            "unit": "ns/iter",
            "extra": "iterations: 88976\ncpu: 7848.957022118293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18221.37306376099,
            "unit": "ns/iter",
            "extra": "iterations: 38283\ncpu: 18221.218295326755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56384.74860560715,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 56381.876970333295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45854.724115120065,
            "unit": "ns/iter",
            "extra": "iterations: 15115\ncpu: 45855.22990406933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45854.80654544925,
            "unit": "ns/iter",
            "extra": "iterations: 15125\ncpu: 45853.62644628118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45466.91260669341,
            "unit": "ns/iter",
            "extra": "iterations: 15230\ncpu: 45463.729481286755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26471.15659071793,
            "unit": "ns/iter",
            "extra": "iterations: 26598\ncpu: 26471.125648544737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44770.74658795281,
            "unit": "ns/iter",
            "extra": "iterations: 15753\ncpu: 44769.389957468666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2011.219223476604,
            "unit": "ns/iter",
            "extra": "iterations: 349146\ncpu: 2011.2033361401536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9862.874879978455,
            "unit": "ns/iter",
            "extra": "iterations: 70820\ncpu: 9862.742163230678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9240.844491863274,
            "unit": "ns/iter",
            "extra": "iterations: 74980\ncpu: 9240.676180314766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9663.7865207544,
            "unit": "ns/iter",
            "extra": "iterations: 72007\ncpu: 9663.888233088444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9621.143749048602,
            "unit": "ns/iter",
            "extra": "iterations: 72237\ncpu: 9620.91725846849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18095.968957242672,
            "unit": "ns/iter",
            "extra": "iterations: 38753\ncpu: 18094.68944339787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56214.76277577037,
            "unit": "ns/iter",
            "extra": "iterations: 12465\ncpu: 56213.49378259105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45920.972964061395,
            "unit": "ns/iter",
            "extra": "iterations: 15165\ncpu: 45917.856907351976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45726.96908779548,
            "unit": "ns/iter",
            "extra": "iterations: 15172\ncpu: 45723.622462430736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46448.40362242367,
            "unit": "ns/iter",
            "extra": "iterations: 15128\ncpu: 46446.89317821187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27545.597200377528,
            "unit": "ns/iter",
            "extra": "iterations: 25432\ncpu: 27544.50692041503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 45268.06148282083,
            "unit": "ns/iter",
            "extra": "iterations: 15484\ncpu: 45268.57401188328 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382279892,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 616.170570178783,
            "unit": "ns/iter",
            "extra": "iterations: 1125226\ncpu: 616.1524884778703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5881.540060000248,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5881.108999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11400.467567162588,
            "unit": "ns/iter",
            "extra": "iterations: 73367\ncpu: 11400.05179440348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16915.29180849581,
            "unit": "ns/iter",
            "extra": "iterations: 49649\ncpu: 16914.890531531353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22496.040497448143,
            "unit": "ns/iter",
            "extra": "iterations: 37632\ncpu: 22494.8793579932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27919.98956584696,
            "unit": "ns/iter",
            "extra": "iterations: 30381\ncpu: 27918.195582765537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33602.74322765362,
            "unit": "ns/iter",
            "extra": "iterations: 25139\ncpu: 33601.78606945387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38965.82891914633,
            "unit": "ns/iter",
            "extra": "iterations: 21446\ncpu: 38963.96530821599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44544.116347414616,
            "unit": "ns/iter",
            "extra": "iterations: 19055\ncpu: 44542.96510102335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 565.4657311939656,
            "unit": "ns/iter",
            "extra": "iterations: 1250277\ncpu: 565.4495763738754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 440.16262978415506,
            "unit": "ns/iter",
            "extra": "iterations: 1573863\ncpu: 440.1536855495045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 462.7344320270428,
            "unit": "ns/iter",
            "extra": "iterations: 1519016\ncpu: 462.718365046846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 448.7217333449597,
            "unit": "ns/iter",
            "extra": "iterations: 1567651\ncpu: 448.691449818869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 994.1890400157497,
            "unit": "ns/iter",
            "extra": "iterations: 735585\ncpu: 994.1505060598037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1502.1883163866491,
            "unit": "ns/iter",
            "extra": "iterations: 519668\ncpu: 1502.1415596111358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9934.743358863889,
            "unit": "ns/iter",
            "extra": "iterations: 82516\ncpu: 9934.558146298905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7709.003555989766,
            "unit": "ns/iter",
            "extra": "iterations: 104331\ncpu: 7708.847801708012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9659.82577752463,
            "unit": "ns/iter",
            "extra": "iterations: 84306\ncpu: 9659.319621379253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8567.824755665923,
            "unit": "ns/iter",
            "extra": "iterations: 94645\ncpu: 8567.629563104236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27590.540527755442,
            "unit": "ns/iter",
            "extra": "iterations: 29597\ncpu: 27589.44149744909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263782.38606228435,
            "unit": "ns/iter",
            "extra": "iterations: 3243\ncpu: 263772.4946037615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 207041.54633248202,
            "unit": "ns/iter",
            "extra": "iterations: 4349\ncpu: 207036.0542653481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216327.02994575584,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 216319.38222117402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 204192.2028511459,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 204187.89436784264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106851.79357126131,
            "unit": "ns/iter",
            "extra": "iterations: 8182\ncpu: 106850.03666585193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 197255.8780431316,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 197252.8634361239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5388.245649999135,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5388.219999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26448.695449128718,
            "unit": "ns/iter",
            "extra": "iterations: 31906\ncpu: 26448.385883532887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21145.58524257204,
            "unit": "ns/iter",
            "extra": "iterations: 39370\ncpu: 21145.313690627314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22676.943515787294,
            "unit": "ns/iter",
            "extra": "iterations: 36612\ncpu: 22676.52682180715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21533.05191588117,
            "unit": "ns/iter",
            "extra": "iterations: 39564\ncpu: 21532.787382468952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43765.217996192194,
            "unit": "ns/iter",
            "extra": "iterations: 18904\ncpu: 43765.023275497275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277344.17005719326,
            "unit": "ns/iter",
            "extra": "iterations: 3146\ncpu: 277331.7863954227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 213707.30695213587,
            "unit": "ns/iter",
            "extra": "iterations: 4157\ncpu: 213703.824873707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 209915.64273670016,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 209908.38352204213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 208107.9805272048,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 208102.0185229162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110682.51598580176,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 110678.3430601371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 201847.40260952536,
            "unit": "ns/iter",
            "extra": "iterations: 4292\ncpu: 201840.28424976682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 827193.2337097642,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 827164.0312771501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 466066.91581919324,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 466053.6723163826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2384.7309750790914,
            "unit": "ns/iter",
            "extra": "iterations: 338188\ncpu: 2384.7049570061786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8966.011401618032,
            "unit": "ns/iter",
            "extra": "iterations: 90952\ncpu: 8965.96886269683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9468.080026401025,
            "unit": "ns/iter",
            "extra": "iterations: 86359\ncpu: 9467.875959656825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8842.500063350502,
            "unit": "ns/iter",
            "extra": "iterations: 94712\ncpu: 8842.348382464746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8200.818048289391,
            "unit": "ns/iter",
            "extra": "iterations: 99400\ncpu: 8200.545271629735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26365.253435550352,
            "unit": "ns/iter",
            "extra": "iterations: 31436\ncpu: 26365.09734062877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260624.75858979835,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 260621.60143412053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 197292.32516304153,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 197289.72340904092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 195698.87183509863,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 195688.68474120618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194159.73877458868,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 194154.23578854374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99197.38242306125,
            "unit": "ns/iter",
            "extra": "iterations: 8807\ncpu: 99193.56193936695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185596.7371256082,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 185590.26071967266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 197.47355977988522,
            "unit": "ns/iter",
            "extra": "iterations: 3500576\ncpu: 197.46318891519502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1585.6204627773864,
            "unit": "ns/iter",
            "extra": "iterations: 437878\ncpu: 1585.5653857923862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1103.6554896658201,
            "unit": "ns/iter",
            "extra": "iterations: 632370\ncpu: 1103.5936239859561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1191.19045074962,
            "unit": "ns/iter",
            "extra": "iterations: 587732\ncpu: 1191.1447734681785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 913.8718804715169,
            "unit": "ns/iter",
            "extra": "iterations: 771030\ncpu: 913.8329247889161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9143.377055394234,
            "unit": "ns/iter",
            "extra": "iterations: 76506\ncpu: 9143.119493895887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13358.604182171339,
            "unit": "ns/iter",
            "extra": "iterations: 55091\ncpu: 13358.232742190114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2869.733206979006,
            "unit": "ns/iter",
            "extra": "iterations: 241648\ncpu: 2869.6401377209813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2901.3101153151224,
            "unit": "ns/iter",
            "extra": "iterations: 240991\ncpu: 2901.2066840670577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2887.0836266267866,
            "unit": "ns/iter",
            "extra": "iterations: 243499\ncpu: 2886.978591287867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5570.490568587179,
            "unit": "ns/iter",
            "extra": "iterations: 125856\ncpu: 5570.25251080599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5501.064022028458,
            "unit": "ns/iter",
            "extra": "iterations: 127831\ncpu: 5500.7721131806675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1944.2133113662342,
            "unit": "ns/iter",
            "extra": "iterations: 358115\ncpu: 1944.1081775407174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10081.827757659446,
            "unit": "ns/iter",
            "extra": "iterations: 69588\ncpu: 10081.532735529188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8465.602260050111,
            "unit": "ns/iter",
            "extra": "iterations: 82476\ncpu: 8465.275959066841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8766.42678802773,
            "unit": "ns/iter",
            "extra": "iterations: 79543\ncpu: 8766.155412795617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8756.472991938499,
            "unit": "ns/iter",
            "extra": "iterations: 80513\ncpu: 8756.019524797239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18481.18181578983,
            "unit": "ns/iter",
            "extra": "iterations: 38000\ncpu: 18480.381578947614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56411.603791847745,
            "unit": "ns/iter",
            "extra": "iterations: 12395\ncpu: 56408.90681726593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46123.18029322991,
            "unit": "ns/iter",
            "extra": "iterations: 15142\ncpu: 46121.5955620124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45628.54125024994,
            "unit": "ns/iter",
            "extra": "iterations: 15309\ncpu: 45626.38317329629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45219.53701901403,
            "unit": "ns/iter",
            "extra": "iterations: 15411\ncpu: 45218.56466160468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26539.336072715898,
            "unit": "ns/iter",
            "extra": "iterations: 26405\ncpu: 26537.917061162687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44424.459399403386,
            "unit": "ns/iter",
            "extra": "iterations: 15751\ncpu: 44424.24607961456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2250.255145617275,
            "unit": "ns/iter",
            "extra": "iterations: 311673\ncpu: 2250.2077497890455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11031.03164477101,
            "unit": "ns/iter",
            "extra": "iterations: 63486\ncpu: 11030.680780014447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9193.118833011542,
            "unit": "ns/iter",
            "extra": "iterations: 75442\ncpu: 9192.543941040747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9423.269415161732,
            "unit": "ns/iter",
            "extra": "iterations: 74465\ncpu: 9422.950379372807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9210.21047636673,
            "unit": "ns/iter",
            "extra": "iterations: 75866\ncpu: 9209.909577412767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20184.712595705398,
            "unit": "ns/iter",
            "extra": "iterations: 34742\ncpu: 20184.413677969056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56054.29198656174,
            "unit": "ns/iter",
            "extra": "iterations: 12504\ncpu: 56052.60716570622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46937.57795212644,
            "unit": "ns/iter",
            "extra": "iterations: 14913\ncpu: 46936.73305169983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47554.80621261526,
            "unit": "ns/iter",
            "extra": "iterations: 14712\ncpu: 47436.46682979949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46906.75551088954,
            "unit": "ns/iter",
            "extra": "iterations: 14925\ncpu: 46905.212730318526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26882.0748136455,
            "unit": "ns/iter",
            "extra": "iterations: 25891\ncpu: 26880.502877447765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 46335.41920933935,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 46333.87503316572 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388102565,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 610.9493220789808,
            "unit": "ns/iter",
            "extra": "iterations: 1143496\ncpu: 610.9101387324487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5551.956670000209,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5551.601999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10720.199811583063,
            "unit": "ns/iter",
            "extra": "iterations: 78549\ncpu: 10719.130733682163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15967.215792361209,
            "unit": "ns/iter",
            "extra": "iterations: 52861\ncpu: 15966.28327122075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21150.837540271736,
            "unit": "ns/iter",
            "extra": "iterations: 39419\ncpu: 21149.042339988322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26470.799816169754,
            "unit": "ns/iter",
            "extra": "iterations: 31551\ncpu: 26468.321130867484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31661.62604756384,
            "unit": "ns/iter",
            "extra": "iterations: 26490\ncpu: 31659.214798037014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36988.18888446698,
            "unit": "ns/iter",
            "extra": "iterations: 22617\ncpu: 36988.26988548438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41492.82290325581,
            "unit": "ns/iter",
            "extra": "iterations: 20198\ncpu: 41488.959302901196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 570.2931137772894,
            "unit": "ns/iter",
            "extra": "iterations: 1228540\ncpu: 570.2801699578357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 445.7123270557164,
            "unit": "ns/iter",
            "extra": "iterations: 1568858\ncpu: 445.67526187838604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 453.39627546723625,
            "unit": "ns/iter",
            "extra": "iterations: 1541294\ncpu: 453.37112841547395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.62599563386243,
            "unit": "ns/iter",
            "extra": "iterations: 1635767\ncpu: 425.59918374682866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 908.8137347118329,
            "unit": "ns/iter",
            "extra": "iterations: 768651\ncpu: 908.7587214483555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1509.5485019011908,
            "unit": "ns/iter",
            "extra": "iterations: 526000\ncpu: 1509.4460076045618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9233.647908148865,
            "unit": "ns/iter",
            "extra": "iterations: 89275\ncpu: 9233.033884066088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8103.406479103026,
            "unit": "ns/iter",
            "extra": "iterations: 101619\ncpu: 8102.958108227811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9804.753495411447,
            "unit": "ns/iter",
            "extra": "iterations: 83252\ncpu: 9804.602892423014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8896.258846069393,
            "unit": "ns/iter",
            "extra": "iterations: 91340\ncpu: 8895.606525071134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27500.212267632523,
            "unit": "ns/iter",
            "extra": "iterations: 29802\ncpu: 27500.301993154815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 266381.1733699083,
            "unit": "ns/iter",
            "extra": "iterations: 3282\ncpu: 266364.4728823882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 201837.06817657163,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 201830.5523457357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 199813.65080458747,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 199796.59770114932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199492.93825747768,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 199484.58723988142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102582.23039849066,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 102572.36393558246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193503.63906771244,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 193489.12319644805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5362.559919999512,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5362.29200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25660.135617925494,
            "unit": "ns/iter",
            "extra": "iterations: 32245\ncpu: 25658.461777019704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20926.507119469028,
            "unit": "ns/iter",
            "extra": "iterations: 39399\ncpu: 20924.72905403693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 22392.344295209266,
            "unit": "ns/iter",
            "extra": "iterations: 36855\ncpu: 22391.987518654103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21406.695548529897,
            "unit": "ns/iter",
            "extra": "iterations: 38594\ncpu: 21406.06311861948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47293.16757976592,
            "unit": "ns/iter",
            "extra": "iterations: 18618\ncpu: 47292.4266838543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 279107.648218818,
            "unit": "ns/iter",
            "extra": "iterations: 3144\ncpu: 279099.42748091585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 216483.55544531526,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 216484.5447779702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215196.12339584914,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 215191.6584402757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 214562.71797371126,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 214545.39698002933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110405.98174672907,
            "unit": "ns/iter",
            "extra": "iterations: 7889\ncpu: 110401.36899480343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 205480.95795724326,
            "unit": "ns/iter",
            "extra": "iterations: 4210\ncpu: 205469.8337292167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 830478.6657871994,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 830429.9032541735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 467047.7611548175,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 467008.8188976356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2391.4249412377158,
            "unit": "ns/iter",
            "extra": "iterations: 337802\ncpu: 2391.2608569516874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9073.691948567246,
            "unit": "ns/iter",
            "extra": "iterations: 90605\ncpu: 9072.999282600344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 9010.65158784538,
            "unit": "ns/iter",
            "extra": "iterations: 91917\ncpu: 9010.295157587761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8316.532198963247,
            "unit": "ns/iter",
            "extra": "iterations: 98792\ncpu: 8316.014454611684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8206.169372261598,
            "unit": "ns/iter",
            "extra": "iterations: 100902\ncpu: 8205.873025311641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26956.36405176522,
            "unit": "ns/iter",
            "extra": "iterations: 31295\ncpu: 26953.724237098457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265299.76113601757,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 265287.29446935706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199744.2440624195,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 199730.49083917562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197245.83505852328,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 197237.12871287265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 195829.3287243318,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 195815.65566458445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99845.9448729652,
            "unit": "ns/iter",
            "extra": "iterations: 8816\ncpu: 99842.45689655136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 190693.34437230264,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 190676.4935064925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 195.1222899490856,
            "unit": "ns/iter",
            "extra": "iterations: 3584988\ncpu: 195.11811476077395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1442.5604676120124,
            "unit": "ns/iter",
            "extra": "iterations: 465001\ncpu: 1442.533456917301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1192.2227736335478,
            "unit": "ns/iter",
            "extra": "iterations: 616801\ncpu: 1192.185810334294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1246.8138386678047,
            "unit": "ns/iter",
            "extra": "iterations: 560632\ncpu: 1246.7961158121489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 897.8884538487434,
            "unit": "ns/iter",
            "extra": "iterations: 780771\ncpu: 897.8377782986346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 8984.035842155128,
            "unit": "ns/iter",
            "extra": "iterations: 77367\ncpu: 8983.866506391629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12862.203425261236,
            "unit": "ns/iter",
            "extra": "iterations: 54536\ncpu: 12861.959072905891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2952.805101976303,
            "unit": "ns/iter",
            "extra": "iterations: 237555\ncpu: 2952.7402075308805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2928.9618954447487,
            "unit": "ns/iter",
            "extra": "iterations: 239184\ncpu: 2928.8719145093132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2919.192836066895,
            "unit": "ns/iter",
            "extra": "iterations: 240287\ncpu: 2919.1321211717786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5289.87561498825,
            "unit": "ns/iter",
            "extra": "iterations: 131913\ncpu: 5289.666674247438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5496.164776664416,
            "unit": "ns/iter",
            "extra": "iterations: 126984\ncpu: 5496.050683550676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1859.858886460808,
            "unit": "ns/iter",
            "extra": "iterations: 378936\ncpu: 1859.872379504714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9823.049300001407,
            "unit": "ns/iter",
            "extra": "iterations: 71643\ncpu: 9822.781011403744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7977.585231321332,
            "unit": "ns/iter",
            "extra": "iterations: 87022\ncpu: 7977.464319367419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8118.418841501662,
            "unit": "ns/iter",
            "extra": "iterations: 86405\ncpu: 8118.1077483942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7856.300498261567,
            "unit": "ns/iter",
            "extra": "iterations: 88909\ncpu: 7856.128176000206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17992.931611768516,
            "unit": "ns/iter",
            "extra": "iterations: 38647\ncpu: 17992.780810929813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56572.7047749842,
            "unit": "ns/iter",
            "extra": "iterations: 12377\ncpu: 56567.108346126464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 46368.525716554934,
            "unit": "ns/iter",
            "extra": "iterations: 15107\ncpu: 46365.98927649441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45888.42819638137,
            "unit": "ns/iter",
            "extra": "iterations: 15236\ncpu: 45885.80336046191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45819.02170937003,
            "unit": "ns/iter",
            "extra": "iterations: 15339\ncpu: 45813.742747245524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26372.606155001013,
            "unit": "ns/iter",
            "extra": "iterations: 26645\ncpu: 26370.816288234044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44546.749315856905,
            "unit": "ns/iter",
            "extra": "iterations: 15713\ncpu: 44544.65092598415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2188.6490715252953,
            "unit": "ns/iter",
            "extra": "iterations: 322949\ncpu: 2188.658271120192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11453.691263949631,
            "unit": "ns/iter",
            "extra": "iterations: 61023\ncpu: 11452.571981056255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9775.630511091866,
            "unit": "ns/iter",
            "extra": "iterations: 71220\ncpu: 9774.851165402968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8934.3688834561,
            "unit": "ns/iter",
            "extra": "iterations: 78537\ncpu: 8933.815908425382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9800.433075458004,
            "unit": "ns/iter",
            "extra": "iterations: 71999\ncpu: 9799.647217322332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18063.452138279805,
            "unit": "ns/iter",
            "extra": "iterations: 38559\ncpu: 18063.518244767478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57290.545365376136,
            "unit": "ns/iter",
            "extra": "iterations: 12234\ncpu: 57287.33039071419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 46589.89196547149,
            "unit": "ns/iter",
            "extra": "iterations: 15060\ncpu: 46588.77158034581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45779.29387086088,
            "unit": "ns/iter",
            "extra": "iterations: 15255\ncpu: 45775.398230088285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46818.077680310715,
            "unit": "ns/iter",
            "extra": "iterations: 14933\ncpu: 46815.81062077279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27935.474423070744,
            "unit": "ns/iter",
            "extra": "iterations: 25003\ncpu: 27934.143902731797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47117.190747573855,
            "unit": "ns/iter",
            "extra": "iterations: 14915\ncpu: 47113.892054978256 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}