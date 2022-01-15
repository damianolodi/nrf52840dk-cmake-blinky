#include "board_config.h"
#include "nrf_delay/nrf_delay.h"
#include "nrfx.h"

int main(void) {
    board_config();

    while (true) {
        nrf_gpio_pin_toggle(LED_1);
        nrf_delay_ms(1000);
    }
}
