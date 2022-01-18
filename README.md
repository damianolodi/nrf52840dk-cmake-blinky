# nR52840 DK CMake Blinky

[nR52840 DK CMake Blinky](https://github.com/damianolodi/nrf52840dk-cmake-blinky) is yet another blinky project, but it was created with a clear goal in mind: *learning the usage of CMake and the cross-compilation build process.*

This project can be used as a reference for people that want to learn how to cross-compile without the usage of an IDE. A companion series of blog posts explaining the reasoning process will be added later and linked to this page.

## Table of Contents

- [nR52840 DK CMake Blinky](#nr52840-dk-cmake-blinky)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Project Status](#project-status)
  - [Getting Started](#getting-started)
    - [Dependencies](#dependencies)
    - [Getting the Source](#getting-the-source)
    - [Building and Flashing](#building-and-flashing)
  - [Further Reading](#further-reading)
  - [License](#license)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## About the Project

The project supply the source code and the structure to compile a blinky project for the nRF52840DK development board from Nordic. In particular, the project is compiled using CMake (with the help of a Makefile shim) and the `nrfx` module, from the *nRF5 SDK*.

The main project goals are:

- learn the software build process
- learn the usage of CMake for cross-compilation
- avoid the usage of an IDE
- provide a working project template for more advanced applications

## Project Status

The project is still under development. Code versioning follows the git flow standard.

The main app is always the blinky program, but in each major version the implementation evolves. In particular:

- v1 &rarr; basic blinky implementation using a wait function;
- v2 &rarr; use the TASK/EVENT logic available in the nrfx module.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Dependencies

You need to install the following dependencies to correctly compile and flash the project

- [Git](https://git-scm.com/)
- [GNU Make](https://www.gnu.org/software/make/manual/make.html)
- [CMake](https://cmake.org/)
- [Ninja](https://ninja-build.org/)
- [nrfjprog](https://www.nordicsemi.com/Products/Development-tools/nRF-Command-Line-Tools) (included in *nRF Command Line Tools* by Nordic)

In addition, you will also need the [nRF52840 DK board](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dk).

### Getting the Source

The project source code [is hosted on GitHub](https://github.com/damianolodi/nrf52840dk-cmake-blinky). You can clone the project using this command:

```bash
git clone git@github.com:damianolodi/nrf52840dk-cmake-blinky.git
```

### Building and Flashing

The project provides a Makefile shim to ease the usage of CMake. The most useful targets are the following.

```bash
# Cross-compile for nRF52840
make CROSS=nRF52840

# Flash program onto the board
make flash

# Clean compiled files
make clean

# Remove the _build directory
make distclean
```

## Further Reading

A companion series of blog posts explaining the reasoning process will be added later and linked to this page.

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) file for details.

The skeleton for this project is a stripped-down version of [a more complete project skeleton](https://github.com/embeddedartistry/cmake-project-skeleton), published using the Apache 2.0 license. The build systems files were modified to match the build requirements of this project. The

In addition, the following libraries were included from the source code of the *nRF5 SDK* and all copyright notices were maintained:

- all files from `src/lib/nrfx`
- all files from `src/lib/cmsis`
- all files from `src/utility/nrf_delay`
- file `src/app/pca10056.h`

## Author

**[Damiano Lodi](https://www.damianolodi.com/)** - [Journey to Engineering](https://www.journeytoengineering.com/)

## Acknowledgments

- **[Phillip Johnston](https://github.com/phillipjohnston)** - *Main skeleton creation and support* - [Embedded Artistry](https://github.com/embeddedartistry)

The skeleton of this project is a stripped-down version of a more complete version made by **[Phillip Johnston](https://github.com/phillipjohnston)**. His complete project skeleton [can also be found on GitHub](https://github.com/embeddedartistry/cmake-project-skeleton). I would like to thank him for the support and advice he gave me during the project development.

If you want to learn CMake and how to build a more complete skeleton, my suggestion is to follow the courses made by him about this topic

- [Creating a Cross-Platform Build System for Embedded Projects with CMake](https://embeddedartistry.com/course/creating-a-cross-platform-build-system-for-embedded-projects-with-cmake/)
- [Building a Reusable Project Skeleton with CMake](https://embeddedartistry.com/course/building-a-reusable-project-skeleton-with-cmake/)
