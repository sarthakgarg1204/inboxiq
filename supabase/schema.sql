-- Table: messages
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  prediction text check (prediction in ('spam', 'ham')) not null,
  confidence numeric(5,4) not null check (confidence >= 0.0 and confidence <= 1.0),
  threshold_used numeric(5,4) not null check (threshold_used >= 0.0 and threshold_used <= 1.0),
  created_at timestamp default now()
);

-- Table: contact
create table if not exists public.contact (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp default now()
);

-- Enable Row Level Security
alter table public.messages enable row level security;
alter table public.contact enable row level security;

-- Full Access Policies
create policy "Allow all"
  on public.messages
  for all
  to public
  using (true)
  with check (true);

create policy "Allow all"
  on public.contact
  for all
  to public
  using (true)
  with check (true);
  