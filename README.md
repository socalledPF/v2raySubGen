# v2raySubGen
生成v2ray订阅文件

## 步骤
1. fork 仓库。
2. secrets 创建`SUBSCRIBE_GIST_ID` `GH_USERNAME` `PASSWORD` `VMESS_GIST_ID`。

* `SUBSCRIBE_GIST_ID` 是生成订阅内容gist id
* `VMESS_GIST_ID` 是Vmess链接内容的gist id
* `GH_USERNAME` github 用户名
* `PASSWORD` github密码

## 备注
1. 每隔30分钟生成一次。
2. 生成的订阅gist raw文件链接不同的version是不同的，需要固定订阅gist raw链接，参考
[how to permalink a gist raw file](https://gist.github.com/atenni/5604615)。

