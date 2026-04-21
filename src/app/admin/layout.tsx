import { AdminSidebarItems } from "@/components/constants/Navigation";
import Sidebar from "@/components/templates/admin/Sidebar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-[5%] py-16">
      <div className="grid h-screen transition-colors duration-400 grid-cols-1 md:grid-cols-[15rem_1fr] border border-snow/20 rounded mt-10">
        {/* Sidebar */}
        <Sidebar items={AdminSidebarItems} />

        {/* Main Content */}
        <div className="p-8 overflow-y-auto">
          {/* Tabs */}
          {/* <div className="md:hidden mb-6 overflow-hidden transition-colors duration-300 ease-in-out grid grid-cols-2 border border-platinum/50 rounded">
          {items?.map((item) => (
            <Link
              key={item?.id}
              href={item.href}
              className={`
                            flex items-center justify-center p-4 cursor-pointer 
                            border border-platinum/50 text-xs 
                              flex-1 grow shrink-0 
                            transition-colors duration-200 hover:bg-silver/20
                            ${
                              isActive(item.href) ? "bg-silver/30 " : "bg-night"
                            }
                        `}
            >

              <div className="flex items-center justify-between w-full">
                <span>{item?.title}</span>
                <span>{item?.icon}</span>
              </div>
            </Link>
          ))}
        </div> */}
          <div className="mx-auto max-w-5xl flex flex-col gap-y-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminLayout;
