#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.lesliesibanda.weft/host.exp.exponent.MainActivity
