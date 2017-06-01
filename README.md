
# DB設計

## users table

ユーザーを保存する

|  Column    |    Type     | Options                             |
|:----------:|:-----------:|:------------------------------------|
| name       | string      | null:false, unique:true, index:true*|
| email      | string      | null:false, unique:true             |
| password   | string      | null:false, unique:true             |

### Association

- has_many :groups, :through :group_menbers
- has_many :messages
- has_many :group_menbers

*グループ作成時のチャットメンバー追加において、名前から検索するため、
unique:trueとし、さらにindexを貼る。


## messages table

チャットのメッセージを保存する

|  Column    |    Type               | Options                                 |
|:----------:|:---------------------:|:----------------------------------------|
| body       | text                  | null:false                              |
| image      | string                |                                         |
| group_id   | references :group     | nul:false, foreign_key:true, index:true*|
| user_id    | references :user      | nul:false, foreign_key:true, index:true*|

### Association

- belongs_to :user
- belongs_to :group

*group,userごとにメッセージが保存されているので、検索しやすいようにindexを貼る。


## groups table

グループを保存する

|  Column    |    Type     | Options                           |
|:----------:|:-----------:|:----------------------------------|
| name       | string      | null:false                        |

### Association

- has_many :users :through :group_menbers
- has_many :messages
- has_many :menbers


## menbers table

ユーザーとグループを紐づけるテーブル

|  Column    |    Type               | Options                                 |
|:----------:|:---------------------:|:----------------------------------------|
| group_id   | references :group     | nul:false, foreign_key:true, index:true*|
| user_id    | references :user      | nul:false, foreign_key:true, index:true*|

### Association

- belongs_to :user
- belongs_to :group

*groupとuser間の処理を早くするためindexを貼る。


