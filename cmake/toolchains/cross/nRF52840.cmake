#############################
# nRF52840 (Cortex-M4) #
#############################

# CMake includes the toolchain file multiple times when configuring the build,
# which causes errors for some flags (e.g., --specs=nano.specs).
# We prevent this with an include guard.
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

set(CPU_FLAGS "-D__HEAP_SIZE=8192 -D__STACK_SIZE=8192 -DNRF52840_XXAA -DBOARD_PCA10056")
set(LD_FLAGS "-T${LINKER_SCRIPT_PRIMARY_FILE} -L${LINKER_SCRIPT_DIR}")
#set(LD_FLAGS "--specs=nano.specs")

include(${CMAKE_CURRENT_LIST_DIR}/cortex-m4_hardfloat.cmake)
