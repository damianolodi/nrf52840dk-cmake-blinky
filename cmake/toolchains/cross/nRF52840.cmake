########################
# nRF52840 (Cortex-M4) #
########################

if(nRF52840_TOOLCHAIN_INCLUDED)
	return()
endif()

set(nRF52840_TOOLCHAIN_INCLUDED true)

set(CPU_NAME nRF52840)

set(LINKER_SCRIPT_DIR ${CMAKE_SOURCE_DIR}/cmake/linker-scripts/nordic)
set(LINKER_SCRIPT_PRIMARY_FILE nrf52840_xxaa.ld)

# These dependencies are applied to add_executable targets by the
# AddExecutableWithLinkerScriptDep module
list(APPEND LINKER_SCRIPT_DEPENDENCIES "${LINKER_SCRIPT_DIR}/${LINKER_SCRIPT_PRIMARY_FILE}")

set(CPU_FLAGS "-DNRF52840_XXAA -DBOARD_PCA10056")
set(CPU_FLAGS "${CPU_FLAGS} -D__HEAP_SIZE=8192 -D__STACK_SIZE=8192")
set(CPU_FLAGS "${CPU_FLAGS} -mabi=aapcs")
set(CPU_FLAGS "${CPU_FLAGS} -fno-builtin -fshort-enums")

set(LD_FLAGS "-T${LINKER_SCRIPT_PRIMARY_FILE} -L${LINKER_SCRIPT_DIR}")
set(LD_FLAGS "${LD_FLAGS} --specs=nano.specs")
set(LD_FLAGS "${LD_FLAGS} -mthumb -mabi=aapcs -mcpu=cortex-m4")
set(LD_FLAGS "${LD_FLAGS} -mfloat-abi=hard -mfpu=fpv4-sp-d16")
set(LD_FLAGS "${LD_FLAGS} -lc -lnosys -lm")
# Debug and optimization mode configuration will be added later
set(LD_FLAGS "${LD_FLAGS} -O3 -g3")

include(${CMAKE_CURRENT_LIST_DIR}/cortex-m4_hardfloat.cmake)
