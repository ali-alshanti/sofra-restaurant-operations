"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "@/modules/auth/services/auth-service";
import {
  loginSchema,
  type LoginSchema,
} from "@/modules/auth/schemas/login-schema";

export function LoginForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      setIsLoading(true);
      setAuthError("");

      const { error } = await signIn(data.email, data.password);

      if (error) {
        setAuthError(error.message);
        return;
      }

      router.push("/dashboard");
    } catch {
      setAuthError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label>Email</label>

        <input
          type="email"
          {...register("email")}
          className="w-full rounded-md border p-2"
        />

        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
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
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {authError && <p className="text-sm text-red-500">{authError}</p>}
      <button
        type="submit"
        disabled={isLoading}
        className="rounded-md border px-4 py-2 disabled:opacity-50"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
