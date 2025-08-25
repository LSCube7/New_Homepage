import Badge from '../badge';
import {B, PartHolder} from '../utils';

export default function PartHobbies() {
  return (
    <PartHolder
      title={
        <>
          我的<B>兴趣爱好</B>，如果你想知道的话？
        </>
      }
    >
      <Badge
        icon='FaCube'
        tooltip='ID: xiao_fang_he'
        content='xiao_fang_he'
        name='Minecraft'
        className='bg-green-700 text-white'
      />
      <Badge
        icon='FaGamepad'
        tooltip='ID: 小方盒LSCube#LSC'
        content='小方盒LSCube#LSC'
        name='Valorant'
        className='bg-red-500 text-white'
      />

      <Badge
        icon='FaTrain'
        disabled={true}
        content='公共交通'
        name='公共交通'
        className='bg-cyan-700 text-white'
      />
      <Badge
        icon='FaHurricane'
        disabled={true}
        content='气象'
        name='气象'
        className='bg-blue-700 text-white'
      />

    </PartHolder>
  );
}
