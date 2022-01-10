#include "nrf_gpio.h"

/********
 * LEDS *
 ********/

#define LED_1 NRF_GPIO_PIN_MAP(0, 13)
#define LED_2 NRF_GPIO_PIN_MAP(0, 14)
#define LED_3 NRF_GPIO_PIN_MAP(0, 15)
#define LED_4 NRF_GPIO_PIN_MAP(0, 16)

#define LEDS_ACTIVE_STATE 0

void board_config() {
    nrf_gpio_cfg_output(LED_1);
    nrf_gpio_cfg_output(LED_2);
    nrf_gpio_cfg_output(LED_3);
    nrf_gpio_cfg_output(LED_4);
}