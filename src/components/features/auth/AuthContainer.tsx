import InputField from "@/components/ui/InputField";
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
import {
  AdminSignIn,
  AdminSignInSchema,
} from "@/components/schema & types/auth/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface AuthContainerProps {
  onClose: () => void;
}

function AuthContainer({ onClose }: AuthContainerProps) {
  const { isPending, signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AdminSignIn>({
    mode: "onTouched",
    resolver: zodResolver(AdminSignInSchema),
  });

  const onSubmit = async (data: AdminSignIn) => {
    await signIn(data);
    onClose();
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
      <InputField<AdminSignIn>
        label="Email"
        name="email"
        register={register}
        errors={errors.email}
        required
      />

      <InputField<AdminSignIn>
        label="Password"
        name="password"
        register={register}
        errors={errors.password}
        type="password"
        required
      />

      <button
        type="submit"
        className="submit-btn"
        disabled={isPending || !isValid}
      >
        {isPending ? "Submitting ..." : "Submit"}
      </button>
    </form>
  );
}

export default AuthContainer;
