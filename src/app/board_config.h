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
#include "pca10056.h"

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
void board_config() { nrf_gpio_pin_dir_set(LED_1, NRF_GPIO_PIN_DIR_OUTPUT); }