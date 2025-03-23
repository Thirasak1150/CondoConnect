'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface FormData {
  username: string;
  password: string;
  Lname: string;
  Fname: string;
  Contact_number: string;
  ALevelss: string;
}

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    Lname: '',
    Fname: '',
    Contact_number: '',
    ALevelss: 'user'  // Default value as per schema
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handle change event for input fields.
   *
   * This function updates the `formData` state by spreading the current state and updating the value of the input field that triggered the event.
   * The field name is determined by the `name` attribute on the input field.
   * @param e The change event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'การสมัครสมาชิกล้มเหลว');
      }

      // Signup successful, redirect to login
      // router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex w-full h-screen'>
      <div className='relative w-1/2 h-full'>
        <Image
          src="/bgDestop.jpg"
          alt="Background"
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className='w-1/2 flex items-center justify-center p-8'>
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>สมัครสมาชิก</h1>
            <p className='mt-2 text-gray-600'>สร้างบัญชีใหม่สำหรับ CondoConnect</p>
          </div>

          {error && (
            <div className='bg-red-50 text-red-500 p-3 rounded-lg text-sm'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            <div className='space-y-4'>
              <div>
                <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                  ชื่อผู้ใช้
                </label>
                <input
                  id='username'
                  name='username'
                  type='text'
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
              <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                  รหัสผ่าน
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
              <div>
                <label htmlFor='Fname' className='block text-sm font-medium text-gray-700'>
                  ชื่อ
                </label>
                <input
                  id='Fname'
                  name='Fname'
                  type='text'
                  required
                  value={formData.Fname}
                  onChange={handleChange}
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
              <div>
                <label htmlFor='Lname' className='block text-sm font-medium text-gray-700'>
                  นามสกุล
                </label>
                <input
                  id='Lname'
                  name='Lname'
                  type='text'
                  required
                  value={formData.Lname}
                  onChange={handleChange}
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
              <div>
                <label htmlFor='Contact_number' className='block text-sm font-medium text-gray-700'>
                  หมายเลขติดต่อ
                </label>
                <input
                  id='Contact_number'
                  name='Contact_number'
                  type='tel'
                  required
                  value={formData.Contact_number}
                  onChange={handleChange}
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
            </div>

            <div className='space-y-4'>
              <button
                type='submit'
                disabled={isLoading}
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isLoading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
              </button>

              <p className='text-center text-sm'>
                มีบัญชีอยู่แล้ว?{' '}
                <Link href="/" className='text-blue-600 hover:text-blue-500'>
                  เข้าสู่ระบบ
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
