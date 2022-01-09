var group__nrf__saadc__hal =
[
    [ "nrf_saadc_config_t", "structnrf__saadc__config__t.html", [
      [ "buffer", "structnrf__saadc__config__t.html#ad6b1dd308fafe74389a34ba293e254f2", null ],
      [ "buffer_size", "structnrf__saadc__config__t.html#a96c9fb56653b319575fd4c2889add0c0", null ],
      [ "oversample", "structnrf__saadc__config__t.html#ac282df937ab47948e862fcef947a3eb4", null ],
      [ "resolution", "structnrf__saadc__config__t.html#abb581f8000e50e9d7a89d7989f55bc65", null ]
    ] ],
    [ "nrf_saadc_channel_config_t", "structnrf__saadc__channel__config__t.html", [
      [ "acq_time", "structnrf__saadc__channel__config__t.html#aa8bf05f1ebe7a17509fc15dce8c4a3c1", null ],
      [ "burst", "structnrf__saadc__channel__config__t.html#a1302832da87878d08d264a9e92def254", null ],
      [ "gain", "structnrf__saadc__channel__config__t.html#ab18afcc483838dffbb0929d7b77a9d58", null ],
      [ "mode", "structnrf__saadc__channel__config__t.html#aa9ca4469bd541c3628ca841f71995c4c", null ],
      [ "pin_n", "structnrf__saadc__channel__config__t.html#a134f648c0b7b3bab27a1d84b40961138", null ],
      [ "pin_p", "structnrf__saadc__channel__config__t.html#a2a360331dcd2fe0aa410b3ad8d6d7230", null ],
      [ "reference", "structnrf__saadc__channel__config__t.html#a051bcd2ef1076949870168b4fbc83df2", null ],
      [ "resistor_n", "structnrf__saadc__channel__config__t.html#a59748a13af1d7cacc4123629d4ee9c39", null ],
      [ "resistor_p", "structnrf__saadc__channel__config__t.html#ac9f8de092917bc7e736c891a368eb062", null ]
    ] ],
    [ "NRF_SAADC_CHANNEL_COUNT", "group__nrf__saadc__hal.html#ga4d684a36e72b6d858ce305b46db3a30a", null ],
    [ "nrf_saadc_value_t", "group__nrf__saadc__hal.html#gaf3083862e80023851eb8e73acc728cc5", null ],
    [ "nrf_saadc_acqtime_t", "group__nrf__saadc__hal.html#ga125831a7eb192939bd96d99ab1e7a742", [
      [ "NRF_SAADC_ACQTIME_3US", "group__nrf__saadc__hal.html#gga125831a7eb192939bd96d99ab1e7a742a91b53f4264eafab02d15d6885db5acbd", null ],
      [ "NRF_SAADC_ACQTIME_5US", "group__nrf__saadc__hal.html#gga125831a7eb192939bd96d99ab1e7a742a440d0922fa9ede3513dff2c0132e6abf", null ],
      [ "NRF_SAADC_ACQTIME_10US", "group__nrf__saadc__hal.html#gga125831a7eb192939bd96d99ab1e7a742a7452b8e0b08b260e95c8cdcc949a0eed", null ],
      [ "NRF_SAADC_ACQTIME_15US", "group__nrf__saadc__hal.html#gga125831a7eb192939bd96d99ab1e7a742a32eb0eead4bd3bff1add85aedbfb34c6", null ],
      [ "NRF_SAADC_ACQTIME_20US", "group__nrf__saadc__hal.html#gga125831a7eb192939bd96d99ab1e7a742abd6f18b68b384ee5cf466f2ddade6e49", null ],
      [ "NRF_SAADC_ACQTIME_40US", "group__nrf__saadc__hal.html#gga125831a7eb192939bd96d99ab1e7a742a0dfc455375a35f2747539aeadb9d77cd", null ]
    ] ],
    [ "nrf_saadc_burst_t", "group__nrf__saadc__hal.html#ga46239c9f1d0af686aa09373d68c9a61a", [
      [ "NRF_SAADC_BURST_DISABLED", "group__nrf__saadc__hal.html#gga46239c9f1d0af686aa09373d68c9a61aa605705545f3c481ada5c0c068c26dd28", null ],
      [ "NRF_SAADC_BURST_ENABLED", "group__nrf__saadc__hal.html#gga46239c9f1d0af686aa09373d68c9a61aa67d75ecddee833d170c2b924ad8b1ef2", null ]
    ] ],
    [ "nrf_saadc_event_t", "group__nrf__saadc__hal.html#ga54a401b89bf604a64fce520429bbbdd1", [
      [ "NRF_SAADC_EVENT_STARTED", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a8802cfd4ef157b181acf414cff6ff409", null ],
      [ "NRF_SAADC_EVENT_END", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a3caea189d3feb4fb51f3eeeaa31a7d51", null ],
      [ "NRF_SAADC_EVENT_DONE", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a38a3b65b88b278c566528173ee6f3403", null ],
      [ "NRF_SAADC_EVENT_RESULTDONE", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1af1aea0c0901456d0e677ed29e33e918a", null ],
      [ "NRF_SAADC_EVENT_CALIBRATEDONE", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1abc9496dabfb62fe70c1ab872400bf75b", null ],
      [ "NRF_SAADC_EVENT_STOPPED", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1ab74a57373475fe680c97c82ac7b73938", null ],
      [ "NRF_SAADC_EVENT_CH0_LIMITH", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1adb37680e1256ecb958a572fa385ee739", null ],
      [ "NRF_SAADC_EVENT_CH0_LIMITL", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1afeeb02e7df74fb429bf2f01cc45b7f82", null ],
      [ "NRF_SAADC_EVENT_CH1_LIMITH", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1ac39d01a0de5b6705b86bff7f7210e2a9", null ],
      [ "NRF_SAADC_EVENT_CH1_LIMITL", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1ad247142de8549552b7a7446ed604e4af", null ],
      [ "NRF_SAADC_EVENT_CH2_LIMITH", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1afc3c9fe35a2721ed3618df52b62e6f1f", null ],
      [ "NRF_SAADC_EVENT_CH2_LIMITL", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1aef66a24727e5dc12d2dcbd3b8a00583f", null ],
      [ "NRF_SAADC_EVENT_CH3_LIMITH", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a148cbb2a196f1656413179089b63d6ab", null ],
      [ "NRF_SAADC_EVENT_CH3_LIMITL", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1ada7b054199e1fa667ddee5bffd790213", null ],
      [ "NRF_SAADC_EVENT_CH4_LIMITH", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a9179d81d5f56dbcb487b45fbb23a6c20", null ],
      [ "NRF_SAADC_EVENT_CH4_LIMITL", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a19d836edc59abc15f62cd0630ea58cc8", null ],
      [ "NRF_SAADC_EVENT_CH5_LIMITH", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1ae14d0343df57c333a35458ab1cb08a1f", null ],
      [ "NRF_SAADC_EVENT_CH5_LIMITL", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a0ffc3add15b391667be38015a5f8418e", null ],
      [ "NRF_SAADC_EVENT_CH6_LIMITH", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a814747e44cb3ce2dad5bef354eef155e", null ],
      [ "NRF_SAADC_EVENT_CH6_LIMITL", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a82ef01bcaf54abc8bb1a2f2932651ae4", null ],
      [ "NRF_SAADC_EVENT_CH7_LIMITH", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a2b4acf6c8a8f5ac233849c3e4a260529", null ],
      [ "NRF_SAADC_EVENT_CH7_LIMITL", "group__nrf__saadc__hal.html#gga54a401b89bf604a64fce520429bbbdd1a0d0e19a21605e1a5f560bbb9d94fbe3f", null ]
    ] ],
    [ "nrf_saadc_gain_t", "group__nrf__saadc__hal.html#gadda2525fbe5db392d1c1980c4a1286a0", [
      [ "NRF_SAADC_GAIN1_6", "group__nrf__saadc__hal.html#ggadda2525fbe5db392d1c1980c4a1286a0a51b7e2b28fe46a742870328ad6d48cc2", null ],
      [ "NRF_SAADC_GAIN1_5", "group__nrf__saadc__hal.html#ggadda2525fbe5db392d1c1980c4a1286a0a6b6ea2d94564978e0a04ec27eb36dcaf", null ],
      [ "NRF_SAADC_GAIN1_4", "group__nrf__saadc__hal.html#ggadda2525fbe5db392d1c1980c4a1286a0a8bdf3696726cc885b69a8edd16842340", null ],
      [ "NRF_SAADC_GAIN1_3", "group__nrf__saadc__hal.html#ggadda2525fbe5db392d1c1980c4a1286a0af07ee87058d9573360b9886f0d197b23", null ],
      [ "NRF_SAADC_GAIN1_2", "group__nrf__saadc__hal.html#ggadda2525fbe5db392d1c1980c4a1286a0a1aafa7a93cf70c82f808db67c74f6e61", null ],
      [ "NRF_SAADC_GAIN1", "group__nrf__saadc__hal.html#ggadda2525fbe5db392d1c1980c4a1286a0a49a79897cf1a7f924965c566a41880e7", null ],
      [ "NRF_SAADC_GAIN2", "group__nrf__saadc__hal.html#ggadda2525fbe5db392d1c1980c4a1286a0aaf44b0f743dd2eb51ef662fc82b9c09d", null ],
      [ "NRF_SAADC_GAIN4", "group__nrf__saadc__hal.html#ggadda2525fbe5db392d1c1980c4a1286a0ab24781a885803059e306560ac6ef4de3", null ]
    ] ],
    [ "nrf_saadc_input_t", "group__nrf__saadc__hal.html#ga4adceebeae2b334a695d4aecb640fe35", [
      [ "NRF_SAADC_INPUT_DISABLED", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35ab7b71ab017ed52f13af490b9a98e0291", null ],
      [ "NRF_SAADC_INPUT_AIN0", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35a89e8503fa50d42dcd37c12ba58f431ac", null ],
      [ "NRF_SAADC_INPUT_AIN1", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35a611abc0981d67b62720db632b5a98ca2", null ],
      [ "NRF_SAADC_INPUT_AIN2", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35ab89fe1ee375859455d5d19d16d14982c", null ],
      [ "NRF_SAADC_INPUT_AIN3", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35a49153186afd4def492449829422aa872", null ],
      [ "NRF_SAADC_INPUT_AIN4", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35aef924b3477579cd2fddf42aa68a43003", null ],
      [ "NRF_SAADC_INPUT_AIN5", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35af2bf681b57135f213f711de546d68e64", null ],
      [ "NRF_SAADC_INPUT_AIN6", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35a22c85a1841e1ea0ad12bb4567c6b6b54", null ],
      [ "NRF_SAADC_INPUT_AIN7", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35a362a9588ac632d292ebc825fd1a8f98c", null ],
      [ "NRF_SAADC_INPUT_VDD", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35a49f61bf380953ae7b19502a713a48f74", null ],
      [ "NRF_SAADC_INPUT_VDDHDIV5", "group__nrf__saadc__hal.html#gga4adceebeae2b334a695d4aecb640fe35a76afc67d975f00294f3824c4d449dab7", null ]
    ] ],
    [ "nrf_saadc_int_mask_t", "group__nrf__saadc__hal.html#ga82c6d9ccbed7aa753b044ae4216a52e7", [
      [ "NRF_SAADC_INT_STARTED", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7aa045e1687b7eaf51827129bccfae99ae", null ],
      [ "NRF_SAADC_INT_END", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a1dfee95542a3a3499cbb5875eb33808d", null ],
      [ "NRF_SAADC_INT_DONE", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a1ce20cb57f783d5feae941dec4348920", null ],
      [ "NRF_SAADC_INT_RESULTDONE", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a0b08e2221943faac470b466d3c59745b", null ],
      [ "NRF_SAADC_INT_CALIBRATEDONE", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a3d488af5afe59a781c026af9ebea6f0d", null ],
      [ "NRF_SAADC_INT_STOPPED", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a8bd1e8a4f530a9ecbfdaf9b6dd5dd805", null ],
      [ "NRF_SAADC_INT_CH0LIMITH", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a807ef5f8b39d6d5d05353d817d2b7fd3", null ],
      [ "NRF_SAADC_INT_CH0LIMITL", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a2ee8aba4ca294b8d94266252268193db", null ],
      [ "NRF_SAADC_INT_CH1LIMITH", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a08e9613aa09aa07c0c18fb57e65208e2", null ],
      [ "NRF_SAADC_INT_CH1LIMITL", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7ae4cee39513094642ccc5490e58adee8e", null ],
      [ "NRF_SAADC_INT_CH2LIMITH", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a54a04edc15cc38bc4a657657ea4ae34c", null ],
      [ "NRF_SAADC_INT_CH2LIMITL", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a360826a886f90b76b79b23409fc620f2", null ],
      [ "NRF_SAADC_INT_CH3LIMITH", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7abedd76d10671c7c1c133533d85d380d8", null ],
      [ "NRF_SAADC_INT_CH3LIMITL", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7af42b94420fb86b061df28a9b96b2965f", null ],
      [ "NRF_SAADC_INT_CH4LIMITH", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a5a21ec6f00929f84fdb9ce142bee81be", null ],
      [ "NRF_SAADC_INT_CH4LIMITL", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a53150d22c5c0fb63137bd9661a5c0cb1", null ],
      [ "NRF_SAADC_INT_CH5LIMITH", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7af470bd28c2f8969dc5f48929d9ab118e", null ],
      [ "NRF_SAADC_INT_CH5LIMITL", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7ae5e6d12e0184a74139ff8f22a143ab7b", null ],
      [ "NRF_SAADC_INT_CH6LIMITH", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a9f7bfd9b5c7129332bfd67ac87b8d27d", null ],
      [ "NRF_SAADC_INT_CH6LIMITL", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7af3ad11a95f62e6ca0095217f952319c6", null ],
      [ "NRF_SAADC_INT_CH7LIMITH", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7a5f90ab95293f53a04c1c1fad010af3c6", null ],
      [ "NRF_SAADC_INT_CH7LIMITL", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7ac55d76dc332dc0301d5bb5110033f7c7", null ],
      [ "NRF_SAADC_INT_ALL", "group__nrf__saadc__hal.html#gga82c6d9ccbed7aa753b044ae4216a52e7ae3e630effb1b905a3d661461cc86c4b5", null ]
    ] ],
    [ "nrf_saadc_limit_t", "group__nrf__saadc__hal.html#gad3a1aa4df4fa236684487f209f438a3d", [
      [ "NRF_SAADC_LIMIT_LOW", "group__nrf__saadc__hal.html#ggad3a1aa4df4fa236684487f209f438a3da668f96bfc2e19db0c72fd6c7ebc2a4f6", null ],
      [ "NRF_SAADC_LIMIT_HIGH", "group__nrf__saadc__hal.html#ggad3a1aa4df4fa236684487f209f438a3da80f852093bfb4fd581b30f154322cc49", null ]
    ] ],
    [ "nrf_saadc_mode_t", "group__nrf__saadc__hal.html#ga4436d07f1135db83c486397781e718c2", [
      [ "NRF_SAADC_MODE_SINGLE_ENDED", "group__nrf__saadc__hal.html#gga4436d07f1135db83c486397781e718c2ad0ce3a0327c0393e981db20d43c709f8", null ],
      [ "NRF_SAADC_MODE_DIFFERENTIAL", "group__nrf__saadc__hal.html#gga4436d07f1135db83c486397781e718c2a4c57cd1fc309cd665870b257f4c50767", null ]
    ] ],
    [ "nrf_saadc_oversample_t", "group__nrf__saadc__hal.html#ga62ca4cd30bcc0c4a306135c957f7ed39", [
      [ "NRF_SAADC_OVERSAMPLE_DISABLED", "group__nrf__saadc__hal.html#gga62ca4cd30bcc0c4a306135c957f7ed39a07bd46d3a4b42947b73e5ffbf77de0bf", null ],
      [ "NRF_SAADC_OVERSAMPLE_2X", "group__nrf__saadc__hal.html#gga62ca4cd30bcc0c4a306135c957f7ed39ac33692f15f098ea8ef6777c353009a17", null ],
      [ "NRF_SAADC_OVERSAMPLE_4X", "group__nrf__saadc__hal.html#gga62ca4cd30bcc0c4a306135c957f7ed39afa0ae6d243f9da65d42e382e10574647", null ],
      [ "NRF_SAADC_OVERSAMPLE_8X", "group__nrf__saadc__hal.html#gga62ca4cd30bcc0c4a306135c957f7ed39a678abd8d9f3856e95979fa9cd60d02ea", null ],
      [ "NRF_SAADC_OVERSAMPLE_16X", "group__nrf__saadc__hal.html#gga62ca4cd30bcc0c4a306135c957f7ed39a108b3c93033a3f08715e9127c76e9eac", null ],
      [ "NRF_SAADC_OVERSAMPLE_32X", "group__nrf__saadc__hal.html#gga62ca4cd30bcc0c4a306135c957f7ed39a2e0670954aafc7b52b37e16737db12a6", null ],
      [ "NRF_SAADC_OVERSAMPLE_64X", "group__nrf__saadc__hal.html#gga62ca4cd30bcc0c4a306135c957f7ed39ab51b06d2c5bcd8a85c81aac8e5979323", null ],
      [ "NRF_SAADC_OVERSAMPLE_128X", "group__nrf__saadc__hal.html#gga62ca4cd30bcc0c4a306135c957f7ed39a301c27ff073e372fb03397683b29222f", null ],
      [ "NRF_SAADC_OVERSAMPLE_256X", "group__nrf__saadc__hal.html#gga62ca4cd30bcc0c4a306135c957f7ed39ace10f1369e776f3b86de8b69cff6065c", null ]
    ] ],
    [ "nrf_saadc_reference_t", "group__nrf__saadc__hal.html#gad540c22a2e06a7828a5ce6c71bc8a5d4", [
      [ "NRF_SAADC_REFERENCE_INTERNAL", "group__nrf__saadc__hal.html#ggad540c22a2e06a7828a5ce6c71bc8a5d4a45e4751bab9abc4fb0e8cf281f2010fc", null ],
      [ "NRF_SAADC_REFERENCE_VDD4", "group__nrf__saadc__hal.html#ggad540c22a2e06a7828a5ce6c71bc8a5d4aac8f8c9c960da2c5edba27c84b776d45", null ]
    ] ],
    [ "nrf_saadc_resistor_t", "group__nrf__saadc__hal.html#ga1ac6795cf7f0c7c87df12a6c87fb4303", [
      [ "NRF_SAADC_RESISTOR_DISABLED", "group__nrf__saadc__hal.html#gga1ac6795cf7f0c7c87df12a6c87fb4303ac941d50e00494def50bfb5c2ab32c84d", null ],
      [ "NRF_SAADC_RESISTOR_PULLDOWN", "group__nrf__saadc__hal.html#gga1ac6795cf7f0c7c87df12a6c87fb4303abfe4b85be11a4f7da453017634a808c0", null ],
      [ "NRF_SAADC_RESISTOR_PULLUP", "group__nrf__saadc__hal.html#gga1ac6795cf7f0c7c87df12a6c87fb4303a5f5486c3fa0bd560b4d3cf0eead03328", null ],
      [ "NRF_SAADC_RESISTOR_VDD1_2", "group__nrf__saadc__hal.html#gga1ac6795cf7f0c7c87df12a6c87fb4303a459416062bf0c090f5558d033103bb54", null ]
    ] ],
    [ "nrf_saadc_resolution_t", "group__nrf__saadc__hal.html#gaeb0690ef4bdb8ec1cfac1f6c6a496630", [
      [ "NRF_SAADC_RESOLUTION_8BIT", "group__nrf__saadc__hal.html#ggaeb0690ef4bdb8ec1cfac1f6c6a496630a9c906fc4ba0c92e8cd641f2b361e0dca", null ],
      [ "NRF_SAADC_RESOLUTION_10BIT", "group__nrf__saadc__hal.html#ggaeb0690ef4bdb8ec1cfac1f6c6a496630a0b1d34632f8e3ef1cf2d4f18a23bd667", null ],
      [ "NRF_SAADC_RESOLUTION_12BIT", "group__nrf__saadc__hal.html#ggaeb0690ef4bdb8ec1cfac1f6c6a496630a07b412d0ffcffd71026ceb4effbdb31e", null ],
      [ "NRF_SAADC_RESOLUTION_14BIT", "group__nrf__saadc__hal.html#ggaeb0690ef4bdb8ec1cfac1f6c6a496630a3b01ada0cfa0aba5a95b5b222169756b", null ]
    ] ],
    [ "nrf_saadc_task_t", "group__nrf__saadc__hal.html#gacde3c3040c12e04f9edc2bc92c1b2276", [
      [ "NRF_SAADC_TASK_START", "group__nrf__saadc__hal.html#ggacde3c3040c12e04f9edc2bc92c1b2276a7900b2c3694c7cc4da64f5de28da8b9b", null ],
      [ "NRF_SAADC_TASK_SAMPLE", "group__nrf__saadc__hal.html#ggacde3c3040c12e04f9edc2bc92c1b2276a53f835ed3f4b6e9ff24d1550ead3c941", null ],
      [ "NRF_SAADC_TASK_STOP", "group__nrf__saadc__hal.html#ggacde3c3040c12e04f9edc2bc92c1b2276a268763796f741cda6eea1a51f348b204", null ],
      [ "NRF_SAADC_TASK_CALIBRATEOFFSET", "group__nrf__saadc__hal.html#ggacde3c3040c12e04f9edc2bc92c1b2276a541cf2b16d6bd1ca797afcb691e47603", null ]
    ] ],
    [ "nrf_saadc_amount_get", "group__nrf__saadc__hal.html#gafcd312d767be50f45e1caa33219f6dd0", null ],
    [ "nrf_saadc_buffer_init", "group__nrf__saadc__hal.html#gaf62dd80b2b9f819f058168525e5e1eae", null ],
    [ "nrf_saadc_buffer_pointer_get", "group__nrf__saadc__hal.html#gad31d95bdbfec0a21263f1ca5685749f0", null ],
    [ "nrf_saadc_buffer_pointer_set", "group__nrf__saadc__hal.html#ga0ec4ae7db80864abd43b0a74602f10ba", null ],
    [ "nrf_saadc_burst_set", "group__nrf__saadc__hal.html#gaaf390ed9ca5da7252b24dc6e9a57b1a6", null ],
    [ "nrf_saadc_busy_check", "group__nrf__saadc__hal.html#ga1624e5812f2dcd3ccd89ea70ea9533ef", null ],
    [ "nrf_saadc_channel_init", "group__nrf__saadc__hal.html#ga52d36d7b3109b203f96603d17045ef39", null ],
    [ "nrf_saadc_channel_input_set", "group__nrf__saadc__hal.html#ga84b6340a0f4c45d4807039ea9a137c9c", null ],
    [ "nrf_saadc_channel_limits_set", "group__nrf__saadc__hal.html#ga6eac7c1b585da24bcff8bf51dd9171a1", null ],
    [ "nrf_saadc_channel_pos_input_set", "group__nrf__saadc__hal.html#ga36b524980b7b79b34370931b8ab46ee9", null ],
    [ "nrf_saadc_continuous_mode_disable", "group__nrf__saadc__hal.html#ga7be17c38a0d7b3363c1daa05ba23f6fa", null ],
    [ "nrf_saadc_continuous_mode_enable", "group__nrf__saadc__hal.html#gad2c5858013f5a20e3c4d8f874a67117c", null ],
    [ "nrf_saadc_continuous_mode_enable_check", "group__nrf__saadc__hal.html#gabea840e605de8d40d84d12bd98dd3785", null ],
    [ "nrf_saadc_disable", "group__nrf__saadc__hal.html#ga172542f45d3f03cf412cca4ba0ded1f7", null ],
    [ "nrf_saadc_enable", "group__nrf__saadc__hal.html#ga5d3180a36ff4847c57ebaa324b2b0fa6", null ],
    [ "nrf_saadc_enable_check", "group__nrf__saadc__hal.html#gaeb83173d981b1a64907a5b072e06e4fa", null ],
    [ "nrf_saadc_event_address_get", "group__nrf__saadc__hal.html#ga283b4029280ebb5f11dd7410a2363d97", null ],
    [ "nrf_saadc_event_check", "group__nrf__saadc__hal.html#ga77fbc2e483a8e21e61cbd5b814339498", null ],
    [ "nrf_saadc_event_clear", "group__nrf__saadc__hal.html#ga821c82c2900bb7469afffffc9f8ca0c5", null ],
    [ "nrf_saadc_event_limit_address_get", "group__nrf__saadc__hal.html#gae679a7fbafe6dea4a93a8ac40f549648", null ],
    [ "nrf_saadc_int_disable", "group__nrf__saadc__hal.html#ga7a765dc8ebada5e9b264662a1682a443", null ],
    [ "nrf_saadc_int_enable", "group__nrf__saadc__hal.html#gaa49f6f130d255c70a723277271b322da", null ],
    [ "nrf_saadc_int_enable_check", "group__nrf__saadc__hal.html#ga999719c573bd4689c123fe4782152dc2", null ],
    [ "nrf_saadc_int_set", "group__nrf__saadc__hal.html#ga4685d8070ee0f601cfce58a4812e3e95", null ],
    [ "nrf_saadc_limit_event_get", "group__nrf__saadc__hal.html#ga2b3bc554a1d5f8af741b81d9e7c888d7", null ],
    [ "nrf_saadc_limit_int_get", "group__nrf__saadc__hal.html#ga43cc18b2eac54d85ee93a9d32cfe8a18", null ],
    [ "nrf_saadc_oversample_get", "group__nrf__saadc__hal.html#ga5fcb7dccc7961a9d110488021513d279", null ],
    [ "nrf_saadc_oversample_sample_count_get", "group__nrf__saadc__hal.html#gac90034892391af0f2d40c5c975ab8f42", null ],
    [ "nrf_saadc_oversample_set", "group__nrf__saadc__hal.html#gaa3cd2b1ed2a3c3fa95a0af54926a77af", null ],
    [ "nrf_saadc_publish_clear", "group__nrf__saadc__hal.html#ga7cdcba7e86ec87c50dc03457cca81a1d", null ],
    [ "nrf_saadc_publish_set", "group__nrf__saadc__hal.html#gae67c60652ef82dd21064d07c89b85137", null ],
    [ "nrf_saadc_resolution_get", "group__nrf__saadc__hal.html#ga259389dfd96519708275614a2663bcdf", null ],
    [ "nrf_saadc_resolution_set", "group__nrf__saadc__hal.html#ga2b4c13f607627a26731707a316e47ff6", null ],
    [ "nrf_saadc_subscribe_clear", "group__nrf__saadc__hal.html#gaee9c9cd2ef1d81f06023704b11e98737", null ],
    [ "nrf_saadc_subscribe_set", "group__nrf__saadc__hal.html#ga1d86761aa2bfe03313f5953a5c704a7d", null ],
    [ "nrf_saadc_task_address_get", "group__nrf__saadc__hal.html#ga4872521d627a777b2abdb9981f39f67d", null ],
    [ "nrf_saadc_task_trigger", "group__nrf__saadc__hal.html#gae71d7006cfd6684c307e41ff76ca0a43", null ],
    [ "nrf_saadc_value_max_get", "group__nrf__saadc__hal.html#ga33f4f7aaa82829cbf6b6a54fc63a1305", null ],
    [ "nrf_saadc_value_min_get", "group__nrf__saadc__hal.html#gab9547f95736804b3449c31835cdcaf55", null ]
];