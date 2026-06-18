import {T} from "../utils";
import Badge from "@/app/components/badge";

export default function PartSpace() {
  return <T>
    <span className='mr-1'>也欢迎来看看我的</span>
    <br></br>
    <Badge
      icon='FaBlog'
      tooltip='看看文章'
      url='https://blog.lsc7.top'
      name='小方盒の博客 ➡'
      className='bg-sky-700 text-sky-50 text-sm align-[0.1em]'
    />
    <Badge
      icon='FaLaptopCode'
      url="https://status.lsc7.top"
      name="站点监测 ➡"
      className='bg-green-700 text-sky-50 text-sm align-[0.1em]'
    />
    <Badge
      icon="FaToolbox"
      url="https://henguren.lsc7.top"
      name="恨古人工具箱 ➡"
      className='bg-purple-700 text-sky-50 text-sm align-[0.1em]'
  />
  </T>
}
