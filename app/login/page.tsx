'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../lib/supabase/client';

export default function Login(){
  const router=useRouter();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); setLoading(true); setError('');
    const supabase=createClient();
    const {error}=await supabase.auth.signInWithPassword({email,password});
    if(error){setError(error.message);setLoading(false);return;}
    router.replace('/dashboard'); router.refresh();
  }
  return <main className="shell"><div className="card"><h1>Đăng nhập</h1><p className="muted">Zanvis Customers Growth</p><form onSubmit={submit}><label>Email<br/><input name="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label><br/><br/><label>Password<br/><input name="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label><br/><br/>{error&&<p role="alert">{error}</p>}<button className="button" type="submit" disabled={loading}>{loading?'Đang đăng nhập…':'Đăng nhập'}</button></form></div></main>
}
