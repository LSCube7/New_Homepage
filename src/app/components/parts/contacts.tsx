import Badge from '../badge';
import {B, PartHolder} from '../utils';

export default function PartContacts() {
  return (
    <PartHolder
      title={
        <>
          也许能通过以下方式<B>找到我</B>？
        </>
      }
    >
      <Badge
        icon='FaGithub'
        tooltip='Github'
        url='https://github.com/LSCube7'
        name='LSCube7'
        className='bg-slate-900 text-white dark:border-slate-500 dark:border'
      />
      <Badge
        icon='FaBilibili'
        tooltip='哔哩哔哩'
        url='https://space.bilibili.com/1905648956'
        name='@小方盒LSCube'
        className='bg-pink-600 text-white'
      />
      <Badge
        icon='FaZhihu'
        tooltip='知乎'
        url='https://www.zhihu.com/people/LSCube'
        name='小方盒LSCube'
        className='bg-blue-600 text-white'
      />
      <Badge
        icon='FaMusic'
        tooltip='网易云音乐'
        url='https://music.163.com/#/user/home?id=5156131231'
        name='小方盒LSCube'
        className='bg-red-600 text-white'
      />
      <Badge
        icon='FaSteamSymbol'
        tooltip='Steam'
        url='https://steamcommunity.com/id/LSC7'
        name='小方盒'
        className='bg-slate-900 text-white dark:border-slate-500 dark:border'
      />
      <Badge
        icon='FaXTwitter'
        tooltip='X'
        url='https://x.com/LSCube_owo'
        name='@LSCube_owo'
        className='bg-slate-900 text-white dark:border-slate-500 dark:border'
      />
      <Badge
        icon='FaYoutube'
        tooltip='YouTube'
        url='https://www.youtube.com/@LSC7'
        name='小方盒LSCube'
        className='bg-red-600 text-white'
      />
      <Badge
        icon='FaEnvelope'
        tooltip='邮箱'
        itemProp='email'
        url='@lscube;lsc7.top'
        className='bg-zinc-600 text-white'
      ><span className='before:content-["lscube@"]'>lsc7.top</span></Badge>
    </PartHolder>
  );
}
