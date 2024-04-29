import AuthLayout from "../../../libs/layouts/auth.layout";

export default function Page() {
  return (
    <AuthLayout title="Login">
      <h1>Sign In</h1>
      <form action="/auth/login" method="POST">
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
        />
        <small></small>
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
        />
        <button type="submit">Login</button>
      </form>
    </AuthLayout>
  );
}
