# RustWebAssembly  
作りたいものを考え中...  

## A Plan  
- 機械学習系  
  >対話型AI  

- 分散コンピューティング  
  >ブラウザを開いておくだけで参加できるもの  
  >javascriptで作られたものがすでにあるっぽい

- ゲーム
  >

## Usage  
wasm-pack nodejs npm がインストールされていることが前提。

1. git clone git@github.com:various3211workd/WebAssemFromRust.git  
2. wasm-pack build  
3. cd pkg & npm link
4. cd ../www & npm link WebAssemFromRust  
5. npm install  
6. npm run start  
