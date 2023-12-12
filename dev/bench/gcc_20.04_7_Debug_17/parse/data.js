window.BENCHMARK_DATA = {
  "lastUpdate": 1702381151348,
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
      }
    ]
  }
}