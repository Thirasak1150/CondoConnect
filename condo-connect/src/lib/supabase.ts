// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// ข้อมูลจาก Supabase Console
const SUPABASE_URL = 'https://lohariuttuzhtigsacns.supabase.co';  // แทนที่ด้วย URL ของคุณ
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_KEY environment variable');
}

const supabase = createClient(SUPABASE_URL, supabaseKey);
console.log('Supabase client initialized:', !!supabase);

export default supabase;
