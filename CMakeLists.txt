cmake_minimum_required(VERSION 3.17)
project(NRF52840_CMAKE_BLINKY
	VERSION 0.1
	DESCRIPTION "Basic blinky project using CMake and the nrfx module from Nordic."
	LANGUAGES C CXX ASM)

set_property(GLOBAL PROPERTY C_STANDARD 11)
set_property(GLOBAL PROPERTY CXX_STANDARD 17)

#################
# Build Modules #
#################

# Define and Process Project Options
include(BuildOptions.cmake)

# Improved functions for checking compiler/linker flag support
include(cmake/compiler/CheckAndApplyFlags.cmake)
# Adds a function for generating a linker map
include(cmake/linker/map.cmake)
# Overrides add_executable so that linker script dependencies are registered automatically
include(cmake/linker/AddExecutableWithLinkerScriptDep.cmake)

##################
# Compiler Flags #
##################

# If we're not a subproject, globally apply our warning flags
# if(CMAKE_PROJECT_NAME STREQUAL PROJECT_NAME)
#   add_compile_options(-Wall -Wextra)
# endif()

# Set default flags
check_c_compiler_flag("-Wno-unknown-pragmas" _Wno_unknown_pragmas)
if(_Wno_unknown_pragmas)
  add_compile_options("-Wno-unknown-pragmas")
endif()

#######################
# Process Source Tree #
#######################

add_subdirectory(src)
