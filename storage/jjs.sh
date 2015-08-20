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
CLASSPATH=$STORAGE_SDK/lib/oracle.cloud.storage.api-13.0.0.jar

if [ ! -d "$STORAGE_SDK" ]; then
  echo "Download Oracle Storage Cloud Service SDK from http://www.oracle.com/technetwork/topics/cloud/downloads/cloud-service-java-sdk-2121032.html"
  echo "Extract and adjust variable STORAGE_SDK inside jjs.sh"
fi

# java -Dnashorn.args="-scripting" -cp classes:$CLASSPATH Execute $@

jjs -scripting -cp $CLASSPATH $@
