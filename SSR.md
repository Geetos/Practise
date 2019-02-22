*I installed ShadowSocksR on my CentOS server
And it's working properly.*

```[remote server config]
"server ipv4":remote_server,
"server_port":2333
"starting server":0.0.0.0

[local server config]
"server ipv4":remote_server,
"server_port":2333
"local_Address":"127.0.0.2"
"local_port":2334
```

*After configurating my ShadowSocksR on my laptop*
*I installed Polipo for transferring the socket from Socks5 to HTTP.*

``` 
[Polipo Config]
socksParentProxy = "127.0.0.2:2334"
socksProxyType = socks5
proxyAddress = "127.0.0.1"
proxyPort = 8123
```

*And I ran the following bash commands:*
>export http_proxy="http://127.0.0.1:8123"

>w3m www.google.com

*And It worked!*

![text](https://github.com/Gleamora/Practise/blob/master/Screenshot%20from%202019-02-22%2015-52-49.png?raw=true)

*Afterwards, i continued to configurate my network proxy *

![text](https://github.com/Gleamora/Practise/blob/master/Screenshot.png?raw=true)

*However, i still cannot visit google via Chrome. It only works on curl,wget,w3m these command-line tools.*
