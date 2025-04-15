# Use Microsoft's base image for dev containers (Ubuntu-based)
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# ------------------------------
# 1. Install Core Dependencies
# ------------------------------
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    xz-utils \
    git \
    gnupg \
    wget \
    clang \
    ninja-build \
    pkg-config \
    libgtk-3-dev \
    libblkid-dev \
    openjdk-11-jdk \
    cmake \
    && rm -rf /var/lib/apt/lists/*

# ------------------------------
# 2. Install Android SDK Command-line Tools
# ------------------------------
RUN mkdir -p /usr/local/android-sdk/cmdline-tools && \
    cd /usr/local/android-sdk/cmdline-tools && \
    curl -LO https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip && \
    unzip commandlinetools-linux-9477386_latest.zip && \
    rm commandlinetools-linux-9477386_latest.zip

ENV ANDROID_SDK_ROOT=/usr/local/android-sdk
ENV PATH="${PATH}:${ANDROID_SDK_ROOT}/cmdline-tools/bin:${ANDROID_SDK_ROOT}/platform-tools:${ANDROID_SDK_ROOT}/emulator"

# Accept Android licenses to silence Flutter Doctor warnings.
RUN yes | sdkmanager --licenses || true
# (Optional) If you want to install specific platforms or build-tools, uncomment and adjust:
# RUN sdkmanager --install "platform-tools" "platforms;android-33" "build-tools;33.0.0"

# ------------------------------
# 3. Install Google Chrome for Flutter Web
# ------------------------------
RUN apt-get update && apt-get install -y wget gnupg && \
    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" \
      >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable

# ------------------------------
# 4. Download and Install Flutter SDK
# ------------------------------
RUN curl -LO https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.7.0-stable.tar.xz && \
    tar xf flutter_linux_3.7.0-stable.tar.xz -C /usr/local && \
    rm flutter_linux_3.7.0-stable.tar.xz

# Add Flutter to the PATH
ENV PATH="/usr/local/flutter/bin:${PATH}"

# ------------------------------
# 5. Set the Working Directory
# ------------------------------
WORKDIR /workspace
