add_executable(APP)
target_sources(APP PRIVATE 
	# app
	main.c
	# nrfx
	nrfx/drivers/src/nrfx_wdt.c
    # nrfx/drivers/src/nrfx_usbd.c
    # nrfx/drivers/src/nrfx_uarte.c
    nrfx/drivers/src/nrfx_uart.c
    nrfx/drivers/src/nrfx_twis.c
    nrfx/drivers/src/nrfx_twim.c
    nrfx/drivers/src/nrfx_twi_twim.c
    nrfx/drivers/src/nrfx_twi.c
    nrfx/drivers/src/nrfx_timer.c
    nrfx/drivers/src/nrfx_temp.c
    nrfx/drivers/src/nrfx_systick.c
    nrfx/drivers/src/nrfx_swi.c
    nrfx/drivers/src/nrfx_spis.c
    nrfx/drivers/src/nrfx_spim.c
    nrfx/drivers/src/nrfx_spi.c
    nrfx/drivers/src/nrfx_saadc.c
    nrfx/drivers/src/nrfx_rtc.c
    nrfx/drivers/src/nrfx_rng.c
    nrfx/drivers/src/nrfx_qspi.c
    nrfx/drivers/src/nrfx_qdec.c
    nrfx/drivers/src/nrfx_pwm.c
    nrfx/drivers/src/nrfx_ppi.c
    nrfx/drivers/src/nrfx_power.c
    nrfx/drivers/src/nrfx_pdm.c
    nrfx/drivers/src/nrfx_nvmc.c
    nrfx/drivers/src/nrfx_nfct.c
    nrfx/drivers/src/nrfx_lpcomp.c
    nrfx/drivers/src/nrfx_i2s.c
    nrfx/drivers/src/nrfx_gpiote.c
    nrfx/drivers/src/nrfx_dppi.c
    nrfx/drivers/src/nrfx_comp.c
    nrfx/drivers/src/nrfx_clock.c
    nrfx/drivers/src/nrfx_adc.c
    # drivers/src/prs
    nrfx/drivers/src/prs/nrfx_prs.c
    # hal
    nrfx/hal/nrf_nvmc.c
    nrfx/hal/nrf_ecb.c
    # mdk
    nrfx/mdk/arm_startup_nrf51.s
    nrfx/mdk/arm_startup_nrf52.s
    nrfx/mdk/arm_startup_nrf52805.s
    nrfx/mdk/arm_startup_nrf52810.s
    nrfx/mdk/arm_startup_nrf52811.s
    nrfx/mdk/arm_startup_nrf52820.s
    nrfx/mdk/arm_startup_nrf52833.s
    nrfx/mdk/arm_startup_nrf52840.s
    nrfx/mdk/arm_startup_nrf5340_application.s
    nrfx/mdk/arm_startup_nrf5340_network.s
    nrfx/mdk/arm_startup_nrf9160.s
    nrfx/mdk/gcc_startup_nrf51.S
    nrfx/mdk/gcc_startup_nrf52.S
    nrfx/mdk/gcc_startup_nrf52805.S
    nrfx/mdk/gcc_startup_nrf52810.S
    nrfx/mdk/gcc_startup_nrf52811.S
    nrfx/mdk/gcc_startup_nrf52820.S
    nrfx/mdk/gcc_startup_nrf52833.S
    nrfx/mdk/gcc_startup_nrf52840.S
    nrfx/mdk/gcc_startup_nrf5340_application.S
    nrfx/mdk/gcc_startup_nrf5340_network.S
    nrfx/mdk/gcc_startup_nrf9160.S
    nrfx/mdk/iar_startup_nrf51.s
    nrfx/mdk/iar_startup_nrf52.s
    nrfx/mdk/iar_startup_nrf52805.s
    nrfx/mdk/iar_startup_nrf52810.s
    nrfx/mdk/iar_startup_nrf52811.s
    nrfx/mdk/iar_startup_nrf52820.s
    nrfx/mdk/iar_startup_nrf52833.s
    nrfx/mdk/iar_startup_nrf52840.s
    nrfx/mdk/iar_startup_nrf5340_application.s
    nrfx/mdk/iar_startup_nrf5340_network.s
    nrfx/mdk/iar_startup_nrf9160.s
    nrfx/mdk/ses_startup_nrf51.s
    nrfx/mdk/ses_startup_nrf52.s
    nrfx/mdk/ses_startup_nrf52805.s
    nrfx/mdk/ses_startup_nrf52810.s
    nrfx/mdk/ses_startup_nrf52811.s
    nrfx/mdk/ses_startup_nrf52820.s
    nrfx/mdk/ses_startup_nrf52833.s
    nrfx/mdk/ses_startup_nrf52840.s
    nrfx/mdk/ses_startup_nrf5340_application.s
    nrfx/mdk/ses_startup_nrf5340_network.s
    nrfx/mdk/ses_startup_nrf_common.s
    nrfx/mdk/ses_startup_nrf9160.s
    nrfx/mdk/system_nrf51.c
    nrfx/mdk/system_nrf52.c
    nrfx/mdk/system_nrf52805.c
    nrfx/mdk/system_nrf52810.c
    nrfx/mdk/system_nrf52811.c
    nrfx/mdk/system_nrf52820.c
    nrfx/mdk/system_nrf52833.c
    nrfx/mdk/system_nrf52840.c
    nrfx/mdk/system_nrf5340_application.c
    nrfx/mdk/system_nrf5340_network.c
    nrfx/mdk/system_nrf9160.c
    # soc
    nrfx/soc/nrfx_atomic.c
	)

target_include_directories(APP PRIVATE
    # cmsis
	cmsis/GCC/Include
	cmsis/include
	# nrfx
	nrfx
	nrfx/drivers
    nrfx/drivers/include
    nrfx/drivers/src
    nrfx/drivers/src/prs
    nrfx/hal
    nrfx/helpers
    nrfx/mdk
    nrfx/soc
    nrfx/templates
    nrfx/templates/nRF52840
	# nrf_delay
	nrf_delay
)

#target_link_libraries(APP PRIVATE utilities)
target_linker_map(APP)

# Apply unconditional private flags here
list(APPEND APP_private_compile_flags
	"-Wno-unknown-pragmas"
)
apply_supported_compiler_flags(C APP PRIVATE APP_private_compile_flags)
