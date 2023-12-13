window.BENCHMARK_DATA = {
  "lastUpdate": 1702492911500,
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
      }
    ]
  }
}