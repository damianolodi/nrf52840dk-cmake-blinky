# you can set this to 1 to see all commands that are being run
VERBOSE ?= 0

ifeq ($(VERBOSE),1)
export Q :=
export VERBOSE := 1
else
export Q := @
export VERBOSE := 0
endif

# This skeleton is built for CMake's Ninja generator
export CMAKE_GENERATOR=Ninja

BUILDRESULTS ?= _build
CONFIGURED_BUILD_DEP = $(BUILDRESULTS)/build.ninja

OPTIONS ?=
INTERNAL_OPTIONS =

CROSS ?=
ifneq ($(CROSS),)
	INTERNAL_OPTIONS += -DCMAKE_TOOLCHAIN_FILE=cmake/toolchains/cross/$(CROSS).cmake
endif

all: default

.PHONY: default
default: | $(CONFIGURED_BUILD_DEP)
	$(Q)ninja -C $(BUILDRESULTS)

# Runs whenever the build has not been configured successfully
$(CONFIGURED_BUILD_DEP):
	$(Q)cmake -B $(BUILDRESULTS) $(OPTIONS) $(INTERNAL_OPTIONS)

# Manually Reconfigure a target, esp. with new options
.PHONY: reconfig
reconfig:
	$(Q) cmake -B $(BUILDRESULTS) $(OPTIONS) $(INTERNAL_OPTIONS)

# Flash the program
.PHONY: flash
flash: default
	@echo Flashing: $(BUILDRESULTS)/src/app/APP.hex
	nrfjprog -f nrf52 --program $(BUILDRESULTS)/src/app/APP.hex --sectorerase
	nrfjprog -f nrf52 --reset

.PHONY: clean
clean:
	$(Q) if [ -d "$(BUILDRESULTS)" ]; then ninja -C $(BUILDRESULTS) clean; fi

.PHONY: distclean
distclean:
	$(Q) rm -rf $(BUILDRESULTS)
