window.BENCHMARK_DATA = {
  "lastUpdate": 1705772987556,
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
      }
    ]
  }
}