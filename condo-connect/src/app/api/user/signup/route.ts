// src/app/api/user/signup/route.js

import supabase from "@/lib/supabase";



// ฟังก์ชันสำหรับสมัครผู้ใช้
export async function POST(request: Request) {
  // รับข้อมูลจาก request body
  const { username, password, Lname, Fname, Contact_number, ALevelss } = await request.json();

  // ตรวจสอบว่าไม่มีข้อมูลใดที่ขาดหาย
  if (!username || !password || !Lname || !Fname || !Contact_number || !ALevelss) {
    return new Response(
      JSON.stringify({ error: "Missing required fields" }),
      { status: 400 }
    );
  }

  // เพิ่มข้อมูลผู้ใช้ลงในตาราง "users"
  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        username,
        password,  // ควรเข้ารหัส password ก่อน
        Lname,
        Fname,
        Contact_number,
      },
    ]);

  // ถ้ามี error
  if (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400 }
    );
  }

  // ถ้าสมัครสำเร็จ
  return new Response(
    JSON.stringify({ message: "User successfully created", user: data }),
    { status: 201 }
  );
}
