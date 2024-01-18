window.BENCHMARK_DATA = {
  "lastUpdate": 1705575618667,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-6.0 18.04 Release c++-17": [
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
        "date": 1702490331135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.9930324260215,
            "unit": "ns/iter",
            "extra": "iterations: 969778\ncpu: 721.9837942291947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11198.127362970632,
            "unit": "ns/iter",
            "extra": "iterations: 74747\ncpu: 11197.442037807536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24700.25330049976,
            "unit": "ns/iter",
            "extra": "iterations: 33707\ncpu: 24699.12481087014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38733.66343086605,
            "unit": "ns/iter",
            "extra": "iterations: 21942\ncpu: 38732.70440251573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48352.05196067018,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 48348.43996600706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61331.22888920436,
            "unit": "ns/iter",
            "extra": "iterations: 14116\ncpu: 61327.56446585436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60450.333200003566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60444.63000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72091.68538696073,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 72086.98926454091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79493.90898258069,
            "unit": "ns/iter",
            "extra": "iterations: 10910\ncpu: 79487.52520623278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.189030565679,
            "unit": "ns/iter",
            "extra": "iterations: 1204620\ncpu: 579.1739303680839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.97942060529965,
            "unit": "ns/iter",
            "extra": "iterations: 1441539\ncpu: 483.9445897752335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.0973978107737,
            "unit": "ns/iter",
            "extra": "iterations: 1443400\ncpu: 486.07329915477305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.5707941322234,
            "unit": "ns/iter",
            "extra": "iterations: 1442669\ncpu: 484.54565808234656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 982.3944476446302,
            "unit": "ns/iter",
            "extra": "iterations: 716957\ncpu: 982.3434320328829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3642.1494510469092,
            "unit": "ns/iter",
            "extra": "iterations: 220875\ncpu: 3641.9142048670055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15400.471570838055,
            "unit": "ns/iter",
            "extra": "iterations: 53220\ncpu: 15399.768883878201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12143.034509429792,
            "unit": "ns/iter",
            "extra": "iterations: 67228\ncpu: 12142.126792407902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11917.084769466708,
            "unit": "ns/iter",
            "extra": "iterations: 68645\ncpu: 11916.513948576025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12070.383313626233,
            "unit": "ns/iter",
            "extra": "iterations: 67660\ncpu: 12069.595033993499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42004.800680919936,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 42002.08781855505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 478624.3722044783,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 478583.70607028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 377848.6454426537,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 377818.1421718264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378557.7487024269,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 378532.0934256051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 399904.4364111769,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 399877.78745644685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230809.49739177595,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 230798.82629108036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379506.77050614054,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379480.8464223387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904138.7958763735,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1903971.5463917558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748707.1657326103,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 748682.305844674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2549373.7486185357,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2548874.033149178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3602.9523023607444,
            "unit": "ns/iter",
            "extra": "iterations: 218732\ncpu: 3602.7467403031937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15871.783997519837,
            "unit": "ns/iter",
            "extra": "iterations: 51592\ncpu: 15870.503178787358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12472.981781750657,
            "unit": "ns/iter",
            "extra": "iterations: 64880\ncpu: 12472.481504315616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12099.451981514312,
            "unit": "ns/iter",
            "extra": "iterations: 67297\ncpu: 12099.141120703744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12371.428698443275,
            "unit": "ns/iter",
            "extra": "iterations: 66359\ncpu: 12371.00317967423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42670.24871660825,
            "unit": "ns/iter",
            "extra": "iterations: 19090\ncpu: 42667.24986904124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474688.2199270782,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 474661.30012150627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391535.9038031257,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 391509.12751677743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 386173.46767719433,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 386167.98930004286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385871.7411660748,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385858.52473498124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221309.80745659696,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 221296.34831460673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382232.7588652477,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 382211.70212765853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901182.6763484543,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1901039.419087131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739183.7703999954,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739143.2800000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3969.240016362867,
            "unit": "ns/iter",
            "extra": "iterations: 200453\ncpu: 3968.9353614064275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16953.001844299186,
            "unit": "ns/iter",
            "extra": "iterations: 48799\ncpu: 16952.095329822212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13397.480578445633,
            "unit": "ns/iter",
            "extra": "iterations: 61890\ncpu: 13396.52124737439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13168.599436834349,
            "unit": "ns/iter",
            "extra": "iterations: 62859\ncpu: 13167.969582716849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13326.617005861626,
            "unit": "ns/iter",
            "extra": "iterations: 62108\ncpu: 13325.811489663227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42754.202944323675,
            "unit": "ns/iter",
            "extra": "iterations: 19631\ncpu: 42752.254087922185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460258.93743373867,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460233.13891834876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380656.0184372531,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 380632.265144863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 380091.7604395771,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380060.96703296725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378930.5998252562,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 378899.8252512008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225550.22106361203,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 225539.70281543344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374530.4732528348,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374502.15703192464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.819739133154,
            "unit": "ns/iter",
            "extra": "iterations: 2313364\ncpu: 302.8125707843629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1528.3729279480297,
            "unit": "ns/iter",
            "extra": "iterations: 459086\ncpu: 1528.2628962765243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1212.234432873884,
            "unit": "ns/iter",
            "extra": "iterations: 578575\ncpu: 1212.166443417022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1145.0810208791304,
            "unit": "ns/iter",
            "extra": "iterations: 611904\ncpu: 1144.9954568036828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.9028775130904,
            "unit": "ns/iter",
            "extra": "iterations: 700744\ncpu: 997.8482869635721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7472.480498895221,
            "unit": "ns/iter",
            "extra": "iterations: 95892\ncpu: 7472.382471947687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19451.385572347954,
            "unit": "ns/iter",
            "extra": "iterations: 35931\ncpu: 19450.90868609275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4565.972721974013,
            "unit": "ns/iter",
            "extra": "iterations: 152687\ncpu: 4565.909343951975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4623.690112420497,
            "unit": "ns/iter",
            "extra": "iterations: 151129\ncpu: 4623.368115980362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4586.871450307724,
            "unit": "ns/iter",
            "extra": "iterations: 152478\ncpu: 4586.532483374681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9574.523336629996,
            "unit": "ns/iter",
            "extra": "iterations: 72804\ncpu: 9573.995934289309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8631.02303643064,
            "unit": "ns/iter",
            "extra": "iterations: 81306\ncpu: 8630.775096548834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3331.5579988792783,
            "unit": "ns/iter",
            "extra": "iterations: 208823\ncpu: 3331.3590935864263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16509.568995450994,
            "unit": "ns/iter",
            "extra": "iterations: 42626\ncpu: 16509.32529442129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13205.831004028163,
            "unit": "ns/iter",
            "extra": "iterations: 52877\ncpu: 13205.474970213809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13126.139163782764,
            "unit": "ns/iter",
            "extra": "iterations: 53455\ncpu: 13125.41389954182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13588.51837336645,
            "unit": "ns/iter",
            "extra": "iterations: 51542\ncpu: 13587.565480579033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28722.887898818153,
            "unit": "ns/iter",
            "extra": "iterations: 24353\ncpu: 28721.369030509384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101389.45297783129,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 101381.2490943333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87504.5350255145,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 87499.82580564862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86851.39162317087,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86850.27342779141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87264.09553428146,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87260.23137206185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55426.42291584631,
            "unit": "ns/iter",
            "extra": "iterations: 12655\ncpu: 55423.77716317663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85412.51326679811,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85407.12025316403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3045.1215381601983,
            "unit": "ns/iter",
            "extra": "iterations: 229755\ncpu: 3044.970076820985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15265.679468755834,
            "unit": "ns/iter",
            "extra": "iterations: 45930\ncpu: 15264.282603962494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12298.903485631485,
            "unit": "ns/iter",
            "extra": "iterations: 56862\ncpu: 12298.441841651736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11988.461170030216,
            "unit": "ns/iter",
            "extra": "iterations: 58460\ncpu: 11988.041395826147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12616.533056663675,
            "unit": "ns/iter",
            "extra": "iterations: 55662\ncpu: 12616.106140634758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28021.650782222485,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 28020.989877165277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98407.84104937811,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98404.1526374857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84426.42361027816,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84420.71626673143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83285.5012016353,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 83279.15164623842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83433.17447265089,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83430.96174472668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55906.20918936273,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 55904.937091892985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84112.25026955068,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 84106.43344914478 ns\nthreads: 1"
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
        "date": 1702490331135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.9930324260215,
            "unit": "ns/iter",
            "extra": "iterations: 969778\ncpu: 721.9837942291947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11198.127362970632,
            "unit": "ns/iter",
            "extra": "iterations: 74747\ncpu: 11197.442037807536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24700.25330049976,
            "unit": "ns/iter",
            "extra": "iterations: 33707\ncpu: 24699.12481087014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38733.66343086605,
            "unit": "ns/iter",
            "extra": "iterations: 21942\ncpu: 38732.70440251573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48352.05196067018,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 48348.43996600706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61331.22888920436,
            "unit": "ns/iter",
            "extra": "iterations: 14116\ncpu: 61327.56446585436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60450.333200003566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60444.63000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72091.68538696073,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 72086.98926454091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79493.90898258069,
            "unit": "ns/iter",
            "extra": "iterations: 10910\ncpu: 79487.52520623278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.189030565679,
            "unit": "ns/iter",
            "extra": "iterations: 1204620\ncpu: 579.1739303680839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.97942060529965,
            "unit": "ns/iter",
            "extra": "iterations: 1441539\ncpu: 483.9445897752335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.0973978107737,
            "unit": "ns/iter",
            "extra": "iterations: 1443400\ncpu: 486.07329915477305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.5707941322234,
            "unit": "ns/iter",
            "extra": "iterations: 1442669\ncpu: 484.54565808234656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 982.3944476446302,
            "unit": "ns/iter",
            "extra": "iterations: 716957\ncpu: 982.3434320328829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3642.1494510469092,
            "unit": "ns/iter",
            "extra": "iterations: 220875\ncpu: 3641.9142048670055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15400.471570838055,
            "unit": "ns/iter",
            "extra": "iterations: 53220\ncpu: 15399.768883878201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12143.034509429792,
            "unit": "ns/iter",
            "extra": "iterations: 67228\ncpu: 12142.126792407902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11917.084769466708,
            "unit": "ns/iter",
            "extra": "iterations: 68645\ncpu: 11916.513948576025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12070.383313626233,
            "unit": "ns/iter",
            "extra": "iterations: 67660\ncpu: 12069.595033993499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42004.800680919936,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 42002.08781855505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 478624.3722044783,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 478583.70607028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 377848.6454426537,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 377818.1421718264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378557.7487024269,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 378532.0934256051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 399904.4364111769,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 399877.78745644685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230809.49739177595,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 230798.82629108036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379506.77050614054,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379480.8464223387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904138.7958763735,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1903971.5463917558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748707.1657326103,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 748682.305844674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2549373.7486185357,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2548874.033149178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3602.9523023607444,
            "unit": "ns/iter",
            "extra": "iterations: 218732\ncpu: 3602.7467403031937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15871.783997519837,
            "unit": "ns/iter",
            "extra": "iterations: 51592\ncpu: 15870.503178787358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12472.981781750657,
            "unit": "ns/iter",
            "extra": "iterations: 64880\ncpu: 12472.481504315616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12099.451981514312,
            "unit": "ns/iter",
            "extra": "iterations: 67297\ncpu: 12099.141120703744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12371.428698443275,
            "unit": "ns/iter",
            "extra": "iterations: 66359\ncpu: 12371.00317967423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42670.24871660825,
            "unit": "ns/iter",
            "extra": "iterations: 19090\ncpu: 42667.24986904124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474688.2199270782,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 474661.30012150627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391535.9038031257,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 391509.12751677743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 386173.46767719433,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 386167.98930004286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385871.7411660748,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385858.52473498124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221309.80745659696,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 221296.34831460673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382232.7588652477,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 382211.70212765853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901182.6763484543,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1901039.419087131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739183.7703999954,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739143.2800000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3969.240016362867,
            "unit": "ns/iter",
            "extra": "iterations: 200453\ncpu: 3968.9353614064275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16953.001844299186,
            "unit": "ns/iter",
            "extra": "iterations: 48799\ncpu: 16952.095329822212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13397.480578445633,
            "unit": "ns/iter",
            "extra": "iterations: 61890\ncpu: 13396.52124737439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13168.599436834349,
            "unit": "ns/iter",
            "extra": "iterations: 62859\ncpu: 13167.969582716849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13326.617005861626,
            "unit": "ns/iter",
            "extra": "iterations: 62108\ncpu: 13325.811489663227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42754.202944323675,
            "unit": "ns/iter",
            "extra": "iterations: 19631\ncpu: 42752.254087922185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460258.93743373867,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460233.13891834876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380656.0184372531,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 380632.265144863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 380091.7604395771,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380060.96703296725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378930.5998252562,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 378899.8252512008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225550.22106361203,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 225539.70281543344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374530.4732528348,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374502.15703192464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.819739133154,
            "unit": "ns/iter",
            "extra": "iterations: 2313364\ncpu: 302.8125707843629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1528.3729279480297,
            "unit": "ns/iter",
            "extra": "iterations: 459086\ncpu: 1528.2628962765243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1212.234432873884,
            "unit": "ns/iter",
            "extra": "iterations: 578575\ncpu: 1212.166443417022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1145.0810208791304,
            "unit": "ns/iter",
            "extra": "iterations: 611904\ncpu: 1144.9954568036828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.9028775130904,
            "unit": "ns/iter",
            "extra": "iterations: 700744\ncpu: 997.8482869635721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7472.480498895221,
            "unit": "ns/iter",
            "extra": "iterations: 95892\ncpu: 7472.382471947687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19451.385572347954,
            "unit": "ns/iter",
            "extra": "iterations: 35931\ncpu: 19450.90868609275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4565.972721974013,
            "unit": "ns/iter",
            "extra": "iterations: 152687\ncpu: 4565.909343951975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4623.690112420497,
            "unit": "ns/iter",
            "extra": "iterations: 151129\ncpu: 4623.368115980362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4586.871450307724,
            "unit": "ns/iter",
            "extra": "iterations: 152478\ncpu: 4586.532483374681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9574.523336629996,
            "unit": "ns/iter",
            "extra": "iterations: 72804\ncpu: 9573.995934289309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8631.02303643064,
            "unit": "ns/iter",
            "extra": "iterations: 81306\ncpu: 8630.775096548834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3331.5579988792783,
            "unit": "ns/iter",
            "extra": "iterations: 208823\ncpu: 3331.3590935864263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16509.568995450994,
            "unit": "ns/iter",
            "extra": "iterations: 42626\ncpu: 16509.32529442129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13205.831004028163,
            "unit": "ns/iter",
            "extra": "iterations: 52877\ncpu: 13205.474970213809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13126.139163782764,
            "unit": "ns/iter",
            "extra": "iterations: 53455\ncpu: 13125.41389954182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13588.51837336645,
            "unit": "ns/iter",
            "extra": "iterations: 51542\ncpu: 13587.565480579033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28722.887898818153,
            "unit": "ns/iter",
            "extra": "iterations: 24353\ncpu: 28721.369030509384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101389.45297783129,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 101381.2490943333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87504.5350255145,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 87499.82580564862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86851.39162317087,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86850.27342779141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87264.09553428146,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87260.23137206185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55426.42291584631,
            "unit": "ns/iter",
            "extra": "iterations: 12655\ncpu: 55423.77716317663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85412.51326679811,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85407.12025316403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3045.1215381601983,
            "unit": "ns/iter",
            "extra": "iterations: 229755\ncpu: 3044.970076820985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15265.679468755834,
            "unit": "ns/iter",
            "extra": "iterations: 45930\ncpu: 15264.282603962494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12298.903485631485,
            "unit": "ns/iter",
            "extra": "iterations: 56862\ncpu: 12298.441841651736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11988.461170030216,
            "unit": "ns/iter",
            "extra": "iterations: 58460\ncpu: 11988.041395826147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12616.533056663675,
            "unit": "ns/iter",
            "extra": "iterations: 55662\ncpu: 12616.106140634758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28021.650782222485,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 28020.989877165277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98407.84104937811,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98404.1526374857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84426.42361027816,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84420.71626673143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83285.5012016353,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 83279.15164623842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83433.17447265089,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83430.96174472668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55906.20918936273,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 55904.937091892985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84112.25026955068,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 84106.43344914478 ns\nthreads: 1"
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
        "date": 1702490331135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.9930324260215,
            "unit": "ns/iter",
            "extra": "iterations: 969778\ncpu: 721.9837942291947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11198.127362970632,
            "unit": "ns/iter",
            "extra": "iterations: 74747\ncpu: 11197.442037807536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24700.25330049976,
            "unit": "ns/iter",
            "extra": "iterations: 33707\ncpu: 24699.12481087014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38733.66343086605,
            "unit": "ns/iter",
            "extra": "iterations: 21942\ncpu: 38732.70440251573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48352.05196067018,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 48348.43996600706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61331.22888920436,
            "unit": "ns/iter",
            "extra": "iterations: 14116\ncpu: 61327.56446585436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60450.333200003566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60444.63000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72091.68538696073,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 72086.98926454091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79493.90898258069,
            "unit": "ns/iter",
            "extra": "iterations: 10910\ncpu: 79487.52520623278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.189030565679,
            "unit": "ns/iter",
            "extra": "iterations: 1204620\ncpu: 579.1739303680839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.97942060529965,
            "unit": "ns/iter",
            "extra": "iterations: 1441539\ncpu: 483.9445897752335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.0973978107737,
            "unit": "ns/iter",
            "extra": "iterations: 1443400\ncpu: 486.07329915477305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.5707941322234,
            "unit": "ns/iter",
            "extra": "iterations: 1442669\ncpu: 484.54565808234656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 982.3944476446302,
            "unit": "ns/iter",
            "extra": "iterations: 716957\ncpu: 982.3434320328829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3642.1494510469092,
            "unit": "ns/iter",
            "extra": "iterations: 220875\ncpu: 3641.9142048670055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15400.471570838055,
            "unit": "ns/iter",
            "extra": "iterations: 53220\ncpu: 15399.768883878201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12143.034509429792,
            "unit": "ns/iter",
            "extra": "iterations: 67228\ncpu: 12142.126792407902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11917.084769466708,
            "unit": "ns/iter",
            "extra": "iterations: 68645\ncpu: 11916.513948576025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12070.383313626233,
            "unit": "ns/iter",
            "extra": "iterations: 67660\ncpu: 12069.595033993499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42004.800680919936,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 42002.08781855505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 478624.3722044783,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 478583.70607028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 377848.6454426537,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 377818.1421718264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378557.7487024269,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 378532.0934256051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 399904.4364111769,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 399877.78745644685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230809.49739177595,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 230798.82629108036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379506.77050614054,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379480.8464223387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904138.7958763735,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1903971.5463917558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748707.1657326103,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 748682.305844674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2549373.7486185357,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2548874.033149178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3602.9523023607444,
            "unit": "ns/iter",
            "extra": "iterations: 218732\ncpu: 3602.7467403031937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15871.783997519837,
            "unit": "ns/iter",
            "extra": "iterations: 51592\ncpu: 15870.503178787358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12472.981781750657,
            "unit": "ns/iter",
            "extra": "iterations: 64880\ncpu: 12472.481504315616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12099.451981514312,
            "unit": "ns/iter",
            "extra": "iterations: 67297\ncpu: 12099.141120703744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12371.428698443275,
            "unit": "ns/iter",
            "extra": "iterations: 66359\ncpu: 12371.00317967423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42670.24871660825,
            "unit": "ns/iter",
            "extra": "iterations: 19090\ncpu: 42667.24986904124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474688.2199270782,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 474661.30012150627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391535.9038031257,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 391509.12751677743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 386173.46767719433,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 386167.98930004286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385871.7411660748,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385858.52473498124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221309.80745659696,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 221296.34831460673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382232.7588652477,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 382211.70212765853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901182.6763484543,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1901039.419087131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739183.7703999954,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739143.2800000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3969.240016362867,
            "unit": "ns/iter",
            "extra": "iterations: 200453\ncpu: 3968.9353614064275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16953.001844299186,
            "unit": "ns/iter",
            "extra": "iterations: 48799\ncpu: 16952.095329822212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13397.480578445633,
            "unit": "ns/iter",
            "extra": "iterations: 61890\ncpu: 13396.52124737439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13168.599436834349,
            "unit": "ns/iter",
            "extra": "iterations: 62859\ncpu: 13167.969582716849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13326.617005861626,
            "unit": "ns/iter",
            "extra": "iterations: 62108\ncpu: 13325.811489663227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42754.202944323675,
            "unit": "ns/iter",
            "extra": "iterations: 19631\ncpu: 42752.254087922185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460258.93743373867,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460233.13891834876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380656.0184372531,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 380632.265144863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 380091.7604395771,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380060.96703296725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378930.5998252562,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 378899.8252512008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225550.22106361203,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 225539.70281543344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374530.4732528348,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374502.15703192464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.819739133154,
            "unit": "ns/iter",
            "extra": "iterations: 2313364\ncpu: 302.8125707843629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1528.3729279480297,
            "unit": "ns/iter",
            "extra": "iterations: 459086\ncpu: 1528.2628962765243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1212.234432873884,
            "unit": "ns/iter",
            "extra": "iterations: 578575\ncpu: 1212.166443417022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1145.0810208791304,
            "unit": "ns/iter",
            "extra": "iterations: 611904\ncpu: 1144.9954568036828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.9028775130904,
            "unit": "ns/iter",
            "extra": "iterations: 700744\ncpu: 997.8482869635721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7472.480498895221,
            "unit": "ns/iter",
            "extra": "iterations: 95892\ncpu: 7472.382471947687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19451.385572347954,
            "unit": "ns/iter",
            "extra": "iterations: 35931\ncpu: 19450.90868609275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4565.972721974013,
            "unit": "ns/iter",
            "extra": "iterations: 152687\ncpu: 4565.909343951975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4623.690112420497,
            "unit": "ns/iter",
            "extra": "iterations: 151129\ncpu: 4623.368115980362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4586.871450307724,
            "unit": "ns/iter",
            "extra": "iterations: 152478\ncpu: 4586.532483374681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9574.523336629996,
            "unit": "ns/iter",
            "extra": "iterations: 72804\ncpu: 9573.995934289309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8631.02303643064,
            "unit": "ns/iter",
            "extra": "iterations: 81306\ncpu: 8630.775096548834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3331.5579988792783,
            "unit": "ns/iter",
            "extra": "iterations: 208823\ncpu: 3331.3590935864263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16509.568995450994,
            "unit": "ns/iter",
            "extra": "iterations: 42626\ncpu: 16509.32529442129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13205.831004028163,
            "unit": "ns/iter",
            "extra": "iterations: 52877\ncpu: 13205.474970213809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13126.139163782764,
            "unit": "ns/iter",
            "extra": "iterations: 53455\ncpu: 13125.41389954182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13588.51837336645,
            "unit": "ns/iter",
            "extra": "iterations: 51542\ncpu: 13587.565480579033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28722.887898818153,
            "unit": "ns/iter",
            "extra": "iterations: 24353\ncpu: 28721.369030509384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101389.45297783129,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 101381.2490943333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87504.5350255145,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 87499.82580564862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86851.39162317087,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86850.27342779141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87264.09553428146,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87260.23137206185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55426.42291584631,
            "unit": "ns/iter",
            "extra": "iterations: 12655\ncpu: 55423.77716317663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85412.51326679811,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85407.12025316403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3045.1215381601983,
            "unit": "ns/iter",
            "extra": "iterations: 229755\ncpu: 3044.970076820985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15265.679468755834,
            "unit": "ns/iter",
            "extra": "iterations: 45930\ncpu: 15264.282603962494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12298.903485631485,
            "unit": "ns/iter",
            "extra": "iterations: 56862\ncpu: 12298.441841651736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11988.461170030216,
            "unit": "ns/iter",
            "extra": "iterations: 58460\ncpu: 11988.041395826147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12616.533056663675,
            "unit": "ns/iter",
            "extra": "iterations: 55662\ncpu: 12616.106140634758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28021.650782222485,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 28020.989877165277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98407.84104937811,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98404.1526374857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84426.42361027816,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84420.71626673143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83285.5012016353,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 83279.15164623842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83433.17447265089,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83430.96174472668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55906.20918936273,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 55904.937091892985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84112.25026955068,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 84106.43344914478 ns\nthreads: 1"
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
        "date": 1702490331135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.9930324260215,
            "unit": "ns/iter",
            "extra": "iterations: 969778\ncpu: 721.9837942291947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11198.127362970632,
            "unit": "ns/iter",
            "extra": "iterations: 74747\ncpu: 11197.442037807536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24700.25330049976,
            "unit": "ns/iter",
            "extra": "iterations: 33707\ncpu: 24699.12481087014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38733.66343086605,
            "unit": "ns/iter",
            "extra": "iterations: 21942\ncpu: 38732.70440251573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48352.05196067018,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 48348.43996600706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61331.22888920436,
            "unit": "ns/iter",
            "extra": "iterations: 14116\ncpu: 61327.56446585436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60450.333200003566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60444.63000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72091.68538696073,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 72086.98926454091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79493.90898258069,
            "unit": "ns/iter",
            "extra": "iterations: 10910\ncpu: 79487.52520623278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.189030565679,
            "unit": "ns/iter",
            "extra": "iterations: 1204620\ncpu: 579.1739303680839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.97942060529965,
            "unit": "ns/iter",
            "extra": "iterations: 1441539\ncpu: 483.9445897752335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.0973978107737,
            "unit": "ns/iter",
            "extra": "iterations: 1443400\ncpu: 486.07329915477305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.5707941322234,
            "unit": "ns/iter",
            "extra": "iterations: 1442669\ncpu: 484.54565808234656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 982.3944476446302,
            "unit": "ns/iter",
            "extra": "iterations: 716957\ncpu: 982.3434320328829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3642.1494510469092,
            "unit": "ns/iter",
            "extra": "iterations: 220875\ncpu: 3641.9142048670055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15400.471570838055,
            "unit": "ns/iter",
            "extra": "iterations: 53220\ncpu: 15399.768883878201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12143.034509429792,
            "unit": "ns/iter",
            "extra": "iterations: 67228\ncpu: 12142.126792407902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11917.084769466708,
            "unit": "ns/iter",
            "extra": "iterations: 68645\ncpu: 11916.513948576025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12070.383313626233,
            "unit": "ns/iter",
            "extra": "iterations: 67660\ncpu: 12069.595033993499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42004.800680919936,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 42002.08781855505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 478624.3722044783,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 478583.70607028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 377848.6454426537,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 377818.1421718264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378557.7487024269,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 378532.0934256051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 399904.4364111769,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 399877.78745644685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230809.49739177595,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 230798.82629108036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379506.77050614054,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379480.8464223387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904138.7958763735,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1903971.5463917558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748707.1657326103,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 748682.305844674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2549373.7486185357,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2548874.033149178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3602.9523023607444,
            "unit": "ns/iter",
            "extra": "iterations: 218732\ncpu: 3602.7467403031937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15871.783997519837,
            "unit": "ns/iter",
            "extra": "iterations: 51592\ncpu: 15870.503178787358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12472.981781750657,
            "unit": "ns/iter",
            "extra": "iterations: 64880\ncpu: 12472.481504315616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12099.451981514312,
            "unit": "ns/iter",
            "extra": "iterations: 67297\ncpu: 12099.141120703744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12371.428698443275,
            "unit": "ns/iter",
            "extra": "iterations: 66359\ncpu: 12371.00317967423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42670.24871660825,
            "unit": "ns/iter",
            "extra": "iterations: 19090\ncpu: 42667.24986904124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474688.2199270782,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 474661.30012150627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391535.9038031257,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 391509.12751677743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 386173.46767719433,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 386167.98930004286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385871.7411660748,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385858.52473498124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221309.80745659696,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 221296.34831460673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382232.7588652477,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 382211.70212765853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901182.6763484543,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1901039.419087131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739183.7703999954,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739143.2800000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3969.240016362867,
            "unit": "ns/iter",
            "extra": "iterations: 200453\ncpu: 3968.9353614064275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16953.001844299186,
            "unit": "ns/iter",
            "extra": "iterations: 48799\ncpu: 16952.095329822212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13397.480578445633,
            "unit": "ns/iter",
            "extra": "iterations: 61890\ncpu: 13396.52124737439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13168.599436834349,
            "unit": "ns/iter",
            "extra": "iterations: 62859\ncpu: 13167.969582716849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13326.617005861626,
            "unit": "ns/iter",
            "extra": "iterations: 62108\ncpu: 13325.811489663227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42754.202944323675,
            "unit": "ns/iter",
            "extra": "iterations: 19631\ncpu: 42752.254087922185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460258.93743373867,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460233.13891834876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380656.0184372531,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 380632.265144863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 380091.7604395771,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380060.96703296725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378930.5998252562,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 378899.8252512008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225550.22106361203,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 225539.70281543344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374530.4732528348,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374502.15703192464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.819739133154,
            "unit": "ns/iter",
            "extra": "iterations: 2313364\ncpu: 302.8125707843629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1528.3729279480297,
            "unit": "ns/iter",
            "extra": "iterations: 459086\ncpu: 1528.2628962765243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1212.234432873884,
            "unit": "ns/iter",
            "extra": "iterations: 578575\ncpu: 1212.166443417022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1145.0810208791304,
            "unit": "ns/iter",
            "extra": "iterations: 611904\ncpu: 1144.9954568036828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.9028775130904,
            "unit": "ns/iter",
            "extra": "iterations: 700744\ncpu: 997.8482869635721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7472.480498895221,
            "unit": "ns/iter",
            "extra": "iterations: 95892\ncpu: 7472.382471947687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19451.385572347954,
            "unit": "ns/iter",
            "extra": "iterations: 35931\ncpu: 19450.90868609275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4565.972721974013,
            "unit": "ns/iter",
            "extra": "iterations: 152687\ncpu: 4565.909343951975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4623.690112420497,
            "unit": "ns/iter",
            "extra": "iterations: 151129\ncpu: 4623.368115980362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4586.871450307724,
            "unit": "ns/iter",
            "extra": "iterations: 152478\ncpu: 4586.532483374681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9574.523336629996,
            "unit": "ns/iter",
            "extra": "iterations: 72804\ncpu: 9573.995934289309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8631.02303643064,
            "unit": "ns/iter",
            "extra": "iterations: 81306\ncpu: 8630.775096548834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3331.5579988792783,
            "unit": "ns/iter",
            "extra": "iterations: 208823\ncpu: 3331.3590935864263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16509.568995450994,
            "unit": "ns/iter",
            "extra": "iterations: 42626\ncpu: 16509.32529442129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13205.831004028163,
            "unit": "ns/iter",
            "extra": "iterations: 52877\ncpu: 13205.474970213809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13126.139163782764,
            "unit": "ns/iter",
            "extra": "iterations: 53455\ncpu: 13125.41389954182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13588.51837336645,
            "unit": "ns/iter",
            "extra": "iterations: 51542\ncpu: 13587.565480579033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28722.887898818153,
            "unit": "ns/iter",
            "extra": "iterations: 24353\ncpu: 28721.369030509384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101389.45297783129,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 101381.2490943333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87504.5350255145,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 87499.82580564862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86851.39162317087,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86850.27342779141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87264.09553428146,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87260.23137206185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55426.42291584631,
            "unit": "ns/iter",
            "extra": "iterations: 12655\ncpu: 55423.77716317663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85412.51326679811,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85407.12025316403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3045.1215381601983,
            "unit": "ns/iter",
            "extra": "iterations: 229755\ncpu: 3044.970076820985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15265.679468755834,
            "unit": "ns/iter",
            "extra": "iterations: 45930\ncpu: 15264.282603962494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12298.903485631485,
            "unit": "ns/iter",
            "extra": "iterations: 56862\ncpu: 12298.441841651736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11988.461170030216,
            "unit": "ns/iter",
            "extra": "iterations: 58460\ncpu: 11988.041395826147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12616.533056663675,
            "unit": "ns/iter",
            "extra": "iterations: 55662\ncpu: 12616.106140634758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28021.650782222485,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 28020.989877165277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98407.84104937811,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98404.1526374857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84426.42361027816,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84420.71626673143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83285.5012016353,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 83279.15164623842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83433.17447265089,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83430.96174472668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55906.20918936273,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 55904.937091892985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84112.25026955068,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 84106.43344914478 ns\nthreads: 1"
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
        "date": 1702490331135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.9930324260215,
            "unit": "ns/iter",
            "extra": "iterations: 969778\ncpu: 721.9837942291947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11198.127362970632,
            "unit": "ns/iter",
            "extra": "iterations: 74747\ncpu: 11197.442037807536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24700.25330049976,
            "unit": "ns/iter",
            "extra": "iterations: 33707\ncpu: 24699.12481087014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38733.66343086605,
            "unit": "ns/iter",
            "extra": "iterations: 21942\ncpu: 38732.70440251573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48352.05196067018,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 48348.43996600706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61331.22888920436,
            "unit": "ns/iter",
            "extra": "iterations: 14116\ncpu: 61327.56446585436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60450.333200003566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60444.63000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72091.68538696073,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 72086.98926454091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79493.90898258069,
            "unit": "ns/iter",
            "extra": "iterations: 10910\ncpu: 79487.52520623278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.189030565679,
            "unit": "ns/iter",
            "extra": "iterations: 1204620\ncpu: 579.1739303680839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.97942060529965,
            "unit": "ns/iter",
            "extra": "iterations: 1441539\ncpu: 483.9445897752335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.0973978107737,
            "unit": "ns/iter",
            "extra": "iterations: 1443400\ncpu: 486.07329915477305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.5707941322234,
            "unit": "ns/iter",
            "extra": "iterations: 1442669\ncpu: 484.54565808234656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 982.3944476446302,
            "unit": "ns/iter",
            "extra": "iterations: 716957\ncpu: 982.3434320328829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3642.1494510469092,
            "unit": "ns/iter",
            "extra": "iterations: 220875\ncpu: 3641.9142048670055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15400.471570838055,
            "unit": "ns/iter",
            "extra": "iterations: 53220\ncpu: 15399.768883878201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12143.034509429792,
            "unit": "ns/iter",
            "extra": "iterations: 67228\ncpu: 12142.126792407902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11917.084769466708,
            "unit": "ns/iter",
            "extra": "iterations: 68645\ncpu: 11916.513948576025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12070.383313626233,
            "unit": "ns/iter",
            "extra": "iterations: 67660\ncpu: 12069.595033993499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42004.800680919936,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 42002.08781855505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 478624.3722044783,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 478583.70607028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 377848.6454426537,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 377818.1421718264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378557.7487024269,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 378532.0934256051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 399904.4364111769,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 399877.78745644685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230809.49739177595,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 230798.82629108036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379506.77050614054,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379480.8464223387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904138.7958763735,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1903971.5463917558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748707.1657326103,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 748682.305844674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2549373.7486185357,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2548874.033149178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3602.9523023607444,
            "unit": "ns/iter",
            "extra": "iterations: 218732\ncpu: 3602.7467403031937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15871.783997519837,
            "unit": "ns/iter",
            "extra": "iterations: 51592\ncpu: 15870.503178787358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12472.981781750657,
            "unit": "ns/iter",
            "extra": "iterations: 64880\ncpu: 12472.481504315616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12099.451981514312,
            "unit": "ns/iter",
            "extra": "iterations: 67297\ncpu: 12099.141120703744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12371.428698443275,
            "unit": "ns/iter",
            "extra": "iterations: 66359\ncpu: 12371.00317967423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42670.24871660825,
            "unit": "ns/iter",
            "extra": "iterations: 19090\ncpu: 42667.24986904124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474688.2199270782,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 474661.30012150627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391535.9038031257,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 391509.12751677743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 386173.46767719433,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 386167.98930004286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385871.7411660748,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385858.52473498124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221309.80745659696,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 221296.34831460673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382232.7588652477,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 382211.70212765853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901182.6763484543,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1901039.419087131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739183.7703999954,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739143.2800000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3969.240016362867,
            "unit": "ns/iter",
            "extra": "iterations: 200453\ncpu: 3968.9353614064275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16953.001844299186,
            "unit": "ns/iter",
            "extra": "iterations: 48799\ncpu: 16952.095329822212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13397.480578445633,
            "unit": "ns/iter",
            "extra": "iterations: 61890\ncpu: 13396.52124737439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13168.599436834349,
            "unit": "ns/iter",
            "extra": "iterations: 62859\ncpu: 13167.969582716849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13326.617005861626,
            "unit": "ns/iter",
            "extra": "iterations: 62108\ncpu: 13325.811489663227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42754.202944323675,
            "unit": "ns/iter",
            "extra": "iterations: 19631\ncpu: 42752.254087922185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460258.93743373867,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460233.13891834876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380656.0184372531,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 380632.265144863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 380091.7604395771,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380060.96703296725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378930.5998252562,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 378899.8252512008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225550.22106361203,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 225539.70281543344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374530.4732528348,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374502.15703192464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.819739133154,
            "unit": "ns/iter",
            "extra": "iterations: 2313364\ncpu: 302.8125707843629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1528.3729279480297,
            "unit": "ns/iter",
            "extra": "iterations: 459086\ncpu: 1528.2628962765243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1212.234432873884,
            "unit": "ns/iter",
            "extra": "iterations: 578575\ncpu: 1212.166443417022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1145.0810208791304,
            "unit": "ns/iter",
            "extra": "iterations: 611904\ncpu: 1144.9954568036828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.9028775130904,
            "unit": "ns/iter",
            "extra": "iterations: 700744\ncpu: 997.8482869635721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7472.480498895221,
            "unit": "ns/iter",
            "extra": "iterations: 95892\ncpu: 7472.382471947687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19451.385572347954,
            "unit": "ns/iter",
            "extra": "iterations: 35931\ncpu: 19450.90868609275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4565.972721974013,
            "unit": "ns/iter",
            "extra": "iterations: 152687\ncpu: 4565.909343951975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4623.690112420497,
            "unit": "ns/iter",
            "extra": "iterations: 151129\ncpu: 4623.368115980362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4586.871450307724,
            "unit": "ns/iter",
            "extra": "iterations: 152478\ncpu: 4586.532483374681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9574.523336629996,
            "unit": "ns/iter",
            "extra": "iterations: 72804\ncpu: 9573.995934289309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8631.02303643064,
            "unit": "ns/iter",
            "extra": "iterations: 81306\ncpu: 8630.775096548834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3331.5579988792783,
            "unit": "ns/iter",
            "extra": "iterations: 208823\ncpu: 3331.3590935864263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16509.568995450994,
            "unit": "ns/iter",
            "extra": "iterations: 42626\ncpu: 16509.32529442129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13205.831004028163,
            "unit": "ns/iter",
            "extra": "iterations: 52877\ncpu: 13205.474970213809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13126.139163782764,
            "unit": "ns/iter",
            "extra": "iterations: 53455\ncpu: 13125.41389954182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13588.51837336645,
            "unit": "ns/iter",
            "extra": "iterations: 51542\ncpu: 13587.565480579033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28722.887898818153,
            "unit": "ns/iter",
            "extra": "iterations: 24353\ncpu: 28721.369030509384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101389.45297783129,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 101381.2490943333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87504.5350255145,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 87499.82580564862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86851.39162317087,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86850.27342779141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87264.09553428146,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87260.23137206185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55426.42291584631,
            "unit": "ns/iter",
            "extra": "iterations: 12655\ncpu: 55423.77716317663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85412.51326679811,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85407.12025316403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3045.1215381601983,
            "unit": "ns/iter",
            "extra": "iterations: 229755\ncpu: 3044.970076820985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15265.679468755834,
            "unit": "ns/iter",
            "extra": "iterations: 45930\ncpu: 15264.282603962494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12298.903485631485,
            "unit": "ns/iter",
            "extra": "iterations: 56862\ncpu: 12298.441841651736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11988.461170030216,
            "unit": "ns/iter",
            "extra": "iterations: 58460\ncpu: 11988.041395826147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12616.533056663675,
            "unit": "ns/iter",
            "extra": "iterations: 55662\ncpu: 12616.106140634758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28021.650782222485,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 28020.989877165277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98407.84104937811,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98404.1526374857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84426.42361027816,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84420.71626673143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83285.5012016353,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 83279.15164623842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83433.17447265089,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83430.96174472668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55906.20918936273,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 55904.937091892985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84112.25026955068,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 84106.43344914478 ns\nthreads: 1"
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
        "date": 1702490331135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.9930324260215,
            "unit": "ns/iter",
            "extra": "iterations: 969778\ncpu: 721.9837942291947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11198.127362970632,
            "unit": "ns/iter",
            "extra": "iterations: 74747\ncpu: 11197.442037807536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24700.25330049976,
            "unit": "ns/iter",
            "extra": "iterations: 33707\ncpu: 24699.12481087014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38733.66343086605,
            "unit": "ns/iter",
            "extra": "iterations: 21942\ncpu: 38732.70440251573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48352.05196067018,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 48348.43996600706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61331.22888920436,
            "unit": "ns/iter",
            "extra": "iterations: 14116\ncpu: 61327.56446585436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60450.333200003566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60444.63000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72091.68538696073,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 72086.98926454091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79493.90898258069,
            "unit": "ns/iter",
            "extra": "iterations: 10910\ncpu: 79487.52520623278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.189030565679,
            "unit": "ns/iter",
            "extra": "iterations: 1204620\ncpu: 579.1739303680839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.97942060529965,
            "unit": "ns/iter",
            "extra": "iterations: 1441539\ncpu: 483.9445897752335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.0973978107737,
            "unit": "ns/iter",
            "extra": "iterations: 1443400\ncpu: 486.07329915477305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.5707941322234,
            "unit": "ns/iter",
            "extra": "iterations: 1442669\ncpu: 484.54565808234656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 982.3944476446302,
            "unit": "ns/iter",
            "extra": "iterations: 716957\ncpu: 982.3434320328829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3642.1494510469092,
            "unit": "ns/iter",
            "extra": "iterations: 220875\ncpu: 3641.9142048670055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15400.471570838055,
            "unit": "ns/iter",
            "extra": "iterations: 53220\ncpu: 15399.768883878201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12143.034509429792,
            "unit": "ns/iter",
            "extra": "iterations: 67228\ncpu: 12142.126792407902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11917.084769466708,
            "unit": "ns/iter",
            "extra": "iterations: 68645\ncpu: 11916.513948576025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12070.383313626233,
            "unit": "ns/iter",
            "extra": "iterations: 67660\ncpu: 12069.595033993499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42004.800680919936,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 42002.08781855505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 478624.3722044783,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 478583.70607028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 377848.6454426537,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 377818.1421718264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378557.7487024269,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 378532.0934256051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 399904.4364111769,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 399877.78745644685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230809.49739177595,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 230798.82629108036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379506.77050614054,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379480.8464223387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904138.7958763735,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1903971.5463917558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748707.1657326103,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 748682.305844674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2549373.7486185357,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2548874.033149178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3602.9523023607444,
            "unit": "ns/iter",
            "extra": "iterations: 218732\ncpu: 3602.7467403031937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15871.783997519837,
            "unit": "ns/iter",
            "extra": "iterations: 51592\ncpu: 15870.503178787358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12472.981781750657,
            "unit": "ns/iter",
            "extra": "iterations: 64880\ncpu: 12472.481504315616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12099.451981514312,
            "unit": "ns/iter",
            "extra": "iterations: 67297\ncpu: 12099.141120703744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12371.428698443275,
            "unit": "ns/iter",
            "extra": "iterations: 66359\ncpu: 12371.00317967423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42670.24871660825,
            "unit": "ns/iter",
            "extra": "iterations: 19090\ncpu: 42667.24986904124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474688.2199270782,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 474661.30012150627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391535.9038031257,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 391509.12751677743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 386173.46767719433,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 386167.98930004286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385871.7411660748,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385858.52473498124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221309.80745659696,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 221296.34831460673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382232.7588652477,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 382211.70212765853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901182.6763484543,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1901039.419087131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739183.7703999954,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739143.2800000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3969.240016362867,
            "unit": "ns/iter",
            "extra": "iterations: 200453\ncpu: 3968.9353614064275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16953.001844299186,
            "unit": "ns/iter",
            "extra": "iterations: 48799\ncpu: 16952.095329822212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13397.480578445633,
            "unit": "ns/iter",
            "extra": "iterations: 61890\ncpu: 13396.52124737439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13168.599436834349,
            "unit": "ns/iter",
            "extra": "iterations: 62859\ncpu: 13167.969582716849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13326.617005861626,
            "unit": "ns/iter",
            "extra": "iterations: 62108\ncpu: 13325.811489663227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42754.202944323675,
            "unit": "ns/iter",
            "extra": "iterations: 19631\ncpu: 42752.254087922185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460258.93743373867,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460233.13891834876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380656.0184372531,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 380632.265144863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 380091.7604395771,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380060.96703296725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378930.5998252562,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 378899.8252512008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225550.22106361203,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 225539.70281543344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374530.4732528348,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374502.15703192464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.819739133154,
            "unit": "ns/iter",
            "extra": "iterations: 2313364\ncpu: 302.8125707843629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1528.3729279480297,
            "unit": "ns/iter",
            "extra": "iterations: 459086\ncpu: 1528.2628962765243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1212.234432873884,
            "unit": "ns/iter",
            "extra": "iterations: 578575\ncpu: 1212.166443417022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1145.0810208791304,
            "unit": "ns/iter",
            "extra": "iterations: 611904\ncpu: 1144.9954568036828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.9028775130904,
            "unit": "ns/iter",
            "extra": "iterations: 700744\ncpu: 997.8482869635721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7472.480498895221,
            "unit": "ns/iter",
            "extra": "iterations: 95892\ncpu: 7472.382471947687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19451.385572347954,
            "unit": "ns/iter",
            "extra": "iterations: 35931\ncpu: 19450.90868609275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4565.972721974013,
            "unit": "ns/iter",
            "extra": "iterations: 152687\ncpu: 4565.909343951975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4623.690112420497,
            "unit": "ns/iter",
            "extra": "iterations: 151129\ncpu: 4623.368115980362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4586.871450307724,
            "unit": "ns/iter",
            "extra": "iterations: 152478\ncpu: 4586.532483374681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9574.523336629996,
            "unit": "ns/iter",
            "extra": "iterations: 72804\ncpu: 9573.995934289309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8631.02303643064,
            "unit": "ns/iter",
            "extra": "iterations: 81306\ncpu: 8630.775096548834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3331.5579988792783,
            "unit": "ns/iter",
            "extra": "iterations: 208823\ncpu: 3331.3590935864263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16509.568995450994,
            "unit": "ns/iter",
            "extra": "iterations: 42626\ncpu: 16509.32529442129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13205.831004028163,
            "unit": "ns/iter",
            "extra": "iterations: 52877\ncpu: 13205.474970213809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13126.139163782764,
            "unit": "ns/iter",
            "extra": "iterations: 53455\ncpu: 13125.41389954182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13588.51837336645,
            "unit": "ns/iter",
            "extra": "iterations: 51542\ncpu: 13587.565480579033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28722.887898818153,
            "unit": "ns/iter",
            "extra": "iterations: 24353\ncpu: 28721.369030509384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101389.45297783129,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 101381.2490943333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87504.5350255145,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 87499.82580564862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86851.39162317087,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86850.27342779141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87264.09553428146,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87260.23137206185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55426.42291584631,
            "unit": "ns/iter",
            "extra": "iterations: 12655\ncpu: 55423.77716317663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85412.51326679811,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85407.12025316403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3045.1215381601983,
            "unit": "ns/iter",
            "extra": "iterations: 229755\ncpu: 3044.970076820985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15265.679468755834,
            "unit": "ns/iter",
            "extra": "iterations: 45930\ncpu: 15264.282603962494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12298.903485631485,
            "unit": "ns/iter",
            "extra": "iterations: 56862\ncpu: 12298.441841651736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11988.461170030216,
            "unit": "ns/iter",
            "extra": "iterations: 58460\ncpu: 11988.041395826147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12616.533056663675,
            "unit": "ns/iter",
            "extra": "iterations: 55662\ncpu: 12616.106140634758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28021.650782222485,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 28020.989877165277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98407.84104937811,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98404.1526374857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84426.42361027816,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84420.71626673143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83285.5012016353,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 83279.15164623842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83433.17447265089,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83430.96174472668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55906.20918936273,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 55904.937091892985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84112.25026955068,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 84106.43344914478 ns\nthreads: 1"
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
        "date": 1702490331135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 721.9930324260215,
            "unit": "ns/iter",
            "extra": "iterations: 969778\ncpu: 721.9837942291947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11198.127362970632,
            "unit": "ns/iter",
            "extra": "iterations: 74747\ncpu: 11197.442037807536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24700.25330049976,
            "unit": "ns/iter",
            "extra": "iterations: 33707\ncpu: 24699.12481087014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38733.66343086605,
            "unit": "ns/iter",
            "extra": "iterations: 21942\ncpu: 38732.70440251573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48352.05196067018,
            "unit": "ns/iter",
            "extra": "iterations: 16474\ncpu: 48348.43996600706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61331.22888920436,
            "unit": "ns/iter",
            "extra": "iterations: 14116\ncpu: 61327.56446585436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60450.333200003566,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60444.63000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72091.68538696073,
            "unit": "ns/iter",
            "extra": "iterations: 12482\ncpu: 72086.98926454091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79493.90898258069,
            "unit": "ns/iter",
            "extra": "iterations: 10910\ncpu: 79487.52520623278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.189030565679,
            "unit": "ns/iter",
            "extra": "iterations: 1204620\ncpu: 579.1739303680839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 483.97942060529965,
            "unit": "ns/iter",
            "extra": "iterations: 1441539\ncpu: 483.9445897752335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 486.0973978107737,
            "unit": "ns/iter",
            "extra": "iterations: 1443400\ncpu: 486.07329915477305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.5707941322234,
            "unit": "ns/iter",
            "extra": "iterations: 1442669\ncpu: 484.54565808234656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 982.3944476446302,
            "unit": "ns/iter",
            "extra": "iterations: 716957\ncpu: 982.3434320328829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3642.1494510469092,
            "unit": "ns/iter",
            "extra": "iterations: 220875\ncpu: 3641.9142048670055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15400.471570838055,
            "unit": "ns/iter",
            "extra": "iterations: 53220\ncpu: 15399.768883878201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12143.034509429792,
            "unit": "ns/iter",
            "extra": "iterations: 67228\ncpu: 12142.126792407902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11917.084769466708,
            "unit": "ns/iter",
            "extra": "iterations: 68645\ncpu: 11916.513948576025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12070.383313626233,
            "unit": "ns/iter",
            "extra": "iterations: 67660\ncpu: 12069.595033993499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42004.800680919936,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 42002.08781855505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 478624.3722044783,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 478583.70607028616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 377848.6454426537,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 377818.1421718264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 378557.7487024269,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 378532.0934256051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 399904.4364111769,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 399877.78745644685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230809.49739177595,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 230798.82629108036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 379506.77050614054,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379480.8464223387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1904138.7958763735,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1903971.5463917558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748707.1657326103,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 748682.305844674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2549373.7486185357,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2548874.033149178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3602.9523023607444,
            "unit": "ns/iter",
            "extra": "iterations: 218732\ncpu: 3602.7467403031937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15871.783997519837,
            "unit": "ns/iter",
            "extra": "iterations: 51592\ncpu: 15870.503178787358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12472.981781750657,
            "unit": "ns/iter",
            "extra": "iterations: 64880\ncpu: 12472.481504315616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12099.451981514312,
            "unit": "ns/iter",
            "extra": "iterations: 67297\ncpu: 12099.141120703744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12371.428698443275,
            "unit": "ns/iter",
            "extra": "iterations: 66359\ncpu: 12371.00317967423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42670.24871660825,
            "unit": "ns/iter",
            "extra": "iterations: 19090\ncpu: 42667.24986904124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 474688.2199270782,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 474661.30012150627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391535.9038031257,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 391509.12751677743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 386173.46767719433,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 386167.98930004286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385871.7411660748,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385858.52473498124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221309.80745659696,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 221296.34831460673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382232.7588652477,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 382211.70212765853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1901182.6763484543,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1901039.419087131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 739183.7703999954,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 739143.2800000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3969.240016362867,
            "unit": "ns/iter",
            "extra": "iterations: 200453\ncpu: 3968.9353614064275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16953.001844299186,
            "unit": "ns/iter",
            "extra": "iterations: 48799\ncpu: 16952.095329822212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13397.480578445633,
            "unit": "ns/iter",
            "extra": "iterations: 61890\ncpu: 13396.52124737439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13168.599436834349,
            "unit": "ns/iter",
            "extra": "iterations: 62859\ncpu: 13167.969582716849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13326.617005861626,
            "unit": "ns/iter",
            "extra": "iterations: 62108\ncpu: 13325.811489663227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42754.202944323675,
            "unit": "ns/iter",
            "extra": "iterations: 19631\ncpu: 42752.254087922185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460258.93743373867,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 460233.13891834876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380656.0184372531,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 380632.265144863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 380091.7604395771,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380060.96703296725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378930.5998252562,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 378899.8252512008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225550.22106361203,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 225539.70281543344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374530.4732528348,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 374502.15703192464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.819739133154,
            "unit": "ns/iter",
            "extra": "iterations: 2313364\ncpu: 302.8125707843629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1528.3729279480297,
            "unit": "ns/iter",
            "extra": "iterations: 459086\ncpu: 1528.2628962765243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1212.234432873884,
            "unit": "ns/iter",
            "extra": "iterations: 578575\ncpu: 1212.166443417022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1145.0810208791304,
            "unit": "ns/iter",
            "extra": "iterations: 611904\ncpu: 1144.9954568036828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 997.9028775130904,
            "unit": "ns/iter",
            "extra": "iterations: 700744\ncpu: 997.8482869635721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7472.480498895221,
            "unit": "ns/iter",
            "extra": "iterations: 95892\ncpu: 7472.382471947687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19451.385572347954,
            "unit": "ns/iter",
            "extra": "iterations: 35931\ncpu: 19450.90868609275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4565.972721974013,
            "unit": "ns/iter",
            "extra": "iterations: 152687\ncpu: 4565.909343951975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4623.690112420497,
            "unit": "ns/iter",
            "extra": "iterations: 151129\ncpu: 4623.368115980362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4586.871450307724,
            "unit": "ns/iter",
            "extra": "iterations: 152478\ncpu: 4586.532483374681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9574.523336629996,
            "unit": "ns/iter",
            "extra": "iterations: 72804\ncpu: 9573.995934289309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8631.02303643064,
            "unit": "ns/iter",
            "extra": "iterations: 81306\ncpu: 8630.775096548834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3331.5579988792783,
            "unit": "ns/iter",
            "extra": "iterations: 208823\ncpu: 3331.3590935864263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16509.568995450994,
            "unit": "ns/iter",
            "extra": "iterations: 42626\ncpu: 16509.32529442129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13205.831004028163,
            "unit": "ns/iter",
            "extra": "iterations: 52877\ncpu: 13205.474970213809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13126.139163782764,
            "unit": "ns/iter",
            "extra": "iterations: 53455\ncpu: 13125.41389954182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13588.51837336645,
            "unit": "ns/iter",
            "extra": "iterations: 51542\ncpu: 13587.565480579033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28722.887898818153,
            "unit": "ns/iter",
            "extra": "iterations: 24353\ncpu: 28721.369030509384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101389.45297783129,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 101381.2490943333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87504.5350255145,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 87499.82580564862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86851.39162317087,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86850.27342779141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87264.09553428146,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 87260.23137206185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55426.42291584631,
            "unit": "ns/iter",
            "extra": "iterations: 12655\ncpu: 55423.77716317663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85412.51326679811,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85407.12025316403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3045.1215381601983,
            "unit": "ns/iter",
            "extra": "iterations: 229755\ncpu: 3044.970076820985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15265.679468755834,
            "unit": "ns/iter",
            "extra": "iterations: 45930\ncpu: 15264.282603962494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12298.903485631485,
            "unit": "ns/iter",
            "extra": "iterations: 56862\ncpu: 12298.441841651736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11988.461170030216,
            "unit": "ns/iter",
            "extra": "iterations: 58460\ncpu: 11988.041395826147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12616.533056663675,
            "unit": "ns/iter",
            "extra": "iterations: 55662\ncpu: 12616.106140634758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28021.650782222485,
            "unit": "ns/iter",
            "extra": "iterations: 24993\ncpu: 28020.989877165277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98407.84104937811,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 98404.1526374857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84426.42361027816,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84420.71626673143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83285.5012016353,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 83279.15164623842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83433.17447265089,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83430.96174472668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55906.20918936273,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 55904.937091892985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84112.25026955068,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 84106.43344914478 ns\nthreads: 1"
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
        "date": 1702492919317,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 720.4542185262638,
            "unit": "ns/iter",
            "extra": "iterations: 975471\ncpu: 720.3887147849604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11315.281272566515,
            "unit": "ns/iter",
            "extra": "iterations: 73395\ncpu: 11313.773417807754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24572.643737944472,
            "unit": "ns/iter",
            "extra": "iterations: 34222\ncpu: 24572.117351411376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39691.10092364026,
            "unit": "ns/iter",
            "extra": "iterations: 20679\ncpu: 39689.05169495623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48143.4483892613,
            "unit": "ns/iter",
            "extra": "iterations: 16421\ncpu: 48141.946288289364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59933.35049365137,
            "unit": "ns/iter",
            "extra": "iterations: 14180\ncpu: 59931.593794076216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59823.53470000135,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59822.54999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69364.09492256785,
            "unit": "ns/iter",
            "extra": "iterations: 12526\ncpu: 69359.37250518921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79544.05499500787,
            "unit": "ns/iter",
            "extra": "iterations: 11001\ncpu: 79541.48713753298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 575.4519615228822,
            "unit": "ns/iter",
            "extra": "iterations: 1217243\ncpu: 575.4257777617127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 482.886399120676,
            "unit": "ns/iter",
            "extra": "iterations: 1213723\ncpu: 482.86198745512695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 468.39012835149947,
            "unit": "ns/iter",
            "extra": "iterations: 1493165\ncpu: 468.37743986766344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 471.8070459484781,
            "unit": "ns/iter",
            "extra": "iterations: 1483576\ncpu: 471.79962469061195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 959.2615029234988,
            "unit": "ns/iter",
            "extra": "iterations: 729445\ncpu: 959.2357203079048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3581.534839265445,
            "unit": "ns/iter",
            "extra": "iterations: 222852\ncpu: 3581.513740060663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15605.36048456912,
            "unit": "ns/iter",
            "extra": "iterations: 52005\ncpu: 15604.582251706584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12373.608886814112,
            "unit": "ns/iter",
            "extra": "iterations: 66413\ncpu: 12373.115203348709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11728.727378691186,
            "unit": "ns/iter",
            "extra": "iterations: 69492\ncpu: 11728.135612732376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11850.21488837348,
            "unit": "ns/iter",
            "extra": "iterations: 68980\ncpu: 11849.775297187569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41306.6782733264,
            "unit": "ns/iter",
            "extra": "iterations: 20247\ncpu: 41304.46485899153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 454977.0845666017,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 454953.4883720934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 373089.2821929707,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 373066.0433489169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 374415.4358425816,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 374403.079555175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 373368.7179487594,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 373335.17094016954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224441.06892921613,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 224433.3070244672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371402.80410605425,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 371386.78357570566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1871255.7172130654,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1871171.9262295077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 760326.2166532449,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 760258.7712206952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2512300.4103260473,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2512190.4891304327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3715.0228706372386,
            "unit": "ns/iter",
            "extra": "iterations: 217659\ncpu: 3714.8411046637216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15533.240554371972,
            "unit": "ns/iter",
            "extra": "iterations: 52961\ncpu: 15532.482392704087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12290.09796504187,
            "unit": "ns/iter",
            "extra": "iterations: 66881\ncpu: 12289.424500231715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12052.049700098094,
            "unit": "ns/iter",
            "extra": "iterations: 68189\ncpu: 12051.63149481597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12218.571607086384,
            "unit": "ns/iter",
            "extra": "iterations: 67221\ncpu: 12218.135701640886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41152.75896905028,
            "unit": "ns/iter",
            "extra": "iterations: 20292\ncpu: 41149.91622314223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 470810.5582788682,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 470790.631808278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391887.1015730474,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 391863.0561797746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385845.4628469177,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 385823.32139659795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383246.29217923625,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 383225.7469244281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222302.6883838328,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 222289.92424242478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 383218.923650739,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 383194.9978060564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1889216.1718426896,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1888958.7991718373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 743590.5892282554,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 743549.1157556308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3955.430595728788,
            "unit": "ns/iter",
            "extra": "iterations: 201904\ncpu: 3955.205939456405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17114.087492309987,
            "unit": "ns/iter",
            "extra": "iterations: 48770\ncpu: 17113.360672544575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13318.443579327895,
            "unit": "ns/iter",
            "extra": "iterations: 62034\ncpu: 13317.40497146726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13111.646019663738,
            "unit": "ns/iter",
            "extra": "iterations: 63060\ncpu: 13110.972090072999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13259.075577012618,
            "unit": "ns/iter",
            "extra": "iterations: 62347\ncpu: 13258.121481386504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42838.109707648495,
            "unit": "ns/iter",
            "extra": "iterations: 19634\ncpu: 42836.202505857116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 457181.23028389615,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 457170.24185068527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375018.20932236646,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 374992.5766076827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 376020.70916162006,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 376005.5315471044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374090.759291278,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 374062.05704408116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229225.65874671986,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 229215.2741514351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 371678.1012931063,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 371661.16379310604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.2492480553327,
            "unit": "ns/iter",
            "extra": "iterations: 2309013\ncpu: 302.23853222134517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1524.5152403039776,
            "unit": "ns/iter",
            "extra": "iterations: 458357\ncpu: 1524.4233206867111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1137.6749428126204,
            "unit": "ns/iter",
            "extra": "iterations: 607650\ncpu: 1137.6191886776985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1170.7010349289203,
            "unit": "ns/iter",
            "extra": "iterations: 602940\ncpu: 1170.6249378047544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 998.4388399541647,
            "unit": "ns/iter",
            "extra": "iterations: 704455\ncpu: 998.4031627286374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7316.018879526694,
            "unit": "ns/iter",
            "extra": "iterations: 97566\ncpu: 7315.562798515947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18260.57779225731,
            "unit": "ns/iter",
            "extra": "iterations: 38365\ncpu: 18259.999999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4544.279782574382,
            "unit": "ns/iter",
            "extra": "iterations: 154352\ncpu: 4543.925572716895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4566.602406732802,
            "unit": "ns/iter",
            "extra": "iterations: 153403\ncpu: 4566.400265966157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4575.079488062819,
            "unit": "ns/iter",
            "extra": "iterations: 153847\ncpu: 4574.733338966587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9391.768704842772,
            "unit": "ns/iter",
            "extra": "iterations: 74740\ncpu: 9391.331281776978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7712.9467893959645,
            "unit": "ns/iter",
            "extra": "iterations: 90715\ncpu: 7712.427933638291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3270.6421876307795,
            "unit": "ns/iter",
            "extra": "iterations: 214442\ncpu: 3270.530026767165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16276.330029826666,
            "unit": "ns/iter",
            "extra": "iterations: 42581\ncpu: 16275.20255513012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13013.817261627157,
            "unit": "ns/iter",
            "extra": "iterations: 53645\ncpu: 13013.389877901274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13018.603610500677,
            "unit": "ns/iter",
            "extra": "iterations: 53566\ncpu: 13017.914348654094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13510.792492300157,
            "unit": "ns/iter",
            "extra": "iterations: 51627\ncpu: 13510.17878242009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28807.097660099134,
            "unit": "ns/iter",
            "extra": "iterations: 24360\ncpu: 28805.747126436636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101607.90807436315,
            "unit": "ns/iter",
            "extra": "iterations: 6886\ncpu: 101599.39006680279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87570.32762071649,
            "unit": "ns/iter",
            "extra": "iterations: 7994\ncpu: 87567.23792844631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87311.38040632114,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 87307.902280941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87442.0227017582,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 87440.42659348914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56457.142455859794,
            "unit": "ns/iter",
            "extra": "iterations: 12460\ncpu: 56454.510433387084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86644.95731030258,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 86637.28562615739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3082.8258687305647,
            "unit": "ns/iter",
            "extra": "iterations: 228523\ncpu: 3082.6568879280785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15355.879596535347,
            "unit": "ns/iter",
            "extra": "iterations: 45605\ncpu: 15354.868983664077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12483.600949063351,
            "unit": "ns/iter",
            "extra": "iterations: 56266\ncpu: 12483.140795506903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12191.707668482151,
            "unit": "ns/iter",
            "extra": "iterations: 57469\ncpu: 12190.95338356323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12701.320814479444,
            "unit": "ns/iter",
            "extra": "iterations: 55250\ncpu: 12700.98642533935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27819.396232436695,
            "unit": "ns/iter",
            "extra": "iterations: 25056\ncpu: 27818.969508301456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99675.74766222255,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 99671.73420232355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85446.3656409039,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 85442.85195056959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84471.05334942575,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 84465.34701267342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84843.82098241914,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 84841.16434202666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56114.653667517094,
            "unit": "ns/iter",
            "extra": "iterations: 12488\ncpu: 56113.63709160802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84590.02540026432,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 84584.37462380978 ns\nthreads: 1"
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
        "date": 1702503955146,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 698.7781566856573,
            "unit": "ns/iter",
            "extra": "iterations: 998777\ncpu: 698.7761031741821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11442.78488001224,
            "unit": "ns/iter",
            "extra": "iterations: 72090\ncpu: 11442.352614787073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24884.814867440597,
            "unit": "ns/iter",
            "extra": "iterations: 33079\ncpu: 24882.922700202547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38897.287174370365,
            "unit": "ns/iter",
            "extra": "iterations: 21036\ncpu: 38895.930785320415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48897.39496778361,
            "unit": "ns/iter",
            "extra": "iterations: 16295\ncpu: 48894.50138079165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50120.77080000381,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50116.98000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60450.11390000354,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60447.83000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69688.52566882804,
            "unit": "ns/iter",
            "extra": "iterations: 12447\ncpu: 69686.74379368525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79916.58277599218,
            "unit": "ns/iter",
            "extra": "iterations: 10915\ncpu: 79913.42189647275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 578.3498468871117,
            "unit": "ns/iter",
            "extra": "iterations: 1210218\ncpu: 578.3189474954102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 468.4175245937202,
            "unit": "ns/iter",
            "extra": "iterations: 1420381\ncpu: 468.4165023328245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 469.1031512096806,
            "unit": "ns/iter",
            "extra": "iterations: 1492411\ncpu: 469.08009924879855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 471.0131192861981,
            "unit": "ns/iter",
            "extra": "iterations: 1485218\ncpu: 470.9864814458215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 941.0671768752057,
            "unit": "ns/iter",
            "extra": "iterations: 744140\ncpu: 941.0057247292164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3601.4289780203526,
            "unit": "ns/iter",
            "extra": "iterations: 224163\ncpu: 3601.241061192083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15361.250822123959,
            "unit": "ns/iter",
            "extra": "iterations: 53520\ncpu: 15360.646487294478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12571.60435421605,
            "unit": "ns/iter",
            "extra": "iterations: 65316\ncpu: 12570.795823381695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12310.392103093973,
            "unit": "ns/iter",
            "extra": "iterations: 66735\ncpu: 12309.722034914208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12461.858842477359,
            "unit": "ns/iter",
            "extra": "iterations: 65813\ncpu: 12461.51520216369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42263.140481622504,
            "unit": "ns/iter",
            "extra": "iterations: 19725\ncpu: 42261.566539923966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 446670.8228897379,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 446643.759709994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 369289.48621129274,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 369270.98005939747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 371458.91791362426,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 371445.1902522445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376629.64820421464,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 376618.56339247007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227262.3200637094,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 227256.02441613548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370881.26297725394,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 370872.3294723296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1887966.0896129943,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1887938.4928716894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 747060.6682539306,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 747041.9047619049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2550046.360881447,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2549969.421487601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3708.30484025308,
            "unit": "ns/iter",
            "extra": "iterations: 218439\ncpu: 3708.2668387970957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15363.655880699516,
            "unit": "ns/iter",
            "extra": "iterations: 53310\ncpu: 15363.55468017251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12515.562041456966,
            "unit": "ns/iter",
            "extra": "iterations: 65561\ncpu: 12515.152300910611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12366.401008337429,
            "unit": "ns/iter",
            "extra": "iterations: 67041\ncpu: 12366.16249757608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12438.626083137497,
            "unit": "ns/iter",
            "extra": "iterations: 66012\ncpu: 12438.491486396439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43447.640544173395,
            "unit": "ns/iter",
            "extra": "iterations: 19332\ncpu: 43447.86881853931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 467045.310252299,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 467043.69296833087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 389356.5071300908,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 389351.33689839626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 388255.7670378835,
            "unit": "ns/iter",
            "extra": "iterations: 2245\ncpu: 388257.50556793116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385361.859850157,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 385352.13750550896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224038.90141570367,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 224036.6023166009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374912.7146574224,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 374906.89505637466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1878321.5544147552,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1878250.3080082056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 728481.3106416877,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 728438.9671361457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4002.622380429142,
            "unit": "ns/iter",
            "extra": "iterations: 199317\ncpu: 4002.422773772453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16697.260134587697,
            "unit": "ns/iter",
            "extra": "iterations: 49336\ncpu: 16696.602886330475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13553.215739192372,
            "unit": "ns/iter",
            "extra": "iterations: 60397\ncpu: 13552.962895508044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13353.05589701466,
            "unit": "ns/iter",
            "extra": "iterations: 61989\ncpu: 13352.588362451446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13173.239285083173,
            "unit": "ns/iter",
            "extra": "iterations: 62273\ncpu: 13173.042891783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42802.79172010746,
            "unit": "ns/iter",
            "extra": "iterations: 19493\ncpu: 42800.543784948415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 456695.6678986365,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 456671.8585005274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379723.3899042474,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 379708.1810269814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 379337.39661160816,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 379317.76715899317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 376728.22058183345,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 376720.97264437797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224743.18574735272,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 224733.65063030666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376934.1270316381,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 376909.45252352586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.75026689834465,
            "unit": "ns/iter",
            "extra": "iterations: 2257414\ncpu: 306.7338113434232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1509.4637664908464,
            "unit": "ns/iter",
            "extra": "iterations: 463742\ncpu: 1509.414070754865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1217.1181761597722,
            "unit": "ns/iter",
            "extra": "iterations: 588012\ncpu: 1217.1249906464445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1204.081743995304,
            "unit": "ns/iter",
            "extra": "iterations: 583786\ncpu: 1204.0275032289196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1001.4028850381927,
            "unit": "ns/iter",
            "extra": "iterations: 702729\ncpu: 1001.4021052212182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7318.442888393677,
            "unit": "ns/iter",
            "extra": "iterations: 95541\ncpu: 7318.347097057829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19115.11486486633,
            "unit": "ns/iter",
            "extra": "iterations: 36704\ncpu: 19114.89755884892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4481.138435905864,
            "unit": "ns/iter",
            "extra": "iterations: 155451\ncpu: 4480.753420692137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4507.396499253317,
            "unit": "ns/iter",
            "extra": "iterations: 156081\ncpu: 4507.38590859875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4488.858086902632,
            "unit": "ns/iter",
            "extra": "iterations: 135738\ncpu: 4488.843212659656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9298.182147838665,
            "unit": "ns/iter",
            "extra": "iterations: 75285\ncpu: 9297.700737198573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8424.424248260666,
            "unit": "ns/iter",
            "extra": "iterations: 83074\ncpu: 8424.356597732098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3326.9477937706356,
            "unit": "ns/iter",
            "extra": "iterations: 209611\ncpu: 3326.901737027179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16521.430612485605,
            "unit": "ns/iter",
            "extra": "iterations: 42205\ncpu: 16521.530624333493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13159.760904260942,
            "unit": "ns/iter",
            "extra": "iterations: 53259\ncpu: 13159.83589628047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13177.834132453585,
            "unit": "ns/iter",
            "extra": "iterations: 46718\ncpu: 13177.779442613133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13676.410004884334,
            "unit": "ns/iter",
            "extra": "iterations: 51175\ncpu: 13676.259892525552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29439.551441538668,
            "unit": "ns/iter",
            "extra": "iterations: 23794\ncpu: 29439.1569303189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100751.25588108672,
            "unit": "ns/iter",
            "extra": "iterations: 6929\ncpu: 100751.84009236557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86523.06443235658,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 86522.84194904818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85985.60518235916,
            "unit": "ns/iter",
            "extra": "iterations: 8143\ncpu: 85985.22657497208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86161.43678442825,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 86160.01477286665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56313.24809863076,
            "unit": "ns/iter",
            "extra": "iterations: 12491\ncpu: 56312.50500360171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85628.6284946856,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 85629.16615797915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3209.1337996558013,
            "unit": "ns/iter",
            "extra": "iterations: 218304\ncpu: 3209.0974054529283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15947.69063225443,
            "unit": "ns/iter",
            "extra": "iterations: 43938\ncpu: 15947.35764031158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12925.72808177176,
            "unit": "ns/iter",
            "extra": "iterations: 53711\ncpu: 12925.69678464374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12770.583207276675,
            "unit": "ns/iter",
            "extra": "iterations: 54869\ncpu: 12770.664674041813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13240.018676426625,
            "unit": "ns/iter",
            "extra": "iterations: 53008\ncpu: 13240.097721098562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28082.507213272307,
            "unit": "ns/iter",
            "extra": "iterations: 24954\ncpu: 28082.367556303747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99423.84876455764,
            "unit": "ns/iter",
            "extra": "iterations: 7042\ncpu: 99422.72081794955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84825.76686448103,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 84824.45198013795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83810.24865318205,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 83810.75062851627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84516.60111271589,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 84516.15868408256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59093.589951761845,
            "unit": "ns/iter",
            "extra": "iterations: 12440\ncpu: 59093.32797427591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84869.12648125831,
            "unit": "ns/iter",
            "extra": "iterations: 8270\ncpu: 84868.08948004924 ns\nthreads: 1"
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
        "date": 1705575617624,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 724.9717823278944,
            "unit": "ns/iter",
            "extra": "iterations: 969109\ncpu: 724.9531270476283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11260.958566751882,
            "unit": "ns/iter",
            "extra": "iterations: 73902\ncpu: 11260.312305485642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24603.38520024745,
            "unit": "ns/iter",
            "extra": "iterations: 33933\ncpu: 24602.725959979958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38812.9569527182,
            "unit": "ns/iter",
            "extra": "iterations: 21488\ncpu: 38811.23417721519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48833.73905041897,
            "unit": "ns/iter",
            "extra": "iterations: 16302\ncpu: 48831.603484235064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60443.04836292946,
            "unit": "ns/iter",
            "extra": "iterations: 14019\ncpu: 60440.47364291319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61238.42419999619,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61235.44999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69836.65956240096,
            "unit": "ns/iter",
            "extra": "iterations: 12340\ncpu: 69831.58833063208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79021.83055303412,
            "unit": "ns/iter",
            "extra": "iterations: 11030\ncpu: 79017.18948322751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 565.955354098286,
            "unit": "ns/iter",
            "extra": "iterations: 1225846\ncpu: 565.9439277038066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 484.2682252273872,
            "unit": "ns/iter",
            "extra": "iterations: 1470887\ncpu: 484.2448808100144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 477.33642973471086,
            "unit": "ns/iter",
            "extra": "iterations: 1467510\ncpu: 477.3107508637086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 482.4684460403345,
            "unit": "ns/iter",
            "extra": "iterations: 1452084\ncpu: 482.4380683211165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 962.09270365088,
            "unit": "ns/iter",
            "extra": "iterations: 729680\ncpu: 962.0496656068406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3588.8994982490444,
            "unit": "ns/iter",
            "extra": "iterations: 224414\ncpu: 3588.688317128172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15289.655859037526,
            "unit": "ns/iter",
            "extra": "iterations: 53234\ncpu: 15288.727129278257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12626.485591154953,
            "unit": "ns/iter",
            "extra": "iterations: 65203\ncpu: 12625.426744168248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12286.627152330988,
            "unit": "ns/iter",
            "extra": "iterations: 53837\ncpu: 12286.01147909432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12446.164308665537,
            "unit": "ns/iter",
            "extra": "iterations: 65663\ncpu: 12445.398474026477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42233.36243715738,
            "unit": "ns/iter",
            "extra": "iterations: 20089\ncpu: 42231.036885858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 470663.97463005356,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 470632.029598308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 374871.35017269186,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 374856.08808290143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 376525.59453597094,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 376506.54813530034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376295.3198638694,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 376277.031050616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 226334.5883272413,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 226322.95466388713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 377754.8224137745,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 377734.7844827589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1880842.711382155,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1880567.276422762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 747989.2666133078,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 747939.4715772633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2530457.104972065,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2530271.8232044126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3636.808396362134,
            "unit": "ns/iter",
            "extra": "iterations: 218023\ncpu: 3636.6846617100036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15677.193979308504,
            "unit": "ns/iter",
            "extra": "iterations: 53449\ncpu: 15676.654380811633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12607.916921430053,
            "unit": "ns/iter",
            "extra": "iterations: 65420\ncpu: 12607.202690308875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12425.691053850114,
            "unit": "ns/iter",
            "extra": "iterations: 66442\ncpu: 12425.151259745353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12475.101287993353,
            "unit": "ns/iter",
            "extra": "iterations: 66227\ncpu: 12474.330711039327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42980.547093679605,
            "unit": "ns/iter",
            "extra": "iterations: 19578\ncpu: 42979.8345081215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 480283.6211043997,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 480260.57955166866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 404584.8513575976,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 404561.29774505424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 400672.9193919688,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 400650.483648091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 389829.4829443589,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 389804.8473967661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 229042.988950264,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 229039.46329913163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 389406.052933372,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 389380.5469783863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1921864.4778948147,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1921768.2105263043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 722450.3250388992,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 722419.9066874023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3994.904444819309,
            "unit": "ns/iter",
            "extra": "iterations: 201538\ncpu: 3994.762278081536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16657.79283835716,
            "unit": "ns/iter",
            "extra": "iterations: 49430\ncpu: 16656.75703014364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13590.496357191947,
            "unit": "ns/iter",
            "extra": "iterations: 60942\ncpu: 13589.83787863871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13364.26232419986,
            "unit": "ns/iter",
            "extra": "iterations: 61931\ncpu: 13363.607886195936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13359.268487326122,
            "unit": "ns/iter",
            "extra": "iterations: 61150\ncpu: 13358.596892886428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42924.54980260934,
            "unit": "ns/iter",
            "extra": "iterations: 19758\ncpu: 42922.932483044526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 460891.8412698408,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 460870.7936507923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 378656.14801915945,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 378638.6591205906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 379845.9249563493,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 379827.48691099545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 377647.204036836,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 377629.1794646791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227147.82556352322,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 227139.11372950763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372349.6811719377,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 372336.6652305062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.20347842686743,
            "unit": "ns/iter",
            "extra": "iterations: 2294543\ncpu: 304.1976550450356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1487.0505453356502,
            "unit": "ns/iter",
            "extra": "iterations: 467877\ncpu: 1486.9908116876973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1179.98444583104,
            "unit": "ns/iter",
            "extra": "iterations: 592960\ncpu: 1179.9323731786317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1204.9800018159701,
            "unit": "ns/iter",
            "extra": "iterations: 583703\ncpu: 1204.9588575011667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1012.7715111970809,
            "unit": "ns/iter",
            "extra": "iterations: 689513\ncpu: 1012.703023728344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7532.076737399694,
            "unit": "ns/iter",
            "extra": "iterations: 93214\ncpu: 7531.940481043628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19026.031228637672,
            "unit": "ns/iter",
            "extra": "iterations: 36569\ncpu: 19025.237222784144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4511.6359625110845,
            "unit": "ns/iter",
            "extra": "iterations: 155245\ncpu: 4511.540468292034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4531.769037732806,
            "unit": "ns/iter",
            "extra": "iterations: 154614\ncpu: 4531.530779877671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4548.273220361109,
            "unit": "ns/iter",
            "extra": "iterations: 154315\ncpu: 4547.97070926356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9394.54925913599,
            "unit": "ns/iter",
            "extra": "iterations: 74575\ncpu: 9393.859872611389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8506.762925812094,
            "unit": "ns/iter",
            "extra": "iterations: 82548\ncpu: 8506.607064980399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3259.942227893753,
            "unit": "ns/iter",
            "extra": "iterations: 214723\ncpu: 3259.8170666394053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17461.19094894579,
            "unit": "ns/iter",
            "extra": "iterations: 43111\ncpu: 17460.8383011296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12971.579604291404,
            "unit": "ns/iter",
            "extra": "iterations: 54080\ncpu: 12970.382766272049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12935.924450116472,
            "unit": "ns/iter",
            "extra": "iterations: 54057\ncpu: 12935.27387757379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13499.73729189384,
            "unit": "ns/iter",
            "extra": "iterations: 51837\ncpu: 13499.035438007793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28602.707837609236,
            "unit": "ns/iter",
            "extra": "iterations: 24459\ncpu: 28600.776810171654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102046.58484540507,
            "unit": "ns/iter",
            "extra": "iterations: 6889\ncpu: 102040.89127594627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87208.33241827565,
            "unit": "ns/iter",
            "extra": "iterations: 8014\ncpu: 87202.08385325632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86853.35214056581,
            "unit": "ns/iter",
            "extra": "iterations: 8082\ncpu: 86851.76936401748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87369.54745972305,
            "unit": "ns/iter",
            "extra": "iterations: 8070\ncpu: 87363.27137546404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55866.005436962776,
            "unit": "ns/iter",
            "extra": "iterations: 12507\ncpu: 55862.325097945235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85621.37360908826,
            "unit": "ns/iter",
            "extra": "iterations: 8268\ncpu: 85618.00919206525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3083.784119652878,
            "unit": "ns/iter",
            "extra": "iterations: 227325\ncpu: 3083.604970856703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15604.860288888429,
            "unit": "ns/iter",
            "extra": "iterations: 45000\ncpu: 15604.211111111175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12545.452702581571,
            "unit": "ns/iter",
            "extra": "iterations: 55447\ncpu: 12544.868072213132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12355.675873631093,
            "unit": "ns/iter",
            "extra": "iterations: 56660\ncpu: 12355.462407341904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12947.094612134579,
            "unit": "ns/iter",
            "extra": "iterations: 53936\ncpu: 12946.15840996727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27699.27692185915,
            "unit": "ns/iter",
            "extra": "iterations: 25249\ncpu: 27697.984078577774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100944.57194609202,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 100938.51615707991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 86265.91375262241,
            "unit": "ns/iter",
            "extra": "iterations: 8093\ncpu: 86261.55937229694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85138.85069359567,
            "unit": "ns/iter",
            "extra": "iterations: 8218\ncpu: 85131.72304697013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85466.0586299349,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 85461.7016089706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56196.136753499675,
            "unit": "ns/iter",
            "extra": "iterations: 12475\ncpu: 56193.41883767495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85082.17948095364,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 85077.94081979235 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}