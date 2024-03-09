import Flickityn from '../components/Flickity';
import RootCategory from '../features/category/RootCategory';
import Brend from './Brend';
import Komanda from './Komanda';
import NewProducts from './NewProducts';
import Popular from './Popular';
import Premushestva from './Premushestva';
const Home = () => {

  return (
    <div className=''>
<Flickityn/>
<RootCategory />
<NewProducts/>
<Brend/>
<Popular/>
<Premushestva/>
<Komanda/>
    </div>
  )
}

export default Home