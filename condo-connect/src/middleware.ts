import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const token = req.cookies.get("auth-token")?.value; // ดึง token จาก cookies
  console.log("url", url.pathname);
  // ✅ ข้ามการตรวจสอบสำหรับ Static Files และไฟล์อื่นๆ ที่ไม่ต้องการตรวจสอบ token
  if (url.pathname.startsWith("/_next/static") || 
      url.pathname.startsWith("/_next/image") || 
      url.pathname === "/favicon.ico" || 
      url.pathname === "/robots.txt" || 
      url.pathname === "/api/user/login") { // ข้าม /api/user/login
    return NextResponse.next();
  }

  // ✅ ถ้าไม่มี token และไม่ใช่หน้า "/"
  if (!token && url.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect ไปหน้า "/"
  }

  return NextResponse.next(); // อนุญาตให้ request ทำงานต่อไป
}

// 🔥 ระบุเส้นทางที่ต้องใช้ Middleware (ทุกหน้า ยกเว้น "/")
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|api/user/login).*)", // ยกเว้น /api/user/login
  ],
};
