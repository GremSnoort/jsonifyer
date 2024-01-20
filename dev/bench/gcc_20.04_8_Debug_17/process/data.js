window.BENCHMARK_DATA = {
  "lastUpdate": 1705771643845,
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
        "date": 1702409111632,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15640.180097748173,
            "unit": "ns/iter",
            "extra": "iterations: 44809\ncpu: 15639.864759311746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146972.14046414077,
            "unit": "ns/iter",
            "extra": "iterations: 5731\ncpu: 146970.09247949749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 279608.8801292377,
            "unit": "ns/iter",
            "extra": "iterations: 3095\ncpu: 279592.34248788364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 411632.4196597309,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 411609.2155009451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 542829.1160769706,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 542800.3724394785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 546662.4530000103,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546638.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662080.5700000005,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 662073.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 752720.5004061778,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 752713.7286758731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 861444.6254612498,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 861427.4907749068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12531.289962626322,
            "unit": "ns/iter",
            "extra": "iterations: 55921\ncpu: 12531.326335365951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10482.976050138013,
            "unit": "ns/iter",
            "extra": "iterations: 67015\ncpu: 10482.199507572917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10562.854056893791,
            "unit": "ns/iter",
            "extra": "iterations: 66615\ncpu: 10562.364332357582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10451.349018260096,
            "unit": "ns/iter",
            "extra": "iterations: 66922\ncpu: 10450.808403813395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17699.20888990045,
            "unit": "ns/iter",
            "extra": "iterations: 39528\ncpu: 17698.355596033212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 67377.12034179641,
            "unit": "ns/iter",
            "extra": "iterations: 12639\ncpu: 67377.49030777752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 350318.2765260108,
            "unit": "ns/iter",
            "extra": "iterations: 2441\ncpu: 350301.96640721033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 281852.0562499877,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 281838.4210526311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 282914.26162982656,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 282899.9670075884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 281207.7679921183,
            "unit": "ns/iter",
            "extra": "iterations: 3043\ncpu: 281191.3900755831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 543223.8360000383,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543199.9000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4577814.20197037,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4577499.507389164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3735499.751004121,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3735374.698795183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3732233.3253011648,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3731976.70682731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3747962.0564518026,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3747810.080645168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2185098.6745283706,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2184972.4056603806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3644645.7322833203,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3644433.0708661373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14506844.756756682,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14506081.081081096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6509143.629999698,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6508612.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17782988.800000034,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17782259.999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 76415.22485257458,
            "unit": "ns/iter",
            "extra": "iterations: 11701\ncpu: 76411.34091103313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 379496.3981562729,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 379490.4302019307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 304585.41381765285,
            "unit": "ns/iter",
            "extra": "iterations: 2808\ncpu: 304580.62678062706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 306414.56605114264,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 306415.1633522729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 301375.81616596255,
            "unit": "ns/iter",
            "extra": "iterations: 2796\ncpu: 301374.248927037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 530337.2360000367,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530345.7000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4737177.184079629,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4735080.59701491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3788868.2967481446,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788847.5609756163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3802057.824489854,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3801799.5918367277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3816378.016393464,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3816197.1311475346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2224596.7865707753,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2224463.5491606696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3688942.126984108,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3688710.7142857215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14789613.958333645,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14788780.555555547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6472751.649999964,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6472543.999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 65635.17464225071,
            "unit": "ns/iter",
            "extra": "iterations: 12998\ncpu: 65636.12863517455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 347819.92084005964,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 347815.6704361866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 277319.8679123684,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 277318.0734536081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 273784.4217059114,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 273785.16868236824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 269943.54431175056,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 269936.3607793828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 505859.8740000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505855.5000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4622979.668316939,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4622871.287128699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3769355.483871003,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3769403.225806455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3760753.3991935193,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3760665.72580646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3759662.185483962,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3759712.499999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2193676.9788234252,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2193639.9999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3659271.814960562,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3659281.4960629847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6286.466130059897,
            "unit": "ns/iter",
            "extra": "iterations: 111441\ncpu: 6286.480738686817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38880.302006335136,
            "unit": "ns/iter",
            "extra": "iterations: 17993\ncpu: 38880.45906741519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32193.014469379727,
            "unit": "ns/iter",
            "extra": "iterations: 21701\ncpu: 32193.52103589691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31224.458807768868,
            "unit": "ns/iter",
            "extra": "iterations: 22395\ncpu: 31223.62134404996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24050.30186339568,
            "unit": "ns/iter",
            "extra": "iterations: 29033\ncpu: 24050.652705541957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 169665.0826044729,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 169663.09523809562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 305324.5207695678,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 305328.8587669443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75816.70151515547,
            "unit": "ns/iter",
            "extra": "iterations: 9240\ncpu: 75817.74891774956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75889.98972750398,
            "unit": "ns/iter",
            "extra": "iterations: 9248\ncpu: 75887.70544982809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75712.0978378348,
            "unit": "ns/iter",
            "extra": "iterations: 9250\ncpu: 75710.91891891781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157228.30939611956,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 157224.94754022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146652.27225131422,
            "unit": "ns/iter",
            "extra": "iterations: 4775\ncpu: 146654.36649214666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44569.59670651082,
            "unit": "ns/iter",
            "extra": "iterations: 15728\ncpu: 44567.84079348942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215411.44067797513,
            "unit": "ns/iter",
            "extra": "iterations: 3245\ncpu: 215411.86440677888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177591.2467005144,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177588.9086294425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 176941.2494944283,
            "unit": "ns/iter",
            "extra": "iterations: 3956\ncpu: 176943.705763397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 177331.47246892154,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177334.07764526742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 318420.493855269,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 318421.1197086974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1284711.3119265703,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1284662.0183486233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1076119.3446154054,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1076084.615384616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1076674.6768760094,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1076624.8085758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1087716.660522301,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1087623.0414746525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 684498.2153996336,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 684464.1325536179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1063620.999999996,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1063623.8601823768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45445.57333332986,
            "unit": "ns/iter",
            "extra": "iterations: 15375\ncpu: 45444.247154471566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 217408.7381174199,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 217398.3845914888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179459.11673952773,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 179453.304191308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 180690.18906370146,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 180688.651018827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181403.32573796358,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 181403.88399793088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 320682.13778800087,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 320686.5437788034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1280593.4670329685,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1280578.9377289538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1079334.8569230742,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1079280.1538461451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1074327.99846628,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1074280.0613496997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1071111.0076452498,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1071077.3700305747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 684073.5156249944,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 684083.1054687469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1064916.0487804916,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1064867.0731707127 ns\nthreads: 1"
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
        "date": 1702412553916,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15680.36450893868,
            "unit": "ns/iter",
            "extra": "iterations: 43966\ncpu: 15678.87231042169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128933.45495836636,
            "unit": "ns/iter",
            "extra": "iterations: 6605\ncpu: 128925.58667676002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240805.3240022168,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 240791.87915742793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 353048.0671031013,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 353034.86088379717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 468970.16470588616,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 468944.0106951871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 575681.4515915214,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 575654.3103448277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 554701.9239999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554687.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 642947.759000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642924.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 736229.0652346745,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 736182.2593476524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12408.438386021995,
            "unit": "ns/iter",
            "extra": "iterations: 56432\ncpu: 12407.800538701433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10430.074021659808,
            "unit": "ns/iter",
            "extra": "iterations: 67129\ncpu: 10429.538649465945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10463.155982459799,
            "unit": "ns/iter",
            "extra": "iterations: 67046\ncpu: 10462.719625331863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10447.266242304435,
            "unit": "ns/iter",
            "extra": "iterations: 66924\ncpu: 10447.156476002621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17638.726886638684,
            "unit": "ns/iter",
            "extra": "iterations: 39793\ncpu: 17638.064483703147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59200.87589999809,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59198.660000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 300201.46797339857,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 300187.92439621955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 241664.50154885807,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 241651.78822866763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 241572.08895793097,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 241556.0576108448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 239515.21170540302,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 239502.32427891405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 610175.7405405339,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 610148.5810810813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4018744.883620831,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4018478.448275872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3253534.3192983805,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3253387.0175438607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3225975.600694437,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3225808.3333333265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3219184.996539697,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3219031.833910039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1861225.1425702516,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1861080.3212851423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3142916.157303313,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3142713.108614233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11902087.26666621,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11901571.111111093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5217656.890000057,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5217515.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15202097.771429278,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15201177.142857146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 64744.23759159778,
            "unit": "ns/iter",
            "extra": "iterations: 13237\ncpu: 64740.7191961924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 330391.1269113181,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 330379.12844036735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 264008.4946070771,
            "unit": "ns/iter",
            "extra": "iterations: 3245\ncpu: 263993.12788906106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 267740.4978220229,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 267730.58494088455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 262708.1132133036,
            "unit": "ns/iter",
            "extra": "iterations: 3277\ncpu: 262696.12450412055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 610459.6005586582,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 610452.7932960908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4045876.830434736,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4045725.2173913023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3280180.225352135,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3280030.2816901407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3267393.442105291,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3267278.596491215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3244905.766550579,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244719.5121951294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1884650.492900579,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1884576.0649087247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3168389.2380952598,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3168263.265306138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12079011.568181515,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12078452.272727283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5205339.0399998985,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5205291.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56993.45159999894,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56990.1299999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 292176.4747134271,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 292163.0478759289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 234663.4170771697,
            "unit": "ns/iter",
            "extra": "iterations: 3654\ncpu: 234652.162014231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 235406.31423086947,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 235386.59171922272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 231834.86603519114,
            "unit": "ns/iter",
            "extra": "iterations: 3695\ncpu: 231820.64952638836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 546090.5894538626,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 546054.2372881338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4010944.978448143,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4010730.603448277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3262477.9405594994,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3262306.6433566525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3239543.1284720404,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3239354.8611111296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3211860.5310345097,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3211826.5517241466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1858097.7125747814,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1857982.4351297352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3143374.783783885,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3143269.5945945866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6334.8106655568,
            "unit": "ns/iter",
            "extra": "iterations: 110524\ncpu: 6334.67210741556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34462.73897637801,
            "unit": "ns/iter",
            "extra": "iterations: 20320\ncpu: 34460.80216535429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29445.695765638324,
            "unit": "ns/iter",
            "extra": "iterations: 23758\ncpu: 29444.330330835994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28711.616424286487,
            "unit": "ns/iter",
            "extra": "iterations: 24342\ncpu: 28710.344260948248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22562.40986411068,
            "unit": "ns/iter",
            "extra": "iterations: 30981\ncpu: 22561.44733869136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 155107.11408949384,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 155105.62693841357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 266114.1361036843,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 266098.7037743044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66965.70987477411,
            "unit": "ns/iter",
            "extra": "iterations: 10461\ncpu: 66965.0702609695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66425.08183973412,
            "unit": "ns/iter",
            "extra": "iterations: 10545\ncpu: 66420.85348506419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66336.47336997573,
            "unit": "ns/iter",
            "extra": "iterations: 10552\ncpu: 66333.55761940862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134430.21505375952,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 134424.6735791105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125176.2504923861,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 125171.53088630036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41432.07042087327,
            "unit": "ns/iter",
            "extra": "iterations: 16941\ncpu: 41430.13399445111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201070.509634737,
            "unit": "ns/iter",
            "extra": "iterations: 3477\ncpu: 201059.04515386844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 163929.79827297907,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 163925.92947949265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 163408.75941079648,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 163395.69791910244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 163400.4219005294,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 163393.462526268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297405.15599832265,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 297376.2187367519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1138261.5867098037,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1138226.4181523342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 954435.8079018975,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 954400.817438696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 954228.0382513495,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 953993.7158469843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 951119.0394021533,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 951098.0978260859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 615557.6010591531,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 615542.9832303558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 940208.9596231708,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 940153.8358008153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42620.9810184333,
            "unit": "ns/iter",
            "extra": "iterations: 16437\ncpu: 42617.88039179914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 204823.41171303685,
            "unit": "ns/iter",
            "extra": "iterations: 3415\ncpu: 204814.6705710099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 167699.68335329613,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 167680.09580838378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 166665.18095237712,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 166659.3333333329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166608.0133079824,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 166599.40589353748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 299299.2769230893,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 299292.3931623947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1135873.8849270632,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1135862.3987034003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 950055.3220108821,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 949987.2282608813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 952048.6919945941,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 952038.2632293054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 949264.9959404693,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 949207.0365358612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 611895.8013998251,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 611865.8792650996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 943411.1975806708,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 943345.967741936 ns\nthreads: 1"
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
        "date": 1702418380711,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15675.155766171543,
            "unit": "ns/iter",
            "extra": "iterations: 44631\ncpu: 15675.037529967962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129672.78935185263,
            "unit": "ns/iter",
            "extra": "iterations: 6480\ncpu: 129660.2777777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 244688.94745714468,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 244669.3172239394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 356318.2490721683,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 356294.63917525776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 469694.4121475151,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 469669.8481561824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 585020.7891202061,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 584989.1873740765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 566874.7200000155,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566859.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 649898.3630000055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649886.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 739120.6999201892,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 739062.4900239428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12666.38597189319,
            "unit": "ns/iter",
            "extra": "iterations: 55289\ncpu: 12665.604369766128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10558.204349411048,
            "unit": "ns/iter",
            "extra": "iterations: 65848\ncpu: 10557.951646215539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10655.295148330262,
            "unit": "ns/iter",
            "extra": "iterations: 65462\ncpu: 10655.048730561246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10654.360272224325,
            "unit": "ns/iter",
            "extra": "iterations: 65828\ncpu: 10654.06210123352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17773.398598913238,
            "unit": "ns/iter",
            "extra": "iterations: 39398\ncpu: 17773.36159195898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57139.92370000084,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57135.56999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 299111.27938611596,
            "unit": "ns/iter",
            "extra": "iterations: 2867\ncpu: 299098.6396930589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 237833.92260579436,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 237823.5244988863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 233970.71986881364,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 233959.33315113382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 232080.20753183175,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 232069.6288268763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 611559.5192437553,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 611554.1525995934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4037991.627705638,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4037716.0173160164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3261946.6315789497,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3261898.2456140355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3261012.5789473616,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3260919.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3245704.608391617,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3245645.1048951093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1873958.5323886918,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1873903.2388663946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3166923.7576791933,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3166901.3651877157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11933574.955055851,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11933284.269662932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5320376.829999986,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5320190.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15294659.92753696,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15294402.89855068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62061.17257993921,
            "unit": "ns/iter",
            "extra": "iterations: 13698\ncpu: 62059.25682581395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 326410.015168756,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 326400.6067500947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 261958.32703443544,
            "unit": "ns/iter",
            "extra": "iterations: 3281\ncpu: 261956.65955501344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 258196.86419753663,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 258181.75248419214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 254838.87451793966,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 254833.402551171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 599679.6112637088,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 599661.4010989042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4066256.397379923,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4066180.7860262077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3292975.0531914835,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3292901.4184397277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3297250.702127675,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3297142.9078014097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3273999.7192981974,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3273845.6140350783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1890536.1507127387,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1890431.3645621254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3185353.3184931925,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3185310.616438357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12182186.011363622,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12181528.409090945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5296259.239999586,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5296206.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54684.428799998845,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54680.61000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 288376.4227669505,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 288365.51376762975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 231277.02404754504,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 231258.25452580393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228916.91617726214,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 228907.15429791692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 225253.3551352808,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 225236.19648016777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 547111.870162311,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 547105.0561797753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4034406.4588743825,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4034232.034632045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3268824.4280702667,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3268559.2982456083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3273428.2175439196,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3273321.403508795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3246464.516014401,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3246378.647686835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1861974.316973411,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1861931.288343561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3192849.816949061,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3192622.7118644086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6435.152120508664,
            "unit": "ns/iter",
            "extra": "iterations: 95661\ncpu: 6435.121941020894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35737.45483805011,
            "unit": "ns/iter",
            "extra": "iterations: 19574\ncpu: 35735.097578420064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27420.503773217257,
            "unit": "ns/iter",
            "extra": "iterations: 25575\ncpu: 27419.741935484017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29215.930083065974,
            "unit": "ns/iter",
            "extra": "iterations: 23957\ncpu: 29213.895729849195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22391.933243857486,
            "unit": "ns/iter",
            "extra": "iterations: 31293\ncpu: 22391.317547055183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 157052.58412698074,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 157044.78458049786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256273.1237151409,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 256272.09985315497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67881.29324690433,
            "unit": "ns/iter",
            "extra": "iterations: 10336\ncpu: 67876.6834365326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67857.17136491426,
            "unit": "ns/iter",
            "extra": "iterations: 10323\ncpu: 67855.39087474528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67541.42808880615,
            "unit": "ns/iter",
            "extra": "iterations: 10360\ncpu: 67539.49806949816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137247.31354611838,
            "unit": "ns/iter",
            "extra": "iterations: 5138\ncpu: 137235.30556636947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 127050.72144542745,
            "unit": "ns/iter",
            "extra": "iterations: 5507\ncpu: 127050.06355547479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42150.424977431154,
            "unit": "ns/iter",
            "extra": "iterations: 16615\ncpu: 42147.017755040586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 206102.99764222052,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 206099.3810786898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 167848.65786902342,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 167840.2003910054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165821.33837786797,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 165813.73847245256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167062.28850739493,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 167050.30996661898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 302957.85596887296,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 302948.9619377158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1165373.7899999327,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1165328.499999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 972399.5362117188,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 972366.5738161451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 975087.4130736645,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 975095.9666203026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 973215.3005540518,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 973171.0526315796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 621158.9414893601,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 621137.5886524713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 966250.2616438421,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 966198.0821917966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42979.22638735457,
            "unit": "ns/iter",
            "extra": "iterations: 16326\ncpu: 42978.42704887826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209460.6270833344,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 209444.5535714288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170989.0775616133,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 170982.30869001267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 169606.94281561242,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 169600.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170137.98950962737,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 170124.3961941944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 302776.3606060546,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 302766.9264069257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1152691.9868421266,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1152422.039473668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 968102.4090908809,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 968070.5234159883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 975316.2256266772,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975272.0055710389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 966003.8068965338,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 965955.1724138085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 623538.7517857509,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 623517.5000000101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 956868.0287277641,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 956768.3994528124 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479577732,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15617.629457885763,
            "unit": "ns/iter",
            "extra": "iterations: 44640\ncpu: 15616.834677419354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126192.72041243354,
            "unit": "ns/iter",
            "extra": "iterations: 6692\ncpu: 126185.2361028093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235460.98126018222,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 235451.5480717002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 345274.0438596698,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 345246.49122807005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 453724.6175091037,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 453706.82647212077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 562949.2281270373,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 562941.0239792615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 546314.3850000164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546219.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 629408.8989999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629380.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 720737.5174283519,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 720722.0759101482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12373.52933488712,
            "unit": "ns/iter",
            "extra": "iterations: 56622\ncpu: 12373.180036028389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10407.468494774583,
            "unit": "ns/iter",
            "extra": "iterations: 67465\ncpu: 10407.277847772904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10439.689806101418,
            "unit": "ns/iter",
            "extra": "iterations: 66942\ncpu: 10439.356457829159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10454.700250078758,
            "unit": "ns/iter",
            "extra": "iterations: 66779\ncpu: 10454.466224411848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17436.521975149128,
            "unit": "ns/iter",
            "extra": "iterations: 40159\ncpu: 17435.84750616301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58304.324199997376,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58301.529999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 312251.1436781574,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 312245.78544061264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 232637.64942840824,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 232631.62765378362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 233902.72809420066,
            "unit": "ns/iter",
            "extra": "iterations: 3652\ncpu: 233898.52135816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227196.94297895292,
            "unit": "ns/iter",
            "extra": "iterations: 3753\ncpu: 227186.89048761016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 606308.5600800946,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 606182.4432576769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3937069.8042554804,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3936876.1702127643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3168086.5153583544,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3167951.5358361816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3213842.202090684,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3213746.68989547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3158660.3003412,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3158546.4163822513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1850471.0718563152,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1850356.0878243535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3080877.0431893594,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3080754.4850498345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11722255.857142664,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11721835.164835183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5315941.790000238,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5315671.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14936635.788732039,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14935947.887323914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62840.5701670506,
            "unit": "ns/iter",
            "extra": "iterations: 13589\ncpu: 62835.881963352585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 321342.562686554,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 321311.6417910449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259125.1761861594,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 259116.10758537272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 256004.69311064942,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 255987.9809126167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251605.41269840274,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 251596.09053497927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 582844.2471533845,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 582829.0689886137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3962189.004255137,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3962008.5106382994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3201262.254295675,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3201184.536082486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3228528.006944447,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3228382.2916666525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3173858.0102041527,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3173729.9319727877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1872550.6411289328,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1872460.6854838638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3115112.217391353,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3114973.5785953137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12008721.494381778,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12008232.584269643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5221986.099999754,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5221884.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55503.33090000094,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55498.20000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282120.9940964156,
            "unit": "ns/iter",
            "extra": "iterations: 3049\ncpu: 282111.38078058406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 226208.49603594968,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 226198.57293868918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 225247.00341924882,
            "unit": "ns/iter",
            "extra": "iterations: 3802\ncpu: 225239.00578642852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220155.03143519835,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 220139.57742849924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 530251.3875075551,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 530237.7804730176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3914991.6008404335,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3914834.0336134476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3165574.9795917934,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3165417.3469387647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3179036.317406173,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3178920.8191126436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3145937.380471272,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3145823.9057239057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1837889.5619999866,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1837835.9999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3079544.5907591316,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3079428.712871287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6354.649384981571,
            "unit": "ns/iter",
            "extra": "iterations: 110078\ncpu: 6354.570395537738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35035.090213149764,
            "unit": "ns/iter",
            "extra": "iterations: 19986\ncpu: 35034.329030321554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28684.37938515559,
            "unit": "ns/iter",
            "extra": "iterations: 24429\ncpu: 28683.646485734378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27681.991774755108,
            "unit": "ns/iter",
            "extra": "iterations: 25288\ncpu: 27680.757671623072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22030.24775470318,
            "unit": "ns/iter",
            "extra": "iterations: 31733\ncpu: 22029.565436611574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 153963.92302617518,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 153960.76533978357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 248841.6817051498,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 248838.9698046172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66596.52936137424,
            "unit": "ns/iter",
            "extra": "iterations: 10507\ncpu: 66591.42476444322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66326.66930108445,
            "unit": "ns/iter",
            "extra": "iterations: 10502\ncpu: 66324.2620453244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66425.54968826691,
            "unit": "ns/iter",
            "extra": "iterations: 10586\ncpu: 66422.5486491597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134581.51984660205,
            "unit": "ns/iter",
            "extra": "iterations: 5215\ncpu: 134578.216682647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125636.70879590561,
            "unit": "ns/iter",
            "extra": "iterations: 5855\ncpu: 125635.01280956595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40931.85088951135,
            "unit": "ns/iter",
            "extra": "iterations: 17088\ncpu: 40930.99250936369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 196717.54777966422,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 196714.4744238327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 160205.29823354355,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 160201.72057811293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 160002.60448103058,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 159995.74759944913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 158694.9261273469,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 158686.56242918514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 296750.7858361856,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 296737.4999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1120197.2808989054,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1120171.4285714284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 937077.143431594,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 937037.667560324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 942398.899193601,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 942381.0483870809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 938386.5785234653,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 938355.9731543568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 607580.5248041512,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 607559.7911227081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 928664.8915663179,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 928632.1285140711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41954.37266446317,
            "unit": "ns/iter",
            "extra": "iterations: 16645\ncpu: 41953.28326824823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 198802.24885974271,
            "unit": "ns/iter",
            "extra": "iterations: 3508\ncpu: 198793.244013684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163476.91555243413,
            "unit": "ns/iter",
            "extra": "iterations: 4263\ncpu: 163472.46070842317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 163549.65887850057,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 163542.47663551333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164514.49072116512,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 164506.92976274315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 298414.06164964463,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 298400.8078231276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1121157.4680511109,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1121132.9073482298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 930291.35989375,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 930281.0092961427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 940795.5557046976,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940746.9798657724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 931944.1986577511,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 931917.1812080449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 608876.643979048,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 608838.5689354235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 926502.9470899483,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 926484.5238095233 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488580955,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15858.34637413197,
            "unit": "ns/iter",
            "extra": "iterations: 44348\ncpu: 15857.190854153516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129950.4996233182,
            "unit": "ns/iter",
            "extra": "iterations: 6637\ncpu: 129944.13138466176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 242121.97884776484,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 242104.28611188423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 354564.8972153838,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 354539.02538902545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 466326.4866339505,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 466295.908346972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 574899.3520475669,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 574867.9656538967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 555700.3220000069,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555647.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 642365.6179999852,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642296.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 731523.7873517564,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 731485.296442688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12602.134509607766,
            "unit": "ns/iter",
            "extra": "iterations: 55996\ncpu: 12601.003643117347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10606.186110711875,
            "unit": "ns/iter",
            "extra": "iterations: 62667\ncpu: 10605.632948760902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10593.22616253524,
            "unit": "ns/iter",
            "extra": "iterations: 66041\ncpu: 10592.441059341927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10518.364159855744,
            "unit": "ns/iter",
            "extra": "iterations: 66685\ncpu: 10517.777611156931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17816.35903313742,
            "unit": "ns/iter",
            "extra": "iterations: 39261\ncpu: 17815.618552762262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56230.62590000246,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56226.400000000074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294692.6967409971,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 294679.51972555777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233845.76666667158,
            "unit": "ns/iter",
            "extra": "iterations: 3660\ncpu: 233824.83606557373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232509.30249592182,
            "unit": "ns/iter",
            "extra": "iterations: 3686\ncpu: 232494.6011937058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227085.67317345375,
            "unit": "ns/iter",
            "extra": "iterations: 3586\ncpu: 227077.21695482451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 604156.0113560492,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 604132.3313293253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3945955.817796663,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3945779.6610169387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3195787.120274836,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3195664.2611683845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3197480.8137931633,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3197351.724137931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3177217.880136919,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3177001.0273972577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1863987.3601610109,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1863885.5130784668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3109954.036789262,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3109839.130434781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11760985.411111353,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11760241.111111114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5392879.719999541,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5392788.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15143023.014285615,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15142362.857142849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61243.2167982773,
            "unit": "ns/iter",
            "extra": "iterations: 13930\ncpu: 61240.674802584384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 324189.01846269245,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 324176.1492087409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 257939.95919592853,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 257927.99279928047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255839.41064524945,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 255826.34552483048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252245.05413356726,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 252235.33392174187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 585157.1538461747,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 585131.4439946003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4057870.9698277162,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4057456.0344827515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3246675.4583333726,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3246420.4861111236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3233532.7638889235,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3233268.4027777733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3209945.7620690516,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3209768.9655172406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1880652.9308942738,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1880529.6747967396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3140811.5135134435,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3140644.9324324303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12011046.806818435,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12009730.68181818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5170822.649999991,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5170730.000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54172.92669999938,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54167.92999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 283310.9033959722,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 283294.29607648996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 226108.89726746918,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 226086.46873357997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223225.59594384237,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 223208.892355695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220867.03710383433,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 220846.09636691658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 542041.6488833716,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 542005.645161288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3952044.6510637836,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3951762.978723409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3193115.4863013085,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3192914.3835616363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3192107.246575397,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3191937.328767135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3172233.462584907,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3171961.564625848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1839798.164682511,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1839697.6190476245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3088687.4701986583,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3088492.7152317967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6312.265373656619,
            "unit": "ns/iter",
            "extra": "iterations: 110904\ncpu: 6311.875135252076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34977.31917445386,
            "unit": "ns/iter",
            "extra": "iterations: 20011\ncpu: 34975.853280695585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27073.320575271613,
            "unit": "ns/iter",
            "extra": "iterations: 25866\ncpu: 27072.806000154524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27849.817019244132,
            "unit": "ns/iter",
            "extra": "iterations: 25101\ncpu: 27848.986096171535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22270.462150127725,
            "unit": "ns/iter",
            "extra": "iterations: 31440\ncpu: 22269.799618320536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 153319.90331067186,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 153313.35233501263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262296.42643204785,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 262288.4687382975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66495.45927472934,
            "unit": "ns/iter",
            "extra": "iterations: 10534\ncpu: 66493.46876779929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66165.85727814912,
            "unit": "ns/iter",
            "extra": "iterations: 10559\ncpu: 66163.69921394062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65960.28594294375,
            "unit": "ns/iter",
            "extra": "iterations: 10621\ncpu: 65957.30157235611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133864.32918898424,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 133853.57689364994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123768.96138102726,
            "unit": "ns/iter",
            "extra": "iterations: 5619\ncpu: 123765.04716141634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43451.977956030794,
            "unit": "ns/iter",
            "extra": "iterations: 16830\ncpu: 43450.15448603679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201869.49725988408,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 201863.3977502139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164461.758888628,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 164454.55615728957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 163815.20084073872,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 163812.02709014283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 163589.4059359556,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 163584.71605515285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 300538.77734876686,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 300528.7430287406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1136512.284552844,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1136446.1788617764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 958499.0572207359,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 958445.776566752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 945772.5849056983,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 945720.2156334277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 946872.8619756444,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 946843.1664411378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 616155.3491644674,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 616136.4116095062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 938634.3017356318,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 938578.7716955943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42956.378030068714,
            "unit": "ns/iter",
            "extra": "iterations: 16295\ncpu: 42954.97391837957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 204288.96239067035,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 204282.3323615131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166714.34311619485,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 166696.1822953946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 166359.68672692176,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166344.93339676384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168388.40730067046,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 168375.6003842491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 304328.65436386043,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 304303.1697785525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1137333.2211382687,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1137296.910569099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 948152.5074424614,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 948089.3098782109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 952179.2394557482,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 952083.8095238019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 947375.6770691593,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 947294.1655359498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 618893.7115043942,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 618827.3451327487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 941620.3212364941,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 941580.1075268749 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490819354,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15657.11284440883,
            "unit": "ns/iter",
            "extra": "iterations: 44424\ncpu: 15656.908427876826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125121.26291703872,
            "unit": "ns/iter",
            "extra": "iterations: 6774\ncpu: 125118.34957189251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235720.24462585733,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 235711.3741496599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343857.46751693485,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 343848.94380231167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451333.3130525217,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 451315.1846073841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560964.2661498757,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 560956.2015503873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 544910.2910000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544882.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 623801.3239999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623767.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 712805.5177743764,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 712777.4343122096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12256.064683234426,
            "unit": "ns/iter",
            "extra": "iterations: 57140\ncpu: 12255.358767938389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10383.720135609547,
            "unit": "ns/iter",
            "extra": "iterations: 67547\ncpu: 10383.572919596723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10430.398595246046,
            "unit": "ns/iter",
            "extra": "iterations: 67058\ncpu: 10430.097825762767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11073.029186738893,
            "unit": "ns/iter",
            "extra": "iterations: 67051\ncpu: 11072.504511491254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17661.55403087409,
            "unit": "ns/iter",
            "extra": "iterations: 39644\ncpu: 17661.050852588047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56992.34479999972,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56987.220000000074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 292028.1634320699,
            "unit": "ns/iter",
            "extra": "iterations: 2937\ncpu: 292024.10623084777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234866.47055601777,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 234846.2886880305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 234814.06102900786,
            "unit": "ns/iter",
            "extra": "iterations: 3654\ncpu: 234811.1932129178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 230774.02601626425,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 230752.9268292683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 622780.7051105172,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 622733.6325966843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3891796.945833429,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3891696.249999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3153081.5525424243,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3152836.9491525395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3164799.159863913,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3164720.4081632667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3149265.257626998,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149051.1864406806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1835021.3227723308,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1834926.336633667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3067271.036423859,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3067124.5033112573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11624780.086956607,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11624063.043478256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5095435.2500002645,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5095176.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15018126.816901451,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15017090.140845053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61691.36457051853,
            "unit": "ns/iter",
            "extra": "iterations: 13819\ncpu: 61687.104710905216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 326164.1676125751,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 326147.7866061292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259811.4828632081,
            "unit": "ns/iter",
            "extra": "iterations: 3297\ncpu: 259804.3069457084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 261389.83287754498,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 261370.00911577107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 263921.5202622193,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 263917.8188319438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 629920.9979353092,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 629872.6772195459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3923680.654008301,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3923412.6582278567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3188444.0927835475,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3188342.6116838576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3188559.421233029,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3188319.1780821886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3178754.8976108497,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3178708.532423217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1855612.455089809,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1855473.6526946027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3095539.1162790894,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3095459.8006644715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11833151.97777751,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11832371.111111052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5318635.470000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5318456.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 57206.58789999789,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57201.02000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282028.90230262466,
            "unit": "ns/iter",
            "extra": "iterations: 3040\ncpu: 282007.6644736836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 227157.91578661776,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 227140.18413214205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 227788.93645306863,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 227778.59611805348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 224451.4732423968,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 224435.6768100719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556730.7336748026,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 556722.6632522411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3887768.495833181,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3887600.416666685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3229005.8175674775,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3228786.824324334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3160115.915540671,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3160069.2567567597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3141510.3030301966,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3141256.9023569063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1821980.4168296994,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1821936.9863013665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3053192.5213114815,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3052829.5081967325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6227.742079115586,
            "unit": "ns/iter",
            "extra": "iterations: 112519\ncpu: 6227.558012424522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34070.95078310834,
            "unit": "ns/iter",
            "extra": "iterations: 20623\ncpu: 34069.218833341474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26723.268310396725,
            "unit": "ns/iter",
            "extra": "iterations: 26160\ncpu: 26722.465596330527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27567.08054878472,
            "unit": "ns/iter",
            "extra": "iterations: 25438\ncpu: 27565.48863904393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22059.374826146235,
            "unit": "ns/iter",
            "extra": "iterations: 31636\ncpu: 22059.087748135247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 158984.82247446894,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 158972.19069239593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 258399.98522893593,
            "unit": "ns/iter",
            "extra": "iterations: 2708\ncpu: 258396.78729689628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65671.70438366361,
            "unit": "ns/iter",
            "extra": "iterations: 10676\ncpu: 65666.45747471009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65542.60637800662,
            "unit": "ns/iter",
            "extra": "iterations: 10693\ncpu: 65538.0716356507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65358.133966832815,
            "unit": "ns/iter",
            "extra": "iterations: 10734\ncpu: 65353.38177752979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133000.68039476525,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 132992.4653634466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122704.66760217109,
            "unit": "ns/iter",
            "extra": "iterations: 5701\ncpu: 122703.01701455914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41410.509844497785,
            "unit": "ns/iter",
            "extra": "iterations: 16913\ncpu: 41409.51339206527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 200049.41935485307,
            "unit": "ns/iter",
            "extra": "iterations: 3503\ncpu: 200034.68455609484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 162406.65055762915,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 162396.1198884746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162613.2772484401,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 162601.46409481656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 164039.0620914945,
            "unit": "ns/iter",
            "extra": "iterations: 4284\ncpu: 164027.47432306196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 303384.90634441294,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 303364.09149762953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1115477.4171975034,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1115399.9999999928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934258.8088235605,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 934175.0000000073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 940609.9583333024,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 940571.1021505342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 937168.1807228584,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 937114.3239625219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 609556.967798039,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609549.2602262922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 928093.9694553975,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 928036.78618857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42469.730337075285,
            "unit": "ns/iter",
            "extra": "iterations: 16465\ncpu: 42466.04919526242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 199484.13728281917,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 199474.82198803977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 168792.22733678995,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 168780.15500234967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164715.19952775788,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 164705.31286895112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166044.4828571274,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 166029.6190476189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 304874.29834496824,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 304849.4337979074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1115366.820063629,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1115257.0063694231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935022.7426666606,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 934998.4000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 954907.3704699411,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 954801.6107382544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 937810.0989305978,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 937796.6577540125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 609459.8355091162,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 609422.0191470903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 930364.2974768319,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 930318.7250996024 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573958517,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15907.56002362823,
            "unit": "ns/iter",
            "extra": "iterations: 44016\ncpu: 15907.565430752453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128737.12213624251,
            "unit": "ns/iter",
            "extra": "iterations: 6591\ncpu: 128731.26991351844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 244688.76365162354,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 244684.01008120977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 353865.26138694136,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 353856.9963069348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 466454.0969827525,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 466438.4698275864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 578435.4260000176,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 578431.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 555878.8580000283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555862.1000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 644039.2110000631,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644018.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 736562.7523808728,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 736545.6349206348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12898.14343841733,
            "unit": "ns/iter",
            "extra": "iterations: 55543\ncpu: 12897.918729632878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10604.041949872684,
            "unit": "ns/iter",
            "extra": "iterations: 65912\ncpu: 10603.86576040781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10654.368925850567,
            "unit": "ns/iter",
            "extra": "iterations: 65894\ncpu: 10654.284153337185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10563.15070038965,
            "unit": "ns/iter",
            "extra": "iterations: 66463\ncpu: 10562.866557332673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17684.15326194317,
            "unit": "ns/iter",
            "extra": "iterations: 39501\ncpu: 17683.853573327226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56926.89469999551,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56925.58999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294334.6636894478,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 294329.3026451392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233991.65173449946,
            "unit": "ns/iter",
            "extra": "iterations: 3661\ncpu: 233987.9267959575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 232783.3640816409,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 232779.8639455782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228691.06328773213,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 228682.70313757018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603508.028131246,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 603487.9437374428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3963695.69658082,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3963489.7435897556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3206408.893103391,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3206292.758620689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3190115.402062115,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3189987.628865983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3176672.051369821,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3176471.2328767115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1858094.6686748725,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1858027.710843372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3106936.8896318227,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3106824.7491638702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11738315.999999251,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11738010.989010965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5351726.040000812,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5351384.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15008991.957142824,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15008575.714285703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 62580.56731403539,
            "unit": "ns/iter",
            "extra": "iterations: 13645\ncpu: 62577.3836570172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 323867.4315789416,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 323855.4135338348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 256749.42579872737,
            "unit": "ns/iter",
            "extra": "iterations: 3349\ncpu: 256730.81516870603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255048.26967624278,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 255039.73863973815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251344.83616148902,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 251342.7735517859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 602936.443831805,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 602923.0186078566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4016224.1038961792,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4016139.393939412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3235519.170139077,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3235478.124999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3235059.2499999683,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3234977.7777777896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3203568.467354115,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3203497.5945017063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1881993.3866396642,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1881953.6437246972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3130811.404040434,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3130735.0168350064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12012355.157303113,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12011941.57303368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5404906.989999745,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5404637.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54903.39440000298,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54903.42000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 282270.5720838771,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 282268.51245085144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 226074.41977905337,
            "unit": "ns/iter",
            "extra": "iterations: 3802\ncpu: 226065.5970541818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 226006.8938797033,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 226003.4935644866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 222392.18414919073,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 222388.96658896736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 544013.513715745,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 544005.7980049902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3973652.2851065253,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3973537.0212766198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3204760.6185565153,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3204553.264604805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3201804.229451856,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3201667.123287675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3169059.5782311917,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3168892.8571428587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1846242.4007937654,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1846146.428571427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3100883.923077032,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3100733.110367893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6236.065385508051,
            "unit": "ns/iter",
            "extra": "iterations: 111982\ncpu: 6235.937025593421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34222.18159545592,
            "unit": "ns/iter",
            "extra": "iterations: 20408\ncpu: 34220.4870638963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29044.187990858292,
            "unit": "ns/iter",
            "extra": "iterations: 24065\ncpu: 29042.360274257073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28005.013698080005,
            "unit": "ns/iter",
            "extra": "iterations: 24967\ncpu: 28002.70757399765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22465.40969630638,
            "unit": "ns/iter",
            "extra": "iterations: 31084\ncpu: 22464.28065885988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 158022.5215624413,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 158019.75615263003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265064.212773992,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 265061.07331821445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67209.13027663554,
            "unit": "ns/iter",
            "extra": "iterations: 10447\ncpu: 67207.86828754672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67103.11916849899,
            "unit": "ns/iter",
            "extra": "iterations: 10439\ncpu: 67102.68224925685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66553.11934351792,
            "unit": "ns/iter",
            "extra": "iterations: 10541\ncpu: 66551.97799070265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 134493.7027027137,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 134485.94977956623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124874.44319398145,
            "unit": "ns/iter",
            "extra": "iterations: 5598\ncpu: 124870.84673097552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41511.27510447541,
            "unit": "ns/iter",
            "extra": "iterations: 16750\ncpu: 41508.143283582496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199900.76630436486,
            "unit": "ns/iter",
            "extra": "iterations: 3496\ncpu: 199894.62242563086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 162838.94272409217,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 162834.272409778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162486.7202216082,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 162481.57894737108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161935.53130052282,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 161927.51212751065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 300174.08468773525,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 300162.27544909855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1139495.1853658054,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1139451.5447154448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 953213.6807640987,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 953149.113233295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 944735.0027026128,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 944685.4054054078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 947211.3197278947,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 947182.312925171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 611511.1830862947,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 611486.3121185671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 938470.911528195,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 938433.7801608593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42350.72225242914,
            "unit": "ns/iter",
            "extra": "iterations: 16551\ncpu: 42349.64050510506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 202320.48095786368,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 202312.46393537355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 166160.38437649218,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 166154.08504538925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 165479.34183796283,
            "unit": "ns/iter",
            "extra": "iterations: 4233\ncpu: 165469.66690290527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166439.79766722195,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 166429.96905498707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296840.2173361416,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 296825.32769555855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1135336.7212317358,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1135267.74716371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 947690.2828145701,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 947668.0649526457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 946756.6054053276,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 946732.1621621744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 944336.835579396,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 944288.1401617331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 615515.8290972899,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 615482.82208589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 938914.0510068153,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 938853.1543624217 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771636811,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15751.55294117615,
            "unit": "ns/iter",
            "extra": "iterations: 44030\ncpu: 15751.18101294572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127223.20090225004,
            "unit": "ns/iter",
            "extra": "iterations: 6650\ncpu: 127216.16541353383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 237627.03582253298,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 237623.89087903014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 345415.8034455673,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 345395.771339076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 458203.717989433,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 458178.78306878294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 568942.4950000088,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 568927.7500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 563297.6779999695,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563254.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 634581.235999974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 634548.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 732295.6645767771,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 732272.3354231978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12446.270193084672,
            "unit": "ns/iter",
            "extra": "iterations: 55675\ncpu: 12445.907498877425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10609.835041402928,
            "unit": "ns/iter",
            "extra": "iterations: 66059\ncpu: 10609.6171604172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10630.085453708685,
            "unit": "ns/iter",
            "extra": "iterations: 67323\ncpu: 10629.15794007992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10421.16586873558,
            "unit": "ns/iter",
            "extra": "iterations: 66004\ncpu: 10420.829040664215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17695.436739192523,
            "unit": "ns/iter",
            "extra": "iterations: 39021\ncpu: 17694.76179493093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55805.203400001345,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55802.43000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 287924.6204379499,
            "unit": "ns/iter",
            "extra": "iterations: 3014\ncpu: 287922.826808228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 227216.9027702292,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 227210.18468223783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229944.59548144368,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 229939.02635825708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 222637.3379457134,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 222627.6210750399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 613954.6839622452,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 613946.6307277624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3989285.0909091732,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 3989210.82251082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3241945.6027873536,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3241826.82926829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3218153.1944443816,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3218096.1805555495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3186789.608996542,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3186714.5328719835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1845743.9880951676,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1845689.6825396796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3132340.8474575337,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3132275.9322033925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11510691.663043752,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11510311.956521722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5216014.92000002,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5215951.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15104354.07142836,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15103494.285714295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60949.51472690708,
            "unit": "ns/iter",
            "extra": "iterations: 13988\ncpu: 60948.10551901636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 316276.1459100942,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 316252.9845246879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 251103.85038214122,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 251099.32392710264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 249013.25489033258,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 248997.54001185548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 248889.0788869809,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 248882.30063109688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 586529.6527309343,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 586503.0343897523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4009021.2017167597,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4008838.626609452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3267354.150877086,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3267301.403508776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3262900.714285634,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3262756.445993034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3244898.4355400144,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244821.602787444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1857703.0766128048,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1857606.451612904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3147674.405405412,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3147595.945945942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11832070.999999663,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11831638.888888879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5118057.180000051,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5118010.000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52696.72560000345,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52695.669999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 280615.88885318435,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 280611.43591390795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 219739.300468259,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 219732.51821019617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219795.02478698385,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 219791.66021172062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220452.86051281483,
            "unit": "ns/iter",
            "extra": "iterations: 3900\ncpu: 220442.33333333296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 548983.3047318562,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 548966.3091482659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3975550.893162553,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3975485.4700854546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3203847.5156794856,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3203785.365853672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3193375.4410773083,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3193304.377104393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3192280.673539491,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3192220.962199325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1819401.5088408631,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1819362.475442037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3046859.7290969063,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3046798.3277592016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6259.7165259028225,
            "unit": "ns/iter",
            "extra": "iterations: 112363\ncpu: 6259.570321191098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34482.306329617946,
            "unit": "ns/iter",
            "extra": "iterations: 20096\ncpu: 34481.21516719744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28515.7035385443,
            "unit": "ns/iter",
            "extra": "iterations: 24219\ncpu: 28514.81481481481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28936.969871769837,
            "unit": "ns/iter",
            "extra": "iterations: 24097\ncpu: 28935.65589077482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22355.90055776749,
            "unit": "ns/iter",
            "extra": "iterations: 31375\ncpu: 22354.945019920448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 153449.62805012296,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 153447.32908331425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263811.3956915966,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 263810.0907029487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66778.54261172043,
            "unit": "ns/iter",
            "extra": "iterations: 10361\ncpu: 66776.99063796914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66481.45115178132,
            "unit": "ns/iter",
            "extra": "iterations: 10983\ncpu: 66480.8340162069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67677.4430789701,
            "unit": "ns/iter",
            "extra": "iterations: 10497\ncpu: 67502.83890635437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 128937.7993390823,
            "unit": "ns/iter",
            "extra": "iterations: 5447\ncpu: 128935.0100973012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122335.29125867551,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 122334.4133879299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41390.444867365644,
            "unit": "ns/iter",
            "extra": "iterations: 17077\ncpu: 41389.2252737602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 200725.95900229292,
            "unit": "ns/iter",
            "extra": "iterations: 3488\ncpu: 200719.43807339514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 162349.69165885332,
            "unit": "ns/iter",
            "extra": "iterations: 4268\ncpu: 162344.42361761982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162721.58619081095,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 162720.5038488435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 162821.99309232563,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 162817.82178217958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 301940.07477437856,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 301938.2466695331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1132333.3317072755,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1132294.1463414666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 951108.8564036136,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 951090.2975420533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 955712.7496598659,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 955684.2176870797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 932886.6729475328,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 932840.5114401075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 613681.0802792239,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 613677.3123909336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 944628.0237780601,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 944588.639365924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43030.870931883735,
            "unit": "ns/iter",
            "extra": "iterations: 16193\ncpu: 43030.605817328724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 202003.2448559738,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 201993.32745444032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 168577.55411152923,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 168574.83459357332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 164125.5272424465,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 164119.9381394231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 166109.75296348197,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 166107.25462304687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 301679.5265429552,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 301670.99697885255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1134897.2941177182,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1134874.673202602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 948551.8625337107,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 948528.4366576865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 931596.5128865651,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 931570.1030927905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 950979.0383036624,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 950961.5595075192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 612556.2803904052,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 612540.3726708035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 938390.4660325787,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 938376.2228260997 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}