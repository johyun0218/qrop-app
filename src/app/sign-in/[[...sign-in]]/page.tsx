import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="h-[calc100vhh-96px)] flex items-center justify-center">
      <SignIn />;
    </div>
  );
}
