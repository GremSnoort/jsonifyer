window.BENCHMARK_DATA = {
  "lastUpdate": 1702381154116,
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
      }
    ]
  }
}