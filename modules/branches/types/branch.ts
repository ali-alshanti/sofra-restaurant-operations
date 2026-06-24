export interface Branch {
  id: string;
  name: string;
  city: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
}
