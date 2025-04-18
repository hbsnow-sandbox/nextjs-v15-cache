# コミットメッセージ

コミットメッセージは、Conventional Commit Messages の仕様を使用し日本語で生成してください。

コミットメッセージは以下の構造に従ってください：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

コミットには、ライブラリの利用者に意図を伝えるために、以下の構造的要素が含まれます：

- fix: バグを修正するコミット（セマンティックバージョニングの PATCH に相当）
- feat: 新機能を導入するコミット（セマンティックバージョニングの MINOR に相当）
- BREAKING CHANGE: footer に BREAKING CHANGE:を含むか、type/scope の後に!を追加するコミットは、API の破壊的変更を導入します（セマンティックバージョニングの MAJOR に相当）。BREAKING CHANGE はどのタイプのコミットにも含めることができます。
- fix:と feat:以外のタイプも許可されています。例えば@commitlint/config-conventional（Angular の規約に基づく）では、build:、chore:、ci:、docs:、perf:、refactor:、style:、test:などを推奨しています。
