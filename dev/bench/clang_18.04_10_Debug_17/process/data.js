window.BENCHMARK_DATA = {
  "lastUpdate": 1705952878584,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-10 18.04 Debug c++-17": [
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
        "date": 1702489538040,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17906.479430583648,
            "unit": "ns/iter",
            "extra": "iterations: 38917\ncpu: 17906.298018860653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144893.0849024367,
            "unit": "ns/iter",
            "extra": "iterations: 5842\ncpu: 144887.43580965424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 273041.0397978401,
            "unit": "ns/iter",
            "extra": "iterations: 3166\ncpu: 273022.52053063805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 397838.965405915,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 397825.50738007406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 524345.6891973605,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 524310.0784550392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 524783.2050000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524789.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 626058.0389999859,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626028.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 725246.4301412938,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 725206.200941915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 824961.0526315623,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 824923.2827832298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14130.592933885997,
            "unit": "ns/iter",
            "extra": "iterations: 49702\ncpu: 14130.063176532118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11769.513601320099,
            "unit": "ns/iter",
            "extra": "iterations: 59406\ncpu: 11769.174830825164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11899.61286723651,
            "unit": "ns/iter",
            "extra": "iterations: 59158\ncpu: 11898.711924000128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11766.300593785978,
            "unit": "ns/iter",
            "extra": "iterations: 59449\ncpu: 11766.310619186193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19910.21038259034,
            "unit": "ns/iter",
            "extra": "iterations: 35155\ncpu: 19909.935997724366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57892.276600000514,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57890.010000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 291033.1184076338,
            "unit": "ns/iter",
            "extra": "iterations: 2939\ncpu: 291021.0275603946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233251.05608493547,
            "unit": "ns/iter",
            "extra": "iterations: 3673\ncpu: 233241.6008712226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231262.08583807567,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 231246.76414838887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224716.04069767916,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 224709.19661733607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 503447.03100000747,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503398.79999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4481650.317307603,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4481398.557692311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3570135.1499999245,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3569956.153846162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3541399.543726146,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3541323.1939163464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3553498.3371646474,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3553279.310344828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2015046.7969432708,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2014986.4628820922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3453051.085820921,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3452859.32835821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12897525.780488195,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12896869.512195153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5702041.06999995,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5701578.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16465856.546874491,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16465345.31249999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60368.79439999438,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60364.42000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 329212.3967766731,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 329199.57789716014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 263132.91311021365,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 263126.8345102859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 262237.7249388704,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 262238.38630806835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252255.06861876443,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 252248.35847382285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 617602.3300071631,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 617595.4383464002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4529216.043902013,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4529112.195121963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3632111.256916892,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3632086.1660078876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3616825.988326927,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3616720.233463031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3638181.8476560744,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3638078.5156250037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2059959.552338355,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2059964.5879732703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3507407.9053028086,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3507354.166666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13147313.787500536,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13146859.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5818354.069999713,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5818118.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53205.76620000566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53206.349999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 302268.3270042003,
            "unit": "ns/iter",
            "extra": "iterations: 2844\ncpu: 302264.9085794659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 227203.35225464962,
            "unit": "ns/iter",
            "extra": "iterations: 3770\ncpu: 227200.106100795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 225290.31075381744,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 225283.89562467003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 219772.46444272477,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 219768.60615464294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 564367.5805195223,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 564352.922077923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4475309.464114791,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4475003.349282288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3590989.1969113303,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3590806.949806955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3552710.6513409205,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3552626.0536398496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3569723.7115383674,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3569469.2307692193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2011726.648589914,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2011676.5726681233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3468728.593283818,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3468568.283582066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6916.149363466734,
            "unit": "ns/iter",
            "extra": "iterations: 101330\ncpu: 6915.940984900852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39233.629915966034,
            "unit": "ns/iter",
            "extra": "iterations: 17850\ncpu: 39231.5910364143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31168.809356357182,
            "unit": "ns/iter",
            "extra": "iterations: 22466\ncpu: 31167.3284073711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27671.147752876084,
            "unit": "ns/iter",
            "extra": "iterations: 25299\ncpu: 27670.251788608315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24123.028913260154,
            "unit": "ns/iter",
            "extra": "iterations: 29087\ncpu: 24122.247051947586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 168782.40139491676,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 168768.75901875892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 303378.35248382384,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 303365.9179265663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76160.51415814295,
            "unit": "ns/iter",
            "extra": "iterations: 9182\ncpu: 76155.73949030762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76111.28949939994,
            "unit": "ns/iter",
            "extra": "iterations: 9209\ncpu: 76107.86187425365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76604.68173875226,
            "unit": "ns/iter",
            "extra": "iterations: 9156\ncpu: 76602.44648318112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151316.19355536392,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 151308.65051903226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 141211.44616936476,
            "unit": "ns/iter",
            "extra": "iterations: 4960\ncpu: 141206.3306451598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46640.39964014466,
            "unit": "ns/iter",
            "extra": "iterations: 15006\ncpu: 46640.996934560164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 228143.52852950455,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 228143.65829801178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 184277.5224940923,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 184275.08550381282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 182892.46402504548,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 182892.93534932137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183091.04206951254,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 183090.59315390728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 341990.3057045309,
            "unit": "ns/iter",
            "extra": "iterations: 2051\ncpu: 341987.42077035445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1287616.068014706,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1287546.6911764713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1068253.7511449815,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1068224.7328244268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1068050.3079268257,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1068042.3780487813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1068615.413740412,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1068595.2671755736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 678700.5528613061,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 678696.7022308417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1050093.8708709362,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1050060.5105105147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46775.300394199345,
            "unit": "ns/iter",
            "extra": "iterations: 14967\ncpu: 46775.43261842719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 232114.86620185396,
            "unit": "ns/iter",
            "extra": "iterations: 3012\ncpu: 232115.20584329157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 185580.03863454546,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 185577.5337390832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 183328.55683602658,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 183322.28915662508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185350.56590788823,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 185345.63260984313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 338779.11998068634,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 338772.47218190803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1275012.005484608,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1274993.2358318137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1070527.9033740968,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1070496.319018418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1060093.8277946,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1060061.0271903288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1060503.2424242229,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1060504.090909077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 677908.2158760681,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 677898.3543078469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1043316.3358209356,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1043292.8358208948 ns\nthreads: 1"
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
        "date": 1702492160756,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17277.887755355412,
            "unit": "ns/iter",
            "extra": "iterations: 40287\ncpu: 17277.637947725074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 139915.35640194805,
            "unit": "ns/iter",
            "extra": "iterations: 6170\ncpu: 139912.75526742302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 260997.93117893345,
            "unit": "ns/iter",
            "extra": "iterations: 3342\ncpu: 260991.41232794733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 384314.4513584678,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 384298.5977212972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 503832.81100478553,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 503812.7392344499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 510449.7990000141,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510429.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 605228.0590000122,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605204.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 691091.2307121814,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 691081.6023738872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 819856.5017270927,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 819828.238341968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13875.562043938658,
            "unit": "ns/iter",
            "extra": "iterations: 51117\ncpu: 13875.018095741138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11581.725478328352,
            "unit": "ns/iter",
            "extra": "iterations: 59478\ncpu: 11581.023235482033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11911.453747352563,
            "unit": "ns/iter",
            "extra": "iterations: 58548\ncpu: 11910.936325749804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11818.688688016426,
            "unit": "ns/iter",
            "extra": "iterations: 58080\ncpu: 11818.353994490364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19906.01582393111,
            "unit": "ns/iter",
            "extra": "iterations: 35895\ncpu: 19905.942331801092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58090.81639999931,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58087.51999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 283624.65019504575,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 283608.22496749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 220309.22971886175,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 220298.58099062892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 223617.56694170457,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 223605.45648123536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219615.2640229609,
            "unit": "ns/iter",
            "extra": "iterations: 3833\ncpu: 219612.83589877366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 633461.2002762115,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 633446.9613259666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4395494.252336316,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4395375.233644857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3479014.3745318884,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3478936.7041198504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3414780.566787168,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3414649.4584837547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3495732.9436090225,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3495626.3157894793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1996921.3384616363,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 1996886.5934065962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3369748.118958936,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3369615.9851301145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12586915.404762337,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12586661.904761918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5423602.450000545,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5423460.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15815918.611940391,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15815716.41791046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58522.94950000215,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58519.88000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 322535.50502795057,
            "unit": "ns/iter",
            "extra": "iterations: 2685\ncpu: 322520.11173184315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 260436.63832337336,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 260278.77245508984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252168.27286444957,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 252157.59130697223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253524.26196245907,
            "unit": "ns/iter",
            "extra": "iterations: 3302\ncpu: 253510.44821320617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 609685.9195483248,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 609653.8461538433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4367186.906102996,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4366964.3192488495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3524450.7840912556,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3524308.3333333456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3462500.996268338,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3462380.2238806128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3548946.8593752347,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3548775.781250013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1973228.9027484728,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1973154.5454545429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3419999.207407424,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3419897.777777797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12565102.76470555,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12564496.47058827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5872056.399999793,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5872041.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53351.43649999736,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53348.0400000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 289254.1155778641,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 289240.50251256203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 220044.21531719677,
            "unit": "ns/iter",
            "extra": "iterations: 3878\ncpu: 220033.13563692753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 217031.38670459873,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 217021.1588204864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 215438.34881989405,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 215428.52173913002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553929.159017475,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 553906.722689076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4320365.193548703,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4320117.050691248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3503094.0116277896,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3502952.7131782873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3424095.7180450573,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3423919.9248120277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3465670.870722526,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3465495.4372623484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1957185.5227272976,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1957120.8677685922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3360751.810218656,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3360624.4525547246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6699.242991878427,
            "unit": "ns/iter",
            "extra": "iterations: 106876\ncpu: 6699.175680227558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37557.00867806234,
            "unit": "ns/iter",
            "extra": "iterations: 18783\ncpu: 37554.53335462915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29835.075940774266,
            "unit": "ns/iter",
            "extra": "iterations: 23571\ncpu: 29834.996393873615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29937.86244882165,
            "unit": "ns/iter",
            "extra": "iterations: 23693\ncpu: 29937.525851517315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23399.465045088375,
            "unit": "ns/iter",
            "extra": "iterations: 30053\ncpu: 23399.37443849213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 166810.62156399028,
            "unit": "ns/iter",
            "extra": "iterations: 4220\ncpu: 166807.2748815175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 295515.64883230795,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 295514.56475583796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74535.50582416749,
            "unit": "ns/iter",
            "extra": "iterations: 9100\ncpu: 74535.23076922972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 73264.43026426101,
            "unit": "ns/iter",
            "extra": "iterations: 9536\ncpu: 73262.32172818745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72670.9926975524,
            "unit": "ns/iter",
            "extra": "iterations: 9175\ncpu: 72666.46321525975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 146675.2177759099,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 146667.52316764716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 136548.9613281312,
            "unit": "ns/iter",
            "extra": "iterations: 5120\ncpu: 136542.89062500215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45873.66844780164,
            "unit": "ns/iter",
            "extra": "iterations: 15346\ncpu: 45870.25935097081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218518.9670542772,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 218516.82816537426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 179252.21313977984,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 179248.96867838266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175785.71749207441,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 175783.53256891842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 179650.99800897096,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 179650.59731209668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 335054.0352609565,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 335046.77950164373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1266994.9821746273,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1266979.50089126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1036810.8496350962,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1036789.7810218947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1021486.5965167353,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1021471.1175616798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1027554.0946563628,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1027538.0152671731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 658216.4995132078,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 658209.7370983562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1016876.155937112,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1016865.2360515066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45017.86058408638,
            "unit": "ns/iter",
            "extra": "iterations: 15443\ncpu: 45017.30233762851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220998.8481642869,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 220998.3820784072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 184553.88439457692,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 184548.14718162862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177669.68637402484,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177667.16569398594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 184555.66968555818,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 184549.23270440206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 342307.0851764779,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 342303.3882352964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1253936.7566605958,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1253906.571936047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1042164.1009035412,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1042151.2048192766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1014727.8273381299,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1014717.6978417273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1019630.4215247079,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1019627.8026905803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 663684.156603709,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 663682.4528301909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1021883.2716764535,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1021859.6820809331 ns\nthreads: 1"
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
        "date": 1702506752337,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17644.7078030026,
            "unit": "ns/iter",
            "extra": "iterations: 40305\ncpu: 17643.02940081876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 138608.48962449483,
            "unit": "ns/iter",
            "extra": "iterations: 6072\ncpu: 138596.52503293805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 261158.25677303717,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 261147.11017459366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 384616.14752649295,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 384597.34982332174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 503324.5281159959,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 503279.6521739127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 503106.25300005544,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503077.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 603206.6510000505,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603208.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 696850.4731670738,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 696804.6107331823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 792139.9218071379,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 792103.6490008683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13860.03768052922,
            "unit": "ns/iter",
            "extra": "iterations: 50477\ncpu: 13859.664797828735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11605.580841602765,
            "unit": "ns/iter",
            "extra": "iterations: 60266\ncpu: 11605.104038761481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11465.985011970442,
            "unit": "ns/iter",
            "extra": "iterations: 60982\ncpu: 11465.484897182776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11674.176256044258,
            "unit": "ns/iter",
            "extra": "iterations: 59771\ncpu: 11673.599237088207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19600.89773778467,
            "unit": "ns/iter",
            "extra": "iterations: 35673\ncpu: 19599.41692596643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58208.843099998834,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58207.67999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293189.3184801407,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 293189.49913644243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 229369.71643796435,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 229366.04788808184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229282.88255847126,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 229268.87933351213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223766.55596328745,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 223751.21887287014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 648922.1617021321,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 648895.6737588651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4337956.344185714,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4337799.069767448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3477810.426966499,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3477573.4082397097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3444717.111110802,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3444521.4814814725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3437179.3653133367,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3437048.3394833934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2010447.5217391136,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2010339.3478260865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3383779.5145985973,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3383657.2992700795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12887544.999999996,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12887062.650602432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5866737.279999371,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5866351.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16226260.861536993,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16225127.692307677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59994.003600002085,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59991.279999999846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 328483.8635842942,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 328467.7493312946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258142.12620482442,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 258135.42168674635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 263574.1014180232,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 263555.98027127096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251944.71513180307,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 251932.04027243116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 610181.1845070014,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 610145.0704225387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4407692.886256214,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4407442.654028412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3555766.034220702,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3555660.456273776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3527704.8598483377,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3527611.36363638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3498185.071428903,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3498000.375939845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2090132.9757869341,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2090021.7917675602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3425848.701106662,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3425723.2472324665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12940355.097560858,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12939773.170731707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5621071.699999902,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5620471.99999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53974.586599997565,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53972.80000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 312483.20080030337,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 312484.2488177515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 232182.7497980209,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 232178.10395906353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226959.33218451892,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 226957.4496288433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 219483.07757515454,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 219480.40071923955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556662.7824967992,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 556664.7361647363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4344846.827102544,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4344749.532710288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3485725.026217289,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3485679.0262172082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3450652.140740776,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3450666.666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3431720.630996553,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3431684.5018450124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1996872.4914164254,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1996784.7639484992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3374234.119565037,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3374127.1739130374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6844.620680540715,
            "unit": "ns/iter",
            "extra": "iterations: 102154\ncpu: 6844.208743661552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38944.05036452013,
            "unit": "ns/iter",
            "extra": "iterations: 17969\ncpu: 38942.43975736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30999.73899190553,
            "unit": "ns/iter",
            "extra": "iterations: 22597\ncpu: 30997.481966632633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31116.695039235205,
            "unit": "ns/iter",
            "extra": "iterations: 22557\ncpu: 31115.498514873343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23803.022488857594,
            "unit": "ns/iter",
            "extra": "iterations: 29170\ncpu: 23801.92663695587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 169481.68601839175,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 169474.02031930405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 294206.2560873007,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 294189.2107472748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74628.49717573744,
            "unit": "ns/iter",
            "extra": "iterations: 9383\ncpu: 74624.39518277696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74615.34756618417,
            "unit": "ns/iter",
            "extra": "iterations: 9368\ncpu: 74611.81682322701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74320.60426389324,
            "unit": "ns/iter",
            "extra": "iterations: 9428\ncpu: 74318.94357233706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 150155.6597519417,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 150153.35757057517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 138086.04508735109,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 138076.2164193118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45783.67787957545,
            "unit": "ns/iter",
            "extra": "iterations: 15280\ncpu: 45783.86125654421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 224649.72282957507,
            "unit": "ns/iter",
            "extra": "iterations: 3110\ncpu: 224642.9903536981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181231.57276264954,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 181228.63813229892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 179371.2666325469,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 179359.74923234378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180069.71900614552,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 180062.16700819685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 336657.91105772334,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 336644.8557692286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1256099.3111510682,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1256018.5251798767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1044738.1626865753,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1044667.3134328518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1029667.7088234674,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1029618.3823529461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1026771.5117303325,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1026766.7155425077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 669737.0028680834,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 669729.2543020982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1020019.7594751694,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1020016.4723032223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45404.824457722745,
            "unit": "ns/iter",
            "extra": "iterations: 15398\ncpu: 45404.15638394541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 226696.69799091437,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 226696.04666234658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182299.02221649254,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 182297.21002325127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178316.78602396286,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 178316.04182606327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180519.4658417246,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 180511.2657901532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 335106.511961744,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 335099.23444976145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1243622.9251337338,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1243622.2816399385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1042377.2831595215,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1042351.2667660179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1025768.2360705015,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1025763.6363636416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1023297.3391812026,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1023262.2807017615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 670381.3279003497,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 670378.3317353803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1016388.0973836347,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1016394.4767441782 ns\nthreads: 1"
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
        "date": 1705574912314,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17779.27647906398,
            "unit": "ns/iter",
            "extra": "iterations: 39569\ncpu: 17778.85465895019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144223.10737452694,
            "unit": "ns/iter",
            "extra": "iterations: 5858\ncpu: 144212.17138955276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 269010.82102625334,
            "unit": "ns/iter",
            "extra": "iterations: 3196\ncpu: 269004.94367959944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 391023.46618246567,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 391003.49523377226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 515431.4167657449,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 515420.0951248513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 514297.9580000429,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514298.7999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 611933.5409999848,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611933.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 715764.5357967851,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 715706.8514241722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 808598.1573426214,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 808542.657342658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14253.963300321944,
            "unit": "ns/iter",
            "extra": "iterations: 49074\ncpu: 14252.981212047098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11838.314747714183,
            "unit": "ns/iter",
            "extra": "iterations: 59060\ncpu: 11838.200135455483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11944.989673682505,
            "unit": "ns/iter",
            "extra": "iterations: 58685\ncpu: 11944.580386810934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12011.370574146478,
            "unit": "ns/iter",
            "extra": "iterations: 57616\ncpu: 12010.36691196889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20358.52053396873,
            "unit": "ns/iter",
            "extra": "iterations: 34309\ncpu: 20357.320236672556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 60796.92337411419,
            "unit": "ns/iter",
            "extra": "iterations: 13977\ncpu: 60793.70394219083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 295959.1370716319,
            "unit": "ns/iter",
            "extra": "iterations: 2889\ncpu: 295954.34406368976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 243208.2843332463,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 243203.2698322433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 243984.32122259875,
            "unit": "ns/iter",
            "extra": "iterations: 3468\ncpu: 243978.89273356483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 244801.01582736202,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 244796.02877697817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 515596.75599992264,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515592.50000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4339510.462616927,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4339251.401869162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3456606.030075069,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3456492.8571428573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3463462.335820938,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3463401.119402987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3513439.306818248,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3513275.757575762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2025977.3347922561,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2025909.1903719904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3395900.219780099,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3395808.424908426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12898381.23170739,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12897942.682926837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5851474.43999972,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5851261.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16390516.156249646,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16390035.93749999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 63856.40796207723,
            "unit": "ns/iter",
            "extra": "iterations: 13288\ncpu: 63854.229379891614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 354634.6229440675,
            "unit": "ns/iter",
            "extra": "iterations: 2432\ncpu: 354626.39802631625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 275179.15789472807,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 275153.81899871567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 270999.10132995533,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 270981.5072830902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 266043.75277092564,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 266035.5295566498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 529435.2939999953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529392.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4429980.407582976,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4429707.10900476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3525481.560606119,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3525293.9393939497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3554339.264367843,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3554045.9770114836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3582015.71428536,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3581755.598455615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2065665.5822222093,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2065545.777777768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3505015.201492607,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3504845.5223880624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13278615.320988463,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13268219.75308637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5798693.350000122,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5798563.99999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 58639.36439999406,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58635.65999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 317698.8675983676,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 317680.1765354917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 247074.1870689412,
            "unit": "ns/iter",
            "extra": "iterations: 3480\ncpu: 247058.4482758637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 242673.92909604302,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 242663.4745762721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 232669.24238302867,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 232661.53427638818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 586454.7602693381,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 586426.6666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4397512.820754348,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4397174.056603764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3511275.1886791163,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3511176.9811320924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3549498.853383592,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3549433.8345864685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3554025.797710066,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3553895.038167934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2022981.5577342145,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2022912.8540304997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3428911.047970232,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3428788.9298893036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6985.027962596486,
            "unit": "ns/iter",
            "extra": "iterations: 100098\ncpu: 6984.52216827513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39775.700970097874,
            "unit": "ns/iter",
            "extra": "iterations: 17627\ncpu: 39772.422987462305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29886.12735246767,
            "unit": "ns/iter",
            "extra": "iterations: 23486\ncpu: 29885.399812654457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31250.915745856248,
            "unit": "ns/iter",
            "extra": "iterations: 22444\ncpu: 31249.6301906969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24515.102978187,
            "unit": "ns/iter",
            "extra": "iterations: 28608\ncpu: 24514.52390939607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 176662.28866498274,
            "unit": "ns/iter",
            "extra": "iterations: 3970\ncpu: 176652.9471032737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 302353.69386871014,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 302342.61658031173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75686.62413494579,
            "unit": "ns/iter",
            "extra": "iterations: 9248\ncpu: 75683.28287197169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76346.16889816351,
            "unit": "ns/iter",
            "extra": "iterations: 9112\ncpu: 76345.45654082544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76405.64613368307,
            "unit": "ns/iter",
            "extra": "iterations: 9156\ncpu: 76403.33114897295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 155689.62600914735,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 155668.8195505107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 141442.19000606088,
            "unit": "ns/iter",
            "extra": "iterations: 4963\ncpu: 141437.6183759831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46353.0661277504,
            "unit": "ns/iter",
            "extra": "iterations: 15092\ncpu: 46352.78293135459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 230454.44052718152,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 230450.0494233955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 183669.92746793522,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 183652.21262110496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 180625.12725864846,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 180610.06711409707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180879.70114641843,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 180871.1047420547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 342249.28466797253,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 342225.1464843748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1265480.434782631,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1265363.4057970948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1050527.1771771512,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1050517.5675675787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1057988.2154779113,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1057978.9074355261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1062917.528875288,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1062871.7325228136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 691432.901162809,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 691368.4108527038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1034864.9512555056,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1034803.545051706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46123.87946575344,
            "unit": "ns/iter",
            "extra": "iterations: 15199\ncpu: 46119.96841897489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 229386.42833766126,
            "unit": "ns/iter",
            "extra": "iterations: 3056\ncpu: 229374.77094241205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 183430.65407816693,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 183413.87359034887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 181821.45301576843,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 181808.10251100324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181048.79505026818,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 181036.9425109587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 341593.29770620045,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 341564.08003904356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1243863.739361775,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1243799.1134751628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1049172.9336350204,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1049158.3710407314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1047985.1332336661,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1047971.2574850308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1060013.0499242423,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1059960.8169440273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 677131.5082284778,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 677098.6447241125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1026885.2907488367,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1026850.660792951 ns\nthreads: 1"
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
        "date": 1705772685982,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17448.85005111519,
            "unit": "ns/iter",
            "extra": "iterations: 40107\ncpu: 17448.73463485177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 139880.9978533711,
            "unit": "ns/iter",
            "extra": "iterations: 6056\ncpu: 139873.34874504627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 264871.26469691907,
            "unit": "ns/iter",
            "extra": "iterations: 3283\ncpu: 264861.1635699056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 385377.4472743801,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 385358.53440571955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 506934.6380619317,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 506907.29713952146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 507769.1029999869,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507743.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 605004.2120000399,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605007.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 701801.2515244061,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 701767.7591463415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 795442.9766839152,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 795416.0621761659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13881.357699245902,
            "unit": "ns/iter",
            "extra": "iterations: 50453\ncpu: 13881.24789407964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11756.932994532086,
            "unit": "ns/iter",
            "extra": "iterations: 59622\ncpu: 11756.081647713938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11611.727400826943,
            "unit": "ns/iter",
            "extra": "iterations: 60323\ncpu: 11611.212970177205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11711.797196120242,
            "unit": "ns/iter",
            "extra": "iterations: 59703\ncpu: 11711.079845233922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20090.550643727907,
            "unit": "ns/iter",
            "extra": "iterations: 35108\ncpu: 20089.4724849037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58170.8117000062,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58170.7399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 292436.64613280236,
            "unit": "ns/iter",
            "extra": "iterations: 2922\ncpu: 292434.70225872676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 229539.72246220752,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 229535.98812094989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228567.82708781117,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 228569.7805139187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228258.5356662263,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 228247.0255720052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 505449.29099999083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505448.2999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4330844.176744248,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4330630.232558131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3507783.4734845613,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3507582.954545452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3489993.8801497775,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3489713.1086142384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3462378.8843281437,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3462100.373134321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2026314.6892779516,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2026212.2538293174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3380221.7481750953,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3379956.5693430672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12776147.397589574,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12775624.096385544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5733967.439999788,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5733868.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16313444.523077054,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16312626.153846184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59484.843200004885,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59480.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 335998.20763538656,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 335978.8858589785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 255174.74081816254,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 255161.27202149885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255549.10355117914,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 255539.95822142606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250571.39246838848,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 250562.48896734224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 504486.3529999475,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504444.399999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4420846.5829383405,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4420675.829383904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3570583.5785439163,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3570472.7969348654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3551582.7126440355,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3551371.647509596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3527416.6780302115,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3527285.227272727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2069532.4117645216,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2069441.1764705877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3436954.403703449,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3436741.851851866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13115018.530864874,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13114187.654321034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5987863.929999548,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5987411.000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57969.77640000023,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57963.939999999784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 299296.40807799646,
            "unit": "ns/iter",
            "extra": "iterations: 2872\ncpu: 299286.4554317548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 224496.18100736744,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 224485.07345225575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 224055.2274273502,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 224041.9000261705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218210.84109026717,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 218190.10028284928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 571389.2307185311,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 571356.0975609749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4373689.460093685,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4373407.511737084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3517363.575757358,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3517111.742424235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3516562.264151205,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3516315.4716981184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3489680.7340826117,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3489483.895131088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2029367.4008715735,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2029253.1590413824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3412130.1318681627,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3412187.1794871674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6713.3239711725255,
            "unit": "ns/iter",
            "extra": "iterations: 103929\ncpu: 6713.141664020654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38398.907533330486,
            "unit": "ns/iter",
            "extra": "iterations: 18677\ncpu: 38398.95593510751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30890.924985007932,
            "unit": "ns/iter",
            "extra": "iterations: 23342\ncpu: 30890.891954417024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30514.000042051495,
            "unit": "ns/iter",
            "extra": "iterations: 23781\ncpu: 30514.545225179827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23767.063486663254,
            "unit": "ns/iter",
            "extra": "iterations: 29392\ncpu: 23765.878470331896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 169228.2076291785,
            "unit": "ns/iter",
            "extra": "iterations: 4142\ncpu: 169226.19507484307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 297810.8567774914,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 297804.60358056397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74869.27918944627,
            "unit": "ns/iter",
            "extra": "iterations: 9327\ncpu: 74870.60147957559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74893.93496196419,
            "unit": "ns/iter",
            "extra": "iterations: 9333\ncpu: 74889.8532090436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74321.07815652399,
            "unit": "ns/iter",
            "extra": "iterations: 9417\ncpu: 74320.26122969098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 150532.7843347736,
            "unit": "ns/iter",
            "extra": "iterations: 4660\ncpu: 150533.1545064361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 138289.82075099222,
            "unit": "ns/iter",
            "extra": "iterations: 5060\ncpu: 138292.3913043476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45924.74070674626,
            "unit": "ns/iter",
            "extra": "iterations: 15253\ncpu: 45924.88690749318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 224184.12119269042,
            "unit": "ns/iter",
            "extra": "iterations: 3119\ncpu: 224164.02693170746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 179883.19999999373,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 179873.90745501584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 178366.82666667842,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 178354.12820512778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177944.88936928226,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 177942.42115971333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 335148.3365292407,
            "unit": "ns/iter",
            "extra": "iterations: 2086\ncpu: 335134.65963566717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1259632.8036036678,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1259631.3513513338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1053632.862951886,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1053574.5481927705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1046885.9730539459,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1046843.4131736632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1041873.5029761686,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1041759.6726190496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 671202.2862631922,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 671149.3756003858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1029507.9618768713,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1029480.0586510169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45619.27229496412,
            "unit": "ns/iter",
            "extra": "iterations: 15351\ncpu: 45616.94352159394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224068.31033375868,
            "unit": "ns/iter",
            "extra": "iterations: 3116\ncpu: 224067.3940949893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179829.5882806296,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 179819.01824723938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179508.11145272403,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 179508.3013066882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180858.20165673154,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 180844.86150659915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 334999.87559809996,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 334994.54545454663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1239545.629893333,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1239441.6370106877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1052730.1355421676,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1052664.1566264925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1040191.5661217379,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1040142.1991084825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1037191.8387574849,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1037127.9585798824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 673854.4335260649,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 673854.9132948017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1022405.172262804,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1022335.4744525701 ns\nthreads: 1"
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
        "date": 1705774089809,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17917.076506759084,
            "unit": "ns/iter",
            "extra": "iterations: 39356\ncpu: 17916.91991056002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145042.86975148643,
            "unit": "ns/iter",
            "extra": "iterations: 5835\ncpu: 145026.35818337617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 272310.629722927,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 272303.1171284636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 395117.3362385457,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 395109.7247706421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 522240.8583433201,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 522209.78391356533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 520750.1859999866,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520739.7999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 621141.1090000637,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621111.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 720156.0688037305,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 720119.6247068018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 818124.6637168363,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 818084.070796461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14305.352472382936,
            "unit": "ns/iter",
            "extra": "iterations: 49062\ncpu: 14304.445395621871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11879.221800176068,
            "unit": "ns/iter",
            "extra": "iterations: 58972\ncpu: 11878.561012005679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11955.99482032449,
            "unit": "ns/iter",
            "extra": "iterations: 58884\ncpu: 11955.346104204866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11994.319908256746,
            "unit": "ns/iter",
            "extra": "iterations: 58423\ncpu: 11993.810656761903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20028.88874282046,
            "unit": "ns/iter",
            "extra": "iterations: 34991\ncpu: 20028.66165585432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62224.479728735634,
            "unit": "ns/iter",
            "extra": "iterations: 13566\ncpu: 62221.45068553731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293196.75412087486,
            "unit": "ns/iter",
            "extra": "iterations: 2912\ncpu: 293187.2252747256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233617.05644940163,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 233608.53558767372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 236647.60121850262,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 236642.34284131764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229956.00297056255,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 229943.39724547658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 535838.4280000337,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535809.9999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4453909.401914016,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 4453644.497607653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3616424.560311284,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3616264.591439682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3559294.7547895852,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3559103.831417618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3577559.803846078,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3577346.9230769286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2039030.9977975623,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2038932.5991189494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3473408.745318243,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3473229.9625468175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12959548.79268271,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12958902.439024417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5749348.430000509,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5749079.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16436201.671874428,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16435492.187499955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62337.268532192465,
            "unit": "ns/iter",
            "extra": "iterations: 13544\ncpu: 62334.29562906095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 328401.1551394871,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 328389.91211310576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 261385.72549617488,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 261370.93129770982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 264766.3036487424,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 264757.2356215216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 254913.40653084824,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 254896.61473936442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 537759.2950000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537745.5999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4523583.184465825,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4523268.446601919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3647840.482352983,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3647656.8627450913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3624160.0742186187,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3623991.406249999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3651909.4212597725,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3651684.251968504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2080031.4876959026,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2079926.3982102768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3541236.7300378084,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3541066.1596958362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13274380.987499513,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 13273938.750000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5842286.829999921,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5842073.999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56783.53480000169,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56781.81999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 298096.2884481796,
            "unit": "ns/iter",
            "extra": "iterations: 2874\ncpu: 298086.5344467632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 229756.197905479,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 229750.16111707888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 231853.36240886265,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 231845.12557385888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224921.33245242448,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 224913.50422833062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 610356.2788393354,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 610331.9179051637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4471726.45410642,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4471446.859903386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3628798.363281227,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3628634.7656249995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3601576.3720928933,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3601395.3488372215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3612701.486381075,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3612576.65369651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2042678.3061674992,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2042662.5550660715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3512398.999999895,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3512154.716981126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6892.015000295512,
            "unit": "ns/iter",
            "extra": "iterations: 101598\ncpu: 6891.833500659502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39116.19381834008,
            "unit": "ns/iter",
            "extra": "iterations: 17924\ncpu: 39114.15978576181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30376.326026561437,
            "unit": "ns/iter",
            "extra": "iterations: 23038\ncpu: 30375.705356367762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30583.602451687155,
            "unit": "ns/iter",
            "extra": "iterations: 22923\ncpu: 30582.916721197023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24127.428369914123,
            "unit": "ns/iter",
            "extra": "iterations: 29066\ncpu: 24127.179522466005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 179807.19173509802,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 179802.38706365385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 303060.0953619194,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 303054.44299956603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76484.38016167605,
            "unit": "ns/iter",
            "extra": "iterations: 9154\ncpu: 76483.58094821963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76802.7134072799,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 76801.27374547179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76886.56230802451,
            "unit": "ns/iter",
            "extra": "iterations: 9116\ncpu: 76885.13602457123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 151569.10896882083,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 151566.37781628888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 141777.692448236,
            "unit": "ns/iter",
            "extra": "iterations: 4926\ncpu: 141776.08607389193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 46157.97923533219,
            "unit": "ns/iter",
            "extra": "iterations: 15170\ncpu: 46157.56097560981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 227756.71154471548,
            "unit": "ns/iter",
            "extra": "iterations: 3075\ncpu: 227756.74796747812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181852.49414823085,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 181846.5799739919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 181801.23804572836,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 181797.661122662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 181487.99870164425,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 181480.368735395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 339678.39467313484,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 339671.67070217617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1283204.1415442193,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1283148.345588233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1074231.4215384305,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1074202.9230769172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1072933.5260736279,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1072921.779141105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1070090.986238532,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1070051.5290519767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 676203.5444874323,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676196.905222439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1050640.9355322784,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1050601.3493253235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46622.31990725665,
            "unit": "ns/iter",
            "extra": "iterations: 15095\ncpu: 46621.87479297863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 227206.9974068099,
            "unit": "ns/iter",
            "extra": "iterations: 3085\ncpu: 227201.97730956555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182379.062532591,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 182370.94841063095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 182189.38365435007,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 182182.92555960605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 182831.01435655478,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 182824.69329156613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 337414.089595347,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 337404.4315992263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1274217.864716655,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1274193.418647163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1066926.0335366009,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1066905.335365857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1072332.5659508447,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1072312.7300613495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1067380.987804984,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1067369.8170731757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 678593.0318840651,
            "unit": "ns/iter",
            "extra": "iterations: 1035\ncpu: 678577.9710144895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1049499.4137930875,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1049477.211394298 ns\nthreads: 1"
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
        "date": 1705777699944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17490.528242912493,
            "unit": "ns/iter",
            "extra": "iterations: 40311\ncpu: 17489.50162486666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 138593.48918740693,
            "unit": "ns/iter",
            "extra": "iterations: 6104\ncpu: 138582.09370904326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 260313.79987981968,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 260295.10216346156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 378068.6514486137,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 378038.32309043006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 498510.91284405766,
            "unit": "ns/iter",
            "extra": "iterations: 1744\ncpu: 498462.55733944953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 617569.1157142994,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 617529.428571429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 593196.0640000398,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593120.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 688357.3657442045,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 688351.7576664174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 786945.9166667274,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 786928.2312925177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13913.208717417754,
            "unit": "ns/iter",
            "extra": "iterations: 50336\ncpu: 13912.907263191371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11659.972326625662,
            "unit": "ns/iter",
            "extra": "iterations: 60130\ncpu: 11659.697322467968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11516.67344008066,
            "unit": "ns/iter",
            "extra": "iterations: 60580\ncpu: 11515.95080884779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11620.164464827707,
            "unit": "ns/iter",
            "extra": "iterations: 60177\ncpu: 11619.665320637465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19864.692917413922,
            "unit": "ns/iter",
            "extra": "iterations: 35199\ncpu: 19862.942129037718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56463.66019999505,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56460.50000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 293427.02841492504,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 293413.0434782609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231889.96076296386,
            "unit": "ns/iter",
            "extra": "iterations: 3670\ncpu: 231888.06539509518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228008.8175026708,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 227999.0394877271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226673.27832575506,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 226665.28925619836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 503894.2059999272,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503875.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4282503.479069863,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4282335.348837208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3476593.55056178,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3476443.8202247275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3497668.9661655147,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3497513.9097744366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3454061.20522381,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3453969.4029850834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2001862.2229438287,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2001762.3376623378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3387899.8509089793,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3387773.0909090852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12838354.463415327,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12837462.195121951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5758321.320000732,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5758209.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16542788.1718756,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16541759.374999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60809.580252215615,
            "unit": "ns/iter",
            "extra": "iterations: 13956\ncpu: 60807.702780166124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 335622.68172966375,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 335601.9867549668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 265389.89705881214,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 265368.5355392165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 261894.56167738175,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261869.78879706137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 256879.1829415162,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 256860.8197709465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 507270.043999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507251.7999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4344718.663551312,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4344342.05607476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3553682.7251911126,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3553397.709923678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3563510.218390952,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3563289.655172429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3525348.742424185,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3525084.8484848375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2057941.991130849,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2057921.2860310434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3429460.7222220832,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3429289.629629637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 13065891.049381554,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 13065002.469135815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5921534.179999526,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5920807.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53330.239800004616,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53329.36000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 300225.9490757081,
            "unit": "ns/iter",
            "extra": "iterations: 2867\ncpu: 300206.1388210683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 231738.09699268808,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 231727.09292874503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 222658.91135949924,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 222643.90434104466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 222759.7807360971,
            "unit": "ns/iter",
            "extra": "iterations: 3831\ncpu: 222755.41634038038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 571455.0058939242,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 571421.3490504287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4310318.097222106,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4309988.425925917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3494711.969811194,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3494535.4716981305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3519964.8264152817,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3519936.226415074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3487689.411984947,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3487521.348314614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2019738.3665943982,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2019510.1952277673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3401325.3553113774,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3401173.992673984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6808.155710695263,
            "unit": "ns/iter",
            "extra": "iterations: 102273\ncpu: 6807.936601057928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37294.52314420032,
            "unit": "ns/iter",
            "extra": "iterations: 18752\ncpu: 37292.203498293406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29941.868020519618,
            "unit": "ns/iter",
            "extra": "iterations: 23390\ncpu: 29941.07310816573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30004.736040825406,
            "unit": "ns/iter",
            "extra": "iterations: 23318\ncpu: 30002.88618234826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23764.634451642494,
            "unit": "ns/iter",
            "extra": "iterations: 29479\ncpu: 23763.689406017784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 170767.64777426448,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 170759.40160544953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 278513.98690992215,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 278505.98968663387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 73764.75173648525,
            "unit": "ns/iter",
            "extra": "iterations: 9502\ncpu: 73761.9448537147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74356.44300984233,
            "unit": "ns/iter",
            "extra": "iterations: 9449\ncpu: 74355.41327124543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 73649.74014752211,
            "unit": "ns/iter",
            "extra": "iterations: 9490\ncpu: 73647.7028450999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 149872.00663955664,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149861.7048618534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 136531.7104851386,
            "unit": "ns/iter",
            "extra": "iterations: 5112\ncpu: 136525.74334898393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45207.67433296397,
            "unit": "ns/iter",
            "extra": "iterations: 15479\ncpu: 45205.135990696996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 223991.91145333776,
            "unit": "ns/iter",
            "extra": "iterations: 3117\ncpu: 223981.48861084203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 178894.58062867762,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 178878.99309992138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177400.86015229384,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177392.51269035507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178191.1742886243,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 178178.22662601824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 336304.87896257744,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 336278.0499519716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1240381.5929204521,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1240264.7787610525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1039872.7883754999,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1039833.0849478359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1043990.0209267818,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1043995.2167413931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1051136.526946082,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1051096.4071856234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 678975.5489816053,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 678948.2056256004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1029071.8604993556,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1029028.7812041166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44859.909155014415,
            "unit": "ns/iter",
            "extra": "iterations: 15598\ncpu: 44858.41774586469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224310.2701922995,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 224295.9294871838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 180431.67241822171,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 180423.5642544407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179672.21274408634,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 179663.0267214789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180055.93578219172,
            "unit": "ns/iter",
            "extra": "iterations: 3893\ncpu: 180049.11379398906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 335566.0086165517,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 335546.48157012824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1238974.5283688942,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1238958.6879432737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1040497.9716840574,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1040455.8867362147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1038151.0649925114,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1038105.1698670697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1042078.2032883393,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1042053.3632286919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 677838.1537717833,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 677813.442940041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1024722.7430249582,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1024726.5785609391 ns\nthreads: 1"
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
        "date": 1705952870029,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17381.457113073655,
            "unit": "ns/iter",
            "extra": "iterations: 40292\ncpu: 17381.095502829347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 140559.2546934731,
            "unit": "ns/iter",
            "extra": "iterations: 6019\ncpu: 140553.66339923572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 260831.9097744516,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 260825.65413533835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 379712.84242958925,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 379703.21302816883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 500457.30299540295,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 500431.1635944704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 502905.06900000764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502900.2999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 598354.6129999695,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598336.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 693798.7978883851,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 693770.6636500756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 790444.4339301017,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 790428.0477408355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14010.174953105006,
            "unit": "ns/iter",
            "extra": "iterations: 49579\ncpu: 14009.344682224355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11501.168399414571,
            "unit": "ns/iter",
            "extra": "iterations: 59347\ncpu: 11501.145803494714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11447.440433153033,
            "unit": "ns/iter",
            "extra": "iterations: 61133\ncpu: 11447.213452636066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11583.814096422891,
            "unit": "ns/iter",
            "extra": "iterations: 60526\ncpu: 11583.595479628571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20206.248069415276,
            "unit": "ns/iter",
            "extra": "iterations: 34575\ncpu: 20205.715112075217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61402.262027057484,
            "unit": "ns/iter",
            "extra": "iterations: 13823\ncpu: 61269.9269333719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 296086.69637786795,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 296071.6619318181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233048.532495924,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 233041.07045330404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 236876.91187847222,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 236871.9060773476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 234787.1789850936,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 234784.25261996657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 519668.5360000402,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519644.8000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4376045.215962597,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4375835.680751173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3489865.902621504,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3489770.7865168555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3433774.9740740475,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3433677.777777775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3450733.40148698,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3450558.736059481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1977198.520255749,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1977151.8123667357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3376783.989011235,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3376670.695970691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12629580.249999944,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12629083.333333358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5512521.66999916,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5512137.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16157318.153846763,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16157120.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62464.920073528454,
            "unit": "ns/iter",
            "extra": "iterations: 13600\ncpu: 62461.948529411806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 329677.184413597,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 329668.2870370372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 261575.89341501484,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 261566.00306278773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 265556.2240199147,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 265555.6004978209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 258464.54400977647,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 258455.74572127176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 521067.00799993175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521050.09999999654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4445941.96190478,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4445715.238095242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3567956.0536397635,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3567863.9846743327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3519368.912878659,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3519278.7878788053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3536507.323193782,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3536225.4752851673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2006049.570194322,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2005995.8963282944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3433591.4518519696,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3433388.5185185303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12822793.14457821,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12822378.313252956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5741830.970000592,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5741172.000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54205.766300003685,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54206.350000000464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 301473.6083304093,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 301467.4833741682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 230300.8987068918,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 230295.3394396537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226374.79656539825,
            "unit": "ns/iter",
            "extra": "iterations: 3785\ncpu: 226362.85336856137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 225556.6987314819,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 225552.27272727233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 587272.0671186472,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 587221.694915254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4379932.221698207,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4379610.377358517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3502596.7781954515,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3502592.8571428563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3467952.4925371907,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3467752.2388059814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3467984.723880675,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3467826.4925373173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1971815.019108424,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1971699.7876857677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3392514.9489053776,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3392418.613138685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6730.683621557086,
            "unit": "ns/iter",
            "extra": "iterations: 103392\ncpu: 6730.73932219126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38120.746245921764,
            "unit": "ns/iter",
            "extra": "iterations: 18380\ncpu: 38120.66376496202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27802.296543501594,
            "unit": "ns/iter",
            "extra": "iterations: 25170\ncpu: 27801.03297576466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30288.09603276176,
            "unit": "ns/iter",
            "extra": "iterations: 22711\ncpu: 30288.36246752654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23774.22846072711,
            "unit": "ns/iter",
            "extra": "iterations: 29423\ncpu: 23774.05091255128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 176264.60846560643,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 176256.86570924756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 298752.78294242854,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 298755.13859274634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74717.01663289932,
            "unit": "ns/iter",
            "extra": "iterations: 9379\ncpu: 74715.58801578087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74350.14423792677,
            "unit": "ns/iter",
            "extra": "iterations: 9415\ncpu: 74345.0557620829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74349.71413390336,
            "unit": "ns/iter",
            "extra": "iterations: 9410\ncpu: 74347.1094580233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142203.51663960144,
            "unit": "ns/iter",
            "extra": "iterations: 4928\ncpu: 142198.92451298883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 138585.90047487392,
            "unit": "ns/iter",
            "extra": "iterations: 5054\ncpu: 138586.90146418707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45192.01766076214,
            "unit": "ns/iter",
            "extra": "iterations: 15458\ncpu: 45190.85263294106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 224803.66720207952,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 224802.50562158742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 180508.62835050526,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 180507.73195876458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 179559.29007436772,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 179560.6565786106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 178586.65423903405,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 178585.59754851687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 351405.01546133345,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 351287.8802992499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1271204.3731883722,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1271171.5579710335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1046173.6218235512,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1046124.5142003064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1043858.5658682415,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1043845.0598802381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1038765.4275148812,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1038715.3846153843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 668596.6367112987,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 668593.1166348043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1026934.0587370292,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1026895.5947136594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45765.04684531083,
            "unit": "ns/iter",
            "extra": "iterations: 15263\ncpu: 45765.413090479866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 225252.01900772206,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 225253.86597938355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 181870.40813683535,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 181866.28660274865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179673.61766221307,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 179664.59835221345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181288.011160132,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 181279.60031144478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 342943.1674804584,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 342937.5488281233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1263941.023423515,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1263842.5225225296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1051993.7740963246,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1051959.7891566106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1032667.8141592488,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1032609.1445427693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1041709.0059434791,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1041717.8306092044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 663153.9895536654,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 663138.7464387529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1026993.4158125448,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1026943.9238653042 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}