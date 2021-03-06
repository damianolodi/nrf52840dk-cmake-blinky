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
#include "nrfx.h"

/**
 * @brief Application entry point.
 *
 * @return int
 */
int main(void) {
    board_config();

    while (true) {
    }

    return 0;
}
