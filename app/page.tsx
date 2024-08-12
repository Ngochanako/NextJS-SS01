import Image from "next/image";
import Company from "./pages/Company";
import Button from "./components/Button";
import Header from "./layouts/Header";
import Bai10 from "./components/Bai10";
export default function Home() {
  return (
   <div>
      <h2>Bài 1:</h2>
      <h2>Họ và tên: Nguyễn Thị Ngọc</h2>
      <Company/>
      <Button/>
      <Bai10/>
   </div>
  );
}
