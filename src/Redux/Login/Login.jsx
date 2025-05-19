import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// تنظیمات سرویس API
export const Login = createApi({
  reducerPath: ['api'],  // مسیر ردیوسر
  baseQuery: fetchBaseQuery({ baseUrl: 'https://66471c4751e227f23ab11ce9.mockapi.io/login' }),  // آدرس پایه API
  endpoints: (builder) => ({
    createItem: builder.mutation({
      query: (newItem) => ({
        url: '/login',  // مسیر ایجاد آیتم جدید
        method: 'POST',  // نوع درخواست
        body: newItem,  // داده‌های ارسال شده
      }),
    }),
  }),
});

// صدور hook استفاده از mutation
export const { useCreateItemMutation } = Login;
