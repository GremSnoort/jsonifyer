window.BENCHMARK_DATA = {
  "lastUpdate": 1705958241963,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-9 20.04 Debug c++-17": [
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
        "date": 1702489544287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16803.148604348637,
            "unit": "ns/iter",
            "extra": "iterations: 41486\ncpu: 16802.032010798823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 140992.5916534665,
            "unit": "ns/iter",
            "extra": "iterations: 5679\ncpu: 140979.89082584958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 255009.86719437188,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 254994.37115215475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 370758.48641654995,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 370735.705045278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 488698.8726760547,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 488665.7464788733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 606482.8317038809,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 606453.3519553075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 584069.5570000208,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584015.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 679732.5604395402,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 679688.4981684987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 769908.0921926878,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 769838.7873754154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13426.542385567262,
            "unit": "ns/iter",
            "extra": "iterations: 52105\ncpu: 13426.043565876604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11370.272859844192,
            "unit": "ns/iter",
            "extra": "iterations: 62402\ncpu: 11369.704496650733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11209.395615482199,
            "unit": "ns/iter",
            "extra": "iterations: 62447\ncpu: 11208.568866398698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11207.189164076348,
            "unit": "ns/iter",
            "extra": "iterations: 62422\ncpu: 11206.537759123392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18707.565411442927,
            "unit": "ns/iter",
            "extra": "iterations: 37417\ncpu: 18706.16831921322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56994.23283082019,
            "unit": "ns/iter",
            "extra": "iterations: 14328\ncpu: 56992.09938581804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 260556.23885155772,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 260539.49297495437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204806.34055875803,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 204794.1714836223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 211055.18568952748,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 211061.7231988119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202196.51831588373,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 202185.44243577597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 501268.4577828891,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 501237.5071797814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4294628.074418607,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4294278.139534883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3475870.1716417284,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3475696.6417910475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3422927.1286764294,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3422657.7205882254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3483728.670411981,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3483497.0037453067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1962314.6313558395,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1962261.2288135565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3359577.134057931,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3359174.275362324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12503261.129411252,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12502162.35294116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5663460.369999599,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5663099.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16624506.750000378,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16622787.500000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53783.91940000142,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53781.98000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293510.1687158475,
            "unit": "ns/iter",
            "extra": "iterations: 2928\ncpu: 293494.0915300535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 237111.03554568064,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 237093.33518467232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 242729.98388009967,
            "unit": "ns/iter",
            "extra": "iterations: 3536\ncpu: 242714.02714932134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229906.87742980066,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 229895.2213822907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 521697.3059880261,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 521672.5748502997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4384311.693396437,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4383970.283018867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3516046.573584836,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3515882.2641509534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3481624.9662921526,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3481430.711610506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3519980.2188679245,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3519629.811320774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2044074.7715516665,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2043923.706896552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3388010.262773917,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3387639.051094893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12809848.048192749,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12809095.1807229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5624298.53000026,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5623845.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54772.49426430579,
            "unit": "ns/iter",
            "extra": "iterations: 15081\ncpu: 54748.3853855843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 275415.4090471758,
            "unit": "ns/iter",
            "extra": "iterations: 3117\ncpu: 275400.737888996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 209510.27904133874,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 209499.36414771268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 206415.79801883415,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 206403.33413868063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 202628.64076978824,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 202618.05654549805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 506632.67075309006,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 506606.47985989554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4312751.574073769,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4312468.055555543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3479929.6380597227,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3479547.7611940447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3432981.3455885267,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3432705.1470588325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3490520.8464422426,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3490108.61423222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1968571.006369431,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1968445.2229299427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3354954.4079418713,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3354593.501805056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6501.066236195541,
            "unit": "ns/iter",
            "extra": "iterations: 107479\ncpu: 6500.3656528252495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36190.60798717363,
            "unit": "ns/iter",
            "extra": "iterations: 19331\ncpu: 36185.95002845152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26994.589908502956,
            "unit": "ns/iter",
            "extra": "iterations: 26121\ncpu: 26992.090655028274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27639.786773771964,
            "unit": "ns/iter",
            "extra": "iterations: 25147\ncpu: 27636.394003260728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22887.200772325185,
            "unit": "ns/iter",
            "extra": "iterations: 30557\ncpu: 22884.340740255677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 139594.51066799875,
            "unit": "ns/iter",
            "extra": "iterations: 5015\ncpu: 139577.56729810705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 290890.06192853826,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 290860.4738154596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72865.66916901222,
            "unit": "ns/iter",
            "extra": "iterations: 9591\ncpu: 72863.7159837339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72442.8380784738,
            "unit": "ns/iter",
            "extra": "iterations: 9659\ncpu: 72435.7904544997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72957.87359550135,
            "unit": "ns/iter",
            "extra": "iterations: 9612\ncpu: 72949.85434873085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144847.82278742874,
            "unit": "ns/iter",
            "extra": "iterations: 4836\ncpu: 144830.58312655147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135369.12282397575,
            "unit": "ns/iter",
            "extra": "iterations: 5170\ncpu: 135354.7969052233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45896.898645984045,
            "unit": "ns/iter",
            "extra": "iterations: 15214\ncpu: 45891.57355067738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234537.15957446446,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 234510.05802707697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181454.70991178945,
            "unit": "ns/iter",
            "extra": "iterations: 3854\ncpu: 181433.41982355935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 180970.26716573918,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 180954.72379968961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 183041.30735139042,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 183020.35974973833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 315311.9347434997,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 315281.32313230797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1250015.1053572495,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1249941.071428573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1049490.25710019,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1049457.997010458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1037679.185351299,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1037602.840059774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1039485.4873699341,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1039348.2912332783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 678531.6485963158,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 678451.5004840312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1031020.0455881399,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1030936.0294117657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46250.09427742333,
            "unit": "ns/iter",
            "extra": "iterations: 15168\ncpu: 46246.242088607854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 226488.18323081834,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 226458.07704758766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 185302.43348320096,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185283.86670192998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 182233.47451899204,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 182221.94487779555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181953.72876071604,
            "unit": "ns/iter",
            "extra": "iterations: 3849\ncpu: 181943.88152766787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 316597.2875787602,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 316579.2979297954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1245414.7599278209,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1245348.0144404422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1036886.232248518,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1036786.3905325371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1032231.258112081,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1032085.840707966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1033305.1016200798,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1033217.2312223864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 674836.6865959305,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 674796.3355834133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1023069.5153732646,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1023033.0893118418 ns\nthreads: 1"
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
        "date": 1702492158682,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16185.187151806389,
            "unit": "ns/iter",
            "extra": "iterations: 43259\ncpu: 16184.45179037888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132197.4083229045,
            "unit": "ns/iter",
            "extra": "iterations: 6392\ncpu: 132192.5688360451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 249882.19759450463,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 249868.18442153503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 362620.44696969545,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 362609.13299663283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 480038.54249449953,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 480020.0331125828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 594615.9628610623,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 594591.9532324618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 572152.6309999945,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572141.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 664849.7079136636,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 664828.1294964036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 756834.5960591214,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 756817.5697865362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12874.093854522545,
            "unit": "ns/iter",
            "extra": "iterations: 54414\ncpu: 12874.13533281877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10839.069967007043,
            "unit": "ns/iter",
            "extra": "iterations: 64559\ncpu: 10838.846636410097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10835.468600972525,
            "unit": "ns/iter",
            "extra": "iterations: 64795\ncpu: 10835.192530287835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10924.068426028278,
            "unit": "ns/iter",
            "extra": "iterations: 63470\ncpu: 10923.726169844007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18167.86183356593,
            "unit": "ns/iter",
            "extra": "iterations: 38526\ncpu: 18167.44795722371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57667.10491433555,
            "unit": "ns/iter",
            "extra": "iterations: 14183\ncpu: 57665.33878587042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 261556.5878918225,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 261549.35464044326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 206377.89699467266,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 206374.72127969007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 208930.16969548687,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 208929.05206286866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202531.8792732473,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 202526.5598852498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 519261.96441280737,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 519241.814946619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4110734.4424777147,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4110566.3716814173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3326956.6129031586,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3326837.9928315408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3312648.5250000264,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3312532.5000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3350542.8916968796,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3350437.5451263594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1965137.6581740691,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1965064.9681528653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3232329.216783174,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3232246.1538461572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12563056.894117942,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12562672.94117647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5575178.999999935,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5575058.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16636925.999999441,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16636431.249999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54430.103400000015,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54428.73000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 300214.41965199186,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 300200.20470829116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 236906.1627521476,
            "unit": "ns/iter",
            "extra": "iterations: 3619\ncpu: 236905.05664548217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 244642.22209567978,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 244641.0307517087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231880.92909734682,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 231871.88437414813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 535860.7781885158,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 535847.3197781872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4196036.873873875,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4195964.414414405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3400857.036496271,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3400781.7518248106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3384638.8690910153,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3384563.6363636283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3406827.8540146416,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3406702.1897810143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2031363.4279476271,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2031312.2270742327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3290534.6737589296,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3290410.9929077867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12984004.512195108,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12983459.756097533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5538792.269999818,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5538397.000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55259.21785859159,
            "unit": "ns/iter",
            "extra": "iterations: 14794\ncpu: 55257.063674462595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 268845.1908227847,
            "unit": "ns/iter",
            "extra": "iterations: 3160\ncpu: 268831.2974683549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 205647.5999037073,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 205641.4058738555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 206600.9490830131,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 206592.18146718197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 200162.0927447775,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 200150.08217891504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 521231.5759760027,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 521195.6156156159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4121826.5462553883,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4121800.440528641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3358702.769784193,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3358585.6115107792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3366030.441281317,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3365834.1637010626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3351378.6870504017,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3351197.8417266114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1948515.039832351,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1948454.9266247458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3239844.1979167736,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3239686.1111111026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6474.546259615732,
            "unit": "ns/iter",
            "extra": "iterations: 108291\ncpu: 6474.227775161405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34104.83227124406,
            "unit": "ns/iter",
            "extra": "iterations: 20557\ncpu: 34103.66298584443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27508.252643162665,
            "unit": "ns/iter",
            "extra": "iterations: 25443\ncpu: 27507.69563337664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29432.756894232367,
            "unit": "ns/iter",
            "extra": "iterations: 23788\ncpu: 29430.448125105362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22805.46236383879,
            "unit": "ns/iter",
            "extra": "iterations: 30662\ncpu: 22804.608309959993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 141681.4165826051,
            "unit": "ns/iter",
            "extra": "iterations: 4957\ncpu: 141673.69376639024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 276581.1793348955,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 276571.4568487754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70422.77801268581,
            "unit": "ns/iter",
            "extra": "iterations: 9933\ncpu: 70420.99063727072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70940.12017037133,
            "unit": "ns/iter",
            "extra": "iterations: 9861\ncpu: 70936.75083662992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71351.96357514717,
            "unit": "ns/iter",
            "extra": "iterations: 9801\ncpu: 71348.38281807999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137254.5825984656,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 137248.9711934168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 131583.2965958262,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 131576.88546172675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45041.23522565292,
            "unit": "ns/iter",
            "extra": "iterations: 15466\ncpu: 45039.266778740544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 218170.62570181213,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 218158.67124142247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 175738.34354594964,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 175727.95077850344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 176008.76540106212,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 176002.81619311016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176475.05873455456,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 176469.19586589193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 300718.1130210536,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 300704.72711645777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1212787.0051994727,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1212768.9774696874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1014325.8999999925,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1014301.0144927517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1017083.7142857546,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1017041.3994169083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1016499.1982634031,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1016447.4674384989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 680037.4999999683,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 679995.5252918284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1005836.8923958967,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1005792.6829268266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45670.652431482995,
            "unit": "ns/iter",
            "extra": "iterations: 15361\ncpu: 45668.51767463037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219273.4581635766,
            "unit": "ns/iter",
            "extra": "iterations: 3191\ncpu: 219264.8386085853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178782.92464878352,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 178776.85823754914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177242.94199244177,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 177241.84110970836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178790.462953502,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 178791.23658661256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 300847.943127952,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 300843.04179233167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1214519.6643478298,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1214511.4782608694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1006659.7183908115,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1006636.3505747054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1012391.4725433567,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1012363.1502890245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1012257.805194792,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1012235.3535353539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 671706.0296934386,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 671672.4137930952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1007581.4092219818,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1007350.1440922173 ns\nthreads: 1"
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
        "date": 1702503232734,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16571.416269580674,
            "unit": "ns/iter",
            "extra": "iterations: 43861\ncpu: 16569.975604751377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128905.80103517226,
            "unit": "ns/iter",
            "extra": "iterations: 6569\ncpu: 128901.44618663419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 241669.2943795132,
            "unit": "ns/iter",
            "extra": "iterations: 3594\ncpu: 241665.08069003906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 357081.03946296824,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 357074.57282343373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 464979.12466557923,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 464968.11128945963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 574375.8897689817,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 574351.6831683168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 552640.6370000814,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552622.7000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 641411.2870000963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641412.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 729589.0857843198,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 729578.7581699351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12853.080298135606,
            "unit": "ns/iter",
            "extra": "iterations: 54472\ncpu: 12852.86202085476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10808.535623998638,
            "unit": "ns/iter",
            "extra": "iterations: 64872\ncpu: 10808.28246392895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10709.177353635056,
            "unit": "ns/iter",
            "extra": "iterations: 65282\ncpu: 10708.815600012256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10794.521356843488,
            "unit": "ns/iter",
            "extra": "iterations: 64827\ncpu: 10794.34957656531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17812.061936763275,
            "unit": "ns/iter",
            "extra": "iterations: 39282\ncpu: 17811.335980856376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57138.20386925429,
            "unit": "ns/iter",
            "extra": "iterations: 14318\ncpu: 57138.30143874849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 256890.36867470213,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 256883.22289156637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205780.72136670194,
            "unit": "ns/iter",
            "extra": "iterations: 4156\ncpu: 205777.3580365738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205373.1874247223,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 205367.3090821489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 197640.69300486357,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 197641.06437369273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 482109.8129812799,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 482097.90979098045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4034205.6782610994,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4034012.173913049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3245616.4912278643,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3245486.666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3217888.3148788903,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3217756.401384082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3244818.5087106815,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244669.337979097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1896177.1889117556,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1896080.4928131439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3161781.1335613406,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3161613.0136986272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12159248.758621288,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12158641.379310345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5503232.3200009605,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5502973.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16143806.818180649,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16142869.696969686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53027.55509999315,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53024.45999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290698.81685850024,
            "unit": "ns/iter",
            "extra": "iterations: 2954\ncpu: 290683.5477318893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230803.34311876388,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 230790.41206571358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 237802.03103350187,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 237790.8284843453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226863.8399681479,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 226855.25477707037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 496833.3073367598,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 496822.7036395151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4104995.548672844,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4104854.4247787753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3312479.1316723945,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3312483.629893256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3267712.319298529,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3267623.85964913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3325609.7758008875,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3325527.046263339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1934401.279166546,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1934392.4999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3200602.7569444487,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3200511.458333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12440120.523255574,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12439882.558139559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5509137.469999814,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5508945.000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54493.28562862262,
            "unit": "ns/iter",
            "extra": "iterations: 15009\ncpu: 54493.01752281951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 268105.7712765791,
            "unit": "ns/iter",
            "extra": "iterations: 3196\ncpu: 268098.6232790989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 205685.9671305122,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 205681.4539347407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202578.9243179072,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 202570.69988137492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199800.60515824973,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 199801.03165299038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 486748.96402471093,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 486715.96402473445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4049921.6391308242,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4049788.6956521748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3262034.245614032,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3261907.3684210475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3223877.519031029,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3223756.055363326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3283160.739436787,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3281013.028169015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1909695.3531827137,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1909600.8213552337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3166763.259385663,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3166769.6245733816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6439.335963736961,
            "unit": "ns/iter",
            "extra": "iterations: 108982\ncpu: 6439.218403039048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34699.65899850954,
            "unit": "ns/iter",
            "extra": "iterations: 20170\ncpu: 34699.41001487347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28256.22537373401,
            "unit": "ns/iter",
            "extra": "iterations: 24750\ncpu: 28255.89898989905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28252.625770652197,
            "unit": "ns/iter",
            "extra": "iterations: 24330\ncpu: 28252.6798191531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22618.245234948812,
            "unit": "ns/iter",
            "extra": "iterations: 31007\ncpu: 22618.10558906047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 135198.71456161336,
            "unit": "ns/iter",
            "extra": "iterations: 5178\ncpu: 135196.6396292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 273054.66848889564,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 273040.8043732868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69629.31993633538,
            "unit": "ns/iter",
            "extra": "iterations: 10052\ncpu: 69625.42777556599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69723.85017421686,
            "unit": "ns/iter",
            "extra": "iterations: 10045\ncpu: 69722.02090592313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69838.45371669925,
            "unit": "ns/iter",
            "extra": "iterations: 9982\ncpu: 69837.31717090787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 140637.36645214065,
            "unit": "ns/iter",
            "extra": "iterations: 4972\ncpu: 140630.8728881754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129600.88730570367,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 129593.24574389186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44125.44753261527,
            "unit": "ns/iter",
            "extra": "iterations: 15867\ncpu: 44124.52889645139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210585.97444377205,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 210571.49729404648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171885.1811932108,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 171873.87674932653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173823.06684891647,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 173811.90357852884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175832.08260323128,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 175822.077596994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 298582.7679863873,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 298559.344401872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1188019.1976149627,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1187912.776831342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 995943.6267805628,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 995902.4216524201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 995998.6390868898,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 996000.998573462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 997624.5177810221,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 997615.0782361405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 665720.6248812951,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 665687.6543209825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 986178.2217514488,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 986165.8192090483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44270.73464358398,
            "unit": "ns/iter",
            "extra": "iterations: 15824\ncpu: 44268.70576339732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 215431.8194401941,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 215428.42202399013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176529.87113012248,
            "unit": "ns/iter",
            "extra": "iterations: 3973\ncpu: 176519.80870878464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175656.66101264942,
            "unit": "ns/iter",
            "extra": "iterations: 3950\ncpu: 175648.78481012536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177093.39453026722,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 177086.7308179279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 300907.1490550138,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 300902.36254295806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1185221.0034070674,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1185209.8807495772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 989476.7072136098,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 989469.1654879675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 993306.0127840838,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 993287.0738636316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 987654.2306610978,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 987598.1715893166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 664486.4962049206,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 664489.4686906957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 983862.8126760956,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 983827.3239436621 ns\nthreads: 1"
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
        "date": 1705574863772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15954.24669423343,
            "unit": "ns/iter",
            "extra": "iterations: 44014\ncpu: 15953.473894669878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133271.28922108002,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 133265.9638080252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 251038.82342758356,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 251030.43854587417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 366551.59414756834,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 366547.3706530959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 483677.74722840014,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 483650.66518847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 599530.7575757295,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 599512.1900826449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 577201.0989999785,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577206.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 669145.8948137106,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 669123.593864135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 762756.1672158072,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 762737.4794069187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12925.296168277675,
            "unit": "ns/iter",
            "extra": "iterations: 54101\ncpu: 12924.846121143772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10688.462138799006,
            "unit": "ns/iter",
            "extra": "iterations: 65476\ncpu: 10688.200256582548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10766.040222724874,
            "unit": "ns/iter",
            "extra": "iterations: 65013\ncpu: 10765.879131865939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10735.384722583774,
            "unit": "ns/iter",
            "extra": "iterations: 65299\ncpu: 10735.144489195856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18230.226398396568,
            "unit": "ns/iter",
            "extra": "iterations: 38419\ncpu: 18230.117910408895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57800.53808545415,
            "unit": "ns/iter",
            "extra": "iterations: 14113\ncpu: 57799.518174732475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288137.4588511853,
            "unit": "ns/iter",
            "extra": "iterations: 2977\ncpu: 288134.02754450735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 222381.9755590124,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 222377.6131045237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 212185.6379910438,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 212179.63699651894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 209680.91847825565,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 209675.79051383364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 500529.20182959526,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 500515.7804459684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4213728.728506837,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4213582.352941188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3379028.316363598,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3378929.090909085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3358084.38989165,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3358052.346570405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3393568.0879120235,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3393442.4908424974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1947516.757383987,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1947491.5611814319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3280347.198581634,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3280376.241134747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12380794.709302304,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12380551.162790686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5672019.350000142,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5672007.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16616601.937499808,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16616393.750000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55204.711300001465,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55204.20999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 316712.8401034024,
            "unit": "ns/iter",
            "extra": "iterations: 2708\ncpu: 316705.83456425404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 247730.08008095584,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 247725.18068805983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 245155.5298827664,
            "unit": "ns/iter",
            "extra": "iterations: 3497\ncpu: 245150.67200457532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 238520.24234834357,
            "unit": "ns/iter",
            "extra": "iterations: 3594\ncpu: 238513.52253756218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 516731.49046483746,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 516720.3218116801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4288740.465438126,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4288676.958525356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3452230.514814666,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3452238.5185185187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3416123.5514707086,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3416102.573529416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3427100.011029605,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3427040.4411764503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1978634.3021276942,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1978591.276595757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3324901.9892472653,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3324903.584229387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12761996.8072288,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12761828.91566264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5579811.270000619,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5579555.000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55935.25729352872,
            "unit": "ns/iter",
            "extra": "iterations: 14602\ncpu: 55934.050130118776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 297383.7892190488,
            "unit": "ns/iter",
            "extra": "iterations: 2894\ncpu: 297377.29785763647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 218541.500896299,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 218537.285531371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 208409.39001217534,
            "unit": "ns/iter",
            "extra": "iterations: 4105\ncpu: 208402.82582216873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 208979.14159725053,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 208972.85644292005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 505588.6888760215,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 505573.5805330272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4222945.027272441,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4222767.272727265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3386921.4618181847,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3386843.272727266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3360269.155234742,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3360168.2310469253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3395336.86861327,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3395250.729927013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1939066.6041665836,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1939000.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3275606.471830738,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3275558.098591527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6389.6145333327495,
            "unit": "ns/iter",
            "extra": "iterations: 109789\ncpu: 6389.4670686498785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36138.517438863244,
            "unit": "ns/iter",
            "extra": "iterations: 19382\ncpu: 36137.11175317301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29474.153240743966,
            "unit": "ns/iter",
            "extra": "iterations: 23760\ncpu: 29473.36279461297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27577.034762732754,
            "unit": "ns/iter",
            "extra": "iterations: 25372\ncpu: 27576.56077565814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21648.035215844953,
            "unit": "ns/iter",
            "extra": "iterations: 32315\ncpu: 21647.41451338379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 137770.24478141367,
            "unit": "ns/iter",
            "extra": "iterations: 5078\ncpu: 137765.34068530798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 284752.71185063827,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 284742.8977272715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71142.38345330626,
            "unit": "ns/iter",
            "extra": "iterations: 9863\ncpu: 71143.04978201276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71143.06020542234,
            "unit": "ns/iter",
            "extra": "iterations: 9833\ncpu: 71141.81836672338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70154.71575684287,
            "unit": "ns/iter",
            "extra": "iterations: 10002\ncpu: 70151.66966606652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143597.62333675416,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 143591.95496417716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132354.1176803764,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132350.22667170427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45238.99729503301,
            "unit": "ns/iter",
            "extra": "iterations: 15527\ncpu: 45238.33322599309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 223647.1381180175,
            "unit": "ns/iter",
            "extra": "iterations: 3135\ncpu: 223641.91387559843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 179336.50408790508,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 179330.7613694435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 181793.26647639478,
            "unit": "ns/iter",
            "extra": "iterations: 3854\ncpu: 181787.31188375686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 181340.53290156813,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 181342.1243523325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 308691.54056434386,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 308680.11463844695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1233819.0140844728,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1233819.1901408506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1031305.7533236494,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1031248.5967503638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1035676.4091579493,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1035660.4135893625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1023861.8011696513,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1023837.4269005817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 677007.9459459648,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 676985.5212355227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1017463.7398256039,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1017446.3662790749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45525.320465331424,
            "unit": "ns/iter",
            "extra": "iterations: 15387\ncpu: 45523.58484434899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 224722.88977892676,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 224719.16052547088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 182916.40872291633,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 182914.7296944357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 183274.3746073202,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 183274.42408376874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 183869.3916579204,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 183864.97901364224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307046.8723124321,
            "unit": "ns/iter",
            "extra": "iterations: 2279\ncpu: 307045.28301886615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1226902.3695272263,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1226858.1436077051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1022898.3440702276,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1022880.2342606003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1030774.0132351656,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1030740.2941176492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1024226.405523323,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1024189.6802325457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 676773.861702139,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676779.8839458392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1017780.7219795746,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1017770.451237277 ns\nthreads: 1"
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
        "date": 1705772985357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16176.618806874769,
            "unit": "ns/iter",
            "extra": "iterations: 43516\ncpu: 16175.041364095965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130522.04966070413,
            "unit": "ns/iter",
            "extra": "iterations: 6484\ncpu: 130514.60518198645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 245758.63092550295,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 245752.42663656894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 356263.40976825147,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 356256.4983443707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470022.00434073556,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 470016.00651112356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 580705.7471648017,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 580691.6611074052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 560099.6379999969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560080.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 648855.6729999573,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648817.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 735374.4270916418,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 735333.1474103583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12790.0362563229,
            "unit": "ns/iter",
            "extra": "iterations: 54556\ncpu: 12789.253244372763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10861.481771477938,
            "unit": "ns/iter",
            "extra": "iterations: 64624\ncpu: 10860.899975241406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10838.562839421893,
            "unit": "ns/iter",
            "extra": "iterations: 64816\ncpu: 10838.282214268069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10907.220306900492,
            "unit": "ns/iter",
            "extra": "iterations: 64451\ncpu: 10906.933949822343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18272.19104532062,
            "unit": "ns/iter",
            "extra": "iterations: 38237\ncpu: 18272.176164448047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57207.33890566227,
            "unit": "ns/iter",
            "extra": "iterations: 14237\ncpu: 57206.06869424739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 253591.76715177405,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 253591.65429165447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 201777.68968780377,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 201770.60075685874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202115.3149905268,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 202111.64611005684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195663.14219222066,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 195656.38817779787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 500758.77090494457,
            "unit": "ns/iter",
            "extra": "iterations: 1746\ncpu: 500749.1981672396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4058669.017467268,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4058637.991266387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3297473.2588653984,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3297360.638297876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3245852.1289197626,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3245772.4738675915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3288908.1281137285,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3288829.1814946546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1899688.7586912643,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1899656.8507157506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3194060.3310345225,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3193994.8275862047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12017466.290697135,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12017160.465116298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5429289.380000455,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5429138.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15883392.417909384,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15883162.686567135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52537.91000000092,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52536.02000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 276432.84939167753,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 276426.47155540943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 221213.0817995895,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 221201.4059304709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 228768.51318622052,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 228757.96555435847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221336.44329896598,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 221320.48969072258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 503336.30889147153,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 503322.2286374157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4055838.969432296,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4055675.9825327448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3250952.2974909307,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3250806.451612913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3324245.818181747,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3324028.321678316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3353776.591077949,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3353702.230483274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1950245.2746331242,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1950195.38784067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3239901.88811204,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3239730.419580421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12496840.952380916,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12496314.285714319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5406362.869999839,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5406018.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52787.87217747058,
            "unit": "ns/iter",
            "extra": "iterations: 15146\ncpu: 52787.42902416504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 269757.5909232155,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 269747.96394156077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 204236.81160458984,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 204227.76981852856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 201089.31185325442,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 201080.00940733895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 194841.52269098596,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 194830.12542759374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 503697.5661252877,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 503670.99767981464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4101741.629955789,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4101491.6299559507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3321079.15053754,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3320905.017921149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3275166.600706416,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3274991.872791528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3335767.4784173365,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3335627.3381294855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1910805.9918200658,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1910709.4069529613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3205990.5206896756,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3205854.1379310293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6501.570578762281,
            "unit": "ns/iter",
            "extra": "iterations: 107419\ncpu: 6501.036129548756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35611.75155374303,
            "unit": "ns/iter",
            "extra": "iterations: 19630\ncpu: 35609.76057055526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28831.98788862248,
            "unit": "ns/iter",
            "extra": "iterations: 24027\ncpu: 28830.861114579347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27916.125666320462,
            "unit": "ns/iter",
            "extra": "iterations: 25138\ncpu: 27914.55963083777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22114.324272271908,
            "unit": "ns/iter",
            "extra": "iterations: 31674\ncpu: 22113.023299867233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 140742.24250953735,
            "unit": "ns/iter",
            "extra": "iterations: 4973\ncpu: 140731.49004624883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 277414.2991249341,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 277397.772474145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 70739.59356783683,
            "unit": "ns/iter",
            "extra": "iterations: 9950\ncpu: 70737.58793969871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68739.57533840636,
            "unit": "ns/iter",
            "extra": "iterations: 10121\ncpu: 68737.12083786132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 70030.72871804591,
            "unit": "ns/iter",
            "extra": "iterations: 9938\ncpu: 70027.19863151545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 142772.37199836478,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 142765.05901505688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129591.62907903237,
            "unit": "ns/iter",
            "extra": "iterations: 5516\ncpu: 129582.07034082532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43834.22046849071,
            "unit": "ns/iter",
            "extra": "iterations: 15966\ncpu: 43832.49404985601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 214841.40399386053,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 214831.52073732857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 173219.37392794035,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 173209.8505268322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172026.77827050062,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 172017.1224439513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172958.34986496385,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 172945.1755462827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 300869.2283871032,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 300852.731182794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1174722.1377550517,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1174709.183673477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 983774.0226628536,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 983763.4560906471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 982672.5738635906,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 982637.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 964250.9852547278,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 964213.0026809684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 643516.7319588097,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 643460.4498594139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 958962.9481066497,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 958962.973352024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44013.41486029349,
            "unit": "ns/iter",
            "extra": "iterations: 15962\ncpu: 44012.90565092094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 211573.98586354873,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 211569.63736939259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170028.70357994267,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 170026.89737470204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 169382.93274639477,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 169381.48691611347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170214.35076253835,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 170208.93246187418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296500.7003311277,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 296495.73675496975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1151160.8608413367,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1151127.1844660202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 959598.9792530403,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 959582.4343015256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 971485.2225311962,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 971453.4075104338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 987924.1414427678,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 987924.3281471076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 657012.4118199497,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 657012.0075046959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 981642.3398328335,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 981606.8245125492 ns\nthreads: 1"
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
        "date": 1705774763603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15604.898037904406,
            "unit": "ns/iter",
            "extra": "iterations: 44850\ncpu: 15604.32998885173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126810.47056160525,
            "unit": "ns/iter",
            "extra": "iterations: 6624\ncpu: 126807.29166666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 242861.39002205283,
            "unit": "ns/iter",
            "extra": "iterations: 3628\ncpu: 242846.33406835725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 355515.62199591857,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 355505.49898167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 460437.1292372621,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 460420.55084745755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 570629.386184189,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 570603.552631579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 549484.2149998931,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549467.9999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 640695.3599999951,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 725529.1501172994,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 725501.2509773268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12452.484805275975,
            "unit": "ns/iter",
            "extra": "iterations: 56105\ncpu: 12451.995365831914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10606.635864772441,
            "unit": "ns/iter",
            "extra": "iterations: 65786\ncpu: 10606.232329066983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10537.59781105364,
            "unit": "ns/iter",
            "extra": "iterations: 66516\ncpu: 10537.484214324366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10540.60448865069,
            "unit": "ns/iter",
            "extra": "iterations: 66256\ncpu: 10540.252958222643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18020.816149482493,
            "unit": "ns/iter",
            "extra": "iterations: 38961\ncpu: 18019.858319858304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56228.66753908289,
            "unit": "ns/iter",
            "extra": "iterations: 14519\ncpu: 56227.39858116945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 251842.69770182113,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 251835.2975839714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203499.86027134792,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 203493.26350868848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205107.73237062234,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 205103.27316486198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195891.74689939182,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 195883.64722094638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 511069.0052204285,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 511047.62180974416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4006392.6137341587,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4006293.5622317614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3232618.503472414,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3232524.652777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3187814.845890375,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3187634.246575353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3230465.6124568437,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3230305.536332185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1887814.1840491341,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1887743.3537832298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3121908.824324249,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3121757.0945945918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12096811.045453973,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12096150.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5513426.139999637,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5513380.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16078476.553845506,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16077749.230769238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56435.43069999168,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56433.42000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 287596.0846720385,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 287589.3239625166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230263.23350390478,
            "unit": "ns/iter",
            "extra": "iterations: 3713\ncpu: 230246.94317263752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 234352.93917806144,
            "unit": "ns/iter",
            "extra": "iterations: 3650\ncpu: 234343.780821918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 222676.19212721736,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 222663.13868613183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 529437.9818182086,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 529405.5151515169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4075799.799126469,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4075644.97816593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3286822.645390096,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3286607.4468084937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3226507.1076389677,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3226351.0416666493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3268077.8736843616,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3267985.2631578874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1960582.8185653856,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1960478.270042193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3172235.1911265594,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3172155.2901023747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12518755.141176745,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12518245.882352917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5351572.209999631,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5351359.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54192.14991708027,
            "unit": "ns/iter",
            "extra": "iterations: 15075\ncpu: 54190.26202321701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 262845.5009202636,
            "unit": "ns/iter",
            "extra": "iterations: 3260\ncpu: 262831.2576687098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 203489.75268050176,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 203481.67738861026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199789.88842301632,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 199781.90076869237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195223.60657984624,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 195209.0701393653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 514209.32844578003,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 514177.5366568917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3995374.5708156964,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3995155.3648068607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3250822.0627176007,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3250684.3205574867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3198750.7636987106,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3198484.9315068475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3243805.742160241,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3243678.3972125407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1875283.6975806525,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1875144.959677408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3131484.097643163,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3131338.383838391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6345.806688824121,
            "unit": "ns/iter",
            "extra": "iterations: 110423\ncpu: 6345.155447687545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35269.66481770826,
            "unit": "ns/iter",
            "extra": "iterations: 19831\ncpu: 35267.681912158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28926.791799280716,
            "unit": "ns/iter",
            "extra": "iterations: 24193\ncpu: 28924.812962426935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28872.93350362671,
            "unit": "ns/iter",
            "extra": "iterations: 24272\ncpu: 28870.818226763353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22421.47425483079,
            "unit": "ns/iter",
            "extra": "iterations: 31268\ncpu: 22419.505564794592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 137598.9286135679,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 137591.50442477787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 270125.24331655295,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 270101.6272762467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69358.53414609324,
            "unit": "ns/iter",
            "extra": "iterations: 10089\ncpu: 69354.96084844846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68737.24351825159,
            "unit": "ns/iter",
            "extra": "iterations: 10221\ncpu: 68736.6108991297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68636.44927394361,
            "unit": "ns/iter",
            "extra": "iterations: 10192\ncpu: 68628.9835164843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 139653.21108232698,
            "unit": "ns/iter",
            "extra": "iterations: 5017\ncpu: 139646.10324895298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128076.12394727158,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128072.73892347104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43292.10410484545,
            "unit": "ns/iter",
            "extra": "iterations: 16176\ncpu: 43292.44559841807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211335.1442365782,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 211331.05009052256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171789.8834025904,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 171787.9736005869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173101.0470763379,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 173095.4658077282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175103.1450400839,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 175100.8517034068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304391.38163620344,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 304384.0731070505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1170847.7852348338,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1170859.5637583924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 989212.0395479946,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 989201.8361582031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 985875.9194914884,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 985859.4632768476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 979984.0603086478,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 979961.5708275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 657132.2229601081,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 657115.9392789383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 975343.622905023,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 975340.2234636889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43945.372537947114,
            "unit": "ns/iter",
            "extra": "iterations: 15942\ncpu: 43944.530171873266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212277.74218985176,
            "unit": "ns/iter",
            "extra": "iterations: 3297\ncpu: 212277.58568395453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 174541.35416146452,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 174534.24143964075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172934.20123459562,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 172929.16049382818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174124.47529179178,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 174120.71020610674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 301173.8670668903,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 301161.5780445957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1161437.3084576887,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1161424.7097844244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 980411.466386539,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 980391.876750701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 976371.7717088052,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 976380.3921568767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 975144.5805556437,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 975125.833333321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 649634.7319778557,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 649641.4972273624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 969923.4742697784,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 969916.9680111108 ns\nthreads: 1"
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
        "date": 1705777705949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16000.691726029416,
            "unit": "ns/iter",
            "extra": "iterations: 43377\ncpu: 16000.338889273116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129062.60891467531,
            "unit": "ns/iter",
            "extra": "iterations: 6551\ncpu: 129057.71637917878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 243438.32085411798,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 243430.11647254578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 350505.9763168755,
            "unit": "ns/iter",
            "extra": "iterations: 2449\ncpu: 350496.8150265416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 461255.5587452998,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 461227.80435938336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 572760.9914304935,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 572707.7785102176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 550093.7110000451,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550093.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 636364.9659999738,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636331.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 725643.5298272864,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 725596.1538461534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12568.841614850502,
            "unit": "ns/iter",
            "extra": "iterations: 55807\ncpu: 12568.172451484585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10715.459048434173,
            "unit": "ns/iter",
            "extra": "iterations: 65492\ncpu: 10714.617052464428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10674.267049435528,
            "unit": "ns/iter",
            "extra": "iterations: 65662\ncpu: 10673.81590569889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10735.900959887025,
            "unit": "ns/iter",
            "extra": "iterations: 65216\ncpu: 10735.74889597644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18081.29627908067,
            "unit": "ns/iter",
            "extra": "iterations: 38727\ncpu: 18080.806672347444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56719.69882205978,
            "unit": "ns/iter",
            "extra": "iterations: 14347\ncpu: 56715.90576427125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 261465.46366145473,
            "unit": "ns/iter",
            "extra": "iterations: 3261\ncpu: 261458.96964121424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 206579.39524156362,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 206575.47948531198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 206628.82557011562,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 206623.65356623012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 199167.56198733902,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 199167.16662760708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 508444.3172853908,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 508420.59164733236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4029036.659482958,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4028921.1206896664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3242296.4668991887,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3242263.066202086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3205585.8178693466,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3205358.4192439886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3243480.142856965,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3243250.8710801415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1888528.9775509443,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1888439.9999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3143014.5986393103,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3142742.857142861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12043712.874999683,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12043001.136363614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5548570.09999978,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5548079.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16108036.075756831,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16107356.060606055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53770.274999999405,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53764.220000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 288923.8689353124,
            "unit": "ns/iter",
            "extra": "iterations: 2968\ncpu: 288910.6805929924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232296.07767519166,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 232279.223248235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 234155.36530557717,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 234142.39517676088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 225891.48304186112,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 225874.66878643216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 531302.1963414907,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 531301.2804878083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4069826.5964910234,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4069621.0526315705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3306749.711743442,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3306556.5836298806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3285811.8978874446,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3285611.9718309892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3293754.932623905,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3293520.9219858353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1933164.8562501397,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1933080.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3203736.9621994505,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3203679.0378006957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12400562.435294995,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12399912.94117648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5602723.149999065,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5602726.000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55232.86309242366,
            "unit": "ns/iter",
            "extra": "iterations: 14791\ncpu: 55229.38949361055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 266707.6848503863,
            "unit": "ns/iter",
            "extra": "iterations: 3208\ncpu: 266685.84788029984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 205306.0105820218,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 205288.7205387195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199789.2667761436,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 199780.29094321805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 196125.2514404223,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 196109.7257432596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 506414.84669399366,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 506386.13224107673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4021592.8658011113,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4021391.34199137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3245272.954703905,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3245140.0696864314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3198845.3539517177,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3198626.1168384887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3275853.775438551,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3275603.8596491176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1894012.1758693187,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1893941.1042944773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3149481.759321858,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3149249.4915254316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6512.071655018692,
            "unit": "ns/iter",
            "extra": "iterations: 107878\ncpu: 6511.6400007415605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35653.497730172974,
            "unit": "ns/iter",
            "extra": "iterations: 19605\ncpu: 35650.45141545518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29396.53853674397,
            "unit": "ns/iter",
            "extra": "iterations: 24548\ncpu: 29394.435391885156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29267.14297067663,
            "unit": "ns/iter",
            "extra": "iterations: 23907\ncpu: 29264.7634584014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22542.142751287047,
            "unit": "ns/iter",
            "extra": "iterations: 31040\ncpu: 22541.114690721388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 140165.2254254169,
            "unit": "ns/iter",
            "extra": "iterations: 4995\ncpu: 140151.55155155176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 271828.7219626113,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 271808.8785046773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 68875.10453629194,
            "unit": "ns/iter",
            "extra": "iterations: 9920\ncpu: 68866.95564516161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69450.58863207756,
            "unit": "ns/iter",
            "extra": "iterations: 10081\ncpu: 69446.84059121142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69194.94493783389,
            "unit": "ns/iter",
            "extra": "iterations: 10134\ncpu: 69194.11880797296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141121.19405700732,
            "unit": "ns/iter",
            "extra": "iterations: 4947\ncpu: 141110.91570648958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 129084.41463863337,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 129076.89896755085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44200.34487779895,
            "unit": "ns/iter",
            "extra": "iterations: 15794\ncpu: 44197.461061162474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 213632.9155963296,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 213618.8073394528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170836.70107107708,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 170818.2814021434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173106.92516670143,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 173095.30748333025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174987.0509744907,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 174974.11294353116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 302592.7252699519,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 302566.86825054255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1172175.7537688562,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1172059.296482399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 990439.3069307231,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 990411.8811881208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 983366.9704224595,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 983355.4929577569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 985364.3836388653,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 985260.2256699557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 662993.2497635405,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 662945.4115420965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 973978.9470752657,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 973875.4874651685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44756.9150756671,
            "unit": "ns/iter",
            "extra": "iterations: 15661\ncpu: 44753.93014494573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212636.3626974541,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 212616.67679222143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 174983.62646984946,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 174973.8804103064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174093.21430347374,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 174074.99379190654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174862.74563591107,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 174854.663341646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 304931.9782325146,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 304913.71353940095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1165040.5816665927,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1165011.9999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 977387.5921787142,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 977344.4134078239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 978392.5189341288,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 978277.2791023739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 975083.242339918,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975022.4233983299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 658360.6441315378,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 658297.2769953018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 973622.9097222172,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 973602.77777777 ns\nthreads: 1"
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
        "date": 1705952856370,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16140.551794519086,
            "unit": "ns/iter",
            "extra": "iterations: 43605\ncpu: 16139.724802201583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127613.87843137173,
            "unit": "ns/iter",
            "extra": "iterations: 6630\ncpu: 127610.12066365009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239839.39310343476,
            "unit": "ns/iter",
            "extra": "iterations: 3625\ncpu: 239817.35172413796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 350149.66073591716,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 350145.9361099878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 458449.46521507116,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 458415.50716941035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 571384.5718976306,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 571370.3873933024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 548216.6990000223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548174.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 635091.7599999093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 635078.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 725837.7293291561,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 725808.2683307338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12877.766265989743,
            "unit": "ns/iter",
            "extra": "iterations: 54408\ncpu: 12877.422437876774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10819.095034696067,
            "unit": "ns/iter",
            "extra": "iterations: 64850\ncpu: 10818.845026985333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10776.56130153225,
            "unit": "ns/iter",
            "extra": "iterations: 65031\ncpu: 10776.423551844508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10835.691354016502,
            "unit": "ns/iter",
            "extra": "iterations: 64689\ncpu: 10835.632023991695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18021.926431991466,
            "unit": "ns/iter",
            "extra": "iterations: 38862\ncpu: 18021.78477690289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 59219.93447792153,
            "unit": "ns/iter",
            "extra": "iterations: 14270\ncpu: 59219.25017519278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 258990.96779093373,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 258978.9425706471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204930.18613669527,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 204929.35046049487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 206618.57527926058,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 206616.19718309905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196899.45361782238,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 196899.0259740261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 511571.7250438285,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 511569.8190309419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4079473.3464912567,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4079420.6140350853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3244353.0766548584,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244300.696864102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3253048.3614034,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3252991.2280701757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3260547.1017544465,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3260459.2982456153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1903980.2037036866,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1903960.4938271646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3164225.921232765,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3164177.739726017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12123243.321839096,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12123071.264367808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5551067.709999416,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5550958.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16055658.499999825,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16055333.33333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54096.80870000103,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54097.039999999906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 288449.29976425465,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 288447.86123273807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 231570.18970190926,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 231567.58807588185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 238080.00529248844,
            "unit": "ns/iter",
            "extra": "iterations: 3590\ncpu: 238077.57660167268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 225504.16516913223,
            "unit": "ns/iter",
            "extra": "iterations: 3784\ncpu: 225503.30338266387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 527185.6517803363,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 527173.8080869014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4103669.8407079326,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4103619.0265486804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3306107.9361703135,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3306075.531914883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3283695.3427560613,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3283659.0106006917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3312134.4857140197,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3312064.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1953253.698947456,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1953207.157894736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3208827.401384209,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3208771.626297576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12453193.823529653,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12453050.588235263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5366246.649999767,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5366083.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55241.44103152671,
            "unit": "ns/iter",
            "extra": "iterations: 14813\ncpu: 55240.47795854973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 265645.8705701145,
            "unit": "ns/iter",
            "extra": "iterations: 3245\ncpu: 265640.739599384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 205742.08555635164,
            "unit": "ns/iter",
            "extra": "iterations: 4161\ncpu: 205741.16798846365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202386.15980113414,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 202381.7708333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 200965.78452127395,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 200965.09056692637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 497599.997711628,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 497594.27917620196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4039571.804348132,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4039501.304347813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3264959.1754386816,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3264893.684210516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3270878.6293703387,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3270813.286713304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3269372.080419591,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3269338.8111888147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1911324.6844261207,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1911303.278688523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3171120.215017049,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3171086.6894198065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6513.215643539761,
            "unit": "ns/iter",
            "extra": "iterations: 107367\ncpu: 6513.193066770943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35875.41494819029,
            "unit": "ns/iter",
            "extra": "iterations: 19494\ncpu: 35874.96665640738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29345.05477268813,
            "unit": "ns/iter",
            "extra": "iterations: 23844\ncpu: 29344.62757926522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28260.722685332083,
            "unit": "ns/iter",
            "extra": "iterations: 24712\ncpu: 28260.34315312397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22723.134548045884,
            "unit": "ns/iter",
            "extra": "iterations: 30844\ncpu: 22723.00933731029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 141500.70398867526,
            "unit": "ns/iter",
            "extra": "iterations: 4939\ncpu: 141499.95950597303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 274483.66771899036,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 274477.0323599058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69396.75825378527,
            "unit": "ns/iter",
            "extra": "iterations: 10056\ncpu: 69396.43993635594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70025.20765846694,
            "unit": "ns/iter",
            "extra": "iterations: 10002\ncpu: 70023.51529694167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 69403.771290262,
            "unit": "ns/iter",
            "extra": "iterations: 10122\ncpu: 69401.78818415351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 141748.2997572887,
            "unit": "ns/iter",
            "extra": "iterations: 4944\ncpu: 141746.07605177988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 130190.95300891281,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 130185.95839524448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44671.85942001185,
            "unit": "ns/iter",
            "extra": "iterations: 15621\ncpu: 44667.97900262507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 216521.48697270066,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 216516.74937965104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172573.59723250248,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 172569.63182604456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174990.5326494903,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 174983.33750312985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174996.2674999779,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 174992.29999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297341.17260391073,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 297222.4766751465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1187195.6643477934,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1187154.0869565152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 996571.6447932053,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 996543.0813124162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 995213.9229670959,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 995200.2853066988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 991913.7425743247,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 991899.0099009842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 660457.6707432476,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 660446.7544684923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 983723.3492958084,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 983700.4225351996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44262.40116205292,
            "unit": "ns/iter",
            "extra": "iterations: 15834\ncpu: 44261.816344575214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214905.9413210466,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 214904.85407066104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 175577.8723297319,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 175573.48580045273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176021.46443829825,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 176017.66775571572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176190.74377671425,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 176185.013829519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297655.46513608703,
            "unit": "ns/iter",
            "extra": "iterations: 2352\ncpu: 297649.27721088537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1188639.4483925917,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1188601.69204738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 981820.7938288176,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 981815.1472650836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 997575.3666191256,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 997570.328102709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 987540.5296610176,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 987516.2429378565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 660659.425471655,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 660656.7924528405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 982274.4431976466,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 982238.5694249666 ns\nthreads: 1"
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
        "date": 1705954918766,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16352.777542726526,
            "unit": "ns/iter",
            "extra": "iterations: 42071\ncpu: 16351.565211190606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 134192.7098101234,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 134186.8670886076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 253279.0005846283,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 253268.5472084185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 369662.1340471189,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 369647.7516059957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 487786.45525727683,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 487781.65548098425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 603909.0667129966,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 603900.347463516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 580878.6269999474,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580857.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 670688.8518518518,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 670654.4662309361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 766347.5851239386,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 766332.561983471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13084.802510005757,
            "unit": "ns/iter",
            "extra": "iterations: 53466\ncpu: 13084.53409643513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10970.50372860125,
            "unit": "ns/iter",
            "extra": "iterations: 63965\ncpu: 10970.451027905892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11005.669647471905,
            "unit": "ns/iter",
            "extra": "iterations: 63853\ncpu: 11005.417129970407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10987.897570533143,
            "unit": "ns/iter",
            "extra": "iterations: 63800\ncpu: 10987.83228840126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18506.39721956893,
            "unit": "ns/iter",
            "extra": "iterations: 37692\ncpu: 18506.30107184547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58200.3427186525,
            "unit": "ns/iter",
            "extra": "iterations: 14029\ncpu: 58200.06415282621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 264297.33652657305,
            "unit": "ns/iter",
            "extra": "iterations: 3236\ncpu: 264290.35846724396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 206229.2135049765,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 206227.1556958946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 209572.94488188092,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 209565.89566929193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201970.12775539714,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 201964.96800189602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 509865.94117649575,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 509836.6919044836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4289367.185185026,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4289236.5740740625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3413467.1433822834,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3413355.147058826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3370201.1335741775,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3370066.7870036173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3451475.561068738,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3451482.0610686927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1981743.0255320107,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1981668.5106382982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3304138.336879552,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3304025.177304955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12593166.670587702,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12593043.529411783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5738325.130000135,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5738215.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16767755.181817709,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16767418.181818193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55057.3595000003,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55056.73000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 297233.7246276431,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 297222.54935919546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 238773.41543605135,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 238766.73168013382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 238154.591615776,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 238148.61188228804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229630.00502379928,
            "unit": "ns/iter",
            "extra": "iterations: 3782\ncpu: 229624.53728186135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 527164.4604141342,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 527151.5225334949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4332587.336405601,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4332447.004608281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3465627.208955189,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3465610.8208955373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3388403.890909021,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3388329.0909090843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3454625.2406015866,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3454515.0375939785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2016755.4425162927,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2016724.5119305856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3339956.3046594113,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3339815.7706093322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12596580.119047677,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12596309.523809524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5647290.950000184,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5647021.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55499.206328684646,
            "unit": "ns/iter",
            "extra": "iterations: 14695\ncpu: 55499.27866621291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 267900.701506599,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 267887.1939736342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 205628.6330275346,
            "unit": "ns/iter",
            "extra": "iterations: 4142\ncpu: 205623.20135200358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 201495.24695408015,
            "unit": "ns/iter",
            "extra": "iterations: 4268\ncpu: 201488.5426429237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 202122.7791527825,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 202119.25273679255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 511809.8859337963,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 511802.3049645381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4277887.9722223235,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4277729.629629623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3421163.797794022,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3421115.073529399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3384302.941818036,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3384161.818181817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3462663.1933085965,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3462534.200743499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1985517.6268656491,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1985494.0298507484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3321906.2050360166,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3321755.755395664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6507.859962807618,
            "unit": "ns/iter",
            "extra": "iterations: 107550\ncpu: 6507.799163179959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36537.01470742321,
            "unit": "ns/iter",
            "extra": "iterations: 19106\ncpu: 36535.39202344828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29672.183381914103,
            "unit": "ns/iter",
            "extra": "iterations: 24359\ncpu: 29671.998029475573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29484.350989046154,
            "unit": "ns/iter",
            "extra": "iterations: 24468\ncpu: 29483.18211541615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22670.824051288066,
            "unit": "ns/iter",
            "extra": "iterations: 30884\ncpu: 22670.337391529883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 142828.23135090718,
            "unit": "ns/iter",
            "extra": "iterations: 4893\ncpu: 142818.98630696864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 291977.40875000966,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 291971.87500000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 72722.86594090362,
            "unit": "ns/iter",
            "extra": "iterations: 9645\ncpu: 72722.4053913941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 72285.19560507513,
            "unit": "ns/iter",
            "extra": "iterations: 9693\ncpu: 72282.5544207163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 72668.78420998128,
            "unit": "ns/iter",
            "extra": "iterations: 9639\ncpu: 72668.2643427738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 145892.71097662742,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 145886.87395659223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128868.61127487279,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 128867.72291820218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45262.07004016865,
            "unit": "ns/iter",
            "extra": "iterations: 15434\ncpu: 45259.200466502785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 220376.4930861027,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 220374.26147077273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177927.34181078072,
            "unit": "ns/iter",
            "extra": "iterations: 3932\ncpu: 177920.14242116138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177857.1376682809,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 177855.24511049167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 180580.28748707986,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 180578.49017580246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 319227.3991935402,
            "unit": "ns/iter",
            "extra": "iterations: 2232\ncpu: 319216.12903226126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1237467.302491056,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1237435.4092526888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1037476.4376854239,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1037441.543026719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1031966.9425625434,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1031968.7776141474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1036029.121481466,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1035986.8148148095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 685766.3011696029,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 685753.9961013662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1021417.1938326508,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1021391.4831130748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46067.718778788054,
            "unit": "ns/iter",
            "extra": "iterations: 15198\ncpu: 46066.65350704012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 220688.62290413457,
            "unit": "ns/iter",
            "extra": "iterations: 3161\ncpu: 220681.49319835665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 183195.0495565992,
            "unit": "ns/iter",
            "extra": "iterations: 3834\ncpu: 183190.66249348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 179484.37538382594,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 179471.92937564146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 181346.2590002499,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 181337.11473711644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 313249.30852018436,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 313237.4439461834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1235245.6519433968,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1235212.897526519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1029777.5601172368,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1029755.425219941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1026052.5117301965,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1026011.143695016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1033378.1176469489,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1033354.7058823539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 676338.3281704177,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 676322.8460793743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1019891.2882096615,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1019833.1877729358 ns\nthreads: 1"
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
        "date": 1705956418140,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16782.42307143465,
            "unit": "ns/iter",
            "extra": "iterations: 42052\ncpu: 16781.301721677923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 132735.48171401682,
            "unit": "ns/iter",
            "extra": "iterations: 6371\ncpu: 132730.780097316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 249819.90736478177,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 249810.27042577675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 364892.6800341396,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 364883.9590443687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 481052.75580110424,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 481036.62983425433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 594433.9787961696,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 594410.5335157317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 573355.8520000201,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573312.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 667129.9156452599,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 667103.1002162939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 759317.255336588,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 759300.3284072258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13059.673262151162,
            "unit": "ns/iter",
            "extra": "iterations: 53572\ncpu: 13059.254834615082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10999.599293231538,
            "unit": "ns/iter",
            "extra": "iterations: 63670\ncpu: 10999.378043034401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10972.5118690181,
            "unit": "ns/iter",
            "extra": "iterations: 63948\ncpu: 10972.180521673856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10965.182188389943,
            "unit": "ns/iter",
            "extra": "iterations: 63846\ncpu: 10964.766782570568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18048.403632616322,
            "unit": "ns/iter",
            "extra": "iterations: 38815\ncpu: 18047.832023702173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50977.81700000041,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50977.69000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 265565.7270471392,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 265562.81017369725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 206443.64455205126,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 206437.53026634332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 206210.2533204796,
            "unit": "ns/iter",
            "extra": "iterations: 4141\ncpu: 206204.5399661916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 202244.48314340177,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 202234.54415954446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 479834.7849344716,
            "unit": "ns/iter",
            "extra": "iterations: 1832\ncpu: 479813.4279475987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4217916.828054315,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4217817.19457014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3373228.309090915,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3373095.6363636334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3383219.7919705524,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3383214.9635036476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3387414.0072992197,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3387319.7080291887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1963873.7940552358,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1963855.2016985107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3290083.163701104,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3290027.0462633404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12578235.658822771,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12578037.647058818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5609224.9699997865,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5609055.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16355973.538461162,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16355659.999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56032.307499992836,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56031.109999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 303965.4380222854,
            "unit": "ns/iter",
            "extra": "iterations: 2872\ncpu: 303958.70473537565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 241136.44264131694,
            "unit": "ns/iter",
            "extra": "iterations: 3574\ncpu: 241131.25349748068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 239818.2653061338,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 239818.003913893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 230615.9761968466,
            "unit": "ns/iter",
            "extra": "iterations: 3739\ncpu: 230611.68761701012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 498712.74856819765,
            "unit": "ns/iter",
            "extra": "iterations: 1746\ncpu: 498712.4856815596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4267057.995413316,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4267017.8899082625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3436824.0184502644,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3436741.6974169943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3457159.0446093604,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3457119.7026022235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3438200.8970585703,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3438136.0294117606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2017104.7158352954,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2017042.0824294977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3331269.1510794223,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3331206.83453236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12900996.710842615,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12900497.59036138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5706765.740000037,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5706832.000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56142.142359926715,
            "unit": "ns/iter",
            "extra": "iterations: 14653\ncpu: 56140.44223025991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 272904.5940468498,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 272902.75490816875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206784.34106839678,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 206778.0033840951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 203726.59094159043,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 203723.07508939176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198467.21088277324,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 198462.96123306788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 482967.56738767156,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 482950.74875207955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4221215.23181793,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4221113.636363651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3407459.021978107,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3407252.014652006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3410332.927007509,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3410287.591240887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3436235.863468635,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3436089.6678966833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1975841.2118644184,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1975742.372881364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3319116.432142875,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3318987.1428571343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6421.923023368479,
            "unit": "ns/iter",
            "extra": "iterations: 109163\ncpu: 6421.800426884626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35426.2005163528,
            "unit": "ns/iter",
            "extra": "iterations: 19754\ncpu: 35426.16685228325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28253.29569003534,
            "unit": "ns/iter",
            "extra": "iterations: 24803\ncpu: 28253.207273313834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27317.714497331337,
            "unit": "ns/iter",
            "extra": "iterations: 25653\ncpu: 27317.241648150448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22535.178110828474,
            "unit": "ns/iter",
            "extra": "iterations: 31093\ncpu: 22534.721641526983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 135506.35966774568,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 135501.19760479243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 283114.3455284561,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 283093.21138211346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71066.9851776697,
            "unit": "ns/iter",
            "extra": "iterations: 9850\ncpu: 71065.53299492385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 71386.63511310014,
            "unit": "ns/iter",
            "extra": "iterations: 9814\ncpu: 71386.68229060523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71064.43282072795,
            "unit": "ns/iter",
            "extra": "iterations: 9884\ncpu: 71062.73775799305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 143901.13448490587,
            "unit": "ns/iter",
            "extra": "iterations: 4863\ncpu: 143898.33436150616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132733.4007582847,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 132728.26540284263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44848.17072233961,
            "unit": "ns/iter",
            "extra": "iterations: 15616\ncpu: 44847.41931352466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 217647.50543982445,
            "unit": "ns/iter",
            "extra": "iterations: 3217\ncpu: 217646.16101958172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 176130.60191003516,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 176123.14651922643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 177782.68619992005,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 177776.3318112629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 179143.9419437263,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 179135.49872122915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 304503.8309430867,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 304499.17427205475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1221366.8815330788,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1221339.1986062739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1017584.4163027455,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1017582.387190672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1018683.0102040811,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1018596.3556851234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1016413.5994195027,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1016363.570391881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 670775.3060057155,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 670773.5938989546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1002939.1060172128,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1002896.1318051653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45321.084147840025,
            "unit": "ns/iter",
            "extra": "iterations: 15449\ncpu: 45319.250436921895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 221851.31073804875,
            "unit": "ns/iter",
            "extra": "iterations: 3157\ncpu: 221843.9024390254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179556.66563308908,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 179556.61498707905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177728.5454314496,
            "unit": "ns/iter",
            "extra": "iterations: 3940\ncpu: 177723.22335025534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178072.7809717867,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 178072.52607479104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 303804.68462211406,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 303788.0104257168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1213805.2582321013,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1213755.285961851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1010090.2968300031,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1010070.7492795405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1016230.932080886,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1016208.8150288964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1007493.5229884487,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1007486.9252873659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 666617.1289397745,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 666587.9656160426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1002588.0057306419,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1002559.8853868169 ns\nthreads: 1"
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
        "date": 1705958237520,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16490.299275668654,
            "unit": "ns/iter",
            "extra": "iterations: 37828\ncpu: 16489.31479327482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 133710.1993986459,
            "unit": "ns/iter",
            "extra": "iterations: 6319\ncpu: 133703.32331065045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 251251.9348392655,
            "unit": "ns/iter",
            "extra": "iterations: 3453\ncpu: 251243.237764263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 367448.2284134485,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 367434.62356444064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 483931.2438752674,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 483907.73942093545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 600442.8129744626,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 600439.33747412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 577112.2489999812,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577098.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 669325.021044964,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 669297.5326560236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 765438.1075269189,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 765421.9189412732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13098.235591355797,
            "unit": "ns/iter",
            "extra": "iterations: 53631\ncpu: 13097.650612518888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10860.90427698576,
            "unit": "ns/iter",
            "extra": "iterations: 64321\ncpu: 10860.445266709174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10865.492172833301,
            "unit": "ns/iter",
            "extra": "iterations: 64455\ncpu: 10864.921262896603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10877.31716024103,
            "unit": "ns/iter",
            "extra": "iterations: 64428\ncpu: 10877.205562798761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17932.844433081413,
            "unit": "ns/iter",
            "extra": "iterations: 39115\ncpu: 17932.286846478357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57479.5970307538,
            "unit": "ns/iter",
            "extra": "iterations: 14145\ncpu: 57477.02368328026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259315.70765026374,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 259305.0698239219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203638.8281959401,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 203632.75985663096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 206168.22683163497,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 206159.21882581274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 199081.3372877427,
            "unit": "ns/iter",
            "extra": "iterations: 4299\ncpu: 199071.9702256337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 496511.7001693932,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 496497.34613213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4171048.7174887955,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4170870.852017932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3327810.356115001,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3327757.1942446097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3313222.93950175,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3313088.6120996512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3308503.5516014807,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3308385.053380783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1956462.2700421538,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1956389.0295358656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3234683.965034902,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3234583.2167832153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12495102.635294002,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12483287.058823537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5452800.779999619,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5452738.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16500816.046875143,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 16500309.375000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53140.65300000266,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53134.700000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 293864.0987654351,
            "unit": "ns/iter",
            "extra": "iterations: 2916\ncpu: 293852.12620027486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233603.13875989505,
            "unit": "ns/iter",
            "extra": "iterations: 3661\ncpu: 233593.41709915255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 241984.3879093187,
            "unit": "ns/iter",
            "extra": "iterations: 3573\ncpu: 241973.60761265017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 224889.2022589996,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 224879.22248489756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 505123.1010453195,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 505123.28687572334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4244080.648401893,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4243910.502283077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3382242.538181841,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3382134.545454547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3357067.1582734827,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3356946.043165465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3363476.5652173515,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3363318.1159420344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1991233.548387045,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1991212.903225804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3284496.5689046695,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3284390.8127208482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12832936.256097721,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12832603.658536565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5769450.210000286,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5769238.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54304.33854615337,
            "unit": "ns/iter",
            "extra": "iterations: 15091\ncpu: 54302.08071035707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 274278.25334606646,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 274270.52262587607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208510.803310603,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 208506.4995131435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 203144.52751965384,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 203137.95568263045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198267.05260708233,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 198262.77932960866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 490762.9019718294,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 490761.6338028165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4181336.247747802,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4181160.810810832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3366714.1223019874,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3366538.848920861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3330494.1785715413,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3330356.071428575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3330737.1678570723,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3330641.4285714175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1961320.3361522849,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1961215.644820299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3260860.228070079,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3260623.5087719304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6362.636414789696,
            "unit": "ns/iter",
            "extra": "iterations: 110186\ncpu: 6362.680376817372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36111.85921804786,
            "unit": "ns/iter",
            "extra": "iterations: 19413\ncpu: 36111.533508473585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28450.236075563713,
            "unit": "ns/iter",
            "extra": "iterations: 24615\ncpu: 28449.750152346227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29153.61989327979,
            "unit": "ns/iter",
            "extra": "iterations: 23988\ncpu: 29153.239119559785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22583.43756852575,
            "unit": "ns/iter",
            "extra": "iterations: 31010\ncpu: 22583.59561431802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 136274.80770728877,
            "unit": "ns/iter",
            "extra": "iterations: 5138\ncpu: 136269.44336317776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256468.6089344547,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 256457.4514829709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 71028.59292304525,
            "unit": "ns/iter",
            "extra": "iterations: 9863\ncpu: 71023.99878333141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 70792.3753526843,
            "unit": "ns/iter",
            "extra": "iterations: 9924\ncpu: 70788.97621926657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 71256.35468031053,
            "unit": "ns/iter",
            "extra": "iterations: 9775\ncpu: 71253.81074168792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 144611.8730912124,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 144603.941394965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132915.5747672414,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 132913.3574007219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44355.39294550714,
            "unit": "ns/iter",
            "extra": "iterations: 15763\ncpu: 44355.02759627043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 217410.26345258253,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 217409.20684292243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174957.0192500016,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 174955.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175298.30771156013,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 175288.73309964972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174467.33624345518,
            "unit": "ns/iter",
            "extra": "iterations: 4009\ncpu: 174461.8608131713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 297881.0742784298,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 297868.08149405563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1222660.6048951116,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1222624.3006992973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1016173.6000000382,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1016083.0434782413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1015561.4159420229,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1015480.8695652146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1019910.3860667181,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1019870.9724238168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 677563.1827853312,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 677533.3655705998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1008693.0933907744,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1008664.2241379165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45191.90097988577,
            "unit": "ns/iter",
            "extra": "iterations: 15512\ncpu: 45190.555698813514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 215570.9593970941,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 215560.38142109776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178946.57425240724,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 178938.3172833275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 175737.10715181552,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 175728.05520702602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 176168.75791855154,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 176157.843137256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 299638.5074690649,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 299616.8587281279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1222619.0994764904,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1222519.371727732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1014753.5672937563,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1014759.623733711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1013190.4083693632,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1013162.9148629069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1009888.916426479,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1009846.109510094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 668641.2816365057,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 668621.6936251068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1003873.3812949078,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1003794.388489221 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}