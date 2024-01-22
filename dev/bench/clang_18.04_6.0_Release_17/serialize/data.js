window.BENCHMARK_DATA = {
  "lastUpdate": 1705960343312,
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773451294,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 727.2448155038591,
            "unit": "ns/iter",
            "extra": "iterations: 967500\ncpu: 727.2201550387598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11223.747571109921,
            "unit": "ns/iter",
            "extra": "iterations: 74005\ncpu: 11223.68083237619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24978.50895163686,
            "unit": "ns/iter",
            "extra": "iterations: 33290\ncpu: 24977.924301592077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40205.149574420306,
            "unit": "ns/iter",
            "extra": "iterations: 21735\ncpu: 40204.77110651025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50269.59586214685,
            "unit": "ns/iter",
            "extra": "iterations: 16482\ncpu: 50267.87404441212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60032.90153343303,
            "unit": "ns/iter",
            "extra": "iterations: 14086\ncpu: 60031.17279568368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60484.537100001035,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60480.49000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69329.1055115585,
            "unit": "ns/iter",
            "extra": "iterations: 12501\ncpu: 69327.33381329499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79732.75515393322,
            "unit": "ns/iter",
            "extra": "iterations: 11011\ncpu: 79725.37462537453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 605.1633949344574,
            "unit": "ns/iter",
            "extra": "iterations: 1165183\ncpu: 605.1651114031026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 501.0779807231897,
            "unit": "ns/iter",
            "extra": "iterations: 1383842\ncpu: 501.0602366455125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 493.8069515492375,
            "unit": "ns/iter",
            "extra": "iterations: 1418245\ncpu: 493.8062887582883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 504.0627825238741,
            "unit": "ns/iter",
            "extra": "iterations: 1382184\ncpu: 504.0404895440834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 997.0440948443934,
            "unit": "ns/iter",
            "extra": "iterations: 698449\ncpu: 997.0269840747126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3399.704745099034,
            "unit": "ns/iter",
            "extra": "iterations: 234052\ncpu: 3399.6047886794368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15130.27378767957,
            "unit": "ns/iter",
            "extra": "iterations: 53410\ncpu: 15130.269612432108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12262.461062481912,
            "unit": "ns/iter",
            "extra": "iterations: 66260\ncpu: 12262.233625113193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12135.706349440996,
            "unit": "ns/iter",
            "extra": "iterations: 67502\ncpu: 12135.757459038241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12277.754023850484,
            "unit": "ns/iter",
            "extra": "iterations: 66665\ncpu: 12277.257931448323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41440.98213401894,
            "unit": "ns/iter",
            "extra": "iterations: 20206\ncpu: 41438.805305354996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 447640.17711597256,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 447624.8171368848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 368834.77960240014,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 368837.1650821098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373471.2010199579,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 373457.3735656612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 378772.16602315096,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 378759.03045903053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227391.5136842226,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 227382.2894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 375504.9549978676,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 375493.37948939897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1890147.8268839954,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1890075.3564154787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 747679.5067837515,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 747645.6504389478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2537545.292817709,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2537354.143646414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3521.4751264452234,
            "unit": "ns/iter",
            "extra": "iterations: 221440\ncpu: 3521.450505780356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15507.870037261799,
            "unit": "ns/iter",
            "extra": "iterations: 52869\ncpu: 15507.874179575894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12778.051744149949,
            "unit": "ns/iter",
            "extra": "iterations: 63756\ncpu: 12777.804441934799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12400.801761843057,
            "unit": "ns/iter",
            "extra": "iterations: 64932\ncpu: 12400.346516355556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12179.12416281057,
            "unit": "ns/iter",
            "extra": "iterations: 65696\ncpu: 12178.44465416465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43311.47075782575,
            "unit": "ns/iter",
            "extra": "iterations: 19424\ncpu: 43311.46004942325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 478393.44432314823,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 478368.3951965053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 392188.4923903274,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 392174.619516562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 387819.936416164,
            "unit": "ns/iter",
            "extra": "iterations: 2249\ncpu: 387804.0017785668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385673.19753630226,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 385656.22525296925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223753.21043166003,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 223754.49640287718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381127.8200965466,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 381108.20535322704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1892922.2913224134,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1892859.0909090918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 741673.2407999916,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 741635.759999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4026.398253551542,
            "unit": "ns/iter",
            "extra": "iterations: 199147\ncpu: 4026.2650203116505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16957.67274472063,
            "unit": "ns/iter",
            "extra": "iterations: 48974\ncpu: 16957.079266549557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13825.575623470646,
            "unit": "ns/iter",
            "extra": "iterations: 60107\ncpu: 13825.196732493696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13114.288127554593,
            "unit": "ns/iter",
            "extra": "iterations: 61150\ncpu: 13113.952575633619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12400.276117512201,
            "unit": "ns/iter",
            "extra": "iterations: 67091\ncpu: 12400.144579749924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41652.74638542102,
            "unit": "ns/iter",
            "extra": "iterations: 20196\ncpu: 41652.733214497806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 462683.32815841516,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 462674.6252676654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380549.85500222153,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 380552.35786690284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 376439.3970714959,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 376434.9267872525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 374040.4866952471,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 374040.085836912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225728.59958933393,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 225727.25872689846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 382298.41290041397,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 382289.99561211123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.6305583990085,
            "unit": "ns/iter",
            "extra": "iterations: 2302529\ncpu: 304.6301696960184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1520.2954437818446,
            "unit": "ns/iter",
            "extra": "iterations: 462423\ncpu: 1520.2613191817984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1179.1881608580186,
            "unit": "ns/iter",
            "extra": "iterations: 593641\ncpu: 1179.1798410150245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1175.466730783723,
            "unit": "ns/iter",
            "extra": "iterations: 597865\ncpu: 1175.4643606834259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1005.6692256878353,
            "unit": "ns/iter",
            "extra": "iterations: 691801\ncpu: 1005.6464214419955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7220.0796846642,
            "unit": "ns/iter",
            "extra": "iterations: 97547\ncpu: 7219.787384542825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18305.450198062194,
            "unit": "ns/iter",
            "extra": "iterations: 38372\ncpu: 18304.70134473051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4505.950853805599,
            "unit": "ns/iter",
            "extra": "iterations: 155129\ncpu: 4505.987275106525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4527.171471671617,
            "unit": "ns/iter",
            "extra": "iterations: 154457\ncpu: 4527.0139909489535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4518.8943444017395,
            "unit": "ns/iter",
            "extra": "iterations: 154767\ncpu: 4518.778550983099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9417.518872990364,
            "unit": "ns/iter",
            "extra": "iterations: 74498\ncpu: 9417.093076324312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8501.653937628389,
            "unit": "ns/iter",
            "extra": "iterations: 82410\ncpu: 8501.713384298047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3229.538411594505,
            "unit": "ns/iter",
            "extra": "iterations: 215625\ncpu: 3229.416347826109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16130.630461923098,
            "unit": "ns/iter",
            "extra": "iterations: 43254\ncpu: 16130.656124289246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12928.010189851027,
            "unit": "ns/iter",
            "extra": "iterations: 53779\ncpu: 12927.41404637504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12969.964372047532,
            "unit": "ns/iter",
            "extra": "iterations: 53778\ncpu: 12969.249507233497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13537.097562375948,
            "unit": "ns/iter",
            "extra": "iterations: 52264\ncpu: 13536.719347926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28782.45731657221,
            "unit": "ns/iter",
            "extra": "iterations: 24342\ncpu: 28780.71645715185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100041.18665720595,
            "unit": "ns/iter",
            "extra": "iterations: 7045\ncpu: 100038.22569198148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86180.69760847102,
            "unit": "ns/iter",
            "extra": "iterations: 8112\ncpu: 86178.94477317487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85094.37800267574,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 85093.7934398255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86091.01682926704,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 86087.62195122072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55899.46374730539,
            "unit": "ns/iter",
            "extra": "iterations: 12537\ncpu: 55899.88035415158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86055.8259163955,
            "unit": "ns/iter",
            "extra": "iterations: 8157\ncpu: 86055.62093907237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3087.132426256106,
            "unit": "ns/iter",
            "extra": "iterations: 226662\ncpu: 3086.9920851312036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15545.429890195837,
            "unit": "ns/iter",
            "extra": "iterations: 45172\ncpu: 15545.408660232155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12392.583534939675,
            "unit": "ns/iter",
            "extra": "iterations: 56629\ncpu: 12392.466757315207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12218.81036227702,
            "unit": "ns/iter",
            "extra": "iterations: 57304\ncpu: 12218.274466005736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12691.654027575936,
            "unit": "ns/iter",
            "extra": "iterations: 55120\ncpu: 12691.159288824567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27601.240682375013,
            "unit": "ns/iter",
            "extra": "iterations: 25382\ncpu: 27600.196989992914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99808.03130781351,
            "unit": "ns/iter",
            "extra": "iterations: 7027\ncpu: 99803.85655329359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85268.38097560724,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85264.24390243908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84102.33551197659,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 84102.2270636655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84198.75749483677,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84197.74244447099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56086.02546037176,
            "unit": "ns/iter",
            "extra": "iterations: 12490\ncpu: 56083.506805443656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84900.52377496132,
            "unit": "ns/iter",
            "extra": "iterations: 8265\ncpu: 84897.10828796006 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774876776,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 705.3750540575202,
            "unit": "ns/iter",
            "extra": "iterations: 982749\ncpu: 705.3273012742826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11027.180415961591,
            "unit": "ns/iter",
            "extra": "iterations: 76113\ncpu: 11026.602551469525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25078.885250380805,
            "unit": "ns/iter",
            "extra": "iterations: 32950\ncpu: 25077.474962063738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39765.946162873435,
            "unit": "ns/iter",
            "extra": "iterations: 21305\ncpu: 39763.83008683408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50264.148611632176,
            "unit": "ns/iter",
            "extra": "iterations: 16062\ncpu: 50259.6874610883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51793.82249999662,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51793.50999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61513.27499999298,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61509.500000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71053.53668830592,
            "unit": "ns/iter",
            "extra": "iterations: 12320\ncpu: 71048.23863636366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82211.52131908176,
            "unit": "ns/iter",
            "extra": "iterations: 10765\ncpu: 82206.22387366464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 603.77721044373,
            "unit": "ns/iter",
            "extra": "iterations: 1130825\ncpu: 603.7471757345293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 508.5098415324617,
            "unit": "ns/iter",
            "extra": "iterations: 1375802\ncpu: 508.4815983695325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 507.252799931447,
            "unit": "ns/iter",
            "extra": "iterations: 1375748\ncpu: 507.2229797899045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 506.97955496563577,
            "unit": "ns/iter",
            "extra": "iterations: 1378770\ncpu: 506.9358921357439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1031.9502817707044,
            "unit": "ns/iter",
            "extra": "iterations: 682647\ncpu: 1031.9264568657004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3689.879531050154,
            "unit": "ns/iter",
            "extra": "iterations: 215375\ncpu: 3689.588856645393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15797.17455390219,
            "unit": "ns/iter",
            "extra": "iterations: 52511\ncpu: 15796.43884138561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12770.779992104903,
            "unit": "ns/iter",
            "extra": "iterations: 63325\ncpu: 12769.738649822362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12465.837203650884,
            "unit": "ns/iter",
            "extra": "iterations: 65843\ncpu: 12465.738195404248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12361.727174483542,
            "unit": "ns/iter",
            "extra": "iterations: 66625\ncpu: 12361.182739212041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41726.2846987651,
            "unit": "ns/iter",
            "extra": "iterations: 19835\ncpu: 41723.53919838658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 482691.629690066,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 482628.3849918436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 385804.1986666952,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 385776.97777777724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 382289.69816389226,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 382271.02552619774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 389125.9596451984,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 389098.66962305986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 232563.0574959596,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 232550.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 380240.65196505113,
            "unit": "ns/iter",
            "extra": "iterations: 2290\ncpu: 380213.2751091698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1948913.3093221597,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1948816.3135593256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750128.5015974353,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 750080.2715654969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2560323.5096954387,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2560160.9418282574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3576.4962724006164,
            "unit": "ns/iter",
            "extra": "iterations: 199324\ncpu: 3576.3641106941454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15258.27791618817,
            "unit": "ns/iter",
            "extra": "iterations: 53786\ncpu: 15258.029970624304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12487.330911687546,
            "unit": "ns/iter",
            "extra": "iterations: 64419\ncpu: 12487.050404383754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12351.319564237381,
            "unit": "ns/iter",
            "extra": "iterations: 66550\ncpu: 12350.892561983499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12442.187533063421,
            "unit": "ns/iter",
            "extra": "iterations: 66159\ncpu: 12441.78872111118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42266.69485720248,
            "unit": "ns/iter",
            "extra": "iterations: 19853\ncpu: 42265.99002669632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 478104.75110377785,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 478093.1015452542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 400057.3139643803,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 400047.7507029041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 404817.15449437517,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 404806.32022472064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385660.8063063152,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 385646.0810810815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 227445.0132170412,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 227437.85355537842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 385503.4444444455,
            "unit": "ns/iter",
            "extra": "iterations: 2196\ncpu: 385491.02914389747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1972488.0022674582,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 1972375.9637188206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 760108.7721088773,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 760095.4081632628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4137.748081135969,
            "unit": "ns/iter",
            "extra": "iterations: 193995\ncpu: 4137.642207273363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17257.421847932423,
            "unit": "ns/iter",
            "extra": "iterations: 47913\ncpu: 17257.124371256174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13973.203679592632,
            "unit": "ns/iter",
            "extra": "iterations: 59137\ncpu: 13972.629656560128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13828.057693283674,
            "unit": "ns/iter",
            "extra": "iterations: 59175\ncpu: 13827.81242078576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13996.41872122681,
            "unit": "ns/iter",
            "extra": "iterations: 58650\ncpu: 13995.95566922422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42830.59309546455,
            "unit": "ns/iter",
            "extra": "iterations: 19002\ncpu: 42829.844226923386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 470221.6997885856,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 470214.32346723066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380665.8829740488,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 380653.8055433352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 380228.23194077244,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 380222.0191470859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 379838.60999998875,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 379828.86956521735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224236.10195780837,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 224232.49427917576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 377398.21217315906,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 377389.24132018856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.8403447939228,
            "unit": "ns/iter",
            "extra": "iterations: 2284379\ncpu: 304.83470562459365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1532.209599191603,
            "unit": "ns/iter",
            "extra": "iterations: 449267\ncpu: 1532.1793054019176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1157.022390068796,
            "unit": "ns/iter",
            "extra": "iterations: 609154\ncpu: 1157.0006927640632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1200.9263169210653,
            "unit": "ns/iter",
            "extra": "iterations: 586064\ncpu: 1200.8830093641623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1012.8127182989741,
            "unit": "ns/iter",
            "extra": "iterations: 693143\ncpu: 1012.7938967860872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7727.331938285432,
            "unit": "ns/iter",
            "extra": "iterations: 92231\ncpu: 7727.114527653393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20100.125198516278,
            "unit": "ns/iter",
            "extra": "iterations: 34002\ncpu: 20099.623551555982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4656.231270136897,
            "unit": "ns/iter",
            "extra": "iterations: 147118\ncpu: 4656.091708696369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4630.176160274197,
            "unit": "ns/iter",
            "extra": "iterations: 149943\ncpu: 4630.09076782511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4654.696871090248,
            "unit": "ns/iter",
            "extra": "iterations: 150276\ncpu: 4654.536985280456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9887.220282889451,
            "unit": "ns/iter",
            "extra": "iterations: 72820\ncpu: 9887.037901675387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8927.25788865294,
            "unit": "ns/iter",
            "extra": "iterations: 82175\ncpu: 8926.989960450339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3391.1501674775654,
            "unit": "ns/iter",
            "extra": "iterations: 199131\ncpu: 3391.0270123687033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16221.840460103609,
            "unit": "ns/iter",
            "extra": "iterations: 42773\ncpu: 16221.321861922297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12964.083083970669,
            "unit": "ns/iter",
            "extra": "iterations: 54138\ncpu: 12963.744504784087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12989.417230297367,
            "unit": "ns/iter",
            "extra": "iterations: 53522\ncpu: 12988.918575539203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13443.637784992703,
            "unit": "ns/iter",
            "extra": "iterations: 52063\ncpu: 13443.314830109644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28651.425780612513,
            "unit": "ns/iter",
            "extra": "iterations: 24468\ncpu: 28650.862350825646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99929.76182987528,
            "unit": "ns/iter",
            "extra": "iterations: 6995\ncpu: 99927.93423874195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85695.22818294098,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 85693.5846724352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85222.613004589,
            "unit": "ns/iter",
            "extra": "iterations: 8274\ncpu: 85220.23205221028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85398.8098840744,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 85397.10799267903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55788.44187349963,
            "unit": "ns/iter",
            "extra": "iterations: 12490\ncpu: 55787.39791833473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85879.74000979873,
            "unit": "ns/iter",
            "extra": "iterations: 8158\ncpu: 85877.10223093825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3118.511661840112,
            "unit": "ns/iter",
            "extra": "iterations: 224107\ncpu: 3118.455023716349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15593.650076861086,
            "unit": "ns/iter",
            "extra": "iterations: 44887\ncpu: 15593.091540980606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12599.492651413006,
            "unit": "ns/iter",
            "extra": "iterations: 55725\ncpu: 12599.23014804848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12334.871574194665,
            "unit": "ns/iter",
            "extra": "iterations: 56702\ncpu: 12334.529646220626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12956.227397260593,
            "unit": "ns/iter",
            "extra": "iterations: 54020\ncpu: 12955.8830062942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27425.233098315777,
            "unit": "ns/iter",
            "extra": "iterations: 25530\ncpu: 27424.653349001008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98737.40117662479,
            "unit": "ns/iter",
            "extra": "iterations: 7139\ncpu: 98735.3831068778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84095.36985478998,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 84093.67574703004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83351.49142448882,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 83349.95235826555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83868.82638307907,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 83868.10849563906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55331.37256140843,
            "unit": "ns/iter",
            "extra": "iterations: 12661\ncpu: 55329.88705473607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83871.95171917793,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 83870.27674613602 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705778451467,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 689.0231871919098,
            "unit": "ns/iter",
            "extra": "iterations: 1000423\ncpu: 688.9990534004116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10724.934681984934,
            "unit": "ns/iter",
            "extra": "iterations: 77559\ncpu: 10724.617388052964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24670.23264814888,
            "unit": "ns/iter",
            "extra": "iterations: 34881\ncpu: 24668.94297755225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38845.63273219224,
            "unit": "ns/iter",
            "extra": "iterations: 22180\ncpu: 38844.5130748422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51993.00334528425,
            "unit": "ns/iter",
            "extra": "iterations: 16740\ncpu: 51991.726403823144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60194.71858331523,
            "unit": "ns/iter",
            "extra": "iterations: 14061\ncpu: 60193.62065286962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60070.081199989996,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60069.55000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68982.60770884622,
            "unit": "ns/iter",
            "extra": "iterations: 12557\ncpu: 68977.88484510631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79785.94696142059,
            "unit": "ns/iter",
            "extra": "iterations: 10992\ncpu: 79783.77911208144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 580.3723223600102,
            "unit": "ns/iter",
            "extra": "iterations: 1203065\ncpu: 580.3645688304458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 489.5322695738046,
            "unit": "ns/iter",
            "extra": "iterations: 1428017\ncpu: 489.5256849183161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 487.7636869274339,
            "unit": "ns/iter",
            "extra": "iterations: 1435092\ncpu: 487.7553494828209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 491.5247271282393,
            "unit": "ns/iter",
            "extra": "iterations: 1427319\ncpu: 491.5251601078658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 969.0713221786792,
            "unit": "ns/iter",
            "extra": "iterations: 725076\ncpu: 969.0493134512783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3548.259916836523,
            "unit": "ns/iter",
            "extra": "iterations: 224618\ncpu: 3548.2165276157766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15331.138259044017,
            "unit": "ns/iter",
            "extra": "iterations: 52879\ncpu: 15330.590593619383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11871.397073440925,
            "unit": "ns/iter",
            "extra": "iterations: 68408\ncpu: 11871.421471172958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11625.241702104575,
            "unit": "ns/iter",
            "extra": "iterations: 70078\ncpu: 11624.840891577987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11763.451454630478,
            "unit": "ns/iter",
            "extra": "iterations: 69296\ncpu: 11763.331216809085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42078.17922431972,
            "unit": "ns/iter",
            "extra": "iterations: 19802\ncpu: 42076.795273204705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 452580.5795275975,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 452578.2677165356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 374564.34985051566,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 374554.9765057668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 371217.70700638264,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 371210.23354564735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 376093.9523603047,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 376092.0744911219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227520.86051390864,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 227517.82905086534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 372144.02271754487,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 372140.07715387864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1873226.5010184185,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1873011.6089613102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 736757.1209048844,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 736753.1201248049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2578738.1267214725,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2578655.9228650173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3936.80975025618,
            "unit": "ns/iter",
            "extra": "iterations: 202928\ncpu: 3936.656843806678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17008.640780782494,
            "unit": "ns/iter",
            "extra": "iterations: 47542\ncpu: 17008.03079382439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13355.105420260628,
            "unit": "ns/iter",
            "extra": "iterations: 61307\ncpu: 13354.961097427755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13022.97585623294,
            "unit": "ns/iter",
            "extra": "iterations: 62045\ncpu: 13022.723829478557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13249.692082826075,
            "unit": "ns/iter",
            "extra": "iterations: 61575\ncpu: 13249.429151441294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41525.557702294354,
            "unit": "ns/iter",
            "extra": "iterations: 19254\ncpu: 41523.880752051366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 476268.014563089,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 476256.3106796123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 388619.3784024801,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 388618.0276662183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385895.1586389743,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 385883.42907644634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385520.94383504125,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 385513.9534883699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222865.33230293647,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 222857.0839773314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 382803.65992969833,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 382788.1810193317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1885920.2385892144,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1885745.643153523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 728806.2960373049,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 728798.2905982913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3960.1538217853445,
            "unit": "ns/iter",
            "extra": "iterations: 202026\ncpu: 3960.104639996837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16938.082632621827,
            "unit": "ns/iter",
            "extra": "iterations: 48879\ncpu: 16937.392336177043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12414.72041549397,
            "unit": "ns/iter",
            "extra": "iterations: 61806\ncpu: 12414.64906319769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11755.935144684285,
            "unit": "ns/iter",
            "extra": "iterations: 70187\ncpu: 11755.79523273535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11951.330800456119,
            "unit": "ns/iter",
            "extra": "iterations: 69223\ncpu: 11950.905046010732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41470.366674870835,
            "unit": "ns/iter",
            "extra": "iterations: 20315\ncpu: 41469.43145459034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 458467.9403064342,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 458469.5721077643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379417.5653679717,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 379411.125541125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 376311.00693240936,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 376301.8630849231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375773.1095652162,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 375765.2608695664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226806.36566969473,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 226803.9271781525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 372685.00432150514,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 372664.6067415735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 303.04769021025464,
            "unit": "ns/iter",
            "extra": "iterations: 2311271\ncpu: 303.03287671588686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1496.5934697380471,
            "unit": "ns/iter",
            "extra": "iterations: 468312\ncpu: 1496.5817660021473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1169.7624925131777,
            "unit": "ns/iter",
            "extra": "iterations: 599379\ncpu: 1169.7405147661161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1186.708488916884,
            "unit": "ns/iter",
            "extra": "iterations: 602303\ncpu: 1186.6690021467657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 994.2370669951686,
            "unit": "ns/iter",
            "extra": "iterations: 704438\ncpu: 994.1879909942377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7418.564724188085,
            "unit": "ns/iter",
            "extra": "iterations: 95119\ncpu: 7418.398006707305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18381.885635431892,
            "unit": "ns/iter",
            "extra": "iterations: 38045\ncpu: 18381.411486397566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4521.211195846724,
            "unit": "ns/iter",
            "extra": "iterations: 154861\ncpu: 4521.0608222857945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4572.270041614882,
            "unit": "ns/iter",
            "extra": "iterations: 153069\ncpu: 4572.018501460167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4578.3680918576665,
            "unit": "ns/iter",
            "extra": "iterations: 152845\ncpu: 4578.336222970968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9519.44226461266,
            "unit": "ns/iter",
            "extra": "iterations: 73655\ncpu: 9519.007535129955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8553.13655273866,
            "unit": "ns/iter",
            "extra": "iterations: 81485\ncpu: 8552.844081732816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3254.219118926922,
            "unit": "ns/iter",
            "extra": "iterations: 214897\ncpu: 3254.0807921934793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16175.054449147732,
            "unit": "ns/iter",
            "extra": "iterations: 43233\ncpu: 16174.49633381925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12892.88199815161,
            "unit": "ns/iter",
            "extra": "iterations: 54050\ncpu: 12892.547641073194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12912.874417324156,
            "unit": "ns/iter",
            "extra": "iterations: 54490\ncpu: 12912.690401908447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13377.238857671406,
            "unit": "ns/iter",
            "extra": "iterations: 51964\ncpu: 13377.036024940408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28900.17164333268,
            "unit": "ns/iter",
            "extra": "iterations: 24213\ncpu: 28899.492008425335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101586.11414535351,
            "unit": "ns/iter",
            "extra": "iterations: 6921\ncpu: 101582.64701632652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86836.74382947496,
            "unit": "ns/iter",
            "extra": "iterations: 8022\ncpu: 86832.53552730008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86036.73085501503,
            "unit": "ns/iter",
            "extra": "iterations: 8070\ncpu: 86034.49814126319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86210.49814309896,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 86207.1676157466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56282.62455830869,
            "unit": "ns/iter",
            "extra": "iterations: 12452\ncpu: 56279.641824606166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85544.70840501037,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 85541.54583435752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3067.9589483073596,
            "unit": "ns/iter",
            "extra": "iterations: 228736\ncpu: 3067.8179210968074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15351.64724134094,
            "unit": "ns/iter",
            "extra": "iterations: 45765\ncpu: 15351.165738009224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12478.841604653437,
            "unit": "ns/iter",
            "extra": "iterations: 56037\ncpu: 12478.182272427055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12302.340978834436,
            "unit": "ns/iter",
            "extra": "iterations: 57027\ncpu: 12301.85876865333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12729.175647216394,
            "unit": "ns/iter",
            "extra": "iterations: 55082\ncpu: 12728.84063759497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27670.917454412596,
            "unit": "ns/iter",
            "extra": "iterations: 25283\ncpu: 27669.386544318353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100380.17602297534,
            "unit": "ns/iter",
            "extra": "iterations: 6965\ncpu: 100378.47810481035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84820.66031090816,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 84814.80446927247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85252.76319594473,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 85249.73487587349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85659.28891656273,
            "unit": "ns/iter",
            "extra": "iterations: 8030\ncpu: 85656.91158156957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56590.438761218466,
            "unit": "ns/iter",
            "extra": "iterations: 12141\ncpu: 56588.938308211145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86057.76704129309,
            "unit": "ns/iter",
            "extra": "iterations: 8186\ncpu: 86056.31566088331 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705953593315,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 706.4076885195603,
            "unit": "ns/iter",
            "extra": "iterations: 984845\ncpu: 706.3367331915176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10831.797125330964,
            "unit": "ns/iter",
            "extra": "iterations: 76461\ncpu: 10831.695897254811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24082.955654743004,
            "unit": "ns/iter",
            "extra": "iterations: 34502\ncpu: 24082.18653991073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37004.934635942125,
            "unit": "ns/iter",
            "extra": "iterations: 22826\ncpu: 37002.47962849382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47498.85750000328,
            "unit": "ns/iter",
            "extra": "iterations: 16800\ncpu: 47494.46428571426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59513.864762965604,
            "unit": "ns/iter",
            "extra": "iterations: 14323\ncpu: 59508.68533128534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59575.15300000296,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59569.78 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68366.4013895498,
            "unit": "ns/iter",
            "extra": "iterations: 12666\ncpu: 68359.4426022422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78404.13394053024,
            "unit": "ns/iter",
            "extra": "iterations: 11199\ncpu: 78398.52665416556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 573.0164688422641,
            "unit": "ns/iter",
            "extra": "iterations: 1223644\ncpu: 572.9847079706188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 475.1101513007441,
            "unit": "ns/iter",
            "extra": "iterations: 1474018\ncpu: 475.0739814574857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 476.82692450387316,
            "unit": "ns/iter",
            "extra": "iterations: 1468989\ncpu: 476.79165739158054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 480.6245433778664,
            "unit": "ns/iter",
            "extra": "iterations: 1452514\ncpu: 480.5915123709648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 965.7898471669362,
            "unit": "ns/iter",
            "extra": "iterations: 723207\ncpu: 965.7073286071626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3579.3437776816695,
            "unit": "ns/iter",
            "extra": "iterations: 224651\ncpu: 3579.1521070460367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14830.789041882825,
            "unit": "ns/iter",
            "extra": "iterations: 52290\ncpu: 14829.7437368522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12076.560335000066,
            "unit": "ns/iter",
            "extra": "iterations: 71045\ncpu: 12075.636568372156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11736.634760113226,
            "unit": "ns/iter",
            "extra": "iterations: 68032\ncpu: 11735.549447318903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11977.828452003518,
            "unit": "ns/iter",
            "extra": "iterations: 69380\ncpu: 11977.089939463815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42124.55991142611,
            "unit": "ns/iter",
            "extra": "iterations: 19871\ncpu: 42121.76538674454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 454723.9973002258,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 454712.742980561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 368890.80584193586,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 368864.7336769758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 373074.25862803834,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 373057.7332765238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 377444.1284796895,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 377427.8800856523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227184.26919030707,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 227173.6855941116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 371220.54584221385,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 371207.59061833704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1879700.4439916522,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1879549.2871690409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 748120.3892885795,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 748086.7306155075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2530855.6366119357,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2530637.7049180376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3623.306997212875,
            "unit": "ns/iter",
            "extra": "iterations: 213142\ncpu: 3623.089771138484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15709.626624839346,
            "unit": "ns/iter",
            "extra": "iterations: 53236\ncpu: 15709.106619580702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12545.250945353115,
            "unit": "ns/iter",
            "extra": "iterations: 65584\ncpu: 12544.99420590381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12045.588650816837,
            "unit": "ns/iter",
            "extra": "iterations: 68093\ncpu: 12045.273376117957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12255.929057659072,
            "unit": "ns/iter",
            "extra": "iterations: 66547\ncpu: 12255.276721715518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43085.48598082693,
            "unit": "ns/iter",
            "extra": "iterations: 19509\ncpu: 43082.57727202849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 468330.25489133736,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 468301.2499999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 383665.5956043754,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 383637.5384615393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 384604.19573901186,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 384582.4678206822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 383007.9911855428,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 382995.6809167011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223175.17617108516,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 223167.87169042783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 373611.42993078317,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 373588.06228373625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1882186.5257731841,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1882045.7731958877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 753770.5547385413,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 753732.7614379099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3994.0153252529153,
            "unit": "ns/iter",
            "extra": "iterations: 201628\ncpu: 3993.817326958573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15679.763901417484,
            "unit": "ns/iter",
            "extra": "iterations: 48772\ncpu: 15678.26006725171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11276.987883760523,
            "unit": "ns/iter",
            "extra": "iterations: 73125\ncpu: 11275.990427350474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11839.876750461774,
            "unit": "ns/iter",
            "extra": "iterations: 70053\ncpu: 11838.71782793033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11525.355557141991,
            "unit": "ns/iter",
            "extra": "iterations: 70000\ncpu: 11524.669999999913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41522.917676270736,
            "unit": "ns/iter",
            "extra": "iterations: 20140\ncpu: 41520.312810327756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 458677.0911528439,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 458636.6756032147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 375911.85353097296,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 375883.47863993136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 378442.38623414445,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 378436.124506795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 377804.586538456,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 377781.5559440578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 225292.6147352213,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 225275.23663341123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 377242.0714905104,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 377218.7608318916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.296166679801,
            "unit": "ns/iter",
            "extra": "iterations: 2283660\ncpu: 304.275505110217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1517.0463482506975,
            "unit": "ns/iter",
            "extra": "iterations: 461053\ncpu: 1516.9366645483303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1192.491070553233,
            "unit": "ns/iter",
            "extra": "iterations: 591638\ncpu: 1192.4041390174443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1196.226725269832,
            "unit": "ns/iter",
            "extra": "iterations: 583358\ncpu: 1196.1255352630778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1017.0970521245222,
            "unit": "ns/iter",
            "extra": "iterations: 687105\ncpu: 1017.0800678207935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7343.697413341365,
            "unit": "ns/iter",
            "extra": "iterations: 95490\ncpu: 7343.171012671485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18698.418551372935,
            "unit": "ns/iter",
            "extra": "iterations: 37539\ncpu: 18696.92586376814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4408.088400886834,
            "unit": "ns/iter",
            "extra": "iterations: 158788\ncpu: 4407.959039725875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4441.714826740276,
            "unit": "ns/iter",
            "extra": "iterations: 156845\ncpu: 4441.695941853403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4429.9201316787885,
            "unit": "ns/iter",
            "extra": "iterations: 157960\ncpu: 4429.764497341149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9329.482611997573,
            "unit": "ns/iter",
            "extra": "iterations: 75023\ncpu: 9328.961785052496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8341.884404346487,
            "unit": "ns/iter",
            "extra": "iterations: 84017\ncpu: 8341.598724067622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3232.945004087398,
            "unit": "ns/iter",
            "extra": "iterations: 216507\ncpu: 3232.8746876544315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15920.805336912586,
            "unit": "ns/iter",
            "extra": "iterations: 43958\ncpu: 15920.41266663617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12753.108804515463,
            "unit": "ns/iter",
            "extra": "iterations: 54915\ncpu: 12752.512064099154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12738.642505225174,
            "unit": "ns/iter",
            "extra": "iterations: 55005\ncpu: 12737.88019270971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13263.118349804548,
            "unit": "ns/iter",
            "extra": "iterations: 52818\ncpu: 13262.67370972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28750.735964515727,
            "unit": "ns/iter",
            "extra": "iterations: 24349\ncpu: 28749.22584089693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99537.20299357933,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 99532.87241625189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 85477.59888683257,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 85475.96784168278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85751.88678090766,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 85745.6793145656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86107.75737905971,
            "unit": "ns/iter",
            "extra": "iterations: 8165\ncpu: 86102.73116962626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55646.094935701054,
            "unit": "ns/iter",
            "extra": "iterations: 12598\ncpu: 55641.35577075692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84781.12372510854,
            "unit": "ns/iter",
            "extra": "iterations: 8236\ncpu: 84777.1976687722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3052.4265322415326,
            "unit": "ns/iter",
            "extra": "iterations: 228032\ncpu: 3052.340460987937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15212.809969530852,
            "unit": "ns/iter",
            "extra": "iterations: 45619\ncpu: 15212.339156930355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12280.055594676063,
            "unit": "ns/iter",
            "extra": "iterations: 56804\ncpu: 12279.837687486786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12073.895833334112,
            "unit": "ns/iter",
            "extra": "iterations: 57840\ncpu: 12073.144882434186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12587.78819120608,
            "unit": "ns/iter",
            "extra": "iterations: 55772\ncpu: 12587.314423007852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27494.066627313354,
            "unit": "ns/iter",
            "extra": "iterations: 25410\ncpu: 27492.451790633673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99499.78743145683,
            "unit": "ns/iter",
            "extra": "iterations: 7113\ncpu: 99495.10754955883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84761.30827066755,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 84758.70725200066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84273.88610037969,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 84268.53281853271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84479.76979542577,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84477.61732851861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56185.367982027135,
            "unit": "ns/iter",
            "extra": "iterations: 12468\ncpu: 56181.73724735255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84903.23466923412,
            "unit": "ns/iter",
            "extra": "iterations: 8284\ncpu: 84898.0202800596 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705955067964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 717.5263042601838,
            "unit": "ns/iter",
            "extra": "iterations: 976914\ncpu: 717.5080918074672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11332.1104478023,
            "unit": "ns/iter",
            "extra": "iterations: 73872\ncpu: 11331.753573749185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25621.244591942675,
            "unit": "ns/iter",
            "extra": "iterations: 33145\ncpu: 25619.975863629505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39096.94455560261,
            "unit": "ns/iter",
            "extra": "iterations: 22491\ncpu: 39094.39331288072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48347.30993474677,
            "unit": "ns/iter",
            "extra": "iterations: 16397\ncpu: 48344.11172775513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59673.65394579669,
            "unit": "ns/iter",
            "extra": "iterations: 14281\ncpu: 59666.381906029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59928.89230000174,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59922.64 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68951.78392558523,
            "unit": "ns/iter",
            "extra": "iterations: 12579\ncpu: 68945.00357739092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78954.24463287361,
            "unit": "ns/iter",
            "extra": "iterations: 11086\ncpu: 78952.4896265561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 571.0089616394575,
            "unit": "ns/iter",
            "extra": "iterations: 1217188\ncpu: 570.9818039612613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 477.4157767530479,
            "unit": "ns/iter",
            "extra": "iterations: 1468401\ncpu: 477.39398161673756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 479.37176718021703,
            "unit": "ns/iter",
            "extra": "iterations: 1461611\ncpu: 479.330888998509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 480.94942920355254,
            "unit": "ns/iter",
            "extra": "iterations: 1454634\ncpu: 480.9143055916477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 963.1234389705171,
            "unit": "ns/iter",
            "extra": "iterations: 724682\ncpu: 963.025299372689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3564.20520874558,
            "unit": "ns/iter",
            "extra": "iterations: 225083\ncpu: 3563.9857297085946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15469.01537209191,
            "unit": "ns/iter",
            "extra": "iterations: 52823\ncpu: 15467.862484145151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12260.182518474963,
            "unit": "ns/iter",
            "extra": "iterations: 66985\ncpu: 12259.255057102331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12001.175337299886,
            "unit": "ns/iter",
            "extra": "iterations: 68411\ncpu: 12000.755726418256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11775.207270466057,
            "unit": "ns/iter",
            "extra": "iterations: 67506\ncpu: 11774.88371404025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42108.961115594095,
            "unit": "ns/iter",
            "extra": "iterations: 19828\ncpu: 42108.45269316121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 457029.7344573409,
            "unit": "ns/iter",
            "extra": "iterations: 1898\ncpu: 457018.8619599573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 370272.6447646918,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 370261.297159813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 371359.92212766875,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 371358.2978723407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 370646.0077087841,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 370641.1134903639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 227653.73380357656,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 227648.66771159964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 368484.582697186,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 368477.14164546283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1866716.69277108,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1866494.7791164701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 767795.8324154328,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 767749.5672698655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2525045.1236262918,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2524792.8571428577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3919.2912303339194,
            "unit": "ns/iter",
            "extra": "iterations: 199962\ncpu: 3919.1511387163628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17285.55101490194,
            "unit": "ns/iter",
            "extra": "iterations: 48182\ncpu: 17284.458926570165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13438.873632911676,
            "unit": "ns/iter",
            "extra": "iterations: 61353\ncpu: 13438.025850406611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13268.223336734909,
            "unit": "ns/iter",
            "extra": "iterations: 62708\ncpu: 13267.363015883077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13357.569235982839,
            "unit": "ns/iter",
            "extra": "iterations: 61962\ncpu: 13356.83322036087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43558.52801164159,
            "unit": "ns/iter",
            "extra": "iterations: 19242\ncpu: 43557.93576551307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 475292.44882322015,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 475260.4269293925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 391046.8048780278,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 391023.5772357712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 389934.33467742853,
            "unit": "ns/iter",
            "extra": "iterations: 2232\ncpu: 389904.88351254456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 380403.315536093,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 380384.9015317262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 224767.06296581484,
            "unit": "ns/iter",
            "extra": "iterations: 3891\ncpu: 224760.3186841418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 378762.24468545604,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 378732.71149674605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1883276.26391766,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1883152.5773195822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 744341.2204344382,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 744275.3821399867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3944.248593047057,
            "unit": "ns/iter",
            "extra": "iterations: 202210\ncpu: 3943.9988131150867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17040.78573329155,
            "unit": "ns/iter",
            "extra": "iterations: 48855\ncpu: 17039.621328420875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13398.105659216133,
            "unit": "ns/iter",
            "extra": "iterations: 61793\ncpu: 13397.388053663042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12420.430166084954,
            "unit": "ns/iter",
            "extra": "iterations: 62799\ncpu: 12419.958916543259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11588.654298315589,
            "unit": "ns/iter",
            "extra": "iterations: 69155\ncpu: 11588.262598510653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41301.97737445294,
            "unit": "ns/iter",
            "extra": "iterations: 20331\ncpu: 41301.38212581787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 456242.83058952953,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 456237.2809346793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374328.2149009147,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 374317.87252368696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 374578.14088157134,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 374576.70700086484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 372401.04086845083,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 372395.57258407737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224408.69460923338,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 224403.53366004679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 369536.5556028693,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 369529.9531316584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 307.6414278206903,
            "unit": "ns/iter",
            "extra": "iterations: 2277653\ncpu: 307.6404087892247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1526.982660664786,
            "unit": "ns/iter",
            "extra": "iterations: 457630\ncpu: 1526.9617376483286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1192.836005893813,
            "unit": "ns/iter",
            "extra": "iterations: 589759\ncpu: 1192.817065954059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1208.243611628462,
            "unit": "ns/iter",
            "extra": "iterations: 579960\ncpu: 1208.2134974825872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1009.2986560699869,
            "unit": "ns/iter",
            "extra": "iterations: 692298\ncpu: 1009.2941190065596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7519.50327294529,
            "unit": "ns/iter",
            "extra": "iterations: 93341\ncpu: 7519.391264288915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18785.501449898416,
            "unit": "ns/iter",
            "extra": "iterations: 37244\ncpu: 18785.42852539982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4446.616551522701,
            "unit": "ns/iter",
            "extra": "iterations: 157484\ncpu: 4446.430748520526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4473.358564997652,
            "unit": "ns/iter",
            "extra": "iterations: 156404\ncpu: 4473.297997493675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4505.170750698348,
            "unit": "ns/iter",
            "extra": "iterations: 155402\ncpu: 4505.0919550584185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9332.30144045271,
            "unit": "ns/iter",
            "extra": "iterations: 74907\ncpu: 9332.02637937717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8463.085742783236,
            "unit": "ns/iter",
            "extra": "iterations: 82211\ncpu: 8462.773838050847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3268.9757603153685,
            "unit": "ns/iter",
            "extra": "iterations: 212379\ncpu: 3268.9244228478337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16344.015820284534,
            "unit": "ns/iter",
            "extra": "iterations: 43046\ncpu: 16343.54876178986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12969.723466533202,
            "unit": "ns/iter",
            "extra": "iterations: 53979\ncpu: 12969.708590377548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13392.962038424055,
            "unit": "ns/iter",
            "extra": "iterations: 54081\ncpu: 13392.465006194227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13488.244377954636,
            "unit": "ns/iter",
            "extra": "iterations: 51805\ncpu: 13488.01853103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28731.064022640378,
            "unit": "ns/iter",
            "extra": "iterations: 24382\ncpu: 28730.953162168666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100448.82212644123,
            "unit": "ns/iter",
            "extra": "iterations: 6960\ncpu: 100447.24137931161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86562.02986915862,
            "unit": "ns/iter",
            "extra": "iterations: 8102\ncpu: 86560.61466304676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86802.57481862904,
            "unit": "ns/iter",
            "extra": "iterations: 8133\ncpu: 86799.20078691862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86887.56786251842,
            "unit": "ns/iter",
            "extra": "iterations: 7972\ncpu: 86887.2052182625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56466.536620741485,
            "unit": "ns/iter",
            "extra": "iterations: 12411\ncpu: 56466.344371928346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86032.43122998206,
            "unit": "ns/iter",
            "extra": "iterations: 8114\ncpu: 86028.2351491254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3109.065104825174,
            "unit": "ns/iter",
            "extra": "iterations: 225375\ncpu: 3108.956184137499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15555.35753966568,
            "unit": "ns/iter",
            "extra": "iterations: 45002\ncpu: 15555.059775121243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12573.27196119083,
            "unit": "ns/iter",
            "extra": "iterations: 55655\ncpu: 12573.076992184093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12397.320481670336,
            "unit": "ns/iter",
            "extra": "iterations: 56387\ncpu: 12396.339581818407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12918.019356395138,
            "unit": "ns/iter",
            "extra": "iterations: 53884\ncpu: 12917.12567738119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27609.543265998964,
            "unit": "ns/iter",
            "extra": "iterations: 25297\ncpu: 27606.66482191527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100042.72242095708,
            "unit": "ns/iter",
            "extra": "iterations: 6989\ncpu: 100036.70052940346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85434.6780219729,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 85432.039072039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85022.10723794978,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 85022.35536189834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90369.03451362676,
            "unit": "ns/iter",
            "extra": "iterations: 7823\ncpu: 90358.11069921912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56073.229797776316,
            "unit": "ns/iter",
            "extra": "iterations: 12511\ncpu: 56072.424266644644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84473.22904353887,
            "unit": "ns/iter",
            "extra": "iterations: 8291\ncpu: 84471.61982872905 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705957078668,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 712.5979380077462,
            "unit": "ns/iter",
            "extra": "iterations: 981672\ncpu: 712.5831234872747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11163.40101989728,
            "unit": "ns/iter",
            "extra": "iterations: 73929\ncpu: 11163.092967577002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24869.84043282469,
            "unit": "ns/iter",
            "extra": "iterations: 33547\ncpu: 24869.353444421264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39922.83736182772,
            "unit": "ns/iter",
            "extra": "iterations: 21803\ncpu: 39922.88217217814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50589.32259852114,
            "unit": "ns/iter",
            "extra": "iterations: 16240\ncpu: 50587.838669950754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60084.55786119677,
            "unit": "ns/iter",
            "extra": "iterations: 14120\ncpu: 60083.43484419261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59931.53910000047,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59928.66000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69207.16297481114,
            "unit": "ns/iter",
            "extra": "iterations: 12505\ncpu: 69206.55737704922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78913.81819004014,
            "unit": "ns/iter",
            "extra": "iterations: 11061\ncpu: 78912.602838803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 572.6493829759053,
            "unit": "ns/iter",
            "extra": "iterations: 1225722\ncpu: 572.6528527675932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 479.5957694207345,
            "unit": "ns/iter",
            "extra": "iterations: 1457720\ncpu: 479.59251433745857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 478.8786868559392,
            "unit": "ns/iter",
            "extra": "iterations: 1459916\ncpu: 478.86926371106324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 481.8539552455728,
            "unit": "ns/iter",
            "extra": "iterations: 1454739\ncpu: 481.85406454353716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 965.7420357345017,
            "unit": "ns/iter",
            "extra": "iterations: 726244\ncpu: 965.7269457647848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3609.8837992698896,
            "unit": "ns/iter",
            "extra": "iterations: 222348\ncpu: 3609.8952992606237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15270.019247268325,
            "unit": "ns/iter",
            "extra": "iterations: 53618\ncpu: 15269.549405050517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12540.705160944557,
            "unit": "ns/iter",
            "extra": "iterations: 65395\ncpu: 12540.561204985042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12269.88749062548,
            "unit": "ns/iter",
            "extra": "iterations: 66670\ncpu: 12269.713514324289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12425.172827535584,
            "unit": "ns/iter",
            "extra": "iterations: 66008\ncpu: 12425.26663434732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42444.910812706505,
            "unit": "ns/iter",
            "extra": "iterations: 19958\ncpu: 42442.90510071162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 450776.1646628089,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 450778.30632514245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 369976.7909940745,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 369969.07391673804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 371588.90792836336,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 371587.5106564363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 372443.4466522319,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 372442.07343412616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 226417.80130376903,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 226412.95958278977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 364733.4229299304,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 364732.05944798345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1863270.8225807035,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1863159.2741935456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 723885.1382239298,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 723879.5366795367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2517994.035422368,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2517715.5313351513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3788.1093822468797,
            "unit": "ns/iter",
            "extra": "iterations: 219926\ncpu: 3788.109182179455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15365.128691111666,
            "unit": "ns/iter",
            "extra": "iterations: 53236\ncpu: 15364.864001803333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12217.401564184689,
            "unit": "ns/iter",
            "extra": "iterations: 66744\ncpu: 12217.442766390985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11983.367050327133,
            "unit": "ns/iter",
            "extra": "iterations: 68116\ncpu: 11983.259439779233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11916.492840646006,
            "unit": "ns/iter",
            "extra": "iterations: 69280\ncpu: 11916.108545034609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41441.036348311565,
            "unit": "ns/iter",
            "extra": "iterations: 20166\ncpu: 41440.99474362786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 473104.4222222127,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 473091.49051490595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 387843.4256756742,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 387835.4954954956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 386471.1837096056,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 386463.34661354485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 384120.9924545163,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 384115.2685308459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221826.40456644367,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 221825.1667521805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 381714.91778451327,
            "unit": "ns/iter",
            "extra": "iterations: 2311\ncpu: 381707.4426655151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1890217.0721648685,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1890148.659793817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 734434.8980423522,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 734419.3311582356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4050.604972106514,
            "unit": "ns/iter",
            "extra": "iterations: 184630\ncpu: 4050.4999187564226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16821.877323729015,
            "unit": "ns/iter",
            "extra": "iterations: 48306\ncpu: 16821.512855545978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13715.01028923931,
            "unit": "ns/iter",
            "extra": "iterations: 59674\ncpu: 13714.699869289769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12072.71921387451,
            "unit": "ns/iter",
            "extra": "iterations: 62382\ncpu: 12072.676413067938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11992.238454259354,
            "unit": "ns/iter",
            "extra": "iterations: 66583\ncpu: 11977.22391601462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41156.757431865,
            "unit": "ns/iter",
            "extra": "iterations: 20217\ncpu: 41156.7195924221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 466237.76093915314,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 466231.6969050155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 374852.10064796166,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 374843.4989200864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 378287.00932994176,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 378286.4715860887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 378291.9662775451,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 378280.7176826621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226620.8579912143,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 226619.1066356824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 374889.14919531543,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 374883.732057417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.9122988611855,
            "unit": "ns/iter",
            "extra": "iterations: 2296424\ncpu: 302.9030788739356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1504.1024769285666,
            "unit": "ns/iter",
            "extra": "iterations: 465617\ncpu: 1504.073734421216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1208.6177296030148,
            "unit": "ns/iter",
            "extra": "iterations: 581863\ncpu: 1208.615945677932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1133.8881910668097,
            "unit": "ns/iter",
            "extra": "iterations: 616999\ncpu: 1133.8874131076352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1001.0540121280875,
            "unit": "ns/iter",
            "extra": "iterations: 702009\ncpu: 1001.0538326431739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7300.658960133439,
            "unit": "ns/iter",
            "extra": "iterations: 96974\ncpu: 7300.452698661517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19071.307504146276,
            "unit": "ns/iter",
            "extra": "iterations: 36793\ncpu: 19070.603103851136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4488.677334137669,
            "unit": "ns/iter",
            "extra": "iterations: 155957\ncpu: 4488.505164885151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4511.2343484309795,
            "unit": "ns/iter",
            "extra": "iterations: 155256\ncpu: 4511.196990776546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4502.807269914699,
            "unit": "ns/iter",
            "extra": "iterations: 155160\ncpu: 4502.655968032982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9438.580142265766,
            "unit": "ns/iter",
            "extra": "iterations: 74087\ncpu: 9438.56951961878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8474.378062245753,
            "unit": "ns/iter",
            "extra": "iterations: 82415\ncpu: 8474.117575684013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3294.616987694699,
            "unit": "ns/iter",
            "extra": "iterations: 211612\ncpu: 3294.616089824771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16242.62457978944,
            "unit": "ns/iter",
            "extra": "iterations: 43133\ncpu: 16242.227528806206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13075.559956673738,
            "unit": "ns/iter",
            "extra": "iterations: 53547\ncpu: 13075.32261377838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13020.718801841887,
            "unit": "ns/iter",
            "extra": "iterations: 53649\ncpu: 13020.427221383503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13237.479504308283,
            "unit": "ns/iter",
            "extra": "iterations: 51645\ncpu: 13237.082002130013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28530.187663292025,
            "unit": "ns/iter",
            "extra": "iterations: 24496\ncpu: 28530.319235793377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99122.83836816094,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 99121.68266516142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86682.4528138435,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 86683.73531230555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86160.48494492087,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 86157.96817625464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86349.42491657381,
            "unit": "ns/iter",
            "extra": "iterations: 8091\ncpu: 86349.02978618226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56000.93922165521,
            "unit": "ns/iter",
            "extra": "iterations: 12488\ncpu: 55999.10313901388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85702.91929350713,
            "unit": "ns/iter",
            "extra": "iterations: 8153\ncpu: 85700.52741322151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3129.950207801423,
            "unit": "ns/iter",
            "extra": "iterations: 224493\ncpu: 3129.955945174239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15586.02773511504,
            "unit": "ns/iter",
            "extra": "iterations: 44925\ncpu: 15586.001112966078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12596.139690693883,
            "unit": "ns/iter",
            "extra": "iterations: 55673\ncpu: 12596.227974062935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12457.485424297032,
            "unit": "ns/iter",
            "extra": "iterations: 56258\ncpu: 12457.561591240206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12945.972649258189,
            "unit": "ns/iter",
            "extra": "iterations: 54185\ncpu: 12945.839254406144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27617.437371827218,
            "unit": "ns/iter",
            "extra": "iterations: 25356\ncpu: 27617.321344060554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99634.45633000843,
            "unit": "ns/iter",
            "extra": "iterations: 7030\ncpu: 99632.01991465232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84835.32524272136,
            "unit": "ns/iter",
            "extra": "iterations: 8240\ncpu: 84835.00000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 84208.75303887455,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 84208.6051269711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83876.51298389255,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 83875.21038711134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55797.64254980183,
            "unit": "ns/iter",
            "extra": "iterations: 12550\ncpu: 55797.0836653393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84955.98927968692,
            "unit": "ns/iter",
            "extra": "iterations: 8302\ncpu: 84954.0472175373 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705958549472,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 705.0565909460554,
            "unit": "ns/iter",
            "extra": "iterations: 997262\ncpu: 705.0288690434411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11448.261814103855,
            "unit": "ns/iter",
            "extra": "iterations: 72223\ncpu: 11447.89886878141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25040.527793574667,
            "unit": "ns/iter",
            "extra": "iterations: 33407\ncpu: 25039.955697907622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40056.07010563031,
            "unit": "ns/iter",
            "extra": "iterations: 21111\ncpu: 40054.871867746675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49503.625007624796,
            "unit": "ns/iter",
            "extra": "iterations: 16387\ncpu: 49501.305913223936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50576.68439999361,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50574.72000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61271.10660000881,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61270.91 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71078.1452935388,
            "unit": "ns/iter",
            "extra": "iterations: 12196\ncpu: 71074.18005903575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80347.79002213106,
            "unit": "ns/iter",
            "extra": "iterations: 10844\ncpu: 80345.93323496857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 579.2557973418126,
            "unit": "ns/iter",
            "extra": "iterations: 1199774\ncpu: 579.2361728125459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 479.9186999845918,
            "unit": "ns/iter",
            "extra": "iterations: 1457552\ncpu: 479.9181092681428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 475.9786083301106,
            "unit": "ns/iter",
            "extra": "iterations: 1448835\ncpu: 475.97800991831457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.7394819859577,
            "unit": "ns/iter",
            "extra": "iterations: 1461968\ncpu: 479.7369709870534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 973.3579457739448,
            "unit": "ns/iter",
            "extra": "iterations: 722900\ncpu: 973.3397427030029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3546.2102615055583,
            "unit": "ns/iter",
            "extra": "iterations: 221410\ncpu: 3546.0692832302107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15408.841922984575,
            "unit": "ns/iter",
            "extra": "iterations: 53417\ncpu: 15408.304472359003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12610.465449604613,
            "unit": "ns/iter",
            "extra": "iterations: 65513\ncpu: 12610.260558973056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12359.36503597284,
            "unit": "ns/iter",
            "extra": "iterations: 66577\ncpu: 12359.14955615301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12524.702605966493,
            "unit": "ns/iter",
            "extra": "iterations: 65657\ncpu: 12524.693482796947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41893.55206079033,
            "unit": "ns/iter",
            "extra": "iterations: 19871\ncpu: 41892.89919983895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 455659.724137899,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 455649.94775339594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 368683.5911602554,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 368675.2231194224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 369930.4417229393,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 369926.6469594599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 375861.19991439115,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 375851.1986301383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 225686.10143789437,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 225680.65359477172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 370558.2103463365,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 370546.43009833276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1880210.2423624443,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1880164.9694501027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 750303.309904159,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 750295.9265175711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2540581.349862354,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2540521.487603302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3683.851185172773,
            "unit": "ns/iter",
            "extra": "iterations: 215496\ncpu: 3683.786706017747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 15479.176716430533,
            "unit": "ns/iter",
            "extra": "iterations: 53119\ncpu: 15478.759012782615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 12608.168919334434,
            "unit": "ns/iter",
            "extra": "iterations: 65256\ncpu: 12608.054431776374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12371.894953470322,
            "unit": "ns/iter",
            "extra": "iterations: 66085\ncpu: 12371.622909888758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12549.119572660222,
            "unit": "ns/iter",
            "extra": "iterations: 65709\ncpu: 12548.862408498124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42982.66458311512,
            "unit": "ns/iter",
            "extra": "iterations: 19358\ncpu: 42981.49602231635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 478891.1117841638,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 478890.85903083696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 390388.8197958287,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 390383.97691966186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 390019.45372866705,
            "unit": "ns/iter",
            "extra": "iterations: 2226\ncpu: 390011.320754717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 389406.02039006824,
            "unit": "ns/iter",
            "extra": "iterations: 2256\ncpu: 389402.5709219843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 226808.5058823488,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 226806.326797386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 385404.60567124776,
            "unit": "ns/iter",
            "extra": "iterations: 2257\ncpu: 385399.15817456867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1887206.0838572832,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1887125.7861635266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 752847.9550286,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 752828.2910874857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4001.5214823443694,
            "unit": "ns/iter",
            "extra": "iterations: 199117\ncpu: 4001.4423680549617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 16840.05766646089,
            "unit": "ns/iter",
            "extra": "iterations: 49110\ncpu: 16839.898187741794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 13732.170243585677,
            "unit": "ns/iter",
            "extra": "iterations: 60061\ncpu: 13732.183946321238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13486.390822086416,
            "unit": "ns/iter",
            "extra": "iterations: 61125\ncpu: 13486.391820040986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13379.955759251683,
            "unit": "ns/iter",
            "extra": "iterations: 60329\ncpu: 13379.84882892148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42793.01758657908,
            "unit": "ns/iter",
            "extra": "iterations: 18480\ncpu: 42792.023809523824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 476667.70947035454,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 476147.9400749076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 380358.4480946202,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 380340.4730617613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 382862.61044706806,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 382855.33421868336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 379114.36040836124,
            "unit": "ns/iter",
            "extra": "iterations: 2253\ncpu: 379114.51398135937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 229353.94224294,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 229348.64024864003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 380965.687032975,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 380961.8021978011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 310.42433781446687,
            "unit": "ns/iter",
            "extra": "iterations: 2253900\ncpu: 310.4188739518164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1491.7362505376411,
            "unit": "ns/iter",
            "extra": "iterations: 469582\ncpu: 1491.7109258872908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1182.6264536793767,
            "unit": "ns/iter",
            "extra": "iterations: 593838\ncpu: 1182.6013155102876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1166.609898000951,
            "unit": "ns/iter",
            "extra": "iterations: 599515\ncpu: 1166.5776502672995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1005.26797674702,
            "unit": "ns/iter",
            "extra": "iterations: 694105\ncpu: 1005.2398412343927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7374.400695550763,
            "unit": "ns/iter",
            "extra": "iterations: 95464\ncpu: 7374.22379116739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19301.20388536305,
            "unit": "ns/iter",
            "extra": "iterations: 36393\ncpu: 19300.62649410587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4683.779981083283,
            "unit": "ns/iter",
            "extra": "iterations: 150128\ncpu: 4683.691250133238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4721.870165466081,
            "unit": "ns/iter",
            "extra": "iterations: 148127\ncpu: 4721.862320846237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4676.787334283787,
            "unit": "ns/iter",
            "extra": "iterations: 149427\ncpu: 4676.77996613731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9498.116926093977,
            "unit": "ns/iter",
            "extra": "iterations: 73431\ncpu: 9497.974969699406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8645.185973421829,
            "unit": "ns/iter",
            "extra": "iterations: 80818\ncpu: 8645.110000247405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3286.7159483122996,
            "unit": "ns/iter",
            "extra": "iterations: 212662\ncpu: 3286.6812124404355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16151.091828255161,
            "unit": "ns/iter",
            "extra": "iterations: 43320\ncpu: 16150.80101569717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13020.131565873147,
            "unit": "ns/iter",
            "extra": "iterations: 54353\ncpu: 13019.886666789303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13086.246911490412,
            "unit": "ns/iter",
            "extra": "iterations: 53181\ncpu: 13086.01004118023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13455.709317294532,
            "unit": "ns/iter",
            "extra": "iterations: 52043\ncpu: 13455.336932920663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28876.8750978983,
            "unit": "ns/iter",
            "extra": "iterations: 24259\ncpu: 28876.07485881513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 102907.77897058861,
            "unit": "ns/iter",
            "extra": "iterations: 6800\ncpu: 102907.69117646945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 87928.18176101742,
            "unit": "ns/iter",
            "extra": "iterations: 7950\ncpu: 87926.51572327196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87184.97071285908,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 87183.39980059829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 87563.33370898437,
            "unit": "ns/iter",
            "extra": "iterations: 7986\ncpu: 87561.55772602072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56633.31062317841,
            "unit": "ns/iter",
            "extra": "iterations: 12388\ncpu: 56632.19244430061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 87155.30498570803,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 87155.07895063928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3146.9529398558525,
            "unit": "ns/iter",
            "extra": "iterations: 222715\ncpu: 3146.890420492536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15619.822287270836,
            "unit": "ns/iter",
            "extra": "iterations: 44752\ncpu: 15619.625938505598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12612.833121247964,
            "unit": "ns/iter",
            "extra": "iterations: 55795\ncpu: 12612.644502195499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12394.714589047444,
            "unit": "ns/iter",
            "extra": "iterations: 56515\ncpu: 12394.495266743399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12763.242712201723,
            "unit": "ns/iter",
            "extra": "iterations: 54406\ncpu: 12762.414071977373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27541.137967745573,
            "unit": "ns/iter",
            "extra": "iterations: 25361\ncpu: 27539.931390717764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100430.21720367696,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 100425.73360183988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 84954.63125985373,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 84954.55317085037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83559.83092537623,
            "unit": "ns/iter",
            "extra": "iterations: 8375\ncpu: 83558.06567164137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 85808.75856948063,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 85803.7000371234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56477.02358874477,
            "unit": "ns/iter",
            "extra": "iterations: 12294\ncpu: 56474.62990076535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 86708.11593137217,
            "unit": "ns/iter",
            "extra": "iterations: 8160\ncpu: 86702.4509803924 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705960342281,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 719.3251070958529,
            "unit": "ns/iter",
            "extra": "iterations: 974362\ncpu: 719.2982690211646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11311.674908823752,
            "unit": "ns/iter",
            "extra": "iterations: 73484\ncpu: 11311.35757443797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25161.72776732144,
            "unit": "ns/iter",
            "extra": "iterations: 33453\ncpu: 25160.637312049737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39505.094190024945,
            "unit": "ns/iter",
            "extra": "iterations: 21945\ncpu: 39503.135110503536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47765.427664290946,
            "unit": "ns/iter",
            "extra": "iterations: 16693\ncpu: 47764.81758821064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59547.88642932418,
            "unit": "ns/iter",
            "extra": "iterations: 14185\ncpu: 59546.443426154394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60422.474400002095,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60421.25 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69045.69594539827,
            "unit": "ns/iter",
            "extra": "iterations: 12603\ncpu: 69044.60049194643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79277.8995280579,
            "unit": "ns/iter",
            "extra": "iterations: 11018\ncpu: 79274.68687602108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 573.8691700948756,
            "unit": "ns/iter",
            "extra": "iterations: 1221525\ncpu: 573.8636540390095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 481.6299765276349,
            "unit": "ns/iter",
            "extra": "iterations: 1452343\ncpu: 481.6246575361322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 481.0085586383851,
            "unit": "ns/iter",
            "extra": "iterations: 1455138\ncpu: 480.99046276023313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 484.9798557074138,
            "unit": "ns/iter",
            "extra": "iterations: 1443734\ncpu: 484.97146981369104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 953.53702774072,
            "unit": "ns/iter",
            "extra": "iterations: 735057\ncpu: 953.5113603434837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3365.0825569152,
            "unit": "ns/iter",
            "extra": "iterations: 233766\ncpu: 3364.9354482687763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 15335.47219772281,
            "unit": "ns/iter",
            "extra": "iterations: 53287\ncpu: 15334.978512582833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 12724.469384005532,
            "unit": "ns/iter",
            "extra": "iterations: 65309\ncpu: 12724.226370025584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 12345.529746951195,
            "unit": "ns/iter",
            "extra": "iterations: 65284\ncpu: 12345.30359659337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12169.1344601681,
            "unit": "ns/iter",
            "extra": "iterations: 65789\ncpu: 12168.979616653265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41553.201622948545,
            "unit": "ns/iter",
            "extra": "iterations: 20087\ncpu: 41551.252053567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 455065.4223504216,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 455052.88562434487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 370426.75965664507,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 370417.63948497904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 371000.7526561592,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 370984.70038249076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 373474.50734022347,
            "unit": "ns/iter",
            "extra": "iterations: 2316\ncpu: 373462.8670120886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 230392.92340204152,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 230386.23877443207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 366379.62886163837,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 366364.832839611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1893998.9466118047,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1893898.7679671412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 732645.9264476837,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 732627.9342723001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2547033.784530466,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2546938.397790054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4103.46241031896,
            "unit": "ns/iter",
            "extra": "iterations: 200015\ncpu: 4103.300252481075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 16941.568747938843,
            "unit": "ns/iter",
            "extra": "iterations: 48496\ncpu: 16941.03637413399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 13766.676732032616,
            "unit": "ns/iter",
            "extra": "iterations: 60074\ncpu: 13766.557911908742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13564.318238293974,
            "unit": "ns/iter",
            "extra": "iterations: 61168\ncpu: 13563.884710960025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 13539.385349636714,
            "unit": "ns/iter",
            "extra": "iterations: 60449\ncpu: 13538.945226554544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42279.869897057644,
            "unit": "ns/iter",
            "extra": "iterations: 19915\ncpu: 42278.07682651269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 469449.55790048157,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 469440.0432900448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 385679.79536338686,
            "unit": "ns/iter",
            "extra": "iterations: 2243\ncpu: 385667.98930004437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 385263.8831341661,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 385245.1969898182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 385459.368537382,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 385450.55236411723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221614.56670898345,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 221605.46378653072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 383333.7087888431,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 383323.3056405766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1898753.0000000168,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1898432.8451882857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 762631.5799503028,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 762616.4043082044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3765.1602634629326,
            "unit": "ns/iter",
            "extra": "iterations: 200863\ncpu: 3762.8159491793044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15028.488187134939,
            "unit": "ns/iter",
            "extra": "iterations: 55575\ncpu: 15028.475033738114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12162.117888440567,
            "unit": "ns/iter",
            "extra": "iterations: 68234\ncpu: 12162.005744936572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11953.918734882925,
            "unit": "ns/iter",
            "extra": "iterations: 69464\ncpu: 11953.907059771971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12094.288271309684,
            "unit": "ns/iter",
            "extra": "iterations: 68439\ncpu: 12094.16852963954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41153.015623462896,
            "unit": "ns/iter",
            "extra": "iterations: 20290\ncpu: 41152.557910300675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 458895.2745202955,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 458891.3113006374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 379641.78991592745,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 379634.1441839888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 377051.9717022531,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 377047.88855028263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 377549.3754370478,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 377534.17832167743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 230398.6804903579,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 230394.10537297817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 376192.9991337955,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 376175.44391511526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.59487843826065,
            "unit": "ns/iter",
            "extra": "iterations: 2302657\ncpu: 302.5830160549308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1527.990226301445,
            "unit": "ns/iter",
            "extra": "iterations: 458680\ncpu: 1527.9445364960318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1206.9497370241054,
            "unit": "ns/iter",
            "extra": "iterations: 579711\ncpu: 1206.921034791475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1221.9193184656813,
            "unit": "ns/iter",
            "extra": "iterations: 588437\ncpu: 1221.907527908678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1002.2769326145693,
            "unit": "ns/iter",
            "extra": "iterations: 700062\ncpu: 1002.2582285569036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7666.248056909095,
            "unit": "ns/iter",
            "extra": "iterations: 91092\ncpu: 7665.788433671398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19363.85353409718,
            "unit": "ns/iter",
            "extra": "iterations: 36063\ncpu: 19363.131187088922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4541.3021072874535,
            "unit": "ns/iter",
            "extra": "iterations: 154369\ncpu: 4541.140384403634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4549.412257896788,
            "unit": "ns/iter",
            "extra": "iterations: 153860\ncpu: 4549.3728064474335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4562.278777969013,
            "unit": "ns/iter",
            "extra": "iterations: 154137\ncpu: 4562.048048164996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9489.634714219663,
            "unit": "ns/iter",
            "extra": "iterations: 73745\ncpu: 9489.616923181316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8586.66215159904,
            "unit": "ns/iter",
            "extra": "iterations: 81874\ncpu: 8586.210518601727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3285.864938448947,
            "unit": "ns/iter",
            "extra": "iterations: 213399\ncpu: 3285.75438497833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16529.55438843893,
            "unit": "ns/iter",
            "extra": "iterations: 42555\ncpu: 16528.86852308798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13156.25358265801,
            "unit": "ns/iter",
            "extra": "iterations: 53103\ncpu: 13155.82170498818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13135.818103414858,
            "unit": "ns/iter",
            "extra": "iterations: 53338\ncpu: 13135.45314784958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13616.11853566004,
            "unit": "ns/iter",
            "extra": "iterations: 51436\ncpu: 13615.288902714068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29067.00453580418,
            "unit": "ns/iter",
            "extra": "iterations: 24031\ncpu: 29066.197827805936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 101119.70930566803,
            "unit": "ns/iter",
            "extra": "iterations: 6942\ncpu: 101114.28983001965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 88145.69568497699,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 88145.62838092812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87030.91956737963,
            "unit": "ns/iter",
            "extra": "iterations: 8044\ncpu: 87028.0581800097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86883.76820781668,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86877.85234899269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 56523.458390505,
            "unit": "ns/iter",
            "extra": "iterations: 12389\ncpu: 56521.25272419086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 86966.85577759927,
            "unit": "ns/iter",
            "extra": "iterations: 8057\ncpu: 86964.67667866412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3073.1593768616985,
            "unit": "ns/iter",
            "extra": "iterations: 228264\ncpu: 3073.1534538955034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15765.84989174527,
            "unit": "ns/iter",
            "extra": "iterations: 44801\ncpu: 15765.22399053596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12660.308075031267,
            "unit": "ns/iter",
            "extra": "iterations: 55071\ncpu: 12659.924461150356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12398.543395955823,
            "unit": "ns/iter",
            "extra": "iterations: 56261\ncpu: 12397.82798030583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12967.765912159923,
            "unit": "ns/iter",
            "extra": "iterations: 54031\ncpu: 12967.229923562201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28155.823458329658,
            "unit": "ns/iter",
            "extra": "iterations: 24827\ncpu: 28154.27961493541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 100507.61771562211,
            "unit": "ns/iter",
            "extra": "iterations: 6864\ncpu: 100502.06876456951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85367.93544457025,
            "unit": "ns/iter",
            "extra": "iterations: 8210\ncpu: 85364.67722289934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 85027.44874438434,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 85024.85745480984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84659.1130256784,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 84655.60910953183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 56547.62297363225,
            "unit": "ns/iter",
            "extra": "iterations: 12214\ncpu: 56545.51334534177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 85775.04226038013,
            "unit": "ns/iter",
            "extra": "iterations: 8211\ncpu: 85771.1606381685 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}