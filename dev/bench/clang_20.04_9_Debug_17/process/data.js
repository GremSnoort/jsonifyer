window.BENCHMARK_DATA = {
  "lastUpdate": 1702489549690,
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
      }
    ]
  }
}