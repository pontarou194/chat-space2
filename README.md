# README

### users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|users_groups_id|integer|null: false, foreign_key: true|

## Association
- has_many :messages
- has_many :users_groups
- has_many :groups,  :through users_groups



### users_groups
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|

## Association
- belongs_to :user
- belongs_to :group




### messages table
|Column|Type|Options|
|------|----|-------|
|text|string|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|created_at|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## Association
- belongs_to :user
- belongs_to :group




### groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|created-at|integer|null: false, foreign_key: true|

### Association
- has_many :users_groups
- has_many :messages
- has_many :users ,through: users_groups