# README

### users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|

## Association
- has_many :comments
- belongs_to :users_groups



### users_groups
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|null: false, foreign_key: true|

## Association
- has_many :users
- has_many :groups




### comments table
|Column|Type|Options|
|------|----|-------|
|text|string|
|image|
|user_id|integer|null: false, foreign_key: true|
|created_at|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

## Association
- has_many :users
- belongs_to :groups




### groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|created-at|integer|null: false, foreign_key: true|

### Association
- has_many :users_groups
- belongs_to :comments