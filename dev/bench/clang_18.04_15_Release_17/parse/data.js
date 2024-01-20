window.BENCHMARK_DATA = {
  "lastUpdate": 1705773432830,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-15 18.04 Release c++-17": [
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
        "date": 1702490350387,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 574.4282227321441,
            "unit": "ns/iter",
            "extra": "iterations: 1216367\ncpu: 574.3971186327811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5386.587469999995,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5386.447000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10284.694286691236,
            "unit": "ns/iter",
            "extra": "iterations: 76068\ncpu: 10284.31403481096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15351.999834987782,
            "unit": "ns/iter",
            "extra": "iterations: 54541\ncpu: 15351.729891274452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20250.817411717388,
            "unit": "ns/iter",
            "extra": "iterations: 41317\ncpu: 20249.81000556673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24901.78138264662,
            "unit": "ns/iter",
            "extra": "iterations: 33689\ncpu: 24901.647422007194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29923.35944060995,
            "unit": "ns/iter",
            "extra": "iterations: 28102\ncpu: 29921.475339833465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34756.171654784666,
            "unit": "ns/iter",
            "extra": "iterations: 24124\ncpu: 34753.859227325476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38154.51227525868,
            "unit": "ns/iter",
            "extra": "iterations: 21914\ncpu: 38152.295336314666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 562.5191699126372,
            "unit": "ns/iter",
            "extra": "iterations: 1245363\ncpu: 562.4857973137141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 413.3157521808361,
            "unit": "ns/iter",
            "extra": "iterations: 1582073\ncpu: 413.30349484505365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 439.8035856505019,
            "unit": "ns/iter",
            "extra": "iterations: 1688787\ncpu: 439.7754127666782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 435.5640286123512,
            "unit": "ns/iter",
            "extra": "iterations: 1625453\ncpu: 435.5575953288099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.9189064976925,
            "unit": "ns/iter",
            "extra": "iterations: 829006\ncpu: 846.8633520143411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2095.890394894697,
            "unit": "ns/iter",
            "extra": "iterations: 382026\ncpu: 2095.763115599464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10990.978052645474,
            "unit": "ns/iter",
            "extra": "iterations: 73813\ncpu: 10990.413612778251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8367.38115686829,
            "unit": "ns/iter",
            "extra": "iterations: 97107\ncpu: 8366.902489006972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8611.559904187436,
            "unit": "ns/iter",
            "extra": "iterations: 94768\ncpu: 8611.18943103154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8190.1688494861855,
            "unit": "ns/iter",
            "extra": "iterations: 99260\ncpu: 8189.998992544832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35468.18334184232,
            "unit": "ns/iter",
            "extra": "iterations: 23508\ncpu: 35466.4156882764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 247990.87078327363,
            "unit": "ns/iter",
            "extra": "iterations: 3498\ncpu: 247975.98627787284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185325.48744628718,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 185318.4121239535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 175594.93972910676,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 175586.65914221187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 196945.7373760116,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 196936.5193868351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97941.75922178075,
            "unit": "ns/iter",
            "extra": "iterations: 8892\ncpu: 97937.61808367047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188658.91302466235,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 188654.4136737341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5345.514775730936,
            "unit": "ns/iter",
            "extra": "iterations: 150957\ncpu: 5345.295680226817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25337.48320088409,
            "unit": "ns/iter",
            "extra": "iterations: 32591\ncpu: 25336.368936209386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19387.843815098648,
            "unit": "ns/iter",
            "extra": "iterations: 42725\ncpu: 19386.785254534814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19448.034642988307,
            "unit": "ns/iter",
            "extra": "iterations: 43472\ncpu: 19446.954361428114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19019.398562116374,
            "unit": "ns/iter",
            "extra": "iterations: 43258\ncpu: 19017.603680244058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51849.8425270806,
            "unit": "ns/iter",
            "extra": "iterations: 15971\ncpu: 51846.60947968207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 273555.05009392276,
            "unit": "ns/iter",
            "extra": "iterations: 3194\ncpu: 273540.57608015067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208685.88591886242,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 208669.92840095318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207674.8443598413,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 207662.3036649212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206411.52192364394,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 206399.57567185228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109143.52805737853,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 109136.44942123862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 189083.415120267,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 189075.0057273772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 792386.7877280536,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 792342.7860696497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 444771.8055276234,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 444740.10050251137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1968.890677534504,
            "unit": "ns/iter",
            "extra": "iterations: 406577\ncpu: 1968.8543621503425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10667.261401862086,
            "unit": "ns/iter",
            "extra": "iterations: 76698\ncpu: 10666.91439150957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7972.5022337030605,
            "unit": "ns/iter",
            "extra": "iterations: 102968\ncpu: 7972.067049957288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8076.229385425482,
            "unit": "ns/iter",
            "extra": "iterations: 101615\ncpu: 8075.915957289776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7705.33946497659,
            "unit": "ns/iter",
            "extra": "iterations: 106986\ncpu: 7705.181986428115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35587.43363206127,
            "unit": "ns/iter",
            "extra": "iterations: 23656\ncpu: 35585.97818735202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 261167.7807328653,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 261151.86170212761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194091.64659165245,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 194085.88131480274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 183882.90099009013,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 183867.24246892775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 183471.89004799127,
            "unit": "ns/iter",
            "extra": "iterations: 4793\ncpu: 183464.781973713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93994.80165644463,
            "unit": "ns/iter",
            "extra": "iterations: 9297\ncpu: 93988.39410562547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177486.91802617974,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 177481.34944612367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 179.5557698135555,
            "unit": "ns/iter",
            "extra": "iterations: 3900282\ncpu: 179.55273490480974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1481.9840414821908,
            "unit": "ns/iter",
            "extra": "iterations: 481749\ncpu: 1481.9183848850785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1154.2645845552202,
            "unit": "ns/iter",
            "extra": "iterations: 605315\ncpu: 1154.2198689938343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1168.922010168196,
            "unit": "ns/iter",
            "extra": "iterations: 594398\ncpu: 1168.8698481488857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 859.2513080213544,
            "unit": "ns/iter",
            "extra": "iterations: 815927\ncpu: 859.2279701492882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9794.749783707743,
            "unit": "ns/iter",
            "extra": "iterations: 71662\ncpu: 9794.568948675693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12070.114348343523,
            "unit": "ns/iter",
            "extra": "iterations: 57937\ncpu: 12069.216562818208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2899.4915978059785,
            "unit": "ns/iter",
            "extra": "iterations: 241187\ncpu: 2899.3540282021813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2813.754514083976,
            "unit": "ns/iter",
            "extra": "iterations: 249220\ncpu: 2813.7099751223805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2844.3521894777746,
            "unit": "ns/iter",
            "extra": "iterations: 246657\ncpu: 2844.3003847448063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5154.491120420064,
            "unit": "ns/iter",
            "extra": "iterations: 135592\ncpu: 5154.225175526565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5175.066627659558,
            "unit": "ns/iter",
            "extra": "iterations: 135019\ncpu: 5174.907975914514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.9159662251518,
            "unit": "ns/iter",
            "extra": "iterations: 364651\ncpu: 1917.808260501129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10058.843710110204,
            "unit": "ns/iter",
            "extra": "iterations: 69723\ncpu: 10058.644923482982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7962.083793065012,
            "unit": "ns/iter",
            "extra": "iterations: 87370\ncpu: 7961.945747968389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8146.203498896659,
            "unit": "ns/iter",
            "extra": "iterations: 85627\ncpu: 8145.707545517133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8043.391819283076,
            "unit": "ns/iter",
            "extra": "iterations: 87474\ncpu: 8043.1259574274045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17577.21534809783,
            "unit": "ns/iter",
            "extra": "iterations: 39601\ncpu: 17576.707658897594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55394.45487049161,
            "unit": "ns/iter",
            "extra": "iterations: 12586\ncpu: 55391.22834895897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44851.705448832996,
            "unit": "ns/iter",
            "extra": "iterations: 16554\ncpu: 44848.26023921679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43093.572015201025,
            "unit": "ns/iter",
            "extra": "iterations: 16316\ncpu: 43089.8198087764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43130.77596529555,
            "unit": "ns/iter",
            "extra": "iterations: 16368\ncpu: 43127.88367546443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25279.87920920872,
            "unit": "ns/iter",
            "extra": "iterations: 27618\ncpu: 25278.351075385668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43076.97754454561,
            "unit": "ns/iter",
            "extra": "iterations: 16388\ncpu: 43076.787893580535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1886.9425110976158,
            "unit": "ns/iter",
            "extra": "iterations: 370802\ncpu: 1886.8568670071948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10113.163014824733,
            "unit": "ns/iter",
            "extra": "iterations: 69417\ncpu: 10112.803780053833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7976.382085032256,
            "unit": "ns/iter",
            "extra": "iterations: 87826\ncpu: 7976.182451665743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8011.2836308027245,
            "unit": "ns/iter",
            "extra": "iterations: 87628\ncpu: 8010.728306020882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7948.343068109041,
            "unit": "ns/iter",
            "extra": "iterations: 87624\ncpu: 7948.16716881221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17540.6592108567,
            "unit": "ns/iter",
            "extra": "iterations: 39790\ncpu: 17540.09298818816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53997.512209519344,
            "unit": "ns/iter",
            "extra": "iterations: 13555\ncpu: 53995.01291036485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42609.29155479663,
            "unit": "ns/iter",
            "extra": "iterations: 16388\ncpu: 42602.04417866775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42107.80796422696,
            "unit": "ns/iter",
            "extra": "iterations: 16549\ncpu: 42105.30545652288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42041.07691844435,
            "unit": "ns/iter",
            "extra": "iterations: 16615\ncpu: 42038.62774601307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24707.371026501405,
            "unit": "ns/iter",
            "extra": "iterations: 27998\ncpu: 24706.93978141308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42746.99726010551,
            "unit": "ns/iter",
            "extra": "iterations: 16424\ncpu: 42744.47150511431 ns\nthreads: 1"
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
        "date": 1702492911033,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 568.0675186562337,
            "unit": "ns/iter",
            "extra": "iterations: 1229749\ncpu: 568.06470263444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5491.738820001046,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5491.489999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10534.598701216906,
            "unit": "ns/iter",
            "extra": "iterations: 78535\ncpu: 10534.089259565797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15674.760415294146,
            "unit": "ns/iter",
            "extra": "iterations: 53167\ncpu: 15674.26975379465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20513.463968848224,
            "unit": "ns/iter",
            "extra": "iterations: 40576\ncpu: 20512.77602523659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25446.2901679366,
            "unit": "ns/iter",
            "extra": "iterations: 32750\ncpu: 25445.16946564885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30179.141975088816,
            "unit": "ns/iter",
            "extra": "iterations: 27857\ncpu: 30177.546038697626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34940.32431522652,
            "unit": "ns/iter",
            "extra": "iterations: 23767\ncpu: 34938.75541717506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38519.55388459944,
            "unit": "ns/iter",
            "extra": "iterations: 21611\ncpu: 38519.01346536488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 544.2112518022823,
            "unit": "ns/iter",
            "extra": "iterations: 1278924\ncpu: 544.1916016901698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 420.9265858847649,
            "unit": "ns/iter",
            "extra": "iterations: 1665143\ncpu: 420.9197047941223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 402.82967184059584,
            "unit": "ns/iter",
            "extra": "iterations: 1650966\ncpu: 402.80575129954207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 416.9453742305666,
            "unit": "ns/iter",
            "extra": "iterations: 1679299\ncpu: 416.9352211845548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.1149572226773,
            "unit": "ns/iter",
            "extra": "iterations: 829178\ncpu: 846.1097617158198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2111.4538863019707,
            "unit": "ns/iter",
            "extra": "iterations: 383964\ncpu: 2111.4318008980013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10525.546279046068,
            "unit": "ns/iter",
            "extra": "iterations: 77292\ncpu: 10525.31051079026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8516.184035684582,
            "unit": "ns/iter",
            "extra": "iterations: 96177\ncpu: 8515.822909843318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8448.466262622125,
            "unit": "ns/iter",
            "extra": "iterations: 95369\ncpu: 8447.97366020407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8093.151187754222,
            "unit": "ns/iter",
            "extra": "iterations: 100610\ncpu: 8092.719411589299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35663.44955980058,
            "unit": "ns/iter",
            "extra": "iterations: 23285\ncpu: 35661.026411853076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 249936.60423503045,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 249927.52758723564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188618.58357839234,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 188610.60845962472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189185.2955888946,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 189177.73988176393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182548.78824048844,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 182540.03094606526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98042.6194148362,
            "unit": "ns/iter",
            "extra": "iterations: 8818\ncpu: 98038.52347471085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186914.4684428901,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 186906.39877702526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5392.916236564826,
            "unit": "ns/iter",
            "extra": "iterations: 150352\ncpu: 5392.696472278387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25076.961764796793,
            "unit": "ns/iter",
            "extra": "iterations: 32797\ncpu: 25075.69594780005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19748.96055469314,
            "unit": "ns/iter",
            "extra": "iterations: 43123\ncpu: 19748.150638870182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19307.14082195483,
            "unit": "ns/iter",
            "extra": "iterations: 43871\ncpu: 19306.133892548656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19044.668333903574,
            "unit": "ns/iter",
            "extra": "iterations: 43785\ncpu: 19044.158958547414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51261.7369879948,
            "unit": "ns/iter",
            "extra": "iterations: 16235\ncpu: 51259.605789959765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269917.21042888897,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 269903.94939833414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208290.622825819,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 208280.9387657858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206569.08577555913,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 206558.8515606375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206705.18546486486,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 206693.84143463874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106542.46110081673,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 106537.99628942502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193126.8755908804,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 193118.24237215397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 792351.9368246059,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 792318.2044887815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 423495.5364929097,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 423477.9620853072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2000.2518854990233,
            "unit": "ns/iter",
            "extra": "iterations: 395386\ncpu: 2000.1426454148661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 11369.724662301696,
            "unit": "ns/iter",
            "extra": "iterations: 72402\ncpu: 11369.63757907245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8259.924576379683,
            "unit": "ns/iter",
            "extra": "iterations: 100857\ncpu: 8259.783654084462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8358.860018697465,
            "unit": "ns/iter",
            "extra": "iterations: 98406\ncpu: 8358.456801414577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8153.982975965521,
            "unit": "ns/iter",
            "extra": "iterations: 100270\ncpu: 8153.602273860564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35216.32997702119,
            "unit": "ns/iter",
            "extra": "iterations: 23935\ncpu: 35215.51702527671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 250503.62230747205,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 250498.81971082845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185260.018161939,
            "unit": "ns/iter",
            "extra": "iterations: 4570\ncpu: 185257.04595185985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 190871.44388202592,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 190870.1364436618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194373.2346246327,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 194365.9225213394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95746.114941263,
            "unit": "ns/iter",
            "extra": "iterations: 9109\ncpu: 95744.76890986918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186773.58612691422,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 186771.00990933971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 180.30713412229653,
            "unit": "ns/iter",
            "extra": "iterations: 3883463\ncpu: 180.30670048871332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1438.8763825835663,
            "unit": "ns/iter",
            "extra": "iterations: 486137\ncpu: 1438.8600332828028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1121.756911212549,
            "unit": "ns/iter",
            "extra": "iterations: 622937\ncpu: 1121.7447350213563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1101.3359000842624,
            "unit": "ns/iter",
            "extra": "iterations: 639979\ncpu: 1101.3361375920197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 868.8993316666738,
            "unit": "ns/iter",
            "extra": "iterations: 805586\ncpu: 868.8925825424002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9479.68304036653,
            "unit": "ns/iter",
            "extra": "iterations: 73899\ncpu: 9479.658723392748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11756.30612553675,
            "unit": "ns/iter",
            "extra": "iterations: 59505\ncpu: 11756.042349382318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2764.526080524446,
            "unit": "ns/iter",
            "extra": "iterations: 251452\ncpu: 2764.51966975807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2733.872176810015,
            "unit": "ns/iter",
            "extra": "iterations: 256049\ncpu: 2733.848989841767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2635.506066931529,
            "unit": "ns/iter",
            "extra": "iterations: 253423\ncpu: 2635.481388824208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4829.634746264168,
            "unit": "ns/iter",
            "extra": "iterations: 145466\ncpu: 4829.534736639466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5171.166500088436,
            "unit": "ns/iter",
            "extra": "iterations: 136072\ncpu: 5171.149097536606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1912.3832694929526,
            "unit": "ns/iter",
            "extra": "iterations: 369672\ncpu: 1912.3596052716996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10017.069812950225,
            "unit": "ns/iter",
            "extra": "iterations: 69500\ncpu: 10016.93525179844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8013.06726334234,
            "unit": "ns/iter",
            "extra": "iterations: 87373\ncpu: 8013.039497327564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7968.908207393633,
            "unit": "ns/iter",
            "extra": "iterations: 86946\ncpu: 7968.8277781612105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7913.368398424775,
            "unit": "ns/iter",
            "extra": "iterations: 88388\ncpu: 7913.28347739506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17692.725505071132,
            "unit": "ns/iter",
            "extra": "iterations: 39549\ncpu: 17692.45492932837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52839.44102362461,
            "unit": "ns/iter",
            "extra": "iterations: 12700\ncpu: 52838.811023621434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42803.144726954386,
            "unit": "ns/iter",
            "extra": "iterations: 15968\ncpu: 42801.62199398817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41615.65832453312,
            "unit": "ns/iter",
            "extra": "iterations: 16103\ncpu: 41614.92889523698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41088.099471283575,
            "unit": "ns/iter",
            "extra": "iterations: 16266\ncpu: 41086.46255994128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25260.010902202444,
            "unit": "ns/iter",
            "extra": "iterations: 27976\ncpu: 25258.553760366285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41622.50237776129,
            "unit": "ns/iter",
            "extra": "iterations: 16402\ncpu: 41621.21692476536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1864.7174637595767,
            "unit": "ns/iter",
            "extra": "iterations: 374444\ncpu: 1864.6200767003702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10011.875443052639,
            "unit": "ns/iter",
            "extra": "iterations: 69687\ncpu: 10011.702326115426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7900.384887584697,
            "unit": "ns/iter",
            "extra": "iterations: 87888\ncpu: 7900.344756963375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7949.033323009254,
            "unit": "ns/iter",
            "extra": "iterations: 87177\ncpu: 7948.766303038711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7862.007185575022,
            "unit": "ns/iter",
            "extra": "iterations: 88789\ncpu: 7861.891675770605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17434.54211458223,
            "unit": "ns/iter",
            "extra": "iterations: 40093\ncpu: 17434.4299503653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51676.95306608966,
            "unit": "ns/iter",
            "extra": "iterations: 12997\ncpu: 51675.95598984327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42883.04067838507,
            "unit": "ns/iter",
            "extra": "iterations: 16274\ncpu: 42882.370652574864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41812.058020273565,
            "unit": "ns/iter",
            "extra": "iterations: 17063\ncpu: 41811.69782570527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 39620.12392143112,
            "unit": "ns/iter",
            "extra": "iterations: 17616\ncpu: 39620.072661217164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24923.63673299622,
            "unit": "ns/iter",
            "extra": "iterations: 28797\ncpu: 24923.613570858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42182.29917530465,
            "unit": "ns/iter",
            "extra": "iterations: 17946\ncpu: 42181.48333890539 ns\nthreads: 1"
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
        "date": 1702503977397,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 582.6489751356221,
            "unit": "ns/iter",
            "extra": "iterations: 1205379\ncpu: 582.6067983596861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5414.182719999872,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5413.8229999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10707.090984033148,
            "unit": "ns/iter",
            "extra": "iterations: 78849\ncpu: 10706.700148384889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15760.24028114533,
            "unit": "ns/iter",
            "extra": "iterations: 52784\ncpu: 15759.338056986966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20278.652660995176,
            "unit": "ns/iter",
            "extra": "iterations: 40436\ncpu: 20277.703036897812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25356.079758270684,
            "unit": "ns/iter",
            "extra": "iterations: 33426\ncpu: 25355.782923472747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29692.91102141048,
            "unit": "ns/iter",
            "extra": "iterations: 28490\ncpu: 29692.081432081428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34836.84683069282,
            "unit": "ns/iter",
            "extra": "iterations: 23980\ncpu: 34834.783152627206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38229.88141302837,
            "unit": "ns/iter",
            "extra": "iterations: 21967\ncpu: 38228.711248691216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 543.134515034313,
            "unit": "ns/iter",
            "extra": "iterations: 1291246\ncpu: 543.1164936812971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 425.0549182986555,
            "unit": "ns/iter",
            "extra": "iterations: 1640364\ncpu: 425.0459044455983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 422.11755228088316,
            "unit": "ns/iter",
            "extra": "iterations: 1639747\ncpu: 422.0987749939478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 414.79151356743404,
            "unit": "ns/iter",
            "extra": "iterations: 1722467\ncpu: 414.7866983808696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 843.4427502513204,
            "unit": "ns/iter",
            "extra": "iterations: 830615\ncpu: 843.4204775979234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2084.3715678051217,
            "unit": "ns/iter",
            "extra": "iterations: 383938\ncpu: 2084.3302824935263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 11729.45151820441,
            "unit": "ns/iter",
            "extra": "iterations: 69490\ncpu: 11729.011368542238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8614.172338356208,
            "unit": "ns/iter",
            "extra": "iterations: 94622\ncpu: 8613.76107036421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8774.095714300167,
            "unit": "ns/iter",
            "extra": "iterations: 93497\ncpu: 8773.773490058527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8241.947339622371,
            "unit": "ns/iter",
            "extra": "iterations: 98689\ncpu: 8241.738187639963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35841.98133472059,
            "unit": "ns/iter",
            "extra": "iterations: 23091\ncpu: 35838.9978779611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 250686.5029804287,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 250670.3093954012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198042.2130552985,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 198034.0435176791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188163.7658033556,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 188157.35294117598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197664.88732396418,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 197656.01999091348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96859.53868777912,
            "unit": "ns/iter",
            "extra": "iterations: 8840\ncpu: 96856.78733031689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189122.70454546914,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 189113.9393939393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5403.635915265185,
            "unit": "ns/iter",
            "extra": "iterations: 151863\ncpu: 5403.401091773507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25700.89235706842,
            "unit": "ns/iter",
            "extra": "iterations: 31781\ncpu: 25699.572071363433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20037.600411125084,
            "unit": "ns/iter",
            "extra": "iterations: 41350\ncpu: 20037.17775090691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19570.499218342604,
            "unit": "ns/iter",
            "extra": "iterations: 42218\ncpu: 19570.010422094845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19665.19867073107,
            "unit": "ns/iter",
            "extra": "iterations: 41677\ncpu: 19664.769537154705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52421.759667464496,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 52420.64491749616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271964.91231344413,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 271953.7313432844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207582.09959397206,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 207571.7219966564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 211798.47189667381,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 211785.14709399632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 198104.82025914462,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 198097.64428739692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108399.43627755968,
            "unit": "ns/iter",
            "extra": "iterations: 8027\ncpu: 108395.90133300118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 199969.7369635414,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 199960.61375173042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 784529.2464962287,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 784487.3042044464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 439116.329539828,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 439084.80950024794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2006.6548702727196,
            "unit": "ns/iter",
            "extra": "iterations: 401959\ncpu: 2006.6315221204236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10768.14383561587,
            "unit": "ns/iter",
            "extra": "iterations: 76358\ncpu: 10767.479504439583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8292.54882800949,
            "unit": "ns/iter",
            "extra": "iterations: 100598\ncpu: 8292.160877949855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8215.948149551985,
            "unit": "ns/iter",
            "extra": "iterations: 100192\ncpu: 8215.191831683152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7992.76871833269,
            "unit": "ns/iter",
            "extra": "iterations: 102827\ncpu: 7992.304550361291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35340.57807953491,
            "unit": "ns/iter",
            "extra": "iterations: 23713\ncpu: 35337.96651625705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 265634.80814638425,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 265618.44746162824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 183525.14087301283,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 183512.96296296187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194153.69268077306,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 194145.74514991234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191565.97954742622,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 191550.19582245458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96325.66267968107,
            "unit": "ns/iter",
            "extra": "iterations: 9113\ncpu: 96319.30209590669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185836.75949368055,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 185829.13502109644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 178.68966503661733,
            "unit": "ns/iter",
            "extra": "iterations: 3915234\ncpu: 178.68592273156585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1425.517408548128,
            "unit": "ns/iter",
            "extra": "iterations: 483096\ncpu: 1425.4139963899447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1069.7330983272088,
            "unit": "ns/iter",
            "extra": "iterations: 655586\ncpu: 1069.6460876223716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1111.3525411158325,
            "unit": "ns/iter",
            "extra": "iterations: 628287\ncpu: 1111.2921324171925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 860.7714076977045,
            "unit": "ns/iter",
            "extra": "iterations: 815793\ncpu: 860.7244729974417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9611.059203665534,
            "unit": "ns/iter",
            "extra": "iterations: 72884\ncpu: 9610.8144448713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12098.23943393555,
            "unit": "ns/iter",
            "extra": "iterations: 57732\ncpu: 12097.748215894211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2779.2166526144665,
            "unit": "ns/iter",
            "extra": "iterations: 251444\ncpu: 2779.1468478070797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2563.070738293323,
            "unit": "ns/iter",
            "extra": "iterations: 255901\ncpu: 2563.175212289121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2735.2266587571676,
            "unit": "ns/iter",
            "extra": "iterations: 262968\ncpu: 2735.1962976484033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5110.628396301733,
            "unit": "ns/iter",
            "extra": "iterations: 144385\ncpu: 5110.5731204765125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5200.992072867074,
            "unit": "ns/iter",
            "extra": "iterations: 134601\ncpu: 5200.86032050281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1906.6435779012866,
            "unit": "ns/iter",
            "extra": "iterations: 365488\ncpu: 1906.5936501335098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10129.91666425635,
            "unit": "ns/iter",
            "extra": "iterations: 69154\ncpu: 10129.607831795549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8002.78273843678,
            "unit": "ns/iter",
            "extra": "iterations: 87130\ncpu: 8002.567427981102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8031.3991584406185,
            "unit": "ns/iter",
            "extra": "iterations: 85793\ncpu: 8031.191355938122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8021.335695253869,
            "unit": "ns/iter",
            "extra": "iterations: 85947\ncpu: 8021.122319569098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17728.99014489915,
            "unit": "ns/iter",
            "extra": "iterations: 39269\ncpu: 17729.25972140849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56430.955762982136,
            "unit": "ns/iter",
            "extra": "iterations: 12320\ncpu: 56430.389610390084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44678.87550491117,
            "unit": "ns/iter",
            "extra": "iterations: 16587\ncpu: 44677.759691324994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42194.16132556454,
            "unit": "ns/iter",
            "extra": "iterations: 16476\ncpu: 42192.46783199818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44513.847104342494,
            "unit": "ns/iter",
            "extra": "iterations: 16024\ncpu: 44513.41113329979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25738.45763833,
            "unit": "ns/iter",
            "extra": "iterations: 27218\ncpu: 25738.210008083097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43735.690306443044,
            "unit": "ns/iter",
            "extra": "iterations: 15990\ncpu: 43733.46466541544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1906.2851686025476,
            "unit": "ns/iter",
            "extra": "iterations: 366513\ncpu: 1906.3001858051357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10338.882379667533,
            "unit": "ns/iter",
            "extra": "iterations: 68228\ncpu: 10338.99278888434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8171.798237057517,
            "unit": "ns/iter",
            "extra": "iterations: 86106\ncpu: 8171.7464520474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8046.197087810762,
            "unit": "ns/iter",
            "extra": "iterations: 85434\ncpu: 8045.875178500381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8037.899328471848,
            "unit": "ns/iter",
            "extra": "iterations: 86668\ncpu: 8037.495961600685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17483.717717193154,
            "unit": "ns/iter",
            "extra": "iterations: 40091\ncpu: 17483.00366665833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53767.857021142045,
            "unit": "ns/iter",
            "extra": "iterations: 12911\ncpu: 53766.69506622336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41209.16909550537,
            "unit": "ns/iter",
            "extra": "iterations: 16606\ncpu: 41207.521377814846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41842.35438428915,
            "unit": "ns/iter",
            "extra": "iterations: 16753\ncpu: 41839.62275413404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40673.32974867397,
            "unit": "ns/iter",
            "extra": "iterations: 16831\ncpu: 40671.01182342174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25095.193534560934,
            "unit": "ns/iter",
            "extra": "iterations: 27995\ncpu: 25093.438113949163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 39204.12816436642,
            "unit": "ns/iter",
            "extra": "iterations: 16986\ncpu: 39201.25397386118 ns\nthreads: 1"
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
        "date": 1705575616314,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 590.2823763708361,
            "unit": "ns/iter",
            "extra": "iterations: 1180506\ncpu: 590.2490118644039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5424.919820000015,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5424.574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10467.669845623108,
            "unit": "ns/iter",
            "extra": "iterations: 79481\ncpu: 10467.689133251972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15624.39655726899,
            "unit": "ns/iter",
            "extra": "iterations: 52865\ncpu: 15624.433935496072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20516.77232087343,
            "unit": "ns/iter",
            "extra": "iterations: 40377\ncpu: 20516.62332516036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25371.192079636916,
            "unit": "ns/iter",
            "extra": "iterations: 32549\ncpu: 25370.66883775232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30010.508886149393,
            "unit": "ns/iter",
            "extra": "iterations: 28415\ncpu: 30009.10082702797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35291.54987895611,
            "unit": "ns/iter",
            "extra": "iterations: 23958\ncpu: 35289.74872693882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39787.825799285536,
            "unit": "ns/iter",
            "extra": "iterations: 21613\ncpu: 39785.28663304495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 521.5164325429183,
            "unit": "ns/iter",
            "extra": "iterations: 1245851\ncpu: 521.4893273754237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 422.3539998332625,
            "unit": "ns/iter",
            "extra": "iterations: 1655594\ncpu: 422.33790409967645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 425.8968363644502,
            "unit": "ns/iter",
            "extra": "iterations: 1705601\ncpu: 425.87779908665584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 391.89270008375473,
            "unit": "ns/iter",
            "extra": "iterations: 1683170\ncpu: 391.88263811736095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 859.6714746304515,
            "unit": "ns/iter",
            "extra": "iterations: 814482\ncpu: 859.6792808189729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1974.7334220786447,
            "unit": "ns/iter",
            "extra": "iterations: 400397\ncpu: 1974.7138465073413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10324.76627128476,
            "unit": "ns/iter",
            "extra": "iterations: 78574\ncpu: 10324.799552014654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7920.310231728131,
            "unit": "ns/iter",
            "extra": "iterations: 103052\ncpu: 7920.0539533439505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7968.8699035408745,
            "unit": "ns/iter",
            "extra": "iterations: 101909\ncpu: 7968.646537597266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7869.42415316624,
            "unit": "ns/iter",
            "extra": "iterations: 103208\ncpu: 7869.317300984417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35862.40369906497,
            "unit": "ns/iter",
            "extra": "iterations: 23141\ncpu: 35861.00859945562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245577.91053225892,
            "unit": "ns/iter",
            "extra": "iterations: 3532\ncpu: 245573.6693091741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181369.0338753409,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 181363.75338753394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186607.16164567854,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 186606.04766187008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187534.99864774794,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 187531.327473518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98888.71814584635,
            "unit": "ns/iter",
            "extra": "iterations: 8845\ncpu: 98886.87394007923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187828.72025725286,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 187826.3665594856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5435.52330632224,
            "unit": "ns/iter",
            "extra": "iterations: 148951\ncpu: 5435.220307349397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25907.390896465033,
            "unit": "ns/iter",
            "extra": "iterations: 32405\ncpu: 25906.26446536035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19810.70231878434,
            "unit": "ns/iter",
            "extra": "iterations: 41746\ncpu: 19809.660805825646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19732.110020476382,
            "unit": "ns/iter",
            "extra": "iterations: 42483\ncpu: 19731.48318150783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19442.994934691156,
            "unit": "ns/iter",
            "extra": "iterations: 42643\ncpu: 19442.22263912013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50669.80975282946,
            "unit": "ns/iter",
            "extra": "iterations: 16426\ncpu: 50669.43260684285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271957.29990657064,
            "unit": "ns/iter",
            "extra": "iterations: 3211\ncpu: 271941.35783245025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203117.75840687612,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 203109.82590030946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200320.92038141505,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 200311.44219308626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205233.65821283983,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 205222.46977956741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109054.68502257139,
            "unit": "ns/iter",
            "extra": "iterations: 7972\ncpu: 109049.27245358797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194079.9288556044,
            "unit": "ns/iter",
            "extra": "iterations: 4273\ncpu: 194065.2000936107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 783683.8589007785,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 783640.0328137863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440231.9558117356,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 440199.0874159457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2000.506556949667,
            "unit": "ns/iter",
            "extra": "iterations: 398966\ncpu: 2000.3824887333828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10447.281054796213,
            "unit": "ns/iter",
            "extra": "iterations: 78764\ncpu: 10446.846274947977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7846.932361139605,
            "unit": "ns/iter",
            "extra": "iterations: 103683\ncpu: 7846.5553658748395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8015.634460594687,
            "unit": "ns/iter",
            "extra": "iterations: 101751\ncpu: 8014.989533272374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7805.518885638527,
            "unit": "ns/iter",
            "extra": "iterations: 104921\ncpu: 7805.225836581789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35664.179148559444,
            "unit": "ns/iter",
            "extra": "iterations: 23701\ncpu: 35662.25475718352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 248762.22212335336,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 248746.70818505328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189686.20337851427,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 189670.74905534694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184501.9988879056,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 184502.42437722432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189923.71485675575,
            "unit": "ns/iter",
            "extra": "iterations: 4503\ncpu: 189919.36486786563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97126.77145720278,
            "unit": "ns/iter",
            "extra": "iterations: 8983\ncpu: 97123.2327730151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183307.35990646697,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 183295.34438775547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 178.73063939636,
            "unit": "ns/iter",
            "extra": "iterations: 3918008\ncpu: 178.71798628282494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1475.019862863948,
            "unit": "ns/iter",
            "extra": "iterations: 480545\ncpu: 1474.943241527849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1193.5496825654038,
            "unit": "ns/iter",
            "extra": "iterations: 586735\ncpu: 1193.540013805212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1151.3421844701936,
            "unit": "ns/iter",
            "extra": "iterations: 607003\ncpu: 1151.3172093053902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 867.4142592182883,
            "unit": "ns/iter",
            "extra": "iterations: 814140\ncpu: 867.3574569484433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9529.327515863599,
            "unit": "ns/iter",
            "extra": "iterations: 73285\ncpu: 9528.75759022984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11423.689262137912,
            "unit": "ns/iter",
            "extra": "iterations: 58168\ncpu: 11422.730711043821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2686.284915345895,
            "unit": "ns/iter",
            "extra": "iterations: 248186\ncpu: 2686.0814066869193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2531.6089495530664,
            "unit": "ns/iter",
            "extra": "iterations: 256862\ncpu: 2531.530160163834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2712.4278145182425,
            "unit": "ns/iter",
            "extra": "iterations: 257815\ncpu: 2712.3918313519493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5141.352034693355,
            "unit": "ns/iter",
            "extra": "iterations: 135819\ncpu: 5141.276993645938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5175.310011347095,
            "unit": "ns/iter",
            "extra": "iterations: 134837\ncpu: 5175.205618635848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1995.381621089702,
            "unit": "ns/iter",
            "extra": "iterations: 363743\ncpu: 1995.3621100612302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10124.452645574553,
            "unit": "ns/iter",
            "extra": "iterations: 69191\ncpu: 10124.266161783951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7978.3878455324475,
            "unit": "ns/iter",
            "extra": "iterations: 87112\ncpu: 7978.316420240587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7999.746348811397,
            "unit": "ns/iter",
            "extra": "iterations: 86958\ncpu: 7999.682605395685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7981.677832872951,
            "unit": "ns/iter",
            "extra": "iterations: 87526\ncpu: 7981.629458675219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17770.323666099135,
            "unit": "ns/iter",
            "extra": "iterations: 39377\ncpu: 17770.18818091786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55600.41495356484,
            "unit": "ns/iter",
            "extra": "iterations: 12599\ncpu: 55598.24589253038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43824.38750864924,
            "unit": "ns/iter",
            "extra": "iterations: 15899\ncpu: 43823.47946411697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43497.04081760809,
            "unit": "ns/iter",
            "extra": "iterations: 15949\ncpu: 43496.59539783045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43094.910294468245,
            "unit": "ns/iter",
            "extra": "iterations: 16844\ncpu: 43094.22939919309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25540.41625749933,
            "unit": "ns/iter",
            "extra": "iterations: 27495\ncpu: 25540.032733224438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43155.87915055523,
            "unit": "ns/iter",
            "extra": "iterations: 16293\ncpu: 43155.94427054578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1880.8365606150176,
            "unit": "ns/iter",
            "extra": "iterations: 370229\ncpu: 1880.819708882862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10216.692691977272,
            "unit": "ns/iter",
            "extra": "iterations: 68459\ncpu: 10216.491622723024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8014.438835463648,
            "unit": "ns/iter",
            "extra": "iterations: 87142\ncpu: 8014.229648160429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7971.562354907051,
            "unit": "ns/iter",
            "extra": "iterations: 86152\ncpu: 7971.588587612723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7903.783999452048,
            "unit": "ns/iter",
            "extra": "iterations: 87597\ncpu: 7903.705606356438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17687.43329727478,
            "unit": "ns/iter",
            "extra": "iterations: 39751\ncpu: 17687.137430504943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54223.88149363006,
            "unit": "ns/iter",
            "extra": "iterations: 12801\ncpu: 54222.951331927194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42755.35598745263,
            "unit": "ns/iter",
            "extra": "iterations: 16259\ncpu: 42754.166922935554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42385.89559374974,
            "unit": "ns/iter",
            "extra": "iterations: 16522\ncpu: 42385.99443166691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40008.874917906556,
            "unit": "ns/iter",
            "extra": "iterations: 16749\ncpu: 40008.96769956393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24685.78213194491,
            "unit": "ns/iter",
            "extra": "iterations: 27815\ncpu: 24685.364012223694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41443.97025570098,
            "unit": "ns/iter",
            "extra": "iterations: 17247\ncpu: 41443.79892155101 ns\nthreads: 1"
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
        "date": 1705773431931,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 567.4275294614336,
            "unit": "ns/iter",
            "extra": "iterations: 1232970\ncpu: 567.431243258149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5296.09260999905,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5296.019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10272.237544956795,
            "unit": "ns/iter",
            "extra": "iterations: 80911\ncpu: 10272.170656647428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15391.435010925712,
            "unit": "ns/iter",
            "extra": "iterations: 54463\ncpu: 15391.418026917354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20565.45167313752,
            "unit": "ns/iter",
            "extra": "iterations: 40702\ncpu: 20565.26460616187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25540.474299278376,
            "unit": "ns/iter",
            "extra": "iterations: 32859\ncpu: 25540.09251650994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30261.119205063296,
            "unit": "ns/iter",
            "extra": "iterations: 27977\ncpu: 30261.09661507667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35582.338525218336,
            "unit": "ns/iter",
            "extra": "iterations: 23434\ncpu: 35581.71887001791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39859.234559101504,
            "unit": "ns/iter",
            "extra": "iterations: 21048\ncpu: 39858.646902318476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 572.5407528860233,
            "unit": "ns/iter",
            "extra": "iterations: 1213092\ncpu: 572.5302780003504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 393.09123653065365,
            "unit": "ns/iter",
            "extra": "iterations: 1598351\ncpu: 393.06948223512774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 417.41868742329314,
            "unit": "ns/iter",
            "extra": "iterations: 1672847\ncpu: 417.40260765031064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 415.5103960291178,
            "unit": "ns/iter",
            "extra": "iterations: 1691896\ncpu: 415.5098776756968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 843.6423482828875,
            "unit": "ns/iter",
            "extra": "iterations: 826357\ncpu: 843.606818844639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1986.1669267662082,
            "unit": "ns/iter",
            "extra": "iterations: 402410\ncpu: 1986.1419944832382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10766.355496567678,
            "unit": "ns/iter",
            "extra": "iterations: 77230\ncpu: 10765.558720704383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8663.319995886817,
            "unit": "ns/iter",
            "extra": "iterations: 97245\ncpu: 8663.026376677457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8579.861314021226,
            "unit": "ns/iter",
            "extra": "iterations: 96376\ncpu: 8579.551963144335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8669.262056759733,
            "unit": "ns/iter",
            "extra": "iterations: 94926\ncpu: 8669.063270336906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35733.011110156454,
            "unit": "ns/iter",
            "extra": "iterations: 23222\ncpu: 35730.927568684885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 260790.52353941477,
            "unit": "ns/iter",
            "extra": "iterations: 3526\ncpu: 260779.01304594357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 186053.0138238637,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 186044.236343367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189329.7184246316,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 189322.18198279754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 189053.63564702595,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 189045.78497919926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98687.30441192741,
            "unit": "ns/iter",
            "extra": "iterations: 8817\ncpu: 98683.08948621995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188499.68692093372,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 188492.07067442348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5353.05818952513,
            "unit": "ns/iter",
            "extra": "iterations: 149099\ncpu: 5352.819267734872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25515.556523077976,
            "unit": "ns/iter",
            "extra": "iterations: 32500\ncpu: 25513.781538461553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19885.07383023682,
            "unit": "ns/iter",
            "extra": "iterations: 42530\ncpu: 19884.413355278622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19982.81454414696,
            "unit": "ns/iter",
            "extra": "iterations: 41735\ncpu: 19982.17323589315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19242.13603325425,
            "unit": "ns/iter",
            "extra": "iterations: 43063\ncpu: 19241.255834475076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52358.14127702233,
            "unit": "ns/iter",
            "extra": "iterations: 15912\ncpu: 52355.57440925087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 253202.67370379745,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 253194.9394597957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207103.10107527653,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 207099.4265232966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 197839.7207718469,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 197834.59704880844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206886.60327246523,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 206883.6376571029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108258.53399750404,
            "unit": "ns/iter",
            "extra": "iterations: 8030\ncpu: 108256.18929016168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 199335.4979535994,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 199334.28831286824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787707.3711681232,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 787682.6843413418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 445825.1728830842,
            "unit": "ns/iter",
            "extra": "iterations: 1984\ncpu: 445812.0463709704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1960.236724054581,
            "unit": "ns/iter",
            "extra": "iterations: 409726\ncpu: 1960.1846111791708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10821.416683084166,
            "unit": "ns/iter",
            "extra": "iterations: 76137\ncpu: 10821.310269645575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8387.208464411937,
            "unit": "ns/iter",
            "extra": "iterations: 98223\ncpu: 8386.900216853457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8445.591364083912,
            "unit": "ns/iter",
            "extra": "iterations: 98403\ncpu: 8445.473207117666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7801.347156566075,
            "unit": "ns/iter",
            "extra": "iterations: 105981\ncpu: 7801.018107019151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35074.680632213414,
            "unit": "ns/iter",
            "extra": "iterations: 23916\ncpu: 35073.86268606775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260482.78922581335,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 260474.3891669132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192387.40083828176,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 192379.7264504731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193515.8495263319,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 193511.10376734892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 180800.7224775626,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 180799.1464215354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95393.08750543364,
            "unit": "ns/iter",
            "extra": "iterations: 9188\ncpu: 95387.97344362225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185580.9861286395,
            "unit": "ns/iter",
            "extra": "iterations: 4758\ncpu: 185579.69735182845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 178.37540671295434,
            "unit": "ns/iter",
            "extra": "iterations: 3904781\ncpu: 178.36913260948484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1416.020157976242,
            "unit": "ns/iter",
            "extra": "iterations: 493998\ncpu: 1416.0077571164154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1201.4135001933757,
            "unit": "ns/iter",
            "extra": "iterations: 651724\ncpu: 1201.3769632543792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1114.0089121988017,
            "unit": "ns/iter",
            "extra": "iterations: 627679\ncpu: 1113.975136972886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 865.7703997474682,
            "unit": "ns/iter",
            "extra": "iterations: 808135\ncpu: 865.7615373668949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9503.205649595215,
            "unit": "ns/iter",
            "extra": "iterations: 73669\ncpu: 9503.101711710446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12392.527414031629,
            "unit": "ns/iter",
            "extra": "iterations: 56358\ncpu: 12392.391497214241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2817.142122551834,
            "unit": "ns/iter",
            "extra": "iterations: 246590\ncpu: 2816.9978506833413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2745.646955152103,
            "unit": "ns/iter",
            "extra": "iterations: 256466\ncpu: 2745.622421685533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2743.6463385969114,
            "unit": "ns/iter",
            "extra": "iterations: 250983\ncpu: 2743.5423913173504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5105.122675655809,
            "unit": "ns/iter",
            "extra": "iterations: 136759\ncpu: 5105.0797388105775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5170.381456074546,
            "unit": "ns/iter",
            "extra": "iterations: 135570\ncpu: 5170.230139411365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1906.1776851201962,
            "unit": "ns/iter",
            "extra": "iterations: 368382\ncpu: 1906.103175508034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10126.273960321454,
            "unit": "ns/iter",
            "extra": "iterations: 69156\ncpu: 10126.172710972307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8047.84655257614,
            "unit": "ns/iter",
            "extra": "iterations: 87007\ncpu: 8047.559391773032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8016.2068485274085,
            "unit": "ns/iter",
            "extra": "iterations: 86880\ncpu: 8016.140653775335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8080.553543179226,
            "unit": "ns/iter",
            "extra": "iterations: 85968\ncpu: 8080.1961194862515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17712.887429929,
            "unit": "ns/iter",
            "extra": "iterations: 39602\ncpu: 17712.20897934446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55044.563091364405,
            "unit": "ns/iter",
            "extra": "iterations: 12577\ncpu: 55044.97097877044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44081.078736205236,
            "unit": "ns/iter",
            "extra": "iterations: 15952\ncpu: 44079.77056168478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44548.28955114036,
            "unit": "ns/iter",
            "extra": "iterations: 16308\ncpu: 44546.30242825573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44361.88350561405,
            "unit": "ns/iter",
            "extra": "iterations: 15769\ncpu: 44361.215042170756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25725.947412753125,
            "unit": "ns/iter",
            "extra": "iterations: 27307\ncpu: 25725.143736037968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43784.40869238873,
            "unit": "ns/iter",
            "extra": "iterations: 15968\ncpu: 43783.88652304644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1880.7363181930111,
            "unit": "ns/iter",
            "extra": "iterations: 369889\ncpu: 1880.6155360121759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10008.097486802955,
            "unit": "ns/iter",
            "extra": "iterations: 69712\ncpu: 10008.023008950971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8017.744063084748,
            "unit": "ns/iter",
            "extra": "iterations: 87756\ncpu: 8015.800629016916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7959.763898554963,
            "unit": "ns/iter",
            "extra": "iterations: 87653\ncpu: 7959.750379336628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7804.38741089685,
            "unit": "ns/iter",
            "extra": "iterations: 88521\ncpu: 7803.837507484113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17515.64006583834,
            "unit": "ns/iter",
            "extra": "iterations: 40099\ncpu: 17514.8133369909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53317.44903602187,
            "unit": "ns/iter",
            "extra": "iterations: 13019\ncpu: 53317.09808741065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40608.34467624833,
            "unit": "ns/iter",
            "extra": "iterations: 16633\ncpu: 40605.81374376185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41883.262491585854,
            "unit": "ns/iter",
            "extra": "iterations: 16351\ncpu: 41882.83285425988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41681.91442833362,
            "unit": "ns/iter",
            "extra": "iterations: 16828\ncpu: 41681.34656524775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24840.486686076416,
            "unit": "ns/iter",
            "extra": "iterations: 28166\ncpu: 24840.328765177925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42209.23484217077,
            "unit": "ns/iter",
            "extra": "iterations: 16790\ncpu: 42209.08278737361 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}