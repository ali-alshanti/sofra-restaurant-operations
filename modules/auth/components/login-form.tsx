"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginSchema,
} from "@/modules/auth/schemas/login-schema";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md"
    >
      <div>
        <label>Email</label>

        <input
          type="email"
          {...register("email")}
          className="w-full rounded-md border p-2"
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label>Password</label>

        <input
          type="password"
          {...register("password")}
          className="w-full rounded-md border p-2"
        />

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md border px-4 py-2"
      >
        Sign In
      </button>
    </form>
  );
}