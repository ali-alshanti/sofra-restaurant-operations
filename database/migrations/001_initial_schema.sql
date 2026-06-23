-- Enable UUID generation
create extension if not exists "pgcrypto";

-- =========================
-- Branches
-- =========================
create table branches (
    id uuid primary key default gen_random_uuid(),
    name varchar(255) not null,
    city varchar(255) not null,
    address text,
    phone varchar(50),
    email varchar(255),
    status varchar(20) not null default 'active',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- =========================
-- Restaurant Tables
-- =========================
create table restaurant_tables (
    id uuid primary key default gen_random_uuid(),
    branch_id uuid not null references branches(id) on delete cascade,
    table_number integer not null,
    capacity integer not null,
    status varchar(20) not null default 'available',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- =========================
-- Reservations
-- =========================
create table reservations (
    id uuid primary key default gen_random_uuid(),
    table_id uuid not null references restaurant_tables(id) on delete cascade,
    customer_name varchar(255) not null,
    customer_phone varchar(50) not null,
    guests_count integer not null,
    reservation_date timestamptz not null,
    status varchar(20) not null default 'pending',
    notes text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- =========================
-- Menu Categories
-- =========================
create table menu_categories (
    id uuid primary key default gen_random_uuid(),
    name_en varchar(255) not null,
    name_ar varchar(255) not null,
    description text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- =========================
-- Menu Items
-- =========================
create table menu_items (
    id uuid primary key default gen_random_uuid(),
    category_id uuid not null references menu_categories(id) on delete cascade,
    name_en varchar(255) not null,
    name_ar varchar(255) not null,
    description_en text,
    description_ar text,
    price numeric(10,2) not null,
    image_url text,
    is_available boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- =========================
-- Orders
-- =========================
create table orders (
    id uuid primary key default gen_random_uuid(),
    table_id uuid references restaurant_tables(id) on delete set null,
    reservation_id uuid references reservations(id) on delete set null,
    order_number varchar(50) unique not null,
    status varchar(20) not null default 'pending',
    total_amount numeric(10,2) not null default 0,
    notes text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- =========================
-- Order Items
-- =========================
create table order_items (
    id uuid primary key default gen_random_uuid(),
    order_id uuid not null references orders(id) on delete cascade,
    menu_item_id uuid not null references menu_items(id) on delete cascade,
    quantity integer not null,
    unit_price numeric(10,2) not null,
    total_price numeric(10,2) not null,
    created_at timestamptz not null default now()
);

-- =========================
-- Indexes
-- =========================
create index idx_tables_branch on restaurant_tables(branch_id);

create index idx_reservations_table on reservations(table_id);

create index idx_orders_table on orders(table_id);

create index idx_orders_reservation on orders(reservation_id);

create index idx_menu_items_category on menu_items(category_id);

create index idx_order_items_order on order_items(order_id);

create index idx_order_items_menu_item on order_items(menu_item_id);