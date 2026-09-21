import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';
export default async function Dashboard(){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect('/login');return <main className="shell"><div className="card"><h1>Zanvis Customer Dashboard</h1><p className="muted">Signed in as {user.email}</p><a className="button" href="/admin/data">Data management</a></div></main>}
