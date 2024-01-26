import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full flex items-center justify-center">
            <Navbar />
            {children}
        </div>
    );
};

export default DashboardLayout;