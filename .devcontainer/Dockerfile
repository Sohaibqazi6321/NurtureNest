# Use a base image from Microsoft’s official dev containers
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install required dependencies for Flutter
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    xz-utils \
    git \
    libglu1-mesa

# Download and extract Flutter SDK
RUN curl -LO https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.7.0-stable.tar.xz \
    && tar xf flutter_linux_3.7.0-stable.tar.xz -C /usr/local \
    && rm flutter_linux_3.7.0-stable.tar.xz

# Add Flutter to PATH
ENV PATH="/usr/local/flutter/bin:${PATH}"

# (Optional) Accept Android licenses if you plan to do Android development.
# RUN flutter doctor --android-licenses || true

# Set default working directory (optional)
WORKDIR /workspace
