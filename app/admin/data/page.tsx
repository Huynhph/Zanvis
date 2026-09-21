import { redirect } from 'next/navigation';
import { createClient } from '../../../lib/supabase/server';
export default async function Data(){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect('/login');return <main className="shell"><div className="card"><h1>Data management</h1><p className="muted">Signed in as {user.email}</p><input type="file" accept=".xlsx" /></div></main>}
