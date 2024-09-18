import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        variables: {
          colorPrimary: "blue",
          colorText: "black",
          spacingUnit: "2rem",
          borderRadius: "1rem",
        },
      }}
    />
  );
}
