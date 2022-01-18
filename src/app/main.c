/**
 * @file main.c
 * @author Damiano Lodi
 * @brief Application entry point.
 * @date 2022-01-18
 *
 * @copyright Copyright (c) 2022 Damiano Lodi. This project is released under
 * the MIT public license.
 */

#include "board_config.h"
#include "nrf_delay/nrf_delay.h"
#include "nrfx.h"

/**
 * @brief Application entry point.
 *
 * @return int
 */
int main(void) {
    board_config();

    while (true) {
        nrf_gpio_pin_toggle(LED_1);
        nrf_delay_ms(1000);
    }

    return 0;
}
