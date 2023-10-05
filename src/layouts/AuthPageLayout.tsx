const AuthPageLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <main className="w-screen h-screen flex flex-col items-center p-6 gap-6">
      {children}
    </main>
  );
};

export default AuthPageLayout;
