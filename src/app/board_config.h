#include "nrf_gpio.h"
#include "pca10056.h"

void board_config() { nrf_gpio_pin_dir_set(LED_1, NRF_GPIO_PIN_DIR_OUTPUT); }