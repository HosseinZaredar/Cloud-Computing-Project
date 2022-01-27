xargs -I % -P 8 curl --silent "http://localhost:8080/abcd" > /dev/null \
< <(printf '%s\n' {1..4000})