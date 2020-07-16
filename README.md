# データベース設計

## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
|email|string|null:false,uniqueness:true|
|password|string|null:false,uniqueness:true|
|password-confirmation|string|null:false,uniqueness:true|

## Groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false,unique:true|

## Groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|foreign_key:true,null:false|
|user_id|integer|foreign_key:true,null:false|

## Messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|string||
|image|string||
|movie|blob||
|user_id|integer|foreign_key:true,null:false|
|group_id|integer|foreign_key:true,null:false|

## Postsテーブル
|Column|Type|Options|
|------|----|-------|
|content|string||
|image|string||
|movie|blob||
|user_id|integer|foreign_key:true,null:false|

## Likeテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key:true,null:false|
|post_id|integer|foreign_key:true,null:false|

## Relationshipテーブル
|Column|Type|Options|
|------|----|-------|
|follower_id|integer|foreign_key:true|
|following_id|integer|foreign_key:true|