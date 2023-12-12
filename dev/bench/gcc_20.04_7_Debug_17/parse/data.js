window.BENCHMARK_DATA = {
  "lastUpdate": 1702390833207,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-7 20.04 Debug c++-17": [
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
        "date": 1702381150620,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7831.785454626922,
            "unit": "ns/iter",
            "extra": "iterations: 89403\ncpu: 7831.8009462769705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56687.012300000104,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56686.58 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104966.79329335366,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 104964.22714478034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152975.4999112098,
            "unit": "ns/iter",
            "extra": "iterations: 5631\ncpu: 152975.24418398153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 201861.57854137462,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 201837.0032725573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260259.4860431702,
            "unit": "ns/iter",
            "extra": "iterations: 3475\ncpu: 260236.89208633077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 297148.45879120816,
            "unit": "ns/iter",
            "extra": "iterations: 2912\ncpu: 297142.5137362638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 345408.09206349525,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 345394.1666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 393638.24592390656,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 393635.5978260866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6610.064962244636,
            "unit": "ns/iter",
            "extra": "iterations: 106077\ncpu: 6609.908839805052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5476.044114078215,
            "unit": "ns/iter",
            "extra": "iterations: 127737\ncpu: 5475.934145940498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5392.6813753360775,
            "unit": "ns/iter",
            "extra": "iterations: 130150\ncpu: 5392.638494045342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5522.646133023771,
            "unit": "ns/iter",
            "extra": "iterations: 129300\ncpu: 5522.560711523584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9016.580551989966,
            "unit": "ns/iter",
            "extra": "iterations: 77900\ncpu: 9016.61360718871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30454.129377541114,
            "unit": "ns/iter",
            "extra": "iterations: 26813\ncpu: 30453.694103606456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156461.7849462283,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 156459.23090942248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 123014.79758655527,
            "unit": "ns/iter",
            "extra": "iterations: 6961\ncpu: 123012.23962074413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 123068.00312323,
            "unit": "ns/iter",
            "extra": "iterations: 7044\ncpu: 123068.52640545138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 125781.6615065605,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 125778.5487214926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 334856.5302865378,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 334835.7272397533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1857418.3353293366,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1857273.6526946123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1460098.448979593,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1460030.2982731508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1460888.8467615065,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1460730.9636650865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1448490.772585674,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1448423.8317757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 805469.8906249966,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 805410.3298611109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1412804.0562499498,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1412737.1875000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38522.63415436736,
            "unit": "ns/iter",
            "extra": "iterations: 21274\ncpu: 38521.885870076054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 187831.28596186996,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 187828.98613518232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146227.9663322574,
            "unit": "ns/iter",
            "extra": "iterations: 5881\ncpu: 146225.36983506204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151223.35395429927,
            "unit": "ns/iter",
            "extra": "iterations: 5690\ncpu: 151221.35325131836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 145210.2486897791,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 145205.6635672018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 309888.48965761723,
            "unit": "ns/iter",
            "extra": "iterations: 2804\ncpu: 309885.6990014254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1893324.8069105765,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1893312.804878045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1483908.3753994696,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1483873.0031948907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1489486.7291666914,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1489467.948717951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1539896.7042925153,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1539846.5818759967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 836089.9371068819,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 836078.3468104228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1441847.0279069387,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1441769.3023255842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5147141.459999602,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5147146.99999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3004869.4244372775,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3004782.3151125424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29621.363808775604,
            "unit": "ns/iter",
            "extra": "iterations: 27946\ncpu: 29620.66843197602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146328.69177032143,
            "unit": "ns/iter",
            "extra": "iterations: 5869\ncpu: 146325.37059124254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114278.83673740512,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 114276.76392572884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 115782.86324325635,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 115781.06756756749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111934.73607842083,
            "unit": "ns/iter",
            "extra": "iterations: 7650\ncpu: 111934.90196078423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 274831.4523583515,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 274823.3618233617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1849882.099403564,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1849846.1232604408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1450357.8538102575,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1450337.3250388766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1461944.938967097,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1461921.7527386537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1436741.424615425,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1436710.615384621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 780261.2939698218,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 780227.1356783918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1400801.3192770327,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1400770.0301204822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3063.4743978938445,
            "unit": "ns/iter",
            "extra": "iterations: 228614\ncpu: 3062.982581994112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19118.98540240011,
            "unit": "ns/iter",
            "extra": "iterations: 38842\ncpu: 19117.7230832604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15357.586032831028,
            "unit": "ns/iter",
            "extra": "iterations: 45564\ncpu: 15356.884821350299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15274.470575474612,
            "unit": "ns/iter",
            "extra": "iterations: 46101\ncpu: 15273.280406064909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11417.151775963723,
            "unit": "ns/iter",
            "extra": "iterations: 61347\ncpu: 11417.06358909151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 96811.71023514232,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 96810.23513139739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120581.73890607741,
            "unit": "ns/iter",
            "extra": "iterations: 5814\ncpu: 120570.91503267964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31474.74017274672,
            "unit": "ns/iter",
            "extra": "iterations: 22692\ncpu: 31474.021681649832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30716.73800350262,
            "unit": "ns/iter",
            "extra": "iterations: 22840\ncpu: 30715.424693520043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30462.545134512275,
            "unit": "ns/iter",
            "extra": "iterations: 23009\ncpu: 30462.353861532214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60864.34174351492,
            "unit": "ns/iter",
            "extra": "iterations: 11494\ncpu: 60859.404906907745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56930.10361054255,
            "unit": "ns/iter",
            "extra": "iterations: 12325\ncpu: 56926.109533468785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22181.03666065402,
            "unit": "ns/iter",
            "extra": "iterations: 31587\ncpu: 22179.469401969407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116298.00398406695,
            "unit": "ns/iter",
            "extra": "iterations: 6024\ncpu: 116290.33864541716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93212.33675509703,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 93210.17197706924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92992.94335075245,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 92986.2595419852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92375.22352941174,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 92368.93588896148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 159646.30520524015,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 159637.05572116672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 547987.4249803354,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 547989.3951296182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 447354.0467050523,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 447344.4657709518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 449972.1729660247,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 449951.3132607251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 444908.6899423624,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 444896.98910954845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 283573.024696331,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 283571.4574898804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 442409.8119925032,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 442402.81074328825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22483.22217226675,
            "unit": "ns/iter",
            "extra": "iterations: 31138\ncpu: 22483.319416790047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115679.0268512321,
            "unit": "ns/iter",
            "extra": "iterations: 5996\ncpu: 115677.65176784495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95876.9530201263,
            "unit": "ns/iter",
            "extra": "iterations: 7301\ncpu: 95876.26352554468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95200.7344517115,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 95194.63993453351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93586.55876453583,
            "unit": "ns/iter",
            "extra": "iterations: 7479\ncpu: 93580.53215670498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 161990.29534398657,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 161987.67662728822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 545242.2307692493,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 545233.0225330218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 447430.69284803,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 447417.8799489143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 449050.2892879735,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 449026.29890956206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 444625.167406443,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 444580.08877615794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285080.7447681622,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 285075.995075911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 441522.7569095196,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 441500.06281407253 ns\nthreads: 1"
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
        "date": 1702382277215,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7876.576053894938,
            "unit": "ns/iter",
            "extra": "iterations: 88766\ncpu: 7876.39636797873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58044.954799998995,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58044.04 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 106850.63313462328,
            "unit": "ns/iter",
            "extra": "iterations: 8052\ncpu: 106845.14406358669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 156051.0517179012,
            "unit": "ns/iter",
            "extra": "iterations: 5530\ncpu: 156043.07414104886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 205724.61673381846,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 205716.37828869402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 253739.75874227984,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 253721.06964443135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 301777.54916317976,
            "unit": "ns/iter",
            "extra": "iterations: 2868\ncpu: 301762.23849372385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 352239.2456565597,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 352213.4949494947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 399954.9089236276,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 399940.6163753456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6566.472036841236,
            "unit": "ns/iter",
            "extra": "iterations: 106837\ncpu: 6565.965910686378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5441.862706337461,
            "unit": "ns/iter",
            "extra": "iterations: 128491\ncpu: 5441.806040890018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5416.7362013050115,
            "unit": "ns/iter",
            "extra": "iterations: 129197\ncpu: 5416.4934170298075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5389.830637656706,
            "unit": "ns/iter",
            "extra": "iterations: 130023\ncpu: 5389.5864577805405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9211.025709497635,
            "unit": "ns/iter",
            "extra": "iterations: 76392\ncpu: 9210.54167975704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30077.486479511197,
            "unit": "ns/iter",
            "extra": "iterations: 27107\ncpu: 30077.079721105278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 160039.79374318162,
            "unit": "ns/iter",
            "extra": "iterations: 5498\ncpu: 160031.19316114936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 125296.6409578387,
            "unit": "ns/iter",
            "extra": "iterations: 6807\ncpu: 125291.33245188785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 124091.32950079937,
            "unit": "ns/iter",
            "extra": "iterations: 6871\ncpu: 124084.54373453648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 123407.88641295566,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 123406.12067718127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 334972.55370982643,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 334968.6969361389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1858618.0039999364,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1858606.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1480305.3700159818,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1480266.507177035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1476552.810810722,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1476547.2178060433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1462533.182389953,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1462487.4213836477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 826165.8847262753,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 826168.0115273753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1424677.9326187528,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1424624.8085758036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37836.51157439693,
            "unit": "ns/iter",
            "extra": "iterations: 21729\ncpu: 37836.554834552866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 188652.27294633837,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 188643.37349397558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 150464.0215147843,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 150465.92618506195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 151297.85734463032,
            "unit": "ns/iter",
            "extra": "iterations: 5664\ncpu: 151296.94562146885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 150793.89897923428,
            "unit": "ns/iter",
            "extra": "iterations: 5682\ncpu: 150794.40337909208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 310469.1386209406,
            "unit": "ns/iter",
            "extra": "iterations: 2799\ncpu: 310458.2708110041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1896010.0223577179,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1895940.4471544786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1514163.308942946,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1514101.626016264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1528174.5656401368,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1528108.7520259279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1495547.9326923764,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1495462.500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 842527.6476448842,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 842490.0362318855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1485270.4137930875,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1485143.4169279006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5226544.32999957,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5226433.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3082366.046204571,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3082168.6468646964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28770.732242167946,
            "unit": "ns/iter",
            "extra": "iterations: 28410\ncpu: 28769.595212953216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146787.61436124126,
            "unit": "ns/iter",
            "extra": "iterations: 5863\ncpu: 146780.96537608802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 117337.67379752464,
            "unit": "ns/iter",
            "extra": "iterations: 7339\ncpu: 117330.99877367512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 118150.94828061512,
            "unit": "ns/iter",
            "extra": "iterations: 7270\ncpu: 118144.80055020699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 115302.52626628724,
            "unit": "ns/iter",
            "extra": "iterations: 7443\ncpu: 115298.42805320428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 272586.98932832666,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 272573.79158819886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1859936.5328030183,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1859851.888667988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1469924.8485805716,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1469804.889589905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1476207.028526057,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1476142.4722662438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1443351.6604650894,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1443289.302325589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 796192.5046968618,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 796154.7395388501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1417940.4772036935,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1417892.2492401295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3066.7660419146105,
            "unit": "ns/iter",
            "extra": "iterations: 228464\ncpu: 3066.5772287975133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19451.92189234026,
            "unit": "ns/iter",
            "extra": "iterations: 36040\ncpu: 19451.256936737034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14798.30609347822,
            "unit": "ns/iter",
            "extra": "iterations: 47198\ncpu: 14797.781685664675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15581.53133502848,
            "unit": "ns/iter",
            "extra": "iterations: 44471\ncpu: 15580.582851746096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11569.801073049244,
            "unit": "ns/iter",
            "extra": "iterations: 60575\ncpu: 11569.449442839461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97956.03275935209,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 97954.87890242231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127705.82666911435,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 127705.5575935437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31296.036052192958,
            "unit": "ns/iter",
            "extra": "iterations: 22301\ncpu: 31295.354468409714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31285.735454466365,
            "unit": "ns/iter",
            "extra": "iterations: 22378\ncpu: 31286.16051479149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30963.169523806577,
            "unit": "ns/iter",
            "extra": "iterations: 22575\ncpu: 30962.52491694358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59196.3190049036,
            "unit": "ns/iter",
            "extra": "iterations: 11818\ncpu: 59193.86529023487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57950.32457879266,
            "unit": "ns/iter",
            "extra": "iterations: 12108\ncpu: 57946.67162206803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23031.03817170489,
            "unit": "ns/iter",
            "extra": "iterations: 30389\ncpu: 23030.01414985678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114385.28953412257,
            "unit": "ns/iter",
            "extra": "iterations: 6096\ncpu: 114379.95406824186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93699.01219021501,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 93697.46818486314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92595.57904485667,
            "unit": "ns/iter",
            "extra": "iterations: 7559\ncpu: 92595.51527979839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92930.17624470293,
            "unit": "ns/iter",
            "extra": "iterations: 7552\ncpu: 92925.29131355973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 161453.77467068145,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 161448.23203143163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 551100.6671911224,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 551072.7773406737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454982.36280879716,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 454971.1313394018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 452444.121014987,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 452414.7039687677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 446296.2476069255,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 446296.6815571212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 290614.21490683645,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 290605.424430641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443147.0926983676,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 443141.14285714005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23835.680162083292,
            "unit": "ns/iter",
            "extra": "iterations: 29368\ncpu: 23835.031326613844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115451.62094102975,
            "unit": "ns/iter",
            "extra": "iterations: 6036\ncpu: 115453.09807819704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97019.11791602633,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 97016.93224331437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96780.88930347784,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96778.82808181315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96234.87134582702,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 96232.11527854283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 163705.72210524834,
            "unit": "ns/iter",
            "extra": "iterations: 4275\ncpu: 163699.7426900592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 553295.7448656738,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 553303.0805687183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 455988.2201953891,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 455976.9381107417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 452645.819767453,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 452633.9147286791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 451157.47527291445,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 451157.4823378267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 290113.3370600702,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 290108.6128364402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 447499.7608695385,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 447499.3606138101 ns\nthreads: 1"
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387056287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7797.544402691197,
            "unit": "ns/iter",
            "extra": "iterations: 87551\ncpu: 7796.831561032998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54810.99650000374,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54809.20000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101423.2158715158,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 101415.32829475675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151939.64662301404,
            "unit": "ns/iter",
            "extra": "iterations: 5804\ncpu: 151929.80702963474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195595.5251409242,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 195584.78015783537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242420.855984347,
            "unit": "ns/iter",
            "extra": "iterations: 3576\ncpu: 242415.8836689037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 288871.57347551757,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 288860.6131289573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 335088.84932562435,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 335068.9402697498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380511.52168199565,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 380490.5387647828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6550.7612006114405,
            "unit": "ns/iter",
            "extra": "iterations: 106579\ncpu: 6550.341061559961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5443.731300515356,
            "unit": "ns/iter",
            "extra": "iterations: 128426\ncpu: 5443.605656175541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5426.910518796968,
            "unit": "ns/iter",
            "extra": "iterations: 128798\ncpu: 5426.935200857153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5391.394637966405,
            "unit": "ns/iter",
            "extra": "iterations: 129615\ncpu: 5390.874512980745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9122.849490228078,
            "unit": "ns/iter",
            "extra": "iterations: 76799\ncpu: 9122.181278402071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30660.077236922425,
            "unit": "ns/iter",
            "extra": "iterations: 24755\ncpu: 30657.729751565374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 151289.43578947417,
            "unit": "ns/iter",
            "extra": "iterations: 5700\ncpu: 151280.36842105238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 121543.81543481354,
            "unit": "ns/iter",
            "extra": "iterations: 7049\ncpu: 121536.28883529584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 121291.33851809817,
            "unit": "ns/iter",
            "extra": "iterations: 7072\ncpu: 121286.19909502276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 122333.57987151736,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 122327.2662384012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 330289.04850214947,
            "unit": "ns/iter",
            "extra": "iterations: 2804\ncpu: 330271.71897289576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1789495.580769194,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1789403.846153851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1422371.9616564126,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1422303.37423313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1416771.6570122098,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1416681.8597560965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1414277.0182926564,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1414227.8963414615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 782018.8440445549,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 781959.5544130228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1369087.1964549567,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1369035.7459379584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38441.35610756388,
            "unit": "ns/iter",
            "extra": "iterations: 21457\ncpu: 38440.4063941837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 183258.13022269588,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 183254.422057264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146160.30006777498,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 146157.9803456452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 147915.54470568223,
            "unit": "ns/iter",
            "extra": "iterations: 5827\ncpu: 147912.03020422172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 146662.44668146252,
            "unit": "ns/iter",
            "extra": "iterations: 5861\ncpu: 146660.75754990618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 308213.9527531117,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 308210.01776199025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1834424.5803922266,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1834352.3529411703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1459966.5896225823,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1459897.7987421465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1444504.7670807017,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1444456.211180123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1457000.8671874744,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1456931.249999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 808162.6811091971,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 808151.1265164622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1401985.2921686585,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1401926.5060241066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5000738.170000431,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5000582.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2999216.6109325886,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2999149.8392282985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28996.730957668467,
            "unit": "ns/iter",
            "extra": "iterations: 28371\ncpu: 28996.538719114382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143054.11387959812,
            "unit": "ns/iter",
            "extra": "iterations: 5980\ncpu: 143050.38461538384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 115348.11832573375,
            "unit": "ns/iter",
            "extra": "iterations: 7454\ncpu: 115345.76066541464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113788.78674237484,
            "unit": "ns/iter",
            "extra": "iterations: 7573\ncpu: 113784.27307540002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 113522.69558317632,
            "unit": "ns/iter",
            "extra": "iterations: 7562\ncpu: 113521.26421581599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 276292.62116040953,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 276286.90660875075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1792926.5258126752,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1792904.5889101338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1419634.9481707672,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1419575.7621951236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1417662.7579909011,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1417654.0334855444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1408380.0906344864,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1408329.3051359488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 763844.1294021482,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 763810.8927108906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1371710.3577712812,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1371625.219941347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3060.8742203150446,
            "unit": "ns/iter",
            "extra": "iterations: 228137\ncpu: 3060.6122636836626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18232.749778635596,
            "unit": "ns/iter",
            "extra": "iterations: 38398\ncpu: 18231.183915829104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15853.186956520723,
            "unit": "ns/iter",
            "extra": "iterations: 44390\ncpu: 15852.140121649025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13874.146275484705,
            "unit": "ns/iter",
            "extra": "iterations: 50275\ncpu: 13873.261064147171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11421.203755669958,
            "unit": "ns/iter",
            "extra": "iterations: 61294\ncpu: 11421.27777596504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93925.99758615498,
            "unit": "ns/iter",
            "extra": "iterations: 7457\ncpu: 93924.05793214393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123718.05812720928,
            "unit": "ns/iter",
            "extra": "iterations: 5660\ncpu: 123708.10954063533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30596.543052412177,
            "unit": "ns/iter",
            "extra": "iterations: 22972\ncpu: 30595.424865053155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30161.706733253603,
            "unit": "ns/iter",
            "extra": "iterations: 23228\ncpu: 30159.44119166532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30054.970631235494,
            "unit": "ns/iter",
            "extra": "iterations: 23256\ncpu: 30054.71276229773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60140.775137266384,
            "unit": "ns/iter",
            "extra": "iterations: 11656\ncpu: 60136.08442004093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55957.53352536453,
            "unit": "ns/iter",
            "extra": "iterations: 12498\ncpu: 55954.640742518706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22646.379373788568,
            "unit": "ns/iter",
            "extra": "iterations: 30980\ncpu: 22645.109748224713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111823.22956577518,
            "unit": "ns/iter",
            "extra": "iterations: 6264\ncpu: 111818.88569604128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90914.64785992666,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 90913.86511024559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90241.60056693763,
            "unit": "ns/iter",
            "extra": "iterations: 7761\ncpu: 90233.69411158438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89226.00419954353,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 89221.63400356277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156576.70967742841,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 156568.45878136327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 534860.7591743242,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 534837.0795107093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 444946.8005082706,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 444921.7280813169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 440924.65319015674,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 440898.98926089914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 441483.6216045295,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 441451.2318382829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277438.72226624744,
            "unit": "ns/iter",
            "extra": "iterations: 2524\ncpu: 277425.2377179063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 432449.9251237507,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 432436.94306930504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23072.64365696269,
            "unit": "ns/iter",
            "extra": "iterations: 30364\ncpu: 23072.773679357157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113151.49774047823,
            "unit": "ns/iter",
            "extra": "iterations: 6196\ncpu: 113144.65784376895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93414.9463688645,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 93409.79002273643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93028.00172665871,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93022.85828131268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93634.62845592202,
            "unit": "ns/iter",
            "extra": "iterations: 7668\ncpu: 93629.10798122156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 160951.11730944965,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 160952.04315885843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 530416.2450831947,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 530410.5900151212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 457278.9836271713,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 457271.0957178833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 438414.43300333456,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 438386.7326732655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 440142.1115312057,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 440116.3831127929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 277963.0957489134,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 277948.4704012698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 433978.7092374483,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 433942.2194668328 ns\nthreads: 1"
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
        "date": 1702388117883,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7789.756594189635,
            "unit": "ns/iter",
            "extra": "iterations: 89776\ncpu: 7789.352388166102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56866.21689999925,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56863.68 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104925.20534183024,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 104918.25532957606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152263.46673743497,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 152259.18259023357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 200651.26988174723,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 200641.64154880587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 248599.7970681306,
            "unit": "ns/iter",
            "extra": "iterations: 3479\ncpu: 248578.72951997697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 296616.25666439463,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 296602.80246069713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 343982.7844453188,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 343963.4820371101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 392018.5101214532,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 392009.9865047233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6413.526433515114,
            "unit": "ns/iter",
            "extra": "iterations: 109085\ncpu: 6413.182380712285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5322.674492216266,
            "unit": "ns/iter",
            "extra": "iterations: 131109\ncpu: 5322.345529292424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5349.838000977087,
            "unit": "ns/iter",
            "extra": "iterations: 131044\ncpu: 5349.568847104794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5372.201123991102,
            "unit": "ns/iter",
            "extra": "iterations: 130606\ncpu: 5371.9614719078745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9064.599904391594,
            "unit": "ns/iter",
            "extra": "iterations: 77399\ncpu: 9064.362588663942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30798.81738770332,
            "unit": "ns/iter",
            "extra": "iterations: 26559\ncpu: 30797.149742083657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150544.45446553465,
            "unit": "ns/iter",
            "extra": "iterations: 5688\ncpu: 150540.4360056257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116919.42024202706,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 116914.76897689774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117566.75947965524,
            "unit": "ns/iter",
            "extra": "iterations: 7226\ncpu: 117561.8045945198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114691.51276854853,
            "unit": "ns/iter",
            "extra": "iterations: 7401\ncpu: 114683.63734630425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 331348.51508620504,
            "unit": "ns/iter",
            "extra": "iterations: 2784\ncpu: 331332.39942528686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1812981.1556420848,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1812900.1945525273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1439397.7743431088,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1439256.7233384862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1436243.2770897874,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1436133.900928794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1422332.0568356458,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1422233.9477726577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 813892.8698328788,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 813846.7897977135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1396958.7203007878,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1396850.3759398481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38599.05792910648,
            "unit": "ns/iter",
            "extra": "iterations: 21440\ncpu: 38596.43656716421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 182118.20969107054,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 182110.36817604722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 143517.1337375719,
            "unit": "ns/iter",
            "extra": "iterations: 5937\ncpu: 143510.99882095313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 145653.13910983742,
            "unit": "ns/iter",
            "extra": "iterations: 5909\ncpu: 145652.27618886414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139719.26816098794,
            "unit": "ns/iter",
            "extra": "iterations: 6112\ncpu: 139720.9096858644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 305025.9777856055,
            "unit": "ns/iter",
            "extra": "iterations: 2836\ncpu: 305025.7404795485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1873419.952286233,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1873318.0914512905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1460793.3730407443,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1460778.2131661403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1468571.1041009047,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468565.4574132557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1458428.5971786962,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1458375.862068964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 832688.7553571233,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 832678.0357142865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1426157.2981651824,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1426094.3425076471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5169892.709999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5169965.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3071464.1192052993,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3071413.907284756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29227.632004560586,
            "unit": "ns/iter",
            "extra": "iterations: 28071\ncpu: 29227.067079904573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141067.63119055255,
            "unit": "ns/iter",
            "extra": "iterations: 6098\ncpu: 141067.546736635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109795.89690061659,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 109795.61987704855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109848.43087351334,
            "unit": "ns/iter",
            "extra": "iterations: 7819\ncpu: 109849.71223941706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106719.345547137,
            "unit": "ns/iter",
            "extra": "iterations: 8051\ncpu: 106718.73059247286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 272098.6040752603,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 272090.7523510975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1816642.0932038378,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1816542.7184465982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1423791.2732824043,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1423717.5572519107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1427651.111620767,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1427571.2538226272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1416583.320181966,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1416468.7405159425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 796149.9923208602,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 796096.5017064802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1386710.8735119533,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1386621.7261904706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3106.9067146762245,
            "unit": "ns/iter",
            "extra": "iterations: 224955\ncpu: 3106.74223733638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18841.937005543325,
            "unit": "ns/iter",
            "extra": "iterations: 37162\ncpu: 18840.49297669658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14443.622115443153,
            "unit": "ns/iter",
            "extra": "iterations: 48491\ncpu: 14442.970860572033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15028.717664498212,
            "unit": "ns/iter",
            "extra": "iterations: 46551\ncpu: 15028.20132757621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11363.819539727672,
            "unit": "ns/iter",
            "extra": "iterations: 61659\ncpu: 11363.270568773412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 96330.64745254614,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 96321.41783909289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124318.41414141464,
            "unit": "ns/iter",
            "extra": "iterations: 5643\ncpu: 124307.17703349346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30527.58751471126,
            "unit": "ns/iter",
            "extra": "iterations: 22939\ncpu: 30524.791839225716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30177.014043853793,
            "unit": "ns/iter",
            "extra": "iterations: 23213\ncpu: 30174.673674234506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30118.230186730754,
            "unit": "ns/iter",
            "extra": "iterations: 23242\ncpu: 30116.052835383965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61694.97204452064,
            "unit": "ns/iter",
            "extra": "iterations: 11411\ncpu: 61689.83437034431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56353.11505567017,
            "unit": "ns/iter",
            "extra": "iterations: 12394\ncpu: 56351.15378408883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22453.49329655846,
            "unit": "ns/iter",
            "extra": "iterations: 31178\ncpu: 22453.10154596185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111662.3763560863,
            "unit": "ns/iter",
            "extra": "iterations: 6268\ncpu: 111655.37651563429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89782.70499165803,
            "unit": "ns/iter",
            "extra": "iterations: 7793\ncpu: 89777.01783652055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90294.54612593705,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90283.7522674267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88987.50852199283,
            "unit": "ns/iter",
            "extra": "iterations: 7862\ncpu: 88985.75426100266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157232.28670855594,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 157228.4238886398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 537260.7950692773,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 537262.1725731886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 445326.4055944621,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 445325.61983471137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 442386.891414084,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 442392.17171717435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 435635.326289569,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 435632.6911124961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 282849.1304348009,
            "unit": "ns/iter",
            "extra": "iterations: 2484\ncpu: 282852.33494364243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 432460.49721015955,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 432448.1091134556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23096.830725981577,
            "unit": "ns/iter",
            "extra": "iterations: 30235\ncpu: 23097.122540102464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114235.24561404661,
            "unit": "ns/iter",
            "extra": "iterations: 6156\ncpu: 114234.61663417907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94069.50228556391,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 94068.49959666535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93255.3638541332,
            "unit": "ns/iter",
            "extra": "iterations: 7514\ncpu: 93254.91083311179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91744.53611220433,
            "unit": "ns/iter",
            "extra": "iterations: 7629\ncpu: 91745.74649364219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 160989.36685157838,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 160991.42394822172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 533949.4496183761,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 533941.2977099257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 438718.85794745,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 438718.6483103887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 439017.6818750291,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 439023.12499999325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 435459.4847920643,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 435465.0527622579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 283518.63183477614,
            "unit": "ns/iter",
            "extra": "iterations: 2469\ncpu: 283519.3195625746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 433400.07611382223,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 433379.64108911355 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390832314,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7794.729871840894,
            "unit": "ns/iter",
            "extra": "iterations: 89576\ncpu: 7794.545413950165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56416.41349999986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56413.139999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103997.2117732404,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 103993.23099238484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151418.08932652787,
            "unit": "ns/iter",
            "extra": "iterations: 5687\ncpu: 151411.72850360474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 198965.8250515185,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 198957.86581177008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 245523.88725213739,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 245514.33427762042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 292474.844804321,
            "unit": "ns/iter",
            "extra": "iterations: 2964\ncpu: 292463.69770580315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 339519.1654282387,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 339509.3859992181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 386444.7947462215,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 386430.23152270704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6589.831152606924,
            "unit": "ns/iter",
            "extra": "iterations: 106463\ncpu: 6589.500577665473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5428.0791739175,
            "unit": "ns/iter",
            "extra": "iterations: 130447\ncpu: 5427.81589457788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5420.446602092516,
            "unit": "ns/iter",
            "extra": "iterations: 128947\ncpu: 5420.195118924827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5432.088394881784,
            "unit": "ns/iter",
            "extra": "iterations: 129193\ncpu: 5431.798162439131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9093.258852036157,
            "unit": "ns/iter",
            "extra": "iterations: 76762\ncpu: 9093.069487506831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30914.3308193728,
            "unit": "ns/iter",
            "extra": "iterations: 26386\ncpu: 30911.093003865695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148540.74825419503,
            "unit": "ns/iter",
            "extra": "iterations: 5728\ncpu: 148538.9315642457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116371.68716687197,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 116363.2226322264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113496.77927749607,
            "unit": "ns/iter",
            "extra": "iterations: 7557\ncpu: 113494.29667857602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 115359.48514316989,
            "unit": "ns/iter",
            "extra": "iterations: 7404\ncpu: 115355.68611561334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 326080.8500352777,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 326061.4326040931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1806945.65369644,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1806866.7315175084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1433762.3724884365,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1433717.3106646067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1427026.7619047873,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1426951.4592933946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1432679.3508501155,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1432628.2843894872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 789598.0213858032,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 789568.0923866562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1381177.6268656768,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1381123.4328358176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38611.03724473063,
            "unit": "ns/iter",
            "extra": "iterations: 21399\ncpu: 38609.58923314169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179010.98612549395,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 179005.50838682946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142449.6346948933,
            "unit": "ns/iter",
            "extra": "iterations: 6047\ncpu: 142442.33504216996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 142593.715115311,
            "unit": "ns/iter",
            "extra": "iterations: 6027\ncpu: 142589.0658702503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 143324.2346396545,
            "unit": "ns/iter",
            "extra": "iterations: 6022\ncpu: 143316.04118233128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 304510.61665496335,
            "unit": "ns/iter",
            "extra": "iterations: 2846\ncpu: 304500.2108222072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1865218.076305216,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1865129.1164658673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1473697.2156550162,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1473640.2555910537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1464872.2968254043,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1464802.2222222234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1462238.5109718163,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1462177.5862068967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 820622.6657824795,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 820597.9664014147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1421427.6661585276,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1421364.6341463432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5101930.850000259,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5101706.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3017175.776699038,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3017045.631067975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29161.364744774914,
            "unit": "ns/iter",
            "extra": "iterations: 28132\ncpu: 29160.440068249853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139422.2117284951,
            "unit": "ns/iter",
            "extra": "iterations: 6173\ncpu: 139416.47497165092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108806.00878532985,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 108800.43290043273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108918.50811976937,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 108914.7931996961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105269.2441031938,
            "unit": "ns/iter",
            "extra": "iterations: 8140\ncpu: 105264.75429975482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 265457.1675824264,
            "unit": "ns/iter",
            "extra": "iterations: 3276\ncpu: 265445.8485958481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1815735.073643341,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1815666.0852713096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1428584.5091742557,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1428520.7951070345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1427620.9097859696,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1427564.3730886888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1418460.430955959,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1418386.9499241263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 769277.5658978713,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 769245.716639206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1373080.8082595377,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1373026.6961651924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3069.6279079928854,
            "unit": "ns/iter",
            "extra": "iterations: 228852\ncpu: 3069.5611137329015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19180.781963564034,
            "unit": "ns/iter",
            "extra": "iterations: 36393\ncpu: 19179.95768417017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15793.164591351888,
            "unit": "ns/iter",
            "extra": "iterations: 44170\ncpu: 15792.642064749838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15731.426214177738,
            "unit": "ns/iter",
            "extra": "iterations: 48119\ncpu: 15730.72175232235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11331.191317048831,
            "unit": "ns/iter",
            "extra": "iterations: 61615\ncpu: 11330.833400957628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 94645.63506405584,
            "unit": "ns/iter",
            "extra": "iterations: 7415\ncpu: 94643.07484828078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125547.25395683026,
            "unit": "ns/iter",
            "extra": "iterations: 5560\ncpu: 125540.66546762601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30848.219163578575,
            "unit": "ns/iter",
            "extra": "iterations: 22668\ncpu: 30846.76195517918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30633.98930762468,
            "unit": "ns/iter",
            "extra": "iterations: 22820\ncpu: 30632.269938650443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30458.068371972156,
            "unit": "ns/iter",
            "extra": "iterations: 22948\ncpu: 30457.29475335547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60594.53032659722,
            "unit": "ns/iter",
            "extra": "iterations: 11574\ncpu: 60591.29946431637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56634.73904237542,
            "unit": "ns/iter",
            "extra": "iterations: 12343\ncpu: 56632.75540792323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22363.15234862646,
            "unit": "ns/iter",
            "extra": "iterations: 31231\ncpu: 22362.1689987513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115889.57387861414,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 115884.41622691293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91838.46822172061,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 91836.0110077308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90505.10522918473,
            "unit": "ns/iter",
            "extra": "iterations: 7745\ncpu: 90499.44480309743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91278.55269320389,
            "unit": "ns/iter",
            "extra": "iterations: 7686\ncpu: 91274.3950039041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 158145.21681314797,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 158138.51701600428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 543287.1972049897,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 543269.7981366449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 447748.5765534867,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 447721.4606021785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 448389.93533927226,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 448367.0294494233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 447610.62996159564,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 447581.5620998676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 280487.92757101735,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 280480.632252902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 437128.19662926265,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 437108.614232211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23219.69472674024,
            "unit": "ns/iter",
            "extra": "iterations: 30209\ncpu: 23219.179714654885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113381.21851732608,
            "unit": "ns/iter",
            "extra": "iterations: 6178\ncpu: 113375.36419553315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94832.64968842403,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 94831.54971552413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95254.77968409406,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 95249.30555555651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94060.41396475106,
            "unit": "ns/iter",
            "extra": "iterations: 7433\ncpu: 94056.34333378216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 162205.10621521916,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 162193.97031539783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 537464.8432721097,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 537428.1345565752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 448452.970531749,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 448425.112107626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 444470.833333347,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 444446.8948035472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 443117.6761723583,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 443088.78326996183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280474.8697916382,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 280471.47435897385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 437617.2209011268,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 437586.98372966173 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}