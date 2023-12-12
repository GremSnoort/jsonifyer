window.BENCHMARK_DATA = {
  "lastUpdate": 1702394222025,
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394221062,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18306.75672517628,
            "unit": "ns/iter",
            "extra": "iterations: 38512\ncpu: 18306.69142085584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 173735.75367645657,
            "unit": "ns/iter",
            "extra": "iterations: 4896\ncpu: 173735.41666666663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 328965.4350132425,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 328960.6669192876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 482485.9586592512,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 482426.9273743018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 513933.54200001794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513930.1000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 641608.0650000139,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641572.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 765285.6801988012,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 765251.7812758902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 889852.8589251443,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 889800.6717850292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 1017590.8644808265,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 1017522.0765027325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14533.241706653165,
            "unit": "ns/iter",
            "extra": "iterations: 48141\ncpu: 14532.342493924098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12038.179711939965,
            "unit": "ns/iter",
            "extra": "iterations: 58182\ncpu: 12037.374101955933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11953.45059470248,
            "unit": "ns/iter",
            "extra": "iterations: 58769\ncpu: 11952.660416205805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11929.193688087244,
            "unit": "ns/iter",
            "extra": "iterations: 58651\ncpu: 11928.347342756291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20741.352692808105,
            "unit": "ns/iter",
            "extra": "iterations: 33868\ncpu: 20741.180465336027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 73195.09907438938,
            "unit": "ns/iter",
            "extra": "iterations: 11668\ncpu: 73191.95234830304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 389551.54532840895,
            "unit": "ns/iter",
            "extra": "iterations: 2162\ncpu: 389524.6068455139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 298310.90424413915,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 298290.98561908095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 297627.9799929882,
            "unit": "ns/iter",
            "extra": "iterations: 2849\ncpu: 297614.11021411064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 294423.1888160113,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 294405.246807042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 597211.1730000051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597159.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5373926.965318257,
            "unit": "ns/iter",
            "extra": "iterations: 173\ncpu: 5373461.849710993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4388823.051886636,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4388564.6226415215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4360517.1690145265,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4360276.525821592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4353895.375586991,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4353560.093896714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2526198.3869208232,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2526063.7602179837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4287619.706422138,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4287267.431192658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 16654000.82812596,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16652703.125000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7393066.180000004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7393032.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 20768928.823528375,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 20767335.294117674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 80229.15992420685,
            "unit": "ns/iter",
            "extra": "iterations: 10555\ncpu: 80227.62671719532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 437262.086180511,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 437228.55685874494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 333112.5633255864,
            "unit": "ns/iter",
            "extra": "iterations: 2574\ncpu: 333095.4933954926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 333311.99109562294,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 333287.0692992646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 330249.0733307474,
            "unit": "ns/iter",
            "extra": "iterations: 2591\ncpu: 330232.72867618856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 590056.4659999645,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590002.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5472705.629411474,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 5472312.941176479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4445482.438095063,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4445189.047619026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4449579.804761903,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4449320.476190486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4412512.450236778,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4412276.777251179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2573331.4777779826,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2573171.944444456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4310122.1944444515,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4310056.018518543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16960361.49206477,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16958625.396825366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7388278.978101966,
            "unit": "ns/iter",
            "extra": "iterations: 137\ncpu: 7387789.051094896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 72154.67132452907,
            "unit": "ns/iter",
            "extra": "iterations: 11808\ncpu: 72150.54200541959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 378447.6709420693,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 378420.2565236616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 296149.46851211635,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 296132.3875432513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 292834.13009243546,
            "unit": "ns/iter",
            "extra": "iterations: 2921\ncpu: 292815.8165011998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 293554.47202196816,
            "unit": "ns/iter",
            "extra": "iterations: 2913\ncpu: 293536.01098523696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 567846.2519999811,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567796.8999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5451085.076023505,
            "unit": "ns/iter",
            "extra": "iterations: 171\ncpu: 5450742.690058477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4389852.150234433,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4389790.140845068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4402289.59905653,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4402015.566037729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4356004.66355152,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4355823.831775698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2536766.2364131953,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2536604.0760869654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4269103.843317944,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4269031.336405527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6832.563845343884,
            "unit": "ns/iter",
            "extra": "iterations: 102576\ncpu: 6832.542700046824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 44995.93281902929,
            "unit": "ns/iter",
            "extra": "iterations: 15555\ncpu: 44995.06910961112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 35216.395575662,
            "unit": "ns/iter",
            "extra": "iterations: 19890\ncpu: 35213.77576671679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 34455.945468848855,
            "unit": "ns/iter",
            "extra": "iterations: 20337\ncpu: 34453.16418350821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 26733.544781250926,
            "unit": "ns/iter",
            "extra": "iterations: 26194\ncpu: 26732.347102390107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 198516.16175636536,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 198502.80453257624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 361659.628099164,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 361636.10537190485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 88483.07582459033,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88481.05648932145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 88267.5081305962,
            "unit": "ns/iter",
            "extra": "iterations: 7933\ncpu: 88266.74650195333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 88676.92243345368,
            "unit": "ns/iter",
            "extra": "iterations: 7890\ncpu: 88671.02661596978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 174818.8469591227,
            "unit": "ns/iter",
            "extra": "iterations: 4012\ncpu: 174808.32502492782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 169512.59985460094,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 169501.0421715964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 53676.51993853371,
            "unit": "ns/iter",
            "extra": "iterations: 13015\ncpu: 53672.201306185314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 267639.4429171509,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 267625.9259259255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 216041.38295243128,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 216020.3520691788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 216039.94037688454,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 216036.17547111324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 214568.66380628519,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 214564.66441924646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 388119.50693285774,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 388104.6034387113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1543249.0947136611,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 1543176.211453721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1290121.9410680542,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1290104.0515653684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1288742.5645756533,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1288673.616236168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1280160.0824177212,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1280052.5641025715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 818486.0948478109,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 818442.5058548037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1272118.533697655,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1272015.4826958037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 53496.760436541816,
            "unit": "ns/iter",
            "extra": "iterations: 13103\ncpu: 53495.252995496696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 264190.45794040564,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 264185.6657864963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 217876.0062247144,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 217869.90351696394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 215492.510782487,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 215490.3265557605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 215275.32340296495,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 215271.74447174752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 377095.9913793078,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 377098.221982757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1536839.067833527,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 1536808.0962801059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1283655.3302750296,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1283631.5596330317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1282145.4532111,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1282122.3853210823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1283574.615384638,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1283539.3772893734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 813326.3827303933,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 813321.1201866897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1270088.659420248,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1270062.8623188525 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}