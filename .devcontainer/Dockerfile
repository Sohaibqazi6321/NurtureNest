# Use Microsoft's Ubuntu-based Dev Container image
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# ------------------------------
# 1. Install Core Dependencies and Python
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
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# ------------------------------
# 2. Install Android SDK Command-line Tools
# ------------------------------
# Create the folder for the command-line tools, download, extract and rename the folder to "latest"
RUN mkdir -p /usr/local/android-sdk/cmdline-tools && \
    cd /usr/local/android-sdk/cmdline-tools && \
    curl -LO https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip && \
    unzip commandlinetools-linux-9477386_latest.zip && \
    mv cmdline-tools latest && \
    rm commandlinetools-linux-9477386_latest.zip

# Set environment variable for the Android SDK root
ENV ANDROID_SDK_ROOT=/usr/local/android-sdk

# Add Android SDK tools to PATH; note the use of the "latest" folder
ENV PATH="$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools:$ANDROID_SDK_ROOT/emulator"

# Accept Android SDK licenses to silence Flutter doctor warnings
RUN yes | sdkmanager --licenses || true

# Install essential Android SDK components
RUN sdkmanager --install "platform-tools" "platforms;android-33" "build-tools;33.0.0"

# ------------------------------
# 3. Install Google Chrome for Flutter Web
# ------------------------------
RUN apt-get update && apt-get install -y wget gnupg && \
    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable

# ------------------------------
# 4. Download and Install Flutter SDK
# ------------------------------
RUN curl -LO https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.7.0-stable.tar.xz && \
    tar xf flutter_linux_3.7.0-stable.tar.xz -C /usr/local && \
    rm flutter_linux_3.7.0-stable.tar.xz

# Add Flutter to the PATH so Flutter commands are available
ENV PATH="/usr/local/flutter/bin:${PATH}"

# ------------------------------
# 5. Install Python Backend Dependencies
# ------------------------------
# Copy the backend requirements file from your repository into the container and install dependencies.
# (Ensure your build context is the repository root by setting "context": ".." in devcontainer.json)
COPY backend/requirements.txt /tmp/requirements.txt
RUN pip3 install -r /tmp/requirements.txt

# ------------------------------
# 6. Set the Working Directory
# ------------------------------
WORKDIR /workspace
