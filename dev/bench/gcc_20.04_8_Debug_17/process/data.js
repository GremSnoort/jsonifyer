window.BENCHMARK_DATA = {
  "lastUpdate": 1702398826423,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 20.04 Debug c++-17": [
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
        "date": 1702398825404,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16017.578194612555,
            "unit": "ns/iter",
            "extra": "iterations: 43769\ncpu: 16017.576366834974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152720.5787401553,
            "unit": "ns/iter",
            "extra": "iterations: 5588\ncpu: 152717.73443092342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 287791.0650946523,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 287791.56426436396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 422464.1271393571,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 422460.19559902215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 564987.1047557876,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 564949.6143958869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559211.6290000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559205.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 664786.3352559481,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 664774.2609949531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 773597.1916317947,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 773582.9288702923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 881196.6343779664,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 881030.1994301995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12975.46111069925,
            "unit": "ns/iter",
            "extra": "iterations: 53948\ncpu: 12974.634833543396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10900.10112428777,
            "unit": "ns/iter",
            "extra": "iterations: 64930\ncpu: 10899.151393808701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10737.836218273294,
            "unit": "ns/iter",
            "extra": "iterations: 65166\ncpu: 10736.954853758103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10704.774902500862,
            "unit": "ns/iter",
            "extra": "iterations: 65385\ncpu: 10704.776324845147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18072.46578526014,
            "unit": "ns/iter",
            "extra": "iterations: 38726\ncpu: 18072.481020503004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69156.34176499271,
            "unit": "ns/iter",
            "extra": "iterations: 12374\ncpu: 69153.8225311135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357060.12098456593,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 357048.3103879849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 285455.62241493666,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 285450.56704469636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 286851.94996641943,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 286842.1423774344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 284315.5282956053,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 284308.6884154461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 568228.3050000194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568211.6000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4787418.52820515,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4787151.794871792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3872880.595833313,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3872598.750000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3885878.645833311,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3885759.166666662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3896801.832635895,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3896571.966527205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2216449.928400951,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2216436.276849637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3773021.898374033,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3772851.219512189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14605721.876712121,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14604769.863013709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6399350.629999958,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6398986.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18411105.96551771,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18409798.275862023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75437.87990456466,
            "unit": "ns/iter",
            "extra": "iterations: 11316\ncpu: 75435.31283138937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 387954.3629796708,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 387935.03386004624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313191.55291969987,
            "unit": "ns/iter",
            "extra": "iterations: 2740\ncpu: 313177.48175182584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 311660.4717186519,
            "unit": "ns/iter",
            "extra": "iterations: 2758\ncpu: 311648.9847715748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 305524.9808034052,
            "unit": "ns/iter",
            "extra": "iterations: 2813\ncpu: 305511.0558122985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 561449.1009999939,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561402.8000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4833669.15544043,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4833468.393782411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3932021.697479007,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3931891.176470582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3919676.8818565053,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3919429.113924037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3920983.1764705884,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3920725.6302521075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2253252.0314010032,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2253165.217391307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3818119.778688542,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3817955.737704933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14920822.999999454,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14919808.333333407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6345894.24000012,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6345711.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66832.20811549305,
            "unit": "ns/iter",
            "extra": "iterations: 12815\ncpu: 66829.66835739347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 351754.28922572883,
            "unit": "ns/iter",
            "extra": "iterations: 2441\ncpu: 351748.50471118436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 278615.19590643747,
            "unit": "ns/iter",
            "extra": "iterations: 3078\ncpu: 278609.3567251468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 280513.3777342416,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 280504.2115572957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 275504.93882807787,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 275503.9600772698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 524743.7599999785,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524733.4000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4689939.733668437,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4689872.864321616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3784504.7113820342,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3784518.2926829457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3795120.9268292924,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3795090.2439024374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3809528.8536586706,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3809468.699187001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2162098.5253012935,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2162060.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3685849.5375495544,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3685751.383399198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6143.595639072796,
            "unit": "ns/iter",
            "extra": "iterations: 113829\ncpu: 6143.487160565388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38760.81610150609,
            "unit": "ns/iter",
            "extra": "iterations: 18048\ncpu: 38760.089760638024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31739.26690843392,
            "unit": "ns/iter",
            "extra": "iterations: 22060\ncpu: 31738.853127833205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31543.192111558048,
            "unit": "ns/iter",
            "extra": "iterations: 22159\ncpu: 31542.939663342186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24557.453569548292,
            "unit": "ns/iter",
            "extra": "iterations: 28505\ncpu: 24557.46009472035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 179702.6479958892,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 179700.35971223094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 296527.2338983027,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 296523.60169491346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77440.57838256621,
            "unit": "ns/iter",
            "extra": "iterations: 9039\ncpu: 77440.03761478144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76844.94139555251,
            "unit": "ns/iter",
            "extra": "iterations: 9129\ncpu: 76844.09026180333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76846.28572994222,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 76843.80754055255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157323.58035512984,
            "unit": "ns/iter",
            "extra": "iterations: 4449\ncpu: 157324.23016408394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149346.41348410927,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 149346.61830595264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 48793.6808451106,
            "unit": "ns/iter",
            "extra": "iterations: 14294\ncpu: 48793.41681824571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 236708.51781472517,
            "unit": "ns/iter",
            "extra": "iterations: 2947\ncpu: 236708.34747200657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 195760.1679665708,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 195762.86908078368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 193894.4522292954,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 193894.12905012636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 193555.32853185758,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 193551.8559556803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 339917.5378273594,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 339914.0640155162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1340513.7005758001,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1340492.3224568162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1120308.2592000102,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1120295.9999999846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1116656.6044656998,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1116640.5103668277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1113265.463375811,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1113264.3312102086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 719870.4564995193,
            "unit": "ns/iter",
            "extra": "iterations: 977\ncpu: 719870.7267144417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1104577.99370074,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1104549.2913385662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49582.68455238369,
            "unit": "ns/iter",
            "extra": "iterations: 14164\ncpu: 49577.04038407221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 237195.42094524566,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 237188.06528391948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 196252.97779651577,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 196238.4204609327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197990.89819005757,
            "unit": "ns/iter",
            "extra": "iterations: 3536\ncpu: 197984.9830316754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 198448.07286644928,
            "unit": "ns/iter",
            "extra": "iterations: 3527\ncpu: 198437.5389849734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 340267.7397260271,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 340259.93150684953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1329945.2224334548,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1329912.1673003754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1115821.6693163002,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1115622.7344991968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1109240.9335442476,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1109148.1012658319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1132383.0195381232,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1132367.140319725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 710517.4052684687,
            "unit": "ns/iter",
            "extra": "iterations: 987\ncpu: 710511.4488348605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1107054.0552922098,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1107027.6461295467 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}