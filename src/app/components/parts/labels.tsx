import Badge from '../badge';
import {B, PartHolder} from '../utils';

export default function PartLabels() {
  return (
    <PartHolder
      title={
        <>
          这些关于我的<B>标签</B>，也许能给你留下一些印象？
        </>
      }
    >
      <Badge
        disabled={true}
        icon='FaTent'
        name='INTP'
        className='bg-slate-700 text-white'
      />
      <Badge
        itemProp='birthDate'
        disabled={true}
        icon='FaCakeCandles'
        name='9月14日 | 八月十五'
        className='bg-pink-700 text-white'
      />
      <Badge
        itemProp='homeLocation'
        disabled={true}
        icon='FaLocationDot'
        name='中国，上海'
        className='bg-blue-700 text-white'
      />
      <br/>
      <Badge
        itemProp='jobTitle'
        disabled={true}
        icon='FaGraduationCap'
        name='高中生'
        className='bg-gray-600 text-white'
      />

      <Badge
        disabled={true}
        icon="FaEarthAsia"
        name='ESOer'
        className='bg-green-700 text-white'
      />
      <Badge
        disabled={true}
        strikeThrough={true}
        icon='FaCat'
        name='猫娘'
        className='bg-slate-500 text-white'
      />
      <Badge
        disabled={true}
        strikeThrough={true}
        icon='FaAccessibleIcon'
        name='二次元'
        className='bg-slate-500 text-white'
      />
    </PartHolder>
  );
}
