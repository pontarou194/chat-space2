# README

### users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false|
|email|string|null: false|


## Association
- has_many :messages
- has_many :users_groups
- has_many :groups,  :through users_groups



### users_groups
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|


## Association
- belongs_to :user
- belongs_to :group




### messages table
|Column|Type|Options|
|------|----|-------|
|text|string|
|image|string|
|user_id|integer|null: false|
|group_id|integer|null: false|

## Association
- belongs_to :user
- belongs_to :group




### groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users_groups
- has_many :messages
- has_many :users ,through: users_groups