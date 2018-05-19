mkdir -p .storage/security
ssh-keygen -N "" -t rsa -b 4096 -f .storage/security/private.key
openssl rsa -in .storage/security/private.key -pubout -outform PEM -out .storage/security/public.pem
