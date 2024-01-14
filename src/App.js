import Random from "./Components/Random";
import Tag from "./Components/Tag";

export default function App() {
  return (
   <div className="w-full  flex flex-col background  overflow-hidden items-center ">
    <h1 className= "  bg-white rounded-lg w-11/12 text-center mt-[40px]  px-10 py-2 text-3xl font-bold">Random GIF</h1>
    <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
      <Random/>
      <Tag/>
    </div>
   </div>
  );
}
