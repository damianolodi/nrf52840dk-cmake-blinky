/**
 * @file board_config.h
 * @author Damiano Lodi
 * @brief Peripherals configuraiton.
 * @date 2022-01-18
 *
 * @copyright Copyright (c) 2022 Damiano Lodi. This project is released under
 * the MIT public license.
 */

#include "nrf_gpio.h"
#include "nrfx_gpiote.h"
#include "nrfx_ppi.h"
#include "nrfx_timer.h"
#include "pca10056.h"

static const nrfx_timer_t timer = NRFX_TIMER_INSTANCE(0);
static void timer_handler(nrf_timer_event_t event_type, void* p_context){};

void check_error(nrfx_err_t error) {
    if (error == NRFX_SUCCESS) {
        return;
    }

    while (true) {
    }
}

/**
 * @brief Configure board peripherals.
 */
static void board_config() {
    nrfx_err_t error = NRFX_SUCCESS;

    /*********
     * TIMER *
     *********/
    nrfx_timer_config_t timer_config = NRFX_TIMER_DEFAULT_CONFIG;
    // Reduce clock frequency to make LED blinking visible
    timer_config.frequency = 9;  ///< 31.25 kHz
    error = nrfx_timer_init(&timer, &timer_config, timer_handler);
    check_error(error);
    // Enable the COMPARE event for the used timer
    nrfx_timer_extended_compare(&timer, NRF_TIMER_CC_CHANNEL0, 200 * 1000UL,
                                NRF_TIMER_SHORT_COMPARE0_CLEAR_MASK, false);
    uint32_t timer_compare_event_addr =
        nrfx_timer_event_address_get(&timer, NRF_TIMER_EVENT_COMPARE0);

    /**********
     * GPIOTE *
     **********/
    const nrfx_gpiote_pin_t gpio_pin = BSP_LED_0;
    const nrfx_gpiote_out_config_t gpio_out_config =
        NRFX_GPIOTE_CONFIG_OUT_TASK_TOGGLE(true);
    error = nrfx_gpiote_init();
    check_error(error);
    error = nrfx_gpiote_out_init(gpio_pin, &gpio_out_config);
    check_error(error);
    uint32_t gpiote_out_task_addr = nrfx_gpiote_out_task_addr_get(gpio_pin);

    /*******
     * PPI *
     *******/
    nrf_ppi_channel_t nrf_ppi_channel;
    error = nrfx_ppi_channel_alloc(&nrf_ppi_channel);
    check_error(error);
    error = nrfx_ppi_channel_assign(nrf_ppi_channel, timer_compare_event_addr,
                                    gpiote_out_task_addr);
    check_error(error);

    // LED_2 will turn on only if configuration is executed without errors
    nrf_gpio_pin_dir_set(LED_2, NRF_GPIO_PIN_DIR_OUTPUT);
}
