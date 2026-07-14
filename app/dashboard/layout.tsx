import { Sidebar } from '../components/Sidebar';
import { TopMenu } from '../components/TopMenu';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />

      <div className="transition-all duration-300 lg:ml-[25%] lg:peer-checked:ml-0 xl:ml-[20%] 2xl:ml-[15%]">
        <TopMenu />

        <div className="px-6 pt-6">
          { children }
        </div>
      </div>
    </>
  );
}