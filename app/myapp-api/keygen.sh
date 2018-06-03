#!/usr/bin/env bash

mkdir -p `pwd`/.storage/security
ssh-keygen -N "" -t rsa -b 4096 -f `pwd`/.storage/security/private.key
openssl rsa -in `pwd`/.storage/security/private.key -pubout -outform PEM -out `pwd`/.storage/security/public.pem
