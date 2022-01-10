add_library(cmsis INTERFACE)

target_include_directories(cmsis INTERFACE
	GCC/Include
	"include"
)
