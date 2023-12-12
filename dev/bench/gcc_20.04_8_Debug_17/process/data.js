window.BENCHMARK_DATA = {
  "lastUpdate": 1702412555572,
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
      }
    ]
  }
}