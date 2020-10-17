# WebSocketを触ってみる

WebSocketのデータ構造等に慣れてみたい。

下記のサイトの内容をdockerにて実行できるようにした。

https://note.com/npaka/n/nf35299512e4d

## Usage
```sh
cd websocket_example
docker-compose up
```
を実行した後に、client/index.htmlをブラウザで開く。

TLSも試す場合には、ブラウザの証明書チェックを無効にする。Chrome for Macならこんな感じ。
```sh
SSLKEYLOGFILE=~/Desktop/tls.log /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --ignore-certificate-errors client/index.html
```
