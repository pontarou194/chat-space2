# README

### users table
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|user_registrations_id|integer|null: false, foreign_key: true|

## Association
- has_many :comments
- has_many :groups

### comments table
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|string|null: false, foreign_key: true|
|image|null: false, foreign_key: true|


### groups table
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|created-at|integer|null: false, foreign_key: true|

### Association
- belongs_to :comments
- belongs_to :users

### user_registrations table
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|email|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
|created_at|integer|null: false, foreign_key: true|


### Association
- belongs_to :users