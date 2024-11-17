# ①課題番号-プロダクト名　メモ帳アプリ

My Memo for health （次女の体調管理メモ）

## ②課題内容（どんな作品か）

次女のかかりつけ医の指示で、体温と血圧と体調をメモするように言われていた時期がありました。
その項目をアプリで記録できたらラクだったと思っておりましたので、作ってみることにしました。

## ③DEMO


## ④作ったアプリケーション用のIDまたはPasswordがある場合

ID,PW なし

## ⑤工夫した点・こだわった点

- 次女の体調は天気と連動していることが多かったので、お天気アプリの先取りを…と思い、天気を自動表示させました。
- 気象庁からJSONデータを取得することには成功しました。
- スマートフォンで表示できるサイズを心掛けました。
- 当日の天気よりも2日後（翌々日）の天気の影響を受けやすいので、2日後まで表示しました。

## ⑥難しかった点・次回トライしたいこと(又は機能)

- ラーニングシステムの動画を観てJSONの取得に挑戦しましたが、データの理解に時間を取られすぎました。階層が深いデータはわかりにくいといことがわかりました。
- 天気と体調を同時に保存するというアイデアをカタチに出来ていません。
    →11/17追記:多少動作するようになりましたが、天気によって背景を表示できませんでした。
- 天気をテキストではなく、画像で表示した方が圧倒的に見やすいと思いますが、技術が追いつきませんでした。
- 体温や血圧をグラフ化してアウトプットできる仕組みを実装できるとなお良いです。
- いつも何気に使っているラジオボタンですが、消すのも一苦労ということがわかりました。

## ⑦質問・疑問・感想、シェアしたいこと等なんでも

- [感想]
  - ただコピペするだけで仕組みを理解できていないと思いました。Javascript奥が深すぎます。
  - 復習＆更なるブラッシュアップに努め、せめて記録が出来るまでに仕上げたいと思います。
  - プロダクトは感覚的に使えるということが改めて大切だと感じました。
  - この仕組みを自由に使えるようになると、業務など効率化できることが多いように感じました。
  - GitHubの使い方も怪しく、バグの処理に時間を費やしてしまいました。
- 【参考にしたサイト】
  - https://qiita.com/LookUP/items/a934482a054444687439
  - https://qiita.com/miyaken3381/items/1bc7530a211a507a19dc
  - ↑画像を取得という項目があり、試してみましたが私には出来ませんでした。

