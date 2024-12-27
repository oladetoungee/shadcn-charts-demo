import { BarComponent, AreaComponent, LineComponent, RadialComponent  } from "@/components/ui";

export default function Home() {
  return (
   <div className="space-y-6 p-12 bg-gray-100  shadow-lg"> 
<BarComponent />
<AreaComponent />
<LineComponent />
<RadialComponent />
   </div>
  );
}
