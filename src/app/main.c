/** @file
 *
 * @defgroup nRF52840_blinky main.c
 * @{
 * @ingroup blinky_example
 * @brief Blinky Example Application main file.
 *
 * This file contains the source code for a sample application to blink LEDs.
 *
 */

// #include <stdbool.h>
// #include <stdint.h>

#include "board_config.h"
#include "nrf_delay/nrf_delay.h"
#include "nrfx.h"

/**
 * @brief Function for application main entry.
 */
int main(void) {
    board_config();

    while (true) {
        nrf_gpio_pin_toggle(LED_1);
        nrf_delay_ms(1000);
    }
}
