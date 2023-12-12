window.BENCHMARK_DATA = {
  "lastUpdate": 1702392462042,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-8 18.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392461100,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18405.249999999385,
            "unit": "ns/iter",
            "extra": "iterations: 38252\ncpu: 18404.82066297187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 171241.24636804606,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 171240.33494753836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 323877.6255144004,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 323864.9831649831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 473443.86784142134,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 473427.31277533044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 502848.1890000194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502836.99999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 635772.6539999931,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 635763.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 748641.2420278366,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 748616.3532297631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 869297.2585227684,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 869276.3257575755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 990077.5780409005,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 990051.237890205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14830.728430375455,
            "unit": "ns/iter",
            "extra": "iterations: 47196\ncpu: 14830.530129672008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12313.593055433044,
            "unit": "ns/iter",
            "extra": "iterations: 56735\ncpu: 12313.018418965363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12222.712976381357,
            "unit": "ns/iter",
            "extra": "iterations: 57281\ncpu: 12222.42977601648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12333.759270655992,
            "unit": "ns/iter",
            "extra": "iterations: 56873\ncpu: 12333.529091132858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20899.02531305731,
            "unit": "ns/iter",
            "extra": "iterations: 33540\ncpu: 20898.45259391775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 72821.39259196197,
            "unit": "ns/iter",
            "extra": "iterations: 11717\ncpu: 72821.56695399854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 375960.3656291071,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 375945.0679526523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 294102.22451793647,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 294091.97658402147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 294866.15144146257,
            "unit": "ns/iter",
            "extra": "iterations: 2879\ncpu: 294856.3737408812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 288827.13955860655,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 288811.61290322605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 590207.497999927,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590180.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5263076.818182035,
            "unit": "ns/iter",
            "extra": "iterations: 176\ncpu: 5262874.431818185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4277072.414746441,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4276885.253456236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4240737.949771756,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4240466.6666666735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4255602.977064432,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4255355.504587148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2488377.7587132105,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2488260.5898123314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4162116.7264573025,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4161816.143497771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 16425086.015624756,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16424174.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7261412.479999763,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7261008.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 20647020.3921553,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 20645992.156862766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 81166.52819833223,
            "unit": "ns/iter",
            "extra": "iterations: 10568\ncpu: 81161.21309613922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 423182.93395762995,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 423162.6909807791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 332005.2399380586,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 331985.8359133104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 323647.4956422503,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 323641.1898446393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 324976.970789045,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 324966.69195751165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 595037.7369999841,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595025.8000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5323830.844827563,
            "unit": "ns/iter",
            "extra": "iterations: 174\ncpu: 5323672.988505751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4349487.172897353,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4349271.96261682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4332262.460464991,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4332187.906976745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4300464.9308754215,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4300333.179723481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2539898.0272480836,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2539785.5585831045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4217593.4570135055,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4217477.375565615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16745585.93749964,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16744557.81250006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7355497.96999976,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7355513.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 70018.36840335724,
            "unit": "ns/iter",
            "extra": "iterations: 11900\ncpu: 70015.8739495801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 360188.5251256193,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 360186.05527638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 287552.81014781835,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 287535.01344085956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 287547.87130374153,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 287548.7567204301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 281793.0255729214,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 281778.844237795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 553534.6359999948,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553528.8000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5272664.920903866,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 5272353.672316415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4297393.410138179,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4297217.972350248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4267842.497716882,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4267644.748858441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4263968.347031779,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4263799.543379022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2493682.532258023,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2493606.7204301157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4168597.9374998435,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4168466.071428575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6868.8455950916505,
            "unit": "ns/iter",
            "extra": "iterations: 101875\ncpu: 6868.4495705521695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 43748.19154259817,
            "unit": "ns/iter",
            "extra": "iterations: 15986\ncpu: 43746.378080820636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32486.134410850187,
            "unit": "ns/iter",
            "extra": "iterations: 21531\ncpu: 32484.352793646525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 33947.99252971393,
            "unit": "ns/iter",
            "extra": "iterations: 20615\ncpu: 33946.61169051659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 26525.435543240117,
            "unit": "ns/iter",
            "extra": "iterations: 26351\ncpu: 26523.2818488859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 195073.30357144374,
            "unit": "ns/iter",
            "extra": "iterations: 3584\ncpu: 195065.1227678576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 336091.4242278364,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 336073.455598455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 87280.98294110097,
            "unit": "ns/iter",
            "extra": "iterations: 8031\ncpu: 87276.09264101529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 86519.52274975005,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 86512.32690405648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 86658.61395923993,
            "unit": "ns/iter",
            "extra": "iterations: 8095\ncpu: 86657.18344657178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 181341.0776598387,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 181341.59979290687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 167349.87158602095,
            "unit": "ns/iter",
            "extra": "iterations: 4174\ncpu: 167345.99904168493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 52939.16347759688,
            "unit": "ns/iter",
            "extra": "iterations: 13170\ncpu: 52936.73500379606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 262440.7632760027,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 262427.6364996291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 214721.5401594213,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 214709.77927651705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 212800.39890544215,
            "unit": "ns/iter",
            "extra": "iterations: 3289\ncpu: 212786.68288233632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 213736.30729323736,
            "unit": "ns/iter",
            "extra": "iterations: 3277\ncpu: 213727.83033262216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 388174.63656512735,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 388156.2326869782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1508484.9784482778,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1508393.103448287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1260945.262681221,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1260880.9782608578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1262310.2942239344,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1262298.1949458334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1261704.4108107644,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1261694.9549549457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 804825.1095732695,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 804765.3979238725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1247382.7896613113,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1247318.8948306532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 53640.8485103757,
            "unit": "ns/iter",
            "extra": "iterations: 13057\ncpu: 53633.79796277915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 262867.0910112288,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 262849.21348314866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 214047.6625991341,
            "unit": "ns/iter",
            "extra": "iterations: 3278\ncpu: 214031.66564978857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 214092.9081163938,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 214081.47013782163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 214288.89428661455,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 214280.01833180306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 379595.23005965934,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 379572.9788388467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1504541.492440537,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 1504446.8682505386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1253271.394265161,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1253261.2903225769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1251961.7913670922,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1251910.4316546766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1256206.8240574934,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1256127.289048461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 798312.4692483747,
            "unit": "ns/iter",
            "extra": "iterations: 878\ncpu: 798277.2209567189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1242363.7690941407,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1242283.4813499213 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}