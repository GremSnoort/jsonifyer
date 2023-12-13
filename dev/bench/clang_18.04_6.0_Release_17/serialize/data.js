window.BENCHMARK_DATA = {
  "lastUpdate": 1702490340816,
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
      }
    ]
  }
}