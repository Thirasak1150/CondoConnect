import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    console.log("username",username)
    console.log("password",password)
    if (!username || !password) {
      return NextResponse.json(
        { error: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' },
        { status: 400 }
      );
    }

    // Check if user exists
    const { data: user, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)
      .single();
 
    if (fetchError || !user) {

      return NextResponse.json(
        { error: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' },
        { status: 401 }
      );
    }
      // ถ้า login สำเร็จ ให้ตอบกลับข้อความและส่ง cookies กลับไป
      return NextResponse.json(
        { message: 'เข้าสู่ระบบสำเร็จ', user: user.ALevelss },
        { status: 200 }
      );
 

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ' },
      { status: 500 }
    );
  }
}
