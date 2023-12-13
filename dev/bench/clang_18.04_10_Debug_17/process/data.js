window.BENCHMARK_DATA = {
  "lastUpdate": 1702492163512,
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
      }
    ]
  }
}