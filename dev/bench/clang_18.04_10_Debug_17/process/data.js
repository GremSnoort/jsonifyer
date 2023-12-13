window.BENCHMARK_DATA = {
  "lastUpdate": 1702489539705,
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
      }
    ]
  }
}