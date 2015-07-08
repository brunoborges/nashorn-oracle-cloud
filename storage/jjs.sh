#!/bin/sh
# 
# Download the Storage Cloud Service SDK
# - http://www.oracle.com/technetwork/topics/cloud/downloads/cloud-service-java-sdk-2121032.html
# 
# Extract to a folder, and point STORAGE_SDK to that location
#
# Then run $ ./jjs.sh your-script.js <arg0> <arg1> <arg2> <...>
# 
STORAGE_SDK=/home/bruno/Work/workspaces/oracle/cloud-dev-program/storage-cloud-service-sdk

if [ ! -d "$STORAGE_SDK" ]; then
  echo "Download Oracle Storage Cloud Service SDK from http://www.oracle.com/technetwork/topics/cloud/downloads/cloud-service-java-sdk-2121032.html"
  echo "Extract and adjust variable STORAGE_SDK inside jjs.sh"
fi

java -Dnashorn.args="-scripting" -cp classes:$STORAGE_SDK/lib/jersey-client-1.13.jar:$STORAGE_SDK/lib/jersey-core-1.13.jar:$STORAGE_SDK/lib/jersey-json-1.13.jar:$STORAGE_SDK/lib/jersey-multipart-1.13.jar:$STORAGE_SDK/lib/jettison-1.1.jar:$STORAGE_SDK/lib/mimepull-1.9.3.jar:$STORAGE_SDK/lib/oracle.cloud.storage.api-13.0.0.jar Execute $@
