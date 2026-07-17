import { Link } from "react-router-dom";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center justify-center px-4">
      <Card>
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800">
            Incident Vault
          </h1>

          <p className="mt-2 text-slate-500">
            Securely access your account
          </p>
        </div>

        <form className="space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <Button type="submit">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create one
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Login;