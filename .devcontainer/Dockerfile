# Use Microsoft's Ubuntu-based Dev Container image
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
# Create the folder for the Android SDK; we'll extract the command-line tools into a "latest" folder.
RUN mkdir -p /usr/local/android-sdk/cmdline-tools && \
    cd /usr/local/android-sdk/cmdline-tools && \
    curl -LO https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip && \
    unzip commandlinetools-linux-9477386_latest.zip && \
    # Rename the extracted folder to "latest"
    mv cmdline-tools latest && \
    rm commandlinetools-linux-9477386_latest.zip

# Set environment variable for the Android SDK root
ENV ANDROID_SDK_ROOT=/usr/local/android-sdk

# Add Android SDK tools to PATH:
ENV PATH="${PATH}:${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin:${ANDROID_SDK_ROOT}/platform-tools:${ANDROID_SDK_ROOT}/emulator"

# Accept Android SDK licenses to silence flutter doctor warnings.
RUN yes | sdkmanager --licenses || true

# Install the required Android SDK components:
RUN sdkmanager --install "platform-tools" "platforms;android-33" "build-tools;33.0.0"

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
