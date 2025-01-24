# PostgreSQL/Hasura SQL Tasks

## Overview

This task involves writing SQL queries for a given database schema. Your goal is to demonstrate your ability to interact with a PostgreSQL database, specifically focusing on data retrieval and manipulation.

## Database Schema

Assume the following simplified schema for this task:

- Table: `users`
  - Columns: `id` (integer), `name` (text), `email` (text)
- Table: `orders`
  - Columns: `id` (integer), `user_id` (integer, foreign key to `users`), `product_id` (integer, foreign key to `products`), `quantity` (integer)
- Table: `products`
  - Columns: `id` (integer), `name` (text), `price` (decimal)

## Tasks

### Task 1: Select All Records from a Table

**Objective**: Write an SQL query to select all records from the `users` table.

**Query**:

```sql
-- SELECT * FROM users;
```

### Task 2: Perform an Inner Join

**Objective**: Write an SQL query to perform an inner join between the `users` `orders` and `products` tables. The query should display the user's name along with the product name and quantity for each order.

**Query**:

### Task 3: Insert a New Record

**Objective**: Write an SQL query to insert a new record into the `orders` table. The new order should be for a user with `id` = 1, for a product named "Widget", with a quantity of 10.

**Query**:

### Task 4: Query with Multiple Joins

**Objective**: Write an SQL query that demonstrates your understanding of complex relationships. The query should join the `users`, `orders`, and `products` tables. It should display the user's name, the product name, quantity, and the total price (quantity multiplied by the product price) for each order.

**Query**:

### Task 5: Foreign Key Constraint

**Objective**: Modify the foreign key constraint on the `orders` table to include a rule for what happens when a referenced record in the `users` table is deleted. Assume the initial foreign key does not have this rule. Update the constraint so that if a user is deleted, all their orders are also deleted (`CASCADE` delete rule).

**Query**:
