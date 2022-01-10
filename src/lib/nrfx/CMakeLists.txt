add_library(nrfx)

target_sources(nrfx PRIVATE 
    drivers/src/nrfx_wdt.c
    #drivers/src/nrfx_usbd.c
    drivers/src/nrfx_uarte.c
    drivers/src/nrfx_uart.c
    drivers/src/nrfx_twis.c
    drivers/src/nrfx_twim.c
    drivers/src/nrfx_twi_twim.c
    drivers/src/nrfx_twi.c
    drivers/src/nrfx_timer.c
    drivers/src/nrfx_temp.c
    drivers/src/nrfx_systick.c
    drivers/src/nrfx_swi.c
    drivers/src/nrfx_spis.c
    drivers/src/nrfx_spim.c
    drivers/src/nrfx_spi.c
    drivers/src/nrfx_saadc.c
    drivers/src/nrfx_rtc.c
    drivers/src/nrfx_rng.c
    drivers/src/nrfx_qspi.c
    drivers/src/nrfx_qdec.c
    drivers/src/nrfx_pwm.c
    drivers/src/nrfx_ppi.c
    #drivers/src/nrfx_power.c
    drivers/src/nrfx_pdm.c
    drivers/src/nrfx_nvmc.c
    drivers/src/nrfx_nfct.c
    drivers/src/nrfx_lpcomp.c
    drivers/src/nrfx_i2s.c
    drivers/src/nrfx_gpiote.c
    drivers/src/nrfx_dppi.c
    drivers/src/nrfx_comp.c
    #drivers/src/nrfx_clock.c
    drivers/src/nrfx_adc.c
    # drivers/src/prs
    drivers/src/prs/nrfx_prs.c
    # hal
    hal/nrf_nvmc.c
    hal/nrf_ecb.c
    # mdk
    mdk/gcc_startup_nrf52.S
    mdk/gcc_startup_nrf52840.S
    mdk/system_nrf52.c
    mdk/system_nrf52840.c
    # soc
    soc/nrfx_atomic.c
)

target_include_directories(nrfx PUBLIC
	.
	drivers
    drivers/include
    drivers/src
    drivers/src/prs
    hal
    helpers
    mdk
    soc
    templates
    templates/nRF52840
)

target_compile_definitions(nrfx PUBLIC
    BSP_DEFINES_ONLY CONFIG_GPIO_AS_PINRESET
    FLOAT_ABI_HARD MBR_PRESENT
)

target_compile_options(nrfx PUBLIC
    -mthumb -mabi=aapcs
    -mfloat-abi=hard -mfpu=fpv4-sp-d16
    -ffunction-sections -fdata-sections -fno-strict-aliasing
    -fno-builtin -fshort-enums)

target_link_options(nrfx PUBLIC
    -mthumb -mabi=aapcs
    -mcpu=cortex-m4
    -mfloat-abi=hard -mfpu=fpv4-sp-d16
    -Wl,--gc-sections
    --specs=nano.specs
    -O3 -g3
    -lc -lnosys -lm
)

target_link_libraries(nrfx PUBLIC cmsis)