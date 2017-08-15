# kintos-api v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Business](#business)
	- [Create business](#create-business)
	- [Delete business](#delete-business)
	- [Retrieve business](#retrieve-business)
	- [Retrieve businesses](#retrieve-businesses)
	- [Update business](#update-business)
	
- [Loan](#loan)
	- [Create loan](#create-loan)
	- [Delete loan](#delete-loan)
	- [Retrieve loan](#retrieve-loan)
	- [Retrieve loans](#retrieve-loans)
	- [Update loan](#update-loan)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [Reward](#reward)
	- [Create reward](#create-reward)
	- [Delete reward](#delete-reward)
	- [Retrieve reward](#retrieve-reward)
	- [Retrieve rewards](#retrieve-rewards)
	- [Update reward](#update-reward)
	
- [University](#university)
	- [Create university](#create-university)
	- [Delete university](#delete-university)
	- [Retrieve universities](#retrieve-universities)
	- [Retrieve university](#retrieve-university)
	- [Update university](#update-university)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	
- [Wallet](#wallet)
	- [Create wallet](#create-wallet)
	- [Delete wallet](#delete-wallet)
	- [Retrieve wallet](#retrieve-wallet)
	- [Retrieve wallets](#retrieve-wallets)
	- [Update wallet](#update-wallet)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Business

## Create business



	POST /businesses


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Business's name.</p>							|
| type			| 			|  <p>Business's type.</p>							|
| city			| 			|  <p>Business's city.</p>							|
| address			| 			|  <p>Business's address.</p>							|
| state			| 			|  <p>Business's state.</p>							|
| zipCode			| 			|  <p>Business's zipCode.</p>							|
| phoneNumber			| 			|  <p>Business's phoneNumber.</p>							|
| rfc			| 			|  <p>Business's rfc.</p>							|
| logo			| 			|  <p>Business's logo.</p>							|
| url			| 			|  <p>Business's url.</p>							|

## Delete business



	DELETE /businesses/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve business



	GET /businesses/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve businesses



	GET /businesses


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update business



	PUT /businesses/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>Business's name.</p>							|
| type			| 			|  <p>Business's type.</p>							|
| city			| 			|  <p>Business's city.</p>							|
| address			| 			|  <p>Business's address.</p>							|
| state			| 			|  <p>Business's state.</p>							|
| zipCode			| 			|  <p>Business's zipCode.</p>							|
| phoneNumber			| 			|  <p>Business's phoneNumber.</p>							|
| rfc			| 			|  <p>Business's rfc.</p>							|
| logo			| 			|  <p>Business's logo.</p>							|
| url			| 			|  <p>Business's url.</p>							|

# Loan

## Create loan



	POST /loans


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| askedDate			| 			|  <p>Loan's askedDate.</p>							|
| dueDate			| 			|  <p>Loan's dueDate.</p>							|
| amount			| 			|  <p>Loan's amount.</p>							|
| status			| 			|  <p>Loan's status.</p>							|
| toPay			| 			|  <p>Loan's toPay.</p>							|
| userEmail			| 			|  <p>Loan's userEmail.</p>							|
| userId			| 			|  <p>Loan's userId.</p>							|

## Delete loan



	DELETE /loans/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve loan



	GET /loans/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve loans



	GET /loans


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update loan



	PUT /loans/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| askedDate			| 			|  <p>Loan's askedDate.</p>							|
| dueDate			| 			|  <p>Loan's dueDate.</p>							|
| amount			| 			|  <p>Loan's amount.</p>							|
| status			| 			|  <p>Loan's status.</p>							|
| toPay			| 			|  <p>Loan's toPay.</p>							|
| userEmail			| 			|  <p>Loan's userEmail.</p>							|
| userId			| 			|  <p>Loan's userId.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# Reward

## Create reward



	POST /rewards


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| brief			| 			|  <p>Reward's brief.</p>							|
| description			| 			|  <p>Reward's description.</p>							|
| logo			| 			|  <p>Reward's logo.</p>							|
| name			| 			|  <p>Reward's name.</p>							|
| price			| 			|  <p>Reward's price.</p>							|
| restrictions			| 			|  <p>Reward's restrictions.</p>							|
| requiredLevel			| 			|  <p>Reward's requiredLevel.</p>							|

## Delete reward



	DELETE /rewards/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve reward



	GET /rewards/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve rewards



	GET /rewards


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update reward



	PUT /rewards/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| brief			| 			|  <p>Reward's brief.</p>							|
| description			| 			|  <p>Reward's description.</p>							|
| logo			| 			|  <p>Reward's logo.</p>							|
| name			| 			|  <p>Reward's name.</p>							|
| price			| 			|  <p>Reward's price.</p>							|
| restrictions			| 			|  <p>Reward's restrictions.</p>							|
| requiredLevel			| 			|  <p>Reward's requiredLevel.</p>							|

# University

## Create university



	POST /universities


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>University's name.</p>							|
| url			| 			|  <p>University's url.</p>							|
| launchDate			| 			|  <p>University's launchDate.</p>							|
| dateAdded			| 			|  <p>University's dateAdded.</p>							|
| city			| 			|  <p>University's city.</p>							|
| state			| 			|  <p>University's state.</p>							|
| address			| 			|  <p>University's address.</p>							|
| phone			| 			|  <p>University's phone.</p>							|

## Delete university



	DELETE /universities/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve universities



	GET /universities


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Retrieve university



	GET /universities/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Update university



	PUT /universities/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| name			| 			|  <p>University's name.</p>							|
| url			| 			|  <p>University's url.</p>							|
| launchDate			| 			|  <p>University's launchDate.</p>							|
| dateAdded			| 			|  <p>University's dateAdded.</p>							|
| city			| 			|  <p>University's city.</p>							|
| state			| 			|  <p>University's state.</p>							|
| address			| 			|  <p>University's address.</p>							|
| phone			| 			|  <p>University's phone.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's picture.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|

# Wallet

## Create wallet



	POST /wallets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| brief			| 			|  <p>Wallet's brief.</p>							|
| description			| 			|  <p>Wallet's description.</p>							|
| logo			| 			|  <p>Wallet's logo.</p>							|
| name			| 			|  <p>Wallet's name.</p>							|
| price			| 			|  <p>Wallet's price.</p>							|
| type			| 			|  <p>Wallet's type.</p>							|
| restrictions			| 			|  <p>Wallet's restrictions.</p>							|
| requiredLevel			| 			|  <p>Wallet's requiredLevel.</p>							|
| userEmail			| 			|  <p>Wallet's userEmail.</p>							|

## Delete wallet



	DELETE /wallets/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve wallet



	GET /wallets/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|

## Retrieve wallets



	GET /wallets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update wallet



	PUT /wallets/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>master access token.</p>							|
| brief			| 			|  <p>Wallet's brief.</p>							|
| description			| 			|  <p>Wallet's description.</p>							|
| logo			| 			|  <p>Wallet's logo.</p>							|
| name			| 			|  <p>Wallet's name.</p>							|
| price			| 			|  <p>Wallet's price.</p>							|
| type			| 			|  <p>Wallet's type.</p>							|
| restrictions			| 			|  <p>Wallet's restrictions.</p>							|
| requiredLevel			| 			|  <p>Wallet's requiredLevel.</p>							|
| userEmail			| 			|  <p>Wallet's userEmail.</p>							|


