create table if not exists quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  project_type text,
  details text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,
  description text,
  image_url text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);
